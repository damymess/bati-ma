import {
  Scale,
  Ruler,
  Briefcase,
  Package,
  Users,
  Landmark,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ForumCategory = {
  slug: string;
  name: string;
  description: string;
  icon: LucideIcon;
  threadCount: number;
  color: string;
};

export type ForumThread = {
  id: string;
  title: string;
  author: string;
  authorRole: string;
  category: string;
  createdAt: string;
  replies: number;
  views: number;
  lastActivity: string;
  pinned?: boolean;
};

export const FORUM_CATEGORIES: ForumCategory[] = [
  {
    slug: "reglementation",
    name: "Réglementation & Permis",
    description:
      "Loi 16-89, permis de construire, autorisations, normes parasismiques, urbanisme réglementaire",
    icon: Scale,
    threadCount: 47,
    color: "text-blue-600 bg-blue-50",
  },
  {
    slug: "conception-techniques",
    name: "Conception & Techniques",
    description:
      "Plans, BIM, logiciels (AutoCAD, Revit, ArchiCAD), calculs de structure, détails techniques",
    icon: Ruler,
    threadCount: 63,
    color: "text-emerald-600 bg-emerald-50",
  },
  {
    slug: "appels-offres",
    name: "Appels d'offres & Marchés",
    description:
      "Marchés publics, soumissions, cahier des charges, concours d'architecture",
    icon: Landmark,
    threadCount: 31,
    color: "text-amber-600 bg-amber-50",
  },
  {
    slug: "business-gestion",
    name: "Business & Gestion de cabinet",
    description:
      "Honoraires, facturation, assurances, gestion de projet, développement clientèle",
    icon: Briefcase,
    threadCount: 52,
    color: "text-purple-600 bg-purple-50",
  },
  {
    slug: "materiaux-fournisseurs",
    name: "Matériaux & Fournisseurs",
    description:
      "Matériaux de construction, fournisseurs fiables, nouvelles technologies, éco-matériaux",
    icon: Package,
    threadCount: 38,
    color: "text-orange-600 bg-orange-50",
  },
  {
    slug: "emploi-collaboration",
    name: "Offres d'emploi & Collaboration",
    description:
      "Recrutement, stages, partenariats entre architectes, recherche de sous-traitants",
    icon: Users,
    threadCount: 25,
    color: "text-rose-600 bg-rose-50",
  },
];

export const FORUM_THREADS: ForumThread[] = [
  {
    id: "t-001",
    title: "Nouvelle réglementation parasismique RPS 2025 — impact sur les projets en cours ?",
    author: "Karim B.",
    authorRole: "Architecte DPLG, Casablanca",
    category: "reglementation",
    createdAt: "2026-03-25",
    replies: 12,
    views: 340,
    lastActivity: "2026-03-28",
    pinned: true,
  },
  {
    id: "t-002",
    title: "Délai moyen d'obtention du permis de construire à Marrakech ?",
    author: "Leila M.",
    authorRole: "Architecte, Marrakech",
    category: "reglementation",
    createdAt: "2026-03-20",
    replies: 8,
    views: 215,
    lastActivity: "2026-03-27",
  },
  {
    id: "t-003",
    title: "BIM obligatoire pour les marchés publics — qui a déjà franchi le pas ?",
    author: "Youssef A.",
    authorRole: "Architecte BIM Manager, Rabat",
    category: "conception-techniques",
    createdAt: "2026-03-22",
    replies: 19,
    views: 520,
    lastActivity: "2026-03-29",
    pinned: true,
  },
  {
    id: "t-004",
    title: "ArchiCAD 28 vs Revit 2026 : quel logiciel recommandez-vous au Maroc ?",
    author: "Nadia Z.",
    authorRole: "Étudiante en architecture, ENA Rabat",
    category: "conception-techniques",
    createdAt: "2026-03-18",
    replies: 24,
    views: 780,
    lastActivity: "2026-03-28",
  },
  {
    id: "t-005",
    title: "Retour d'expérience : soumission au concours d'architecture du Grand Théâtre de Casablanca",
    author: "Omar H.",
    authorRole: "Architecte associé, Casablanca",
    category: "appels-offres",
    createdAt: "2026-03-15",
    replies: 7,
    views: 290,
    lastActivity: "2026-03-24",
  },
  {
    id: "t-006",
    title: "Comment répondre à un AO sur marchespublics.gov.ma — guide pas à pas",
    author: "Fatima E.",
    authorRole: "Architecte, Tanger",
    category: "appels-offres",
    createdAt: "2026-03-10",
    replies: 15,
    views: 430,
    lastActivity: "2026-03-26",
  },
  {
    id: "t-007",
    title: "Grille d'honoraires 2026 : comment fixer vos tarifs sans brader ?",
    author: "Mehdi K.",
    authorRole: "Architecte senior, Casablanca",
    category: "business-gestion",
    createdAt: "2026-03-24",
    replies: 21,
    views: 610,
    lastActivity: "2026-03-29",
  },
  {
    id: "t-008",
    title: "Assurance décennale : quel contrat pour un jeune cabinet ?",
    author: "Amine S.",
    authorRole: "Architecte indépendant, Fès",
    category: "business-gestion",
    createdAt: "2026-03-19",
    replies: 9,
    views: 185,
    lastActivity: "2026-03-25",
  },
  {
    id: "t-009",
    title: "Trouver ses premiers clients : ma stratégie en sortie d'école",
    author: "Sara D.",
    authorRole: "Jeune architecte, Rabat",
    category: "business-gestion",
    createdAt: "2026-03-12",
    replies: 16,
    views: 445,
    lastActivity: "2026-03-27",
  },
  {
    id: "t-010",
    title: "Béton bas carbone au Maroc : qui fournit ? Retours d'expérience",
    author: "Hassan R.",
    authorRole: "Architecte éco-construction, Agadir",
    category: "materiaux-fournisseurs",
    createdAt: "2026-03-21",
    replies: 11,
    views: 320,
    lastActivity: "2026-03-28",
  },
  {
    id: "t-011",
    title: "Zellige artisanal vs industriel : qualité et fournisseurs de confiance à Fès",
    author: "Rachid T.",
    authorRole: "Architecte patrimoine, Fès",
    category: "materiaux-fournisseurs",
    createdAt: "2026-03-16",
    replies: 6,
    views: 198,
    lastActivity: "2026-03-23",
  },
  {
    id: "t-012",
    title: "[Recrutement] Cabinet à Casablanca cherche architecte 3-5 ans d'expérience",
    author: "Studio Arc",
    authorRole: "Cabinet d'architecture, Casablanca",
    category: "emploi-collaboration",
    createdAt: "2026-03-26",
    replies: 3,
    views: 150,
    lastActivity: "2026-03-28",
  },
  {
    id: "t-013",
    title: "Recherche partenaire pour répondre à un concours international au Maroc",
    author: "Ali F.",
    authorRole: "Architecte urbaniste, Rabat",
    category: "emploi-collaboration",
    createdAt: "2026-03-14",
    replies: 5,
    views: 210,
    lastActivity: "2026-03-22",
  },
  {
    id: "t-014",
    title: "Isolation thermique RTCM 2024 : quelles solutions économiques pour le résidentiel ?",
    author: "Zineb L.",
    authorRole: "Architecte, Meknès",
    category: "conception-techniques",
    createdAt: "2026-03-23",
    replies: 13,
    views: 375,
    lastActivity: "2026-03-29",
  },
  {
    id: "t-015",
    title: "Projets Coupe du Monde 2030 : opportunités pour les architectes marocains",
    author: "Kamal N.",
    authorRole: "Architecte urbaniste, Casablanca",
    category: "appels-offres",
    createdAt: "2026-03-27",
    replies: 18,
    views: 890,
    lastActivity: "2026-03-29",
    pinned: true,
  },
];

export const CATEGORY_SLUGS = FORUM_CATEGORIES.map((c) => c.slug);

export function getCategoryBySlug(slug: string) {
  return FORUM_CATEGORIES.find((c) => c.slug === slug);
}

export function getThreadsByCategory(categorySlug: string) {
  return FORUM_THREADS.filter((t) => t.category === categorySlug).sort(
    (a, b) => {
      if (a.pinned && !b.pinned) return -1;
      if (!a.pinned && b.pinned) return 1;
      return new Date(b.lastActivity).getTime() - new Date(a.lastActivity).getTime();
    }
  );
}

export function getRecentThreads(limit = 5) {
  return [...FORUM_THREADS]
    .sort(
      (a, b) =>
        new Date(b.lastActivity).getTime() - new Date(a.lastActivity).getTime()
    )
    .slice(0, limit);
}
