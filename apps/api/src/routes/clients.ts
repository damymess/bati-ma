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

// Get client projects
clients.get("/projets", authMiddleware, async (c) => {
  const user = c.get("user")
  const client = await db.clientProfile.findUnique({ where: { id: user.id } })
  if (!client) return c.json({ message: "Profil non trouvé" }, 404)

  const projets = await db.projectRequest.findMany({
    where: { client_email: client.email, deleted_at: null },
    orderBy: { created_at: "desc" },
  })

  return c.json({ projets, count: projets.length })
})
