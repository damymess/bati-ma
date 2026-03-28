"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { User, Phone, MapPin, Briefcase, Star, CheckCircle2, Edit3, Save, LogOut, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getMe, updateMe, logout, type ArchitectProfile } from "@/lib/auth";

const SPECIALTIES = ["Résidentiel", "Commercial", "Intérieur", "Riad & Patrimoine", "Industriel", "Hôtellerie", "Urbanisme", "Éco-construction"];
const CITIES = ["casablanca", "marrakech", "rabat", "tanger", "agadir", "fes", "meknes", "oujda", "kenitra", "tetouan", "nador", "el-jadida"];
const CITY_LABELS: Record<string, string> = {
  casablanca: "Casablanca", marrakech: "Marrakech", rabat: "Rabat",
  tanger: "Tanger", agadir: "Agadir", fes: "Fès", meknes: "Meknès",
  oujda: "Oujda", kenitra: "Kénitra", tetouan: "Tétouan", nador: "Nador", "el-jadida": "El Jadida",
};

export default function MonEspacePage() {
  const router = useRouter();
  const [architect, setArchitect] = useState<ArchitectProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Editable fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [website, setWebsite] = useState("");
  const [hourlyRate, setHourlyRate] = useState("");
  const [yearsExp, setYearsExp] = useState("");
  const [selectedSpecs, setSelectedSpecs] = useState<string[]>([]);
  const [selectedCities, setSelectedCities] = useState<string[]>([]);

  useEffect(() => {
    getMe().then((profile) => {
      if (!profile) { router.replace("/connexion"); return; }
      setArchitect(profile);
      populateForm(profile);
      setLoading(false);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function populateForm(p: ArchitectProfile) {
    setName(p.name ?? "");
    setPhone(p.phone ?? "");
    setDescription(p.description ?? "");
    setWebsite(p.website ?? "");
    setHourlyRate(p.hourly_rate ? String(p.hourly_rate) : "");
    setYearsExp(p.years_experience ? String(p.years_experience) : "");
    setSelectedSpecs(Array.isArray(p.specialties) ? p.specialties : []);
    setSelectedCities(Array.isArray(p.regions) ? p.regions : []);
  }

  const toggleSpec = (s: string) =>
    setSelectedSpecs((prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]);
  const toggleCity = (c: string) =>
    setSelectedCities((prev) => prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]);

  const handleSave = async () => {
    setSaving(true); setError(""); setSuccess("");
    try {
      const updated = await updateMe({
        name, phone: phone || null, description: description || null,
        website: website || null, hourly_rate: hourlyRate ? Number(hourlyRate) : null,
        years_experience: yearsExp ? Number(yearsExp) : 0,
        specialties: selectedSpecs, regions: selectedCities,
      } as Partial<ArchitectProfile>);
      setArchitect(updated);
      setEditing(false);
      setSuccess("Profil mis à jour avec succès !");
      setTimeout(() => setSuccess(""), 3000);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Erreur lors de la sauvegarde");
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = () => { logout(); router.push("/"); };

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#b5522a] border-t-transparent" />
      </div>
    );
  }

  if (!architect) return null;

  const regions = Array.isArray(architect.regions) ? architect.regions : [];
  const specs = Array.isArray(architect.specialties) ? architect.specialties : [];

  return (
    <>
      {/* Header */}
      <section className="bg-stone-950 px-4 py-10 sm:px-6">
        <div className="mx-auto max-w-4xl flex items-start justify-between gap-4 flex-wrap">
          <div>
            <Badge variant="outline" className="border-stone-700 text-stone-400 text-xs mb-3">
              Espace Professionnel
            </Badge>
            <h1 className="text-2xl font-bold text-white">{architect.name}</h1>
            <p className="text-stone-400 text-sm mt-1">{architect.email}</p>
            <div className="mt-2 flex items-center gap-2 flex-wrap">
              {architect.verified && (
                <Badge className="bg-green-700 text-white text-xs">
                  <CheckCircle2 className="h-3 w-3 mr-1" /> Vérifié
                </Badge>
              )}
              {architect.premium && (
                <Badge className="bg-yellow-600 text-white text-xs">⭐ Premium</Badge>
              )}
              <Badge variant="outline" className="border-stone-600 text-stone-400 text-xs">
                <Star className="h-3 w-3 mr-1" />
                {architect.rating > 0 ? `${architect.rating.toFixed(1)} (${architect.review_count} avis)` : "Aucun avis"}
              </Badge>
            </div>
          </div>
          <div className="flex gap-2">
            {!editing ? (
              <Button
                onClick={() => setEditing(true)}
                className="bg-[#b5522a] hover:bg-[#9e4725] text-white"
                size="sm"
              >
                <Edit3 className="h-4 w-4 mr-1" /> Modifier
              </Button>
            ) : (
              <>
                <Button onClick={() => { setEditing(false); populateForm(architect); }} variant="outline" size="sm">
                  <X className="h-4 w-4 mr-1" /> Annuler
                </Button>
                <Button onClick={handleSave} disabled={saving} className="bg-[#b5522a] hover:bg-[#9e4725]" size="sm">
                  <Save className="h-4 w-4 mr-1" /> {saving ? "Enregistrement…" : "Enregistrer"}
                </Button>
              </>
            )}
            <Button onClick={handleLogout} variant="outline" size="sm" className="border-stone-700 text-stone-400">
              <LogOut className="h-4 w-4 mr-1" /> Déconnexion
            </Button>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6">
        <div className="mx-auto max-w-4xl space-y-6">
          {error && <p className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>}
          {success && <p className="rounded-md bg-green-50 px-4 py-3 text-sm text-green-700">{success}</p>}

          {/* Infos principales */}
          <Card>
            <CardHeader><CardTitle className="flex items-center gap-2 text-base"><User className="h-4 w-4" /> Informations professionnelles</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              {editing ? (
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-stone-700">Nom du cabinet</label>
                    <Input value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-stone-700">Téléphone</label>
                    <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+212 6XX XXX XXX" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-stone-700">Site web</label>
                    <Input value={website} onChange={(e) => setWebsite(e.target.value)} placeholder="https://" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-stone-700">Années d&apos;expérience</label>
                    <Input type="number" value={yearsExp} onChange={(e) => setYearsExp(e.target.value)} />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-stone-700">Tarif horaire (MAD)</label>
                    <Input type="number" value={hourlyRate} onChange={(e) => setHourlyRate(e.target.value)} placeholder="500" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1 block text-sm font-medium text-stone-700">Description</label>
                    <textarea
                      rows={4}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="w-full rounded-md border border-stone-200 px-3 py-2 text-sm placeholder:text-stone-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#b5522a]"
                      placeholder="Présentez votre cabinet…"
                    />
                  </div>
                </div>
              ) : (
                <div className="grid gap-3 sm:grid-cols-2 text-sm">
                  <div className="flex items-center gap-2 text-stone-600">
                    <Phone className="h-4 w-4 shrink-0 text-stone-400" />
                    {architect.phone || <span className="text-stone-400 italic">Non renseigné</span>}
                  </div>
                  <div className="flex items-center gap-2 text-stone-600">
                    <Briefcase className="h-4 w-4 shrink-0 text-stone-400" />
                    {architect.years_experience} ans d&apos;expérience
                  </div>
                  {architect.website && (
                    <div className="flex items-center gap-2 text-stone-600 sm:col-span-2">
                      <span className="text-stone-400">🌐</span>
                      <a href={architect.website} target="_blank" rel="noopener noreferrer" className="text-[#b5522a] hover:underline">
                        {architect.website}
                      </a>
                    </div>
                  )}
                  {architect.description && (
                    <p className="sm:col-span-2 text-stone-600 leading-relaxed">{architect.description}</p>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Spécialités & Villes */}
          <Card>
            <CardHeader><CardTitle className="flex items-center gap-2 text-base"><MapPin className="h-4 w-4" /> Spécialités & Couverture</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              {editing ? (
                <>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-stone-700">Spécialités</label>
                    <div className="flex flex-wrap gap-2">
                      {SPECIALTIES.map((s) => (
                        <button key={s} onClick={() => toggleSpec(s)}
                          className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${selectedSpecs.includes(s) ? "border-[#b5522a] bg-[#b5522a] text-white" : "border-stone-200 text-stone-600 hover:border-stone-400"}`}>
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-stone-700">Villes couvertes</label>
                    <div className="flex flex-wrap gap-2">
                      {CITIES.map((c) => (
                        <button key={c} onClick={() => toggleCity(c)}
                          className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${selectedCities.includes(c) ? "border-[#b5522a] bg-[#b5522a] text-white" : "border-stone-200 text-stone-600 hover:border-stone-400"}`}>
                          {CITY_LABELS[c] || c}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-medium text-stone-500 uppercase tracking-wide mb-2">Spécialités</p>
                    <div className="flex flex-wrap gap-2">
                      {specs.length > 0 ? specs.map((s) => (
                        <Badge key={s} variant="secondary">{s}</Badge>
                      )) : <span className="text-sm text-stone-400 italic">Non renseigné</span>}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-stone-500 uppercase tracking-wide mb-2">Villes</p>
                    <div className="flex flex-wrap gap-2">
                      {regions.length > 0 ? regions.map((r) => (
                        <Badge key={r} variant="outline">{CITY_LABELS[r] || r}</Badge>
                      )) : <span className="text-sm text-stone-400 italic">Non renseigné</span>}
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Lien profil public */}
          {regions.length > 0 && (
            <Card className="bg-stone-50 border-stone-100">
              <CardContent className="pt-4">
                <p className="text-sm text-stone-600">
                  Votre profil est visible sur{" "}
                  {regions.slice(0, 3).map((r, i) => (
                    <span key={r}>
                      <Link href={`/architecte/${r}`} className="text-[#b5522a] hover:underline font-medium">
                        bati.ma/architecte/{r}
                      </Link>
                      {i < Math.min(regions.length, 3) - 1 && ", "}
                    </span>
                  ))}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </>
  );
}
