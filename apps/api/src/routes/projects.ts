import { Hono } from "hono"
import { db } from "../lib/db.js"
import { extractToken, verifyToken } from "../lib/jwt.js"
import { getEffectiveTier, canUnlockContact } from "../lib/subscription.js"
import { sendProjectSubmissionToAdmin, sendProjectConfirmationToClient } from "../lib/email.js"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const projects = new Hono()

// ─── Submit project request ─────────────────────────────────────────────────
const PHONE_RE = /^\+?[\d\s\-()]{7,15}$/

projects.post("/project-requests", async (c) => {
  const body = await c.req.json()

  // Trim all text fields
  const title = (body.title || "").trim()
  const client_name = (body.client_name || "").trim()
  const client_email = (body.client_email || "").trim()
  const client_phone = (body.client_phone || "").trim()
  const description = (body.description || "").trim()
  const project_type = (body.project_type || "").trim()
  const location = (body.location || "").trim()
  const address = (body.address || "").trim()
  const timeline = (body.timeline || "").trim()
  const architect_id = (body.architect_id || "").trim()

  if (!title || !client_name || !project_type || !location) {
    return c.json({ message: "Champs requis : title, client_name, project_type, location" }, 400)
  }
  if (!client_email && !client_phone) {
    return c.json({ message: "Email ou téléphone requis" }, 400)
  }
  if (client_email && !EMAIL_RE.test(client_email)) {
    return c.json({ message: "Format email invalide" }, 400)
  }
  if (client_phone && !PHONE_RE.test(client_phone)) {
    return c.json({ message: "Format téléphone invalide" }, 400)
  }

  // Resolve architect name if targeting a specific architect
  let architect_name: string | null = null
  if (architect_id) {
    const arch = await db.architectProfile.findUnique({ where: { id: architect_id }, select: { name: true } })
    architect_name = arch?.name || null
  }

  const project = await db.projectRequest.create({
    data: {
      title,
      client_name,
      client_email,
      client_phone: client_phone || null,
      architect_profile_id: architect_id || null,
      description,
      project_type,
      location,
      address: address || null,
      budget_min: body.budget_min ? Number(body.budget_min) : null,
      budget_max: body.budget_max ? Number(body.budget_max) : null,
      timeline: timeline || null,
      is_public: true,
      status: "submitted",
      source: "website",
    },
  })

  // Async emails — don't block response
  Promise.all([
    sendProjectSubmissionToAdmin({ ...project, architect_name }),
    sendProjectConfirmationToClient(project),
  ]).catch((e) => console.error("[email]", e))

  return c.json({ project_request: project }, 201)
})

// ─── List public projects ───────────────────────────────────────────────────
projects.get("/projects", async (c) => {
  const city = c.req.query("city")
  const projectType = c.req.query("project_type")
  const status = c.req.query("status")

  const where: any = { is_public: true, deleted_at: null }
  if (city) where.location = city
  if (projectType) where.project_type = projectType
  if (status) where.status = status

  const list = await db.projectRequest.findMany({
    where,
    orderBy: { created_at: "desc" },
  })

  return c.json({ projects: list, count: list.length })
})

// ─── Demandes de devis (list) ───────────────────────────────────────────────
projects.get("/demandes-devis", async (c) => {
  const city = c.req.query("city")
  const projectType = c.req.query("project_type")

  const where: any = { is_public: true, deleted_at: null }
  if (city) where.location = city
  if (projectType) where.project_type = projectType

  let demandes = await db.projectRequest.findMany({
    where,
    orderBy: { created_at: "desc" },
  })

  // Budget range filtering
  const budgetMin = Number(c.req.query("budget_min")) || 0
  const budgetMax = Number(c.req.query("budget_max")) || 0
  if (budgetMin) demandes = demandes.filter((d) => (d.budget_max ?? 0) >= budgetMin)
  if (budgetMax) demandes = demandes.filter((d) => (d.budget_min ?? Infinity) <= budgetMax)

  // Check auth for unlock status
  let tier: string | null = null
  let unlockedIds = new Set<string>()

  const token = extractToken(c.req.header("Authorization"))
  if (token) {
    const payload = verifyToken(token)
    if (payload?.role === "architect") {
      const architect = await db.architectProfile.findUnique({ where: { id: payload.id } })
      if (architect) {
        tier = getEffectiveTier(architect)
        const unlocks = await db.contactUnlock.findMany({
          where: { architect_profile_id: payload.id },
          select: { project_request_id: true },
        })
        unlockedIds = new Set(unlocks.map((u) => u.project_request_id))
      }
    }
  }

  // If architect is logged in, show all contacts (free access model)
  const isArchitect = !!tier

  const result = demandes.map((d) => {
    const unlocked = isArchitect || unlockedIds.has(d.id)
    return {
      ...d,
      contact_locked: !unlocked,
      client_name: unlocked ? d.client_name : undefined,
      client_email: unlocked ? d.client_email : undefined,
      client_phone: unlocked ? d.client_phone : undefined,
    }
  })

  return c.json({ demandes: result, count: result.length, subscription_tier: tier })
})

// ─── Demande detail ─────────────────────────────────────────────────────────
projects.get("/demandes-devis/:id", async (c) => {
  const demande = await db.projectRequest.findFirst({
    where: { id: c.req.param("id"), is_public: true, deleted_at: null },
  })
  if (!demande) return c.json({ message: "Demande non trouvée" }, 404)

  let alreadyUnlocked = false
  let tier: string | null = null
  let canUnlock = false

  const token = extractToken(c.req.header("Authorization"))
  if (token) {
    const payload = verifyToken(token)
    if (payload?.role === "architect") {
      const architect = await db.architectProfile.findUnique({ where: { id: payload.id } })
      if (architect) {
        tier = getEffectiveTier(architect)
        const unlock = await db.contactUnlock.findUnique({
          where: {
            architect_profile_id_project_request_id: {
              architect_profile_id: payload.id,
              project_request_id: demande.id,
            },
          },
        })
        alreadyUnlocked = !!unlock
        canUnlock = !alreadyUnlocked && canUnlockContact(architect)
      }
    }
  }

  // Architect logged in = free access to contacts
  const isArchitect = !!tier
  const contactVisible = isArchitect || alreadyUnlocked

  const result = {
    ...demande,
    contact_locked: !contactVisible,
    client_name: contactVisible ? demande.client_name : undefined,
    client_email: contactVisible ? demande.client_email : undefined,
    client_phone: contactVisible ? demande.client_phone : undefined,
  }

  return c.json({ demande: result, already_unlocked: alreadyUnlocked, subscription_tier: tier, can_unlock: canUnlock })
})

// ─── Unlock contact ─────────────────────────────────────────────────────────
projects.post("/demandes-devis/:id/contact", async (c) => {
  const token = extractToken(c.req.header("Authorization"))
  if (!token) return c.json({ message: "Token manquant" }, 401)

  const payload = verifyToken(token)
  if (!payload || payload.role !== "architect") {
    return c.json({ message: "Accès réservé aux architectes" }, 401)
  }

  const demande = await db.projectRequest.findFirst({
    where: { id: c.req.param("id"), is_public: true, deleted_at: null },
  })
  if (!demande) return c.json({ message: "Demande non trouvée" }, 404)

  const architect = await db.architectProfile.findUnique({ where: { id: payload.id } })
  if (!architect) return c.json({ message: "Profil non trouvé" }, 404)

  const tier = getEffectiveTier(architect)
  if (tier === "free") {
    return c.json({ message: "Un abonnement est requis pour débloquer les contacts" }, 403)
  }

  // Idempotent check
  const existing = await db.contactUnlock.findUnique({
    where: {
      architect_profile_id_project_request_id: {
        architect_profile_id: payload.id,
        project_request_id: demande.id,
      },
    },
  })
  if (existing) {
    return c.json({
      client_name: demande.client_name,
      client_email: demande.client_email,
      client_phone: demande.client_phone,
      already_unlocked: true,
    })
  }

  // Lazy monthly reset
  const resetAt = architect.contacts_reset_at ? new Date(architect.contacts_reset_at) : null
  const now = new Date()
  if (!resetAt || resetAt.getMonth() !== now.getMonth() || resetAt.getFullYear() !== now.getFullYear()) {
    await db.architectProfile.update({
      where: { id: payload.id },
      data: { contacts_used_this_month: 0, contacts_reset_at: now },
    })
    architect.contacts_used_this_month = 0
  }

  if (!canUnlockContact(architect)) {
    return c.json({ message: "Limite mensuelle de contacts atteinte" }, 403)
  }

  // Create unlock record
  await db.contactUnlock.create({
    data: {
      architect_profile_id: payload.id,
      project_request_id: demande.id,
    },
  })

  // Re-read & increment (race condition mitigation)
  const fresh = await db.architectProfile.findUnique({ where: { id: payload.id } })
  await db.architectProfile.update({
    where: { id: payload.id },
    data: { contacts_used_this_month: (fresh?.contacts_used_this_month ?? 0) + 1 },
  })

  return c.json({
    client_name: demande.client_name,
    client_email: demande.client_email,
    client_phone: demande.client_phone,
    already_unlocked: false,
  })
})
