"use client";

import { useState } from "react";
import Link from "next/link";
import { KeyRound, CheckCircle2, Building2, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { forgotPassword } from "@/lib/auth";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Role = "architect" | "client";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<Role>("client");
  const [touched, setTouched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const emailError = touched && (!email.trim() || !EMAIL_RE.test(email.trim()))
    ? "Format email invalide"
    : "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!email.trim() || !EMAIL_RE.test(email.trim())) return;

    setLoading(true);
    setError("");
    try {
      await forgotPassword(email.trim(), role);
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur lors de l'envoi");
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="max-w-md text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle2 className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="mt-4 text-2xl font-bold text-stone-900">Email envoyé</h1>
          <p className="mt-2 text-stone-500">
            Si un compte existe avec l&apos;adresse <strong>{email}</strong>, vous
            recevrez un lien de réinitialisation dans quelques minutes.
          </p>
          <p className="mt-4 text-sm text-stone-400">
            Pensez à vérifier vos spams.
          </p>
          <Button variant="outline" className="mt-6" asChild>
            <Link href="/connexion">Retour à la connexion</Link>
          </Button>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="bg-stone-950 px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-md text-center">
          <h1 className="text-3xl font-bold text-white">Mot de passe oublié</h1>
          <p className="mt-2 text-stone-400 text-sm">
            Entrez votre email pour recevoir un lien de réinitialisation
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-md">
          {/* Role tabs */}
          <div className="flex rounded-lg border border-stone-200 p-1 mb-6 bg-stone-50">
            <button
              onClick={() => setRole("client")}
              className={`flex-1 flex items-center justify-center gap-2 rounded-md py-2.5 text-sm font-medium transition-colors ${
                role === "client"
                  ? "bg-white text-stone-900 shadow-sm"
                  : "text-stone-500 hover:text-stone-700"
              }`}
            >
              <User className="h-4 w-4" />
              Particulier
            </button>
            <button
              onClick={() => setRole("architect")}
              className={`flex-1 flex items-center justify-center gap-2 rounded-md py-2.5 text-sm font-medium transition-colors ${
                role === "architect"
                  ? "bg-white text-stone-900 shadow-sm"
                  : "text-stone-500 hover:text-stone-700"
              }`}
            >
              <Building2 className="h-4 w-4" />
              Architecte
            </button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <KeyRound className="h-5 w-5 text-[#b5522a]" />
                Réinitialiser le mot de passe
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div>
                  <label htmlFor="forgot-email" className="mb-1 block text-sm font-medium text-stone-700">
                    Email
                  </label>
                  <Input
                    id="forgot-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => setTouched(true)}
                    className={
                      emailError
                        ? "border-red-400 focus-visible:ring-red-400"
                        : touched && !emailError
                        ? "border-green-400 focus-visible:ring-green-400"
                        : ""
                    }
                    placeholder="votre@email.com"
                    autoComplete="email"
                  />
                  {emailError && (
                    <p className="mt-1 text-xs text-red-500">{emailError}</p>
                  )}
                </div>

                {error && (
                  <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>
                )}

                <Button
                  type="submit"
                  className="w-full bg-[#b5522a] hover:bg-[#9e4725]"
                  disabled={loading}
                >
                  {loading ? "Envoi en cours..." : "Envoyer le lien"}
                </Button>
              </form>

              <p className="mt-4 text-center text-sm text-stone-500">
                <Link href="/connexion" className="text-[#b5522a] font-medium hover:underline">
                  Retour à la connexion
                </Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
