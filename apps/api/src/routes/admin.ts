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
