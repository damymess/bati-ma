"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LogIn, Eye, EyeOff, Building2, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { login, loginClient } from "@/lib/auth";
import { useAuth } from "@/components/AuthProvider";

type Role = "architect" | "client";

export default function ConnexionPage() {
  const router = useRouter();
  const { refresh } = useAuth();
  const [role, setRole] = useState<Role>("client");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      if (role === "architect") {
        await login(email, password);
      } else {
        await loginClient(email, password);
      }
      await refresh();
      router.push(role === "architect" ? "/dashboard/architecte" : "/dashboard/client");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Erreur de connexion");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="bg-stone-950 px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-md text-center">
          <h1 className="text-3xl font-bold text-white">Connexion</h1>
          <p className="mt-2 text-stone-400 text-sm">
            Accédez à votre espace personnel
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
                <LogIn className="h-5 w-5 text-[#b5522a]" />
                {role === "architect" ? "Espace Architecte" : "Espace Client"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="login-email" className="mb-1 block text-sm font-medium text-stone-700">
                    Email
                  </label>
                  <Input
                    id="login-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={role === "architect" ? "contact@votre-cabinet.ma" : "votre@email.com"}
                    required
                    autoComplete="email"
                  />
                </div>

                <div>
                  <label htmlFor="login-password" className="mb-1 block text-sm font-medium text-stone-700">
                    Mot de passe
                  </label>
                  <div className="relative">
                    <Input
                      id="login-password"
                      type={showPwd ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                      autoComplete="current-password"
                      className="pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPwd((v) => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
                    >
                      {showPwd ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                {error && (
                  <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-600">
                    {error}
                  </p>
                )}

                <Button
                  type="submit"
                  className="w-full bg-[#b5522a] hover:bg-[#9e4725]"
                  disabled={loading}
                >
                  {loading ? "Connexion..." : "Se connecter"}
                </Button>
              </form>

              <p className="mt-4 text-center text-sm text-stone-500">
                Pas encore de compte ?{" "}
                <Link
                  href={role === "architect" ? "/inscription-architecte" : "/inscription"}
                  className="text-[#b5522a] font-medium hover:underline"
                >
                  S&apos;inscrire gratuitement
                </Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
