"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { User, Mail, Send, Search, Eye, EyeOff } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fetchRegisteredArchitects, sendArchitectReactivation } from "@/lib/api";
import AdminBreadcrumb from "@/components/admin/AdminBreadcrumb";

type Architect = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  subscription_tier: string;
  verified: boolean;
  completion_percent: number;
  is_public: boolean;
  is_complete: boolean;
  missing_count: number;
  created_at: string;
};

export default function AdminArchitectesPage() {
  const [archs, setArchs] = useState<Architect[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "incomplete" | "complete" | "public">("all");
  const [search, setSearch] = useState("");
  const [sendingId, setSendingId] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await fetchRegisteredArchitects();
      setArchs(data.architects);
      setLoading(false);
    })();
  }, []);

  async function handleSendReactivation(a: Architect) {
    if (!confirm(`Envoyer un email de relance à ${a.email} ?`)) return;
    setSendingId(a.id);
    try {
      await sendArchitectReactivation(a.id);
      alert("Email envoyé !");
    } catch (e: any) {
      alert("Erreur : " + (e?.message || "envoi échoué"));
    }
    setSendingId(null);
  }

  const filtered = archs.filter((a) => {
    if (filter === "incomplete" && a.is_public) return false;
    if (filter === "complete" && !a.is_complete) return false;
    if (filter === "public" && !a.is_public) return false;
    if (search) {
      const s = search.toLowerCase();
      return a.name.toLowerCase().includes(s) || a.email.toLowerCase().includes(s);
    }
    return true;
  });

  const stats = {
    total: archs.length,
    public: archs.filter((a) => a.is_public).length,
    complete: archs.filter((a) => a.is_complete).length,
    incomplete: archs.filter((a) => !a.is_public).length,
  };

  return (
    <div>
      <AdminBreadcrumb
        items={[
          { label: "Admin", href: "/dashboard/admin" },
          { label: "Architectes inscrits" },
        ]}
      />

      <div className="mb-6">
        <h2 className="text-xl font-bold text-stone-900">Architectes inscrits</h2>
        <p className="text-sm text-stone-500">
          {stats.total} comptes avec mot de passe · {stats.public} visibles publiquement ·{" "}
          {stats.incomplete} profils à relancer
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
          <input
            type="text"
            placeholder="Rechercher par nom, email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b5522a]/20 focus:border-[#b5522a]"
          />
        </div>
        <div className="flex gap-1 flex-wrap">
          {[
            { v: "all", l: `Tous (${stats.total})` },
            { v: "incomplete", l: `⚠️ À relancer (${stats.incomplete})` },
            { v: "public", l: `Visibles (${stats.public})` },
            { v: "complete", l: `✅ Complets (${stats.complete})` },
          ].map((f) => (
            <button
              key={f.v}
              onClick={() => setFilter(f.v as any)}
              className={`px-3 py-1.5 text-xs rounded-full transition-colors ${
                filter === f.v
                  ? "bg-stone-900 text-white"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              {f.l}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-24 rounded-xl bg-stone-100 animate-pulse" />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-16 rounded-xl border border-dashed border-stone-300">
          <p className="text-sm text-stone-500">Aucun architecte dans cette catégorie</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((a) => (
            <Card key={a.id}>
              <CardContent className="pt-5">
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="font-semibold text-stone-900">{a.name}</h3>
                      <Badge
                        className={`text-xs ${
                          a.subscription_tier !== "free"
                            ? "bg-purple-100 text-purple-700"
                            : "bg-stone-100 text-stone-600"
                        }`}
                      >
                        {a.subscription_tier}
                      </Badge>
                      {a.verified && (
                        <Badge className="text-xs bg-green-100 text-green-700">Vérifié</Badge>
                      )}
                      {a.is_public ? (
                        <Badge className="text-xs bg-green-50 text-green-700 border border-green-200">
                          <Eye className="h-3 w-3 mr-1" /> Visible
                        </Badge>
                      ) : (
                        <Badge className="text-xs bg-stone-100 text-stone-500 border border-stone-200">
                          <EyeOff className="h-3 w-3 mr-1" /> Privé
                        </Badge>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-3 text-xs text-stone-500 mb-2">
                      <span className="flex items-center gap-1">
                        <Mail className="h-3 w-3" /> {a.email}
                      </span>
                      {a.phone && <span>📱 {a.phone}</span>}
                      <span>
                        Inscrit le{" "}
                        {new Date(a.created_at).toLocaleDateString("fr-FR", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>

                    {/* Progress bar */}
                    <div className="flex items-center gap-2">
                      <div className="flex-1 max-w-xs bg-stone-100 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full transition-all ${
                            a.is_complete
                              ? "bg-green-500"
                              : a.is_public
                                ? "bg-amber-500"
                                : "bg-red-500"
                          }`}
                          style={{ width: `${a.completion_percent}%` }}
                        />
                      </div>
                      <span className="text-xs font-medium text-stone-700 w-10">
                        {a.completion_percent}%
                      </span>
                      {a.missing_count > 0 && (
                        <span className="text-xs text-stone-500">
                          · {a.missing_count} champ{a.missing_count > 1 ? "s" : ""} manquant{a.missing_count > 1 ? "s" : ""}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2 shrink-0">
                    {!a.is_public && (
                      <button
                        onClick={() => handleSendReactivation(a)}
                        disabled={sendingId === a.id}
                        className="inline-flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-md border border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100 transition disabled:opacity-50"
                      >
                        <Send className="h-3 w-3" />
                        {sendingId === a.id ? "Envoi..." : "Relancer"}
                      </button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
