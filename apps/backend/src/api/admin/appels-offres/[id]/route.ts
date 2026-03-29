import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { APPEL_OFFRE_MODULE } from "../../../../modules/appel-offre"

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const aoService = req.scope.resolve(APPEL_OFFRE_MODULE) as any
    const { id } = req.params
    const ao = await aoService.retrieveAppelOffre(id)
    res.json({ appel_offre: ao })
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }
}

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const aoService = req.scope.resolve(APPEL_OFFRE_MODULE) as any
    const { id } = req.params
    const body = req.body as any
    const ao = await aoService.updateAppelOffres(id, body)
    res.json({ appel_offre: ao })
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }
}

export const DELETE = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const aoService = req.scope.resolve(APPEL_OFFRE_MODULE) as any
    const { id } = req.params
    await aoService.deleteAppelOffres(id)
    res.status(204).send()
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }
}
