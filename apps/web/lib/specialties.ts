export type Specialty = {
  slug: string;
  label: string;
  description: string;
  seoDescription: string;
  keywords: string[];
};

export const SPECIALTIES_SEO: Specialty[] = [
  {
    slug: "residentiel",
    label: "Résidentiel",
    description: "villas, maisons individuelles, appartements et immeubles résidentiels",
    seoDescription: "L'architecture résidentielle au Maroc couvre la conception de villas individuelles, maisons de ville, appartements et immeubles d'habitation. Un architecte résidentiel maîtrise les normes parasismiques RPS 2011, l'isolation thermique RTCM et les spécificités du lotissement marocain. Il optimise la surface habitable selon le COS autorisé et crée des espaces de vie adaptés au climat et à la culture locale.",
    keywords: ["architecte villa", "architecte maison", "construction résidentielle", "architecte résidentiel maroc", "construction villa maroc"],
  },
  {
    slug: "commercial",
    label: "Commercial",
    description: "bureaux, locaux commerciaux, centres d'affaires et espaces de coworking",
    seoDescription: "L'architecture commerciale au Maroc englobe la conception de bureaux, locaux commerciaux, centres d'affaires, espaces de coworking et showrooms. L'architecte commercial maîtrise les normes d'accessibilité, la sécurité incendie et les réglementations spécifiques aux ERP (établissements recevant du public). Il optimise les flux, la signalétique et l'efficacité énergétique des bâtiments tertiaires.",
    keywords: ["architecte commercial", "architecte bureau", "aménagement commercial", "architecte local commercial maroc"],
  },
  {
    slug: "interieur",
    label: "Architecture d'intérieur",
    description: "décoration, aménagement d'intérieur, design d'espace et home staging",
    seoDescription: "L'architecture d'intérieur au Maroc allie design contemporain et artisanat traditionnel : zellige, tadelakt, bois de cèdre et fer forgé. Un architecte d'intérieur conçoit l'agencement des espaces, choisit les matériaux et coordonne les artisans (mâalem). Il intervient sur les appartements, villas, riads, hôtels et espaces commerciaux pour créer des intérieurs fonctionnels et esthétiques.",
    keywords: ["architecte intérieur", "décorateur", "aménagement intérieur", "architecte intérieur maroc", "décoration maison maroc"],
  },
  {
    slug: "riad-patrimoine",
    label: "Riad & Patrimoine",
    description: "rénovation de riads, restauration de patrimoine et architecture traditionnelle marocaine",
    seoDescription: "La restauration de riads et du patrimoine architectural marocain requiert une expertise spécifique : techniques de construction en terre (pisé), charpente en bois de cèdre, zelliges et moucharabiehs. L'architecte patrimoine travaille en conformité avec les exigences des ABF (Architectes des Bâtiments de France marocains) et les cahiers des charges UNESCO pour les médinas classées de Fès, Marrakech et Meknès.",
    keywords: ["architecte riad", "rénovation riad", "restauration patrimoine", "architecte riad maroc", "rénovation riad marrakech"],
  },
  {
    slug: "eco-construction",
    label: "Éco-construction",
    description: "bâtiments durables, bioclimatiques, énergie solaire et matériaux écologiques",
    seoDescription: "L'éco-construction au Maroc répond aux enjeux climatiques avec des bâtiments bioclimatiques, l'intégration de panneaux solaires (le Maroc bénéficie de 3 000 heures d'ensoleillement par an), l'isolation thermique performante et l'utilisation de matériaux locaux durables comme la terre crue et la pierre. L'architecte éco-construction applique la RTCM (Réglementation Thermique de Construction au Maroc) et vise les certifications HQE et LEED.",
    keywords: ["architecte écologique", "éco-construction", "maison passive", "construction durable maroc", "maison bioclimatique maroc"],
  },
  {
    slug: "urbanisme",
    label: "Urbanisme",
    description: "plans d'aménagement, lotissements, ZAC et projets d'urbanisme",
    seoDescription: "L'urbanisme au Maroc couvre l'élaboration des plans d'aménagement (PA), des plans de zonage, des études d'impact et la conception de lotissements et zones d'activités. L'urbaniste architecte travaille en coordination avec les Agences Urbaines et les communes pour assurer la conformité des projets aux documents d'urbanisme. Il intervient sur les permis de lotir, les études de densification et les projets de requalification urbaine.",
    keywords: ["urbaniste", "aménagement urbain", "plan d'aménagement", "urbaniste maroc", "lotissement maroc"],
  },
];

export function getSpecialtyBySlug(slug: string): Specialty | undefined {
  return SPECIALTIES_SEO.find((s) => s.slug === slug);
}

export const SPECIALTY_SLUGS = SPECIALTIES_SEO.map((s) => s.slug);
