"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { CITIES } from "@/lib/cities";
import {
  PROJECT_TYPES,
  QUALITY_LEVELS,
  OPTIONS,
  calculateEstimation,
  formatPrice,
  type ProjectType,
  type QualityLevel,
  type OptionKey,
} from "@/lib/construction-costs";

const FAQ = [
  {
    q: "Comment est calculé le coût de construction au Maroc ?",
    a: "Le coût est estimé en multipliant la surface habitable par un prix au m² qui varie selon la ville (coefficient local), la gamme de finitions (économique à luxe) et le type de projet. Les données proviennent des moyennes du marché BTP marocain en 2026, issues des études FNBTP et de l'Ordre des Architectes.",
  },
  {
    q: "Ce calculateur remplace-t-il un devis d'architecte ?",
    a: "Non, cet outil donne une estimation indicative pour cadrer votre budget. Seul un architecte peut établir un devis précis après étude de votre terrain, des contraintes du plan d'aménagement et de vos besoins spécifiques. Demandez gratuitement 3 devis sur Bati.ma.",
  },
  {
    q: "Pourquoi les prix varient-ils autant entre les villes ?",
    a: "Les écarts s'expliquent par le coût de la main-d'œuvre locale, le prix des matériaux (transport), la demande immobilière et les normes d'urbanisme spécifiques. Casablanca et Marrakech sont les plus chers en raison de la forte demande et des standards élevés.",
  },
  {
    q: "Que comprennent les honoraires d'architecte ?",
    a: "Pour une mission complète : conception (esquisse, APS, APD), dossier permis de construire, plans d'exécution et suivi de chantier. Les honoraires représentent 8 à 15% du coût des travaux selon la complexité du projet.",
  },
  {
    q: "Le terrain est-il inclus dans l'estimation ?",
    a: "Le coût du terrain est séparé car il varie énormément selon le quartier et la nature du foncier. Vous pouvez ajouter une estimation terrain en renseignant la surface de votre parcelle dans l'outil.",
  },
];

const BUDGET_BREAKDOWN = [
  { label: "Gros œuvre", key: "grosOeuvre" as const, color: "#b5522a" },
  { label: "Second œuvre", key: "secondOeuvre" as const, color: "#d4845a" },
  { label: "Finitions", key: "finitions" as const, color: "#e8b89a" },
  { label: "Architecte", key: "architecte" as const, color: "#7c3a1a" },
  { label: "Options", key: "options" as const, color: "#a0816c" },
];

export default function CalculateurPage() {
  const [city, setCity] = useState("casablanca");
  const [projectType, setProjectType] = useState<ProjectType>("villa");
  const [quality, setQuality] = useState<QualityLevel>("moyen");
  const [surface, setSurface] = useState(150);
  const [landSurface, setLandSurface] = useState<number | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<OptionKey[]>([]);
  const [showResults, setShowResults] = useState(false);

  const result = useMemo(
    () => calculateEstimation(city, projectType, quality, surface, landSurface, selectedOptions),
    [city, projectType, quality, surface, landSurface, selectedOptions],
  );

  const toggleOption = (opt: OptionKey) => {
    setSelectedOptions((prev) => (prev.includes(opt) ? prev.filter((o) => o !== opt) : [...prev, opt]));
  };

  const totalForPie = result.grosOeuvre.max + result.secondOeuvre.max + result.finitions.max + result.architecte.max + result.options.max;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Calculateur coût construction Maroc",
    description: "Estimez le coût de construction de votre maison, villa ou immeuble au Maroc. Prix par ville, par gamme et par type de projet.",
    url: "https://bati.ma/outils/calculateur-cout-construction-maroc",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    offers: { "@type": "Offer", price: "0", priceCurrency: "MAD" },
    author: { "@type": "Organization", name: "Bati.ma", url: "https://bati.ma" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />

      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Outils", href: "/outils/calculateur-cout-construction-maroc" }, { label: "Calculateur coût construction" }]} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#f5f0ea] to-white py-10 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs text-[#b5522a] font-semibold uppercase tracking-widest">Outil gratuit</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mt-2 mb-3 leading-tight">
            Calculateur coût construction au Maroc 2026
          </h1>
          <p className="text-stone-600 leading-relaxed max-w-2xl mx-auto">
            Estimez le budget de votre projet de construction : villa, appartement, immeuble ou riad. Prix actualisés par ville et par gamme de finitions.
          </p>
        </div>
      </section>

      {/* Calculator Form */}
      <section className="py-10 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {/* Type de projet */}
            <div>
              <label className="block text-sm font-semibold text-stone-900 mb-3">Type de projet</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {PROJECT_TYPES.map((type) => (
                  <button
                    key={type.value}
                    onClick={() => setProjectType(type.value)}
                    className={`rounded-lg border px-4 py-3 text-sm transition-all ${
                      projectType === type.value
                        ? "border-[#b5522a] bg-[#b5522a]/5 text-[#b5522a] font-medium"
                        : "border-stone-200 text-stone-600 hover:border-stone-300"
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Ville */}
            <div>
              <label className="block text-sm font-semibold text-stone-900 mb-3">Ville</label>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {CITIES.map((c) => (
                  <button
                    key={c.slug}
                    onClick={() => setCity(c.slug)}
                    className={`rounded-lg border px-3 py-2 text-sm transition-all ${
                      city === c.slug
                        ? "border-[#b5522a] bg-[#b5522a]/5 text-[#b5522a] font-medium"
                        : "border-stone-200 text-stone-600 hover:border-stone-300"
                    }`}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Gamme */}
            <div>
              <label className="block text-sm font-semibold text-stone-900 mb-3">Gamme de finitions</label>
              <div className="grid grid-cols-2 gap-2">
                {QUALITY_LEVELS.map((q) => (
                  <button
                    key={q.value}
                    onClick={() => setQuality(q.value)}
                    className={`rounded-lg border px-4 py-3 text-left transition-all ${
                      quality === q.value
                        ? "border-[#b5522a] bg-[#b5522a]/5"
                        : "border-stone-200 hover:border-stone-300"
                    }`}
                  >
                    <span className={`text-sm font-medium ${quality === q.value ? "text-[#b5522a]" : "text-stone-900"}`}>
                      {q.label}
                    </span>
                    <span className="block text-xs text-stone-500 mt-0.5">{q.description}</span>
                    <span className="block text-xs text-stone-400 mt-1">
                      {new Intl.NumberFormat("fr-MA").format(q.priceMin)} – {new Intl.NumberFormat("fr-MA").format(q.priceMax)} MAD/m²
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Surface */}
            <div>
              <label className="block text-sm font-semibold text-stone-900 mb-3">
                Surface habitable : <span className="text-[#b5522a]">{surface} m²</span>
              </label>
              <input
                type="range"
                min={50}
                max={500}
                step={10}
                value={surface}
                onChange={(e) => setSurface(Number(e.target.value))}
                className="w-full accent-[#b5522a]"
              />
              <div className="flex justify-between text-xs text-stone-400 mt-1">
                <span>50 m²</span>
                <span>500 m²</span>
              </div>
            </div>

            {/* Surface terrain (optionnel) */}
            <div>
              <label className="block text-sm font-semibold text-stone-900 mb-2">
                Surface terrain (optionnel)
              </label>
              <p className="text-xs text-stone-500 mb-2">Pour estimer le coût du foncier</p>
              <input
                type="number"
                min={0}
                max={5000}
                placeholder="Ex: 200 m²"
                value={landSurface ?? ""}
                onChange={(e) => setLandSurface(e.target.value ? Number(e.target.value) : null)}
                className="w-full rounded-lg border border-stone-200 px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:border-[#b5522a] focus:outline-none focus:ring-1 focus:ring-[#b5522a]"
              />
            </div>

            {/* Options */}
            <div>
              <label className="block text-sm font-semibold text-stone-900 mb-3">Options supplémentaires</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => toggleOption(opt.value)}
                    className={`rounded-lg border px-4 py-3 text-left transition-all ${
                      selectedOptions.includes(opt.value)
                        ? "border-[#b5522a] bg-[#b5522a]/5"
                        : "border-stone-200 hover:border-stone-300"
                    }`}
                  >
                    <span className={`text-sm ${selectedOptions.includes(opt.value) ? "text-[#b5522a] font-medium" : "text-stone-700"}`}>
                      {opt.label}
                    </span>
                    <span className="block text-xs text-stone-400 mt-0.5">
                      +{new Intl.NumberFormat("fr-MA").format(opt.costMin)} – {new Intl.NumberFormat("fr-MA").format(opt.costMax)} {opt.unit}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Button
              size="lg"
              className="w-full h-12 text-base rounded-xl"
              onClick={() => setShowResults(true)}
            >
              Calculer mon budget
            </Button>
          </div>

          {/* Results */}
          {showResults && (
            <div className="mt-10 space-y-8 animate-in fade-in duration-500">
              {/* Total */}
              <div className="rounded-2xl border-2 border-[#b5522a]/20 bg-gradient-to-br from-[#f5f0ea] to-white p-6 text-center">
                <p className="text-sm text-stone-500 mb-1">Estimation budget construction</p>
                <p className="text-3xl sm:text-4xl font-bold text-[#b5522a]">
                  {formatPrice(result.total.min)} – {formatPrice(result.total.max)}
                </p>
                <p className="text-xs text-stone-400 mt-2">Hors terrain • Prix indicatifs 2026</p>
                {result.totalAvecTerrain && (
                  <div className="mt-4 pt-4 border-t border-stone-200">
                    <p className="text-sm text-stone-500 mb-1">Avec terrain ({landSurface} m²)</p>
                    <p className="text-xl font-bold text-stone-900">
                      {formatPrice(result.totalAvecTerrain.min)} – {formatPrice(result.totalAvecTerrain.max)}
                    </p>
                  </div>
                )}
              </div>

              {/* Breakdown table */}
              <div className="rounded-xl border border-stone-200 overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-stone-50">
                      <th className="text-left px-4 py-3 font-medium text-stone-600">Poste</th>
                      <th className="text-right px-4 py-3 font-medium text-stone-600">Fourchette basse</th>
                      <th className="text-right px-4 py-3 font-medium text-stone-600">Fourchette haute</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {BUDGET_BREAKDOWN.map(({ label, key, color }) => (
                      <tr key={key} className="hover:bg-stone-50">
                        <td className="px-4 py-3 flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                          {label}
                        </td>
                        <td className="text-right px-4 py-3 text-stone-600">{formatPrice(result[key].min)}</td>
                        <td className="text-right px-4 py-3 font-medium text-stone-900">{formatPrice(result[key].max)}</td>
                      </tr>
                    ))}
                    {result.terrain && (
                      <tr className="hover:bg-stone-50">
                        <td className="px-4 py-3 flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full flex-shrink-0 bg-stone-400" />
                          Terrain ({landSurface} m²)
                        </td>
                        <td className="text-right px-4 py-3 text-stone-600">{formatPrice(result.terrain.min)}</td>
                        <td className="text-right px-4 py-3 font-medium text-stone-900">{formatPrice(result.terrain.max)}</td>
                      </tr>
                    )}
                    <tr className="bg-[#f5f0ea] font-semibold">
                      <td className="px-4 py-3 text-stone-900">Total</td>
                      <td className="text-right px-4 py-3 text-stone-700">{formatPrice(result.totalAvecTerrain?.min ?? result.total.min)}</td>
                      <td className="text-right px-4 py-3 text-[#b5522a]">{formatPrice(result.totalAvecTerrain?.max ?? result.total.max)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Visual breakdown bar */}
              <div>
                <p className="text-sm font-medium text-stone-900 mb-3">Répartition du budget</p>
                <div className="h-8 rounded-full overflow-hidden flex">
                  {BUDGET_BREAKDOWN.map(({ label, key, color }) => {
                    const pct = totalForPie > 0 ? (result[key].max / totalForPie) * 100 : 0;
                    if (pct < 1) return null;
                    return (
                      <div
                        key={key}
                        className="h-full transition-all"
                        style={{ width: `${pct}%`, backgroundColor: color }}
                        title={`${label}: ${Math.round(pct)}%`}
                      />
                    );
                  })}
                </div>
                <div className="flex flex-wrap gap-3 mt-3">
                  {BUDGET_BREAKDOWN.map(({ label, key, color }) => {
                    const pct = totalForPie > 0 ? Math.round((result[key].max / totalForPie) * 100) : 0;
                    if (pct < 1) return null;
                    return (
                      <div key={key} className="flex items-center gap-1.5 text-xs text-stone-600">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />
                        {label} ({pct}%)
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CTA devis */}
              <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-6 text-center">
                <p className="font-semibold text-stone-900 mb-2">Obtenez un devis précis</p>
                <p className="text-sm text-stone-600 mb-4">
                  Cette estimation est indicative. Pour un budget précis, comparez gratuitement les devis de 3 architectes vérifiés dans votre ville.
                </p>
                <Button size="lg" className="rounded-full px-8" asChild>
                  <Link href="/demande-devis">Demander un devis gratuit</Link>
                </Button>
              </div>

              {/* Methodologie */}
              <div className="text-xs text-stone-400 space-y-2">
                <p className="font-medium text-stone-500">Méthodologie et sources</p>
                <p>Les prix de base sont calibrés sur le <strong>Barème des coûts de la construction du CNOA</strong> (Conseil National de l&apos;Ordre des Architectes, 2021) inflaté de +25% pour 2026 (hausse cumulée matériaux et main-d&apos;œuvre). Les coefficients par ville sont dérivés des données marché (BniDark.com, Rifaa.ma) et cross-validés avec les études de Geniecivil.ma et Francobat.ma.</p>
                <p>Honoraires architecte : minimums réglementaires CNOA (5% mission complète, 3% habitat social). Répartition budget : gros œuvre 45%, second œuvre 25%, finitions 30% (source : Habitat Services Plus, Loutfi Aménagement). Prix terrain : fourchettes par ville hors quartiers premium.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 px-4 sm:px-6 bg-stone-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-stone-900 mb-5">Questions fréquentes</h2>
          <div className="space-y-3">
            {FAQ.map((f) => (
              <details key={f.q} className="group border border-stone-200 rounded-lg overflow-hidden bg-white">
                <summary className="flex items-center justify-between px-4 py-3 cursor-pointer text-sm font-medium text-stone-800 hover:bg-stone-50">
                  {f.q}
                  <span className="text-stone-400 group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <div className="px-4 pb-4 pt-1 text-sm text-stone-600 leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Guides liés */}
      <section className="py-10 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-lg font-semibold text-stone-900 mb-4">Guides pour aller plus loin</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { slug: "cout-construction-maison-maroc", title: "Budget construction maison au Maroc", cat: "Budget & Tarifs" },
              { slug: "honoraires-architecte-maroc", title: "Honoraires architecte au Maroc", cat: "Tarifs" },
              { slug: "permis-de-construire-maroc", title: "Permis de construire au Maroc", cat: "Réglementation" },
              { slug: "etapes-construire-villa", title: "Étapes pour construire une villa", cat: "Guide pratique" },
            ].map((g) => (
              <Link
                key={g.slug}
                href={`/guide/${g.slug}`}
                className="block border border-stone-100 rounded-lg p-4 hover:border-[#b5522a]/30 transition-colors"
              >
                <p className="text-xs text-[#b5522a] font-medium uppercase tracking-wide mb-1">{g.cat}</p>
                <p className="font-medium text-stone-900 text-sm">{g.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA sticky mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur border-t border-stone-200 p-3 sm:hidden z-50">
        <Link
          href="/demande-devis"
          className="block w-full bg-[#b5522a] text-white text-center py-3 rounded-lg font-semibold text-sm"
        >
          Demander un devis gratuit
        </Link>
      </div>
    </>
  );
}
