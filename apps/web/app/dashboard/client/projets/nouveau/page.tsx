"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Send, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/components/AuthProvider";
import { submitProject } from "@/lib/api-client";

const PROJECT_TYPES = [
  "Villa", "Appartement", "Immeuble", "Commercial", "Hôtel/Riad",
  "Rénovation", "Intérieur", "Bureaux",
];

const CITIES = [
  "Casablanca", "Marrakech", "Rabat", "Tanger", "Agadir", "Fès", "Meknès", "Autre",
];

const BUDGETS = [
  "Moins de 500 000 MAD",
  "500 000 - 1 000 000 MAD",
  "1 000 000 - 3 000 000 MAD",
  "3 000 000 - 5 000 000 MAD",
  "5 000 000 - 10 000 000 MAD",
  "Plus de 10 000 000 MAD",
];

export default function NouveauProjetPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [projectType, setProjectType] = useState("");
  const [city, setCity] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const ok = await submitProject({
        title,
        description,
        project_type: projectType,
        location: city,
        budget_min: 0,
        budget_max: 0,
        timeline,
        client_name: `${user?.first_name} ${user?.last_name}`,
        client_email: user?.email ?? "",
        is_public: isPublic,
      });

      if (!ok) throw new Error("Erreur lors de la publication");

      router.push("/dashboard/client/projets");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h2 className="text-xl font-bold text-stone-900 mb-1">Publier un projet</h2>
      <p className="text-sm text-stone-500 mb-6">
        Décrivez votre projet pour recevoir des propositions d&apos;architectes
      </p>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
        {error && (
          <div className="rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <div className="rounded-xl border border-stone-200 p-5 space-y-4">
          <h3 className="text-sm font-semibold text-stone-900">Description du projet</h3>

          <div>
            <label className="text-xs font-medium text-stone-700 mb-1 block">
              Titre du projet *
            </label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ex: Construction villa 300m² à Casablanca"
              required
            />
          </div>

          <div>
            <label className="text-xs font-medium text-stone-700 mb-1 block">
              Description détaillée *
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={5}
              className="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#b5522a]"
              placeholder="Décrivez votre projet en détail : surface, nombre de pièces, style souhaité, contraintes particulières..."
              required
            />
          </div>
        </div>

        <div className="rounded-xl border border-stone-200 p-5 space-y-4">
          <h3 className="text-sm font-semibold text-stone-900">Type de projet</h3>
          <div className="flex flex-wrap gap-2">
            {PROJECT_TYPES.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setProjectType(t)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium border transition-colors ${
                  projectType === t
                    ? "bg-[#b5522a] text-white border-[#b5522a]"
                    : "bg-white text-stone-600 border-stone-200 hover:border-[#b5522a]"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-stone-200 p-5 space-y-4">
          <h3 className="text-sm font-semibold text-stone-900">Localisation & Budget</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-medium text-stone-700 mb-1 block">Ville *</label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                className="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#b5522a]"
              >
                <option value="">Sélectionner</option>
                {CITIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-stone-700 mb-1 block">Budget estimé</label>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#b5522a]"
              >
                <option value="">Sélectionner</option>
                {BUDGETS.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className="text-xs font-medium text-stone-700 mb-1 block">Délai souhaité</label>
            <Input
              value={timeline}
              onChange={(e) => setTimeline(e.target.value)}
              placeholder="Ex: 6 mois, début été 2026"
            />
          </div>
        </div>

        {/* Photos */}
        <div className="rounded-xl border border-stone-200 p-5">
          <h3 className="text-sm font-semibold text-stone-900 mb-3">Photos du terrain/existant (optionnel)</h3>
          <div className="border-2 border-dashed border-stone-300 rounded-xl p-8 text-center">
            <Upload className="h-8 w-8 text-stone-400 mx-auto mb-2" />
            <p className="text-sm text-stone-500">Glissez vos photos ici</p>
            <p className="text-xs text-stone-400 mt-1">JPG, PNG — max 5 Mo par image</p>
          </div>
        </div>

        {/* Visibilité */}
        <div className="rounded-xl border border-stone-200 p-5">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={isPublic}
              onChange={(e) => setIsPublic(e.target.checked)}
              className="h-4 w-4 rounded border-stone-300 text-[#b5522a] focus:ring-[#b5522a]"
            />
            <div>
              <p className="text-sm font-medium text-stone-900">
                Publier sur la marketplace
              </p>
              <p className="text-xs text-stone-500">
                Votre projet sera visible par tous les architectes sur Bati.ma
              </p>
            </div>
          </label>
        </div>

        <Button type="submit" className="rounded-full" disabled={loading}>
          <Send className="mr-2 h-4 w-4" />
          {loading ? "Publication..." : "Publier le projet"}
        </Button>
      </form>
    </div>
  );
}
