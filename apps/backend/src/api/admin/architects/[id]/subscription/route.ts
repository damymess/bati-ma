import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { ARCHITECT_PROFILE_MODULE } from "../../../../../modules/architect-profile"
import { extractToken, verifyToken } from "../../../../../lib/jwt"
import { isValidTier, TIER_LIMITS } from "../../../../../lib/subscription"

const ADMIN_API_KEY = process.env.ADMIN_API_KEY

export const PUT = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    // --- Auth: require either admin API key or valid architect JWT (for future admin panel) ---
    const apiKey = req.headers["x-admin-api-key"] as string | undefined
    const token = extractToken(req.headers.authorization)

    if (ADMIN_API_KEY && apiKey === ADMIN_API_KEY) {
      // OK — admin key matches
    } else if (token) {
      try {
        verifyToken(token)
        // TODO: check admin role when role system is implemented
      } catch {
        return res.status(401).json({ error: "Token invalide" })
      }
    } else {
      return res.status(401).json({ error: "Authentification admin requise (x-admin-api-key header ou Bearer token)" })
    }

    const architectService = req.scope.resolve(ARCHITECT_PROFILE_MODULE) as any
    const { id } = req.params
    const { tier, expires_at } = req.body as any

    if (!isValidTier(tier)) {
      return res.status(400).json({
        error: "Tier invalide. Valeurs acceptées : free, standard, premium",
      })
    }

    // Validate expires_at if provided
    if (expires_at !== undefined && expires_at !== null) {
      const date = new Date(expires_at)
      if (isNaN(date.getTime())) {
        return res.status(400).json({ error: "expires_at doit être une date ISO valide" })
      }
    }

    // Verify architect exists
    const [existing] = await architectService.listArchitectProfiles({ id })
    if (!existing) {
      return res.status(404).json({ error: "Architecte non trouvé" })
    }

    const updated = await architectService.updateArchitectProfiles({
      id,
      subscription_tier: tier,
      contacts_limit: TIER_LIMITS[tier],
      contacts_used_this_month: 0,
      subscription_expires_at: expires_at || null,
    })

    // Strip password_hash
    const { password_hash, ...safe } = updated
    res.json({ architect: safe })
  } catch (e: any) {
    console.error("[admin/subscription]", e)
    res.status(500).json({ error: "Erreur interne du serveur" })
  }
}
