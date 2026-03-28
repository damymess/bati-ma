import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { PROJECT_REQUEST_MODULE } from "../../../modules/project-request"

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const projectService = req.scope.resolve(PROJECT_REQUEST_MODULE) as any
    const requests = await projectService.listProjectRequests()
    res.json({ project_requests: requests, count: requests.length })
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }
}
