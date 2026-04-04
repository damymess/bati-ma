"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserPlus, Building2, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/components/AuthProvider";
import { registerClient } from "@/lib/auth";

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

export default function InscriptionPage() {
  const router = useRouter();
  const { refresh } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const blur = (field: string) => setTouched((p) => ({ ...p, [field]: true }));

  const strength = getPasswordStrength(password);
  const pwdRules = [
    { met: password.length >= 8, text: "Au moins 8 caractères" },
    { met: /[A-Z]/.test(password), text: "Une lettre majuscule" },
    { met: /[0-9]/.test(password), text: "Un chiffre" },
  ];

  const errors: Record<string, string> = {};
  if (!firstName.trim()) errors.firstName = "Prénom requis";
  if (!lastName.trim()) errors.lastName = "Nom requis";
  if (!email.trim() || !EMAIL_RE.test(email.trim())) errors.email = "Format email invalide";
  if (!pwdRules.every((r) => r.met)) errors.password = "Le mot de passe ne respecte pas les critères";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched({ firstName: true, lastName: true, email: true, password: true });
    if (Object.keys(errors).length > 0) return;

    setError("");
    setLoading(true);
    try {
      await registerClient({
        name: `${firstName.trim()} ${lastName.trim()}`,
        email: email.trim(),
        password,
        phone: phone.trim() || undefined,
      });
      await refresh();
      router.push("/dashboard/client");
    } catch (err: any) {
      setError(err.message || "Erreur lors de l'inscription");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="flex min-h-[calc(100vh-10rem)] items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-stone-100 mb-4">
            <UserPlus className="h-6 w-6 text-[#b5522a]" />
          </div>
          <h1 className="text-2xl font-bold text-stone-900">Créer un compte client</h1>
          <p className="text-sm text-stone-500 mt-1">
            Publiez vos projets et recevez des devis d&apos;architectes
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {error && (
            <div className="rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="reg-firstname" className="text-xs font-medium text-stone-700 mb-1 block">Prénom *</label>
              <Input
                id="reg-firstname"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                onBlur={() => blur("firstName")}
                className={touched.firstName && errors.firstName ? "border-red-400" : touched.firstName ? "border-green-400" : ""}
              />
              {touched.firstName && errors.firstName && (
                <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>
              )}
            </div>
            <div>
              <label htmlFor="reg-lastname" className="text-xs font-medium text-stone-700 mb-1 block">Nom *</label>
              <Input
                id="reg-lastname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                onBlur={() => blur("lastName")}
                className={touched.lastName && errors.lastName ? "border-red-400" : touched.lastName ? "border-green-400" : ""}
              />
              {touched.lastName && errors.lastName && (
                <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="reg-email" className="text-xs font-medium text-stone-700 mb-1 block">Email *</label>
            <Input
              id="reg-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => blur("email")}
              className={touched.email && errors.email ? "border-red-400" : touched.email && !errors.email ? "border-green-400" : ""}
              placeholder="votre@email.com"
            />
            {touched.email && errors.email && (
              <p className="mt-1 text-xs text-red-500">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="reg-phone" className="text-xs font-medium text-stone-700 mb-1 block">
              Téléphone <span className="text-stone-400 font-normal">(optionnel)</span>
            </label>
            <Input
              id="reg-phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+212 6XX XXX XXX"
            />
          </div>

          <div>
            <label htmlFor="reg-password" className="text-xs font-medium text-stone-700 mb-1 block">
              Mot de passe *
            </label>
            <div className="relative">
              <Input
                id="reg-password"
                type={showPwd ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => blur("password")}
                className={`pr-10 ${touched.password && errors.password ? "border-red-400" : touched.password && !errors.password ? "border-green-400" : ""}`}
                placeholder="••••••••"
                autoComplete="new-password"
              />
              <button
                type="button"
                onClick={() => setShowPwd((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
              >
                {showPwd ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>

            {password.length > 0 && (
              <div className="mt-2">
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 rounded-full bg-stone-200 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${strength.color}`}
                      style={{ width: `${(strength.score / 5) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs font-medium text-stone-500">{strength.label}</span>
                </div>
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

          <Button type="submit" className="w-full rounded-full" disabled={loading}>
            {loading ? "Création du compte..." : "Créer mon compte"}
          </Button>
        </form>

        <div className="mt-6 rounded-lg border border-stone-200 bg-stone-50 p-4 text-center">
          <p className="text-sm text-stone-600 mb-2">
            Vous êtes architecte ?
          </p>
          <Button variant="outline" size="sm" className="rounded-full" asChild>
            <Link href="/inscription-architecte">
              <Building2 className="mr-1 h-4 w-4" />
              Inscription architecte
            </Link>
          </Button>
        </div>

        <p className="text-center text-sm text-stone-500 mt-4">
          Déjà un compte ?{" "}
          <Link href="/connexion" className="text-[#b5522a] font-medium hover:underline">
            Se connecter
          </Link>
        </p>
      </div>
    </section>
  );
}
