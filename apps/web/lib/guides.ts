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
  {
    slug: "cout-construction-maison-maroc",
    title: "Coût de construction d'une maison au Maroc en 2026",
    description:
      "Quel budget pour construire une maison au Maroc ? Prix au m² par ville, coûts des matériaux, honoraires architecte et frais annexes. Estimations 2026 en MAD.",
    readTime: "9 min",
    category: "Budget & Tarifs",
    content: "",
  },
  {
    slug: "maison-marocaine-moderne",
    title: "Maison marocaine moderne : styles, plans et inspirations 2026",
    description:
      "Tout sur la maison marocaine moderne : fusion architecture traditionnelle et contemporaine, éléments clés (patio, zellige, tadelakt), plans types et conseils d'architectes.",
    readTime: "8 min",
    category: "Architecture",
    content: "",
  },
  {
    slug: "telecharger-plan-villa-maroc",
    title: "Plan de villa au Maroc : comment obtenir les plans de votre projet",
    description:
      "Comment obtenir un plan de villa au Maroc ? Différence entre plans architecturaux et plans d'exécution, ce qu'un architecte livre, formats PDF et DWG, et étapes de validation.",
    readTime: "6 min",
    category: "Plans & Construction",
    content: "",
  },
  {
    slug: "concours-architecture-maroc-2026",
    title: "7 concours d'architecture ouverts aux architectes marocains en 2026",
    description:
      "Découvrez les concours internationaux d'architecture accessibles aux professionnels et étudiants marocains en 2026 : prix, conditions et calendrier.",
    readTime: "7 min",
    category: "Actualité",
    content: "",
  },
  {
    slug: "architecture-coupe-du-monde-2030-maroc",
    title: "Les grands projets architecturaux du Mondial 2030 au Maroc",
    description:
      "Stades, infrastructures, hôtels : les méga-projets architecturaux liés à la Coupe du Monde 2030 au Maroc. Opportunités pour les architectes.",
    readTime: "9 min",
    category: "Actualité",
    content: "",
  },
  {
    slug: "marche-btp-maroc-2026",
    title: "Le marché BTP au Maroc en 2026 : chiffres clés et opportunités",
    description:
      "550 milliards DH d'investissements, CAN 2025, Mondial 2030 : analyse du marché de la construction au Maroc et opportunités pour les architectes.",
    readTime: "8 min",
    category: "Business",
    content: "",
  },
  {
    slug: "eco-construction-maroc",
    title: "L'éco-construction au Maroc : matériaux, normes et architectes spécialisés",
    description:
      "Guide de l'éco-construction au Maroc : RTCM 2024, matériaux durables, certification HQE et architectes spécialisés par ville.",
    readTime: "10 min",
    category: "Guide pratique",
    content: "",
  },
  {
    slug: "renovation-riad-maroc",
    title: "Guide complet de la rénovation de riad au Maroc",
    description:
      "Tout savoir pour rénover un riad au Maroc : réglementation, artisans, coûts, techniques traditionnelles (zellige, tadelakt) et erreurs à éviter.",
    readTime: "12 min",
    category: "Guide pratique",
    content: "",
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

export const GUIDE_SLUGS = GUIDES.map((g) => g.slug);
