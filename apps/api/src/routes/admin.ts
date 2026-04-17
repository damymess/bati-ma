import { Hono } from "hono"
import { db } from "../lib/db.js"
import { sanitizeArchitect } from "../lib/subscription.js"

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

  const updated = await db.projectRequest.update({
    where: { id: c.req.param("id") },
    data: updates,
  })
  return c.json({ project_request: updated })
})

// ─── Hard DELETE (irréversible) ─────────────────────────────────────────────
admin.delete("/project-requests/:id", async (c) => {
  const id = c.req.param("id")

  // Supprimer les relations (pas de ON DELETE CASCADE dans le schema)
  await db.$transaction(async (tx) => {
    await tx.contactUnlock.deleteMany({ where: { project_request_id: id } })
    await tx.leadPurchase.deleteMany({ where: { project_request_id: id } })
    await tx.projectRequest.delete({ where: { id } })
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

  const updated = await db.projectRequest.update({
    where: { id },
    data,
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

  return c.json({ sent: true, token })
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
