type ArchitectProfile = {
  subscription_tier: string
  subscription_expires_at: Date | null
  contacts_used_this_month: number
  password_hash: string | null
  [key: string]: unknown
}

const TIER_LIMITS: Record<string, number> = {
  free: 0,
  standard: 5,
  premium: 9999,
}

export function getEffectiveTier(architect: ArchitectProfile): string {
  if (
    architect.subscription_expires_at &&
    new Date(architect.subscription_expires_at) < new Date()
  ) {
    return "free"
  }
  return architect.subscription_tier || "free"
}

export function canUnlockContact(architect: ArchitectProfile): boolean {
  const tier = getEffectiveTier(architect)
  if (tier === "free") return false
  const limit = TIER_LIMITS[tier] ?? 0
  return architect.contacts_used_this_month < limit
}

export function sanitizeArchitect(architect: ArchitectProfile) {
  const { password_hash, ...safe } = architect
  return safe
}
