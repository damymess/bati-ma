import { Hono } from "hono"
import { db } from "../lib/db.js"
import { extractToken, verifyToken } from "../lib/jwt.js"
import { getEffectiveTier, canUnlockContact } from "../lib/subscription.js"
import { sendProjectSubmissionToAdmin, sendProjectConfirmationToClient, sendEstimationToClient } from "../lib/email.js"
import { qualifyLead, getLeadPricing } from "../lib/leads.js"

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
  const financing = (body.financing || "").trim() || null
  const architect_id = (body.architect_id || "").trim()
  const calculator_payload = body.calculator_payload || null

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

  // Qualify the lead based on data completeness
  const leadType = qualifyLead({
    client_email,
    client_phone,
    timeline,
    financing,
    architect_profile_id: architect_id || null,
  })

  const project = await db.projectRequest.create({
    data: {
      title,
      client_name,
      client_email,
      client_phone: client_phone || null,
      architect_profile_id: architect_id || null,
      lead_type: leadType,
      financing,
      calculator_payload,
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
  const isCalculator = title.startsWith("Estimation calculateur")
  Promise.all([
    sendProjectSubmissionToAdmin({ ...project, architect_name }),
    isCalculator && project.client_email
      ? sendEstimationToClient(project)
      : sendProjectConfirmationToClient(project),
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

  // HOT leads (shortlist) : exclusivité 24h pour Pro/Elite
  const pricing = getLeadPricing(demande.lead_type)
  if (pricing.exclusivityHours > 0 && !["pro", "elite", "premium"].includes(tier)) {
    const hoursOld = (Date.now() - new Date(demande.created_at).getTime()) / 3600000
    if (hoursOld < pricing.exclusivityHours) {
      return c.json(
        {
          message: `Ce lead qualifié est en exclusivité Pro/Elite pendant ${Math.ceil(
            pricing.exclusivityHours - hoursOld
          )}h. Passez Pro pour y accéder immédiatement.`,
          unlock_available_at: new Date(
            new Date(demande.created_at).getTime() + pricing.exclusivityHours * 3600000
          ),
        },
        403
      )
    }
  }

  // Limite d'achat du lead (max_architects_can_buy)
  const purchaseCount = await db.leadPurchase.count({
    where: { project_request_id: demande.id },
  })
  if (purchaseCount >= pricing.maxArchitectsCanBuy) {
    return c.json(
      { message: "Ce lead a déjà été attribué au nombre maximum d'architectes" },
      403
    )
  }

  // Create unlock record + LeadPurchase
  await db.contactUnlock.create({
    data: {
      architect_profile_id: payload.id,
      project_request_id: demande.id,
    },
  })

  await db.leadPurchase.create({
    data: {
      architect_profile_id: payload.id,
      project_request_id: demande.id,
      lead_type: demande.lead_type,
      credits_spent: pricing.creditsRequired,
      price_paid_mad: pricing.priceMad,
    },
  })

  // Re-read & increment (race condition mitigation)
  const fresh = await db.architectProfile.findUnique({ where: { id: payload.id } })
  await db.architectProfile.update({
    where: { id: payload.id },
    data: { contacts_used_this_month: (fresh?.contacts_used_this_month ?? 0) + pricing.creditsRequired },
  })

  return c.json({
    client_name: demande.client_name,
    client_email: demande.client_email,
    client_phone: demande.client_phone,
    already_unlocked: false,
    lead_type: demande.lead_type,
    credits_spent: pricing.creditsRequired,
  })
})

// ─── Upgrade lead (ajout phone/timing/financing sur un lead cold) ───────────
// Appelé par le calculateur à l'étape "phone gate" pour upgrader cold → hot
projects.post("/project-requests/:id/upgrade", async (c) => {
  const id = c.req.param("id")
  const body = await c.req.json()

  const client_phone = (body.client_phone || "").trim()
  const timeline = (body.timeline || "").trim()
  const financing = (body.financing || "").trim() || null

  const project = await db.projectRequest.findUnique({ where: { id } })
  if (!project) return c.json({ message: "Projet introuvable" }, 404)
  if (project.deleted_at) return c.json({ message: "Projet supprimé" }, 410)

  // Sécurité : on autorise l'upgrade uniquement dans les 30min après création
  const ageMinutes = (Date.now() - new Date(project.created_at).getTime()) / 60000
  if (ageMinutes > 30) {
    return c.json({ message: "Délai d'upgrade expiré. Soumettez une nouvelle demande." }, 403)
  }

  if (client_phone && !PHONE_RE.test(client_phone)) {
    return c.json({ message: "Format téléphone invalide" }, 400)
  }

  const newLeadType = qualifyLead({
    client_email: project.client_email,
    client_phone: client_phone || project.client_phone,
    timeline: timeline || project.timeline,
    financing: financing || project.financing,
    architect_profile_id: project.architect_profile_id,
  })

  const updated = await db.projectRequest.update({
    where: { id },
    data: {
      client_phone: client_phone || project.client_phone,
      timeline: timeline || project.timeline,
      financing: financing || project.financing,
      lead_type: newLeadType,
      status: newLeadType === "hot" ? "submitted" : project.status, // hot = ready to send
    },
  })

  // Si le lead est monté à "hot", notifier les 3 meilleurs architectes de la ville
  if (newLeadType === "hot" && project.lead_type !== "hot") {
    sendProjectSubmissionToAdmin({ ...updated, architect_name: null }).catch((e) =>
      console.error("[email]", e)
    )
  }

  return c.json({ project: updated, lead_type: newLeadType })
})

// ─── Lead pricing info (pour affichage côté architecte) ─────────────────────
projects.get("/lead-pricing", async (c) => {
  return c.json({ pricing: getLeadPricing("cold"), all: { cold: getLeadPricing("cold"), warm: getLeadPricing("warm"), hot: getLeadPricing("hot"), exclusive: getLeadPricing("exclusive") } })
})

// ─── Verification (public) ──────────────────────────────────────────────────
// Le client clique sur le lien reçu par email pour confirmer/corriger ses infos.
// Token valable 14 jours, single-use.

const TOKEN_VALIDITY_MS = 14 * 24 * 3600 * 1000

projects.get("/project-requests/verify/:token", async (c) => {
  const token = c.req.param("token")
  if (!token || token.length < 16) return c.json({ message: "Lien invalide" }, 400)

  const project = await db.projectRequest.findUnique({ where: { verification_token: token } })
  if (!project || project.deleted_at) return c.json({ message: "Lien introuvable" }, 404)
  if (project.verification_responded_at) return c.json({ message: "Ce lien a déjà été utilisé." }, 410)
  if (!project.verification_sent_at) return c.json({ message: "Lien invalide" }, 400)

  const age = Date.now() - new Date(project.verification_sent_at).getTime()
  if (age > TOKEN_VALIDITY_MS) return c.json({ message: "Ce lien a expiré (plus de 14 jours)." }, 410)

  return c.json({
    project: {
      id: project.id,
      title: project.title,
      description: project.description,
      client_name: project.client_name,
      client_email: project.client_email,
      client_phone: project.client_phone,
      location: project.location,
      project_type: project.project_type,
      budget_min: project.budget_min,
      budget_max: project.budget_max,
      timeline: project.timeline,
    },
  })
})

projects.post("/project-requests/verify/:token", async (c) => {
  const token = c.req.param("token")
  if (!token || token.length < 16) return c.json({ message: "Lien invalide" }, 400)

  const body = await c.req.json()

  const project = await db.projectRequest.findUnique({ where: { verification_token: token } })
  if (!project || project.deleted_at) return c.json({ message: "Lien introuvable" }, 404)
  if (project.verification_responded_at) return c.json({ message: "Ce lien a déjà été utilisé." }, 410)
  if (!project.verification_sent_at) return c.json({ message: "Lien invalide" }, 400)

  const age = Date.now() - new Date(project.verification_sent_at).getTime()
  if (age > TOKEN_VALIDITY_MS) return c.json({ message: "Ce lien a expiré." }, 410)

  // Champs éditables uniquement
  const client_name = typeof body.client_name === "string" ? body.client_name.trim() : project.client_name
  const client_phone = typeof body.client_phone === "string" ? body.client_phone.trim() : project.client_phone
  const description = typeof body.description === "string" ? body.description.trim() : project.description
  const budget_min = body.budget_min != null ? Number(body.budget_min) || null : project.budget_min
  const budget_max = body.budget_max != null ? Number(body.budget_max) || null : project.budget_max
  const timeline = typeof body.timeline === "string" ? body.timeline.trim() : project.timeline
  const financing = typeof body.financing === "string" ? body.financing.trim() : project.financing

  if (client_phone && !PHONE_RE.test(client_phone)) {
    return c.json({ message: "Format téléphone invalide" }, 400)
  }

  // Re-qualifier le lead après correction
  const newLeadType = qualifyLead({
    client_email: project.client_email,
    client_phone: client_phone || null,
    timeline: timeline || null,
    financing: financing || null,
    architect_profile_id: project.architect_profile_id,
  })

  const updated = await db.projectRequest.update({
    where: { id: project.id },
    data: {
      client_name: client_name || project.client_name,
      client_phone: client_phone || project.client_phone,
      description: description || project.description,
      budget_min,
      budget_max,
      timeline: timeline || project.timeline,
      financing: financing || project.financing,
      lead_type: newLeadType,
      status: "verified",
      verification_responded_at: new Date(),
      verification_token: null, // invalide le token (single-use)
    },
  })

  return c.json({ success: true, project: { id: updated.id } })
})
