import { Hono } from "hono"
import bcrypt from "bcryptjs"
import { db } from "../lib/db.js"
import { signToken } from "../lib/jwt.js"
import { authMiddleware } from "../middleware/auth.js"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function sanitizeClient(client: any) {
  const { password_hash, ...safe } = client
  return safe
}

export const clients = new Hono()

// Register
clients.post("/register", async (c) => {
  const body = await c.req.json()
  const name = (body.name || "").trim()
  const email = (body.email || "").trim().toLowerCase()
  const password = body.password || ""
  const phone = (body.phone || "").trim()
  const city = (body.city || "").trim()

  if (!name || !email || !password) {
    return c.json({ message: "Champs requis : nom, email, mot de passe" }, 400)
  }
  if (password.length < 8) {
    return c.json({ message: "Le mot de passe doit contenir au moins 8 caractères" }, 400)
  }
  if (!EMAIL_RE.test(email)) {
    return c.json({ message: "Format email invalide" }, 400)
  }

  const existing = await db.clientProfile.findUnique({ where: { email } })
  if (existing) return c.json({ message: "Cet email est déjà utilisé" }, 409)

  const password_hash = await bcrypt.hash(password, 10)
  const client = await db.clientProfile.create({
    data: {
      name,
      email,
      password_hash,
      phone: phone || null,
      city: city || null,
    },
  })

  const token = signToken({ id: client.id, email: client.email, role: "client" })
  return c.json({ client: sanitizeClient(client), token }, 201)
})

// Login
clients.post("/login", async (c) => {
  const { email, password } = await c.req.json()
  if (!email || !password) return c.json({ message: "Email et mot de passe requis" }, 400)

  const client = await db.clientProfile.findUnique({
    where: { email: email.toLowerCase() },
  })
  if (!client || !client.password_hash) {
    return c.json({ message: "Identifiants incorrects" }, 401)
  }

  const valid = await bcrypt.compare(password, client.password_hash)
  if (!valid) return c.json({ message: "Identifiants incorrects" }, 401)

  const token = signToken({ id: client.id, email: client.email, role: "client" })
  return c.json({ client: sanitizeClient(client), token })
})

// Get me
clients.get("/me", authMiddleware, async (c) => {
  const user = c.get("user")
  const client = await db.clientProfile.findUnique({ where: { id: user.id } })
  if (!client) return c.json({ message: "Profil non trouvé" }, 404)
  return c.json({ client: sanitizeClient(client) })
})

// Update me
clients.put("/me", authMiddleware, async (c) => {
  const user = c.get("user")
  const body = await c.req.json()

  const updates: Record<string, unknown> = {}
  if (body.name !== undefined) updates.name = body.name
  if (body.phone !== undefined) updates.phone = body.phone
  if (body.city !== undefined) updates.city = body.city

  const client = await db.clientProfile.update({
    where: { id: user.id },
    data: updates,
  })
  return c.json({ client: sanitizeClient(client) })
})

// Get client projects (enrichi avec shortlist + stats)
clients.get("/projets", authMiddleware, async (c) => {
  const user = c.get("user")
  const client = await db.clientProfile.findUnique({ where: { id: user.id } })
  if (!client) return c.json({ message: "Profil non trouvé" }, 404)

  const projets = await db.projectRequest.findMany({
    where: { client_email: client.email, deleted_at: null },
    orderBy: { created_at: "desc" },
  })

  // Enrichir chaque projet avec la shortlist + les devis reçus
  const enriched = await Promise.all(
    projets.map(async (p) => {
      const payload = p.calculator_payload as any
      const shortlistIds: string[] = Array.isArray(payload?.shortlist_ids)
        ? payload.shortlist_ids
        : []
      const shortlist = shortlistIds.length > 0
        ? await db.architectProfile.findMany({
            where: { id: { in: shortlistIds } },
            select: {
              id: true, name: true, rating: true, review_count: true,
              verified: true, regions: true, specialties: true, portfolio_images: true,
            },
          })
        : []

      // Pipeline : qui a débloqué le contact ?
      const unlocks = await db.contactUnlock.findMany({
        where: { project_request_id: p.id },
        select: { architect_profile_id: true, unlocked_at: true },
      })

      return { ...p, shortlist, unlocks }
    }),
  )

  return c.json({ projets: enriched, count: enriched.length })
})

// ─── Magic Link (auto-login sans password) ──────────────────────────────────

// Check si un email existe (pour switch UI vers magic link)
clients.post("/check-email", async (c) => {
  const body = await c.req.json()
  const email = (body.email || "").trim().toLowerCase()
  if (!email || !EMAIL_RE.test(email)) return c.json({ exists: false })

  const client = await db.clientProfile.findUnique({ where: { email } })
  return c.json({ exists: !!client, name: client?.name || null })
})

// Demander un magic link
clients.post("/magic-link/request", async (c) => {
  const body = await c.req.json()
  const email = (body.email || "").trim().toLowerCase()
  if (!email || !EMAIL_RE.test(email)) return c.json({ message: "Email invalide" }, 400)

  const client = await db.clientProfile.findUnique({ where: { email } })
  if (!client) {
    // Toujours renvoyer OK pour éviter enumeration (pattern sécurité)
    return c.json({ sent: true })
  }

  // Générer token + stocker dans PasswordReset (pattern existant réutilisé)
  const { randomBytes } = await import("crypto")
  const token = randomBytes(24).toString("hex")
  const expires = new Date(Date.now() + 60 * 60 * 1000) // 1h

  await db.passwordReset.create({
    data: { token, email, role: "client", expires_at: expires },
  })

  // Envoi email async
  const { sendMagicLinkToClient } = await import("../lib/email.js")
  sendMagicLinkToClient(client.name, email, token).catch((e) =>
    console.error("[email] magic link failed:", e),
  )

  return c.json({ sent: true })
})

// Consommer le magic link (1-clic login)
clients.post("/magic-link/verify", async (c) => {
  const body = await c.req.json()
  const token = (body.token || "").trim()
  if (!token) return c.json({ message: "Token manquant" }, 400)

  const reset = await db.passwordReset.findUnique({ where: { token } })
  if (!reset || reset.used) return c.json({ message: "Lien invalide ou déjà utilisé" }, 410)
  if (new Date(reset.expires_at) < new Date()) return c.json({ message: "Lien expiré" }, 410)
  if (reset.role !== "client") return c.json({ message: "Type de lien invalide" }, 400)

  const client = await db.clientProfile.findUnique({ where: { email: reset.email } })
  if (!client) return c.json({ message: "Compte introuvable" }, 404)

  // Invalider le token
  await db.passwordReset.update({ where: { token }, data: { used: true } })

  const jwtToken = signToken({ id: client.id, email: client.email, role: "client" })
  return c.json({ client: sanitizeClient(client), token: jwtToken })
})
