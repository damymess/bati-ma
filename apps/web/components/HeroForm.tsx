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

type Tab = "calculator" | "architect";

export default function HeroForm() {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>("calculator");

  // Calculator state
  const [calcType, setCalcType] = useState("");
  const [calcCity, setCalcCity] = useState("");

  // Architect state
  const [archiType, setArchiType] = useState("");
  const [archiCity, setArchiCity] = useState("");

  const handleCalcSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (calcType) params.set("type", calcType);
    if (calcCity) params.set("city", calcCity);
    // Skip to step 3 (surface) if both fields are filled, else go to first step
    params.set("step", calcType && calcCity ? "3" : calcType || calcCity ? "2" : "1");
    router.push(`/outils/calculateur-cout-construction-maroc?${params}`);
  };

  const handleArchiSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (archiType) params.set("type", archiType);
    if (archiCity) params.set("city", archiCity);
    router.push(`/demande-devis${params.toString() ? `?${params}` : ""}`);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Tab buttons */}
      <div className="flex gap-1 p-1 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 mb-4">
        <button
          onClick={() => setTab("calculator")}
          className={`flex-1 flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
            tab === "calculator"
              ? "bg-white text-stone-900 shadow-md"
              : "text-white/80 hover:text-white"
          }`}
        >
          <Calculator className="h-4 w-4" />
          Estimer mon budget
        </button>
        <button
          onClick={() => setTab("architect")}
          className={`flex-1 flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
            tab === "architect"
              ? "bg-white text-stone-900 shadow-md"
              : "text-white/80 hover:text-white"
          }`}
        >
          <Search className="h-4 w-4" />
          Trouver un architecte
        </button>
      </div>

      {/* Calculator form */}
      {tab === "calculator" && (
        <form
          onSubmit={handleCalcSubmit}
          className="flex flex-col sm:flex-row sm:items-stretch gap-2 w-full"
        >
          <select
            value={calcType}
            onChange={(e) => setCalcType(e.target.value)}
            className="flex-1 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#b5522a] [&>option]:text-stone-900"
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
            className="flex-1 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#b5522a] [&>option]:text-stone-900"
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
            className="flex items-center justify-center gap-2 rounded-xl bg-[#b5522a] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#9a4522] whitespace-nowrap shadow-lg shadow-[#b5522a]/30"
          >
            Calculer mon budget
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      )}

      {/* Architect form */}
      {tab === "architect" && (
        <form
          onSubmit={handleArchiSubmit}
          className="flex flex-col sm:flex-row sm:items-stretch gap-2 w-full"
        >
          <select
            value={archiType}
            onChange={(e) => setArchiType(e.target.value)}
            className="flex-1 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#b5522a] [&>option]:text-stone-900"
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
            className="flex-1 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#b5522a] [&>option]:text-stone-900"
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
            className="flex items-center justify-center gap-2 rounded-xl bg-[#b5522a] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#9a4522] whitespace-nowrap shadow-lg shadow-[#b5522a]/30"
          >
            Trouver un architecte
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      )}

      {/* Helper text */}
      <p className="mt-3 text-center text-xs text-white/60">
        {tab === "calculator"
          ? "Estimation gratuite en 2 minutes — sans engagement"
          : "Recevez 3 devis gratuits sous 48h"}
      </p>
    </div>
  );
}
