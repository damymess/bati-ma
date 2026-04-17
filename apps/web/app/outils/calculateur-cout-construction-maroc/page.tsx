"use client";

import { useState, useMemo, useCallback, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
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

const TOTAL_STEPS = 7;

const TIMING_OPTIONS = [
  { value: "1-3mois", label: "1 à 3 mois" },
  { value: "3-6mois", label: "3 à 6 mois" },
  { value: "6-12mois", label: "6 à 12 mois" },
  { value: "+12mois", label: "Plus de 12 mois" },
  { value: "curieux", label: "Juste curieux" },
];

const FINANCING_OPTIONS = [
  { value: "cash", label: "Cash / Fonds propres" },
  { value: "credit", label: "Crédit bancaire" },
  { value: "mre", label: "Transfert MRE" },
  { value: "undecided", label: "À définir" },
];

// Élargir la fourchette TEASER : ±30% pour donner envie de débloquer la précision
const teaserRange = (min: number, max: number) => ({
  min: Math.round(min * 0.7 / 10000) * 10000,
  max: Math.round(max * 1.3 / 10000) * 10000,
});

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
  return (
    <Suspense fallback={<div className="flex min-h-[60vh] items-center justify-center"><div className="text-stone-400">Chargement…</div></div>}>
      <CalculateurInner />
    </Suspense>
  );
}

function CalculateurInner() {
  const searchParams = useSearchParams();
  const validTypes: ProjectType[] = ["villa", "appartement", "immeuble-r2", "immeuble-r3", "riad", "commercial"];
  const initialType = searchParams.get("type") as ProjectType | null;
  const initialCity = searchParams.get("city");
  const initialStepParam = parseInt(searchParams.get("step") || "0", 10);
  const validCity = initialCity && CITIES.some((c) => c.slug === initialCity) ? initialCity : "";
  const validType = initialType && validTypes.includes(initialType) ? initialType : "";
  const validStep = isNaN(initialStepParam) ? 0 : Math.max(0, Math.min(initialStepParam, 7));

  const [step, setStep] = useState(validStep);
  const [city, setCity] = useState(validCity);
  const [projectType, setProjectType] = useState<ProjectType | "">(validType);
  const [quality, setQuality] = useState<QualityLevel>("moyen");
  const [surface, setSurface] = useState(150);
  const [landSurface, setLandSurface] = useState<number | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<OptionKey[]>([]);

  // Lead capture — 3 gates
  const [leadName, setLeadName] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [leadTiming, setLeadTiming] = useState("");
  const [leadFinancing, setLeadFinancing] = useState("");
  const [leadId, setLeadId] = useState<string | null>(null); // ID retourné après gate 1 (email)
  const [leadLoading, setLeadLoading] = useState(false);
  const [leadError, setLeadError] = useState<string | null>(null);
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

  // Gate 1 — Email : création d'un lead COLD avec snapshot calculator
  const handleEmailGate = async () => {
    setLeadError(null);
    if (!leadName.trim() || !leadEmail.trim()) {
      setLeadError("Merci de renseigner votre prénom et email.");
      return;
    }
    setLeadLoading(true);
    try {
      const payload = {
        city, projectType, quality, surface, landSurface, selectedOptions,
        min: result.total.min, max: result.total.max,
      };
      const res = await submitProjectRequest({
        title: `Estimation calculateur : ${typeLabel} ${surface}m\u00b2 \u00e0 ${cityName}`,
        client_name: leadName.trim(),
        client_email: leadEmail.trim(),
        description: `Via calculateur bati.ma \u2014 ${typeLabel} ${surface}m\u00b2 en ${QUALITY_LEVELS.find((q) => q.value === quality)?.label || quality} \u00e0 ${cityName}. Budget estim\u00e9 : ${formatPrice(result.total.min)} \u2013 ${formatPrice(result.total.max)} hors terrain.${selectedOptions.length ? ` Options : ${selectedOptions.join(", ")}.` : ""}`,
        project_type: typeLabel,
        location: cityName,
        budget_min: result.total.min,
        budget_max: result.total.max,
        calculator_payload: payload,
      } as any);
      const id = (res as any)?.project_request?.id ?? null;
      setLeadId(id);
      try {
        const w = window as unknown as { umami?: { track: (e: string, d: Record<string, string>) => void } };
        w.umami?.track("calculateur_gate1_email", { city, projectType: String(projectType), quality });
      } catch { /* optional */ }
      setStep(6);
    } catch (err) {
      setLeadError("Erreur lors de l'envoi. Merci de r\u00e9essayer.");
    } finally {
      setLeadLoading(false);
    }
  };

  // Gate 2 — Phone + timing + financing : upgrade du lead en HOT
  const handlePhoneGate = async () => {
    setLeadError(null);
    if (!leadPhone.trim()) {
      setLeadError("Merci de renseigner votre num\u00e9ro.");
      return;
    }
    if (!leadTiming) {
      setLeadError("Merci de choisir votre timing de projet.");
      return;
    }
    setLeadLoading(true);
    try {
      if (leadId) {
        const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:9000";
        await fetch(`${API_BASE}/store/project-requests/${leadId}/upgrade`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            client_phone: leadPhone.trim(),
            timeline: leadTiming,
            financing: leadFinancing || null,
          }),
        });
      }
      try {
        const w = window as unknown as { umami?: { track: (e: string, d: Record<string, string>) => void } };
        w.umami?.track("calculateur_gate2_phone", { timing: leadTiming, financing: leadFinancing });
      } catch { /* optional */ }
      setStep(7);
    } catch (err) {
      setLeadError("Erreur. Merci de r\u00e9essayer.");
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

      {/* ═══ STEP 5 — TEASER (fourchette large, sans breakdown) ═══ */}
      {step === 5 && (
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

            {/* Teaser - fourchette large */}
            {(() => {
              const teaser = teaserRange(result.total.min, result.total.max);
              return (
                <div className="rounded-2xl border-2 border-[#b5522a]/20 bg-gradient-to-br from-[#f5f0ea] to-white p-8 text-center mb-6">
                  <p className="text-xs text-stone-500 uppercase tracking-widest mb-2">Fourchette indicative</p>
                  <p className="text-3xl sm:text-4xl font-bold text-stone-800 tracking-tight mb-1">
                    {formatPrice(teaser.min)} &ndash; {formatPrice(teaser.max)}
                  </p>
                  <p className="text-sm text-stone-500">Votre budget construction</p>
                  <p className="text-xs text-stone-400 mt-4 italic">
                    Marge d&apos;erreur de cette fourchette : &plusmn; 30%
                  </p>
                </div>
              );
            })()}

            {/* Valeur de l'unlock */}
            <div className="bg-white border border-stone-200 rounded-xl p-5 mb-6">
              <p className="text-sm font-semibold text-stone-900 mb-3">
                Obtenez l&apos;estimation pr&eacute;cise (&plusmn; 5%) :
              </p>
              <ul className="text-sm text-stone-600 space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-[#b5522a] mt-0.5 flex-shrink-0" />
                  Fourchette ajust&eacute;e &agrave; votre projet (&plusmn; 5%)
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-[#b5522a] mt-0.5 flex-shrink-0" />
                  R&eacute;partition d&eacute;taill&eacute;e : gros &oelig;uvre, second &oelig;uvre, finitions, honoraires
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-[#b5522a] mt-0.5 flex-shrink-0" />
                  Rapport PDF professionnel envoy&eacute; par email
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-[#b5522a] mt-0.5 flex-shrink-0" />
                  Liste d&apos;architectes v&eacute;rifi&eacute;s &agrave; {cityName}
                </li>
              </ul>
            </div>

            <Button size="lg" className="w-full h-12 rounded-xl text-base" onClick={() => setStep(5.5 as number as any)}>
              D&eacute;bloquer mon estimation pr&eacute;cise
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
            <p className="text-xs text-stone-400 text-center mt-3">
              Gratuit &middot; Confidentiel &middot; Sans engagement
            </p>
          </div>
        </section>
      )}

      {/* ═══ STEP 5.5 — GATE 1 (Email) ═══ */}
      {step === 5.5 && (
        <section className="py-10 px-4 sm:px-6 bg-white">
          <div className="max-w-lg mx-auto">
            <button onClick={() => setStep(5)} className="flex items-center gap-1 text-sm text-stone-500 hover:text-stone-700 mb-6">
              <ArrowLeft className="h-4 w-4" /> Retour
            </button>

            <h2 className="text-2xl font-bold text-stone-900 mb-2">O&ugrave; recevoir votre estimation ?</h2>
            <p className="text-sm text-stone-500 mb-6">
              On vous envoie imm&eacute;diatement le rapport complet en PDF.
            </p>

            <div className="space-y-3 mb-6">
              <Input
                placeholder="Votre pr&eacute;nom"
                value={leadName}
                onChange={(e) => setLeadName(e.target.value)}
                className="h-12 text-base"
              />
              <Input
                type="email"
                placeholder="Votre email"
                value={leadEmail}
                onChange={(e) => setLeadEmail(e.target.value)}
                className="h-12 text-base"
              />
            </div>

            {leadError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-600 mb-4">
                {leadError}
              </div>
            )}

            <Button
              size="lg"
              className="w-full h-12 rounded-xl text-base"
              onClick={handleEmailGate}
              disabled={leadLoading}
            >
              {leadLoading ? "Envoi..." : "Recevoir mon estimation par email"}
            </Button>
            <p className="text-xs text-stone-400 text-center mt-3">
              En continuant, vous acceptez de recevoir cette estimation par email. Aucun spam.
            </p>
          </div>
        </section>
      )}

      {/* ═══ STEP 6 — Estimation précise dévoilée + CTA devis ═══ */}
      {step === 6 && (
        <>
          <section className="py-10 px-4 sm:px-6 bg-white">
            <div className="max-w-2xl mx-auto">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 flex items-center gap-3">
                <Check className="h-5 w-5 text-green-600 shrink-0" />
                <p className="text-sm text-green-900">
                  <strong>Estimation envoy&eacute;e par email !</strong> V&eacute;rifiez votre bo&icirc;te dans 2-3 min.
                </p>
              </div>

              {/* Recap */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-700">{typeLabel}</span>
                <span className="inline-flex items-center rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-700">{cityName}</span>
                <span className="inline-flex items-center rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-700">{surface} m&sup2;</span>
                <span className="inline-flex items-center rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-700">{QUALITY_LEVELS.find((q) => q.value === quality)?.label}</span>
              </div>

              {/* Total précis */}
              <div className="rounded-2xl border-2 border-[#b5522a]/20 bg-gradient-to-br from-[#f5f0ea] to-white p-8 text-center mb-8">
                <p className="text-sm text-stone-500 mb-2">Estimation pr&eacute;cise (&plusmn; 5%)</p>
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

              {/* Breakdown */}
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

              {/* Tableau détaillé */}
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

              {/* Copier */}
              <button onClick={handleCopy} className="flex items-center gap-2 text-sm text-stone-500 hover:text-[#b5522a] transition-colors mb-8">
                {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                {copied ? "Copi\u00e9 !" : "Copier mon estimation"}
              </button>

              {/* ═══ GATE 2 — CTA devis 3 architectes (devient un lead HOT) ═══ */}
              <div className="bg-gradient-to-br from-[#f5f0ea] via-[#f4ece7] to-white border-2 border-[#b5522a]/30 rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl font-bold text-stone-900 mb-2 text-center">
                  Passez &agrave; l&apos;action : recevez 3 devis gratuits
                </h3>
                <p className="text-sm text-stone-600 text-center mb-5">
                  Des architectes v&eacute;rifi&eacute;s &agrave; {cityName} vont &eacute;tudier votre projet et vous contacter sous 24-48h.
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-stone-700 mb-1.5 block">
                      Votre num&eacute;ro (pour qu&apos;ils vous contactent)
                    </label>
                    <Input
                      type="tel"
                      placeholder="06 12 34 56 78"
                      value={leadPhone}
                      onChange={(e) => setLeadPhone(e.target.value)}
                      className="h-12 text-base"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-stone-700 mb-1.5 block">
                      Quand d&eacute;marrez-vous ?
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {TIMING_OPTIONS.map((t) => (
                        <button
                          key={t.value}
                          onClick={() => setLeadTiming(t.value)}
                          className={`text-sm px-3 py-2.5 rounded-lg border transition ${
                            leadTiming === t.value
                              ? "border-[#b5522a] bg-[#b5522a] text-white"
                              : "border-stone-200 bg-white text-stone-700 hover:border-[#b5522a]/40"
                          }`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-stone-700 mb-1.5 block">
                      Mode de financement (optionnel)
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {FINANCING_OPTIONS.map((f) => (
                        <button
                          key={f.value}
                          onClick={() => setLeadFinancing(f.value)}
                          className={`text-sm px-3 py-2 rounded-lg border transition ${
                            leadFinancing === f.value
                              ? "border-[#b5522a] bg-[#b5522a]/10 text-[#b5522a]"
                              : "border-stone-200 bg-white text-stone-700 hover:border-[#b5522a]/40"
                          }`}
                        >
                          {f.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {leadError && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-600">
                      {leadError}
                    </div>
                  )}

                  <Button
                    size="lg"
                    className="w-full h-12 rounded-xl text-base bg-[#b5522a] hover:bg-[#a0441f]"
                    onClick={handlePhoneGate}
                    disabled={leadLoading}
                  >
                    {leadLoading ? "Envoi..." : "Valider ma demande de devis"}
                  </Button>
                  <p className="text-xs text-stone-400 text-center">
                    Gratuit &middot; 3 devis compar&eacute;s &middot; R&eacute;ponse sous 24-48h
                  </p>
                </div>
              </div>

            </div>
          </section>
        </>
      )}

      {/* ═══ STEP 7 — Confirmation lead HOT ═══ */}
      {step === 7 && (
        <>
          <section className="py-10 px-4 sm:px-6 bg-white">
            <div className="max-w-2xl mx-auto">
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center mb-8">
                <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-stone-900 mb-2">Demande envoy&eacute;e !</h2>
                <p className="text-sm text-stone-600 max-w-md mx-auto">
                  3 architectes v&eacute;rifi&eacute;s &agrave; {cityName} vont &eacute;tudier votre projet et vous contacter sous 24-48h par t&eacute;l&eacute;phone ou email.
                </p>
              </div>

              <div className="bg-stone-50 border border-stone-200 rounded-xl p-6 mb-6">
                <p className="text-sm font-medium text-stone-900 mb-3">En attendant, vous pouvez :</p>
                <ul className="space-y-2 text-sm text-stone-600">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-[#b5522a] mt-0.5 flex-shrink-0" />
                    V&eacute;rifier votre email pour le rapport d&eacute;taill&eacute;
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-[#b5522a] mt-0.5 flex-shrink-0" />
                    Consulter les profils des architectes de {cityName}
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-[#b5522a] mt-0.5 flex-shrink-0" />
                    Lire nos guides sur la construction au Maroc
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild size="lg" className="rounded-full">
                  <Link href={`/architecte/${city || "casablanca"}`}>Voir les architectes &agrave; {cityName}</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <Link href="/guide">Parcourir les guides</Link>
                </Button>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ═══ Méthodologie + FAQ + Guides (affichés à partir du step 5) ═══ */}
      {step >= 5 && (
        <>
          <section className="py-6 px-4 sm:px-6 bg-white">
            <div className="max-w-2xl mx-auto">
              <div className="text-xs text-stone-400 space-y-2">
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
