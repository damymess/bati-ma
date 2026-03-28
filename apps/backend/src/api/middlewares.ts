import { defineMiddlewares } from "@medusajs/medusa"
import type { MedusaNextFunction, MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { extractToken, verifyToken } from "../lib/jwt"

// JWT middleware — rejects requests without valid token
function requireAuth(req: MedusaRequest, res: MedusaResponse, next: MedusaNextFunction) {
  const token = extractToken(req.headers["authorization"] as string)
  if (!token) {
    return res.status(401).json({ error: "Authentification requise" })
  }
  try {
    verifyToken(token)
    next()
  } catch {
    return res.status(401).json({ error: "Token invalide ou expiré" })
  }
}

export default defineMiddlewares({
  routes: [
    {
      matcher: "/store/architects*",
      middlewares: [],
      bodyParser: { sizeLimit: "1mb" },
    },
    {
      matcher: "/store/project-requests*",
      middlewares: [],
      bodyParser: { sizeLimit: "1mb" },
    },
  ],
})
