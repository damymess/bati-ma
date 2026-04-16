import { db } from "./db.js"
import { getEffectiveTier, getTierConfig } from "./subscription.js"

const TYPE_TO_SPECIALTY: Record<string, string> = {
  "Villa / Maison": "Résidentiel",
  "Appartement": "Résidentiel",
  "Immeuble résidentiel": "Résidentiel",
  "Local commercial": "Commercial",
  "Hôtel / Tourisme": "Hôtellerie",
  "Rénovation riad": "Riad & Patrimoine",
  "Architecture d'intérieur": "Intérieur",
  "Bureau / Coworking": "Commercial",
  "Rénovation": "Résidentiel",
  "Commercial": "Commercial",
  "Riad": "Riad & Patrimoine",
  "Autre": "",
}

/**
 * Matching simple (pour page publique) — 3 architectes maxi.
 * Priorité : tiers payant > rating > review_count.
 */
export async function matchArchitects(city: string, projectType: string, limit = 3) {
  const specialty = TYPE_TO_SPECIALTY[projectType] || ""

  const architects = await db.architectProfile.findMany({
    where: { is_active: true, deleted_at: null },
  })

  // Filter by city (regions is a JSON array)
  let filtered = architects.filter((a) => {
    const regions = (a.regions as string[]) || []
    return regions.some((r) => r.toLowerCase().includes(city.toLowerCase()))
  })

  // Prefer specialty match if available
  if (specialty) {
    const withSpecialty = filtered.filter((a) => {
      const specs = (a.specialties as string[]) || []
      return specs.includes(specialty)
    })
    if (withSpecialty.length >= limit) filtered = withSpecialty
  }

  // Scoring : tier payant > rating > review_count > years_experience
  const scored = filtered.map((a) => {
    const tier = getEffectiveTier(a as any)
    const config = getTierConfig(tier)
    let score = 0
    if (tier === "elite") score += 1000
    else if (tier === "pro") score += 500
    else if (tier === "essentiel" || tier === "standard") score += 100
    if (config.hasTopRanking) score += 200
    if (a.verified) score += 150
    score += (a.rating || 0) * 30
    score += Math.min((a.review_count || 0), 50) * 2
    score += Math.min((a.years_experience || 0), 20)
    return { architect: a, score }
  })

  scored.sort((a, b) => b.score - a.score)

  return scored.slice(0, limit).map(({ architect: a }) => ({
    id: a.id,
    name: a.name,
    specialties: a.specialties,
    regions: a.regions,
    rating: a.rating,
    review_count: a.review_count,
    premium: a.premium,
    verified: a.verified,
    subscription_tier: a.subscription_tier,
    years_experience: a.years_experience,
    description: a.description ? a.description.slice(0, 150) : null,
  }))
}

/**
 * Shortlist pour un ProjectRequest donné (modèle MyBuilder) :
 * - 3 architectes seulement
 * - Priorité absolue aux architectes Pro/Elite (leads exclusifs pour eux)
 * - Les architectes doivent avoir des crédits shortlist disponibles
 *
 * Returns les architectes + indicateurs pour la facturation à l'unité.
 */
export async function shortlistForProject(projectId: string, limit = 3) {
  const project = await db.projectRequest.findUnique({ where: { id: projectId } })
  if (!project) return []

  const allArchitects = await db.architectProfile.findMany({
    where: { is_active: true, deleted_at: null },
  })

  // 1. Filter by city
  const cityMatch = allArchitects.filter((a) => {
    const regions = (a.regions as string[]) || []
    return regions.some((r) => r.toLowerCase().includes(project.location.toLowerCase()))
  })

  // 2. Specialty match
  const specialty = TYPE_TO_SPECIALTY[project.project_type] || ""
  const specMatch = specialty
    ? cityMatch.filter((a) => {
        const specs = (a.specialties as string[]) || []
        return specs.includes(specialty)
      })
    : cityMatch

  const pool = specMatch.length >= limit ? specMatch : cityMatch

  // 3. Scoring Pro/Elite first
  const scored = pool.map((a) => {
    const tier = getEffectiveTier(a as any)
    let score = 0
    if (tier === "elite") score += 10000
    else if (tier === "pro") score += 5000
    else if (tier === "essentiel") score += 500
    else if (tier === "standard") score += 500
    else if (tier === "premium") score += 2000 // legacy
    if (a.verified) score += 1000
    score += (a.rating || 0) * 100
    score += Math.min((a.review_count || 0), 30) * 10
    return { architect: a, score, tier }
  })

  scored.sort((a, b) => b.score - a.score)

  return scored.slice(0, limit).map(({ architect: a, tier }) => ({
    id: a.id,
    name: a.name,
    specialties: a.specialties,
    regions: a.regions,
    rating: a.rating,
    review_count: a.review_count,
    verified: a.verified,
    subscription_tier: tier,
    has_priority_access: tier === "pro" || tier === "elite" || tier === "premium",
  }))
}
