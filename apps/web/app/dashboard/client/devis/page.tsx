"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FileText, MapPin, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fetchClientProjets } from "@/lib/auth";

export default function ClientDevisPage() {
  const [devis, setDevis] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const projets = await fetchClientProjets();
        setDevis(projets.filter((p: any) => p.architect_response || p.proposed_fee));
      } catch {}
      setLoading(false);
    };
    load();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold text-stone-900 mb-1">Devis reçus</h2>
      <p className="text-sm text-stone-500 mb-6">
        Réponses des architectes à vos demandes
      </p>

      {loading ? (
        <div className="space-y-4">
          {[1, 2].map((i) => (
            <div key={i} className="h-28 rounded-xl bg-stone-100 animate-pulse" />
          ))}
        </div>
      ) : devis.length === 0 ? (
        <div className="text-center py-16 rounded-xl border border-dashed border-stone-300">
          <FileText className="h-12 w-12 text-stone-300 mx-auto mb-3" />
          <p className="text-sm text-stone-500 mb-1">
            Aucun devis reçu pour le moment
          </p>
          <p className="text-xs text-stone-400 mb-4">
            Publiez une demande de devis pour recevoir des propositions d&apos;architectes
          </p>
          <Button size="sm" className="rounded-full" asChild>
            <Link href="/demande-devis">
              Publier une demande
            </Link>
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          {devis.map((d: any) => (
            <Card key={d.id}>
              <CardContent className="pt-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <Badge className="bg-green-100 text-green-700 text-xs mb-2">
                      Devis reçu
                    </Badge>
                    <h3 className="font-semibold text-stone-900">{d.title}</h3>
                    <div className="flex gap-3 mt-2 text-xs text-stone-400">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" /> {d.location}
                      </span>
                      {d.proposed_fee && (
                        <span className="flex items-center gap-1">
                          <Wallet className="h-3 w-3" /> {d.proposed_fee.toLocaleString("fr-MA")} MAD
                        </span>
                      )}
                    </div>
                    {d.architect_response && (
                      <p className="mt-2 text-sm text-stone-600 bg-stone-50 rounded-lg p-3">
                        {d.architect_response}
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
