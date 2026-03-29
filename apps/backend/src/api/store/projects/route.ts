import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { PROJECT_REQUEST_MODULE } from "../../../modules/project-request"

// GET public projects (marketplace)
export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const projectService = req.scope.resolve(PROJECT_REQUEST_MODULE) as any
    const { city, project_type, status } = req.query as Record<string, string>

    const filters: Record<string, unknown> = { is_public: true }
    if (city) filters.location = city
    if (project_type) filters.project_type = project_type
    if (status) filters.status = status

    const projects = await projectService.listProjectRequests(filters, {
      order: { created_at: "DESC" },
    })
    res.json({ projects, count: projects.length })
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }
}
