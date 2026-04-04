"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, Eye, EyeOff, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { resetPassword } from "@/lib/auth";
import { useAuth } from "@/components/AuthProvider";

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

function ResetPasswordContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { refresh } = useAuth();
  const token = searchParams.get("token") || "";

  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [touched, setTouched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const strength = getPasswordStrength(password);
  const rules = [
    { met: password.length >= 8, text: "Au moins 8 caractères" },
    { met: /[A-Z]/.test(password), text: "Une lettre majuscule" },
    { met: /[0-9]/.test(password), text: "Un chiffre" },
  ];
  const allRulesMet = rules.every((r) => r.met);
  const passwordError = touched && !allRulesMet ? "Le mot de passe ne respecte pas les critères" : "";

  const [resetRole, setResetRole] = useState<string>("");

  useEffect(() => {
    if (success) {
      const timer = setTimeout(async () => {
        await refresh();
        router.push(resetRole === "architect" ? "/dashboard/architecte" : "/dashboard/client");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [success, refresh, router, resetRole]);

  if (!token) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="max-w-md text-center">
          <h1 className="text-2xl font-bold text-stone-900">Lien invalide</h1>
          <p className="mt-2 text-stone-500">
            Ce lien de réinitialisation est invalide ou a expiré.
          </p>
          <Button className="mt-6" asChild>
            <Link href="/mot-de-passe-oublie">Demander un nouveau lien</Link>
          </Button>
        </div>
      </section>
    );
  }

  if (success) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="max-w-md text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle2 className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="mt-4 text-2xl font-bold text-stone-900">
            Mot de passe modifié !
          </h1>
          <p className="mt-2 text-stone-500">
            Redirection vers votre espace en cours...
          </p>
        </div>
      </section>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!allRulesMet) return;

    setLoading(true);
    setError("");
    try {
      const result = await resetPassword(token, password);
      setResetRole(result.role);
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur lors de la réinitialisation");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="bg-stone-950 px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-md text-center">
          <h1 className="text-3xl font-bold text-white">Nouveau mot de passe</h1>
          <p className="mt-2 text-stone-400 text-sm">
            Choisissez un mot de passe sécurisé
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-md">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-[#b5522a]" />
                Réinitialisation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div>
                  <label htmlFor="new-password" className="mb-1 block text-sm font-medium text-stone-700">
                    Nouveau mot de passe
                  </label>
                  <div className="relative">
                    <Input
                      id="new-password"
                      type={showPwd ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onBlur={() => setTouched(true)}
                      className={`pr-10 ${
                        passwordError
                          ? "border-red-400 focus-visible:ring-red-400"
                          : touched && allRulesMet
                          ? "border-green-400 focus-visible:ring-green-400"
                          : ""
                      }`}
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

                  {/* Strength bar */}
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

                  {/* Rules checklist */}
                  <ul className="mt-3 space-y-1">
                    {rules.map((rule) => (
                      <li key={rule.text} className="flex items-center gap-2 text-xs">
                        <span className={`inline-block h-1.5 w-1.5 rounded-full ${rule.met ? "bg-green-500" : "bg-stone-300"}`} />
                        <span className={rule.met ? "text-green-700" : "text-stone-500"}>{rule.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {error && (
                  <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>
                )}

                <Button
                  type="submit"
                  className="w-full bg-[#b5522a] hover:bg-[#9e4725]"
                  disabled={loading}
                >
                  {loading ? "Modification..." : "Modifier mon mot de passe"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={
      <section className="flex min-h-[60vh] items-center justify-center">
        <p className="text-stone-500">Chargement...</p>
      </section>
    }>
      <ResetPasswordContent />
    </Suspense>
  );
}
