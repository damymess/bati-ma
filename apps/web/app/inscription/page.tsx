"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserPlus, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/components/AuthProvider";
import { registerClient } from "@/lib/auth";

export default function InscriptionPage() {
  const router = useRouter();
  const { refresh } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await registerClient({
        name: `${firstName} ${lastName}`,
        email,
        password,
        phone: phone || undefined,
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

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="reg-firstname" className="text-xs font-medium text-stone-700 mb-1 block">Prénom *</label>
              <Input id="reg-firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            </div>
            <div>
              <label htmlFor="reg-lastname" className="text-xs font-medium text-stone-700 mb-1 block">Nom *</label>
              <Input id="reg-lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
            </div>
          </div>

          <div>
            <label htmlFor="reg-email" className="text-xs font-medium text-stone-700 mb-1 block">Email *</label>
            <Input
              id="reg-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@email.com"
              required
            />
          </div>

          <div>
            <label htmlFor="reg-phone" className="text-xs font-medium text-stone-700 mb-1 block">Téléphone</label>
            <Input
              id="reg-phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+212 6XX XXX XXX"
            />
          </div>

          <div>
            <label htmlFor="reg-password" className="text-xs font-medium text-stone-700 mb-1 block">
              Mot de passe (min. 8 caractères) *
            </label>
            <Input
              id="reg-password"
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
