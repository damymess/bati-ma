"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FolderOpen, Clock, CheckCircle2, Eye, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { fetchAdminProjectRequests } from "@/lib/api";

const STATS_CONFIG = [
  { key: "submitted", label: "En attente", icon: Clock, color: "text-blue-600 bg-blue-50" },
  { key: "viewed", label: "Vues", icon: Eye, color: "text-amber-600 bg-amber-50" },
  { key: "quoted", label: "Devis envoyé", icon: AlertCircle, color: "text-purple-600 bg-purple-50" },
  { key: "accepted", label: "Acceptés", icon: CheckCircle2, color: "text-emerald-600 bg-emerald-50" },
];

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<Record<string, number>>({});
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchAdminProjectRequests({ limit: 200 });
        const counts: Record<string, number> = {};
        for (const r of data.project_requests) {
          counts[r.status] = (counts[r.status] || 0) + 1;
        }
        setStats(counts);
        setTotal(data.project_requests.length);
      } catch {}
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2].map((i) => (
          <div key={i} className="h-24 rounded-xl bg-stone-100 animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-bold text-stone-900">Dashboard Admin</h2>
        <p className="text-sm text-stone-500">{total} projet{total > 1 ? "s" : ""} au total</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {STATS_CONFIG.map((s) => {
          const Icon = s.icon;
          return (
            <Card key={s.key}>
              <CardContent className="pt-5">
                <div className={`inline-flex p-2 rounded-lg ${s.color} mb-2`}>
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-2xl font-bold text-stone-900">{stats[s.key] || 0}</p>
                <p className="text-xs text-stone-500">{s.label}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Link
        href="/dashboard/admin/projets"
        className="inline-flex items-center gap-2 rounded-lg bg-[#b5522a] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#9a4523] transition-colors"
      >
        <FolderOpen className="h-4 w-4" />
        Voir tous les projets
      </Link>
    </div>
  );
}
