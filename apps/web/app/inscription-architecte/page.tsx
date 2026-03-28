"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SPECIALTIES = [
  "Résidentiel",
  "Commercial",
  "Intérieur",
  "Riad & Patrimoine",
  "Industriel",
  "Hôtellerie",
  "Urbanisme",
  "Éco-construction",
];

const CITIES = [
  "Casablanca",
  "Marrakech",
  "Rabat",
  "Tanger",
  "Agadir",
  "Fès",
  "Meknès",
];

export default function InscriptionArchitectePage() {
  const [step, setStep] = useState(1);
  const [selectedSpecs, setSelectedSpecs] = useState<string[]>([]);
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const toggleSpec = (s: string) =>
    setSelectedSpecs((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  const toggleCity = (c: string) =>
    setSelectedCities((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]
    );

  if (submitted) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="max-w-md text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle2 className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="mt-4 text-2xl font-bold text-stone-900">
            Inscription reçue !
          </h1>
          <p className="mt-2 text-stone-500">
            Votre profil sera vérifié par notre équipe sous 24-48h.
            Vous recevrez un email de confirmation.
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
            Espace Architecte
          </Badge>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Inscrivez votre cabinet
          </h1>
          <p className="mt-3 text-stone-400">
            Rejoignez Bati.ma et recevez des demandes de devis qualifiées.
            Inscription gratuite.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-xl">
          {/* Progress */}
          <div className="mb-8 flex items-center justify-center gap-2">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${
                    step >= s
                      ? "bg-[#b5522a] text-white"
                      : "bg-stone-100 text-stone-400"
                  }`}
                >
                  {s}
                </div>
                {s < 3 && (
                  <div
                    className={`h-0.5 w-8 ${step > s ? "bg-[#b5522a]" : "bg-stone-200"}`}
                  />
                )}
              </div>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>
                {step === 1 && "Informations professionnelles"}
                {step === 2 && "Spécialités & couverture"}
                {step === 3 && "Détails du cabinet"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {step === 1 && (
                <>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-stone-700">
                      Nom du cabinet / architecte *
                    </label>
                    <Input placeholder="Ex: Studio Arc Casablanca" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-stone-700">
                      Email professionnel *
                    </label>
                    <Input type="email" placeholder="contact@studio-arc.ma" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-stone-700">
                      Téléphone
                    </label>
                    <Input placeholder="+212 6XX XXX XXX" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-stone-700">
                      N° inscription Ordre des Architectes
                    </label>
                    <Input placeholder="Facultatif" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-stone-700">
                      Années d&apos;expérience
                    </label>
                    <Input type="number" placeholder="10" />
                  </div>
                  <Button className="w-full" onClick={() => setStep(2)}>
                    Suivant <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </>
              )}

              {step === 2 && (
                <>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-stone-700">
                      Spécialités (choisir au moins une) *
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {SPECIALTIES.map((s) => (
                        <button
                          key={s}
                          onClick={() => toggleSpec(s)}
                          className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
                            selectedSpecs.includes(s)
                              ? "border-[#b5522a] bg-[#b5522a] text-white"
                              : "border-stone-200 text-stone-600 hover:border-stone-400"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-stone-700">
                      Villes couvertes *
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {CITIES.map((c) => (
                        <button
                          key={c}
                          onClick={() => toggleCity(c)}
                          className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
                            selectedCities.includes(c)
                              ? "border-[#b5522a] bg-[#b5522a] text-white"
                              : "border-stone-200 text-stone-600 hover:border-stone-400"
                          }`}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1" onClick={() => setStep(1)}>
                      Retour
                    </Button>
                    <Button className="flex-1" onClick={() => setStep(3)}>
                      Suivant <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-stone-700">
                      Description du cabinet
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Présentez votre cabinet, votre approche et vos réalisations..."
                      className="w-full rounded-md border border-stone-200 px-3 py-2 text-sm placeholder:text-stone-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#b5522a]"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-stone-700">
                      Site web
                    </label>
                    <Input placeholder="https://www.studio-arc.ma" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="mb-1 block text-sm font-medium text-stone-700">
                        Tarif horaire (MAD)
                      </label>
                      <Input type="number" placeholder="500" />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-stone-700">
                        Tarif projet min (MAD)
                      </label>
                      <Input type="number" placeholder="15 000" />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1" onClick={() => setStep(2)}>
                      Retour
                    </Button>
                    <Button className="flex-1" onClick={() => setSubmitted(true)}>
                      S&apos;inscrire gratuitement
                    </Button>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Benefits */}
          <div className="mt-8 rounded-xl border border-stone-100 bg-stone-50 p-5">
            <h3 className="font-semibold text-stone-900 text-sm">
              Pourquoi rejoindre Bati.ma ?
            </h3>
            <div className="mt-3 space-y-2">
              {[
                "Visibilité SEO dans Google sur votre ville",
                "Réception de demandes de devis qualifiées",
                "Profil professionnel avec portfolio",
                "Inscription 100% gratuite",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#b5522a]" />
                  <span className="text-sm text-stone-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
