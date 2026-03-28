"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

export default function SoumettreProjetPage() {
  const [submitted, setSubmitted] = useState(false);

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
            Espace Client
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
                    <label
                      key={t}
                      className="flex cursor-pointer items-center gap-1.5 rounded-full border border-stone-200 px-3 py-1.5 text-sm text-stone-600 transition-colors has-[:checked]:border-[#b5522a] has-[:checked]:bg-[#b5522a] has-[:checked]:text-white hover:border-stone-400"
                    >
                      <input type="radio" name="project_type" value={t} className="sr-only" />
                      {t}
                    </label>
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
                    <label
                      key={c}
                      className="flex cursor-pointer items-center gap-1.5 rounded-full border border-stone-200 px-3 py-1.5 text-sm text-stone-600 transition-colors has-[:checked]:border-[#b5522a] has-[:checked]:bg-[#b5522a] has-[:checked]:text-white hover:border-stone-400"
                    >
                      <input type="radio" name="city" value={c} className="sr-only" />
                      {c}
                    </label>
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
                  placeholder="Surface souhaitée, nombre de pièces, style architectural, contraintes particulières..."
                  className="w-full rounded-md border border-stone-200 px-3 py-2 text-sm placeholder:text-stone-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#b5522a]"
                />
              </div>

              {/* Budget */}
              <div>
                <label className="mb-2 block text-sm font-medium text-stone-700">
                  Budget estimé
                </label>
                <select className="w-full rounded-md border border-stone-200 px-3 py-2 text-sm text-stone-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#b5522a]">
                  <option value="">Sélectionner un budget</option>
                  {BUDGETS.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              {/* Délai */}
              <div>
                <label className="mb-1 block text-sm font-medium text-stone-700">
                  Délai souhaité
                </label>
                <Input placeholder="Ex: Début des travaux dans 3 mois" />
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
                    <Input placeholder="Votre nom" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-stone-700">
                      Email *
                    </label>
                    <Input type="email" placeholder="votre@email.com" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-stone-700">
                      Téléphone
                    </label>
                    <Input placeholder="+212 6XX XXX XXX" />
                  </div>
                </div>
              </div>

              <Button className="w-full" onClick={() => setSubmitted(true)}>
                Envoyer ma demande <ArrowRight className="ml-1 h-4 w-4" />
              </Button>

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
