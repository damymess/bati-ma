export type Specialty = {
  slug: string;
  label: string;
  description: string;
  keywords: string[];
};

export const SPECIALTIES_SEO: Specialty[] = [
  {
    slug: "residentiel",
    label: "Résidentiel",
    description: "villas, maisons individuelles, appartements et immeubles résidentiels",
    keywords: ["architecte villa", "architecte maison", "construction résidentielle"],
  },
  {
    slug: "commercial",
    label: "Commercial",
    description: "bureaux, locaux commerciaux, centres d'affaires et espaces de coworking",
    keywords: ["architecte commercial", "architecte bureau", "aménagement commercial"],
  },
  {
    slug: "interieur",
    label: "Architecture d'intérieur",
    description: "décoration, aménagement d'intérieur, design d'espace et home staging",
    keywords: ["architecte intérieur", "décorateur", "aménagement intérieur"],
  },
  {
    slug: "riad-patrimoine",
    label: "Riad & Patrimoine",
    description: "rénovation de riads, restauration de patrimoine et architecture traditionnelle marocaine",
    keywords: ["architecte riad", "rénovation riad", "restauration patrimoine"],
  },
  {
    slug: "eco-construction",
    label: "Éco-construction",
    description: "bâtiments durables, bioclimatiques, énergie solaire et matériaux écologiques",
    keywords: ["architecte écologique", "éco-construction", "maison passive"],
  },
  {
    slug: "urbanisme",
    label: "Urbanisme",
    description: "plans d'aménagement, lotissements, ZAC et projets d'urbanisme",
    keywords: ["urbaniste", "aménagement urbain", "plan d'aménagement"],
  },
];

export function getSpecialtyBySlug(slug: string): Specialty | undefined {
  return SPECIALTIES_SEO.find((s) => s.slug === slug);
}

export const SPECIALTY_SLUGS = SPECIALTIES_SEO.map((s) => s.slug);
