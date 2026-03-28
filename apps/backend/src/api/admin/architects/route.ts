import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { ARCHITECT_PROFILE_MODULE } from "../../../modules/architect-profile"

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const architectService = req.scope.resolve(ARCHITECT_PROFILE_MODULE) as any
    const architects = await architectService.listArchitectProfiles()
    res.json({ architects, count: architects.length })
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }
}
