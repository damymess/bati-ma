import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { PROJECT_REQUEST_MODULE } from "../../../modules/project-request"

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const projectService = req.scope.resolve(PROJECT_REQUEST_MODULE) as any
    const body = req.body as any

    if (!body.title || !body.client_name || !body.client_email || !body.project_type || !body.location) {
      return res.status(400).json({
        message: "Missing required fields: title, client_name, client_email, project_type, location",
      })
    }

    const projectRequest = await projectService.createProjectRequests(body)
    res.status(201).json({ project_request: projectRequest })
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }
}
