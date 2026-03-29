"use client";

import { FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ArchitecteProjetsPage() {
  // TODO: fetch projects from API matching architect's city/specialties

  return (
    <div>
      <h2 className="text-xl font-bold text-stone-900 mb-1">Projets reçus</h2>
      <p className="text-sm text-stone-500 mb-6">
        Projets publiés par des particuliers qui correspondent à votre profil
      </p>

      <div className="text-center py-16 rounded-xl border border-dashed border-stone-300">
        <FolderOpen className="h-12 w-12 text-stone-300 mx-auto mb-3" />
        <p className="text-sm text-stone-500 mb-1">
          Aucun projet disponible pour le moment
        </p>
        <p className="text-xs text-stone-400 mb-4">
          Complétez votre profil pour recevoir des projets correspondant à vos spécialités
        </p>
        <div className="flex justify-center gap-3">
          <Button variant="outline" size="sm" className="rounded-full" asChild>
            <Link href="/dashboard/architecte/profil">
              Compléter mon profil
            </Link>
          </Button>
          <Button size="sm" className="rounded-full" asChild>
            <Link href="/projets">
              Voir la marketplace
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
