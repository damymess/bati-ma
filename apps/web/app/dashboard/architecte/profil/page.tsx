"use client";

import { useState, useEffect } from "react";
import { Save, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/components/AuthProvider";
import { getMe, updateMe } from "@/lib/auth";

const SPECIALTIES = [
  "Résidentiel", "Commercial", "Intérieur", "Riad & Patrimoine",
  "Industriel", "Hôtellerie", "Urbanisme", "Éco-construction",
];

const CITIES = [
  "Casablanca", "Marrakech", "Rabat", "Tanger", "Agadir", "Fès", "Meknès",
];

export default function ProfilArchitectePage() {
  const { user } = useAuth();
  const [name, setName] = useState(user ? `${user.first_name} ${user.last_name}` : "");
  const [phone, setPhone] = useState("");
  const [license, setLicense] = useState("");
  const [experience, setExperience] = useState("");
  const [description, setDescription] = useState("");
  const [website, setWebsite] = useState("");
  const [hourlyRate, setHourlyRate] = useState("");
  const [selectedSpecs, setSelectedSpecs] = useState<string[]>([]);
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  // Load existing profile from API
  useEffect(() => {
    getMe().then((profile) => {
      if (profile) {
        setName(profile.name || "");
        setPhone(profile.phone || "");
        setLicense(profile.license_number || "");
        setExperience(String(profile.years_experience || ""));
        setDescription(profile.description || "");
        setWebsite(profile.website || "");
        setHourlyRate(profile.hourly_rate ? String(profile.hourly_rate) : "");
        setSelectedSpecs(profile.specialties || []);
        setSelectedCities(profile.regions || []);
      }
    });
  }, []);

  function toggleSpec(s: string) {
    setSelectedSpecs((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  }

  function toggleCity(c: string) {
    setSelectedCities((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]
    );
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    try {
      await updateMe({
        name,
        phone: phone || null,
        license_number: license || null,
        years_experience: Number(experience) || 0,
        description: description || null,
        website: website || null,
        hourly_rate: Number(hourlyRate) || null,
        specialties: selectedSpecs,
        regions: selectedCities,
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Erreur de sauvegarde");
    }
  }

  return (
    <div>
      <h2 className="text-xl font-bold text-stone-900 mb-1">Mon profil</h2>
      <p className="text-sm text-stone-500 mb-6">
        Complétez votre profil pour être visible sur Bati.ma
      </p>

      <form onSubmit={handleSave} className="space-y-6 max-w-2xl">
        {/* Info de base */}
        <div className="rounded-xl border border-stone-200 p-5 space-y-4">
          <h3 className="text-sm font-semibold text-stone-900">Informations professionnelles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-medium text-stone-700 mb-1 block">Nom du cabinet</label>
              <Input value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <label className="text-xs font-medium text-stone-700 mb-1 block">Téléphone</label>
              <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+212 6..." />
            </div>
            <div>
              <label className="text-xs font-medium text-stone-700 mb-1 block">N° inscription Ordre</label>
              <Input value={license} onChange={(e) => setLicense(e.target.value)} />
            </div>
            <div>
              <label className="text-xs font-medium text-stone-700 mb-1 block">Années d&apos;expérience</label>
              <Input type="number" value={experience} onChange={(e) => setExperience(e.target.value)} />
            </div>
          </div>
          <div>
            <label className="text-xs font-medium text-stone-700 mb-1 block">Description du cabinet</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#b5522a]"
              placeholder="Décrivez votre cabinet, votre approche et vos réalisations..."
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-medium text-stone-700 mb-1 block">Site web</label>
              <Input value={website} onChange={(e) => setWebsite(e.target.value)} placeholder="https://" />
            </div>
            <div>
              <label className="text-xs font-medium text-stone-700 mb-1 block">Tarif horaire (MAD)</label>
              <Input value={hourlyRate} onChange={(e) => setHourlyRate(e.target.value)} placeholder="500 - 800" />
            </div>
          </div>
        </div>

        {/* Spécialités */}
        <div className="rounded-xl border border-stone-200 p-5">
          <h3 className="text-sm font-semibold text-stone-900 mb-3">Spécialités</h3>
          <div className="flex flex-wrap gap-2">
            {SPECIALTIES.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => toggleSpec(s)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium border transition-colors ${
                  selectedSpecs.includes(s)
                    ? "bg-[#b5522a] text-white border-[#b5522a]"
                    : "bg-white text-stone-600 border-stone-200 hover:border-[#b5522a]"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Villes */}
        <div className="rounded-xl border border-stone-200 p-5">
          <h3 className="text-sm font-semibold text-stone-900 mb-3">Zones de couverture</h3>
          <div className="flex flex-wrap gap-2">
            {CITIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => toggleCity(c)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium border transition-colors ${
                  selectedCities.includes(c)
                    ? "bg-[#b5522a] text-white border-[#b5522a]"
                    : "bg-white text-stone-600 border-stone-200 hover:border-[#b5522a]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio */}
        <div className="rounded-xl border border-stone-200 p-5">
          <h3 className="text-sm font-semibold text-stone-900 mb-3">Portfolio</h3>
          <div className="border-2 border-dashed border-stone-300 rounded-xl p-8 text-center">
            <Upload className="h-8 w-8 text-stone-400 mx-auto mb-2" />
            <p className="text-sm text-stone-500">
              Glissez vos photos de projets ici ou cliquez pour sélectionner
            </p>
            <p className="text-xs text-stone-400 mt-1">
              JPG, PNG — max 5 Mo par image
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button type="submit" className="rounded-full">
            <Save className="mr-2 h-4 w-4" />
            Enregistrer le profil
          </Button>
          {saved && (
            <span className="text-sm text-emerald-600 font-medium">
              Profil enregistré !
            </span>
          )}
        </div>
      </form>
    </div>
  );
}
