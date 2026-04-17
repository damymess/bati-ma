"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Flame,
  Zap,
  ShieldCheck,
  Star,
  ArrowRight,
  TrendingUp,
  Users,
  FolderOpen,
  Search,
  AlertCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { fetchAdminStats } from "@/lib/api";
import AdminBreadcrumb from "@/components/admin/AdminBreadcrumb";

type Stats = Awaited<ReturnType<typeof fetchAdminStats>>;

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchAdminStats();
        setStats(data);
      } catch {}
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-24 rounded-xl bg-stone-100 animate-pulse" />
        ))}
      </div>
    );
  }

  if (!stats) return null;

  const totalActions =
    stats.leads.hot + stats.leads.to_verify + stats.reviews_pending + stats.verifications_pending;

  return (
    <div>
      <AdminBreadcrumb items={[{ label: "Admin" }]} />

      <div className="mb-6">
        <h2 className="text-2xl font-bold text-stone-900">Dashboard Admin</h2>
        <p className="text-sm text-stone-500">
          {totalActions > 0
            ? `${totalActions} action${totalActions > 1 ? "s" : ""} en attente`
            : "Tout est à jour, bien joué 👏"}
        </p>
      </div>

      {/* Actions requises — priorité absolue */}
      {totalActions > 0 && (
        <>
          <h3 className="text-sm font-semibold text-stone-700 mb-3 flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-amber-600" /> Actions requises
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {stats.leads.hot > 0 && (
              <Link href="/dashboard/admin/projets?lead=hot">
                <Card className="hover:shadow-md hover:border-orange-300 transition-all cursor-pointer h-full">
                  <CardContent className="pt-5">
                    <div className="flex items-center justify-between mb-2">
                      <div className="inline-flex p-2 rounded-lg text-orange-600 bg-orange-50">
                        <Flame className="h-5 w-5" />
                      </div>
                      <ArrowRight className="h-4 w-4 text-stone-300" />
                    </div>
                    <p className="text-2xl font-bold text-stone-900">{stats.leads.hot}</p>
                    <p className="text-xs text-stone-500">Leads Hot à traiter</p>
                  </CardContent>
                </Card>
              </Link>
            )}
            {stats.leads.to_verify > 0 && (
              <Link href="/dashboard/admin/projets?status=to_verify">
                <Card className="hover:shadow-md hover:border-yellow-300 transition-all cursor-pointer h-full">
                  <CardContent className="pt-5">
                    <div className="flex items-center justify-between mb-2">
                      <div className="inline-flex p-2 rounded-lg text-yellow-700 bg-yellow-50">
                        🔍
                      </div>
                      <ArrowRight className="h-4 w-4 text-stone-300" />
                    </div>
                    <p className="text-2xl font-bold text-stone-900">{stats.leads.to_verify}</p>
                    <p className="text-xs text-stone-500">Leads en attente de vérif client</p>
                  </CardContent>
                </Card>
              </Link>
            )}
            {stats.reviews_pending > 0 && (
              <Link href="/dashboard/admin/avis">
                <Card className="hover:shadow-md hover:border-amber-300 transition-all cursor-pointer h-full">
                  <CardContent className="pt-5">
                    <div className="flex items-center justify-between mb-2">
                      <div className="inline-flex p-2 rounded-lg text-amber-600 bg-amber-50">
                        <Star className="h-5 w-5" />
                      </div>
                      <ArrowRight className="h-4 w-4 text-stone-300" />
                    </div>
                    <p className="text-2xl font-bold text-stone-900">{stats.reviews_pending}</p>
                    <p className="text-xs text-stone-500">Avis à modérer</p>
                  </CardContent>
                </Card>
              </Link>
            )}
            {stats.verifications_pending > 0 && (
              <Link href="/dashboard/admin/verifications">
                <Card className="hover:shadow-md hover:border-green-300 transition-all cursor-pointer h-full">
                  <CardContent className="pt-5">
                    <div className="flex items-center justify-between mb-2">
                      <div className="inline-flex p-2 rounded-lg text-green-600 bg-green-50">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <ArrowRight className="h-4 w-4 text-stone-300" />
                    </div>
                    <p className="text-2xl font-bold text-stone-900">{stats.verifications_pending}</p>
                    <p className="text-xs text-stone-500">Documents à valider</p>
                  </CardContent>
                </Card>
              </Link>
            )}
          </div>
        </>
      )}

      {/* Aperçu global */}
      <h3 className="text-sm font-semibold text-stone-700 mb-3 flex items-center gap-2">
        <TrendingUp className="h-4 w-4 text-stone-500" /> Aperçu
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <Card>
          <CardContent className="pt-5">
            <div className="inline-flex p-2 rounded-lg text-blue-600 bg-blue-50 mb-2">
              <FolderOpen className="h-5 w-5" />
            </div>
            <p className="text-2xl font-bold text-stone-900">{stats.leads.total}</p>
            <p className="text-xs text-stone-500">Leads total</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-5">
            <div className="inline-flex p-2 rounded-lg text-orange-600 bg-orange-50 mb-2">
              <TrendingUp className="h-5 w-5" />
            </div>
            <p className="text-2xl font-bold text-stone-900">{stats.leads.last_7_days}</p>
            <p className="text-xs text-stone-500">Leads 7 derniers jours</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-5">
            <div className="inline-flex p-2 rounded-lg text-yellow-700 bg-yellow-50 mb-2">
              <Zap className="h-5 w-5" />
            </div>
            <p className="text-2xl font-bold text-stone-900">{stats.leads.warm}</p>
            <p className="text-xs text-stone-500">Leads Warm</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-5">
            <div className="inline-flex p-2 rounded-lg text-purple-600 bg-purple-50 mb-2">
              <Users className="h-5 w-5" />
            </div>
            <p className="text-2xl font-bold text-stone-900">{stats.architects_total}</p>
            <p className="text-xs text-stone-500">Architectes actifs</p>
          </CardContent>
        </Card>
      </div>

      {/* Raccourcis */}
      <h3 className="text-sm font-semibold text-stone-700 mb-3">Raccourcis</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <Link
          href="/dashboard/admin/projets"
          className="flex items-center gap-3 p-4 rounded-xl border border-stone-200 bg-white hover:shadow-md transition-all"
        >
          <FolderOpen className="h-5 w-5 text-[#b5522a]" />
          <div>
            <p className="text-sm font-semibold text-stone-900">Pipeline leads</p>
            <p className="text-xs text-stone-500">Voir tous les projets</p>
          </div>
        </Link>
        <Link
          href="/dashboard/admin/avis"
          className="flex items-center gap-3 p-4 rounded-xl border border-stone-200 bg-white hover:shadow-md transition-all"
        >
          <Star className="h-5 w-5 text-amber-600" />
          <div>
            <p className="text-sm font-semibold text-stone-900">Avis</p>
            <p className="text-xs text-stone-500">Modérer les avis clients</p>
          </div>
        </Link>
        <Link
          href="/dashboard/admin/verifications"
          className="flex items-center gap-3 p-4 rounded-xl border border-stone-200 bg-white hover:shadow-md transition-all"
        >
          <ShieldCheck className="h-5 w-5 text-green-600" />
          <div>
            <p className="text-sm font-semibold text-stone-900">Vérifications</p>
            <p className="text-xs text-stone-500">Valider les documents</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
