"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { CITIES } from "@/lib/cities";

const PROJECT_TYPES = [
  "Villa / Maison",
  "Appartement",
  "Rénovation",
  "Commercial",
  "Riad",
  "Architecture d'intérieur",
  "Autre",
];

export default function QuickLeadForm({ variant = "card" }: { variant?: "card" | "inline" }) {
  const router = useRouter();
  const [projectType, setProjectType] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (projectType) params.set("type", projectType);
    if (city) params.set("city", city);
    router.push(`/demande-devis${params.toString() ? `?${params}` : ""}`);
  };

  // ─── Inline variant : horizontal bar for hero ────────────────────────────
  if (variant === "inline") {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row sm:items-stretch gap-2 w-full max-w-2xl mx-auto">
        <select
          value={projectType}
          onChange={(e) => setProjectType(e.target.value)}
          className="flex-1 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#b5522a] [&>option]:text-stone-900"
        >
          <option value="">Type de projet</option>
          {PROJECT_TYPES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>

        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="flex-1 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#b5522a] [&>option]:text-stone-900"
        >
          <option value="">Ville</option>
          {CITIES.map((c) => (
            <option key={c.slug} value={c.name}>{c.name}</option>
          ))}
        </select>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded-xl bg-[#b5522a] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#9a4522] whitespace-nowrap"
        >
          Trouver un architecte
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>
    );
  }

  // ─── Card variant : terracotta card for city pages / guides ──────────────
  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-[#b5522a] p-5 sm:p-6">
      <h3 className="text-lg font-bold text-white mb-1">
        Trouvez votre architecte
      </h3>
      <p className="text-sm text-white/70 mb-4">
        Gratuit et sans engagement
      </p>

      <div className="space-y-3">
        <select
          value={projectType}
          onChange={(e) => setProjectType(e.target.value)}
          className="w-full rounded-lg border-0 bg-white/10 px-3 py-2.5 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 [&>option]:text-stone-900"
        >
          <option value="" className="text-stone-400">Type de projet</option>
          {PROJECT_TYPES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>

        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full rounded-lg border-0 bg-white/10 px-3 py-2.5 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 [&>option]:text-stone-900"
        >
          <option value="" className="text-stone-400">Ville</option>
          {CITIES.map((c) => (
            <option key={c.slug} value={c.name}>{c.name}</option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-bold text-[#b5522a] transition-colors hover:bg-white/90"
      >
        Trouver un architecte
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
