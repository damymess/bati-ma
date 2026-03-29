// Shared subscription constants and helpers

export const VALID_TIERS = ["free", "standard", "premium"] as const
export type SubscriptionTier = (typeof VALID_TIERS)[number]

export const TIER_LIMITS: Record<SubscriptionTier, number> = {
  free: 0,
  standard: 5,
  premium: 9999,
}

export function isValidTier(tier: unknown): tier is SubscriptionTier {
  return typeof tier === "string" && VALID_TIERS.includes(tier as SubscriptionTier)
}

/**
 * Returns the effective tier, accounting for expiration.
 * If the subscription has expired, returns "free".
 */
export function getEffectiveTier(architect: {
  subscription_tier?: string
  subscription_expires_at?: string | Date | null
}): SubscriptionTier {
  const tier = architect.subscription_tier
  if (!tier || !isValidTier(tier) || tier === "free") return "free"

  if (architect.subscription_expires_at) {
    const expiresAt = new Date(architect.subscription_expires_at)
    if (expiresAt < new Date()) return "free"
  }

  return tier
}

/**
 * Check if an architect can unlock contacts (has a paid tier with remaining quota).
 */
export function canUnlockContact(architect: {
  subscription_tier?: string
  subscription_expires_at?: string | Date | null
  contacts_used_this_month?: number
  contacts_limit?: number
}): { allowed: boolean; reason?: string } {
  const tier = getEffectiveTier(architect)

  if (tier === "free") {
    return { allowed: false, reason: "Abonnement requis pour accéder aux coordonnées" }
  }

  if (tier === "standard") {
    const limit = architect.contacts_limit || TIER_LIMITS.standard
    const used = architect.contacts_used_this_month || 0
    if (used >= limit) {
      return {
        allowed: false,
        reason: `Limite mensuelle atteinte (${limit} contacts/mois). Passez au plan Premium pour un accès illimité.`,
      }
    }
  }

  return { allowed: true }
}

/**
 * Strips sensitive fields from an architect profile before sending to client.
 */
export function sanitizeArchitect(architect: any) {
  if (!architect) return architect
  const { password_hash, ...safe } = architect
  return safe
}
