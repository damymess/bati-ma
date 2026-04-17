/**
 * Base de données des auteurs éditoriaux de bati.ma.
 *
 * Utilisée pour :
 * - Page /a-propos (équipe)
 * - Composant AuthorBio sur chaque guide
 * - Schema.org Person JSON-LD (E-E-A-T signals)
 *
 * Pour un nouveau profil : ajouter ici + mettre la photo dans /public/team/
 */

export type Author = {
  id: string;
  name: string;
  role: string;
  shortBio: string; // 1-2 phrases pour le card
  bio: string; // paragraphe complet pour page /a-propos
  expertise: string[];
  avatar: string; // chemin dans /public/
  initials: string;
  since: string; // année de rejoindre bati.ma
  social: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
};

export const AUTHORS: Record<string, Author> = {
  imad: {
    id: "imad-messaoudi",
    name: "Imad Messaoudi",
    role: "Fondateur de Bati.ma",
    shortBio:
      "Entrepreneur marocain passionné par la construction et l'architecture. Fondateur de bati.ma.",
    bio: "Imad Messaoudi est le fondateur de Bati.ma. Après plusieurs années à accompagner des projets de construction et rénovation au Maroc — notamment pour des MRE investissant depuis l'étranger — il a lancé bati.ma en 2025 pour centraliser l'information sur le BTP marocain et aider les particuliers à trouver l'architecte adapté à leur projet. Ses guides s'appuient sur le barème CNOA, les textes de loi marocains (loi 16-89, RPS 2011, RTCM) et les pratiques observées sur le terrain dans les 14 principales villes du royaume.",
    expertise: [
      "BTP Maroc",
      "Réglementation construction",
      "Barèmes CNOA",
      "Architecture résidentielle",
      "Investissement MRE",
    ],
    avatar: "/team/imad.jpg",
    initials: "IM",
    since: "2025",
    social: {
      linkedin: "https://www.linkedin.com/company/bati-ma/",
      email: "contact@bati.ma",
    },
  },
};

export const DEFAULT_AUTHOR_ID = "imad";

export function getAuthor(id?: string): Author {
  return AUTHORS[id || DEFAULT_AUTHOR_ID] || AUTHORS[DEFAULT_AUTHOR_ID];
}

/**
 * Génère le JSON-LD Person pour un auteur (à inclure dans le schema Article).
 */
export function authorJsonLd(author: Author) {
  return {
    "@type": "Person",
    "@id": `https://bati.ma/a-propos#${author.id}`,
    name: author.name,
    url: `https://bati.ma/a-propos#${author.id}`,
    image: author.avatar.startsWith("http") ? author.avatar : `https://bati.ma${author.avatar}`,
    jobTitle: author.role,
    description: author.shortBio,
    knowsAbout: author.expertise,
    sameAs: [author.social.linkedin, author.social.twitter].filter(Boolean),
    worksFor: {
      "@type": "Organization",
      name: "Bati.ma",
      url: "https://bati.ma",
    },
  };
}
