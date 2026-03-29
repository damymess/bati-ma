"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Filter, Bell, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import AppelOffreCard from "@/components/AppelOffreCard";
import { APPELS_OFFRES } from "@/lib/appels-offres";
import type { AOStatus, AOSector } from "@/lib/appels-offres";

const SECTORS: AOSector[] = ["Architecture", "BTP", "Urbanisme", "Intérieur"];
const STATUSES: AOStatus[] = ["Ouvert", "Clôturé", "Attribué"];

export default function AppelsOffresPage() {
  const [search, setSearch] = useState("");
  const [sectorFilter, setSectorFilter] = useState<AOSector | "">("");
  const [statusFilter, setStatusFilter] = useState<AOStatus | "">("");

  const filtered = APPELS_OFFRES.filter((ao) => {
    if (search && !ao.title.toLowerCase().includes(search.toLowerCase()) && !ao.organism.toLowerCase().includes(search.toLowerCase())) return false;
    if (sectorFilter && ao.sector !== sectorFilter) return false;
    if (statusFilter && ao.status !== statusFilter) return false;
    return true;
  }).sort((a, b) => {
    if (a.status === "Ouvert" && b.status !== "Ouvert") return -1;
    if (a.status !== "Ouvert" && b.status === "Ouvert") return 1;
    return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
  });

  const openCount = APPELS_OFFRES.filter((ao) => ao.status === "Ouvert").length;

  return (
    <>
      {/* Hero */}
      <section className="bg-stone-950 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 mb-6">
            <Landmark className="h-4 w-4 text-[#b5522a]" />
            <span className="text-xs font-medium text-stone-300">
              Marchés publics & privés
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Appels d&apos;offres{" "}
            <span className="text-[#b5522a]">Architecture</span> au Maroc
          </h1>
          <p className="text-stone-400 max-w-xl mx-auto text-sm sm:text-base mb-6">
            {openCount} appels d&apos;offres ouverts dans les secteurs de
            l&apos;architecture, du BTP et de l&apos;urbanisme au Maroc.
            Sources : marchespublics.gov.ma, MarocAO, Casa Aménagement.
          </p>
          <Button
            variant="outline"
            size="sm"
            className="rounded-full border-stone-700 text-stone-300 hover:bg-stone-800"
          >
            <Bell className="mr-2 h-4 w-4" />
            Recevoir les alertes AO par email
          </Button>
        </div>
      </section>

      {/* Filtres */}
      <section className="py-8 border-b border-stone-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
              <Input
                placeholder="Rechercher par titre ou organisme..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              <select
                value={sectorFilter}
                onChange={(e) => setSectorFilter(e.target.value as AOSector | "")}
                className="rounded-lg border border-stone-200 bg-white px-3 py-2 text-sm text-stone-700 focus:outline-none focus:ring-1 focus:ring-[#b5522a]"
              >
                <option value="">Tous les secteurs</option>
                {SECTORS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as AOStatus | "")}
                className="rounded-lg border border-stone-200 bg-white px-3 py-2 text-sm text-stone-700 focus:outline-none focus:ring-1 focus:ring-[#b5522a]"
              >
                <option value="">Tous les statuts</option>
                {STATUSES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2 text-xs text-stone-500">
            <Filter className="h-3.5 w-3.5" />
            <span>{filtered.length} résultat{filtered.length > 1 ? "s" : ""}</span>
            {(search || sectorFilter || statusFilter) && (
              <button
                onClick={() => {
                  setSearch("");
                  setSectorFilter("");
                  setStatusFilter("");
                }}
                className="text-[#b5522a] hover:underline ml-2"
              >
                Réinitialiser les filtres
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Liste AO */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((ao) => (
                <AppelOffreCard key={ao.id} ao={ao} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-stone-500 text-sm">
                Aucun appel d&apos;offres ne correspond à vos critères.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Sources */}
      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-xl bg-stone-50 border border-stone-200 p-6">
            <h2 className="text-sm font-semibold text-stone-900 mb-3">
              Sources des appels d&apos;offres
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                { name: "marchespublics.gov.ma", url: "https://www.marchespublics.gov.ma/pmmp/" },
                { name: "MarocAO.com", url: "https://marocao.com/" },
                { name: "Casa Aménagement", url: "https://www.casa-amenagement.ma/fr/appels-d-offres" },
                { name: "Sodipress.com", url: "https://sodipress.com/" },
              ].map((s) => (
                <Badge key={s.name} variant="secondary" className="text-xs">
                  {s.name}
                </Badge>
              ))}
            </div>
            <p className="text-xs text-stone-500 mt-3">
              Les appels d&apos;offres sont mis à jour quotidiennement depuis les
              portails officiels des marchés publics et privés au Maroc.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
