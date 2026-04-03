import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ArrowRight, Clock } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GUIDES } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Guides Architecture Maroc — Conseils, Réglementation & Tendances | Bati.ma",
  description:
    "Guides pratiques pour les architectes et maîtres d'ouvrage au Maroc : choisir son architecte, permis de construire, honoraires, éco-construction, rénovation de riad et actualités du secteur.",
  openGraph: {
    title: "Guides Architecture Maroc | Bati.ma",
    description:
      "Tous les guides pratiques pour vos projets d'architecture au Maroc.",
  },
  alternates: { canonical: "https://bati.ma/guide" },
};

const categoryColors: Record<string, string> = {
  "Guide pratique": "bg-blue-50 text-blue-700",
  Tarifs: "bg-emerald-50 text-emerald-700",
  Réglementation: "bg-amber-50 text-amber-700",
  Actualité: "bg-purple-50 text-purple-700",
  Business: "bg-rose-50 text-rose-700",
};

export default function GuidesListingPage() {
  const categories = [...new Set(GUIDES.map((g) => g.category))];

  return (
    <>
      <Breadcrumb items={[
        { label: "Accueil", href: "/" },
        { label: "Guides & Articles" },
      ]} />
      {/* Hero */}
      <section className="bg-stone-950 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 mb-6">
            <BookOpen className="h-4 w-4 text-[#b5522a]" />
            <span className="text-xs font-medium text-stone-300">
              {GUIDES.length} guides & articles
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Guides <span className="text-[#b5522a]">Architecture</span> au
            Maroc
          </h1>
          <p className="text-stone-400 max-w-xl mx-auto text-sm sm:text-base">
            Conseils pratiques, réglementation, tendances et actualités du
            secteur de l&apos;architecture et du BTP au Maroc.
          </p>
        </div>
      </section>

      {/* Catégories */}
      <section className="py-8 border-b border-stone-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Badge
                key={cat}
                variant="secondary"
                className={`text-xs cursor-default ${categoryColors[cat] ?? ""}`}
              >
                {cat}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {GUIDES.map((guide) => (
              <Link key={guide.slug} href={`/guide/${guide.slug}`}>
                <Card className="h-full transition-all hover:border-[#b5522a]/30 hover:shadow-md cursor-pointer group">
                  <CardContent className="p-5 flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge
                        variant="secondary"
                        className={`text-[10px] ${categoryColors[guide.category] ?? ""}`}
                      >
                        {guide.category}
                      </Badge>
                      <span className="flex items-center gap-1 text-[10px] text-stone-400">
                        <Clock className="h-3 w-3" />
                        {guide.readTime}
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-stone-900 group-hover:text-[#b5522a] transition-colors mb-2 line-clamp-2">
                      {guide.title}
                    </h3>
                    <p className="text-xs text-stone-500 line-clamp-3 mb-4 flex-1">
                      {guide.description}
                    </p>
                    <span className="text-xs font-medium text-[#b5522a] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Lire le guide <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
