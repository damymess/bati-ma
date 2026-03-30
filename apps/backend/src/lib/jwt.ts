import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET
if (!JWT_SECRET) {
  throw new Error("FATAL: JWT_SECRET environment variable is not set. Refusing to start with an insecure default.")
}

const JWT_EXPIRES = "7d"

export interface JwtPayload {
  id: string
  email: string
  role: "architect" | "client"
  // Legacy compat
  architect_id?: string
}

export function signToken(payload: { id: string; email: string; role: "architect" | "client" }): string {
  return jwt.sign(
    {
      id: payload.id,
      email: payload.email,
      role: payload.role,
      // Legacy compat for existing architect code
      ...(payload.role === "architect" ? { architect_id: payload.id } : {}),
    },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES }
  )
}

export function verifyToken(token: string): JwtPayload {
  const payload = jwt.verify(token, JWT_SECRET) as JwtPayload
  // Legacy compat: old tokens have architect_id but no role/id
  if (!payload.role && payload.architect_id) {
    payload.role = "architect"
    payload.id = payload.architect_id
  }
  return payload
}

export function extractToken(authHeader?: string): string | null {
  if (!authHeader?.startsWith("Bearer ")) return null
  return authHeader.slice(7)
}
