"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { submitProjectRequest } from "@/lib/api";
import { trackSoumettreProjetSubmit } from "@/lib/tracking";

const PROJECT_TYPES = [
  "Villa / Maison",
  "Appartement",
  "Immeuble résidentiel",
  "Local commercial",
  "Hôtel / Tourisme",
  "Rénovation riad",
  "Architecture d'intérieur",
  "Bureau / Coworking",
];

const CITIES = [
  "Casablanca",
  "Marrakech",
  "Rabat",
  "Tanger",
  "Agadir",
  "Fès",
  "Meknès",
  "Autre",
];

const BUDGETS = [
  "< 100 000 MAD",
  "100 000 – 300 000 MAD",
  "300 000 – 500 000 MAD",
  "500 000 – 1 000 000 MAD",
  "1 000 000 – 3 000 000 MAD",
  "> 3 000 000 MAD",
  "Je ne sais pas encore",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\+?[\d\s\-()]{7,15}$/;

export default function SoumettreProjetPage() {
  return (
    <Suspense>
      <SoumettreProjetForm />
    </Suspense>
  );
}

function SoumettreProjetForm() {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [projectType, setProjectType] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Pre-fill from query params (from QuickLeadForm)
  useEffect(() => {
    const type = searchParams.get("type");
    const cityParam = searchParams.get("city");
    if (type) setProjectType(type);
    if (cityParam) setCity(cityParam);
  }, [searchParams]);

  const handleSubmit = async () => {
    // Validation
    if (!projectType) { setError("Sélectionnez un type de projet"); return; }
    if (!city) { setError("Sélectionnez une ville"); return; }
    if (!description.trim()) { setError("Décrivez votre projet"); return; }
    if (!name.trim() || name.trim().length < 2) { setError("Entrez votre nom (min. 2 caractères)"); return; }
    if (!email.trim() && !phone.trim()) { setError("Email ou téléphone requis"); return; }
    if (email.trim() && !EMAIL_RE.test(email.trim())) { setError("Format email invalide"); return; }
    if (phone.trim() && !PHONE_RE.test(phone.trim())) { setError("Format téléphone invalide"); return; }

    setLoading(true);
    setError("");
    try {
      await submitProjectRequest({
        title: `${projectType} — ${city}`,
        client_name: name.trim(),
        client_email: email.trim() || "lead@bati.ma",
        client_phone: phone.trim() || undefined,
        description: description.trim(),
        project_type: projectType,
        location: city,
        timeline: timeline.trim() || undefined,
      });
      trackSoumettreProjetSubmit();
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
            Projet soumis !
          </h1>
          <p className="mt-2 text-stone-500">
            Les architectes correspondant à votre projet recevront votre demande.
            Vous serez contacté sous 24-48h.
          </p>
          <Button className="mt-6 rounded-full" asChild>
            <Link href="/">Retour à l&apos;accueil</Link>
          </Button>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-stone-950 px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="border-stone-700 text-stone-400 text-xs mb-4">
            Gratuit et sans engagement
          </Badge>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Décrivez votre projet
          </h1>
          <p className="mt-3 text-stone-400">
            Recevez jusqu&apos;à 3 devis gratuits d&apos;architectes qualifiés dans votre ville.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-xl">
          <Card>
            <CardHeader>
              <CardTitle>Votre projet</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              {/* Type de projet */}
              <div>
                <label className="mb-2 block text-sm font-medium text-stone-700">
                  Type de projet *
                </label>
                <div className="flex flex-wrap gap-2">
                  {PROJECT_TYPES.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setProjectType(t)}
                      className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
                        projectType === t
                          ? "border-[#b5522a] bg-[#b5522a] text-white"
                          : "border-stone-200 text-stone-600 hover:border-stone-400"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Ville */}
              <div>
                <label className="mb-2 block text-sm font-medium text-stone-700">
                  Ville du projet *
                </label>
                <div className="flex flex-wrap gap-2">
                  {CITIES.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setCity(c)}
                      className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
                        city === c
                          ? "border-[#b5522a] bg-[#b5522a] text-white"
                          : "border-stone-200 text-stone-600 hover:border-stone-400"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="mb-1 block text-sm font-medium text-stone-700">
                  Décrivez votre projet *
                </label>
                <textarea
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Surface souhaitée, nombre de pièces, style architectural, contraintes particulières..."
                  className="w-full rounded-md border border-stone-200 px-3 py-2 text-sm placeholder:text-stone-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#b5522a]"
                />
              </div>

              {/* Budget */}
              <div>
                <label className="mb-2 block text-sm font-medium text-stone-700">
                  Budget estimé
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full rounded-md border border-stone-200 px-3 py-2 text-sm text-stone-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#b5522a]"
                >
                  <option value="">Sélectionner un budget</option>
                  {BUDGETS.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>

              {/* Délai */}
              <div>
                <label className="mb-1 block text-sm font-medium text-stone-700">
                  Délai souhaité
                </label>
                <Input
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  placeholder="Ex: Début des travaux dans 3 mois"
                />
              </div>

              {/* Coordonnées */}
              <div className="border-t border-stone-100 pt-5">
                <h3 className="mb-3 font-semibold text-stone-900 text-sm">
                  Vos coordonnées
                </h3>
                <div className="space-y-3">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-stone-700">
                      Nom complet *
                    </label>
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-stone-700">
                      Email
                    </label>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-stone-700">
                      Téléphone
                    </label>
                    <Input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+212 6XX XXX XXX"
                    />
                  </div>
                  <p className="text-xs text-stone-400">
                    Email ou téléphone requis. Vos données sont confidentielles.
                  </p>
                </div>
              </div>

              {error && (
                <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </div>
              )}

              <Button className="w-full" onClick={handleSubmit} disabled={loading}>
                {loading ? "Envoi..." : "Envoyer ma demande"} <ArrowRight className="ml-1 h-4 w-4" />
              </Button>

              <p className="text-center text-xs text-stone-400">
                Gratuit et sans engagement.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
