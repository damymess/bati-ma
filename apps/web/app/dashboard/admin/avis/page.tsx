"use client";

import { useEffect, useState } from "react";
import { Star, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getToken } from "@/lib/auth";

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:9000";

type Review = {
  id: string;
  architect_profile_id: string;
  architect_name?: string;
  client_name: string;
  client_email: string;
  rating: number;
  title: string | null;
  comment: string;
  photos: string[];
  status: string;
  is_verified: boolean;
  created_at: string;
};

export default function AdminReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [status, setStatus] = useState<"pending" | "approved" | "rejected">("pending");
  const [loading, setLoading] = useState(true);
  const [acting, setActing] = useState<string | null>(null);

  useEffect(() => {
    load();
  }, [status]);

  async function load() {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/admin/reviews/admin?status=${status}`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      const data = await res.json();
      if (res.ok) setReviews(data.reviews || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function moderate(id: string, action: "approve" | "reject") {
    setActing(id);
    try {
      const adminNote =
        action === "reject" ? prompt("Raison du refus (optionnel) ?") || null : null;
      const res = await fetch(`${API_BASE}/admin/reviews/admin/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify({ action, admin_note: adminNote }),
      });
      if (res.ok) await load();
      else alert("Erreur modération");
    } finally {
      setActing(null);
    }
  }

  return (
    <div>
      <h2 className="text-xl font-bold text-stone-900 mb-1">Modération des avis</h2>
      <p className="text-sm text-stone-500 mb-6">
        Approuvez ou rejetez les avis clients avant publication
      </p>

      {/* Filtres */}
      <div className="inline-flex gap-1 bg-stone-100 rounded-full p-1 mb-6">
        {(["pending", "approved", "rejected"] as const).map((s) => (
          <button
            key={s}
            onClick={() => setStatus(s)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium capitalize transition ${
              status === s ? "bg-white text-stone-900 shadow-sm" : "text-stone-500"
            }`}
          >
            {s === "pending" ? "En attente" : s === "approved" ? "Approuvés" : "Rejetés"}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-40 bg-stone-100 rounded-xl animate-pulse" />
          ))}
        </div>
      ) : reviews.length === 0 ? (
        <p className="text-sm text-stone-500 text-center py-8">Aucun avis dans cette catégorie</p>
      ) : (
        <div className="space-y-3">
          {reviews.map((r) => (
            <Card key={r.id}>
              <CardContent className="pt-5">
                <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                  <div>
                    <p className="font-medium text-stone-900 text-sm">
                      {r.client_name}{" "}
                      <span className="text-stone-400 font-normal">({r.client_email})</span>
                    </p>
                    <p className="text-xs text-stone-500">
                      Pour : {r.architect_name || r.architect_profile_id}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((n) => (
                          <Star
                            key={n}
                            className={`h-4 w-4 ${
                              n <= r.rating ? "fill-yellow-400 text-yellow-400" : "text-stone-200"
                            }`}
                          />
                        ))}
                      </div>
                      {r.is_verified && (
                        <Badge className="bg-green-50 text-green-700 text-xs">Vérifié</Badge>
                      )}
                    </div>
                  </div>
                  <span className="text-xs text-stone-400">
                    {new Date(r.created_at).toLocaleString("fr-MA")}
                  </span>
                </div>
                {r.title && <p className="font-medium text-stone-800 text-sm mb-1">{r.title}</p>}
                <p className="text-sm text-stone-600 mb-3">{r.comment}</p>
                {status === "pending" && (
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700"
                      onClick={() => moderate(r.id, "approve")}
                      disabled={acting === r.id}
                    >
                      <Check className="h-4 w-4 mr-1" /> Approuver
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-red-300 text-red-600 hover:bg-red-50"
                      onClick={() => moderate(r.id, "reject")}
                      disabled={acting === r.id}
                    >
                      <X className="h-4 w-4 mr-1" /> Rejeter
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
