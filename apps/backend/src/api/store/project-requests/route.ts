import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { PROJECT_REQUEST_MODULE } from "../../../modules/project-request"

// Simple email regex — not exhaustive, but catches obvious junk
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const projectService = req.scope.resolve(PROJECT_REQUEST_MODULE) as any
    const body = req.body as any

    if (!body.title || !body.client_name || !body.client_email || !body.project_type || !body.location) {
      return res.status(400).json({
        message: "Champs requis : title, client_name, client_email, project_type, location",
      })
    }

    // M2 FIX: Validate email format
    if (!EMAIL_RE.test(body.client_email)) {
      return res.status(400).json({ message: "Format email invalide" })
    }

    // H4 FIX: Whitelist allowed fields — prevent mass assignment
    const projectRequest = await projectService.createProjectRequests({
      title: body.title,
      client_name: body.client_name,
      client_email: body.client_email,
      client_phone: body.client_phone || null,
      description: body.description || "",
      project_type: body.project_type,
      location: body.location,
      address: body.address || null,
      budget_min: body.budget_min ? Number(body.budget_min) : null,
      budget_max: body.budget_max ? Number(body.budget_max) : null,
      timeline: body.timeline || null,
      is_public: true,
      status: "submitted",
      source: "website",
    })

    res.status(201).json({ project_request: projectRequest })
  } catch (e: any) {
    console.error("[project-requests/create]", e)
    res.status(500).json({ error: "Erreur interne du serveur" })
  }
}
