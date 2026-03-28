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

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const architectService = req.scope.resolve(ARCHITECT_PROFILE_MODULE) as any
    const architect = await architectService.updateArchitectProfiles(req.params.id, req.body)
    res.json({ architect })
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }
}
