"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MapPin, Wallet, Calendar, Clock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ContactUnlock from "@/components/ContactUnlock";
import { fetchDemandeDevis, type DemandeDevis } from "@/lib/api";
import { getToken } from "@/lib/auth";
import { formatBudget } from "@/lib/format";

export default function DemandeDevisDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [demande, setDemande] = useState<DemandeDevis | null>(null);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [tier, setTier] = useState<string | null>(null);
  const [alreadyUnlocked, setAlreadyUnlocked] = useState(false);
  const [canUnlock, setCanUnlock] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        const token = getToken();
        const data = await fetchDemandeDevis(id, token);
        if (!cancelled && data) {
          setDemande(data.demande);
          setTier(data.subscription_tier);
          setAlreadyUnlocked(data.already_unlocked);
          setCanUnlock(data.can_unlock);
        }
      } catch {
        if (!cancelled) setFetchError("Impossible de charger cette demande.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    load();
    return () => { cancelled = true; };
  }, [id]);

  if (loading) {
    return (
      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-2xl space-y-4">
          <div className="h-8 w-48 rounded bg-stone-100 animate-pulse" />
          <div className="h-64 rounded-xl bg-stone-100 animate-pulse" />
          <div className="h-40 rounded-xl bg-stone-100 animate-pulse" />
        </div>
      </section>
    );
  }

  if (!demande) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-xl font-bold text-stone-900">Demande non trouvée</h1>
          <Button variant="outline" className="mt-4 rounded-full" asChild>
            <Link href="/demandes-devis">Retour aux demandes</Link>
          </Button>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Header */}
      <section className="bg-stone-950 px-4 py-8 sm:px-6">
        <div className="mx-auto max-w-2xl">
          <Link href="/demandes-devis" className="inline-flex items-center text-sm text-stone-400 hover:text-white mb-4">
            <ArrowLeft className="mr-1 h-4 w-4" /> Retour aux demandes
          </Link>
          <Badge className="bg-stone-800 text-stone-300 text-xs mb-2">
            {demande.project_type}
          </Badge>
          <h1 className="text-2xl font-bold text-white">{demande.title}</h1>
          <div className="mt-3 flex flex-wrap gap-3 text-sm text-stone-400">
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" /> {demande.location}
            </span>
            <span className="flex items-center gap-1">
              <Wallet className="h-4 w-4" /> {formatBudget(demande.budget_min, demande.budget_max)}
            </span>
            {demande.created_at && (
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(demande.created_at).toLocaleDateString("fr-FR", {
                  day: "numeric", month: "long", year: "numeric",
                })}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 py-8 sm:px-6">
        <div className="mx-auto max-w-2xl space-y-6">
          {/* Description */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <FileText className="h-4 w-4 text-stone-400" />
                Description du projet
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-stone-600 whitespace-pre-wrap leading-relaxed">
                {demande.description}
              </p>
            </CardContent>
          </Card>

          {/* Details */}
          <Card>
            <CardContent className="pt-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-xs text-stone-400 uppercase tracking-wider">Type</span>
                  <p className="text-sm font-medium text-stone-700 mt-0.5">{demande.project_type}</p>
                </div>
                <div>
                  <span className="text-xs text-stone-400 uppercase tracking-wider">Ville</span>
                  <p className="text-sm font-medium text-stone-700 mt-0.5">{demande.location}</p>
                </div>
                <div>
                  <span className="text-xs text-stone-400 uppercase tracking-wider">Budget</span>
                  <p className="text-sm font-medium text-stone-700 mt-0.5">
                    {formatBudget(demande.budget_min, demande.budget_max)}
                  </p>
                </div>
                {demande.timeline && (
                  <div>
                    <span className="text-xs text-stone-400 uppercase tracking-wider">Délai</span>
                    <p className="text-sm font-medium text-stone-700 mt-0.5 flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" /> {demande.timeline}
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <ContactUnlock
            demande={demande}
            subscriptionTier={tier}
            alreadyUnlocked={alreadyUnlocked}
            canUnlock={canUnlock}
          />
        </div>
      </section>
    </>
  );
}
