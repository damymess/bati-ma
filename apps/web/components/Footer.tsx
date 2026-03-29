import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const CITIES = [
  { slug: "casablanca", name: "Casablanca" },
  { slug: "marrakech", name: "Marrakech" },
  { slug: "rabat", name: "Rabat" },
  { slug: "tanger", name: "Tanger" },
  { slug: "agadir", name: "Agadir" },
  { slug: "fes", name: "Fès" },
];

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-950 text-stone-400">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white">
                <span className="text-xs font-bold text-stone-900">B</span>
              </div>
              <span className="text-[15px] font-semibold text-white">
                Bati<span className="text-stone-500">.ma</span>
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-stone-500">
              L&apos;annuaire de référence des architectes au Maroc.
              Portfolios, avis et devis gratuit.
            </p>
          </div>

          {/* Villes */}
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-stone-500">
              Par ville
            </h4>
            <ul className="space-y-2">
              {CITIES.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/architecte/${c.slug}`}
                    className="text-sm text-stone-500 transition-colors hover:text-white"
                  >
                    Architecte {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Spécialités */}
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-stone-500">
              Spécialités
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/architecte-interieur" className="text-stone-500 hover:text-white transition-colors">
                  Architecture d&apos;intérieur
                </Link>
              </li>
              <li>
                <Link href="/architecte-interieur/marrakech" className="text-stone-500 hover:text-white transition-colors">
                  Rénovation riad
                </Link>
              </li>
              <li>
                <Link href="/architecte/casablanca" className="text-stone-500 hover:text-white transition-colors">
                  Villa & résidentiel
                </Link>
              </li>
              <li>
                <Link href="/architecte/tanger" className="text-stone-500 hover:text-white transition-colors">
                  Commercial & hôtellerie
                </Link>
              </li>
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-stone-500">
              Ressources
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/guide" className="text-stone-500 hover:text-white transition-colors">
                  Guides & articles
                </Link>
              </li>
              <li>
                <Link href="/appels-offres" className="text-stone-500 hover:text-white transition-colors">
                  Appels d&apos;offres
                </Link>
              </li>
              <li>
                <Link href="/forum" className="text-stone-500 hover:text-white transition-colors">
                  Communauté / Forum
                </Link>
              </li>
              <li>
                <Link href="/inscription-architecte" className="text-stone-500 hover:text-white transition-colors">
                  Inscription architecte
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-stone-500 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-stone-800" />

        <div className="flex flex-col items-center justify-between gap-2 text-xs text-stone-600 sm:flex-row">
          <p>© 2026 Bati.ma — Tous droits réservés</p>
          <div className="flex gap-4">
            <Link href="/mentions-legales" className="hover:text-stone-400 transition-colors">
              Mentions légales
            </Link>
            <Link href="/contact" className="hover:text-stone-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
