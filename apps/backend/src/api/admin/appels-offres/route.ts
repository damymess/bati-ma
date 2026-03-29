import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { APPEL_OFFRE_MODULE } from "../../../modules/appel-offre"

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const aoService = req.scope.resolve(APPEL_OFFRE_MODULE) as any
    const appels_offres = await aoService.listAppelOffres()
    res.json({ appels_offres, count: appels_offres.length })
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }
}

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const aoService = req.scope.resolve(APPEL_OFFRE_MODULE) as any
    const body = req.body as any

    if (!body.title || !body.organism || !body.city || !body.deadline) {
      return res.status(400).json({
        message: "Missing required fields: title, organism, city, deadline",
      })
    }

    const ao = await aoService.createAppelOffres(body)
    res.status(201).json({ appel_offre: ao })
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }
}
