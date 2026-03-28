import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { ARCHITECT_PROFILE_MODULE } from "../../../../modules/architect-profile"
import { extractToken, verifyToken } from "../../../../lib/jwt"

// Fields that architects cannot update themselves
const PROTECTED_FIELDS = ["id", "email", "password_hash", "verified", "premium", "rating", "review_count", "created_at", "updated_at", "deleted_at"]

function getArchitectFromToken(req: MedusaRequest): { architect_id: string; email: string } | null {
  const token = extractToken(req.headers["authorization"] as string)
  if (!token) return null
  try {
    return verifyToken(token)
  } catch {
    return null
  }
}

// GET /store/architects/me — profil de l'architecte connecté
export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  const payload = getArchitectFromToken(req)
  if (!payload) return res.status(401).json({ error: "Non authentifié" })

  try {
    const architectService = req.scope.resolve(ARCHITECT_PROFILE_MODULE) as any
    const architect = await architectService.retrieveArchitectProfile(payload.architect_id)
    if (!architect) return res.status(404).json({ error: "Profil introuvable" })

    const { password_hash: _, ...profile } = architect
    res.json({ architect: profile })
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }
}

// PUT /store/architects/me — mettre à jour son profil
export const PUT = async (req: MedusaRequest, res: MedusaResponse) => {
  const payload = getArchitectFromToken(req)
  if (!payload) return res.status(401).json({ error: "Non authentifié" })

  try {
    const architectService = req.scope.resolve(ARCHITECT_PROFILE_MODULE) as any
    const body = req.body as Record<string, unknown>

    // Strip protected fields
    const updates: Record<string, unknown> = {}
    for (const [key, val] of Object.entries(body)) {
      if (!PROTECTED_FIELDS.includes(key)) updates[key] = val
    }

    const architect = await architectService.updateArchitectProfiles(
      { id: payload.architect_id },
      updates
    )

    const { password_hash: _, ...profile } = architect
    res.json({ architect: profile })
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }
}
