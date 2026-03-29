"use client";

import { useState, useEffect } from "react";
import { Check, Crown, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getMe, type ArchitectProfile } from "@/lib/auth";

const PLANS = [
  {
    id: "free",
    name: "Gratuit",
    price: "0 MAD",
    period: "pour toujours",
    icon: Star,
    color: "stone",
    features: [
      "Voir les demandes de devis",
      "Description du projet visible",
      "Ville et budget visibles",
      "Profil architecte basique",
    ],
    limitations: [
      "Coordonnées clients masquées",
      "Pas de contact direct",
    ],
  },
  {
    id: "standard",
    name: "Standard",
    price: "299 MAD",
    period: "/mois",
    icon: Zap,
    color: "blue",
    popular: true,
    features: [
      "Tout le plan Gratuit",
      "5 contacts débloqués / mois",
      "Coordonnées email et téléphone",
      "Badge architecte vérifié",
      "Priorité dans les résultats",
    ],
    limitations: [
      "Limité à 5 contacts/mois",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: "799 MAD",
    period: "/mois",
    icon: Crown,
    color: "purple",
    features: [
      "Tout le plan Standard",
      "Contacts illimités",
      "Badge Premium doré",
      "Top des résultats de recherche",
      "Statistiques avancées",
      "Support prioritaire",
    ],
    limitations: [],
  },
];

export default function AbonnementPage() {
  const [architect, setArchitect] = useState<(ArchitectProfile & { subscription_tier?: string; contacts_used_this_month?: number; contacts_limit?: number }) | null>(null);

  useEffect(() => {
    getMe().then((a) => setArchitect(a as any));
  }, []);

  const currentTier = (architect as any)?.subscription_tier || "free";

  return (
    <div>
      <h2 className="text-xl font-bold text-stone-900 mb-1">Abonnement</h2>
      <p className="text-sm text-stone-500 mb-6">
        Choisissez le plan qui correspond à vos besoins
      </p>

      {/* Current usage */}
      {currentTier !== "free" && (
        <Card className="mb-6 border-[#b5522a]/20 bg-orange-50">
          <CardContent className="pt-5">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs text-stone-500 uppercase tracking-wider">Contacts ce mois</span>
                <p className="text-2xl font-bold text-stone-900">
                  {(architect as any)?.contacts_used_this_month || 0}
                  {currentTier === "standard" && (
                    <span className="text-sm font-normal text-stone-500"> / {(architect as any)?.contacts_limit || 5}</span>
                  )}
                  {currentTier === "premium" && (
                    <span className="text-sm font-normal text-stone-500"> / illimité</span>
                  )}
                </p>
              </div>
              <Badge className={
                currentTier === "premium" ? "bg-purple-100 text-purple-700" : "bg-blue-100 text-blue-700"
              }>
                Plan {currentTier.charAt(0).toUpperCase() + currentTier.slice(1)}
              </Badge>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Plans */}
      <div className="grid gap-4 sm:grid-cols-3">
        {PLANS.map((plan) => {
          const Icon = plan.icon;
          const isCurrent = currentTier === plan.id;
          return (
            <Card
              key={plan.id}
              className={`relative ${
                plan.popular ? "border-[#b5522a] shadow-md" : ""
              } ${isCurrent ? "ring-2 ring-[#b5522a]" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-[#b5522a] text-white text-xs">Populaire</Badge>
                </div>
              )}
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-2">
                  <Icon className={`h-5 w-5 ${
                    plan.color === "purple" ? "text-purple-500" :
                    plan.color === "blue" ? "text-blue-500" :
                    "text-stone-400"
                  }`} />
                  <CardTitle className="text-base">{plan.name}</CardTitle>
                </div>
                <div>
                  <span className="text-2xl font-bold text-stone-900">{plan.price}</span>
                  <span className="text-sm text-stone-500">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-stone-600">
                      <Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                  {plan.limitations.map((l) => (
                    <li key={l} className="flex items-start gap-2 text-sm text-stone-400">
                      <span className="h-4 w-4 shrink-0 mt-0.5 text-center">—</span>
                      {l}
                    </li>
                  ))}
                </ul>
                {isCurrent ? (
                  <Button variant="outline" className="w-full rounded-full" disabled>
                    Plan actuel
                  </Button>
                ) : (
                  <Button
                    className={`w-full rounded-full ${
                      plan.popular ? "bg-[#b5522a] hover:bg-[#a0441f]" : ""
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                    disabled
                  >
                    Bientôt disponible
                  </Button>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      <p className="text-center text-xs text-stone-400 mt-6">
        Le paiement en ligne sera bientôt disponible. Contactez-nous pour activer votre abonnement.
      </p>
    </div>
  );
}
