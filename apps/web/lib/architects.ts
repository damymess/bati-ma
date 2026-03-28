export type Specialty =
  | "Résidentiel"
  | "Commercial"
  | "Intérieur"
  | "Riad & Patrimoine"
  | "Industriel"
  | "Hôtellerie"
  | "Urbanisme"
  | "Éco-construction";

export type Architect = {
  id: string;
  name: string;
  city: string;
  specialties: Specialty[];
  experience: number;
  rating: number;
  reviewCount: number;
  description: string;
  phone?: string;
  premium: boolean;
};

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL ?? "https://api.bati.ma";
const API_KEY =
  process.env.NEXT_PUBLIC_MEDUSA_KEY ??
  "pk_e0d8fd70ab0cf7e115d76345ec382cf5304b2411c545a5cc3ef1fc1ceb86f75f";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapToFrontend(a: Record<string, any>, index: number): Architect {
  return {
    id: String(a.id ?? `api-${index}`),
    name: String(a.name ?? ""),
    city: (a.regions as string[])?.[0] ?? "",
    specialties: ((a.specialties as string[]) ?? ["Résidentiel"]) as Specialty[],
    experience: (a.years_experience as number) ?? 5,
    rating: (a.rating as number) ?? 0,
    reviewCount: (a.review_count as number) ?? 0,
    description: String(a.description ?? ""),
    phone: a.phone ? String(a.phone) : undefined,
    premium: Boolean(a.premium),
  };
}

export async function getArchitectsByCity(citySlug: string): Promise<Architect[]> {
  try {
    const res = await fetch(
      `${API_BASE}/store/architects?regions[]=${citySlug}&limit=100`,
      {
        headers: { "x-publishable-api-key": API_KEY },
        next: { revalidate: 86400 },
      }
    );
    if (!res.ok) {
      return FALLBACK_ARCHITECTS.filter((a) => a.city === citySlug);
    }
    const data = await res.json();
    const list = (data.architects ?? data.items ?? []) as Record<string, unknown>[];
    if (list.length === 0) {
      return FALLBACK_ARCHITECTS.filter((a) => a.city === citySlug);
    }
    return list.map(mapToFrontend);
  } catch {
    return FALLBACK_ARCHITECTS.filter((a) => a.city === citySlug);
  }
}

// Fallback statique si l'API est indisponible au build
// Also exported as ARCHITECTS for backward compat (homepage featured section)
export const FALLBACK_ARCHITECTS: Architect[] = [
  {
    id: "casa-001",
    name: "Studio Arc Casablanca",
    city: "casablanca",
    specialties: ["Résidentiel", "Commercial"],
    experience: 15,
    rating: 4.8,
    reviewCount: 23,
    description:
      "Cabinet spécialisé dans les projets résidentiels haut de gamme et les immeubles commerciaux à Casablanca. Expertise reconnue en conception durable.",
    premium: true,
  },
  {
    id: "casa-002",
    name: "Atelier Mawlawi Architecture",
    city: "casablanca",
    specialties: ["Résidentiel", "Intérieur"],
    experience: 12,
    rating: 4.7,
    reviewCount: 18,
    description:
      "Cabinet d'architecture et d'intérieur alliant tradition marocaine et modernité. Projets résidentiels et aménagements haut de gamme.",
    premium: false,
  },
  {
    id: "casa-003",
    name: "Workshop Design",
    city: "casablanca",
    specialties: ["Commercial", "Intérieur", "Hôtellerie"],
    experience: 10,
    rating: 4.6,
    reviewCount: 31,
    description:
      "Studio créatif spécialisé dans le design commercial, hôtelier et l'architecture d'intérieur contemporaine.",
    premium: true,
  },
  {
    id: "marr-001",
    name: "Atelier Riad Design",
    city: "marrakech",
    specialties: ["Riad & Patrimoine", "Hôtellerie"],
    experience: 18,
    rating: 4.9,
    reviewCount: 47,
    description:
      "Expert en rénovation et transformation de riads à Marrakech. Maîtrise parfaite des techniques traditionnelles (zellige, tadelakt, moucharabieh).",
    premium: true,
  },
  {
    id: "marr-002",
    name: "Studio Marrakech Architecture",
    city: "marrakech",
    specialties: ["Résidentiel", "Intérieur"],
    experience: 9,
    rating: 4.7,
    reviewCount: 29,
    description:
      "Jeune cabinet dynamique proposant des designs contemporains inspirés de l'art de vivre marocain. Villas et appartements haut de gamme.",
    premium: true,
  },
  {
    id: "rabat-001",
    name: "Agence Urbanisme & Architecture Rabat",
    city: "rabat",
    specialties: ["Urbanisme", "Résidentiel", "Commercial"],
    experience: 20,
    rating: 4.6,
    reviewCount: 16,
    description:
      "Cabinet intégré alliant urbanisme et architecture. Spécialiste des projets institutionnels et des opérations de réhabilitation patrimoniale à Rabat.",
    premium: true,
  },
  {
    id: "tanger-001",
    name: "TangArch Studio",
    city: "tanger",
    specialties: ["Résidentiel", "Commercial"],
    experience: 11,
    rating: 4.7,
    reviewCount: 19,
    description:
      "Cabinet dynamique accompagnant le boom immobilier de Tanger. Villas balnéaires, immeubles résidentiels et projets commerciaux.",
    premium: true,
  },
  {
    id: "agadir-001",
    name: "Archi Souss Design",
    city: "agadir",
    specialties: ["Résidentiel", "Hôtellerie", "Éco-construction"],
    experience: 14,
    rating: 4.6,
    reviewCount: 27,
    description:
      "Cabinet agadiri spécialisé dans l'architecture durable et les projets touristiques. Expertises en construction bioclimatique adaptée au climat du Souss.",
    premium: true,
  },
  {
    id: "fes-001",
    name: "Atelier Médina Fès",
    city: "fes",
    specialties: ["Riad & Patrimoine", "Intérieur"],
    experience: 16,
    rating: 4.8,
    reviewCount: 34,
    description:
      "Cabinet de référence pour la restauration et la réhabilitation de la médina de Fès. Maîtrise unique des techniques artisanales et des contraintes patrimoniales.",
    premium: true,
  },
];

// Backward-compat alias used by homepage featured architects section
export const ARCHITECTS = FALLBACK_ARCHITECTS;
