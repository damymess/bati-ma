"use client";

import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, ChevronDown, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ArchitectCard from "@/components/ArchitectCard";
import type { Architect, Specialty } from "@/lib/architects";

const SPECIALTIES: Specialty[] = [
  "Résidentiel",
  "Commercial",
  "Intérieur",
  "Riad & Patrimoine",
  "Hôtellerie",
  "Urbanisme",
  "Éco-construction",
  "Industriel",
];

const SORT_OPTIONS = [
  { value: "recommended", label: "Recommandés" },
  { value: "rating", label: "Mieux notés" },
  { value: "experience", label: "Plus d'expérience" },
  { value: "reviews", label: "Plus d'avis" },
] as const;

type SortValue = (typeof SORT_OPTIONS)[number]["value"];

const EXP_OPTIONS = [
  { value: 0, label: "Toute expérience" },
  { value: 5, label: "5+ ans" },
  { value: 10, label: "10+ ans" },
  { value: 15, label: "15+ ans" },
  { value: 20, label: "20+ ans" },
];

const RATING_OPTIONS = [
  { value: 0, label: "Toute note" },
  { value: 3, label: "3+ étoiles" },
  { value: 4, label: "4+ étoiles" },
  { value: 4.5, label: "4.5+ étoiles" },
];

type Props = {
  architects: Architect[];
  cityName: string;
};

export default function ArchitectFilters({ architects, cityName }: Props) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortValue>("recommended");
  const [selectedSpecs, setSelectedSpecs] = useState<Specialty[]>([]);
  const [minExp, setMinExp] = useState(0);
  const [minRating, setMinRating] = useState(0);
  const [showFilters, setShowFilters] = useState(false);

  const hasActiveFilters = query || selectedSpecs.length > 0 || minExp > 0 || minRating > 0;

  const toggleSpec = (s: Specialty) => {
    setSelectedSpecs((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  };

  const clearFilters = () => {
    setQuery("");
    setSelectedSpecs([]);
    setMinExp(0);
    setMinRating(0);
  };

  const results = useMemo(() => {
    let filtered = [...architects];

    // Full-text search
    if (query) {
      const q = query.toLowerCase();
      filtered = filtered.filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q) ||
          a.specialties.some((s) => s.toLowerCase().includes(q))
      );
    }

    // Specialty filter
    if (selectedSpecs.length > 0) {
      filtered = filtered.filter((a) =>
        selectedSpecs.some((s) => a.specialties.includes(s))
      );
    }

    // Experience filter
    if (minExp > 0) {
      filtered = filtered.filter((a) => a.experience >= minExp);
    }

    // Rating filter
    if (minRating > 0) {
      filtered = filtered.filter((a) => a.rating >= minRating);
    }

    // Sort
    switch (sort) {
      case "recommended":
        filtered.sort((a, b) => {
          if (a.premium !== b.premium) return a.premium ? -1 : 1;
          return b.rating - a.rating;
        });
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "experience":
        filtered.sort((a, b) => b.experience - a.experience);
        break;
      case "reviews":
        filtered.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
    }

    return filtered;
  }, [architects, query, selectedSpecs, minExp, minRating, sort]);

  return (
    <div>
      {/* Search + Sort bar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
          <Input
            id="architect-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Rechercher un architecte à ${cityName}...`}
            className="pl-10 rounded-lg"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
              aria-label="Effacer la recherche"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
            className={`rounded-lg ${showFilters ? "bg-stone-100" : ""}`}
          >
            <SlidersHorizontal className="mr-1 h-4 w-4" />
            Filtres
            {hasActiveFilters && (
              <span className="ml-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#b5522a] text-[10px] text-white">
                {(selectedSpecs.length > 0 ? 1 : 0) + (minExp > 0 ? 1 : 0) + (minRating > 0 ? 1 : 0)}
              </span>
            )}
          </Button>

          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortValue)}
              className="h-9 appearance-none rounded-lg border border-stone-200 bg-white pl-3 pr-8 text-sm text-stone-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#b5522a]"
              aria-label="Trier par"
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Filters panel */}
      {showFilters && (
        <div className="mb-6 rounded-xl border border-stone-200 bg-stone-50 p-4 space-y-4">
          {/* Specialties */}
          <div>
            <span className="text-xs font-medium text-stone-500 uppercase tracking-wider mb-2 block">
              Spécialités
            </span>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrer par spécialité">
              {SPECIALTIES.map((s) => (
                <button
                  key={s}
                  onClick={() => toggleSpec(s)}
                  aria-pressed={selectedSpecs.includes(s)}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                    selectedSpecs.includes(s)
                      ? "bg-[#b5522a] text-white"
                      : "bg-white border border-stone-200 text-stone-600 hover:border-stone-300"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            {/* Experience */}
            <div>
              <label htmlFor="min-exp" className="text-xs font-medium text-stone-500 uppercase tracking-wider mb-1 block">
                Expérience
              </label>
              <select
                id="min-exp"
                value={minExp}
                onChange={(e) => setMinExp(Number(e.target.value))}
                className="h-8 rounded-lg border border-stone-200 bg-white px-2 text-sm text-stone-700"
              >
                {EXP_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>

            {/* Rating */}
            <div>
              <label htmlFor="min-rating" className="text-xs font-medium text-stone-500 uppercase tracking-wider mb-1 block">
                Note minimum
              </label>
              <select
                id="min-rating"
                value={minRating}
                onChange={(e) => setMinRating(Number(e.target.value))}
                className="h-8 rounded-lg border border-stone-200 bg-white px-2 text-sm text-stone-700"
              >
                {RATING_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
          </div>

          {hasActiveFilters && (
            <div className="flex items-center justify-between pt-2 border-t border-stone-200">
              <div className="flex flex-wrap gap-1">
                {selectedSpecs.map((s) => (
                  <Badge key={s} variant="secondary" className="text-xs gap-1">
                    {s}
                    <button onClick={() => toggleSpec(s)} aria-label={`Retirer ${s}`}>
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
              <button
                onClick={clearFilters}
                className="text-xs text-[#b5522a] hover:underline"
              >
                Effacer tout
              </button>
            </div>
          )}
        </div>
      )}

      {/* Results count */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-stone-900">
          {results.length > 0
            ? `${results.length} architecte${results.length > 1 ? "s" : ""} ${query ? "trouvé" + (results.length > 1 ? "s" : "") : `à ${cityName}`}`
            : `Aucun architecte trouvé`}
        </h2>
        <span className="text-sm text-stone-500 hidden sm:block">
          Trié par : <span className="text-stone-800 font-medium">{SORT_OPTIONS.find(o => o.value === sort)?.label}</span>
        </span>
      </div>

      {/* Results */}
      {results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {results.map((a) => (
            <ArchitectCard key={a.id} architect={a} />
          ))}
        </div>
      ) : (
        <div className="bg-stone-50 border border-stone-100 rounded-xl p-8 text-center mb-8">
          <Search className="h-10 w-10 text-stone-300 mx-auto mb-3" />
          <p className="text-stone-500 mb-2">
            {hasActiveFilters
              ? "Aucun architecte ne correspond à vos critères"
              : `La liste des architectes de ${cityName} est en cours de constitution.`}
          </p>
          {hasActiveFilters && (
            <Button variant="outline" size="sm" onClick={clearFilters} className="rounded-full">
              Effacer les filtres
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
