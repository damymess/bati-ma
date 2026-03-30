"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FolderOpen, FileText, Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/components/AuthProvider";
import { fetchClientProjets } from "@/lib/auth";

export default function ClientDashboard() {
  const { user } = useAuth();
  const [projetsCount, setProjetsCount] = useState(0);
  const [devisCount, setDevisCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const projets = await fetchClientProjets();
        setProjetsCount(projets.length);
        setDevisCount(projets.filter((p: any) => p.architect_response).length);
      } catch {}
      setLoading(false);
    };
    load();
  }, []);

  const stats = [
    { label: "Projets publiés", value: loading ? "..." : String(projetsCount), icon: FolderOpen, color: "text-blue-600 bg-blue-50" },
    { label: "Devis reçus", value: loading ? "..." : String(devisCount), icon: FileText, color: "text-emerald-600 bg-emerald-50" },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold text-stone-900 mb-1">
        Bienvenue, {user?.first_name} !
      </h2>
      <p className="text-sm text-stone-500 mb-6">
        Publiez vos projets et recevez des devis d&apos;architectes qualifiés
      </p>

      <div className="grid grid-cols-2 gap-4 mb-8">
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

      <Button className="rounded-full" asChild>
        <Link href="/demande-devis">
          <Plus className="mr-2 h-4 w-4" />
          Publier une demande de devis
        </Link>
      </Button>
    </div>
  );
}
