"use client";

import { useState, useEffect } from "react";
import { FolderOpen, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import DevisCard from "@/components/DevisCard";
import { fetchDemandesDevis, type DemandeDevis } from "@/lib/api";
import { getToken } from "@/lib/auth";

export default function ArchitecteProjetsPage() {
  const [demandes, setDemandes] = useState<DemandeDevis[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const token = getToken();
      const data = await fetchDemandesDevis(undefined, token);
      setDemandes(data.demandes);
      setLoading(false);
    };
    load();
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-stone-900 mb-1">Demandes de devis</h2>
          <p className="text-sm text-stone-500">
            Projets publiés par des particuliers à la recherche d&apos;un architecte
          </p>
        </div>
        <Button variant="outline" size="sm" className="rounded-full" asChild>
          <Link href="/demandes-devis">
            <ExternalLink className="mr-1 h-3.5 w-3.5" /> Voir tout
          </Link>
        </Button>
      </div>

      {loading ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-48 rounded-xl bg-stone-100 animate-pulse" />
          ))}
        </div>
      ) : demandes.length === 0 ? (
        <div className="text-center py-16 rounded-xl border border-dashed border-stone-300">
          <FolderOpen className="h-12 w-12 text-stone-300 mx-auto mb-3" />
          <p className="text-sm text-stone-500 mb-1">
            Aucune demande disponible pour le moment
          </p>
          <p className="text-xs text-stone-400 mb-4">
            Les nouvelles demandes de devis apparaîtront ici
          </p>
          <Button variant="outline" size="sm" className="rounded-full" asChild>
            <Link href="/dashboard/architecte/profil">
              Compléter mon profil
            </Link>
          </Button>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {demandes.slice(0, 6).map((d) => (
            <DevisCard key={d.id} demande={d} />
          ))}
        </div>
      )}
    </div>
  );
}
