import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET
if (!JWT_SECRET) throw new Error("JWT_SECRET is required")

export type JwtPayload = {
  id: string
  email: string
  role: "architect" | "client"
}

export function signToken(payload: JwtPayload): string {
  return jwt.sign(payload, JWT_SECRET!, { expiresIn: "7d" })
}

export function verifyToken(token: string): JwtPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET!) as JwtPayload
  } catch {
    return null
  }
}

export function extractToken(header: string | undefined): string | null {
  if (!header?.startsWith("Bearer ")) return null
  return header.slice(7)
}
