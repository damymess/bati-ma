"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Banknote,
  Clock,
  Trash2,
  AlertTriangle,
  ShieldCheck,
  StickyNote,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  fetchAdminProjectRequest,
  updateAdminProjectRequestStatus,
  deleteAdminProject,
  requestVerificationEmail,
  updateAdminProjectNote,
  fetchProjectAuditLog,
} from "@/lib/api";
import { STATUS_ACTIONS, getStatusLabel, getLeadTypeLabel } from "@/lib/admin-constants";
import StatusBadge from "@/components/admin/StatusBadge";
import LeadTypeBadge from "@/components/admin/LeadTypeBadge";
import AdminBreadcrumb from "@/components/admin/AdminBreadcrumb";

export default function AdminProjetDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const [projet, setProjet] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [noteDraft, setNoteDraft] = useState("");
  const [savingNote, setSavingNote] = useState(false);
  const [auditLog, setAuditLog] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const [data, log] = await Promise.all([
          fetchAdminProjectRequest(id),
          fetchProjectAuditLog(id),
        ]);
        setProjet(data.project_request);
        setNoteDraft(data.project_request?.admin_note || "");
        setAuditLog(log.logs || []);
      } catch {}
      setLoading(false);
    })();
  }, [id]);

  async function handleDelete() {
    if (!confirm(`Supprimer définitivement ce lead ?\n\n${projet.title}\n${projet.client_name} · ${projet.client_email}\n\nAction IRRÉVERSIBLE.`)) return;
    setUpdating(true);
    try {
      await deleteAdminProject(id);
      router.push("/dashboard/admin/projets");
    } catch (e: any) {
      alert("Erreur : " + (e?.message || "suppression échouée"));
    }
    setUpdating(false);
  }

  async function handleRequestVerification() {
    if (!projet.client_email) {
      alert("Ce lead n'a pas d'email client.");
      return;
    }
    if (!confirm(`Envoyer un email de confirmation à ${projet.client_email} ?`)) return;
    setUpdating(true);
    try {
      await requestVerificationEmail(id);
      const data = await fetchAdminProjectRequest(id);
      setProjet(data.project_request);
      alert("Email envoyé !");
    } catch (e: any) {
      alert("Erreur : " + (e?.message || "envoi échoué"));
    }
    setUpdating(false);
  }

  async function handleSaveNote() {
    setSavingNote(true);
    try {
      const data = await updateAdminProjectNote(id, { admin_note: noteDraft });
      setProjet(data.project_request);
    } catch (e: any) {
      alert("Erreur : " + (e?.message || "sauvegarde échouée"));
    }
    setSavingNote(false);
  }

  async function handleMarkInvalid() {
    const note = prompt("Raison pour marquer ce lead comme invalide ?", noteDraft || "");
    if (note === null) return;
    setUpdating(true);
    try {
      const data = await updateAdminProjectNote(id, { status: "invalid", admin_note: note });
      setProjet(data.project_request);
      setNoteDraft(note);
    } catch (e: any) {
      alert("Erreur : " + (e?.message || "maj échouée"));
    }
    setUpdating(false);
  }

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
      <AdminBreadcrumb
        items={[
          { label: "Admin", href: "/dashboard/admin" },
          { label: "Projets", href: "/dashboard/admin/projets" },
          { label: projet.client_name || projet.title },
        ]}
      />

      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <StatusBadge status={projet.status} />
            <LeadTypeBadge leadType={projet.lead_type} />
            <span className="text-xs text-stone-400">{projet.project_type}</span>
            <span className="text-xs text-stone-400">
              · Source : {projet.source || "website"}
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

      {/* Actions admin (moderation) */}
      <Card className="mt-6 border-amber-200 bg-amber-50/30">
        <CardContent className="pt-5">
          <h3 className="font-semibold text-stone-900 mb-1 flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-[#b5522a]" /> Modération du lead
          </h3>
          <p className="text-xs text-stone-500 mb-4">
            Actions réservées à l&apos;admin. Ne sont pas visibles par le client ou les architectes.
          </p>
          <div className="flex flex-wrap gap-2">
            <Button
              size="sm"
              variant="outline"
              className="border-blue-300 text-blue-700 hover:bg-blue-50"
              onClick={handleRequestVerification}
              disabled={updating || !projet.client_email}
            >
              <Mail className="h-4 w-4 mr-1" /> Demander confirmation au client
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-stone-300 text-stone-700"
              onClick={handleMarkInvalid}
              disabled={updating}
            >
              <AlertTriangle className="h-4 w-4 mr-1" /> Marquer invalide
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-red-300 text-red-700 hover:bg-red-50 ml-auto"
              onClick={handleDelete}
              disabled={updating}
            >
              <Trash2 className="h-4 w-4 mr-1" /> Supprimer définitivement
            </Button>
          </div>

          {/* Vérification client — historique */}
          {(projet.verification_sent_at || projet.verification_responded_at) && (
            <div className="mt-5 pt-5 border-t border-amber-200">
              <p className="text-sm font-medium text-stone-900 mb-2">Historique de vérification</p>
              <ul className="text-sm text-stone-600 space-y-1">
                {projet.verification_sent_at && (
                  <li className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-blue-600" />
                    Email envoyé le{" "}
                    {new Date(projet.verification_sent_at).toLocaleString("fr-FR")}
                  </li>
                )}
                {projet.verification_responded_at ? (
                  <li className="flex items-center gap-2 text-green-700 font-medium">
                    <ShieldCheck className="h-4 w-4" />
                    Client a confirmé le{" "}
                    {new Date(projet.verification_responded_at).toLocaleString("fr-FR")}
                  </li>
                ) : projet.verification_sent_at ? (
                  <li className="flex items-center gap-2 text-amber-700">
                    <Clock className="h-4 w-4" /> En attente de réponse du client
                  </li>
                ) : null}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Admin note */}
      <Card className="mt-6">
        <CardContent className="pt-5">
          <h3 className="font-semibold text-stone-900 mb-1 flex items-center gap-2">
            <StickyNote className="h-4 w-4 text-amber-600" /> Note interne
          </h3>
          <p className="text-xs text-stone-500 mb-3">
            Visible uniquement par l&apos;admin. Ex: &quot;Email suspect yopmail&quot;, &quot;Client rappelé le 17/04&quot;...
          </p>
          <textarea
            value={noteDraft}
            onChange={(e) => setNoteDraft(e.target.value)}
            rows={4}
            maxLength={2000}
            placeholder="Écrire une note sur ce lead..."
            className="w-full border border-stone-200 rounded-lg p-3 text-sm focus:border-[#b5522a] focus:outline-none focus:ring-1 focus:ring-[#b5522a]"
          />
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs text-stone-400">{noteDraft.length}/2000</span>
            <Button
              size="sm"
              onClick={handleSaveNote}
              disabled={savingNote || noteDraft === (projet.admin_note || "")}
            >
              {savingNote ? "Enregistrement..." : "Enregistrer la note"}
            </Button>
          </div>
        </CardContent>
      </Card>

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

      {/* Audit log / Historique */}
      {auditLog.length > 0 && (
        <Card className="mt-6">
          <CardContent className="pt-5">
            <h3 className="font-semibold text-stone-900 mb-3 flex items-center gap-2">
              <Clock className="h-4 w-4 text-stone-500" /> Historique des actions admin
            </h3>
            <ul className="space-y-2.5">
              {auditLog.map((log) => {
                const actionLabel: Record<string, string> = {
                  delete: "🗑️ Suppression",
                  verify_request: "✉️ Email de vérification envoyé",
                  note_update: "📝 Note / statut modifié",
                  status_change: "🔄 Statut changé",
                  approve: "✅ Approuvé",
                  reject: "❌ Rejeté",
                };
                return (
                  <li
                    key={log.id}
                    className="flex items-start gap-3 pb-2.5 border-b border-stone-100 last:border-0 last:pb-0 text-sm"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-stone-800">
                        {actionLabel[log.action] || log.action}
                      </p>
                      <p className="text-xs text-stone-500">
                        Par {log.actor_email} ·{" "}
                        {new Date(log.created_at).toLocaleString("fr-FR")}
                      </p>
                      {log.diff?.after?.status && (
                        <p className="text-xs text-stone-600 mt-1">
                          → Nouveau statut : <strong>{log.diff.after.status}</strong>
                        </p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
