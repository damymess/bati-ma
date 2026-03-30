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

// Admin auth middleware — requires API key or valid JWT
function requireAdmin(req: MedusaRequest, res: MedusaResponse, next: MedusaNextFunction) {
  const apiKey = req.headers["x-admin-api-key"] as string | undefined
  const adminKey = process.env.ADMIN_API_KEY

  // Check API key first
  if (adminKey && apiKey === adminKey) {
    return next()
  }

  // Fall back to JWT
  const token = extractToken(req.headers["authorization"] as string)
  if (!token) {
    return res.status(401).json({ error: "Authentification admin requise" })
  }
  try {
    verifyToken(token)
    // TODO: check admin role when role system is implemented
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
    {
      matcher: "/store/demandes-devis*",
      middlewares: [],
      bodyParser: { sizeLimit: "1mb" },
    },
    {
      matcher: "/store/clients*",
      middlewares: [],
      bodyParser: { sizeLimit: "1mb" },
    },
    {
      matcher: "/store/forum*",
      middlewares: [],
      bodyParser: { sizeLimit: "1mb" },
    },
    {
      matcher: "/store/appels-offres*",
      middlewares: [],
      bodyParser: { sizeLimit: "1mb" },
    },
    {
      matcher: "/store/projects*",
      middlewares: [],
      bodyParser: { sizeLimit: "2mb" },
    },
    {
      matcher: "/admin/*",
      middlewares: [requireAdmin],
      bodyParser: { sizeLimit: "1mb" },
    },
  ],
})
