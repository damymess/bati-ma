"use client";

import { FolderOpen, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ClientProjetsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-stone-900">Mes projets</h2>
          <p className="text-sm text-stone-500">
            Gérez vos projets publiés sur la marketplace
          </p>
        </div>
        <Button size="sm" className="rounded-full" asChild>
          <Link href="/dashboard/client/projets/nouveau">
            <Plus className="mr-1 h-4 w-4" />
            Nouveau projet
          </Link>
        </Button>
      </div>

      <div className="text-center py-16 rounded-xl border border-dashed border-stone-300">
        <FolderOpen className="h-12 w-12 text-stone-300 mx-auto mb-3" />
        <p className="text-sm text-stone-500 mb-1">
          Vous n&apos;avez pas encore publié de projet
        </p>
        <p className="text-xs text-stone-400 mb-4">
          Décrivez votre projet et recevez des propositions d&apos;architectes qualifiés
        </p>
        <Button size="sm" className="rounded-full" asChild>
          <Link href="/dashboard/client/projets/nouveau">
            Publier mon premier projet
          </Link>
        </Button>
      </div>
    </div>
  );
}
