"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Calculator, Search, ArrowRight } from "lucide-react";
import { CITIES } from "@/lib/cities";

const CALC_PROJECT_TYPES = [
  { value: "villa", label: "Villa / Maison" },
  { value: "appartement", label: "Appartement" },
  { value: "immeuble-r2", label: "Immeuble R+2" },
  { value: "immeuble-r3", label: "Immeuble R+3 et plus" },
  { value: "riad", label: "Riad / Maison traditionnelle" },
  { value: "commercial", label: "Local commercial / Bureau" },
];

const ARCHI_PROJECT_TYPES = [
  "Villa / Maison",
  "Appartement",
  "Rénovation",
  "Commercial",
  "Riad",
  "Architecture d'intérieur",
  "Autre",
];

export default function HeroForm() {
  const router = useRouter();

  // Architect state
  const [archiType, setArchiType] = useState("");
  const [archiCity, setArchiCity] = useState("");

  // Calculator state
  const [calcType, setCalcType] = useState("");
  const [calcCity, setCalcCity] = useState("");

  const handleArchiSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (archiType) params.set("type", archiType);
    if (archiCity) params.set("city", archiCity);
    router.push(`/demande-devis${params.toString() ? `?${params}` : ""}`);
  };

  const handleCalcSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (calcType) params.set("type", calcType);
    if (calcCity) params.set("city", calcCity);
    params.set("step", calcType && calcCity ? "3" : calcType || calcCity ? "2" : "1");
    router.push(`/outils/calculateur-cout-construction-maroc?${params}`);
  };

  const selectClass =
    "w-full rounded-lg border border-white/20 bg-white/10 backdrop-blur px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#b5522a] [&>option]:text-stone-900";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl mx-auto">
      {/* ─── Card 1 : Architecte ─── */}
      <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-5 sm:p-6 flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#b5522a]/20">
            <Search className="h-4 w-4 text-[#e07a55]" />
          </div>
          <h3 className="font-bold text-white">Trouver un architecte</h3>
        </div>
        <p className="text-xs text-white/60 mb-4 min-h-[2.5rem]">
          Comparez les portfolios et recevez 3 devis gratuits sous 48h.
        </p>
        <form onSubmit={handleArchiSubmit} className="space-y-2 mt-auto">
          <select
            value={archiType}
            onChange={(e) => setArchiType(e.target.value)}
            className={selectClass}
            aria-label="Type de projet"
          >
            <option value="">Type de projet</option>
            {ARCHI_PROJECT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>

          <select
            value={archiCity}
            onChange={(e) => setArchiCity(e.target.value)}
            className={selectClass}
            aria-label="Ville"
          >
            <option value="">Ville</option>
            {CITIES.map((c) => (
              <option key={c.slug} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#b5522a] px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-[#9a4522] shadow-lg shadow-[#b5522a]/20 mt-3"
          >
            Trouver un architecte
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>

      {/* ─── Card 2 : Calculateur ─── */}
      <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-5 sm:p-6 flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#b5522a]/20">
            <Calculator className="h-4 w-4 text-[#e07a55]" />
          </div>
          <h3 className="font-bold text-white">Estimer mon budget</h3>
        </div>
        <p className="text-xs text-white/60 mb-4 min-h-[2.5rem]">
          Estimation chiffrée en 2 minutes, gratuit et sans engagement.
        </p>
        <form onSubmit={handleCalcSubmit} className="space-y-2 mt-auto">
          <select
            value={calcType}
            onChange={(e) => setCalcType(e.target.value)}
            className={selectClass}
            aria-label="Type de projet"
          >
            <option value="">Type de projet</option>
            {CALC_PROJECT_TYPES.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>

          <select
            value={calcCity}
            onChange={(e) => setCalcCity(e.target.value)}
            className={selectClass}
            aria-label="Ville"
          >
            <option value="">Ville</option>
            {CITIES.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-bold text-[#b5522a] transition-colors hover:bg-white/90 shadow-lg shadow-black/20 mt-3"
          >
            Calculer mon budget
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
