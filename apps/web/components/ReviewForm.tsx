"use client";

import { useState } from "react";
import { Star, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:9000";

type Props = {
  architectId: string;
  architectName: string;
};

export default function ReviewForm({ architectId, architectName }: Props) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (rating === 0) {
      setError("Veuillez donner une note");
      return;
    }
    if (comment.length < 20) {
      setError("Commentaire trop court (min 20 caractères)");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/store/reviews`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          architect_profile_id: architectId,
          client_name: clientName,
          client_email: clientEmail,
          rating,
          title,
          comment,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Erreur lors de l'envoi");
      } else {
        setSuccess(true);
      }
    } catch (err) {
      setError("Erreur réseau");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
        <Check className="h-10 w-10 text-green-600 mx-auto mb-2" />
        <h3 className="font-semibold text-stone-900 mb-1">Merci pour votre avis !</h3>
        <p className="text-sm text-stone-600">
          Votre commentaire sera publié après modération (sous 48h).
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-stone-200 rounded-xl p-6 space-y-4">
      <div>
        <h3 className="font-semibold text-stone-900 mb-1">
          Laisser un avis sur {architectName}
        </h3>
        <p className="text-xs text-stone-500">
          Aidez d&apos;autres clients en partageant votre expérience
        </p>
      </div>

      {/* Rating */}
      <div>
        <label className="text-sm font-medium text-stone-700 mb-1.5 block">Votre note</label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              type="button"
              key={n}
              onClick={() => setRating(n)}
              onMouseEnter={() => setHover(n)}
              onMouseLeave={() => setHover(0)}
              className="p-0.5"
            >
              <Star
                className={`h-7 w-7 transition ${
                  (hover || rating) >= n ? "fill-yellow-400 text-yellow-400" : "text-stone-300"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="text-sm font-medium text-stone-700 mb-1 block">Votre nom</label>
          <input
            required
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            className="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm focus:border-[#b5522a] focus:outline-none"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-stone-700 mb-1 block">Votre email</label>
          <input
            required
            type="email"
            value={clientEmail}
            onChange={(e) => setClientEmail(e.target.value)}
            className="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm focus:border-[#b5522a] focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-stone-700 mb-1 block">Titre (optionnel)</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={100}
          placeholder="Ex: Professionnel à l'écoute"
          className="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm focus:border-[#b5522a] focus:outline-none"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-stone-700 mb-1 block">
          Votre commentaire <span className="text-stone-400">({comment.length}/2000)</span>
        </label>
        <textarea
          required
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          maxLength={2000}
          rows={5}
          placeholder="Décrivez votre expérience avec cet architecte..."
          className="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm focus:border-[#b5522a] focus:outline-none"
        />
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-600">
          {error}
        </div>
      )}

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-[#b5522a] hover:bg-[#a0441f] rounded-full"
      >
        {loading ? "Envoi..." : "Publier mon avis"}
      </Button>

      <p className="text-xs text-stone-400 text-center">
        Votre avis sera modéré avant publication pour garantir la qualité
      </p>
    </form>
  );
}
