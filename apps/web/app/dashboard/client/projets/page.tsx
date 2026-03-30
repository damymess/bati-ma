"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FolderOpen, Plus, MapPin, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fetchClientProjets } from "@/lib/auth";

const STATUS_LABELS: Record<string, { label: string; color: string }> = {
  submitted: { label: "Soumis", color: "bg-blue-100 text-blue-700" },
  viewed: { label: "Vu par des architectes", color: "bg-amber-100 text-amber-700" },
  quoted: { label: "Devis reçu", color: "bg-green-100 text-green-700" },
  accepted: { label: "Accepté", color: "bg-emerald-100 text-emerald-700" },
  rejected: { label: "Refusé", color: "bg-red-100 text-red-700" },
  completed: { label: "Terminé", color: "bg-stone-100 text-stone-600" },
};

export default function ClientProjetsPage() {
  const [projets, setProjets] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchClientProjets();
        setProjets(data);
      } catch {}
      setLoading(false);
    };
    load();
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-stone-900">Mes projets</h2>
          <p className="text-sm text-stone-500">
            Gérez vos demandes de devis
          </p>
        </div>
        <Button size="sm" className="rounded-full" asChild>
          <Link href="/demande-devis">
            <Plus className="mr-1 h-4 w-4" />
            Nouvelle demande
          </Link>
        </Button>
      </div>

      {loading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-28 rounded-xl bg-stone-100 animate-pulse" />
          ))}
        </div>
      ) : projets.length === 0 ? (
        <div className="text-center py-16 rounded-xl border border-dashed border-stone-300">
          <FolderOpen className="h-12 w-12 text-stone-300 mx-auto mb-3" />
          <p className="text-sm text-stone-500 mb-1">
            Vous n&apos;avez pas encore de demande de devis
          </p>
          <p className="text-xs text-stone-400 mb-4">
            Décrivez votre projet et recevez des propositions d&apos;architectes qualifiés
          </p>
          <Button size="sm" className="rounded-full" asChild>
            <Link href="/demande-devis">
              Publier ma première demande
            </Link>
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          {projets.map((p: any) => {
            const status = STATUS_LABELS[p.status] || STATUS_LABELS.submitted;
            return (
              <Card key={p.id} className="hover:shadow-sm transition-shadow">
                <CardContent className="pt-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge className={`text-xs ${status.color}`}>{status.label}</Badge>
                        <Badge variant="secondary" className="text-xs">{p.project_type}</Badge>
                      </div>
                      <h3 className="font-semibold text-stone-900 truncate">{p.title}</h3>
                      <p className="text-sm text-stone-500 line-clamp-1 mt-1">{p.description}</p>
                      <div className="flex flex-wrap gap-3 mt-2 text-xs text-stone-400">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" /> {p.location}
                        </span>
                        {p.timeline && (
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" /> {p.timeline}
                          </span>
                        )}
                        {p.created_at && (
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(p.created_at).toLocaleDateString("fr-FR")}
                          </span>
                        )}
                      </div>
                    </div>
                    {p.responses_count > 0 && (
                      <Badge className="bg-[#b5522a] text-white shrink-0">
                        {p.responses_count} réponse{p.responses_count > 1 ? "s" : ""}
                      </Badge>
                    )}
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
