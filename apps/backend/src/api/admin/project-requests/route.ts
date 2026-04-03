import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { PROJECT_REQUEST_MODULE } from "../../../modules/project-request"

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const projectService = req.scope.resolve(PROJECT_REQUEST_MODULE) as any

    const status = req.query.status as string | undefined
    const limit = Math.min(Number(req.query.limit) || 50, 100)
    const offset = Number(req.query.offset) || 0

    const filters: Record<string, unknown> = {}
    if (status && status !== "all") filters.status = status

    const requests = await projectService.listProjectRequests(filters, {
      order: { created_at: "DESC" },
      take: limit,
      skip: offset,
    })

    const [countResult] = await projectService.listAndCountProjectRequests(filters)

    res.json({
      project_requests: requests,
      count: countResult?.length ?? requests.length,
      limit,
      offset,
    })
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }
}
