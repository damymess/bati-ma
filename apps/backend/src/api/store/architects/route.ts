import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { ARCHITECT_PROFILE_MODULE } from "../../../modules/architect-profile"

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const architectService = req.scope.resolve(ARCHITECT_PROFILE_MODULE) as any

    const limitParam = req.query.limit ? parseInt(req.query.limit as string, 10) : 100
    const offsetParam = req.query.offset ? parseInt(req.query.offset as string, 10) : 0

    // regions[] filter — JSON field, filtered in-memory
    const regionsFilter: string[] = []
    const raw = req.query["regions[]"]
    if (raw) {
      if (Array.isArray(raw)) regionsFilter.push(...(raw as string[]))
      else regionsFilter.push(raw as string)
    }

    const all = await architectService.listArchitectProfiles()

    let filtered = all
    if (regionsFilter.length > 0) {
      filtered = all.filter((a: any) => {
        const regions: string[] = Array.isArray(a.regions) ? a.regions : Object.keys(a.regions ?? {})
        return regions.some((r: string) =>
          regionsFilter.some((f) => r.toLowerCase() === f.toLowerCase())
        )
      })
    }

    const paginated = filtered.slice(offsetParam, offsetParam + limitParam)

    res.json({ architects: paginated, count: filtered.length })
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
