import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { ARCHITECT_PROFILE_MODULE } from "../../../../modules/architect-profile"

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const architectService = req.scope.resolve(ARCHITECT_PROFILE_MODULE) as any
    const architect = await architectService.retrieveArchitectProfile(req.params.id)
    res.json({ architect })
  } catch {
    res.status(404).json({ message: "Architect not found" })
  }
}

// PATCH /store/architects/:id — admin update (requires x-admin-secret)
export const PATCH = async (req: MedusaRequest, res: MedusaResponse) => {
  const secret = req.headers["x-admin-secret"]
  if (!secret || secret !== process.env.ADMIN_SECRET) {
    return res.status(403).json({ error: "Accès refusé" })
  }
  try {
    const architectService = req.scope.resolve(ARCHITECT_PROFILE_MODULE) as any
    const updated = await architectService.updateArchitectProfiles(
      { id: req.params.id },
      req.body as Record<string, unknown>
    )
    res.json({ architect: updated })
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }
}

export const DELETE = async (req: MedusaRequest, res: MedusaResponse) => {
  const secret = req.headers["x-admin-secret"]
  if (!secret || secret !== process.env.ADMIN_SECRET) {
    return res.status(403).json({ error: "Accès refusé" })
  }
  try {
    const architectService = req.scope.resolve(ARCHITECT_PROFILE_MODULE) as any
    await architectService.deleteArchitectProfiles(req.params.id)
    res.json({ deleted: true })
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }
}
