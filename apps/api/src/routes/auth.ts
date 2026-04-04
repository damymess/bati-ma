import { Hono } from "hono"
import { randomUUID } from "crypto"
import bcrypt from "bcryptjs"
import { db } from "../lib/db.js"
import { signToken } from "../lib/jwt.js"
import { sendPasswordResetEmail } from "../lib/email.js"
import { forgotRateLimit } from "../middleware/rateLimit.js"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const FRONTEND_URL = process.env.FRONTEND_URL || "https://bati.ma"

export const auth = new Hono()

// ─── Forgot Password ────────────────────────────────────────────────────────
auth.post("/forgot-password", forgotRateLimit, async (c) => {
  const body = await c.req.json()
  const email = (body.email || "").trim().toLowerCase()
  const role = (body.role || "").trim()

  if (!email || !EMAIL_RE.test(email)) {
    return c.json({ message: "Format email invalide" }, 400)
  }
  if (role !== "architect" && role !== "client") {
    return c.json({ message: "Rôle invalide" }, 400)
  }

  // Always respond 200 to not reveal if account exists
  const successMsg = "Si un compte existe avec cet email, un lien de réinitialisation a été envoyé."

  // Look up user
  let userName = ""
  if (role === "architect") {
    const user = await db.architectProfile.findUnique({ where: { email } })
    if (!user) return c.json({ message: successMsg })
    userName = user.name
  } else {
    const user = await db.clientProfile.findUnique({ where: { email } })
    if (!user) return c.json({ message: successMsg })
    userName = user.name
  }

  // Invalidate any existing unused tokens for this email
  await db.passwordReset.updateMany({
    where: { email, role, used: false },
    data: { used: true },
  })

  // Generate reset token
  const token = randomUUID()
  const expires_at = new Date(Date.now() + 60 * 60 * 1000) // 1 hour

  await db.passwordReset.create({
    data: { token, email, role, expires_at },
  })

  // Send email
  const resetUrl = `${FRONTEND_URL}/reset-password?token=${token}`
  sendPasswordResetEmail({ email, name: userName, resetUrl }).catch((e) =>
    console.error("[email] password reset failed:", e)
  )

  return c.json({ message: successMsg })
})

// ─── Reset Password ─────────────────────────────────────────────────────────
auth.post("/reset-password", async (c) => {
  const body = await c.req.json()
  const token = (body.token || "").trim()
  const password = (body.password || "")

  if (!token) {
    return c.json({ message: "Token manquant" }, 400)
  }
  if (!password || password.length < 8) {
    return c.json({ message: "Le mot de passe doit contenir au moins 8 caractères" }, 400)
  }

  // Find valid token
  const resetRecord = await db.passwordReset.findUnique({ where: { token } })

  if (!resetRecord || resetRecord.used || new Date() > resetRecord.expires_at) {
    return c.json({ message: "Ce lien a expiré ou est invalide. Demandez un nouveau lien." }, 400)
  }

  // Hash new password
  const password_hash = await bcrypt.hash(password, 10)

  // Update user password
  if (resetRecord.role === "architect") {
    await db.architectProfile.update({
      where: { email: resetRecord.email },
      data: { password_hash },
    })
  } else {
    await db.clientProfile.update({
      where: { email: resetRecord.email },
      data: { password_hash },
    })
  }

  // Mark token as used
  await db.passwordReset.update({
    where: { token },
    data: { used: true },
  })

  // Auto-login: return a JWT
  let userId = ""
  if (resetRecord.role === "architect") {
    const user = await db.architectProfile.findUnique({ where: { email: resetRecord.email } })
    userId = user!.id
  } else {
    const user = await db.clientProfile.findUnique({ where: { email: resetRecord.email } })
    userId = user!.id
  }

  const jwt = signToken({ id: userId, email: resetRecord.email, role: resetRecord.role as "architect" | "client" })

  return c.json({ message: "Mot de passe modifié avec succès", token: jwt, role: resetRecord.role })
})
