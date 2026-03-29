"use client";

import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ArchitecteForumPage() {
  return (
    <div>
      <h2 className="text-xl font-bold text-stone-900 mb-1">Forum</h2>
      <p className="text-sm text-stone-500 mb-6">
        Participez aux discussions de la communauté des architectes marocains
      </p>

      <div className="text-center py-16 rounded-xl border border-dashed border-stone-300">
        <MessageSquare className="h-12 w-12 text-stone-300 mx-auto mb-3" />
        <p className="text-sm text-stone-500 mb-1">
          Vous n&apos;avez pas encore participé au forum
        </p>
        <p className="text-xs text-stone-400 mb-4">
          Posez vos questions, partagez votre expertise et échangez avec vos confrères
        </p>
        <Button size="sm" className="rounded-full" asChild>
          <Link href="/forum">
            Accéder au forum
          </Link>
        </Button>
      </div>
    </div>
  );
}
