"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import { CITIES } from "@/lib/cities";
import { submitProjectRequest } from "@/lib/api";
import { trackQuickLeadSubmit } from "@/lib/tracking";

const PROJECT_TYPES = [
  "Villa / Maison",
  "Appartement",
  "Rénovation",
  "Commercial",
  "Riad",
  "Architecture d'intérieur",
  "Autre",
];

const PHONE_RE = /^\+?[\d\s\-()]{7,15}$/;

export default function QuickLeadForm() {
  const [projectType, setProjectType] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectType || !city || !phone.trim()) return;
    if (!PHONE_RE.test(phone.trim())) {
      setError("Format téléphone invalide");
      return;
    }

    setLoading(true);
    setError("");
    try {
      await submitProjectRequest({
        title: `${projectType} — ${city}`,
        client_name: "Lead rapide",
        client_email: email.trim() || "lead@bati.ma",
        client_phone: phone.trim(),
        description: `Demande rapide : ${projectType} à ${city}`,
        project_type: projectType,
        location: city,
      });
      trackQuickLeadSubmit({ city, projectType });
      setSubmitted(true);
    } catch {
      setError("Erreur. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl bg-[#b5522a] p-6 text-center text-white">
        <CheckCircle2 className="mx-auto h-10 w-10" />
        <p className="mt-2 text-lg font-bold">Demande envoyée !</p>
        <p className="mt-1 text-sm text-white/80">
          Un architecte vous contactera sous 48h.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-[#b5522a] p-5 sm:p-6">
      <h3 className="text-lg font-bold text-white mb-1">
        Un architecte me contacte
      </h3>
      <p className="text-sm text-white/70 mb-4">
        Gratuit — réponse sous 48h
      </p>

      <div className="space-y-3">
        <select
          value={projectType}
          onChange={(e) => setProjectType(e.target.value)}
          required
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
          required
          className="w-full rounded-lg border-0 bg-white/10 px-3 py-2.5 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 [&>option]:text-stone-900"
        >
          <option value="" className="text-stone-400">Ville</option>
          {CITIES.map((c) => (
            <option key={c.slug} value={c.name}>{c.name}</option>
          ))}
        </select>

        <div className="relative">
          <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            placeholder="Téléphone *"
            className="w-full rounded-lg border-0 bg-white/10 pl-10 pr-3 py-2.5 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
          />
        </div>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email (optionnel)"
          className="w-full rounded-lg border-0 bg-white/10 px-3 py-2.5 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
        />
      </div>

      {error && (
        <p className="mt-2 text-xs text-red-200">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-bold text-[#b5522a] transition-colors hover:bg-white/90 disabled:opacity-60"
      >
        {loading ? "Envoi..." : "Un architecte me contacte sous 48h"}
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
