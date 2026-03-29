"use client";

import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ClientDevisPage() {
  return (
    <div>
      <h2 className="text-xl font-bold text-stone-900 mb-1">Devis reçus</h2>
      <p className="text-sm text-stone-500 mb-6">
        Réponses des architectes à vos projets
      </p>

      <div className="text-center py-16 rounded-xl border border-dashed border-stone-300">
        <FileText className="h-12 w-12 text-stone-300 mx-auto mb-3" />
        <p className="text-sm text-stone-500 mb-1">
          Aucun devis reçu pour le moment
        </p>
        <p className="text-xs text-stone-400 mb-4">
          Publiez un projet pour recevoir des propositions d&apos;architectes
        </p>
        <Button size="sm" className="rounded-full" asChild>
          <Link href="/dashboard/client/projets/nouveau">
            Publier un projet
          </Link>
        </Button>
      </div>
    </div>
  );
}
