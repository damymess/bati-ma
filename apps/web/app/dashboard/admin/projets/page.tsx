"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MapPin, Calendar, User, Search, Trash2, Mail, AlertTriangle, StickyNote, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  fetchAdminProjectRequests,
  deleteAdminProject,
  requestVerificationEmail,
  updateAdminProjectNote,
  downloadLeadsCsv,
} from "@/lib/api";
import { STATUS_FILTERS, LEAD_FILTERS } from "@/lib/admin-constants";
import StatusBadge from "@/components/admin/StatusBadge";
import LeadTypeBadge from "@/components/admin/LeadTypeBadge";
import AdminBreadcrumb from "@/components/admin/AdminBreadcrumb";
import ActionMenu from "@/components/admin/ActionMenu";

export default function AdminProjetsPage() {
  const [projets, setProjets] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("all");
  const [leadFilter, setLeadFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [acting, setActing] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const data = await fetchAdminProjectRequests({
          status: statusFilter !== "all" ? statusFilter : undefined,
          limit: 200,
        });
        setProjets(data.project_requests);
      } catch {}
      setLoading(false);
    })();
  }, [statusFilter]);

  async function handleDelete(p: any, e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (!confirm(`Supprimer définitivement ce lead ?\n\n${p.title}\n${p.client_name} · ${p.client_email}\n\nAction IRRÉVERSIBLE.`)) return;
    setActing(p.id);
    try {
      await deleteAdminProject(p.id);
      setProjets((list) => list.filter((x) => x.id !== p.id));
    } catch (err: any) {
      alert("Erreur : " + (err?.message || "suppression échouée"));
    } finally {
      setActing(null);
    }
  }

  async function handleRequestVerification(p: any, e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (!p.client_email) {
      alert("Ce lead n'a pas d'email client — impossible d'envoyer une vérification.");
      return;
    }
    if (!confirm(`Envoyer un email de confirmation à ${p.client_email} ?\n\nLe client recevra un lien pour vérifier / corriger ses informations.`)) return;
    setActing(p.id);
    try {
      await requestVerificationEmail(p.id);
      setProjets((list) =>
        list.map((x) =>
          x.id === p.id ? { ...x, status: "to_verify", verification_sent_at: new Date().toISOString() } : x,
        ),
      );
      alert("Email envoyé !");
    } catch (err: any) {
      alert("Erreur : " + (err?.message || "envoi échoué"));
    } finally {
      setActing(null);
    }
  }

  async function handleMarkInvalid(p: any, e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    const note = prompt(`Raison pour marquer ce lead comme invalide ?\n\n(La note sera sauvegardée dans admin_note)`);
    if (note === null) return;
    setActing(p.id);
    try {
      await updateAdminProjectNote(p.id, { status: "invalid", admin_note: note });
      setProjets((list) => list.map((x) => (x.id === p.id ? { ...x, status: "invalid", admin_note: note } : x)));
    } catch (err: any) {
      alert("Erreur : " + (err?.message || "maj échouée"));
    } finally {
      setActing(null);
    }
  }

  const filtered = projets.filter((p) => {
    if (leadFilter !== "all" && (p.lead_type || "cold") !== leadFilter) return false;
    if (search) {
      const s = search.toLowerCase();
      return (
        p.title?.toLowerCase().includes(s) ||
        p.client_name?.toLowerCase().includes(s) ||
        p.client_email?.toLowerCase().includes(s) ||
        p.location?.toLowerCase().includes(s)
      );
    }
    return true;
  });

  return (
    <div>
      <AdminBreadcrumb
        items={[
          { label: "Admin", href: "/dashboard/admin" },
          { label: "Projets soumis" },
        ]}
      />

      <div className="mb-6 flex items-start justify-between gap-3 flex-wrap">
        <div>
          <h2 className="text-xl font-bold text-stone-900">Projets soumis</h2>
          <p className="text-sm text-stone-500">
            {filtered.length} projet{filtered.length > 1 ? "s" : ""}
          </p>
        </div>
        <button
          onClick={() =>
            downloadLeadsCsv({ status: statusFilter, lead_type: leadFilter }).catch((e) =>
              alert("Erreur export : " + e.message),
            )
          }
          className="inline-flex items-center gap-1.5 text-xs px-3 py-2 rounded-full border border-stone-200 bg-white hover:bg-stone-50 text-stone-700 transition"
        >
          <Download className="h-3.5 w-3.5" /> Exporter CSV
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
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

      {/* Filtre par qualité de lead */}
      <div className="flex gap-1 flex-wrap mb-4">
        {LEAD_FILTERS.map((f) => (
          <button
            key={f.value}
            onClick={() => setLeadFilter(f.value)}
            className={`px-3 py-1.5 text-xs rounded-full transition-colors border ${
              leadFilter === f.value
                ? "bg-[#b5522a] text-white border-[#b5522a]"
                : "bg-white text-stone-600 border-stone-200 hover:border-[#b5522a]/40"
            }`}
          >
            {f.label}
          </button>
        ))}
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
            const budget =
              p.budget_min && p.budget_max
                ? `${Number(p.budget_min).toLocaleString("fr-MA")} - ${Number(p.budget_max).toLocaleString("fr-MA")} MAD`
                : p.budget_min
                  ? `À partir de ${Number(p.budget_min).toLocaleString("fr-MA")} MAD`
                  : null;

            const actions = [
              {
                label: "Demander confirmation",
                Icon: Mail,
                variant: "default" as const,
                onClick: (e: React.MouseEvent) => handleRequestVerification(p, e),
                disabled: acting === p.id || !p.client_email,
              },
              {
                label: "Marquer invalide",
                Icon: AlertTriangle,
                variant: "default" as const,
                onClick: (e: React.MouseEvent) => handleMarkInvalid(p, e),
                disabled: acting === p.id,
              },
              {
                label: "Supprimer",
                Icon: Trash2,
                variant: "danger" as const,
                onClick: (e: React.MouseEvent) => handleDelete(p, e),
                disabled: acting === p.id,
              },
            ];

            return (
              <Card key={p.id} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-5">
                  <div className="flex items-start justify-between gap-3">
                    <Link
                      href={`/dashboard/admin/projets/${p.id}`}
                      className="min-w-0 flex-1 cursor-pointer"
                    >
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <LeadTypeBadge leadType={p.lead_type} />
                        <StatusBadge status={p.status} />
                        <span className="text-xs text-stone-400">{p.project_type}</span>
                        {budget && <span className="text-xs text-stone-400">· {budget}</span>}
                        {p.admin_note && (
                          <span
                            className="inline-flex items-center gap-1 text-xs text-amber-700"
                            title={p.admin_note}
                          >
                            <StickyNote className="h-3 w-3" /> Note
                          </span>
                        )}
                      </div>
                      <h3 className="font-semibold text-stone-900 truncate">{p.title}</h3>
                      <div className="flex flex-wrap gap-3 mt-2 text-xs text-stone-500">
                        <span className="flex items-center gap-1">
                          <User className="h-3 w-3" /> {p.client_name}
                        </span>
                        {p.client_email && (
                          <span className="flex items-center gap-1 text-stone-600">
                            ✉️ {p.client_email}
                          </span>
                        )}
                        {p.client_phone && (
                          <span className="flex items-center gap-1 text-stone-600 font-medium">
                            📱 {p.client_phone}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" /> {p.location}
                        </span>
                        {p.timeline && (
                          <span className="flex items-center gap-1 text-amber-700 font-medium">
                            ⏱️ {p.timeline}
                          </span>
                        )}
                        {p.created_at && (
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(p.created_at).toLocaleDateString("fr-FR", {
                              day: "numeric",
                              month: "short",
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        )}
                      </div>
                    </Link>

                    <div className="shrink-0">
                      <ActionMenu actions={actions} />
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
