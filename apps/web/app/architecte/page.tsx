import type { Metadata } from "next";
import Link from "next/link";
import { CITIES } from "@/lib/cities";

export const metadata: Metadata = {
  title: "Architectes au Maroc — Annuaire par Ville",
  description:
    "Trouvez un architecte dans toutes les villes du Maroc. Casablanca, Marrakech, Rabat, Tanger, Agadir, Fès. Professionnels vérifiés, portfolios et devis gratuit.",
  alternates: { canonical: "https://bati.ma/architecte" },
};

export default function ArchitectesPage() {
  return (
    <section className="py-14 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-stone-900 mb-2">
          Architectes au Maroc
        </h1>
        <p className="text-stone-500 mb-10">
          Choisissez votre ville pour trouver un architecte
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CITIES.map((c) => (
            <Link
              key={c.slug}
              href={`/architecte/${c.slug}`}
              className="group block bg-white border border-stone-200 rounded-xl p-5 hover:border-[#b5522a]/40 hover:shadow-sm transition-all"
            >
              <h2 className="font-semibold text-stone-900 group-hover:text-[#b5522a] transition-colors">
                Architecte {c.name}
              </h2>
              <p className="text-xs text-stone-400 mt-0.5">{c.region}</p>
              <p className="text-sm text-stone-500 mt-2 leading-relaxed line-clamp-2">
                {c.description.slice(0, 110)}...
              </p>
              <div className="flex items-center justify-between mt-3">
                <span className="text-xs text-stone-400">
                  {c.architectCount}+ architectes
                </span>
                <span className="text-xs text-[#b5522a] font-medium">Voir →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
