import { Hono } from "hono"
import { db } from "../lib/db.js"
import { extractToken, verifyToken } from "../lib/jwt.js"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const reviews = new Hono()

// ─── Submit review (public — client peut soumettre sans compte) ─────────────
reviews.post("/", async (c) => {
  const body = await c.req.json()

  const architect_profile_id = (body.architect_profile_id || "").trim()
  const project_request_id = (body.project_request_id || "").trim() || null
  const client_name = (body.client_name || "").trim()
  const client_email = (body.client_email || "").trim()
  const rating = Number(body.rating)
  const title = (body.title || "").trim() || null
  const comment = (body.comment || "").trim()
  const photos: string[] = Array.isArray(body.photos) ? body.photos.slice(0, 6) : []

  if (!architect_profile_id) return c.json({ message: "architect_profile_id requis" }, 400)
  if (!client_name) return c.json({ message: "Nom requis" }, 400)
  if (!client_email || !EMAIL_RE.test(client_email)) return c.json({ message: "Email invalide" }, 400)
  if (!rating || rating < 1 || rating > 5) return c.json({ message: "Note entre 1 et 5 requise" }, 400)
  if (!comment || comment.length < 20) return c.json({ message: "Commentaire trop court (min 20 caractères)" }, 400)
  if (comment.length > 2000) return c.json({ message: "Commentaire trop long (max 2000 caractères)" }, 400)

  // Vérifier que l'architecte existe
  const architect = await db.architectProfile.findUnique({
    where: { id: architect_profile_id, deleted_at: null },
  })
  if (!architect) return c.json({ message: "Architecte introuvable" }, 404)

  // Si project_request_id fourni, vérifier qu'il existe et que le client a bien contacté cet archi
  let isVerified = false
  if (project_request_id) {
    const project = await db.projectRequest.findUnique({
      where: { id: project_request_id },
    })
    if (project && project.client_email === client_email) {
      // Le projet est lié à ce client ET cet architecte (ou l'archi a débloqué le contact)
      const unlock = await db.contactUnlock.findUnique({
        where: {
          architect_profile_id_project_request_id: {
            architect_profile_id,
            project_request_id,
          },
        },
      })
      if (project.architect_profile_id === architect_profile_id || unlock) {
        isVerified = true
      }
    }
  }

  // Anti-spam basique : pas plus d'1 avis par email/architecte en 30 jours
  const recentDuplicate = await db.review.findFirst({
    where: {
      architect_profile_id,
      client_email,
      created_at: { gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) },
    },
  })
  if (recentDuplicate) {
    return c.json(
      {
        message: "Vous avez déjà laissé un avis pour cet architecte ce mois-ci.",
      },
      409
    )
  }

  const review = await db.review.create({
    data: {
      architect_profile_id,
      project_request_id,
      client_name,
      client_email,
      rating,
      title,
      comment,
      photos,
      is_verified: isVerified,
      status: "pending", // modération admin obligatoire
    },
  })

  return c.json(
    {
      review: { id: review.id, status: review.status },
      message:
        "Merci ! Votre avis a été envoyé et sera publié après modération (sous 48h).",
    },
    201
  )
})

// ─── List approved reviews for an architect (public) ────────────────────────
reviews.get("/architect/:id", async (c) => {
  const architectId = c.req.param("id")
  const limit = Math.min(Number(c.req.query("limit")) || 20, 100)

  const list = await db.review.findMany({
    where: {
      architect_profile_id: architectId,
      status: "approved",
      deleted_at: null,
    },
    orderBy: { created_at: "desc" },
    take: limit,
    select: {
      id: true,
      client_name: true,
      rating: true,
      title: true,
      comment: true,
      photos: true,
      is_verified: true,
      created_at: true,
    },
  })

  // Compute aggregate
  const approved = await db.review.findMany({
    where: {
      architect_profile_id: architectId,
      status: "approved",
      deleted_at: null,
    },
    select: { rating: true },
  })
  const avg =
    approved.length > 0
      ? approved.reduce((s, r) => s + r.rating, 0) / approved.length
      : 0

  return c.json({
    reviews: list,
    count: approved.length,
    average_rating: Math.round(avg * 10) / 10,
    distribution: {
      5: approved.filter((r) => r.rating === 5).length,
      4: approved.filter((r) => r.rating === 4).length,
      3: approved.filter((r) => r.rating === 3).length,
      2: approved.filter((r) => r.rating === 2).length,
      1: approved.filter((r) => r.rating === 1).length,
    },
  })
})

// ─── Admin: list all reviews with filters ───────────────────────────────────
reviews.get("/admin", async (c) => {
  const status = c.req.query("status") || "pending"
  const limit = Math.min(Number(c.req.query("limit")) || 50, 200)
  const offset = Number(c.req.query("offset")) || 0

  const [list, total] = await Promise.all([
    db.review.findMany({
      where: { status, deleted_at: null },
      orderBy: { created_at: "desc" },
      take: limit,
      skip: offset,
    }),
    db.review.count({ where: { status, deleted_at: null } }),
  ])

  // Enrichir avec le nom architecte
  const archIds = [...new Set(list.map((r) => r.architect_profile_id))]
  const archs = await db.architectProfile.findMany({
    where: { id: { in: archIds } },
    select: { id: true, name: true },
  })
  const archMap = new Map(archs.map((a) => [a.id, a.name]))

  return c.json({
    reviews: list.map((r) => ({ ...r, architect_name: archMap.get(r.architect_profile_id) })),
    count: total,
    limit,
    offset,
  })
})

// ─── Admin: moderate review (approve / reject) ──────────────────────────────
reviews.post("/admin/:id", async (c) => {
  const id = c.req.param("id")
  const body = await c.req.json()
  const action = body.action // "approve" | "reject"
  const admin_note = body.admin_note || null

  if (!["approve", "reject"].includes(action)) {
    return c.json({ message: "Action invalide" }, 400)
  }

  const newStatus = action === "approve" ? "approved" : "rejected"
  const review = await db.review.update({
    where: { id },
    data: { status: newStatus, admin_note },
  })

  // Si approuvé, recalculer le rating moyen de l'architecte
  if (newStatus === "approved") {
    const approved = await db.review.findMany({
      where: { architect_profile_id: review.architect_profile_id, status: "approved" },
      select: { rating: true },
    })
    const avg = approved.reduce((s, r) => s + r.rating, 0) / approved.length

    await db.architectProfile.update({
      where: { id: review.architect_profile_id },
      data: {
        rating: Math.round(avg * 10) / 10,
        review_count: approved.length,
      },
    })
  }

  return c.json({ review })
})

// ─── Architect: list own reviews ────────────────────────────────────────────
reviews.get("/my", async (c) => {
  const token = extractToken(c.req.header("Authorization"))
  if (!token) return c.json({ message: "Authentification requise" }, 401)

  const payload = verifyToken(token)
  if (!payload || payload.role !== "architect") {
    return c.json({ message: "Accès réservé" }, 403)
  }

  const list = await db.review.findMany({
    where: { architect_profile_id: payload.id, deleted_at: null },
    orderBy: { created_at: "desc" },
  })

  return c.json({ reviews: list })
})
