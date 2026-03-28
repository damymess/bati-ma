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

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const architectService = req.scope.resolve(ARCHITECT_PROFILE_MODULE) as any
    const body = req.body as any

    const architect = await architectService.createArchitectProfiles(body)
    res.status(201).json({ architect })
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }
}
