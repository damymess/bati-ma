"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Crown, Zap, Star, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Cycle = "monthly" | "annual";

const TIERS = [
  {
    id: "free",
    name: "Gratuit",
    monthly: 0,
    annual: 0,
    icon: Star,
    color: "stone",
    description: "Découvrir la plateforme",
    features: [
      "Profil architecte public",
      "Voir les demandes de devis",
      "Description projet + ville + budget visibles",
    ],
  },
  {
    id: "essentiel",
    name: "Essentiel",
    monthly: 499,
    annual: 4990,
    icon: Zap,
    color: "blue",
    description: "Démarrer votre activité en ligne",
    features: [
      "Tout le plan Gratuit",
      "15 contacts débloqués / mois",
      "Coordonnées email et téléphone",
      "Photos portfolio illimitées",
      "Support par email",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    monthly: 1299,
    annual: 12990,
    icon: Crown,
    color: "orange",
    popular: true,
    description: "Gagner plus de projets qualifiés",
    features: [
      "Tout le plan Essentiel",
      "50 contacts débloqués / mois",
      "10 crédits Shortlist / mois (leads exclusifs)",
      "Badge « Vérifié bati.ma »",
      "Top des résultats de recherche",
      "Statistiques avancées",
      "Mini-CRM intégré",
    ],
  },
  {
    id: "elite",
    name: "Elite",
    monthly: 2999,
    annual: 29990,
    icon: Shield,
    color: "purple",
    description: "Leader de votre ville",
    features: [
      "Tout le plan Pro",
      "Contacts illimités",
      "30 crédits Shortlist / mois",
      "Badge « Vérifié+ » renforcé",
      "Positionnement #1 garanti",
      "Account manager dédié",
      "Accès anticipé nouvelles features",
    ],
  },
];

export default function TarifsClient() {
  const [cycle, setCycle] = useState<Cycle>("annual");

  return (
    <section className="py-12 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center bg-stone-100 rounded-full p-1">
            <button
              onClick={() => setCycle("monthly")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                cycle === "monthly" ? "bg-white text-stone-900 shadow-sm" : "text-stone-500"
              }`}
            >
              Mensuel
            </button>
            <button
              onClick={() => setCycle("annual")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                cycle === "annual" ? "bg-white text-stone-900 shadow-sm" : "text-stone-500"
              }`}
            >
              Annuel <span className="text-[#b5522a] font-semibold ml-1">-15%</span>
            </button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {TIERS.map((plan) => {
            const Icon = plan.icon;
            const price = cycle === "monthly" ? plan.monthly : Math.round(plan.annual / 12);
            const savings = plan.monthly * 12 - plan.annual;

            return (
              <Card
                key={plan.id}
                className={`relative flex flex-col ${
                  plan.popular ? "border-[#b5522a] shadow-lg" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-[#b5522a] text-white text-xs px-3">Le plus populaire</Badge>
                  </div>
                )}
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon
                      className={`h-5 w-5 ${
                        plan.color === "purple"
                          ? "text-purple-500"
                          : plan.color === "orange"
                            ? "text-[#b5522a]"
                            : plan.color === "blue"
                              ? "text-blue-500"
                              : "text-stone-400"
                      }`}
                    />
                    <CardTitle className="text-base">{plan.name}</CardTitle>
                  </div>
                  <p className="text-xs text-stone-500 mb-2">{plan.description}</p>
                  <div>
                    <span className="text-2xl font-bold text-stone-900">
                      {price === 0 ? "Gratuit" : `${price.toLocaleString("fr-MA")} MAD`}
                    </span>
                    {price > 0 && <span className="text-sm text-stone-500">/mois</span>}
                  </div>
                  {cycle === "annual" && price > 0 && (
                    <p className="text-xs text-green-600 mt-1 font-medium">
                      Économisez {savings.toLocaleString("fr-MA")} MAD/an
                    </p>
                  )}
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-2 mb-5 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-stone-600">
                        <Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  {plan.id === "free" ? (
                    <Link href="/inscription-architecte" className="w-full">
                      <Button variant="outline" className="w-full rounded-full">
                        Commencer gratuitement
                      </Button>
                    </Link>
                  ) : (
                    <Link href="/inscription-architecte" className="w-full">
                      <Button
                        className={`w-full rounded-full ${
                          plan.popular ? "bg-[#b5522a] hover:bg-[#a0441f]" : ""
                        }`}
                        variant={plan.popular ? "default" : "outline"}
                      >
                        Choisir {plan.name}
                      </Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <p className="text-center text-xs text-stone-400 mt-6">
          Paiement sécurisé · Facture disponible · Support en français et arabe
        </p>
      </div>
    </section>
  );
}
