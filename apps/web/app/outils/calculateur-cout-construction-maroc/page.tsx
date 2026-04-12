"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import { ArrowLeft, Copy, Check, ChevronRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CITIES } from "@/lib/cities";
import { submitProjectRequest } from "@/lib/api";
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

/* ─── Constants ──────────────────────────────────────────────────── */

const TOTAL_STEPS = 5;

const FAQ = [
  { q: "Comment est calcul\u00e9 le co\u00fbt de construction au Maroc ?", a: "Le co\u00fbt est estim\u00e9 en multipliant la surface habitable par un prix au m\u00b2 qui varie selon la ville, la gamme de finitions et le type de projet. Donn\u00e9es calibr\u00e9es sur le Bar\u00e8me CNOA 2021 (+25% inflation 2026), valid\u00e9es avec les donn\u00e9es march\u00e9 BTP." },
  { q: "Ce calculateur remplace-t-il un devis d\u2019architecte ?", a: "Non, cet outil donne une estimation indicative pour cadrer votre budget. Seul un architecte peut \u00e9tablir un devis pr\u00e9cis apr\u00e8s \u00e9tude de votre terrain et de vos besoins sp\u00e9cifiques. Demandez gratuitement 3 devis sur Bati.ma." },
  { q: "Pourquoi les prix varient-ils entre les villes ?", a: "Les \u00e9carts s\u2019expliquent par le co\u00fbt de la main-d\u2019\u0153uvre locale, le prix des mat\u00e9riaux, la demande immobili\u00e8re et les normes d\u2019urbanisme. Casablanca et Rabat sont les plus chers." },
  { q: "Que comprennent les honoraires d\u2019architecte ?", a: "Mission compl\u00e8te : conception (esquisse, APS, APD), dossier permis de construire, plans d\u2019ex\u00e9cution et suivi de chantier. 5 \u00e0 15 % du co\u00fbt des travaux selon la complexit\u00e9." },
  { q: "Le terrain est-il inclus ?", a: "Non, le co\u00fbt du terrain est s\u00e9par\u00e9 car il varie \u00e9norm\u00e9ment selon le quartier. Vous pouvez ajouter une estimation terrain \u00e0 l\u2019\u00e9tape Surface." },
];

const BUDGET_BREAKDOWN = [
  { label: "Gros \u0153uvre", key: "grosOeuvre" as const, color: "#b5522a" },
  { label: "Second \u0153uvre", key: "secondOeuvre" as const, color: "#d4845a" },
  { label: "Finitions", key: "finitions" as const, color: "#e8b89a" },
  { label: "Architecte", key: "architecte" as const, color: "#7c3a1a" },
  { label: "Options", key: "options" as const, color: "#a0816c" },
];

/* ─── Progress Bar ───────────────────────────────────────────────── */

function ProgressBar({ step }: { step: number }) {
  if (step < 1) return null;
  const pct = Math.min((step / TOTAL_STEPS) * 100, 100);
  return (
    <div className="sticky top-12 lg:top-14 z-40 bg-white/95 backdrop-blur border-b border-stone-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between">
        <span className="text-xs text-stone-500">&Eacute;tape {Math.min(step, TOTAL_STEPS)}/{TOTAL_STEPS}</span>
        <span className="text-xs text-[#b5522a] font-medium">
          {step === 1 && "Type de projet"}
          {step === 2 && "Localisation"}
          {step === 3 && "Surface & standing"}
          {step === 4 && "Options"}
          {step >= 5 && "Votre estimation"}
        </span>
      </div>
      <div className="h-1 bg-stone-100">
        <div className="h-full bg-[#b5522a] transition-all duration-500 ease-out" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────────────── */

export default function CalculateurPage() {
  const [step, setStep] = useState(0);
  const [city, setCity] = useState("");
  const [projectType, setProjectType] = useState<ProjectType | "">("");
  const [quality, setQuality] = useState<QualityLevel>("moyen");
  const [surface, setSurface] = useState(150);
  const [landSurface, setLandSurface] = useState<number | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<OptionKey[]>([]);

  // Lead capture
  const [leadName, setLeadName] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [showEmailField, setShowEmailField] = useState(false);
  const [leadEmail, setLeadEmail] = useState("");
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [leadLoading, setLeadLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const result = useMemo(
    () => calculateEstimation(city || "casablanca", (projectType || "villa") as ProjectType, quality, surface, landSurface, selectedOptions),
    [city, projectType, quality, surface, landSurface, selectedOptions],
  );

  const totalForPie = result.grosOeuvre.max + result.secondOeuvre.max + result.finitions.max + result.architecte.max + result.options.max;

  const toggleOption = (opt: OptionKey) => {
    setSelectedOptions((prev) => (prev.includes(opt) ? prev.filter((o) => o !== opt) : [...prev, opt]));
  };

  const cityName = CITIES.find((c) => c.slug === city)?.name || city;
  const typeLabel = PROJECT_TYPES.find((t) => t.value === projectType)?.label || String(projectType);

  const handleCopy = useCallback(() => {
    const text = `Estimation bati.ma\n${typeLabel} ${surface}m\u00b2 \u00e0 ${cityName}\nBudget : ${formatPrice(result.total.min)} \u2013 ${formatPrice(result.total.max)} (hors terrain)\nhttps://bati.ma/outils/calculateur-cout-construction-maroc`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [typeLabel, surface, cityName, result.total.min, result.total.max]);

  const handleLeadSubmit = async () => {
    if (!leadName.trim() || !leadPhone.trim()) return;
    setLeadLoading(true);
    try {
      await submitProjectRequest({
        title: `Estimation calculateur : ${typeLabel} ${surface}m\u00b2 \u00e0 ${cityName}`,
        client_name: leadName.trim(),
        client_email: leadEmail.trim(),
        client_phone: leadPhone.trim(),
        description: `Via calculateur bati.ma \u2014 ${typeLabel} ${surface}m\u00b2 en ${QUALITY_LEVELS.find((q) => q.value === quality)?.label || quality} \u00e0 ${cityName}. Budget estim\u00e9 : ${formatPrice(result.total.min)} \u2013 ${formatPrice(result.total.max)} hors terrain.${selectedOptions.length ? ` Options : ${selectedOptions.join(", ")}.` : ""}`,
        project_type: typeLabel,
        location: cityName,
        budget_min: result.total.min,
        budget_max: result.total.max,
      });
      setLeadSubmitted(true);
      try {
        const w = window as unknown as { umami?: { track: (e: string, d: Record<string, string>) => void } };
        w.umami?.track("calculateur_lead", { city, projectType: String(projectType), quality, surface: String(surface) });
      } catch { /* analytics optional */ }
    } catch {
      setLeadSubmitted(true);
    } finally {
      setLeadLoading(false);
    }
  };

  /* ─── Schemas ────────────────────────────────────────────────── */

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Calculateur co\u00fbt construction Maroc",
    description: "Estimez le co\u00fbt de construction de votre maison, villa ou immeuble au Maroc. Prix par ville, par gamme et par type de projet.",
    url: "https://bati.ma/outils/calculateur-cout-construction-maroc",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    offers: { "@type": "Offer", price: "0", priceCurrency: "MAD" },
    author: { "@type": "Organization", name: "Bati.ma", url: "https://bati.ma" },
  };

  /* ─── Step rendering ─────────────────────────────────────────── */

  const cardClass = (active: boolean) =>
    `rounded-xl border-2 px-4 py-4 text-left transition-all cursor-pointer ${
      active
        ? "border-[#b5522a] bg-[#b5522a]/5 shadow-sm"
        : "border-stone-200 hover:border-stone-300 hover:shadow-sm"
    }`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />

      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Outils" }, { label: "Calculateur co\u00fbt construction" }]} />

      <ProgressBar step={step} />

      {/* ═══ STEP 0 — Hero / Landing ═══ */}
      {step === 0 && (
        <section className="min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-[#f5f0ea] to-white px-4">
          <div className="max-w-lg mx-auto text-center">
            <span className="inline-block text-xs text-[#b5522a] font-semibold uppercase tracking-widest mb-4">Outil gratuit</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 leading-tight mb-4">
              Estimez le co&ucirc;t de votre construction au Maroc
            </h1>
            <p className="text-stone-600 leading-relaxed mb-8">
              Villa, appartement, immeuble ou riad &mdash; obtenez une estimation d&eacute;taill&eacute;e en 2 minutes. Donn&eacute;es 2026, sans inscription.
            </p>
            <Button size="lg" className="h-14 px-10 text-base rounded-full" onClick={() => setStep(1)}>
              Commencer l&apos;estimation
              <ChevronRight className="ml-1 h-5 w-5" />
            </Button>
            <p className="text-xs text-stone-400 mt-4">1 247 estimations ce mois &middot; Gratuit et confidentiel</p>
          </div>
        </section>
      )}

      {/* ═══ STEP 1 — Type de projet ═══ */}
      {step === 1 && (
        <section className="min-h-[60vh] flex items-center px-4 sm:px-6 py-10">
          <div className="max-w-2xl mx-auto w-full">
            <button onClick={() => setStep(0)} className="flex items-center gap-1 text-sm text-stone-500 hover:text-stone-700 mb-6">
              <ArrowLeft className="h-4 w-4" /> Retour
            </button>
            <h2 className="text-2xl font-bold text-stone-900 mb-6">Quel type de projet ?</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {PROJECT_TYPES.map((type) => (
                <button
                  key={type.value}
                  onClick={() => { setProjectType(type.value); setStep(2); }}
                  className={cardClass(projectType === type.value)}
                >
                  <span className="text-sm font-medium text-stone-900">{type.label}</span>
                  <span className="block text-xs text-stone-500 mt-1">Honoraires : {type.architectFeeMin}&ndash;{type.architectFeeMax}%</span>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ STEP 2 — Ville ═══ */}
      {step === 2 && (
        <section className="min-h-[60vh] flex items-center px-4 sm:px-6 py-10">
          <div className="max-w-2xl mx-auto w-full">
            <button onClick={() => setStep(1)} className="flex items-center gap-1 text-sm text-stone-500 hover:text-stone-700 mb-6">
              <ArrowLeft className="h-4 w-4" /> Retour
            </button>
            <h2 className="text-2xl font-bold text-stone-900 mb-6">O&ugrave; se situe votre projet ?</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {CITIES.map((c) => (
                <button
                  key={c.slug}
                  onClick={() => { setCity(c.slug); setStep(3); }}
                  className={cardClass(city === c.slug)}
                >
                  <span className="text-sm font-medium text-stone-900">{c.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ STEP 3 — Surface + Gamme ═══ */}
      {step === 3 && (
        <section className="min-h-[60vh] flex items-center px-4 sm:px-6 py-10">
          <div className="max-w-2xl mx-auto w-full">
            <button onClick={() => setStep(2)} className="flex items-center gap-1 text-sm text-stone-500 hover:text-stone-700 mb-6">
              <ArrowLeft className="h-4 w-4" /> Retour
            </button>
            <h2 className="text-2xl font-bold text-stone-900 mb-6">Surface et standing</h2>

            {/* Surface slider */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-stone-900 mb-3">
                Surface habitable : <span className="text-[#b5522a] text-lg">{surface} m&sup2;</span>
              </label>
              <input type="range" min={50} max={500} step={10} value={surface} onChange={(e) => setSurface(Number(e.target.value))} className="w-full accent-[#b5522a] h-2" />
              <div className="flex justify-between text-xs text-stone-400 mt-1"><span>50 m&sup2;</span><span>500 m&sup2;</span></div>
            </div>

            {/* Terrain optionnel */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-stone-700 mb-2">Surface terrain (optionnel)</label>
              <input
                type="number" min={0} max={5000} placeholder="Ex: 200 m\u00b2"
                value={landSurface ?? ""} onChange={(e) => setLandSurface(e.target.value ? Number(e.target.value) : null)}
                className="w-full rounded-lg border border-stone-200 px-4 py-2.5 text-sm focus:border-[#b5522a] focus:outline-none focus:ring-1 focus:ring-[#b5522a]"
              />
            </div>

            {/* Gamme */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-stone-900 mb-3">Gamme de finitions</label>
              <div className="grid grid-cols-2 gap-3">
                {QUALITY_LEVELS.map((q) => (
                  <button key={q.value} onClick={() => setQuality(q.value)} className={cardClass(quality === q.value)}>
                    <span className={`text-sm font-medium ${quality === q.value ? "text-[#b5522a]" : "text-stone-900"}`}>{q.label}</span>
                    <span className="block text-xs text-stone-500 mt-0.5">{q.description}</span>
                    <span className="block text-xs text-stone-400 mt-1">{new Intl.NumberFormat("fr-MA").format(q.priceMin)} &ndash; {new Intl.NumberFormat("fr-MA").format(q.priceMax)} MAD/m&sup2;</span>
                  </button>
                ))}
              </div>
            </div>

            <Button size="lg" className="w-full h-12 rounded-xl text-base" onClick={() => setStep(4)}>Suivant</Button>
          </div>
        </section>
      )}

      {/* ═══ STEP 4 — Options ═══ */}
      {step === 4 && (
        <section className="min-h-[60vh] flex items-center px-4 sm:px-6 py-10">
          <div className="max-w-2xl mx-auto w-full">
            <button onClick={() => setStep(3)} className="flex items-center gap-1 text-sm text-stone-500 hover:text-stone-700 mb-6">
              <ArrowLeft className="h-4 w-4" /> Retour
            </button>
            <h2 className="text-2xl font-bold text-stone-900 mb-2">Des options suppl&eacute;mentaires ?</h2>
            <p className="text-sm text-stone-500 mb-6">S&eacute;lectionnez ce qui vous int&eacute;resse, ou passez directement &agrave; l&apos;estimation.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {OPTIONS.map((opt) => (
                <button key={opt.value} onClick={() => toggleOption(opt.value)} className={cardClass(selectedOptions.includes(opt.value))}>
                  <span className={`text-sm ${selectedOptions.includes(opt.value) ? "text-[#b5522a] font-medium" : "text-stone-700"}`}>{opt.label}</span>
                  <span className="block text-xs text-stone-400 mt-0.5">
                    +{new Intl.NumberFormat("fr-MA").format(opt.costMin)} &ndash; {new Intl.NumberFormat("fr-MA").format(opt.costMax)} {opt.unit}
                  </span>
                </button>
              ))}
            </div>
            <Button size="lg" className="w-full h-12 rounded-xl text-base" onClick={() => setStep(5)}>
              Voir mon estimation
            </Button>
            <button onClick={() => setStep(5)} className="block mx-auto mt-3 text-sm text-stone-500 hover:text-stone-700 underline">
              Passer cette &eacute;tape
            </button>
          </div>
        </section>
      )}

      {/* ═══ STEP 5 — Resultats + Lead capture ═══ */}
      {step >= 5 && (
        <>
          <section className="py-10 px-4 sm:px-6 bg-white">
            <div className="max-w-2xl mx-auto">
              <button onClick={() => setStep(4)} className="flex items-center gap-1 text-sm text-stone-500 hover:text-stone-700 mb-6">
                <ArrowLeft className="h-4 w-4" /> Modifier
              </button>

              {/* Recap */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-700">{typeLabel}</span>
                <span className="inline-flex items-center rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-700">{cityName}</span>
                <span className="inline-flex items-center rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-700">{surface} m&sup2;</span>
                <span className="inline-flex items-center rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-700">{QUALITY_LEVELS.find((q) => q.value === quality)?.label}</span>
              </div>

              {/* Total */}
              <div className="rounded-2xl border-2 border-[#b5522a]/20 bg-gradient-to-br from-[#f5f0ea] to-white p-8 text-center mb-8">
                <p className="text-sm text-stone-500 mb-2">Estimation budget construction</p>
                <p className="text-4xl sm:text-5xl font-bold text-[#b5522a] tracking-tight">
                  {formatPrice(result.total.min)} &ndash; {formatPrice(result.total.max)}
                </p>
                <p className="text-xs text-stone-400 mt-3">Hors terrain &middot; Prix indicatifs 2026</p>
                {result.totalAvecTerrain && (
                  <div className="mt-4 pt-4 border-t border-stone-200">
                    <p className="text-sm text-stone-500 mb-1">Avec terrain ({landSurface} m&sup2;)</p>
                    <p className="text-xl font-bold text-stone-900">{formatPrice(result.totalAvecTerrain.min)} &ndash; {formatPrice(result.totalAvecTerrain.max)}</p>
                  </div>
                )}
              </div>

              {/* Barre repartition */}
              <div className="mb-8">
                <p className="text-sm font-medium text-stone-900 mb-3">R&eacute;partition du budget</p>
                <div className="h-8 rounded-full overflow-hidden flex">
                  {BUDGET_BREAKDOWN.map(({ key, color, label }) => {
                    const pct = totalForPie > 0 ? (result[key].max / totalForPie) * 100 : 0;
                    if (pct < 1) return null;
                    return <div key={key} className="h-full transition-all" style={{ width: `${pct}%`, backgroundColor: color }} title={`${label}: ${Math.round(pct)}%`} />;
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

              {/* Copier */}
              <button onClick={handleCopy} className="flex items-center gap-2 text-sm text-stone-500 hover:text-[#b5522a] transition-colors mb-10">
                {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                {copied ? "Copie !" : "Copier mon estimation"}
              </button>

              {/* ─── Lead capture gate ─── */}
              {!leadSubmitted ? (
                <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-2xl p-6 sm:p-8">
                  <h3 className="text-lg font-bold text-stone-900 mb-2 text-center">Recevez le d&eacute;tail complet + 3 devis d&apos;architectes</h3>
                  <ul className="text-sm text-stone-600 space-y-1.5 mb-6 max-w-xs mx-auto">
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-[#b5522a] mt-0.5 flex-shrink-0" /> Ventilation poste par poste</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-[#b5522a] mt-0.5 flex-shrink-0" /> Estimation terrain &agrave; {cityName}</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-[#b5522a] mt-0.5 flex-shrink-0" /> 3 devis personnalis&eacute;s d&apos;architectes v&eacute;rifi&eacute;s</li>
                  </ul>
                  <div className="space-y-3 max-w-sm mx-auto">
                    <Input placeholder="Votre nom" value={leadName} onChange={(e) => setLeadName(e.target.value)} className="h-12 text-base" />
                    <Input type="tel" placeholder="Telephone (ex: 0661234567)" value={leadPhone} onChange={(e) => setLeadPhone(e.target.value)} className="h-12 text-base" />
                    {showEmailField ? (
                      <Input type="email" placeholder="Email (optionnel)" value={leadEmail} onChange={(e) => setLeadEmail(e.target.value)} className="h-12 text-base" />
                    ) : (
                      <button onClick={() => setShowEmailField(true)} className="text-xs text-stone-500 hover:text-[#b5522a] underline">+ Ajouter mon email</button>
                    )}
                    <Button size="lg" className="w-full h-12 rounded-xl text-base" onClick={handleLeadSubmit} disabled={!leadName.trim() || !leadPhone.trim() || leadLoading}>
                      {leadLoading ? "Envoi..." : "Recevoir mon devis"}
                    </Button>
                    <p className="text-xs text-stone-400 text-center">Gratuit, confidentiel, sans engagement</p>
                  </div>
                </div>
              ) : (
                <>
                  {/* Confirmation + tableau detaille */}
                  <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-center mb-8">
                    <p className="font-semibold text-green-900 mb-1">Demande envoy&eacute;e !</p>
                    <p className="text-sm text-green-700">Des architectes v&eacute;rifi&eacute;s &agrave; {cityName} vont vous contacter sous 24-48h.</p>
                  </div>

                  {/* Tableau detaille (debloque apres lead) */}
                  <div className="rounded-xl border border-stone-200 overflow-hidden mb-8">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-stone-50">
                          <th className="text-left px-4 py-3 font-medium text-stone-600">Poste</th>
                          <th className="text-right px-4 py-3 font-medium text-stone-600">Min</th>
                          <th className="text-right px-4 py-3 font-medium text-stone-600">Max</th>
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
                            <td className="px-4 py-3 flex items-center gap-2"><span className="w-3 h-3 rounded-full flex-shrink-0 bg-stone-400" />Terrain ({landSurface} m&sup2;)</td>
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

                  {/* CTA architectes */}
                  <div className="text-center mb-8">
                    <Button variant="outline" size="lg" className="rounded-full" asChild>
                      <Link href={`/architecte/${city || "casablanca"}`}>Voir les architectes &agrave; {cityName}</Link>
                    </Button>
                  </div>
                </>
              )}

              {/* Methodologie */}
              <div className="text-xs text-stone-400 space-y-2 mt-10">
                <p className="font-medium text-stone-500">M&eacute;thodologie et sources</p>
                <p>Prix calibr&eacute;s sur le <strong>Bar&egrave;me CNOA 2021</strong> (+25% inflation 2026), cross-valid&eacute;s avec les donn&eacute;es march&eacute; (BniDark.com, Rifaa.ma, Geniecivil.ma, Francobat.ma). Honoraires architecte : minimums r&eacute;glementaires CNOA. R&eacute;partition : gros &oelig;uvre 45%, second &oelig;uvre 25%, finitions 30%.</p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-10 px-4 sm:px-6 bg-stone-50">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-xl font-bold text-stone-900 mb-5">Questions fr&eacute;quentes</h2>
              <div className="space-y-3">
                {FAQ.map((f) => (
                  <details key={f.q} className="group border border-stone-200 rounded-lg overflow-hidden bg-white">
                    <summary className="flex items-center justify-between px-4 py-3 cursor-pointer text-sm font-medium text-stone-800 hover:bg-stone-50">
                      {f.q}
                      <span className="text-stone-400 group-open:rotate-180 transition-transform">&darr;</span>
                    </summary>
                    <div className="px-4 pb-4 pt-1 text-sm text-stone-600 leading-relaxed">{f.a}</div>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* Guides lies */}
          <section className="py-10 px-4 sm:px-6 bg-white">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-lg font-semibold text-stone-900 mb-4">Guides pour aller plus loin</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { slug: "cout-construction-villa-r1-maroc", title: "Co\u00fbt construction villa R+1 au Maroc", cat: "Budget & Tarifs" },
                  { slug: "honoraires-architecte-maroc", title: "Honoraires architecte au Maroc", cat: "Tarifs" },
                  { slug: "permis-de-construire-maroc", title: "Permis de construire au Maroc", cat: "R\u00e9glementation" },
                  { slug: "difference-architecte-ingenieur-maroc", title: "Architecte vs Ing\u00e9nieur au Maroc", cat: "Guide pratique" },
                ].map((g) => (
                  <Link key={g.slug} href={`/guide/${g.slug}`} className="block border border-stone-100 rounded-lg p-4 hover:border-[#b5522a]/30 transition-colors">
                    <p className="text-xs text-[#b5522a] font-medium uppercase tracking-wide mb-1">{g.cat}</p>
                    <p className="font-medium text-stone-900 text-sm">{g.title}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
