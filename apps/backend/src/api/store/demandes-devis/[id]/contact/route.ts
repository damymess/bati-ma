import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { PROJECT_REQUEST_MODULE } from "../../../../../modules/project-request"
import { ARCHITECT_PROFILE_MODULE } from "../../../../../modules/architect-profile"
import { CONTACT_UNLOCK_MODULE } from "../../../../../modules/contact-unlock"
import { extractToken, verifyToken } from "../../../../../lib/jwt"
import { getEffectiveTier, canUnlockContact } from "../../../../../lib/subscription"

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const projectService = req.scope.resolve(PROJECT_REQUEST_MODULE) as any
    const architectService = req.scope.resolve(ARCHITECT_PROFILE_MODULE) as any
    const contactService = req.scope.resolve(CONTACT_UNLOCK_MODULE) as any
    const { id } = req.params

    // Require auth
    const token = extractToken(req.headers.authorization)
    if (!token) {
      return res.status(401).json({ message: "Authentification requise" })
    }

    let payload
    try {
      payload = verifyToken(token)
    } catch {
      return res.status(401).json({ message: "Token invalide" })
    }

    const [architect] = await architectService.listArchitectProfiles({
      id: payload.architect_id,
    })
    if (!architect) {
      return res.status(404).json({ message: "Architecte non trouvé" })
    }

    // H3 FIX: Verify request exists AND is public
    const [request] = await projectService.listProjectRequests({ id })
    if (!request || !request.is_public) {
      return res.status(404).json({ message: "Demande non trouvée" })
    }

    // H2 FIX: Check effective tier (accounts for expiration)
    const effectiveTier = getEffectiveTier(architect)
    if (effectiveTier === "free") {
      return res.status(403).json({
        message: "Abonnement requis pour accéder aux coordonnées",
        upgrade_required: true,
      })
    }

    // Check if already unlocked (idempotent)
    const existingUnlocks = await contactService.listContactUnlocks({
      architect_profile_id: architect.id,
      project_request_id: id,
    })
    if (existingUnlocks.length > 0) {
      return res.json({
        client_name: request.client_name,
        client_email: request.client_email,
        client_phone: request.client_phone,
        already_unlocked: true,
      })
    }

    // Check monthly limit
    const unlockCheck = canUnlockContact(architect)
    if (!unlockCheck.allowed) {
      return res.status(403).json({
        message: unlockCheck.reason,
        limit_reached: true,
      })
    }

    // C3 FIX: Use optimistic concurrency — re-check the counter after creating
    // the unlock record. If another request raced us, the duplicate unlock
    // is caught by the idempotent check above on subsequent calls.
    // The create + update should ideally be in a DB transaction; Medusa v2
    // doesn't expose raw transactions easily, so we use a double-check pattern.

    // Step 1: Create unlock record first (acts as a lock)
    await contactService.createContactUnlocks({
      architect_profile_id: architect.id,
      project_request_id: id,
      unlocked_at: new Date(),
    })

    // Step 2: Re-read architect to get fresh counter (mitigate race)
    const [freshArchitect] = await architectService.listArchitectProfiles({
      id: architect.id,
    })

    // Step 3: Increment counter
    await architectService.updateArchitectProfiles({
      id: architect.id,
      contacts_used_this_month: (freshArchitect.contacts_used_this_month || 0) + 1,
    })

    res.json({
      client_name: request.client_name,
      client_email: request.client_email,
      client_phone: request.client_phone,
      already_unlocked: false,
    })
  } catch (e: any) {
    console.error("[demandes-devis/contact/unlock]", e)
    res.status(500).json({ error: "Erreur interne du serveur" })
  }
}
