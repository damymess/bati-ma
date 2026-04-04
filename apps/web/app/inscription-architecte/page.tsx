"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { register } from "@/lib/auth";

const SPECIALTIES = ["Résidentiel", "Commercial", "Intérieur", "Riad & Patrimoine", "Industriel", "Hôtellerie", "Urbanisme", "Éco-construction"];
const CITIES = ["Casablanca", "Marrakech", "Rabat", "Tanger", "Agadir", "Fès", "Meknès", "Oujda", "Kénitra", "Tétouan", "Nador", "El Jadida"];
const CITY_SLUGS: Record<string, string> = {
  Casablanca: "casablanca", Marrakech: "marrakech", Rabat: "rabat", Tanger: "tanger",
  Agadir: "agadir", "Fès": "fes", "Meknès": "meknes", Oujda: "oujda",
  "Kénitra": "kenitra", "Tétouan": "tetouan", Nador: "nador", "El Jadida": "el-jadida",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getPasswordStrength(pwd: string): { score: number; label: string; color: string } {
  let score = 0;
  if (pwd.length >= 8) score++;
  if (pwd.length >= 12) score++;
  if (/[A-Z]/.test(pwd)) score++;
  if (/[0-9]/.test(pwd)) score++;
  if (/[^A-Za-z0-9]/.test(pwd)) score++;
  if (score <= 1) return { score, label: "Faible", color: "bg-red-500" };
  if (score <= 2) return { score, label: "Moyen", color: "bg-orange-500" };
  if (score <= 3) return { score, label: "Bon", color: "bg-yellow-500" };
  return { score, label: "Fort", color: "bg-green-500" };
}

export default function InscriptionArchitectePage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const blur = (f: string) => setTouched((p) => ({ ...p, [f]: true }));

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [license, setLicense] = useState("");
  const [yearsExp, setYearsExp] = useState("");
  const [selectedSpecs, setSelectedSpecs] = useState<string[]>([]);
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [description, setDescription] = useState("");
  const [website, setWebsite] = useState("");
  const [hourlyRate, setHourlyRate] = useState("");

  const toggleSpec = (s: string) => setSelectedSpecs((p) => p.includes(s) ? p.filter((x) => x !== s) : [...p, s]);
  const toggleCity = (c: string) => setSelectedCities((p) => p.includes(c) ? p.filter((x) => x !== c) : [...p, c]);

  const handleSubmit = async () => {
    setError("");
    setLoading(true);
    try {
      await register({
        name, email, password,
        phone: phone || undefined,
        specialties: selectedSpecs,
        regions: selectedCities.map((c) => CITY_SLUGS[c] || c.toLowerCase()),
        description: description || undefined,
        years_experience: yearsExp ? Number(yearsExp) : 0,
        license_number: license || undefined,
      });
      router.push("/mon-espace");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Erreur lors de l'inscription");
      setLoading(false);
    }
  };

  return (
    <>
      <section className="bg-stone-950 px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="border-stone-700 text-stone-400 text-xs mb-4">Espace Architecte</Badge>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Inscrivez votre cabinet</h1>
          <p className="mt-3 text-stone-400">Rejoignez Bati.ma et recevez des demandes de devis qualifiées. Inscription gratuite.</p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-xl">
          <div className="mb-8 flex items-center justify-center gap-2">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${step >= s ? "bg-[#b5522a] text-white" : "bg-stone-100 text-stone-400"}`}>
                  {step > s ? <CheckCircle2 className="h-4 w-4" /> : s}
                </div>
                {s < 3 && <div className={`h-0.5 w-8 ${step > s ? "bg-[#b5522a]" : "bg-stone-200"}`} />}
              </div>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>
                {step === 1 && "Informations & accès"}
                {step === 2 && "Spécialités & couverture"}
                {step === 3 && "Détails du cabinet"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {error && <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>}

              {step === 1 && (() => {
                const strength = getPasswordStrength(password);
                const pwdRules = [
                  { met: password.length >= 8, text: "Au moins 8 caractères" },
                  { met: /[A-Z]/.test(password), text: "Une lettre majuscule" },
                  { met: /[0-9]/.test(password), text: "Un chiffre" },
                ];
                const step1Errors: Record<string, string> = {};
                if (!name.trim()) step1Errors.name = "Nom requis";
                if (!email.trim() || !EMAIL_RE.test(email.trim())) step1Errors.email = "Format email invalide";
                if (!pwdRules.every((r) => r.met)) step1Errors.password = "Mot de passe invalide";

                const handleNext = () => {
                  setTouched((p) => ({ ...p, name: true, email: true, password: true }));
                  if (Object.keys(step1Errors).length > 0) return;
                  setError(""); setStep(2);
                };

                return (
                  <>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-stone-700">Nom du cabinet / architecte *</label>
                      <Input value={name} onChange={(e) => setName(e.target.value)} onBlur={() => blur("name")}
                        className={touched.name && step1Errors.name ? "border-red-400" : touched.name ? "border-green-400" : ""}
                        placeholder="Studio Arc Casablanca" />
                      {touched.name && step1Errors.name && <p className="mt-1 text-xs text-red-500">{step1Errors.name}</p>}
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-stone-700">Email professionnel *</label>
                      <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} onBlur={() => blur("email")}
                        className={touched.email && step1Errors.email ? "border-red-400" : touched.email && !step1Errors.email ? "border-green-400" : ""}
                        placeholder="contact@studio-arc.ma" />
                      {touched.email && step1Errors.email && <p className="mt-1 text-xs text-red-500">{step1Errors.email}</p>}
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-stone-700">Mot de passe *</label>
                      <div className="relative">
                        <Input type={showPwd ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)}
                          onBlur={() => blur("password")}
                          className={`pr-10 ${touched.password && step1Errors.password ? "border-red-400" : touched.password && !step1Errors.password ? "border-green-400" : ""}`}
                          placeholder="••••••••" autoComplete="new-password" />
                        <button type="button" onClick={() => setShowPwd((v) => !v)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600">
                          {showPwd ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                      {password.length > 0 && (
                        <div className="mt-2 flex items-center gap-2">
                          <div className="flex-1 h-1.5 rounded-full bg-stone-200 overflow-hidden">
                            <div className={`h-full rounded-full transition-all ${strength.color}`} style={{ width: `${(strength.score / 5) * 100}%` }} />
                          </div>
                          <span className="text-xs font-medium text-stone-500">{strength.label}</span>
                        </div>
                      )}
                      <ul className="mt-2 space-y-1">
                        {pwdRules.map((rule) => (
                          <li key={rule.text} className="flex items-center gap-2 text-xs">
                            <span className={`inline-block h-1.5 w-1.5 rounded-full ${rule.met ? "bg-green-500" : "bg-stone-300"}`} />
                            <span className={rule.met ? "text-green-700" : "text-stone-500"}>{rule.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-stone-700">
                        Téléphone <span className="text-stone-400 font-normal">(optionnel)</span>
                      </label>
                      <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+212 6XX XXX XXX" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="mb-1 block text-sm font-medium text-stone-700">
                          N° Ordre <span className="text-stone-400 font-normal">(optionnel)</span>
                        </label>
                        <Input value={license} onChange={(e) => setLicense(e.target.value)} placeholder="Facultatif" />
                      </div>
                      <div>
                        <label className="mb-1 block text-sm font-medium text-stone-700">
                          Exp. <span className="text-stone-400 font-normal">(optionnel)</span>
                        </label>
                        <Input type="number" value={yearsExp} onChange={(e) => setYearsExp(e.target.value)} placeholder="10" />
                      </div>
                    </div>
                    <Button className="w-full bg-[#b5522a] hover:bg-[#9e4725]" onClick={handleNext}>
                      Suivant <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                    <p className="text-center text-sm text-stone-500">
                      Déjà inscrit ?{" "}
                      <Link href="/connexion" className="text-[#b5522a] font-medium hover:underline">Se connecter</Link>
                    </p>
                  </>
                );
              })()}

              {step === 2 && (
                <>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-stone-700">Spécialités *</label>
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
                    <label className="mb-2 block text-sm font-medium text-stone-700">Villes couvertes *</label>
                    <div className="flex flex-wrap gap-2">
                      {CITIES.map((c) => (
                        <button key={c} onClick={() => toggleCity(c)}
                          className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${selectedCities.includes(c) ? "border-[#b5522a] bg-[#b5522a] text-white" : "border-stone-200 text-stone-600 hover:border-stone-400"}`}>
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1" onClick={() => setStep(1)}>Retour</Button>
                    <Button className="flex-1 bg-[#b5522a] hover:bg-[#9e4725]"
                      disabled={selectedSpecs.length === 0 || selectedCities.length === 0}
                      onClick={() => setStep(3)}>
                      Suivant <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-stone-700">Description du cabinet</label>
                    <textarea rows={4} value={description} onChange={(e) => setDescription(e.target.value)}
                      placeholder="Présentez votre cabinet, votre approche et vos réalisations…"
                      className="w-full rounded-md border border-stone-200 px-3 py-2 text-sm placeholder:text-stone-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#b5522a]" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-stone-700">Site web</label>
                    <Input value={website} onChange={(e) => setWebsite(e.target.value)} placeholder="https://www.studio-arc.ma" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-stone-700">Tarif horaire (MAD)</label>
                    <Input type="number" value={hourlyRate} onChange={(e) => setHourlyRate(e.target.value)} placeholder="500" />
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1" onClick={() => setStep(2)}>Retour</Button>
                    <Button className="flex-1 bg-[#b5522a] hover:bg-[#9e4725]" disabled={loading} onClick={handleSubmit}>
                      {loading ? "Inscription…" : "S'inscrire gratuitement"}
                    </Button>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          <div className="mt-8 rounded-xl border border-stone-100 bg-stone-50 p-5">
            <h3 className="font-semibold text-stone-900 text-sm">Pourquoi rejoindre Bati.ma ?</h3>
            <div className="mt-3 space-y-2">
              {["Visibilité SEO dans Google sur votre ville", "Réception de demandes de devis qualifiées", "Profil professionnel avec portfolio", "Inscription 100% gratuite"].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#b5522a]" />
                  <span className="text-sm text-stone-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
