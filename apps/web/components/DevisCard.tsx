"use client";

import Link from "next/link";
import { MapPin, Calendar, Wallet, Lock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { DemandeDevis } from "@/lib/api";
import { formatBudget, timeAgo } from "@/lib/format";

export default function DevisCard({ demande }: { demande: DemandeDevis }) {
  return (
    <Link href={`/demandes-devis/${demande.id}`}>
      <Card className="hover:shadow-md transition-shadow cursor-pointer group">
        <CardContent className="pt-5">
          <div className="flex items-start justify-between gap-3 mb-3">
            <div>
              <Badge className="bg-stone-100 text-stone-600 font-normal text-xs mb-2">
                {demande.project_type}
              </Badge>
              <h3 className="font-semibold text-stone-900 group-hover:text-[#b5522a] transition-colors">
                {demande.title}
              </h3>
            </div>
            {demande.contact_locked && (
              <Lock className="h-4 w-4 text-stone-400 shrink-0 mt-1" />
            )}
          </div>

          <p className="text-sm text-stone-500 line-clamp-2 mb-4">
            {demande.description}
          </p>

          <div className="flex flex-wrap gap-3 text-xs text-stone-500">
            <span className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              {demande.location}
            </span>
            <span className="flex items-center gap-1">
              <Wallet className="h-3.5 w-3.5" />
              {formatBudget(demande.budget_min, demande.budget_max, true)}
            </span>
            {demande.created_at && (
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {timeAgo(demande.created_at)}
              </span>
            )}
          </div>

          <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
            {demande.contact_locked ? (
              <span className="text-xs text-stone-400 flex items-center gap-1">
                <Lock className="h-3 w-3" /> Connectez-vous pour voir les coordonnées
              </span>
            ) : (
              <span className="text-xs text-green-600 font-medium">
                Coordonnées disponibles
              </span>
            )}
            <ArrowRight className="h-4 w-4 text-stone-300 group-hover:text-[#b5522a] transition-colors" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
