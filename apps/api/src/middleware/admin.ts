import type { Context, Next } from "hono"
import { extractToken, verifyToken } from "../lib/jwt.js"
import { db } from "../lib/db.js"

const ADMIN_SECRET = process.env.ADMIN_API_KEY || ""
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "contact@bati.ma"

/**
 * Middleware qui protège les endpoints admin.
 * Accepte DEUX méthodes d'authentification :
 * 1. Header `x-admin-api-key` égal à ADMIN_API_KEY (pour cron, scripts internes)
 * 2. JWT Bearer token d'un user avec email === ADMIN_EMAIL (pour web UI)
 */
export async function adminMiddleware(c: Context, next: Next) {
  // Méthode 1 : x-admin-api-key (priorité, plus rapide)
  const key = c.req.header("x-admin-api-key")
  if (ADMIN_SECRET && key === ADMIN_SECRET) {
    return await next()
  }

  // Méthode 2 : JWT admin
  const token = extractToken(c.req.header("Authorization"))
  if (token) {
    const payload = verifyToken(token)
    if (payload) {
      // Vérifier que l'email correspond à l'admin (check DB pour éviter token volé d'un ex-admin)
      if (payload.role === "architect") {
        const archi = await db.architectProfile.findUnique({ where: { id: payload.id } })
        if (archi && archi.email === ADMIN_EMAIL) return await next()
      } else if (payload.role === "client") {
        const client = await db.clientProfile.findUnique({ where: { id: payload.id } })
        if (client && client.email === ADMIN_EMAIL) return await next()
      }
    }
  }

  return c.json({ message: "Accès admin requis" }, 403)
}
