import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { APPEL_OFFRE_MODULE } from "../../../modules/appel-offre"

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const aoService = req.scope.resolve(APPEL_OFFRE_MODULE) as any
    const { status, sector, city } = req.query as Record<string, string>

    const filters: Record<string, unknown> = { is_active: true }
    if (status) filters.status = status
    if (sector) filters.sector = sector
    if (city) filters.city = city

    const appels_offres = await aoService.listAppelOffres(filters, {
      order: { deadline: "ASC" },
    })
    res.json({ appels_offres, count: appels_offres.length })
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }
}
