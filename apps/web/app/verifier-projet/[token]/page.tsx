"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Check, AlertCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { fetchProjectByToken, submitProjectVerification } from "@/lib/api";

const TIMING_OPTIONS = [
  { value: "1-3mois", label: "1 à 3 mois" },
  { value: "3-6mois", label: "3 à 6 mois" },
  { value: "6-12mois", label: "6 à 12 mois" },
  { value: "+12mois", label: "Plus de 12 mois" },
  { value: "curieux", label: "Juste curieux" },
];

const FINANCING_OPTIONS = [
  { value: "cash", label: "Cash / Fonds propres" },
  { value: "credit", label: "Crédit bancaire" },
  { value: "mre", label: "Transfert MRE" },
  { value: "undecided", label: "À définir" },
];

type Project = {
  id: string;
  title: string;
  description: string;
  client_name: string;
  client_email: string;
  client_phone: string | null;
  location: string;
  project_type: string;
  budget_min: number | null;
  budget_max: number | null;
  timeline: string | null;
};

export default function VerifierProjetPage() {
  const params = useParams();
  const token = params.token as string;

  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Form fields (pré-remplis après fetch)
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [description, setDescription] = useState("");
  const [budgetMin, setBudgetMin] = useState<string>("");
  const [budgetMax, setBudgetMax] = useState<string>("");
  const [timeline, setTimeline] = useState("");
  const [financing, setFinancing] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const result = await fetchProjectByToken(token);
        if ("message" in result) {
          setError(result.message);
        } else {
          setProject(result.project);
          setClientName(result.project.client_name || "");
          setClientPhone(result.project.client_phone || "");
          setDescription(result.project.description || "");
          setBudgetMin(result.project.budget_min ? String(result.project.budget_min) : "");
          setBudgetMax(result.project.budget_max ? String(result.project.budget_max) : "");
          setTimeline(result.project.timeline || "");
        }
      } catch {
        setError("Erreur réseau. Veuillez réessayer.");
      } finally {
        setLoading(false);
      }
    })();
  }, [token]);

  async function handleSubmit() {
    if (!project) return;
    setSubmitting(true);
    setError(null);
    try {
      const result = await submitProjectVerification(token, {
        client_name: clientName,
        client_phone: clientPhone,
        description,
        budget_min: budgetMin ? Number(budgetMin) : null,
        budget_max: budgetMax ? Number(budgetMax) : null,
        timeline,
        financing,
      });
      if ("message" in result && !("success" in result)) {
        setError((result as any).message);
      } else {
        setSubmitted(true);
      }
    } catch {
      setError("Erreur lors de la soumission.");
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto py-16 px-4">
        <div className="h-64 rounded-xl bg-stone-100 animate-pulse" />
      </div>
    );
  }

  if (error && !project) {
    return (
      <div className="max-w-2xl mx-auto py-16 px-4">
        <Card className="border-red-200">
          <CardContent className="pt-8 text-center">
            <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-3" />
            <h1 className="text-xl font-bold text-stone-900 mb-2">Lien invalide</h1>
            <p className="text-sm text-stone-600 mb-6">{error}</p>
            <Link href="/demande-devis">
              <Button className="bg-[#b5522a] hover:bg-[#a0441f] rounded-full">
                Faire une nouvelle demande
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto py-16 px-4">
        <Card className="border-green-200 bg-green-50">
          <CardContent className="pt-8 text-center">
            <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center mx-auto mb-4">
              <Check className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-stone-900 mb-2">Merci !</h1>
            <p className="text-sm text-stone-700 mb-6">
              Vos informations ont bien été enregistrées. Nous transmettons votre demande à des architectes vérifiés à {project?.location}.
            </p>
            <p className="text-xs text-stone-500 mb-6">
              Vous recevrez des devis sous 24-48h par email et téléphone.
            </p>
            <Link href="/">
              <Button variant="outline" className="rounded-full">
                Retour à l&apos;accueil
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!project) return null;

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <div className="mb-6 text-center">
        <div className="inline-flex items-center gap-2 bg-[#b5522a]/10 text-[#b5522a] px-3 py-1 rounded-full text-xs font-medium mb-3">
          <ShieldCheck className="h-3.5 w-3.5" />
          Vérification de votre demande
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-2">
          Confirmez vos informations
        </h1>
        <p className="text-sm text-stone-600 max-w-lg mx-auto">
          Nous avons besoin de vérifier quelques informations pour que les architectes puissent vous contacter. Modifiez si nécessaire, puis validez.
        </p>
      </div>

      <Card>
        <CardContent className="pt-6 space-y-5">
          {/* Infos projet (lecture seule) */}
          <div className="bg-stone-50 border border-stone-200 rounded-lg p-4 text-sm">
            <p className="text-xs text-stone-500 uppercase tracking-wider mb-2">Votre projet</p>
            <p className="font-medium text-stone-900">{project.title}</p>
            <p className="text-stone-600 mt-1">
              {project.project_type} · {project.location}
            </p>
          </div>

          {/* Nom */}
          <div>
            <label className="text-sm font-medium text-stone-700 mb-1.5 block">
              Votre nom / prénom
            </label>
            <Input
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="h-12"
              required
            />
          </div>

          {/* Email (read-only) */}
          <div>
            <label className="text-sm font-medium text-stone-700 mb-1.5 block">
              Email (non modifiable)
            </label>
            <Input
              value={project.client_email}
              disabled
              className="h-12 bg-stone-50 text-stone-500"
            />
          </div>

          {/* Téléphone */}
          <div>
            <label className="text-sm font-medium text-stone-700 mb-1.5 block">
              Téléphone (pour être contacté)
            </label>
            <Input
              type="tel"
              value={clientPhone}
              onChange={(e) => setClientPhone(e.target.value)}
              placeholder="06 12 34 56 78"
              className="h-12"
            />
          </div>

          {/* Budget */}
          <div>
            <label className="text-sm font-medium text-stone-700 mb-1.5 block">
              Budget (en MAD)
            </label>
            <div className="flex gap-2">
              <Input
                type="number"
                value={budgetMin}
                onChange={(e) => setBudgetMin(e.target.value)}
                placeholder="Minimum"
                className="h-12"
              />
              <Input
                type="number"
                value={budgetMax}
                onChange={(e) => setBudgetMax(e.target.value)}
                placeholder="Maximum"
                className="h-12"
              />
            </div>
          </div>

          {/* Timing */}
          <div>
            <label className="text-sm font-medium text-stone-700 mb-1.5 block">
              Quand démarrez-vous ?
            </label>
            <div className="grid grid-cols-2 gap-2">
              {TIMING_OPTIONS.map((t) => (
                <button
                  key={t.value}
                  type="button"
                  onClick={() => setTimeline(t.value)}
                  className={`text-sm px-3 py-2.5 rounded-lg border transition ${
                    timeline === t.value
                      ? "border-[#b5522a] bg-[#b5522a] text-white"
                      : "border-stone-200 bg-white text-stone-700 hover:border-[#b5522a]/40"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Financing */}
          <div>
            <label className="text-sm font-medium text-stone-700 mb-1.5 block">
              Mode de financement (optionnel)
            </label>
            <div className="grid grid-cols-2 gap-2">
              {FINANCING_OPTIONS.map((f) => (
                <button
                  key={f.value}
                  type="button"
                  onClick={() => setFinancing(f.value)}
                  className={`text-sm px-3 py-2 rounded-lg border transition ${
                    financing === f.value
                      ? "border-[#b5522a] bg-[#b5522a]/10 text-[#b5522a]"
                      : "border-stone-200 bg-white text-stone-700 hover:border-[#b5522a]/40"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="text-sm font-medium text-stone-700 mb-1.5 block">
              Description du projet (optionnel)
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              maxLength={2000}
              placeholder="Détails supplémentaires..."
              className="w-full border border-stone-200 rounded-lg p-3 text-sm focus:border-[#b5522a] focus:outline-none focus:ring-1 focus:ring-[#b5522a]"
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-600">
              {error}
            </div>
          )}

          <Button
            onClick={handleSubmit}
            disabled={submitting || !clientName.trim()}
            size="lg"
            className="w-full h-12 rounded-xl bg-[#b5522a] hover:bg-[#a0441f]"
          >
            {submitting ? "Envoi..." : "Confirmer mes informations"}
          </Button>
          <p className="text-xs text-stone-400 text-center">
            Vos données restent confidentielles. Elles ne seront partagées qu&apos;avec les architectes que vous contactez.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
