"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MapPin, Calendar, User, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fetchAdminProjectRequests } from "@/lib/api";

const STATUS_LABELS: Record<string, { label: string; color: string }> = {
  submitted: { label: "Soumis", color: "bg-blue-100 text-blue-700" },
  viewed: { label: "Vu", color: "bg-amber-100 text-amber-700" },
  quoted: { label: "Devis envoyé", color: "bg-purple-100 text-purple-700" },
  accepted: { label: "Accepté", color: "bg-emerald-100 text-emerald-700" },
  rejected: { label: "Refusé", color: "bg-red-100 text-red-700" },
  completed: { label: "Terminé", color: "bg-stone-100 text-stone-600" },
};

const STATUS_FILTERS = [
  { value: "all", label: "Tous" },
  { value: "submitted", label: "Soumis" },
  { value: "viewed", label: "Vus" },
  { value: "quoted", label: "Devis" },
  { value: "accepted", label: "Acceptés" },
  { value: "completed", label: "Terminés" },
];

export default function AdminProjetsPage() {
  const [projets, setProjets] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const data = await fetchAdminProjectRequests({
          status: statusFilter !== "all" ? statusFilter : undefined,
          limit: 100,
        });
        setProjets(data.project_requests);
      } catch {}
      setLoading(false);
    })();
  }, [statusFilter]);

  const filtered = search
    ? projets.filter(
        (p) =>
          p.title?.toLowerCase().includes(search.toLowerCase()) ||
          p.client_name?.toLowerCase().includes(search.toLowerCase()) ||
          p.location?.toLowerCase().includes(search.toLowerCase())
      )
    : projets;

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-bold text-stone-900">Projets soumis</h2>
        <p className="text-sm text-stone-500">
          {filtered.length} projet{filtered.length > 1 ? "s" : ""}
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
          <input
            type="text"
            placeholder="Rechercher par nom, titre, ville..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b5522a]/20 focus:border-[#b5522a]"
          />
        </div>
        <div className="flex gap-1 flex-wrap">
          {STATUS_FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setStatusFilter(f.value)}
              className={`px-3 py-1.5 text-xs rounded-full transition-colors ${
                statusFilter === f.value
                  ? "bg-stone-900 text-white"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="space-y-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-24 rounded-xl bg-stone-100 animate-pulse" />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-16 rounded-xl border border-dashed border-stone-300">
          <p className="text-sm text-stone-500">Aucun projet trouvé</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((p: any) => {
            const status = STATUS_LABELS[p.status] || STATUS_LABELS.submitted;
            const budget =
              p.budget_min && p.budget_max
                ? `${Number(p.budget_min).toLocaleString("fr-MA")} - ${Number(p.budget_max).toLocaleString("fr-MA")} MAD`
                : p.budget_min
                ? `À partir de ${Number(p.budget_min).toLocaleString("fr-MA")} MAD`
                : null;

            return (
              <Link key={p.id} href={`/dashboard/admin/projets/${p.id}`}>
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="pt-5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge className={`text-xs ${status.color}`}>{status.label}</Badge>
                          <Badge variant="secondary" className="text-xs">{p.project_type}</Badge>
                          {budget && (
                            <span className="text-xs text-stone-400">{budget}</span>
                          )}
                        </div>
                        <h3 className="font-semibold text-stone-900 truncate">{p.title}</h3>
                        <div className="flex flex-wrap gap-3 mt-2 text-xs text-stone-400">
                          <span className="flex items-center gap-1">
                            <User className="h-3 w-3" /> {p.client_name}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" /> {p.location}
                          </span>
                          {p.created_at && (
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {new Date(p.created_at).toLocaleDateString("fr-FR", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              })}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
