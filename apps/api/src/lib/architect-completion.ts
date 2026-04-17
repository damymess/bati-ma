/**
 * Mirror côté backend de la logique de complétion profil architecte.
 * Utilisé pour :
 * - Filtrage public (ne pas retourner les profils < 50%)
 * - Cron de relance J+3 (cibler ceux < 50%)
 * - Admin dashboard (voir architectes inactifs)
 */

type ArchitectProfileLike = {
  phone?: string | null
  description?: string | null
  license_number?: string | null
  years_experience?: number | null
  specialties?: unknown
  regions?: unknown
  portfolio_images?: unknown
  website?: string | null
  hourly_rate?: number | null
  project_rate_min?: number | null
  project_rate_max?: number | null
}

export type ArchitectCompletion = {
  percent: number
  missing: string[]
  isPublic: boolean
  isComplete: boolean
}

export function computeProfileCompletion(a: ArchitectProfileLike): ArchitectCompletion {
  let percent = 0
  const missing: string[] = []

  if (a.phone && String(a.phone).trim().length >= 7) percent += 15
  else missing.push("Téléphone de contact")

  if (a.description && a.description.trim().length >= 80) percent += 15
  else missing.push("Description du cabinet (min 80 caractères)")

  const photos = Array.isArray(a.portfolio_images) ? a.portfolio_images : []
  if (photos.length >= 3) percent += 20
  else if (photos.length >= 1) {
    percent += 8
    missing.push(`Ajouter ${3 - photos.length} photo(s) portfolio (minimum 3)`)
  } else {
    missing.push("3 photos portfolio minimum")
  }

  if (a.license_number && a.license_number.trim().length >= 3) percent += 10
  else missing.push("Numéro Ordre des Architectes du Maroc")

  if (a.years_experience && a.years_experience > 0) percent += 5
  else missing.push("Années d'expérience")

  const specs = Array.isArray(a.specialties) ? (a.specialties as string[]) : []
  if (specs.length >= 1) percent += 10
  else missing.push("Au moins 1 spécialité")

  const regions = Array.isArray(a.regions) ? (a.regions as string[]) : []
  if (regions.length >= 1) percent += 10
  else missing.push("Au moins 1 ville d'intervention")

  if (a.hourly_rate || a.project_rate_min || a.project_rate_max) percent += 10
  else missing.push("Tarifs indicatifs (horaire ou au projet)")

  if (a.website && a.website.trim().length >= 4) percent += 5

  percent = Math.min(percent, 100)

  return {
    percent,
    missing,
    isPublic: percent >= 50,
    isComplete: percent >= 80,
  }
}

/**
 * Le profil est-il assez complet pour apparaître dans la liste publique ?
 * Règle actuelle : >= 50% de complétion
 */
export function isArchitectPublic(a: ArchitectProfileLike): boolean {
  return computeProfileCompletion(a).isPublic
}
