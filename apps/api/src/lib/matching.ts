import { db } from "./db.js"

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

export async function matchArchitects(city: string, projectType: string, limit = 3) {
  const specialty = TYPE_TO_SPECIALTY[projectType] || ""

  // Get all active architects in the city
  const architects = await db.architectProfile.findMany({
    where: {
      is_active: true,
      deleted_at: null,
    },
    orderBy: [
      { premium: "desc" },
      { rating: "desc" },
      { review_count: "desc" },
    ],
  })

  // Filter by city (regions is a JSON array)
  let filtered = architects.filter((a) => {
    const regions = (a.regions as string[]) || []
    return regions.some((r) => r.toLowerCase().includes(city.toLowerCase()))
  })

  // If specialty match available, prefer those
  if (specialty) {
    const withSpecialty = filtered.filter((a) => {
      const specs = (a.specialties as string[]) || []
      return specs.includes(specialty)
    })
    if (withSpecialty.length >= limit) {
      filtered = withSpecialty
    }
  }

  return filtered.slice(0, limit).map((a) => ({
    id: a.id,
    name: a.name,
    specialties: a.specialties,
    regions: a.regions,
    rating: a.rating,
    review_count: a.review_count,
    premium: a.premium,
    years_experience: a.years_experience,
    description: a.description ? a.description.slice(0, 150) : null,
  }))
}
