"use client";

import { useEffect, useState } from "react";
import { Check, X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getToken } from "@/lib/auth";
import AdminBreadcrumb from "@/components/admin/AdminBreadcrumb";

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:9000";

type Doc = {
  id: string;
  architect_profile_id: string;
  architect?: { id: string; name: string; email: string; subscription_tier: string };
  document_type: string;
  document_url: string;
  label: string;
  status: string;
  admin_note: string | null;
  expires_at: string | null;
  created_at: string;
};

export default function AdminVerificationsPage() {
  const [docs, setDocs] = useState<Doc[]>([]);
  const [status, setStatus] = useState<"pending" | "approved" | "rejected">("pending");
  const [loading, setLoading] = useState(true);
  const [acting, setActing] = useState<string | null>(null);

  useEffect(() => {
    load();
  }, [status]);

  async function load() {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/admin/verifications/admin?status=${status}`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      const data = await res.json();
      if (res.ok) setDocs(data.documents || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function moderate(id: string, action: "approve" | "reject") {
    setActing(id);
    try {
      const adminNote =
        action === "reject" ? prompt("Raison du refus (optionnel) ?") || null : null;
      const res = await fetch(`${API_BASE}/admin/verifications/admin/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify({ action, admin_note: adminNote, reviewed_by: "admin" }),
      });
      if (res.ok) await load();
      else alert("Erreur modération");
    } finally {
      setActing(null);
    }
  }

  return (
    <div>
      <AdminBreadcrumb
        items={[
          { label: "Admin", href: "/dashboard/admin" },
          { label: "Vérifications" },
        ]}
      />
      <h2 className="text-xl font-bold text-stone-900 mb-1">Modération des vérifications</h2>
      <p className="text-sm text-stone-500 mb-6">
        Validez les documents des architectes pour attribuer le badge « Vérifié »
      </p>

      <div className="inline-flex gap-1 bg-stone-100 rounded-full p-1 mb-6">
        {(["pending", "approved", "rejected"] as const).map((s) => (
          <button
            key={s}
            onClick={() => setStatus(s)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium capitalize transition ${
              status === s ? "bg-white text-stone-900 shadow-sm" : "text-stone-500"
            }`}
          >
            {s === "pending" ? "En attente" : s === "approved" ? "Approuvés" : "Rejetés"}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="space-y-3">
          {[1, 2].map((i) => (
            <div key={i} className="h-32 bg-stone-100 rounded-xl animate-pulse" />
          ))}
        </div>
      ) : docs.length === 0 ? (
        <p className="text-sm text-stone-500 text-center py-8">
          Aucun document dans cette catégorie
        </p>
      ) : (
        <div className="space-y-3">
          {docs.map((d) => (
            <Card key={d.id}>
              <CardContent className="pt-5">
                <div className="flex items-start justify-between mb-3 flex-wrap gap-3">
                  <div>
                    <p className="font-medium text-stone-900 text-sm">{d.label}</p>
                    <p className="text-xs text-stone-500">
                      {d.architect?.name || d.architect_profile_id}
                      {d.architect && (
                        <>
                          {" "}·{" "}
                          <Badge className="bg-stone-100 text-stone-700 text-xs">
                            {d.architect.subscription_tier}
                          </Badge>
                        </>
                      )}
                    </p>
                    <p className="text-xs text-stone-400 mt-1">
                      Soumis le {new Date(d.created_at).toLocaleString("fr-MA")}
                    </p>
                  </div>
                  <a
                    href={d.document_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#b5522a] hover:underline text-sm flex items-center gap-1"
                  >
                    Voir le document <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
                {status === "pending" && (
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700"
                      onClick={() => moderate(d.id, "approve")}
                      disabled={acting === d.id}
                    >
                      <Check className="h-4 w-4 mr-1" /> Valider
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-red-300 text-red-600 hover:bg-red-50"
                      onClick={() => moderate(d.id, "reject")}
                      disabled={acting === d.id}
                    >
                      <X className="h-4 w-4 mr-1" /> Refuser
                    </Button>
                  </div>
                )}
                {d.admin_note && (
                  <p className="text-xs text-stone-500 mt-3 italic">
                    Note : {d.admin_note}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
