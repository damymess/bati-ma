import { Hono } from "hono"
import { db } from "../lib/db.js"
import { sanitizeArchitect } from "../lib/subscription.js"
import { logAdminAction, getEntityAuditLog } from "../lib/audit.js"

const VALID_STATUSES = ["submitted", "viewed", "quoted", "accepted", "rejected", "completed"]

export const admin = new Hono()

// ─── Project Requests ───────────────────────────────────────────────────────

admin.get("/project-requests", async (c) => {
  const status = c.req.query("status")
  const limit = Math.min(Number(c.req.query("limit")) || 50, 100)
  const offset = Number(c.req.query("offset")) || 0

  const where: any = { deleted_at: null }
  if (status && status !== "all") where.status = status

  const [requests, total] = await Promise.all([
    db.projectRequest.findMany({
      where,
      orderBy: { created_at: "desc" },
      take: limit,
      skip: offset,
    }),
    db.projectRequest.count({ where }),
  ])

  return c.json({ project_requests: requests, count: total, limit, offset })
})

admin.get("/project-requests/:id", async (c) => {
  const project = await db.projectRequest.findUnique({
    where: { id: c.req.param("id") },
  })
  if (!project) return c.json({ message: "Projet non trouvé" }, 404)
  return c.json({ project_request: project })
})

admin.post("/project-requests/:id", async (c) => {
  const body = await c.req.json()
  const updates: Record<string, unknown> = {}

  if (body.status) {
    if (!VALID_STATUSES.includes(body.status)) {
      return c.json({ message: `Statut invalide. Valeurs : ${VALID_STATUSES.join(", ")}` }, 400)
    }
    updates.status = body.status
  }
  if (body.architect_response !== undefined) updates.architect_response = body.architect_response
  if (body.proposed_fee !== undefined) updates.proposed_fee = Number(body.proposed_fee)
  if (body.project_type !== undefined) updates.project_type = body.project_type
  if (body.title !== undefined) updates.title = body.title
  if (body.description !== undefined) updates.description = body.description
  if (body.location !== undefined) updates.location = body.location

  if (Object.keys(updates).length === 0) {
    return c.json({ message: "Aucune modification fournie" }, 400)
  }

  const before = await db.projectRequest.findUnique({ where: { id: c.req.param("id") } })
  const updated = await db.projectRequest.update({
    where: { id: c.req.param("id") },
    data: updates,
  })

  await logAdminAction({
    entity_type: "project_request",
    entity_id: updated.id,
    action: "status_change",
    actor_email: c.req.header("x-admin-email") || "contact@bati.ma",
    diff: { before: before || undefined, after: updates },
  })

  return c.json({ project_request: updated })
})

// ─── Hard DELETE (irréversible) ─────────────────────────────────────────────
admin.delete("/project-requests/:id", async (c) => {
  const id = c.req.param("id")

  const before = await db.projectRequest.findUnique({ where: { id } })

  // Supprimer les relations (pas de ON DELETE CASCADE dans le schema)
  await db.$transaction(async (tx) => {
    await tx.contactUnlock.deleteMany({ where: { project_request_id: id } })
    await tx.leadPurchase.deleteMany({ where: { project_request_id: id } })
    await tx.projectRequest.delete({ where: { id } })
  })

  await logAdminAction({
    entity_type: "project_request",
    entity_id: id,
    action: "delete",
    actor_email: c.req.header("x-admin-email") || "contact@bati.ma",
    diff: { before: before || undefined },
  })

  return c.json({ deleted: true, id })
})

// ─── Admin note + status update ─────────────────────────────────────────────
admin.post("/project-requests/:id/note", async (c) => {
  const id = c.req.param("id")
  const body = await c.req.json()

  const data: Record<string, unknown> = {}
  if (typeof body.admin_note === "string") data.admin_note = body.admin_note.slice(0, 2000)
  if (typeof body.status === "string" && ["submitted", "viewed", "quoted", "accepted", "rejected", "completed", "to_verify", "verified", "invalid"].includes(body.status)) {
    data.status = body.status
  }

  if (Object.keys(data).length === 0) {
    return c.json({ message: "Aucune modification fournie" }, 400)
  }

  const before = await db.projectRequest.findUnique({ where: { id } })
  const updated = await db.projectRequest.update({
    where: { id },
    data,
  })

  await logAdminAction({
    entity_type: "project_request",
    entity_id: id,
    action: "note_update",
    actor_email: c.req.header("x-admin-email") || "contact@bati.ma",
    diff: { before: before || undefined, after: data },
  })

  return c.json({ project_request: updated })
})

// ─── Request client verification (envoi email avec lien unique) ─────────────
admin.post("/project-requests/:id/request-verification", async (c) => {
  const id = c.req.param("id")

  const project = await db.projectRequest.findUnique({ where: { id } })
  if (!project) return c.json({ message: "Projet introuvable" }, 404)
  if (!project.client_email) return c.json({ message: "Pas d'email client" }, 400)

  // Generate random token (crypto random)
  const { randomBytes } = await import("crypto")
  const token = randomBytes(24).toString("hex")

  const updated = await db.projectRequest.update({
    where: { id },
    data: {
      verification_token: token,
      verification_sent_at: new Date(),
      verification_responded_at: null,
      status: "to_verify",
    },
  })

  // Envoi email (imported lazily pour éviter circular)
  const { sendVerificationEmailToClient } = await import("../lib/email.js")
  await sendVerificationEmailToClient(updated, token)

  await logAdminAction({
    entity_type: "project_request",
    entity_id: id,
    action: "verify_request",
    actor_email: c.req.header("x-admin-email") || "contact@bati.ma",
    diff: { after: { email_sent_to: project.client_email } },
  })

  return c.json({ sent: true, token })
})

// ─── Get audit log for a project ────────────────────────────────────────────
admin.get("/project-requests/:id/audit-log", async (c) => {
  const id = c.req.param("id")
  const logs = await getEntityAuditLog("project_request", id, 50)
  return c.json({ logs })
})

// ─── Architects registered only (password_hash != null) ────────────────────
admin.get("/architects/registered", async (c) => {
  const list = await db.architectProfile.findMany({
    where: { deleted_at: null, password_hash: { not: null } },
    orderBy: { created_at: "desc" },
  })

  const { computeProfileCompletion } = await import("../lib/architect-completion.js")
  const enriched = list.map((a) => {
    const completion = computeProfileCompletion(a as any)
    return {
      ...sanitizeArchitect(a),
      completion_percent: completion.percent,
      is_public: completion.isPublic,
      is_complete: completion.isComplete,
      missing_count: completion.missing.length,
    }
  })

  return c.json({ architects: enriched, count: enriched.length })
})

// Admin : relance manuelle d'un architecte inactif
admin.post("/architects/:id/send-reactivation", async (c) => {
  const id = c.req.param("id")
  const a = await db.architectProfile.findUnique({ where: { id } })
  if (!a) return c.json({ message: "Architecte introuvable" }, 404)

  const { computeProfileCompletion } = await import("../lib/architect-completion.js")
  const { sendArchitectReactivationEmail } = await import("../lib/email.js")

  const completion = computeProfileCompletion(a as any)
  await sendArchitectReactivationEmail({
    name: a.name,
    email: a.email,
    completion_percent: completion.percent,
    missing_fields: completion.missing,
  })

  await logAdminAction({
    entity_type: "architect",
    entity_id: id,
    action: "manual_reactivation",
    actor_email: c.req.header("x-admin-email") || "contact@bati.ma",
  })

  return c.json({ sent: true, email: a.email })
})

// ─── Architects ─────────────────────────────────────────────────────────────

admin.get("/architects", async (c) => {
  const architects = await db.architectProfile.findMany({
    where: { deleted_at: null },
    orderBy: { created_at: "desc" },
  })
  return c.json({ architects: architects.map(sanitizeArchitect), count: architects.length })
})

admin.get("/architects/:id", async (c) => {
  const architect = await db.architectProfile.findUnique({
    where: { id: c.req.param("id") },
  })
  if (!architect) return c.json({ message: "Architecte non trouvé" }, 404)
  return c.json({ architect: sanitizeArchitect(architect) })
})

admin.post("/architects/:id", async (c) => {
  const body = await c.req.json()
  const architect = await db.architectProfile.update({
    where: { id: c.req.param("id") },
    data: body,
  })
  return c.json({ architect: sanitizeArchitect(architect) })
})

admin.put("/architects/:id/subscription", async (c) => {
  const { tier, expires_at } = await c.req.json()
  const TIER_LIMITS: Record<string, number> = { free: 0, standard: 5, premium: 9999 }

  const architect = await db.architectProfile.update({
    where: { id: c.req.param("id") },
    data: {
      subscription_tier: tier,
      subscription_expires_at: expires_at ? new Date(expires_at) : null,
      contacts_limit: TIER_LIMITS[tier] ?? 0,
    },
  })
  return c.json({ architect: sanitizeArchitect(architect) })
})

// ─── Admin stats (dashboard + sidebar badges) ───────────────────────────────
admin.get("/stats", async (c) => {
  const [
    leadsTotal,
    leadsHot,
    leadsWarm,
    leadsToVerify,
    leadsSubmitted,
    reviewsPending,
    verificationsPending,
    architectsTotal,
  ] = await Promise.all([
    db.projectRequest.count({ where: { deleted_at: null } }),
    db.projectRequest.count({ where: { deleted_at: null, lead_type: "hot" } }),
    db.projectRequest.count({ where: { deleted_at: null, lead_type: "warm" } }),
    db.projectRequest.count({ where: { deleted_at: null, status: "to_verify" } }),
    db.projectRequest.count({ where: { deleted_at: null, status: "submitted" } }),
    db.review.count({ where: { deleted_at: null, status: "pending" } }),
    db.verificationDocument.count({ where: { status: "pending" } }),
    db.architectProfile.count({ where: { deleted_at: null, is_active: true } }),
  ])

  // Activité 7 derniers jours
  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 3600 * 1000)
  const leadsLast7Days = await db.projectRequest.count({
    where: { deleted_at: null, created_at: { gte: sevenDaysAgo } },
  })

  return c.json({
    leads: {
      total: leadsTotal,
      hot: leadsHot,
      warm: leadsWarm,
      submitted: leadsSubmitted,
      to_verify: leadsToVerify,
      last_7_days: leadsLast7Days,
    },
    reviews_pending: reviewsPending,
    verifications_pending: verificationsPending,
    architects_total: architectsTotal,
  })
})

// ─── CSV export (pipeline leads) ────────────────────────────────────────────
admin.get("/project-requests/export/csv", async (c) => {
  const status = c.req.query("status")
  const lead_type = c.req.query("lead_type")

  const where: any = { deleted_at: null }
  if (status && status !== "all") where.status = status
  if (lead_type && lead_type !== "all") where.lead_type = lead_type

  const list = await db.projectRequest.findMany({
    where,
    orderBy: { created_at: "desc" },
  })

  // Helpers pour CSV safe
  const escape = (v: unknown): string => {
    if (v === null || v === undefined) return ""
    const s = String(v).replace(/"/g, '""')
    return /[",\n]/.test(s) ? `"${s}"` : s
  }

  const headers = [
    "id",
    "created_at",
    "status",
    "lead_type",
    "client_name",
    "client_email",
    "client_phone",
    "project_type",
    "title",
    "location",
    "budget_min",
    "budget_max",
    "timeline",
    "financing",
    "description",
    "source",
    "admin_note",
  ]

  const rows = list.map((p) =>
    [
      p.id,
      p.created_at.toISOString(),
      p.status,
      p.lead_type,
      p.client_name,
      p.client_email,
      p.client_phone || "",
      p.project_type,
      p.title,
      p.location,
      p.budget_min || "",
      p.budget_max || "",
      p.timeline || "",
      p.financing || "",
      p.description,
      p.source,
      p.admin_note || "",
    ]
      .map(escape)
      .join(","),
  )

  // BOM UTF-8 pour Excel FR
  const csv = "\uFEFF" + [headers.join(","), ...rows].join("\n")

  return new Response(csv, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="leads-${new Date().toISOString().slice(0, 10)}.csv"`,
    },
  })
})

// ─── Admin global search ────────────────────────────────────────────────────
admin.get("/search", async (c) => {
  const q = (c.req.query("q") || "").trim()
  if (q.length < 2) {
    return c.json({ leads: [], architects: [], reviews: [] })
  }

  const like = { contains: q, mode: "insensitive" as const }

  const [leads, architects, reviews] = await Promise.all([
    db.projectRequest.findMany({
      where: {
        deleted_at: null,
        OR: [
          { client_name: like },
          { client_email: like },
          { title: like },
          { location: like },
          { client_phone: like },
        ],
      },
      take: 10,
      orderBy: { created_at: "desc" },
      select: {
        id: true,
        title: true,
        client_name: true,
        client_email: true,
        location: true,
        lead_type: true,
        status: true,
        created_at: true,
      },
    }),
    db.architectProfile.findMany({
      where: {
        deleted_at: null,
        OR: [{ name: like }, { email: like }, { phone: like }],
      },
      take: 10,
      orderBy: { rating: "desc" },
      select: {
        id: true,
        name: true,
        email: true,
        subscription_tier: true,
        verified: true,
        rating: true,
      },
    }),
    db.review.findMany({
      where: {
        deleted_at: null,
        OR: [{ client_name: like }, { client_email: like }, { title: like }],
      },
      take: 10,
      orderBy: { created_at: "desc" },
      select: {
        id: true,
        client_name: true,
        client_email: true,
        architect_profile_id: true,
        rating: true,
        title: true,
        status: true,
        created_at: true,
      },
    }),
  ])

  return c.json({ leads, architects, reviews })
})

// ─── Appels d'offres ────────────────────────────────────────────────────────

admin.get("/appels-offres", async (c) => {
  const list = await db.appelOffre.findMany({
    where: { deleted_at: null },
    orderBy: { created_at: "desc" },
  })
  return c.json({ appels_offres: list, count: list.length })
})

admin.post("/appels-offres", async (c) => {
  const body = await c.req.json()
  if (!body.title || !body.organism || !body.city || !body.deadline) {
    return c.json({ message: "Champs requis : title, organism, city, deadline" }, 400)
  }
  const item = await db.appelOffre.create({ data: body })
  return c.json({ appel_offre: item }, 201)
})

admin.get("/appels-offres/:id", async (c) => {
  const item = await db.appelOffre.findUnique({ where: { id: c.req.param("id") } })
  if (!item) return c.json({ message: "Non trouvé" }, 404)
  return c.json({ appel_offre: item })
})

admin.post("/appels-offres/:id", async (c) => {
  const body = await c.req.json()
  const item = await db.appelOffre.update({
    where: { id: c.req.param("id") },
    data: body,
  })
  return c.json({ appel_offre: item })
})

admin.delete("/appels-offres/:id", async (c) => {
  await db.appelOffre.delete({ where: { id: c.req.param("id") } })
  return c.json({ deleted: true })
})
