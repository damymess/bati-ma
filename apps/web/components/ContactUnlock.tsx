"use client";

import { useState } from "react";
import Link from "next/link";
import { Lock, Unlock, Phone, Mail, User, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { unlockContact, type DemandeDevis } from "@/lib/api";
import { getToken, isLoggedIn } from "@/lib/auth";

type Props = {
  demande: DemandeDevis;
  subscriptionTier: string | null;
  alreadyUnlocked: boolean;
  canUnlock: boolean;
};

export default function ContactUnlock({ demande, subscriptionTier, alreadyUnlocked, canUnlock }: Props) {
  const [contact, setContact] = useState<{
    client_name: string;
    client_email: string;
    client_phone: string | null;
  } | null>(
    alreadyUnlocked && !demande.contact_locked
      ? { client_name: demande.client_name ?? "", client_email: demande.client_email ?? "", client_phone: demande.client_phone || null }
      : null
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleUnlock = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = getToken();
      if (!token) return;
      const result = await unlockContact(demande.id, token);
      setContact(result);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  // Already unlocked — show contact info
  if (contact) {
    return (
      <Card className="border-green-200 bg-green-50">
        <CardContent className="pt-5">
          <div className="flex items-center gap-2 mb-3">
            <Unlock className="h-4 w-4 text-green-600" />
            <span className="text-sm font-semibold text-green-800">Coordonnées du client</span>
          </div>
          <div className="space-y-2.5">
            <div className="flex items-center gap-2 text-sm text-stone-700">
              <User className="h-4 w-4 text-stone-400" />
              <span className="font-medium">{contact.client_name}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-stone-700">
              <Mail className="h-4 w-4 text-stone-400" />
              <a href={`mailto:${contact.client_email}`} className="text-[#b5522a] hover:underline">
                {contact.client_email}
              </a>
            </div>
            {contact.client_phone && (
              <div className="flex items-center gap-2 text-sm text-stone-700">
                <Phone className="h-4 w-4 text-stone-400" />
                <a href={`tel:${contact.client_phone}`} className="text-[#b5522a] hover:underline">
                  {contact.client_phone}
                </a>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    );
  }

  // Not logged in
  if (!isLoggedIn()) {
    return (
      <Card className="border-stone-200 bg-stone-50">
        <CardContent className="pt-5 text-center">
          <Lock className="h-8 w-8 text-stone-300 mx-auto mb-3" />
          <h3 className="font-semibold text-stone-900 mb-1">Coordonnées verrouillées</h3>
          <p className="text-sm text-stone-500 mb-4">
            Connectez-vous en tant qu&apos;architecte pour accéder aux coordonnées
          </p>
          <Button className="rounded-full" asChild>
            <Link href="/connexion">Se connecter</Link>
          </Button>
        </CardContent>
      </Card>
    );
  }

  // Free tier
  if (subscriptionTier === "free" || !subscriptionTier) {
    return (
      <Card className="border-amber-200 bg-amber-50">
        <CardContent className="pt-5 text-center">
          <Crown className="h-8 w-8 text-amber-500 mx-auto mb-3" />
          <h3 className="font-semibold text-stone-900 mb-1">Abonnement requis</h3>
          <p className="text-sm text-stone-500 mb-4">
            Passez au plan Standard ou Premium pour accéder aux coordonnées des clients
          </p>
          <Button className="rounded-full bg-amber-600 hover:bg-amber-700" asChild>
            <Link href="/dashboard/architecte/abonnement">
              <Crown className="mr-1 h-4 w-4" /> Voir les plans
            </Link>
          </Button>
        </CardContent>
      </Card>
    );
  }

  // Can unlock
  if (canUnlock) {
    return (
      <Card className="border-[#b5522a]/30 bg-orange-50">
        <CardContent className="pt-5 text-center">
          <Lock className="h-8 w-8 text-[#b5522a] mx-auto mb-3" />
          <h3 className="font-semibold text-stone-900 mb-1">Débloquer les coordonnées</h3>
          <p className="text-sm text-stone-500 mb-4">
            {subscriptionTier === "premium"
              ? "Accès illimité avec votre plan Premium"
              : "1 crédit sera utilisé sur votre quota mensuel"}
          </p>
          {error && <p className="text-sm text-red-500 mb-3">{error}</p>}
          <Button
            onClick={handleUnlock}
            disabled={loading}
            className="rounded-full"
          >
            <Unlock className="mr-1 h-4 w-4" />
            {loading ? "Déblocage..." : "Voir les coordonnées"}
          </Button>
        </CardContent>
      </Card>
    );
  }

  // Limit reached
  return (
    <Card className="border-red-200 bg-red-50">
      <CardContent className="pt-5 text-center">
        <Lock className="h-8 w-8 text-red-400 mx-auto mb-3" />
        <h3 className="font-semibold text-stone-900 mb-1">Limite atteinte</h3>
        <p className="text-sm text-stone-500 mb-4">
          Vous avez utilisé tous vos crédits ce mois-ci. Passez au plan Premium pour un accès illimité.
        </p>
        <Button className="rounded-full bg-amber-600 hover:bg-amber-700" asChild>
          <Link href="/dashboard/architecte/abonnement">
            <Crown className="mr-1 h-4 w-4" /> Passer au Premium
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
