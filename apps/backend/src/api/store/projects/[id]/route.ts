import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { PROJECT_REQUEST_MODULE } from "../../../../modules/project-request"

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const projectService = req.scope.resolve(PROJECT_REQUEST_MODULE) as any
    const { id } = req.params
    const project = await projectService.retrieveProjectRequest(id)
    if (!project || !project.is_public) {
      return res.status(404).json({ message: "Project not found" })
    }
    res.json({ project })
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }
}

// Architect responds to a project
export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const projectService = req.scope.resolve(PROJECT_REQUEST_MODULE) as any
    const { id } = req.params
    const body = req.body as any

    if (!body.architect_profile_id || !body.architect_response) {
      return res.status(400).json({
        message: "Missing required fields: architect_profile_id, architect_response",
      })
    }

    // Update the project with the architect response
    const project = await projectService.updateProjectRequests(id, {
      architect_profile_id: body.architect_profile_id,
      architect_response: body.architect_response,
      proposed_fee: body.proposed_fee || null,
      status: "quoted",
      responses_count: (body.responses_count || 0) + 1,
    })

    res.json({ project })
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }
}
