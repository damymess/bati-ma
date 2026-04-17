"use client";

import { useState, useEffect, useRef } from "react";
import { Save, Upload, X, Loader2 } from "lucide-react";
import Image from "next/image";
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
  const [portfolioImages, setPortfolioImages] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
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
        setPortfolioImages(profile.portfolio_images || []);
      }
    });
  }, []);

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:9000";

  /**
   * Compresse une image côté client avant upload (réduit taille + poids).
   * Max 1600x1600 pour économiser bandwidth, qualité JPEG 0.85.
   */
  async function compressImage(file: File): Promise<File> {
    return new Promise((resolve, reject) => {
      if (!file.type.startsWith("image/")) return resolve(file);
      const img = new window.Image();
      const reader = new FileReader();
      reader.onload = (e) => {
        img.onload = () => {
          const MAX_SIZE = 1600;
          let { width, height } = img;
          if (width > MAX_SIZE || height > MAX_SIZE) {
            if (width > height) {
              height = Math.round((height * MAX_SIZE) / width);
              width = MAX_SIZE;
            } else {
              width = Math.round((width * MAX_SIZE) / height);
              height = MAX_SIZE;
            }
          }
          const canvas = document.createElement("canvas");
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          if (!ctx) return resolve(file);
          ctx.drawImage(img, 0, 0, width, height);
          canvas.toBlob(
            (blob) => {
              if (!blob) return resolve(file);
              const compressed = new File([blob], file.name.replace(/\.[^.]+$/, ".jpg"), {
                type: "image/jpeg",
                lastModified: Date.now(),
              });
              // Si la compression augmente la taille (petite image), garder l'originale
              resolve(compressed.size < file.size ? compressed : file);
            },
            "image/jpeg",
            0.85,
          );
        };
        img.onerror = () => reject(new Error("Image invalide"));
        img.src = e.target?.result as string;
      };
      reader.onerror = () => reject(new Error("Lecture fichier échouée"));
      reader.readAsDataURL(file);
    });
  }

  async function uploadSingle(file: File): Promise<string | null> {
    try {
      const compressed = await compressImage(file);
      if (compressed.size > 5 * 1024 * 1024) {
        setError(`"${file.name}" trop lourd même après compression (max 5 Mo)`);
        return null;
      }
      const formData = new FormData();
      formData.append("file", compressed);
      const token = localStorage.getItem("bati_token");
      const res = await fetch(`${API_URL}/store/architects/portfolio/upload`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({ message: "Erreur upload" }));
        setError(err.message || "Erreur upload");
        return null;
      }
      const data = await res.json();
      return data.url;
    } catch {
      setError("Erreur réseau");
      return null;
    }
  }

  async function processFiles(files: File[]) {
    if (!files.length) return;
    setUploading(true);
    setError("");

    // Filtrer seulement images + limiter au nombre restant
    const slots = 10 - portfolioImages.length;
    const images = files.filter((f) => f.type.startsWith("image/")).slice(0, slots);

    if (images.length === 0) {
      setError("Aucune image valide trouvée");
      setUploading(false);
      return;
    }

    // Upload parallèle (all-at-once)
    const results = await Promise.all(images.map((f) => uploadSingle(f)));
    const newUrls = results.filter((u): u is string => !!u);
    if (newUrls.length > 0) {
      setPortfolioImages((prev) => [...prev, ...newUrls]);
    }

    setUploading(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  async function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files?.length) return;
    await processFiles(Array.from(files));
  }

  const [isDragOver, setIsDragOver] = useState(false);

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (!isDragOver) setIsDragOver(true);
  }

  function handleDragLeave(e: React.DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  }

  async function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    await processFiles(files);
  }

  async function handleDeleteImage(index: number) {
    const token = localStorage.getItem("bati_token");
    try {
      const res = await fetch(`${API_URL}/store/architects/portfolio/delete/${index}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        setPortfolioImages(data.images);
      }
    } catch {}
  }

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
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-stone-900">
              Portfolio ({portfolioImages.length}/10)
            </h3>
            {portfolioImages.length < 3 && (
              <span className="text-xs text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">
                Minimum 3 photos pour être visible
              </span>
            )}
          </div>

          {/* Image grid */}
          {portfolioImages.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-4">
              {portfolioImages.map((url, i) => (
                <div key={i} className="group relative aspect-[4/3] rounded-lg overflow-hidden bg-stone-100">
                  <Image
                    src={url.startsWith("/") ? `${API_URL}${url}` : url}
                    alt={`Portfolio ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => handleDeleteImage(i)}
                    className="absolute top-1.5 right-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Supprimer"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Upload zone — drag & drop */}
          {portfolioImages.length < 10 && (
            <label
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`block cursor-pointer border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
                isDragOver
                  ? "border-[#b5522a] bg-[#b5522a]/5"
                  : "border-stone-300 hover:border-[#b5522a]/50"
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/png,image/webp,image/heic"
                multiple
                onChange={handleFileUpload}
                className="hidden"
              />
              {uploading ? (
                <>
                  <Loader2 className="h-8 w-8 text-[#b5522a] mx-auto mb-2 animate-spin" />
                  <p className="text-sm text-stone-600 font-medium">Compression + upload en cours...</p>
                  <p className="text-xs text-stone-400 mt-1">Patientez quelques secondes</p>
                </>
              ) : (
                <>
                  <Upload className={`h-10 w-10 mx-auto mb-2 ${isDragOver ? "text-[#b5522a]" : "text-stone-400"}`} />
                  <p className="text-sm font-medium text-stone-700">
                    {isDragOver ? "Déposez vos images ici" : "Glissez vos photos ici"}
                  </p>
                  <p className="text-xs text-stone-500 mt-1">
                    ou <span className="text-[#b5522a] font-medium">cliquez pour sélectionner</span> plusieurs fichiers
                  </p>
                  <p className="text-xs text-stone-400 mt-3">
                    JPG, PNG, WebP, HEIC · Compression auto · jusqu'à {10 - portfolioImages.length} image{portfolioImages.length < 9 ? "s" : ""} encore
                  </p>
                </>
              )}
            </label>
          )}
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
