import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { PROJECT_REQUEST_MODULE } from "../../../modules/project-request"

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  const projectService = req.scope.resolve(PROJECT_REQUEST_MODULE)
  const { status, limit = "50", offset = "0" } = req.query as Record<string, string>

  const filters: Record<string, unknown> = {}
  if (status) filters.status = status

  const [requests, count] = await projectService.listAndCountProjectRequests(
    filters,
    {
      take: parseInt(limit),
      skip: parseInt(offset),
      order: { created_at: "DESC" },
    }
  )

  res.json({ project_requests: requests, count })
}
