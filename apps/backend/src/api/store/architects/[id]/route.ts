import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { ARCHITECT_PROFILE_MODULE } from "../../../../modules/architect-profile"

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  const architectService = req.scope.resolve(ARCHITECT_PROFILE_MODULE)
  const { id } = req.params

  try {
    const architect = await architectService.retrieveArchitectProfile(id)

    if (!architect.is_active || !architect.verified) {
      return res.status(404).json({ message: "Architect not found" })
    }

    res.json({ architect })
  } catch {
    res.status(404).json({ message: "Architect not found" })
  }
}
