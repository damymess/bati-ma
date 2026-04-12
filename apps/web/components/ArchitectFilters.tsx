"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Search, SlidersHorizontal, ChevronDown, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ArchitectCard from "@/components/ArchitectCard";
import Pagination from "@/components/Pagination";
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

const PER_PAGE = 15;

type Props = {
  architects: Architect[];
  cityName: string;
};

export default function ArchitectFilters({ architects, cityName }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Initialize state from URL
  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [sort, setSort] = useState<SortValue>(
    (searchParams.get("tri") as SortValue) || "recommended"
  );
  const [selectedSpecs, setSelectedSpecs] = useState<Specialty[]>(() => {
    const specs = searchParams.getAll("specialite");
    return specs.filter((s) => SPECIALTIES.includes(s as Specialty)) as Specialty[];
  });
  const [minExp, setMinExp] = useState(() => Number(searchParams.get("exp")) || 0);
  const [minRating, setMinRating] = useState(() => Number(searchParams.get("note")) || 0);
  const [page, setPage] = useState(() => Math.max(1, Number(searchParams.get("page")) || 1));
  const [showAdvanced, setShowAdvanced] = useState(false);

  const hasActiveFilters = query || selectedSpecs.length > 0 || minExp > 0 || minRating > 0;

  // Sync state → URL
  const updateURL = useCallback(
    (overrides: Record<string, string | string[] | null> = {}) => {
      const params = new URLSearchParams();
      const vals: Record<string, string | string[] | null> = {
        q: query || null,
        tri: sort !== "recommended" ? sort : null,
        specialite: selectedSpecs.length > 0 ? selectedSpecs : null,
        exp: minExp > 0 ? String(minExp) : null,
        note: minRating > 0 ? String(minRating) : null,
        page: page > 1 ? String(page) : null,
        ...overrides,
      };

      for (const [key, val] of Object.entries(vals)) {
        if (val === null) continue;
        if (Array.isArray(val)) {
          val.forEach((v) => params.append(key, v));
        } else {
          params.set(key, val);
        }
      }

      const qs = params.toString();
      router.replace(`${pathname}${qs ? `?${qs}` : ""}`, { scroll: false });
    },
    [router, pathname, query, sort, selectedSpecs, minExp, minRating, page]
  );

  // Push URL on any filter/page change
  useEffect(() => {
    updateURL();
  }, [updateURL]);

  const toggleSpec = (s: Specialty) => {
    setSelectedSpecs((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
    setPage(1);
  };

  const clearFilters = () => {
    setQuery("");
    setSelectedSpecs([]);
    setMinExp(0);
    setMinRating(0);
    setPage(1);
  };

  const handleSearch = (value: string) => {
    setQuery(value);
    setPage(1);
  };

  const handleSort = (value: SortValue) => {
    setSort(value);
    setPage(1);
  };

  const handleExp = (value: number) => {
    setMinExp(value);
    setPage(1);
  };

  const handleRating = (value: number) => {
    setMinRating(value);
    setPage(1);
  };

  // Filter + sort
  const results = useMemo(() => {
    let filtered = [...architects];

    if (query) {
      const q = query.toLowerCase();
      filtered = filtered.filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q) ||
          a.specialties.some((s) => s.toLowerCase().includes(q))
      );
    }

    if (selectedSpecs.length > 0) {
      filtered = filtered.filter((a) =>
        selectedSpecs.some((s) => a.specialties.includes(s))
      );
    }

    if (minExp > 0) {
      filtered = filtered.filter((a) => a.experience >= minExp);
    }

    if (minRating > 0) {
      filtered = filtered.filter((a) => a.rating >= minRating);
    }

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

  // Pagination
  const totalPages = Math.ceil(results.length / PER_PAGE);
  const safePage = Math.min(page, Math.max(1, totalPages));
  const paginatedResults = results.slice(
    (safePage - 1) * PER_PAGE,
    safePage * PER_PAGE
  );

  // Build query params for pagination links (exclude page itself)
  const paginationParams = useMemo(() => {
    const p: Record<string, string> = {};
    if (query) p.q = query;
    if (sort !== "recommended") p.tri = sort;
    if (minExp > 0) p.exp = String(minExp);
    if (minRating > 0) p.note = String(minRating);
    // Multi-value specialite is handled separately by Pagination
    return p;
  }, [query, sort, minExp, minRating]);

  return (
    <div>
      {/* Search bar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
          <Input
            id="architect-search"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder={`Rechercher un architecte à ${cityName}...`}
            className="pl-10 rounded-lg"
          />
          {query && (
            <button
              onClick={() => handleSearch("")}
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
            onClick={() => setShowAdvanced(!showAdvanced)}
            className={`rounded-lg ${showAdvanced ? "bg-stone-100" : ""}`}
          >
            <SlidersHorizontal className="mr-1 h-4 w-4" />
            Plus de filtres
            {(minExp > 0 || minRating > 0) && (
              <span className="ml-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#b5522a] text-[10px] text-white">
                {(minExp > 0 ? 1 : 0) + (minRating > 0 ? 1 : 0)}
              </span>
            )}
          </Button>

          <div className="relative">
            <select
              value={sort}
              onChange={(e) => handleSort(e.target.value as SortValue)}
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

      {/* Specialty chips — always visible, scrollable */}
      <div className="mb-4 -mx-1 px-1 overflow-x-auto scrollbar-hide">
        <div className="flex gap-2 pb-1" role="group" aria-label="Filtrer par spécialité">
          {SPECIALTIES.map((s) => (
            <button
              key={s}
              onClick={() => toggleSpec(s)}
              aria-pressed={selectedSpecs.includes(s)}
              className={`shrink-0 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                selectedSpecs.includes(s)
                  ? "bg-[#b5522a] text-white shadow-sm"
                  : "bg-white border border-stone-200 text-stone-600 hover:border-[#b5522a]/40 hover:text-[#b5522a]"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Advanced filters panel */}
      {showAdvanced && (
        <div className="mb-6 rounded-xl border border-stone-200 bg-stone-50 p-4 space-y-4">
          <div className="flex flex-wrap gap-4">
            <div>
              <label htmlFor="min-exp" className="text-xs font-medium text-stone-500 uppercase tracking-wider mb-1 block">
                Expérience
              </label>
              <select
                id="min-exp"
                value={minExp}
                onChange={(e) => handleExp(Number(e.target.value))}
                className="h-8 rounded-lg border border-stone-200 bg-white px-2 text-sm text-stone-700"
              >
                {EXP_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="min-rating" className="text-xs font-medium text-stone-500 uppercase tracking-wider mb-1 block">
                Note minimum
              </label>
              <select
                id="min-rating"
                value={minRating}
                onChange={(e) => handleRating(Number(e.target.value))}
                className="h-8 rounded-lg border border-stone-200 bg-white px-2 text-sm text-stone-700"
              >
                {RATING_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Active filters summary */}
      {hasActiveFilters && (
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          {selectedSpecs.map((s) => (
            <Badge key={s} variant="secondary" className="text-xs gap-1 pl-2">
              {s}
              <button onClick={() => toggleSpec(s)} aria-label={`Retirer ${s}`}>
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
          {minExp > 0 && (
            <Badge variant="secondary" className="text-xs gap-1 pl-2">
              {minExp}+ ans
              <button onClick={() => handleExp(0)} aria-label="Retirer filtre expérience">
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
          {minRating > 0 && (
            <Badge variant="secondary" className="text-xs gap-1 pl-2">
              {minRating}+ étoiles
              <button onClick={() => handleRating(0)} aria-label="Retirer filtre note">
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
          <button
            onClick={clearFilters}
            className="text-xs text-[#b5522a] hover:underline ml-1"
          >
            Tout effacer
          </button>
        </div>
      )}

      {/* Results count */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-stone-900">
          {results.length > 0
            ? `${results.length} architecte${results.length > 1 ? "s" : ""} ${query ? "trouvé" + (results.length > 1 ? "s" : "") : `à ${cityName}`}`
            : "Aucun architecte trouvé"}
        </h2>
        <span className="text-sm text-stone-500 hidden sm:block">
          Trié par : <span className="text-stone-800 font-medium">{SORT_OPTIONS.find(o => o.value === sort)?.label}</span>
        </span>
      </div>

      {/* Results grid */}
      {paginatedResults.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {paginatedResults.map((a) => (
              <ArchitectCard key={a.id} architect={a} />
            ))}
          </div>

          <Pagination
            currentPage={safePage}
            totalPages={totalPages}
            totalItems={results.length}
            basePath={pathname}
            queryParams={paginationParams}
            itemLabel={`architecte${results.length > 1 ? "s" : ""}`}
          />
        </>
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
