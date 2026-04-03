import { Hono } from "hono"
import bcrypt from "bcryptjs"
import { db } from "../lib/db.js"
import { signToken } from "../lib/jwt.js"
import { sanitizeArchitect } from "../lib/subscription.js"
import { authMiddleware } from "../middleware/auth.js"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PROTECTED_FIELDS = new Set([
  "id", "email", "password_hash", "verified", "premium",
  "rating", "review_count", "created_at", "updated_at", "deleted_at",
])

export const architects = new Hono()

// Register
architects.post("/register", async (c) => {
  const body = await c.req.json()
  const { name, email, password, phone, specialties, regions, description, years_experience, license_number } = body

  if (!name || !email || !password) {
    return c.json({ message: "Champs requis : name, email, password" }, 400)
  }
  if (password.length < 6) {
    return c.json({ message: "Mot de passe : 6 caractères minimum" }, 400)
  }
  if (!EMAIL_RE.test(email)) {
    return c.json({ message: "Format email invalide" }, 400)
  }

  const existing = await db.architectProfile.findUnique({ where: { email: email.toLowerCase() } })
  if (existing) return c.json({ message: "Cet email est déjà utilisé" }, 409)

  const password_hash = await bcrypt.hash(password, 10)
  const architect = await db.architectProfile.create({
    data: {
      name,
      email: email.toLowerCase(),
      password_hash,
      phone: phone || null,
      specialties: specialties || [],
      regions: regions || [],
      languages: ["Français"],
      description: description || null,
      years_experience: years_experience || 0,
      license_number: license_number || null,
    },
  })

  const token = signToken({ id: architect.id, email: architect.email, role: "architect" })
  return c.json({ architect: sanitizeArchitect(architect), token }, 201)
})

// Login
architects.post("/login", async (c) => {
  const { email, password } = await c.req.json()
  if (!email || !password) return c.json({ message: "Email et mot de passe requis" }, 400)

  const architect = await db.architectProfile.findUnique({
    where: { email: email.toLowerCase() },
  })
  if (!architect || !architect.password_hash) {
    return c.json({ message: "Identifiants incorrects" }, 401)
  }

  const valid = await bcrypt.compare(password, architect.password_hash)
  if (!valid) return c.json({ message: "Identifiants incorrects" }, 401)

  const token = signToken({ id: architect.id, email: architect.email, role: "architect" })
  return c.json({ architect: sanitizeArchitect(architect), token })
})

// Get me
architects.get("/me", authMiddleware, async (c) => {
  const user = c.get("user")
  const architect = await db.architectProfile.findUnique({ where: { id: user.id } })
  if (!architect) return c.json({ message: "Profil non trouvé" }, 404)
  return c.json({ architect: sanitizeArchitect(architect) })
})

// Update me
architects.put("/me", authMiddleware, async (c) => {
  const user = c.get("user")
  const body = await c.req.json()

  const updates: Record<string, unknown> = {}
  for (const [key, value] of Object.entries(body)) {
    if (!PROTECTED_FIELDS.has(key)) updates[key] = value
  }

  const architect = await db.architectProfile.update({
    where: { id: user.id },
    data: updates,
  })
  return c.json({ architect: sanitizeArchitect(architect) })
})

// List architects
architects.get("/", async (c) => {
  const limit = Math.min(Number(c.req.query("limit")) || 100, 200)
  const offset = Number(c.req.query("offset")) || 0
  const regionsParam = c.req.queries("regions[]") || []

  const where: any = { is_active: true, deleted_at: null }

  // Filter by region using Prisma JSON path filter (PostgreSQL jsonb @> operator)
  if (regionsParam.length > 0) {
    where.OR = regionsParam.map((r) => ({
      regions: { path: [], array_contains: [r.toLowerCase()] },
    }))
  }

  const [list, total] = await Promise.all([
    db.architectProfile.findMany({
      where,
      orderBy: { created_at: "desc" },
      take: limit,
      skip: offset,
    }),
    db.architectProfile.count({ where }),
  ])

  return c.json({
    architects: list.map(sanitizeArchitect),
    count: total,
  })
})

// Get by ID
architects.get("/:id", async (c) => {
  const architect = await db.architectProfile.findUnique({
    where: { id: c.req.param("id") },
  })
  if (!architect) return c.json({ message: "Architecte non trouvé" }, 404)
  return c.json({ architect: sanitizeArchitect(architect) })
})

// Admin: update architect
architects.patch("/:id", async (c) => {
  const secret = c.req.header("x-admin-secret")
  if (process.env.ADMIN_SECRET && secret !== process.env.ADMIN_SECRET) {
    return c.json({ message: "Accès refusé" }, 403)
  }
  const body = await c.req.json()
  const architect = await db.architectProfile.update({
    where: { id: c.req.param("id") },
    data: body,
  })
  return c.json({ architect: sanitizeArchitect(architect) })
})

// Admin: delete architect
architects.delete("/:id", async (c) => {
  const secret = c.req.header("x-admin-secret")
  if (process.env.ADMIN_SECRET && secret !== process.env.ADMIN_SECRET) {
    return c.json({ message: "Accès refusé" }, 403)
  }
  await db.architectProfile.delete({ where: { id: c.req.param("id") } })
  return c.json({ deleted: true })
})
