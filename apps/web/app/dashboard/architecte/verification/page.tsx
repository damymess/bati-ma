"use client";

import { useEffect, useState } from "react";
import { ShieldCheck, Upload, Clock, X, AlertCircle, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getToken } from "@/lib/auth";

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:9000";

type DocumentType = "patente" | "oam" | "cnss" | "assurance" | "cin" | "rc";

type DocStatus = {
  type: DocumentType;
  label: string;
  status: "missing" | "pending" | "approved" | "rejected";
  document_url: string | null;
  admin_note: string | null;
  expires_at: string | null;
};

const STATUS_MAP = {
  missing: { label: "À fournir", color: "bg-stone-100 text-stone-600", Icon: Upload },
  pending: { label: "En cours de vérification", color: "bg-yellow-50 text-yellow-700", Icon: Clock },
  approved: { label: "Vérifié", color: "bg-green-50 text-green-700", Icon: Check },
  rejected: { label: "Refusé", color: "bg-red-50 text-red-700", Icon: X },
};

export default function VerificationPage() {
  const [docs, setDocs] = useState<DocStatus[]>([]);
  const [globalStatus, setGlobalStatus] = useState<string>("incomplete");
  const [loading, setLoading] = useState(true);
  const [uploadingType, setUploadingType] = useState<DocumentType | null>(null);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/store/verifications/my`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      const data = await res.json();
      if (res.ok) {
        setDocs(data.documents || []);
        setGlobalStatus(data.global_status);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleUpload(type: DocumentType, file: File) {
    setUploadingType(type);
    try {
      // Upload via l'endpoint existant /store/architects/portfolio
      const formData = new FormData();
      formData.append("file", file);
      const uploadRes = await fetch(`${API_BASE}/store/architects/portfolio/upload`, {
        method: "POST",
        headers: { Authorization: `Bearer ${getToken()}` },
        body: formData,
      });
      const uploadData = await uploadRes.json();
      if (!uploadRes.ok || !uploadData.url) {
        alert("Erreur upload : " + (uploadData.message || "inconnue"));
        return;
      }

      // Créer l'enregistrement de vérification
      const res = await fetch(`${API_BASE}/store/verifications`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify({ document_type: type, document_url: uploadData.url }),
      });
      if (res.ok) {
        await load();
      } else {
        const err = await res.json();
        alert("Erreur : " + (err.message || "inconnue"));
      }
    } finally {
      setUploadingType(null);
    }
  }

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-20 bg-stone-100 rounded-xl animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-bold text-stone-900 mb-1">Vérification de votre cabinet</h2>
      <p className="text-sm text-stone-500 mb-6">
        Obtenez le badge « Vérifié bati.ma » en fournissant ces documents. Les clients font 3x
        plus confiance aux architectes vérifiés.
      </p>

      {/* Statut global */}
      {globalStatus === "verified" ? (
        <Card className="mb-6 border-green-200 bg-green-50">
          <CardContent className="pt-5 flex items-center gap-3">
            <ShieldCheck className="h-8 w-8 text-green-600" />
            <div>
              <p className="font-semibold text-stone-900">Vous êtes vérifié !</p>
              <p className="text-xs text-stone-600">
                Le badge « Vérifié bati.ma » est affiché sur votre profil public.
              </p>
            </div>
          </CardContent>
        </Card>
      ) : globalStatus === "pending" ? (
        <Card className="mb-6 border-yellow-200 bg-yellow-50">
          <CardContent className="pt-5 flex items-center gap-3">
            <Clock className="h-8 w-8 text-yellow-600" />
            <div>
              <p className="font-semibold text-stone-900">Vérification en cours</p>
              <p className="text-xs text-stone-600">
                Nos équipes examinent vos documents. Délai moyen : 48h ouvrées.
              </p>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="mb-6 border-orange-200 bg-orange-50">
          <CardContent className="pt-5 flex items-center gap-3">
            <AlertCircle className="h-8 w-8 text-[#b5522a]" />
            <div>
              <p className="font-semibold text-stone-900">Obtenir le badge Vérifié</p>
              <p className="text-xs text-stone-600">
                Fournissez les 4 documents obligatoires (patente, OAM, CNSS, assurance) pour
                débloquer le badge.
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Documents */}
      <div className="space-y-3">
        {docs.map((doc) => {
          const statusConfig = STATUS_MAP[doc.status];
          const StatusIcon = statusConfig.Icon;
          const required = ["patente", "oam", "cnss", "assurance"].includes(doc.type);

          return (
            <Card key={doc.type}>
              <CardContent className="pt-5">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-stone-900 text-sm">{doc.label}</span>
                      {required && (
                        <span className="text-xs text-red-600 font-medium">Obligatoire</span>
                      )}
                    </div>
                    <Badge className={`${statusConfig.color} text-xs gap-1`}>
                      <StatusIcon className="h-3 w-3" />
                      {statusConfig.label}
                    </Badge>
                    {doc.admin_note && doc.status === "rejected" && (
                      <p className="text-xs text-red-600 mt-2">Note : {doc.admin_note}</p>
                    )}
                    {doc.expires_at && (
                      <p className="text-xs text-stone-400 mt-1">
                        Expire le {new Date(doc.expires_at).toLocaleDateString("fr-MA")}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="inline-block">
                      <input
                        type="file"
                        accept="image/*,.pdf"
                        className="hidden"
                        disabled={uploadingType === doc.type}
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleUpload(doc.type, file);
                        }}
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full pointer-events-none"
                        asChild
                      >
                        <span>
                          {uploadingType === doc.type
                            ? "Upload..."
                            : doc.status === "missing"
                              ? "Téléverser"
                              : "Remplacer"}
                        </span>
                      </Button>
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <p className="text-xs text-stone-400 mt-6 text-center">
        Vos documents sont confidentiels et ne sont visibles que par l&apos;équipe de modération
        bati.ma.
      </p>
    </div>
  );
}
