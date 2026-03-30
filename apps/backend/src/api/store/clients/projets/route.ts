import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { PROJECT_REQUEST_MODULE } from "../../../../modules/project-request"
import { CLIENT_PROFILE_MODULE } from "../../../../modules/client-profile"
import { extractToken, verifyToken } from "../../../../lib/jwt"

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const token = extractToken(req.headers.authorization)
    if (!token) {
      return res.status(401).json({ error: "Authentification requise" })
    }

    let payload
    try {
      payload = verifyToken(token)
    } catch {
      return res.status(401).json({ error: "Token invalide" })
    }

    if (payload.role !== "client") {
      return res.status(403).json({ error: "Accès réservé aux clients" })
    }

    // Get client profile to find email
    const clientService = req.scope.resolve(CLIENT_PROFILE_MODULE) as any
    const client = await clientService.retrieveClientProfile(payload.id)
    if (!client) {
      return res.status(404).json({ error: "Profil client introuvable" })
    }

    // Find project requests matching client email
    const projectService = req.scope.resolve(PROJECT_REQUEST_MODULE) as any
    const all = await projectService.listProjectRequests({ client_email: client.email })

    res.json({ projets: all, count: all.length })
  } catch (e: any) {
    console.error("[clients/projets]", e)
    res.status(500).json({ error: "Erreur interne du serveur" })
  }
}
