"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Banknote,
  Clock,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { fetchAdminProjectRequest, updateAdminProjectRequestStatus } from "@/lib/api";

const STATUS_LABELS: Record<string, { label: string; color: string }> = {
  submitted: { label: "Soumis", color: "bg-blue-100 text-blue-700" },
  viewed: { label: "Vu", color: "bg-amber-100 text-amber-700" },
  quoted: { label: "Devis envoyé", color: "bg-purple-100 text-purple-700" },
  accepted: { label: "Accepté", color: "bg-emerald-100 text-emerald-700" },
  rejected: { label: "Refusé", color: "bg-red-100 text-red-700" },
  completed: { label: "Terminé", color: "bg-stone-100 text-stone-600" },
};

const STATUS_ACTIONS = [
  { value: "submitted", label: "Soumis" },
  { value: "viewed", label: "Vu" },
  { value: "quoted", label: "Devis envoyé" },
  { value: "accepted", label: "Accepté" },
  { value: "rejected", label: "Refusé" },
  { value: "completed", label: "Terminé" },
];

export default function AdminProjetDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const [projet, setProjet] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchAdminProjectRequest(id);
        setProjet(data.project_request);
      } catch {}
      setLoading(false);
    })();
  }, [id]);

  const handleStatusChange = async (newStatus: string) => {
    if (!projet || newStatus === projet.status) return;
    setUpdating(true);
    try {
      const data = await updateAdminProjectRequestStatus(id, newStatus);
      setProjet(data.project_request);
    } catch (e) {
      console.error(e);
    }
    setUpdating(false);
  };

  if (loading) {
    return <div className="h-64 rounded-xl bg-stone-100 animate-pulse" />;
  }

  if (!projet) {
    return (
      <div className="text-center py-16">
        <p className="text-stone-500">Projet non trouvé</p>
      </div>
    );
  }

  const status = STATUS_LABELS[projet.status] || STATUS_LABELS.submitted;
  const budget =
    projet.budget_min && projet.budget_max
      ? `${Number(projet.budget_min).toLocaleString("fr-MA")} - ${Number(projet.budget_max).toLocaleString("fr-MA")} MAD`
      : projet.budget_min
      ? `À partir de ${Number(projet.budget_min).toLocaleString("fr-MA")} MAD`
      : projet.budget_max
      ? `Jusqu'à ${Number(projet.budget_max).toLocaleString("fr-MA")} MAD`
      : "Non défini";

  return (
    <div>
      <button
        onClick={() => router.back()}
        className="flex items-center gap-1.5 text-sm text-stone-500 hover:text-stone-900 mb-4 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Retour
      </button>

      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Badge className={`${status.color}`}>{status.label}</Badge>
            <Badge variant="secondary">{projet.project_type}</Badge>
            <span className="text-xs text-stone-400">
              Source : {projet.source || "website"}
            </span>
          </div>
          <h2 className="text-xl font-bold text-stone-900">{projet.title}</h2>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Client info */}
        <Card>
          <CardContent className="pt-5">
            <h3 className="font-semibold text-stone-900 mb-4">Informations client</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <User className="h-4 w-4 text-stone-400" />
                <span className="font-medium">{projet.client_name}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-stone-400" />
                <a href={`mailto:${projet.client_email}`} className="text-[#b5522a] hover:underline">
                  {projet.client_email}
                </a>
              </div>
              {projet.client_phone && (
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="h-4 w-4 text-stone-400" />
                  <a href={`tel:${projet.client_phone}`} className="hover:underline">
                    {projet.client_phone}
                  </a>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Project info */}
        <Card>
          <CardContent className="pt-5">
            <h3 className="font-semibold text-stone-900 mb-4">Détails du projet</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-stone-400" />
                <span>{projet.location}{projet.address ? ` — ${projet.address}` : ""}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Banknote className="h-4 w-4 text-stone-400" />
                <span>{budget}</span>
              </div>
              {projet.timeline && (
                <div className="flex items-center gap-3 text-sm">
                  <Clock className="h-4 w-4 text-stone-400" />
                  <span>{projet.timeline}</span>
                </div>
              )}
              <div className="flex items-center gap-3 text-sm">
                <Calendar className="h-4 w-4 text-stone-400" />
                <span>
                  Soumis le{" "}
                  {new Date(projet.created_at).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Description */}
      {projet.description && (
        <Card className="mt-6">
          <CardContent className="pt-5">
            <h3 className="font-semibold text-stone-900 mb-2">Description</h3>
            <p className="text-sm text-stone-600 whitespace-pre-wrap">{projet.description}</p>
          </CardContent>
        </Card>
      )}

      {/* Status change */}
      <Card className="mt-6">
        <CardContent className="pt-5">
          <h3 className="font-semibold text-stone-900 mb-3">Changer le statut</h3>
          <div className="flex flex-wrap gap-2">
            {STATUS_ACTIONS.map((s) => (
              <Button
                key={s.value}
                size="sm"
                variant={projet.status === s.value ? "default" : "outline"}
                disabled={updating || projet.status === s.value}
                onClick={() => handleStatusChange(s.value)}
                className={
                  projet.status === s.value
                    ? "bg-[#b5522a] hover:bg-[#9a4523]"
                    : ""
                }
              >
                {s.label}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
