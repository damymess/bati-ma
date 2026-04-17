"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FolderOpen, FileText, Plus, MapPin, Calendar, ChevronRight, Star, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/components/AuthProvider";
import { fetchClientProjets } from "@/lib/auth";
import ProjectStatusTimeline from "@/components/client/ProjectStatusTimeline";

type Shortlist = {
  id: string;
  name: string;
  rating: number;
  review_count: number;
  verified: boolean;
  regions?: string[];
};

type Projet = {
  id: string;
  title: string;
  project_type: string;
  location: string;
  status: string;
  budget_min: number | null;
  budget_max: number | null;
  created_at: string;
  updated_at: string;
  shortlist?: Shortlist[];
  unlocks?: Array<{ architect_profile_id: string; unlocked_at: string }>;
  architect_response?: string | null;
};

export default function ClientDashboard() {
  const { user } = useAuth();
  const [projets, setProjets] = useState<Projet[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const list = await fetchClientProjets();
        setProjets(list || []);
      } catch {}
      setLoading(false);
    })();
  }, []);

  const stats = {
    total: projets.length,
    devisRecus: projets.filter((p) => p.architect_response || p.status === "quoted").length,
    enCours: projets.filter((p) => ["submitted", "viewed", "quoted"].includes(p.status)).length,
    termines: projets.filter((p) => p.status === "completed").length,
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-stone-900 mb-1">
        Bienvenue, {user?.first_name} !
      </h2>
      <p className="text-sm text-stone-500 mb-6">
        Suivez l&apos;avancement de vos projets et les architectes qui vous contactent
      </p>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg text-blue-600 bg-blue-50">
              <FolderOpen className="h-5 w-5" />
            </div>
            <div>
              <p className="text-2xl font-bold text-stone-900">{loading ? "…" : stats.total}</p>
              <p className="text-xs text-stone-500">Projets</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg text-emerald-600 bg-emerald-50">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <p className="text-2xl font-bold text-stone-900">{loading ? "…" : stats.devisRecus}</p>
              <p className="text-xs text-stone-500">Devis reçus</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg text-amber-600 bg-amber-50">
              <Calendar className="h-5 w-5" />
            </div>
            <div>
              <p className="text-2xl font-bold text-stone-900">{loading ? "…" : stats.enCours}</p>
              <p className="text-xs text-stone-500">En cours</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg text-purple-600 bg-purple-50">
              <Star className="h-5 w-5" />
            </div>
            <div>
              <p className="text-2xl font-bold text-stone-900">{loading ? "…" : stats.termines}</p>
              <p className="text-xs text-stone-500">Terminés</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CTA principal */}
      <div className="mb-6">
        <Button className="rounded-full bg-[#b5522a] hover:bg-[#a0441f]" asChild>
          <Link href="/demande-devis">
            <Plus className="mr-2 h-4 w-4" />
            Publier une nouvelle demande
          </Link>
        </Button>
      </div>

      {/* Projets */}
      <h3 className="text-sm font-semibold text-stone-900 mb-3">Mes projets</h3>

      {loading ? (
        <div className="space-y-3">
          {[1, 2].map((i) => (
            <div key={i} className="h-40 rounded-xl bg-stone-100 animate-pulse" />
          ))}
        </div>
      ) : projets.length === 0 ? (
        <Card className="border-dashed">
          <CardContent className="pt-8 pb-8 text-center">
            <FolderOpen className="h-10 w-10 text-stone-300 mx-auto mb-3" />
            <p className="text-sm text-stone-500 mb-4">
              Vous n&apos;avez pas encore publié de projet
            </p>
            <Button className="rounded-full" asChild>
              <Link href="/demande-devis">
                Publier ma première demande
              </Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {projets.map((p) => {
            const cityLower = (p.location || "").toLowerCase();
            const budgetStr =
              p.budget_min && p.budget_max
                ? `${Number(p.budget_min).toLocaleString("fr-MA")} - ${Number(p.budget_max).toLocaleString("fr-MA")} MAD`
                : null;

            return (
              <Card key={p.id}>
                <CardContent className="pt-5">
                  <div className="grid md:grid-cols-[1fr_280px] gap-6">
                    <div>
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <Badge variant="secondary" className="text-xs">{p.project_type}</Badge>
                        {budgetStr && <span className="text-xs text-stone-400">{budgetStr}</span>}
                      </div>
                      <h4 className="font-semibold text-stone-900">{p.title}</h4>
                      <div className="flex flex-wrap gap-3 mt-1 text-xs text-stone-500">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" /> {p.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(p.created_at).toLocaleDateString("fr-FR", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                      </div>

                      {/* Shortlist */}
                      {p.shortlist && p.shortlist.length > 0 && (
                        <div className="mt-4">
                          <p className="text-xs font-medium text-stone-700 mb-2">
                            {p.shortlist.length} architecte{p.shortlist.length > 1 ? "s" : ""} sélectionné{p.shortlist.length > 1 ? "s" : ""} pour votre projet
                          </p>
                          <div className="space-y-2">
                            {p.shortlist.map((a) => (
                              <Link
                                key={a.id}
                                href={`/architecte/${cityLower}/${a.id}`}
                                className="flex items-center justify-between gap-2 p-2 rounded-lg border border-stone-200 hover:border-[#b5522a]/40 hover:bg-stone-50 transition"
                              >
                                <div className="flex items-center gap-2 min-w-0">
                                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b5522a]/10 text-[#b5522a] text-xs font-bold shrink-0">
                                    {a.name.charAt(0)}
                                  </div>
                                  <div className="min-w-0">
                                    <p className="text-sm font-medium text-stone-900 truncate">
                                      {a.name}
                                      {a.verified && (
                                        <span className="ml-1 inline-flex items-center text-green-600" title="Vérifié">
                                          <ShieldCheck className="inline h-3 w-3" />
                                        </span>
                                      )}
                                    </p>
                                    {a.rating > 0 && (
                                      <p className="text-xs text-stone-500">
                                        ★ {a.rating.toFixed(1)} ({a.review_count})
                                      </p>
                                    )}
                                  </div>
                                </div>
                                <ChevronRight className="h-4 w-4 text-stone-400 shrink-0" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Timeline status */}
                    <div className="md:border-l md:border-stone-100 md:pl-6">
                      <p className="text-xs font-medium text-stone-700 mb-3">Avancement</p>
                      <ProjectStatusTimeline
                        status={p.status}
                        createdAt={p.created_at}
                        updatedAt={p.updated_at}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
