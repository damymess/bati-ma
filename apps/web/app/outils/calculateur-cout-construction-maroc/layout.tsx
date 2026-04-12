import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculateur coût construction au Maroc 2026 — Estimez votre budget",
  description:
    "Estimez gratuitement le coût de construction de votre maison, villa ou immeuble au Maroc. Prix par ville (Casablanca, Marrakech, Rabat), par gamme de finitions et par type de projet. Données 2026.",
  keywords: [
    "calculateur cout construction maroc",
    "prix construction maison maroc",
    "budget construction villa maroc",
    "cout construction m2 maroc 2026",
    "estimation travaux maroc",
    "prix construction casablanca",
    "cout construction marrakech",
  ],
  alternates: { canonical: "https://bati.ma/outils/calculateur-cout-construction-maroc" },
  openGraph: {
    title: "Calculateur coût construction au Maroc 2026",
    description: "Estimez gratuitement le budget de votre projet de construction au Maroc. Prix actualisés par ville et par gamme.",
    url: "https://bati.ma/outils/calculateur-cout-construction-maroc",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
