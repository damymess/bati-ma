import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { PROJECT_REQUEST_MODULE } from "../../../modules/project-request"

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
  const projectService = req.scope.resolve(PROJECT_REQUEST_MODULE)
  const body = req.body as Record<string, unknown>

  if (!body.title || !body.client_name || !body.client_email || !body.project_type || !body.location) {
    return res.status(400).json({
      message: "Missing required fields: title, client_name, client_email, project_type, location",
    })
  }

  const projectRequest = await projectService.createProjectRequests({
    client_name: body.client_name,
    client_email: body.client_email,
    client_phone: body.client_phone || null,
    architect_profile_id: body.architect_id || null,
    title: body.title,
    description: body.description || "",
    project_type: body.project_type,
    location: body.location,
    address: body.address || null,
    budget_min: body.budget_min || null,
    budget_max: body.budget_max || null,
    timeline: body.timeline || null,
    status: "submitted",
    source: "website",
  })

  res.status(201).json({ project_request: projectRequest })
}
