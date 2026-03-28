import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { ARCHITECT_PROFILE_MODULE } from "../../../modules/architect-profile"

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  const architectService = req.scope.resolve(ARCHITECT_PROFILE_MODULE)
  const { limit = "50", offset = "0" } = req.query as Record<string, string>

  const [architects, count] = await architectService.listAndCountArchitectProfiles(
    {},
    {
      take: parseInt(limit),
      skip: parseInt(offset),
      order: { created_at: "DESC" },
    }
  )

  res.json({ architects, count })
}
