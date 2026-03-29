import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { PROJECT_REQUEST_MODULE } from "../../../../modules/project-request"
import { ARCHITECT_PROFILE_MODULE } from "../../../../modules/architect-profile"
import { CONTACT_UNLOCK_MODULE } from "../../../../modules/contact-unlock"
import { extractToken, verifyToken } from "../../../../lib/jwt"
import { getEffectiveTier, canUnlockContact } from "../../../../lib/subscription"

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const projectService = req.scope.resolve(PROJECT_REQUEST_MODULE) as any
    const architectService = req.scope.resolve(ARCHITECT_PROFILE_MODULE) as any
    const contactService = req.scope.resolve(CONTACT_UNLOCK_MODULE) as any
    const { id } = req.params

    const [request] = await projectService.listProjectRequests({ id })
    if (!request) {
      return res.status(404).json({ message: "Demande non trouvée" })
    }

    // H3 FIX: Verify request is public before exposing details
    if (!request.is_public) {
      return res.status(404).json({ message: "Demande non trouvée" })
    }

    // Check architect auth
    let architect: any = null
    let alreadyUnlocked = false
    const token = extractToken(req.headers.authorization)
    if (token) {
      try {
        const payload = verifyToken(token)
        const [found] = await architectService.listArchitectProfiles({
          id: payload.architect_id,
        })
        architect = found

        if (architect) {
          const unlocks = await contactService.listContactUnlocks({
            architect_profile_id: architect.id,
            project_request_id: id,
          })
          alreadyUnlocked = unlocks.length > 0
        }
      } catch (err: any) {
        if (err?.name !== "JsonWebTokenError" && err?.name !== "TokenExpiredError") {
          console.error("[demandes-devis/detail] Auth error:", err)
        }
      }
    }

    // H2 FIX: Use effective tier (accounts for expiration)
    const effectiveTier = architect ? getEffectiveTier(architect) : "free"

    const canSeeContacts = effectiveTier !== "free" && alreadyUnlocked

    const result = canSeeContacts
      ? request
      : (() => {
          const { client_name, client_email, client_phone, ...rest } = request
          return { ...rest, contact_locked: true }
        })()

    // Strip password_hash if leaked via any join
    const { password_hash, ...safeResult } = result

    const unlockCheck = architect ? canUnlockContact(architect) : { allowed: false }

    res.json({
      demande: safeResult,
      already_unlocked: alreadyUnlocked,
      subscription_tier: effectiveTier,
      can_unlock: !alreadyUnlocked && unlockCheck.allowed,
    })
  } catch (e: any) {
    console.error("[demandes-devis/detail]", e)
    res.status(500).json({ error: "Erreur interne du serveur" })
  }
}
