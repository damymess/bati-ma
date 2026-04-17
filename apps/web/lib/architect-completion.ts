/**
 * Calcule le pourcentage de complétion d'un profil architecte.
 * Utilisé dans :
 * - Dashboard (banner onboarding)
 * - Fiche publique (badge)
 * - Email welcome (progress bar)
 * - Filtrage : profils < 50% cachés du listing public
 */

export type ArchitectCompletion = {
  percent: number; // 0-100
  missing: string[]; // liste des champs à compléter (libellés user-friendly)
  isPublic: boolean; // true si >= 50% = visible publiquement
  isComplete: boolean; // true si >= 80% = badge "complet"
};

type ArchitectForCompletion = {
  phone?: string | null;
  description?: string | null;
  license_number?: string | null;
  years_experience?: number | null;
  specialties?: string[] | null;
  regions?: string[] | null;
  portfolio_images?: string[] | null;
  website?: string | null;
  hourly_rate?: number | null;
  project_rate_min?: number | null;
  project_rate_max?: number | null;
};

export function computeProfileCompletion(a: ArchitectForCompletion): ArchitectCompletion {
  let percent = 0;
  const missing: string[] = [];

  // Téléphone : 15%
  if (a.phone && String(a.phone).trim().length >= 7) percent += 15;
  else missing.push("Téléphone de contact");

  // Description ≥ 80 chars : 15%
  if (a.description && a.description.trim().length >= 80) percent += 15;
  else missing.push("Description du cabinet (min 80 caractères)");

  // Portfolio ≥ 3 photos : 20%
  const photos = Array.isArray(a.portfolio_images) ? a.portfolio_images : [];
  if (photos.length >= 3) percent += 20;
  else if (photos.length >= 1) {
    percent += 8; // partiel
    missing.push(`Ajouter ${3 - photos.length} photo(s) portfolio (minimum 3)`);
  } else {
    missing.push("3 photos portfolio minimum");
  }

  // N° Ordre OAM : 10%
  if (a.license_number && a.license_number.trim().length >= 3) percent += 10;
  else missing.push("Numéro Ordre des Architectes du Maroc");

  // Années expérience > 0 : 5%
  if (a.years_experience && a.years_experience > 0) percent += 5;
  else missing.push("Années d'expérience");

  // Spécialités ≥ 1 : 10%
  const specs = Array.isArray(a.specialties) ? a.specialties : [];
  if (specs.length >= 1) percent += 10;
  else missing.push("Au moins 1 spécialité");

  // Régions ≥ 1 : 10%
  const regions = Array.isArray(a.regions) ? a.regions : [];
  if (regions.length >= 1) percent += 10;
  else missing.push("Au moins 1 ville d'intervention");

  // Tarifs : 10%
  if (a.hourly_rate || a.project_rate_min || a.project_rate_max) percent += 10;
  else missing.push("Tarifs indicatifs (horaire ou au projet)");

  // Site web : 5%
  if (a.website && a.website.trim().length >= 4) percent += 5;
  // Pas missing (optionnel)

  percent = Math.min(percent, 100);

  return {
    percent,
    missing,
    isPublic: percent >= 50,
    isComplete: percent >= 80,
  };
}

/** Retourne les 3 champs manquants prioritaires pour afficher dans la banner */
export function topMissingFields(completion: ArchitectCompletion): string[] {
  return completion.missing.slice(0, 3);
}
