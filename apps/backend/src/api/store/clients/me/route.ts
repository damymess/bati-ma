import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { CLIENT_PROFILE_MODULE } from "../../../../modules/client-profile"
import { extractToken, verifyToken } from "../../../../lib/jwt"

function getClientFromToken(req: MedusaRequest): { id: string; email: string; role: string } | null {
  const token = extractToken(req.headers["authorization"] as string)
  if (!token) return null
  try {
    const payload = verifyToken(token)
    if (payload.role !== "client") return null
    return payload
  } catch {
    return null
  }
}

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  const payload = getClientFromToken(req)
  if (!payload) return res.status(401).json({ error: "Non authentifié" })

  try {
    const clientService = req.scope.resolve(CLIENT_PROFILE_MODULE) as any
    const client = await clientService.retrieveClientProfile(payload.id)
    if (!client) return res.status(404).json({ error: "Profil introuvable" })

    const { password_hash: _, ...profile } = client
    res.json({ client: profile })
  } catch (e: any) {
    console.error("[clients/me]", e)
    res.status(500).json({ error: "Erreur interne du serveur" })
  }
}

export const PUT = async (req: MedusaRequest, res: MedusaResponse) => {
  const payload = getClientFromToken(req)
  if (!payload) return res.status(401).json({ error: "Non authentifié" })

  try {
    const clientService = req.scope.resolve(CLIENT_PROFILE_MODULE) as any
    const body = req.body as Record<string, unknown>

    const ALLOWED = ["name", "phone", "city"]
    const updates: Record<string, unknown> = {}
    for (const [key, val] of Object.entries(body)) {
      if (ALLOWED.includes(key)) updates[key] = val
    }

    const client = await clientService.updateClientProfiles({ id: payload.id }, updates)
    const { password_hash: _, ...profile } = client
    res.json({ client: profile })
  } catch (e: any) {
    console.error("[clients/me/update]", e)
    res.status(500).json({ error: "Erreur interne du serveur" })
  }
}
