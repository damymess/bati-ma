import type { Context, Next } from "hono"

const ADMIN_SECRET = process.env.ADMIN_API_KEY || ""

export async function adminMiddleware(c: Context, next: Next) {
  const key = c.req.header("x-admin-api-key")
  if (ADMIN_SECRET && key !== ADMIN_SECRET) {
    return c.json({ message: "Accès admin requis" }, 403)
  }
  await next()
}
