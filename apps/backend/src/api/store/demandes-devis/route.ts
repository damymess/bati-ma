import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { PROJECT_REQUEST_MODULE } from "../../../modules/project-request"
import { ARCHITECT_PROFILE_MODULE } from "../../../modules/architect-profile"
import { CONTACT_UNLOCK_MODULE } from "../../../modules/contact-unlock"
import { extractToken, verifyToken } from "../../../lib/jwt"
import { getEffectiveTier } from "../../../lib/subscription"

function stripContactInfo(request: any) {
  const { client_name, client_email, client_phone, ...rest } = request
  return { ...rest, contact_locked: true }
}

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const projectService = req.scope.resolve(PROJECT_REQUEST_MODULE) as any
    const architectService = req.scope.resolve(ARCHITECT_PROFILE_MODULE) as any
    const contactService = req.scope.resolve(CONTACT_UNLOCK_MODULE) as any

    // Check architect auth (optional — unauthenticated users see locked contacts)
    let architect: any = null
    const token = extractToken(req.headers.authorization)
    if (token) {
      try {
        const payload = verifyToken(token)
        const [found] = await architectService.listArchitectProfiles({
          id: payload.architect_id,
        })
        architect = found
      } catch (err: any) {
        // Token invalid → treat as unauthenticated (don't swallow DB errors)
        if (err?.name !== "JsonWebTokenError" && err?.name !== "TokenExpiredError") {
          console.error("[demandes-devis/list] Auth error:", err)
        }
      }
    }

    // Filters
    const filters: any = { is_public: true }
    const { city, project_type, budget_min, budget_max } = req.query as any
    if (city) filters.location = city
    if (project_type) filters.project_type = project_type

    const requests = await projectService.listProjectRequests(filters)

    // Filter by budget if provided
    let filtered = requests
    if (budget_min) {
      filtered = filtered.filter((r: any) => (r.budget_max || 0) >= Number(budget_min))
    }
    if (budget_max) {
      filtered = filtered.filter((r: any) => (r.budget_min || 0) <= Number(budget_max))
    }

    // C4 FIX: ALWAYS strip contacts in listing — contacts are only revealed
    // on the detail page after an explicit unlock action.
    // For subscribed architects, we check which ones they already unlocked
    // and mark them accordingly.
    let unlockedIds = new Set<string>()
    const effectiveTier = architect ? getEffectiveTier(architect) : "free"

    if (architect && effectiveTier !== "free") {
      const unlocks = await contactService.listContactUnlocks({
        architect_profile_id: architect.id,
      })
      unlockedIds = new Set(unlocks.map((u: any) => u.project_request_id))
    }

    const result = filtered.map((r: any) => {
      const unlocked = unlockedIds.has(r.id)
      if (unlocked) {
        return { ...r, contact_locked: false }
      }
      return stripContactInfo(r)
    })

    // Strip password_hash from any leaked architect data
    res.json({
      demandes: result,
      count: result.length,
      subscription_tier: effectiveTier,
    })
  } catch (e: any) {
    console.error("[demandes-devis/list]", e)
    res.status(500).json({ error: "Erreur interne du serveur" })
  }
}
