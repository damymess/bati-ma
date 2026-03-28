import type { Metadata } from "next";
import Link from "next/link";
import { CITIES } from "@/lib/cities";

export const metadata: Metadata = {
  title: "Architecte d'Intérieur au Maroc — Annuaire Designers",
  description:
    "Trouvez un architecte d'intérieur qualifié au Maroc. Casablanca, Marrakech, Rabat, Tanger. Portfolios, avis et devis gratuit.",
  alternates: { canonical: "https://bati.ma/architecte-interieur" },
};

export default function ArchitectesInterieurPage() {
  return (
    <section className="py-14 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-stone-900 mb-2">
          Architectes d&apos;Intérieur au Maroc
        </h1>
        <p className="text-stone-500 mb-10">
          Designers et décorateurs certifiés dans toutes les villes du Maroc
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CITIES.map((c) => (
            <Link
              key={c.slug}
              href={`/architecte-interieur/${c.slug}`}
              className="group block bg-white border border-stone-200 rounded-xl p-5 hover:border-[#b5522a]/40 hover:shadow-sm transition-all"
            >
              <h2 className="font-semibold text-stone-900 group-hover:text-[#b5522a] transition-colors">
                Architecte d&apos;intérieur {c.name}
              </h2>
              <p className="text-xs text-stone-400 mt-0.5">{c.region}</p>
              <p className="text-sm text-stone-500 mt-2 leading-relaxed line-clamp-2">
                Designers et décorateurs d&apos;intérieur à {c.name}. Projets résidentiels
                et commerciaux.
              </p>
              <p className="text-xs text-[#b5522a] font-medium mt-3">Voir →</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
