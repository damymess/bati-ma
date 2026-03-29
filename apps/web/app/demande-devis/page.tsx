"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, ArrowLeft, ClipboardList, MapPin, Wallet, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { submitProjectRequest } from "@/lib/api";

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
  client_name: string;
  client_email: string;
  client_phone: string;
};

export default function DemandeDevisPage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<FormData>({
    project_type: "",
    location: "",
    description: "",
    surface: "",
    style: "",
    budget_label: "",
    budget_min: 0,
    budget_max: 0,
    timeline: "",
    client_name: "",
    client_email: "",
    client_phone: "",
  });

  const update = (partial: Partial<FormData>) =>
    setForm((prev) => ({ ...prev, ...partial }));

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const canNext = () => {
    if (step === 0) return !!form.project_type;
    if (step === 1) return !!form.location && !!form.description;
    if (step === 2) return true;
    if (step === 3) return !!form.client_name && !!form.client_email && isValidEmail(form.client_email);
    return false;
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      await submitProjectRequest({
        title: `${form.project_type} — ${form.location}`,
        client_name: form.client_name,
        client_email: form.client_email,
        client_phone: form.client_phone || undefined,
        description: form.description + (form.surface ? `\nSurface: ${form.surface}` : "") + (form.style ? `\nStyle: ${form.style}` : ""),
        project_type: form.project_type,
        location: form.location,
        budget_min: form.budget_min || undefined,
        budget_max: form.budget_max || undefined,
        timeline: form.timeline || undefined,
      });
      setSubmitted(true);
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
                          onClick={() => update({ location: c })}
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
                      placeholder="Surface souhaitée, nombre de pièces, style architectural, contraintes particulières..."
                      className="w-full rounded-md border border-stone-200 px-3 py-2 text-sm placeholder:text-stone-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#b5522a]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="surface" className="mb-1 block text-sm font-medium text-stone-700">Surface (m²)</label>
                      <Input
                        id="surface"
                        value={form.surface}
                        onChange={(e) => update({ surface: e.target.value })}
                        placeholder="Ex: 200"
                      />
                    </div>
                    <div>
                      <label htmlFor="style" className="mb-1 block text-sm font-medium text-stone-700">Style</label>
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
                      Budget estimé
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
                    <label htmlFor="timeline" className="mb-1 block text-sm font-medium text-stone-700">
                      Délai souhaité
                    </label>
                    <Input
                      id="timeline"
                      value={form.timeline}
                      onChange={(e) => update({ timeline: e.target.value })}
                      placeholder="Ex: Début des travaux dans 3 mois"
                    />
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
                    Vos coordonnées seront visibles uniquement par les architectes abonnés
                  </p>
                  <div>
                    <label htmlFor="client_name" className="mb-1 block text-sm font-medium text-stone-700">
                      Nom complet *
                    </label>
                    <Input
                      id="client_name"
                      value={form.client_name}
                      onChange={(e) => update({ client_name: e.target.value })}
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="client_email" className="mb-1 block text-sm font-medium text-stone-700">
                      Email *
                    </label>
                    <Input
                      id="client_email"
                      type="email"
                      value={form.client_email}
                      onChange={(e) => update({ client_email: e.target.value })}
                      placeholder="votre@email.com"
                    />
                    {form.client_email && !isValidEmail(form.client_email) && (
                      <p className="mt-1 text-xs text-red-500">Format email invalide</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="client_phone" className="mb-1 block text-sm font-medium text-stone-700">
                      Téléphone
                    </label>
                    <Input
                      id="client_phone"
                      value={form.client_phone}
                      onChange={(e) => update({ client_phone: e.target.value })}
                      placeholder="+212 6XX XXX XXX"
                    />
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
                  <Button
                    onClick={() => setStep(step + 1)}
                    disabled={!canNext()}
                  >
                    Suivant <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={!canNext() || loading}
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
