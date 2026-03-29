import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { APPEL_OFFRE_MODULE } from "../../../../modules/appel-offre"

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const aoService = req.scope.resolve(APPEL_OFFRE_MODULE) as any
    const { id } = req.params
    const ao = await aoService.retrieveAppelOffre(id)
    if (!ao) return res.status(404).json({ message: "Appel d'offre not found" })
    res.json({ appel_offre: ao })
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }
}
