"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, ArrowRight, ArrowLeft, ClipboardList, MapPin, Wallet, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { submitProjectRequest } from "@/lib/api";
import { trackDevisStep, trackDevisSubmit } from "@/lib/tracking";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:9000";

type MatchedArchitect = {
  id: string;
  name: string;
  specialties: string[];
  regions: string[];
  rating: number;
  review_count: number;
  premium: boolean;
  years_experience: number;
  description: string | null;
};

const PROJECT_TYPES = [
  { label: "Villa / Maison", icon: "🏠" },
  { label: "Appartement", icon: "🏢" },
  { label: "Immeuble résidentiel", icon: "🏗️" },
  { label: "Local commercial", icon: "🏪" },
  { label: "Hôtel / Tourisme", icon: "🏨" },
  { label: "Rénovation riad", icon: "🕌" },
  { label: "Architecture d'intérieur", icon: "🎨" },
  { label: "Bureau / Coworking", icon: "💼" },
];

const CITIES = [
  "Casablanca", "Marrakech", "Rabat", "Tanger",
  "Agadir", "Fès", "Meknès", "Autre",
];

const BUDGETS = [
  { label: "< 100 000 MAD", min: 0, max: 100000 },
  { label: "100 000 – 300 000 MAD", min: 100000, max: 300000 },
  { label: "300 000 – 500 000 MAD", min: 300000, max: 500000 },
  { label: "500 000 – 1 000 000 MAD", min: 500000, max: 1000000 },
  { label: "1 000 000 – 3 000 000 MAD", min: 1000000, max: 3000000 },
  { label: "> 3 000 000 MAD", min: 3000000, max: 0 },
  { label: "Je ne sais pas encore", min: 0, max: 0 },
];

const STEPS = [
  { label: "Projet", icon: ClipboardList },
  { label: "Détails", icon: MapPin },
  { label: "Budget", icon: Wallet },
  { label: "Contact", icon: User },
];

const COUNTRY_CODES = [
  { code: "+212", label: "🇲🇦 +212" },
  { code: "+33", label: "🇫🇷 +33" },
  { code: "+1", label: "🇺🇸 +1" },
  { code: "+44", label: "🇬🇧 +44" },
  { code: "+34", label: "🇪🇸 +34" },
  { code: "+49", label: "🇩🇪 +49" },
  { code: "+32", label: "🇧🇪 +32" },
  { code: "+41", label: "🇨🇭 +41" },
  { code: "+31", label: "🇳🇱 +31" },
  { code: "+39", label: "🇮🇹 +39" },
  { code: "+966", label: "🇸🇦 +966" },
  { code: "+971", label: "🇦🇪 +971" },
  { code: "+213", label: "🇩🇿 +213" },
  { code: "+216", label: "🇹🇳 +216" },
];

const TIMELINES = [
  "Dès que possible",
  "Dans 1 à 3 mois",
  "Dans 3 à 6 mois",
  "Dans 6 à 12 mois",
  "Plus de 12 mois",
  "Juste une estimation pour le moment",
];

type FormData = {
  project_type: string;
  location: string;
  description: string;
  surface: string;
  style: string;
  budget_label: string;
  budget_min: number;
  budget_max: number;
  timeline: string;
  client_first_name: string;
  client_last_name: string;
  client_email: string;
  client_country_code: string;
  client_phone: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[\d\s\-()]{6,15}$/;

function getStepErrors(step: number, form: FormData): Record<string, string> {
  const errors: Record<string, string> = {};
  if (step === 0) {
    if (!form.project_type) errors.project_type = "Veuillez sélectionner un type de projet";
  }
  if (step === 1) {
    if (!form.location) errors.location = "Veuillez sélectionner une ville";
    if (!form.description.trim()) errors.description = "Veuillez décrire votre projet";
  }
  if (step === 3) {
    if (!form.client_last_name.trim() || form.client_last_name.trim().length < 2)
      errors.client_last_name = "Veuillez entrer votre nom";
    if (!form.client_first_name.trim() || form.client_first_name.trim().length < 2)
      errors.client_first_name = "Veuillez entrer votre prénom";
    if (!form.client_email.trim() || !EMAIL_RE.test(form.client_email.trim()))
      errors.client_email = "Format email invalide";
    if (!form.client_phone.trim())
      errors.client_phone = "Le numéro de téléphone est obligatoire";
    else if (!PHONE_RE.test(form.client_phone.trim()))
      errors.client_phone = "Format téléphone invalide";
  }
  return errors;
}

export default function DemandeDevisPage() {
  return (
    <Suspense fallback={<div className="flex min-h-[60vh] items-center justify-center"><div className="text-stone-400">Chargement…</div></div>}>
      <DemandeDevisForm />
    </Suspense>
  );
}

function DemandeDevisForm() {
  const searchParams = useSearchParams();
  const architectId = searchParams.get("architect") || null;
  const prefilledCity = searchParams.get("city") || null;

  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [matchedArchitects, setMatchedArchitects] = useState<MatchedArchitect[]>([]);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [existingClient, setExistingClient] = useState<{ name: string } | null>(null);
  const [magicLinkSent, setMagicLinkSent] = useState(false);
  const [sendingMagicLink, setSendingMagicLink] = useState(false);
  const [form, setForm] = useState<FormData>({
    project_type: "",
    location: prefilledCity ? CITIES.find((c) => c.toLowerCase() === prefilledCity.toLowerCase()) || "" : "",
    description: "",
    surface: "",
    style: "",
    budget_label: "",
    budget_min: 0,
    budget_max: 0,
    timeline: "",
    client_first_name: "",
    client_last_name: "",
    client_email: "",
    client_country_code: "+212",
    client_phone: "",
  });

  const update = (partial: Partial<FormData>) =>
    setForm((prev) => ({ ...prev, ...partial }));

  const blur = (field: string) =>
    setTouched((prev) => ({ ...prev, [field]: true }));

  const touchAllForStep = (s: number) => {
    const fields: Record<number, string[]> = {
      0: ["project_type"],
      1: ["location", "description"],
      3: ["client_last_name", "client_first_name", "client_email", "client_phone"],
    };
    const stepFields = fields[s] || [];
    setTouched((prev) => {
      const next = { ...prev };
      stepFields.forEach((f) => { next[f] = true; });
      return next;
    });
  };

  const errors = getStepErrors(step, form);
  const hasErrors = Object.keys(errors).length > 0;

  const canNext = () => !hasErrors;

  const handleNext = () => {
    if (hasErrors) {
      touchAllForStep(step);
      return;
    }
    trackDevisStep(step + 1);
    setStep(step + 1);
  };

  const handleSubmit = async () => {
    touchAllForStep(3);
    if (hasErrors) return;

    setLoading(true);
    setError(null);
    try {
      trackDevisSubmit({ city: form.location, projectType: form.project_type, budget: form.budget_label });
      await submitProjectRequest({
        title: `${form.project_type} — ${form.location}`,
        client_name: `${form.client_first_name.trim()} ${form.client_last_name.trim()}`,
        client_email: form.client_email.trim(),
        client_phone: `${form.client_country_code} ${form.client_phone.trim()}`,
        architect_id: architectId || undefined,
        description: form.description.trim() + (form.surface.trim() ? `\nSurface: ${form.surface.trim()}` : "") + (form.style.trim() ? `\nStyle: ${form.style.trim()}` : ""),
        project_type: form.project_type,
        location: form.location,
        budget_min: form.budget_min || undefined,
        budget_max: form.budget_max || undefined,
        timeline: form.timeline.trim() || undefined,
      });
      setSubmitted(true);
      // Fetch matching architects
      try {
        const matchRes = await fetch(`${API_URL}/store/matching?city=${encodeURIComponent(form.location)}&project_type=${encodeURIComponent(form.project_type)}`);
        if (matchRes.ok) {
          const matchData = await matchRes.json();
          setMatchedArchitects(matchData.architects || []);
        }
      } catch {}
    } catch {
      setError("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="max-w-md text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle2 className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="mt-4 text-2xl font-bold text-stone-900">
            Demande envoyée !
          </h1>
          <p className="mt-2 text-stone-500">
            Votre demande est maintenant visible par les architectes de votre ville.
            Ceux qui sont intéressés vous contacteront directement.
          </p>

          {/* Matched architects */}
          {matchedArchitects.length > 0 && (
            <div className="mt-8 text-left">
              <h2 className="text-lg font-bold text-stone-900 mb-4 text-center">
                Architectes recommandés pour votre projet
              </h2>
              <div className="space-y-3">
                {matchedArchitects.map((a) => (
                  <Link
                    key={a.id}
                    href={`/architecte/${(a.regions as string[])?.[0]?.toLowerCase() || "casablanca"}/${a.id}`}
                    className="block rounded-xl border border-stone-200 p-4 hover:border-[#b5522a]/30 hover:shadow-sm transition-all"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-stone-900">{a.name}</span>
                      {a.premium && (
                        <Badge className="bg-amber-100 text-amber-800 text-[10px]">Premium</Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-stone-500">
                      <span>{a.years_experience} ans d&apos;exp.</span>
                      <span>★ {a.rating.toFixed(1)}</span>
                      <span>{(a.specialties as string[])?.slice(0, 2).join(", ")}</span>
                    </div>
                    {a.description && (
                      <p className="mt-1.5 text-xs text-stone-400 line-clamp-2">{a.description}</p>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-6 flex justify-center gap-3">
            <Button variant="outline" className="rounded-full" asChild>
              <Link href="/">Retour à l&apos;accueil</Link>
            </Button>
            <Button className="rounded-full" asChild>
              <Link href="/demandes-devis">Voir les demandes</Link>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-stone-950 px-4 py-10 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="border-stone-700 text-stone-400 text-xs mb-3">
            Gratuit et sans engagement
          </Badge>
          <h1 className="text-2xl font-bold text-white sm:text-3xl">
            Demandez un devis gratuit
          </h1>
          <p className="mt-2 text-stone-400 text-sm">
            Décrivez votre projet et recevez des propositions d&apos;architectes qualifiés
          </p>
        </div>
      </section>

      {/* Progress bar */}
      <section className="px-4 pt-8 sm:px-6">
        <div className="mx-auto max-w-xl">
          <div className="flex items-center justify-between mb-8">
            {STEPS.map((s, i) => (
              <div key={s.label} className="flex flex-1 items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                      i <= step
                        ? "bg-[#b5522a] text-white"
                        : "bg-stone-100 text-stone-400"
                    }`}
                  >
                    <s.icon className="h-4 w-4" />
                  </div>
                  <span className={`mt-1.5 text-xs ${i <= step ? "text-stone-700 font-medium" : "text-stone-400"}`}>
                    {s.label}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <div className={`mx-2 h-0.5 flex-1 transition-colors ${
                    i < step ? "bg-[#b5522a]" : "bg-stone-200"
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="px-4 pb-12 sm:px-6">
        <div className="mx-auto max-w-xl">
          <Card>
            <CardContent className="pt-6 space-y-5">
              {/* Step 0: Type de projet */}
              {step === 0 && (
                <div>
                  <h2 className="text-lg font-semibold text-stone-900 mb-1">
                    Quel type de projet ?
                  </h2>
                  <p className="text-sm text-stone-500 mb-4">
                    Sélectionnez la catégorie qui correspond le mieux
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {PROJECT_TYPES.map((t) => (
                      <button
                        key={t.label}
                        onClick={() => update({ project_type: t.label })}
                        className={`flex items-center gap-3 rounded-xl border-2 p-4 text-left text-sm transition-all ${
                          form.project_type === t.label
                            ? "border-[#b5522a] bg-orange-50 text-stone-900"
                            : "border-stone-200 text-stone-600 hover:border-stone-300"
                        }`}
                      >
                        <span className="text-xl">{t.icon}</span>
                        <span className="font-medium">{t.label}</span>
                      </button>
                    ))}
                  </div>
                  {touched.project_type && errors.project_type && (
                    <p className="mt-2 text-xs text-red-500">{errors.project_type}</p>
                  )}
                </div>
              )}

              {/* Step 1: Détails */}
              {step === 1 && (
                <div className="space-y-4">
                  <h2 className="text-lg font-semibold text-stone-900 mb-1">
                    Détails du projet
                  </h2>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-stone-700">
                      Ville du projet *
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {CITIES.map((c) => (
                        <button
                          key={c}
                          onClick={() => { update({ location: c }); blur("location"); }}
                          className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
                            form.location === c
                              ? "border-[#b5522a] bg-[#b5522a] text-white"
                              : "border-stone-200 text-stone-600 hover:border-stone-400"
                          }`}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                    {touched.location && errors.location && (
                      <p className="mt-1 text-xs text-red-500">{errors.location}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="description" className="mb-1 block text-sm font-medium text-stone-700">
                      Décrivez votre projet *
                    </label>
                    <textarea
                      id="description"
                      rows={4}
                      value={form.description}
                      onChange={(e) => update({ description: e.target.value })}
                      onBlur={() => blur("description")}
                      placeholder="Surface souhaitée, nombre de pièces, style architectural, contraintes particulières..."
                      className={`w-full rounded-md border px-3 py-2 text-sm placeholder:text-stone-400 focus-visible:outline-none focus-visible:ring-1 transition-colors ${
                        touched.description && errors.description
                          ? "border-red-400 focus-visible:ring-red-400"
                          : touched.description && !errors.description
                          ? "border-green-400 focus-visible:ring-green-400"
                          : "border-stone-200 focus-visible:ring-[#b5522a]"
                      }`}
                    />
                    {touched.description && errors.description && (
                      <p className="mt-1 text-xs text-red-500">{errors.description}</p>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="surface" className="mb-1 block text-sm font-medium text-stone-700">
                        Surface (m²) <span className="text-stone-400 font-normal">(optionnel)</span>
                      </label>
                      <Input
                        id="surface"
                        value={form.surface}
                        onChange={(e) => update({ surface: e.target.value })}
                        placeholder="Ex: 200"
                      />
                    </div>
                    <div>
                      <label htmlFor="style" className="mb-1 block text-sm font-medium text-stone-700">
                        Style <span className="text-stone-400 font-normal">(optionnel)</span>
                      </label>
                      <Input
                        id="style"
                        value={form.style}
                        onChange={(e) => update({ style: e.target.value })}
                        placeholder="Ex: Moderne, Traditionnel"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Budget & Délai */}
              {step === 2 && (
                <div className="space-y-4">
                  <h2 className="text-lg font-semibold text-stone-900 mb-1">
                    Budget et délai
                  </h2>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-stone-700">
                      Budget estimé <span className="text-stone-400 font-normal">(optionnel)</span>
                    </label>
                    <div className="space-y-2">
                      {BUDGETS.map((b) => (
                        <button
                          key={b.label}
                          onClick={() => update({ budget_label: b.label, budget_min: b.min, budget_max: b.max })}
                          className={`w-full rounded-lg border-2 px-4 py-3 text-left text-sm transition-all ${
                            form.budget_label === b.label
                              ? "border-[#b5522a] bg-orange-50 text-stone-900 font-medium"
                              : "border-stone-200 text-stone-600 hover:border-stone-300"
                          }`}
                        >
                          {b.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-stone-700">
                      Début du projet souhaité
                    </label>
                    <div className="space-y-2">
                      {TIMELINES.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => update({ timeline: t })}
                          className={`w-full rounded-lg border-2 px-4 py-2.5 text-left text-sm transition-all ${
                            form.timeline === t
                              ? "border-[#b5522a] bg-orange-50 text-stone-900 font-medium"
                              : "border-stone-200 text-stone-600 hover:border-stone-300"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Coordonnées */}
              {step === 3 && (
                <div className="space-y-4">
                  <h2 className="text-lg font-semibold text-stone-900 mb-1">
                    Vos coordonnées
                  </h2>
                  <p className="text-sm text-stone-500">
                    Tous les champs sont obligatoires
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="client_last_name" className="mb-1 block text-sm font-medium text-stone-700">
                        Nom *
                      </label>
                      <Input
                        id="client_last_name"
                        value={form.client_last_name}
                        onChange={(e) => update({ client_last_name: e.target.value })}
                        onBlur={() => blur("client_last_name")}
                        className={
                          touched.client_last_name && errors.client_last_name
                            ? "border-red-400 focus-visible:ring-red-400"
                            : touched.client_last_name && !errors.client_last_name
                            ? "border-green-400 focus-visible:ring-green-400"
                            : ""
                        }
                        placeholder="Votre nom"
                      />
                      {touched.client_last_name && errors.client_last_name && (
                        <p className="mt-1 text-xs text-red-500">{errors.client_last_name}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="client_first_name" className="mb-1 block text-sm font-medium text-stone-700">
                        Prénom *
                      </label>
                      <Input
                        id="client_first_name"
                        value={form.client_first_name}
                        onChange={(e) => update({ client_first_name: e.target.value })}
                        onBlur={() => blur("client_first_name")}
                        className={
                          touched.client_first_name && errors.client_first_name
                            ? "border-red-400 focus-visible:ring-red-400"
                            : touched.client_first_name && !errors.client_first_name
                            ? "border-green-400 focus-visible:ring-green-400"
                            : ""
                        }
                        placeholder="Votre prénom"
                      />
                      {touched.client_first_name && errors.client_first_name && (
                        <p className="mt-1 text-xs text-red-500">{errors.client_first_name}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="client_email" className="mb-1 block text-sm font-medium text-stone-700">
                      Email *
                    </label>
                    <Input
                      id="client_email"
                      type="email"
                      value={form.client_email}
                      onChange={(e) => { update({ client_email: e.target.value }); setExistingClient(null); setMagicLinkSent(false); }}
                      onBlur={async () => {
                        blur("client_email");
                        const email = form.client_email.trim().toLowerCase();
                        if (!email || !EMAIL_RE.test(email)) return;
                        try {
                          const res = await fetch(`${API_URL}/store/clients/check-email`, {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ email }),
                          });
                          const data = await res.json();
                          if (data.exists && data.name) setExistingClient({ name: data.name });
                          else setExistingClient(null);
                        } catch {}
                      }}
                      className={
                        touched.client_email && errors.client_email
                          ? "border-red-400 focus-visible:ring-red-400"
                          : touched.client_email && !errors.client_email
                          ? "border-green-400 focus-visible:ring-green-400"
                          : ""
                      }
                      placeholder="votre@email.com"
                    />
                    {touched.client_email && errors.client_email && (
                      <p className="mt-1 text-xs text-red-500">{errors.client_email}</p>
                    )}

                    {/* Bon retour — email existant */}
                    {existingClient && !errors.client_email && (
                      <div className="mt-3 rounded-lg border border-blue-200 bg-blue-50 p-3 text-sm">
                        {magicLinkSent ? (
                          <p className="text-blue-800 flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
                            <span>
                              Lien envoyé à <strong>{form.client_email}</strong>. Cliquez-y pour récupérer vos projets, ou continuez sans.
                            </span>
                          </p>
                        ) : (
                          <>
                            <p className="text-blue-900 mb-2">
                              Bon retour <strong>{existingClient.name}</strong> 👋 Nous reconnaissons votre email.
                            </p>
                            <button
                              type="button"
                              disabled={sendingMagicLink}
                              onClick={async () => {
                                setSendingMagicLink(true);
                                try {
                                  await fetch(`${API_URL}/store/clients/magic-link/request`, {
                                    method: "POST",
                                    headers: { "Content-Type": "application/json" },
                                    body: JSON.stringify({ email: form.client_email.trim() }),
                                  });
                                  setMagicLinkSent(true);
                                } catch {}
                                setSendingMagicLink(false);
                              }}
                              className="text-xs font-medium text-blue-700 hover:text-blue-900 underline disabled:opacity-50"
                            >
                              {sendingMagicLink ? "Envoi du lien..." : "Recevoir un lien magique pour retrouver mes projets"}
                            </button>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                  <div>
                    <label htmlFor="client_phone" className="mb-1 block text-sm font-medium text-stone-700">
                      Téléphone *
                    </label>
                    <div className="flex gap-2">
                      <select
                        value={form.client_country_code}
                        onChange={(e) => update({ client_country_code: e.target.value })}
                        className="w-[120px] shrink-0 rounded-md border border-stone-200 px-2 py-2 text-sm text-stone-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#b5522a]"
                      >
                        {COUNTRY_CODES.map((c) => (
                          <option key={c.code} value={c.code}>{c.label}</option>
                        ))}
                      </select>
                      <Input
                        id="client_phone"
                        value={form.client_phone}
                        onChange={(e) => update({ client_phone: e.target.value })}
                        onBlur={() => blur("client_phone")}
                        className={`flex-1 ${
                          touched.client_phone && errors.client_phone
                            ? "border-red-400 focus-visible:ring-red-400"
                            : touched.client_phone && form.client_phone.trim() && !errors.client_phone
                            ? "border-green-400 focus-visible:ring-green-400"
                            : ""
                        }`}
                        placeholder="6XX XXX XXX"
                      />
                    </div>
                    {touched.client_phone && errors.client_phone && (
                      <p className="mt-1 text-xs text-red-500">{errors.client_phone}</p>
                    )}
                  </div>
                </div>
              )}

              {/* Error message */}
              {error && (
                <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between pt-4 border-t border-stone-100">
                {step > 0 ? (
                  <Button variant="outline" onClick={() => setStep(step - 1)}>
                    <ArrowLeft className="mr-1 h-4 w-4" /> Précédent
                  </Button>
                ) : (
                  <div />
                )}
                {step < 3 ? (
                  <Button onClick={handleNext}>
                    Suivant <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={loading}
                  >
                    {loading ? "Envoi..." : "Envoyer ma demande"}{" "}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                )}
              </div>

              <p className="text-center text-xs text-stone-400">
                Gratuit et sans engagement. Vos données sont confidentielles.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
