export type Guide = {
  slug: string;
  title: string;
  description: string;
  readTime: string;
  category: string;
  content: string;
};

export const GUIDES: Guide[] = [
  {
    slug: "comment-choisir-architecte-maroc",
    title: "Comment choisir son architecte au Maroc",
    description:
      "Guide complet pour choisir le bon architecte au Maroc : critères de sélection, questions à poser, contrats et honoraires. Tout ce que vous devez savoir.",
    readTime: "8 min",
    category: "Guide pratique",
    content: "",
  },
  {
    slug: "honoraires-architecte-maroc",
    title: "Honoraires d'un architecte au Maroc : tarifs et modes de calcul",
    description:
      "Combien coûte un architecte au Maroc ? Honoraires en pourcentage, forfait ou au temps passé. Guide complet des tarifs et modes de rémunération.",
    readTime: "6 min",
    category: "Tarifs",
    content: "",
  },
  {
    slug: "permis-de-construire-maroc",
    title: "Permis de construire au Maroc : procédure complète 2026",
    description:
      "Comment obtenir un permis de construire au Maroc ? Dossier à constituer, délais, autorités compétentes et rôle de l'architecte. Guide 2026.",
    readTime: "10 min",
    category: "Réglementation",
    content: "",
  },
  {
    slug: "plan-amenagement-maroc",
    title: "Plan d'aménagement au Maroc : zonage, règles et démarches 2026",
    description:
      "Tout comprendre sur le plan d'aménagement au Maroc : zones réglementaires, COS, CES, hauteurs maximales et démarches auprès de l'agence urbaine.",
    readTime: "8 min",
    category: "Urbanisme",
    content: "",
  },
  {
    slug: "plan-villa-maroc",
    title: "Plan de villa au Maroc : styles, superficies et coûts 2026",
    description:
      "Guide complet pour concevoir votre plan de villa au Maroc : styles architecturaux, superficies courantes, étapes de conception et coûts par m² selon les villes.",
    readTime: "8 min",
    category: "Plans & Construction",
    content: "",
  },
  {
    slug: "renovation-riad-marrakech",
    title: "Rénover un riad à Marrakech : guide complet et budget 2026",
    description:
      "Comment rénover un riad à Marrakech ? Spécificités de la médina, règles ADER/UNESCO, budget rénovation (50 000–500 000 MAD), artisans et rentabilité.",
    readTime: "10 min",
    category: "Rénovation",
    content: "",
  },
  {
    slug: "architecture-marocaine",
    title: "Architecture marocaine : styles, éléments et traditions",
    description:
      "Découvrez l'architecture marocaine à travers ses dynasties, ses éléments emblématiques (zellige, moucharabieh, patio) et ses styles régionaux de Fès à Casablanca.",
    readTime: "10 min",
    category: "Architecture",
    content: "",
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

export const GUIDE_SLUGS = GUIDES.map((g) => g.slug);
