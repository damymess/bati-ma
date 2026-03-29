"use client";

import Link from "next/link";
import { FolderOpen, Eye, MessageSquare, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/components/AuthProvider";

export default function ArchitecteDashboard() {
  const { user } = useAuth();

  const stats = [
    { label: "Projets reçus", value: "0", icon: FolderOpen, color: "text-blue-600 bg-blue-50" },
    { label: "Vues du profil", value: "0", icon: Eye, color: "text-emerald-600 bg-emerald-50" },
    { label: "Messages forum", value: "0", icon: MessageSquare, color: "text-purple-600 bg-purple-50" },
    { label: "Note moyenne", value: "—", icon: Star, color: "text-amber-600 bg-amber-50" },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold text-stone-900 mb-1">
        Bienvenue, {user?.first_name} !
      </h2>
      <p className="text-sm text-stone-500 mb-6">
        Voici un aperçu de votre activité sur Bati.ma
      </p>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <Card key={s.label}>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${s.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-stone-900">{s.value}</p>
                    <p className="text-xs text-stone-500">{s.label}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick actions */}
      <h3 className="text-sm font-semibold text-stone-900 mb-3">Actions rapides</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <Button variant="outline" className="justify-start rounded-lg h-auto py-3" asChild>
          <Link href="/dashboard/architecte/profil">
            Compléter mon profil & portfolio
          </Link>
        </Button>
        <Button variant="outline" className="justify-start rounded-lg h-auto py-3" asChild>
          <Link href="/dashboard/architecte/projets">
            Voir les projets disponibles
          </Link>
        </Button>
        <Button variant="outline" className="justify-start rounded-lg h-auto py-3" asChild>
          <Link href="/forum">
            Participer au forum
          </Link>
        </Button>
      </div>
    </div>
  );
}
