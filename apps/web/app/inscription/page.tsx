"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserPlus, Building2, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/components/AuthProvider";
import { register } from "@/lib/auth";

type UserRole = "architect" | "client";

export default function InscriptionPage() {
  const router = useRouter();
  const { refresh } = useAuth();
  const [step, setStep] = useState<1 | 2>(1);
  const [role, setRole] = useState<UserRole>("client");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await register({
        name: `${firstName} ${lastName}`,
        email,
        password,
      });
      await refresh();
      router.push(role === "architect" ? "/dashboard/architecte" : "/dashboard/client");
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
          <h1 className="text-2xl font-bold text-stone-900">Créer un compte</h1>
          <p className="text-sm text-stone-500 mt-1">
            Rejoignez la communauté Bati.ma gratuitement
          </p>
        </div>

        {step === 1 && (
          <div className="space-y-4">
            <p className="text-sm font-medium text-stone-700 text-center mb-2">
              Vous êtes :
            </p>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => { setRole("architect"); setStep(2); }}
                className="flex flex-col items-center gap-3 rounded-xl border-2 border-stone-200 p-6 hover:border-[#b5522a] transition-colors"
              >
                <Building2 className="h-8 w-8 text-[#b5522a]" />
                <div className="text-center">
                  <p className="text-sm font-semibold text-stone-900">Architecte</p>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Gérez votre profil, portfolio et répondez aux projets
                  </p>
                </div>
              </button>
              <button
                onClick={() => { setRole("client"); setStep(2); }}
                className="flex flex-col items-center gap-3 rounded-xl border-2 border-stone-200 p-6 hover:border-[#b5522a] transition-colors"
              >
                <User className="h-8 w-8 text-[#b5522a]" />
                <div className="text-center">
                  <p className="text-sm font-semibold text-stone-900">Particulier</p>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Publiez vos projets et recevez des devis d&apos;architectes
                  </p>
                </div>
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-700">
                {error}
              </div>
            )}

            <div className="rounded-lg bg-stone-50 border border-stone-200 p-3 text-sm text-center">
              Inscription en tant que{" "}
              <strong>{role === "architect" ? "Architecte" : "Particulier"}</strong>
              {" · "}
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-[#b5522a] hover:underline"
              >
                Changer
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-medium text-stone-700 mb-1 block">Prénom</label>
                <Input value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
              </div>
              <div>
                <label className="text-xs font-medium text-stone-700 mb-1 block">Nom</label>
                <Input value={lastName} onChange={(e) => setLastName(e.target.value)} required />
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-stone-700 mb-1 block">Email</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                required
              />
            </div>

            <div>
              <label className="text-xs font-medium text-stone-700 mb-1 block">
                Mot de passe (min. 8 caractères)
              </label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                minLength={8}
                required
              />
            </div>

            <Button type="submit" className="w-full rounded-full" disabled={loading}>
              {loading ? "Création du compte..." : "Créer mon compte"}
            </Button>
          </form>
        )}

        <p className="text-center text-sm text-stone-500 mt-6">
          Déjà un compte ?{" "}
          <Link href="/connexion" className="text-[#b5522a] font-medium hover:underline">
            Se connecter
          </Link>
        </p>
      </div>
    </section>
  );
}
