"use client";

import { useState, useEffect } from "react";
import { Check, Crown, Zap, Star, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getMe, getToken, type ArchitectProfile } from "@/lib/auth";

type Cycle = "monthly" | "annual";

const TIER_DATA = [
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
    limitations: [
      "Coordonnées clients masquées",
      "Pas de contact direct",
      "Non référencé en priorité",
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
    limitations: [],
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
      "Statistiques avancées (vues, CTR, conversion)",
      "Mini-CRM intégré",
    ],
    limitations: [],
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
      "Badge « Vérifié+ » (vérification renforcée)",
      "Positionnement #1 garanti dans votre ville",
      "Account manager dédié",
      "Accès anticipé aux nouvelles fonctionnalités",
    ],
    limitations: [],
  },
];

export default function AbonnementPage() {
  const [architect, setArchitect] = useState<(ArchitectProfile & { subscription_tier?: string; contacts_used_this_month?: number }) | null>(null);
  const [cycle, setCycle] = useState<Cycle>("monthly");
  const [loading, setLoading] = useState<string | null>(null);

  useEffect(() => {
    getMe().then((a) => setArchitect(a as any));
  }, []);

  const currentTier = (architect as any)?.subscription_tier || "free";

  async function handleSubscribe(tierId: string) {
    if (tierId === "free") return;
    setLoading(tierId);
    try {
      const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:9000";
      const res = await fetch(`${API_BASE}/store/subscriptions/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify({ tier: tierId, cycle }),
      });
      const data = await res.json();
      if (res.ok && data.url) {
        window.location.href = data.url;
      } else if (data.message) {
        alert(data.message);
      } else {
        alert("Erreur lors de la création de la session de paiement");
      }
    } catch (err) {
      alert("Erreur réseau : " + (err as Error).message);
    } finally {
      setLoading(null);
    }
  }

  return (
    <div>
      <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
        <div>
          <h2 className="text-xl font-bold text-stone-900 mb-1">Abonnement</h2>
          <p className="text-sm text-stone-500">
            Choisissez le plan qui correspond à vos besoins
          </p>
        </div>

        {/* Toggle mensuel / annuel */}
        <div className="inline-flex items-center bg-stone-100 rounded-full p-1">
          <button
            onClick={() => setCycle("monthly")}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
              cycle === "monthly" ? "bg-white text-stone-900 shadow-sm" : "text-stone-500"
            }`}
          >
            Mensuel
          </button>
          <button
            onClick={() => setCycle("annual")}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
              cycle === "annual" ? "bg-white text-stone-900 shadow-sm" : "text-stone-500"
            }`}
          >
            Annuel <span className="text-[#b5522a] font-semibold">-15%</span>
          </button>
        </div>
      </div>

      {/* Usage actuel */}
      {currentTier !== "free" && (
        <Card className="mb-6 border-[#b5522a]/20 bg-orange-50">
          <CardContent className="pt-5">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <span className="text-xs text-stone-500 uppercase tracking-wider">Contacts ce mois</span>
                <p className="text-2xl font-bold text-stone-900">
                  {(architect as any)?.contacts_used_this_month || 0}
                  <span className="text-sm font-normal text-stone-500">
                    {" "}/ {TIER_DATA.find((t) => t.id === currentTier)?.features[1]?.match(/\d+/)?.[0] || "∞"}
                  </span>
                </p>
              </div>
              <Badge className="bg-[#b5522a] text-white">
                Plan actuel : {TIER_DATA.find((t) => t.id === currentTier)?.name || currentTier}
              </Badge>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Plans */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {TIER_DATA.map((plan) => {
          const Icon = plan.icon;
          const isCurrent = currentTier === plan.id;
          const price = cycle === "monthly" ? plan.monthly : Math.round(plan.annual / 12);
          const totalAnnual = plan.annual;

          return (
            <Card
              key={plan.id}
              className={`relative flex flex-col ${
                plan.popular ? "border-[#b5522a] shadow-lg" : ""
              } ${isCurrent ? "ring-2 ring-[#b5522a]" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-[#b5522a] text-white text-xs px-3">Le plus populaire</Badge>
                </div>
              )}
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-1">
                  <Icon className={`h-5 w-5 ${
                    plan.color === "purple" ? "text-purple-500" :
                    plan.color === "orange" ? "text-[#b5522a]" :
                    plan.color === "blue" ? "text-blue-500" :
                    "text-stone-400"
                  }`} />
                  <CardTitle className="text-base">{plan.name}</CardTitle>
                </div>
                <p className="text-xs text-stone-500 mb-2">{plan.description}</p>
                <div>
                  <span className="text-2xl font-bold text-stone-900">
                    {price === 0 ? "Gratuit" : `${price.toLocaleString("fr-MA")} MAD`}
                  </span>
                  {price > 0 && (
                    <span className="text-sm text-stone-500">/mois</span>
                  )}
                </div>
                {cycle === "annual" && price > 0 && (
                  <p className="text-xs text-stone-500 mt-1">
                    {totalAnnual.toLocaleString("fr-MA")} MAD/an · économisez {((plan.monthly * 12) - plan.annual).toLocaleString("fr-MA")} MAD
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
                ) : plan.id === "free" ? (
                  <Button variant="outline" className="w-full rounded-full" disabled>
                    Inclus
                  </Button>
                ) : (
                  <Button
                    className={`w-full rounded-full ${
                      plan.popular ? "bg-[#b5522a] hover:bg-[#a0441f]" : ""
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                    onClick={() => handleSubscribe(plan.id)}
                    disabled={loading === plan.id}
                  >
                    {loading === plan.id ? "Redirection..." : "Choisir ce plan"}
                  </Button>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      <p className="text-center text-xs text-stone-400 mt-6">
        Paiement sécurisé par Stripe · Annulable à tout moment · Facture disponible dans le dashboard
      </p>
    </div>
  );
}
