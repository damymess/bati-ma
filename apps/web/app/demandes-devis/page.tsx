"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, SlidersHorizontal, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import DevisCard from "@/components/DevisCard";
import { fetchDemandesDevis, type DemandeDevis } from "@/lib/api";
import { getToken } from "@/lib/auth";

const CITIES = ["Toutes", "Casablanca", "Marrakech", "Rabat", "Tanger", "Agadir", "Fès", "Meknès"];
const TYPES = ["Tous", "Villa / Maison", "Appartement", "Immeuble résidentiel", "Local commercial", "Hôtel / Tourisme", "Rénovation riad", "Architecture d'intérieur", "Bureau / Coworking"];

export default function DemandesDevisPage() {
  const [demandes, setDemandes] = useState<DemandeDevis[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [city, setCity] = useState("Toutes");
  const [type, setType] = useState("Tous");
  const [tier, setTier] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(10);

  // Reset pagination when filters change
  useEffect(() => { setVisibleCount(10); }, [city, type]);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      setLoading(true);
      setFetchError(null);
      try {
        const token = getToken();
        const filters: { city?: string; project_type?: string } = {};
        if (city !== "Toutes") filters.city = city;
        if (type !== "Tous") filters.project_type = type;
        const data = await fetchDemandesDevis(filters, token);
        if (!cancelled) {
          setDemandes(data.demandes);
          setTier(data.subscription_tier);
        }
      } catch {
        if (!cancelled) setFetchError("Impossible de charger les demandes. Veuillez réessayer.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    load();
    return () => { cancelled = true; };
  }, [city, type]);

  return (
    <>
      {/* Hero */}
      <section className="bg-stone-950 px-4 py-10 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="outline" className="border-stone-700 text-stone-400 text-xs mb-3">
            Marketplace
          </Badge>
          <h1 className="text-2xl font-bold text-white sm:text-3xl">
            Demandes de devis
          </h1>
          <p className="mt-2 text-stone-400 text-sm">
            Parcourez les projets publiés par des particuliers à la recherche d&apos;un architecte
          </p>
          <div className="mt-5">
            <Button className="rounded-full" asChild>
              <Link href="/demande-devis">
                <Plus className="mr-1 h-4 w-4" /> Publier une demande
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-stone-200 bg-white sticky top-12 lg:top-14 z-10">
        <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6">
          <div className="flex items-center gap-2 mb-3">
            <SlidersHorizontal className="h-4 w-4 text-stone-400" />
            <span className="text-sm font-medium text-stone-600">Filtrer par ville</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-3" role="radiogroup" aria-label="Filtrer par ville">
            {CITIES.map((c) => (
              <button
                key={c}
                role="radio"
                aria-checked={city === c}
                onClick={() => setCity(c)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  city === c
                    ? "bg-[#b5522a] text-white"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Filtrer par type de projet">
            {TYPES.map((t) => (
              <button
                key={t}
                role="radio"
                aria-checked={type === t}
                onClick={() => setType(t)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  type === t
                    ? "bg-stone-800 text-white"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="px-4 py-8 sm:px-6">
        <div className="mx-auto max-w-4xl">
          {tier && (
            <div className="mb-4 flex items-center gap-2">
              <Badge className={
                tier === "premium" ? "bg-purple-100 text-purple-700" :
                tier === "standard" ? "bg-blue-100 text-blue-700" :
                "bg-stone-100 text-stone-600"
              }>
                Plan {tier.charAt(0).toUpperCase() + tier.slice(1)}
              </Badge>
              {tier === "free" && (
                <span className="text-xs text-stone-400">
                  Abonnez-vous pour voir les coordonnées
                </span>
              )}
            </div>
          )}

          {fetchError ? (
            <div className="text-center py-16">
              <p className="text-sm text-red-500 mb-3">{fetchError}</p>
              <Button variant="outline" size="sm" onClick={() => setCity(city)}>Réessayer</Button>
            </div>
          ) : loading ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-48 rounded-xl bg-stone-100 animate-pulse" />
              ))}
            </div>
          ) : demandes.length === 0 ? (
            <div className="text-center py-16">
              <Search className="h-12 w-12 text-stone-300 mx-auto mb-3" />
              <h3 className="font-semibold text-stone-700 mb-1">Aucune demande trouvée</h3>
              <p className="text-sm text-stone-500">
                Aucune demande de devis ne correspond à vos filtres
              </p>
            </div>
          ) : (
            <>
              <p className="text-sm text-stone-500 mb-4">
                {demandes.length} demande{demandes.length > 1 ? "s" : ""} de devis
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {demandes.slice(0, visibleCount).map((d) => (
                  <DevisCard key={d.id} demande={d} />
                ))}
              </div>
              {visibleCount < demandes.length && (
                <div className="mt-6 text-center">
                  <Button
                    variant="outline"
                    className="rounded-full"
                    onClick={() => setVisibleCount((prev) => prev + 10)}
                  >
                    Voir plus ({demandes.length - visibleCount} restantes)
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
