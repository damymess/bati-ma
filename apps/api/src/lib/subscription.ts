type ArchitectProfile = {
  subscription_tier: string
  subscription_expires_at: Date | null
  contacts_used_this_month: number
  contacts_reset_at?: Date | string | null
  password_hash: string | null
  [key: string]: unknown
}

// ─── Nouveaux tiers (inspirés Checkatrade / Habitatpresto) ──────────────────
// Anciens tiers (standard/premium) mappés vers les nouveaux pour backward compat.

export type TierConfig = {
  slug: string
  label: string
  priceMonthly: number // MAD
  priceAnnual: number // MAD (-15%)
  contactsLimit: number // 9999 = illimité
  shortlistCredits: number // crédits shortlist/mois
  hasBadge: boolean
  hasTopRanking: boolean
  hasStats: boolean
  hasPrioritySupport: boolean
}

export const TIERS: Record<string, TierConfig> = {
  free: {
    slug: "free",
    label: "Gratuit",
    priceMonthly: 0,
    priceAnnual: 0,
    contactsLimit: 0,
    shortlistCredits: 0,
    hasBadge: false,
    hasTopRanking: false,
    hasStats: false,
    hasPrioritySupport: false,
  },
  essentiel: {
    slug: "essentiel",
    label: "Essentiel",
    priceMonthly: 499,
    priceAnnual: 4990,
    contactsLimit: 15,
    shortlistCredits: 0,
    hasBadge: false,
    hasTopRanking: false,
    hasStats: false,
    hasPrioritySupport: false,
  },
  pro: {
    slug: "pro",
    label: "Pro",
    priceMonthly: 1299,
    priceAnnual: 12990,
    contactsLimit: 50,
    shortlistCredits: 10,
    hasBadge: true,
    hasTopRanking: true,
    hasStats: true,
    hasPrioritySupport: false,
  },
  elite: {
    slug: "elite",
    label: "Elite",
    priceMonthly: 2999,
    priceAnnual: 29990,
    contactsLimit: 9999,
    shortlistCredits: 30,
    hasBadge: true,
    hasTopRanking: true,
    hasStats: true,
    hasPrioritySupport: true,
  },
  // Legacy tiers — grandfathered, mapped to new equivalents
  standard: {
    slug: "standard",
    label: "Standard (legacy)",
    priceMonthly: 299,
    priceAnnual: 2990,
    contactsLimit: 5,
    shortlistCredits: 0,
    hasBadge: false,
    hasTopRanking: false,
    hasStats: false,
    hasPrioritySupport: false,
  },
  premium: {
    slug: "premium",
    label: "Premium (legacy)",
    priceMonthly: 799,
    priceAnnual: 7990,
    contactsLimit: 9999,
    shortlistCredits: 5,
    hasBadge: true,
    hasTopRanking: true,
    hasStats: true,
    hasPrioritySupport: false,
  },
}

export function getTierConfig(tier: string): TierConfig {
  return TIERS[tier] ?? TIERS.free
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
  const config = getTierConfig(tier)
  if (config.contactsLimit === 0) return false

  // Lazy monthly reset: if contacts_reset_at is in a previous month, reset counter
  const resetAt = architect.contacts_reset_at ? new Date(architect.contacts_reset_at as unknown as string) : null
  const now = new Date()
  if (!resetAt || resetAt.getMonth() !== now.getMonth() || resetAt.getFullYear() !== now.getFullYear()) {
    return true
  }

  return architect.contacts_used_this_month < config.contactsLimit
}

export function hasBadge(architect: ArchitectProfile): boolean {
  const tier = getEffectiveTier(architect)
  return getTierConfig(tier).hasBadge
}

export function hasTopRanking(architect: ArchitectProfile): boolean {
  const tier = getEffectiveTier(architect)
  return getTierConfig(tier).hasTopRanking
}

export function sanitizeArchitect(architect: ArchitectProfile) {
  const { password_hash, ...safe } = architect
  return safe
}
