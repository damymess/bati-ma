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
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

export const GUIDE_SLUGS = GUIDES.map((g) => g.slug);
