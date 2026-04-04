import type { Context, Next } from "hono"

type Entry = { count: number; resetAt: number }
const store = new Map<string, Entry>()

// Cleanup every 10 minutes
setInterval(() => {
  const now = Date.now()
  for (const [key, entry] of store) {
    if (now > entry.resetAt) store.delete(key)
  }
}, 10 * 60 * 1000)

export function rateLimit(opts: { max: number; windowMs: number }) {
  return async (c: Context, next: Next) => {
    const ip = c.req.header("x-forwarded-for")?.split(",")[0]?.trim()
      || c.req.header("x-real-ip")
      || "unknown"
    const key = `${ip}:${c.req.path}`
    const now = Date.now()

    let entry = store.get(key)
    if (!entry || now > entry.resetAt) {
      entry = { count: 0, resetAt: now + opts.windowMs }
      store.set(key, entry)
    }

    entry.count++

    if (entry.count > opts.max) {
      const retryAfter = Math.ceil((entry.resetAt - now) / 1000)
      const minutes = Math.ceil(retryAfter / 60)
      c.header("Retry-After", String(retryAfter))
      return c.json(
        { message: `Trop de tentatives. Réessayez dans ${minutes} minute${minutes > 1 ? "s" : ""}.` },
        429
      )
    }

    await next()
  }
}

export const authRateLimit = rateLimit({ max: 5, windowMs: 15 * 60 * 1000 })
export const forgotRateLimit = rateLimit({ max: 3, windowMs: 15 * 60 * 1000 })
