import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { PROJECT_REQUEST_MODULE } from "../../../../modules/project-request"

const VALID_STATUSES = ["submitted", "viewed", "quoted", "accepted", "rejected", "completed"]

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const projectService = req.scope.resolve(PROJECT_REQUEST_MODULE) as any
    const { id } = req.params

    const project = await projectService.retrieveProjectRequest(id)
    if (!project) {
      return res.status(404).json({ message: "Projet non trouvé" })
    }

    res.json({ project_request: project })
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }
}

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const projectService = req.scope.resolve(PROJECT_REQUEST_MODULE) as any
    const { id } = req.params
    const body = req.body as any

    const updates: Record<string, unknown> = {}

    if (body.status) {
      if (!VALID_STATUSES.includes(body.status)) {
        return res.status(400).json({
          message: `Statut invalide. Valeurs acceptées : ${VALID_STATUSES.join(", ")}`,
        })
      }
      updates.status = body.status
    }

    if (body.architect_response !== undefined) updates.architect_response = body.architect_response
    if (body.proposed_fee !== undefined) updates.proposed_fee = Number(body.proposed_fee)

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({ message: "Aucune modification fournie" })
    }

    const updated = await projectService.updateProjectRequests(id, updates)
    res.json({ project_request: updated })
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }
}
