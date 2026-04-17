"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FolderOpen,
  Eye,
  Star,
  Crown,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/components/AuthProvider";
import { fetchArchitectStats } from "@/lib/api";
import { getToken } from "@/lib/auth";
import OnboardingBanner from "@/components/architect/OnboardingBanner";

export default function ArchitecteDashboard() {
  const { user } = useAuth();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      setLoading(false);
      return;
    }
    fetchArchitectStats(token)
      .then(setData)
      .finally(() => setLoading(false));
  }, []);

  const stats = data?.stats;
  const completion = data?.completion;
  const architect = data?.architect;
  const isPublic = completion?.isPublic ?? false;

  return (
    <div>
      <h2 className="text-xl font-bold text-stone-900 mb-1">
        Bienvenue, {user?.first_name || architect?.name?.split(" ")[0] || ""} !
      </h2>
      <p className="text-sm text-stone-500 mb-6">
        {isPublic
          ? "Votre profil est visible sur Bati.ma."
          : "Complétez votre profil pour apparaître sur Bati.ma et recevoir des demandes."}
      </p>

      {/* Banner onboarding — priorité absolue */}
      <OnboardingBanner />

      {/* Stats réelles */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg text-blue-600 bg-blue-50">
                <FolderOpen className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-bold text-stone-900">
                  {loading ? "…" : stats?.demandes_available || 0}
                </p>
                <p className="text-xs text-stone-500">Demandes disponibles</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg text-emerald-600 bg-emerald-50">
                <Eye className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-bold text-stone-900">
                  {loading ? "…" : stats?.contacts_unlocked || 0}
                </p>
                <p className="text-xs text-stone-500">Contacts débloqués</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg text-amber-600 bg-amber-50">
                <Star className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-bold text-stone-900">
                  {loading ? "…" : stats?.avg_rating ? Number(stats.avg_rating).toFixed(1) : "—"}
                </p>
                <p className="text-xs text-stone-500">
                  Note ({stats?.reviews_count || 0} avis)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg text-purple-600 bg-purple-50">
                <Crown className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-bold text-stone-900 capitalize">
                  {stats?.subscription_tier || "Free"}
                </p>
                <p className="text-xs text-stone-500">Plan actuel</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Confirmation profil visible public */}
      {isPublic && architect && (
        <Card className="mb-6 border-green-200 bg-green-50/50">
          <CardContent className="p-4 flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-green-600 shrink-0" />
            <div className="flex-1">
              <p className="text-sm font-medium text-stone-900">
                Votre profil est visible publiquement
              </p>
              <p className="text-xs text-stone-600 mt-0.5">
                Les clients peuvent vous trouver dans la liste des architectes.
              </p>
            </div>
            <Link
              href={`/architecte/${(architect?.regions as string[])?.[0] || "casablanca"}/${architect?.id}`}
              target="_blank"
              className="text-xs text-[#b5522a] hover:underline whitespace-nowrap"
            >
              Voir ma fiche →
            </Link>
          </CardContent>
        </Card>
      )}

      {/* Quick actions */}
      <h3 className="text-sm font-semibold text-stone-900 mb-3">Actions rapides</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <Button variant="outline" className="justify-start rounded-lg h-auto py-3" asChild>
          <Link href="/dashboard/architecte/profil">
            <FolderOpen className="h-4 w-4 mr-2" />
            Compléter mon profil
          </Link>
        </Button>
        <Button variant="outline" className="justify-start rounded-lg h-auto py-3" asChild>
          <Link href="/dashboard/architecte/projets">
            <TrendingUp className="h-4 w-4 mr-2" />
            Voir les demandes de devis
          </Link>
        </Button>
        <Button variant="outline" className="justify-start rounded-lg h-auto py-3" asChild>
          <Link href="/dashboard/architecte/abonnement">
            <Crown className="h-4 w-4 mr-2" />
            {stats?.subscription_tier === "free" ? "Passer Pro" : "Mon abonnement"}
          </Link>
        </Button>
      </div>

      {/* Preuve sociale */}
      <div className="mt-8 rounded-xl border border-stone-200 bg-stone-50 p-4">
        <p className="text-xs font-medium text-stone-700 mb-2 flex items-center gap-2">
          <Users className="h-3.5 w-3.5" />
          Sur Bati.ma
        </p>
        <div className="grid grid-cols-3 gap-3 text-center">
          <div>
            <p className="text-lg font-bold text-[#b5522a]">
              {stats?.demandes_available || 0}
            </p>
            <p className="text-[11px] text-stone-500">Demandes actives</p>
          </div>
          <div>
            <p className="text-lg font-bold text-[#b5522a]">
              {completion?.percent || 0}%
            </p>
            <p className="text-[11px] text-stone-500">Votre complétion</p>
          </div>
          <div>
            <p className="text-lg font-bold text-[#b5522a]">
              {isPublic ? "Oui" : "Non"}
            </p>
            <p className="text-[11px] text-stone-500">Visible public</p>
          </div>
        </div>
      </div>
    </div>
  );
}
