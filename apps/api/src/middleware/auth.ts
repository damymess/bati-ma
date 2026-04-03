import type { Context, Next } from "hono"
import { extractToken, verifyToken, type JwtPayload } from "../lib/jwt.js"

declare module "hono" {
  interface ContextVariableMap {
    user: JwtPayload
  }
}

export async function authMiddleware(c: Context, next: Next) {
  const token = extractToken(c.req.header("Authorization"))
  if (!token) return c.json({ message: "Token manquant" }, 401)

  const payload = verifyToken(token)
  if (!payload) return c.json({ message: "Token invalide" }, 401)

  c.set("user", payload)
  await next()
}

export async function optionalAuth(c: Context, next: Next) {
  const token = extractToken(c.req.header("Authorization"))
  if (token) {
    const payload = verifyToken(token)
    if (payload) c.set("user", payload)
  }
  await next()
}
