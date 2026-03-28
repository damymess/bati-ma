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

export const ARCHITECTS: Architect[] = [
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
    id: "casa-004",
    name: "Groupe Archiplanning",
    city: "casablanca",
    specialties: ["Urbanisme", "Commercial", "Industriel"],
    experience: 22,
    rating: 4.5,
    reviewCount: 12,
    description:
      "Grand cabinet pluridisciplinaire intervenant sur les projets d'urbanisme, industriels et commerciaux d'envergure.",
    premium: false,
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
    id: "marr-003",
    name: "Cabinet Kettani Architecture",
    city: "marrakech",
    specialties: ["Commercial", "Hôtellerie", "Résidentiel"],
    experience: 25,
    rating: 4.8,
    reviewCount: 61,
    description:
      "Cabinet référence à Marrakech avec une expertise de 25 ans. Hôtels de luxe, villas, et résidences touristiques haut de gamme.",
    premium: false,
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
    id: "rabat-002",
    name: "Studio Design Agdal",
    city: "rabat",
    specialties: ["Intérieur", "Résidentiel"],
    experience: 8,
    rating: 4.5,
    reviewCount: 22,
    description:
      "Cabinet dédié à l'architecture d'intérieur et la décoration contemporaine. Appartements et villas dans le quartier Agdal et alentours.",
    premium: false,
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

export function getArchitectsByCity(citySlug: string): Architect[] {
  return ARCHITECTS.filter((a) => a.city === citySlug);
}
