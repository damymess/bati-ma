"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { getToken } from "@/lib/auth";
import { fetchArchitectStats } from "@/lib/api";
import type { ArchitectCompletion } from "@/lib/architect-completion";

type Props = {
  /** Si true, n'affiche rien quand profil complet (≥80%). Si false, affiche une confirmation verte. */
  hideWhenComplete?: boolean;
};

/**
 * Banner persistant en haut du dashboard architecte.
 * Affiche le % de complétion du profil et pousse à le compléter.
 */
export default function OnboardingBanner({ hideWhenComplete = false }: Props) {
  const [completion, setCompletion] = useState<ArchitectCompletion | null>(null);

  useEffect(() => {
    const token = getToken();
    if (!token) return;
    fetchArchitectStats(token).then((data) => {
      if (data?.completion) setCompletion(data.completion);
    });
  }, []);

  if (!completion) return null;
  if (completion.isComplete && hideWhenComplete) return null;

  // Profil complet → petit banner vert discret
  if (completion.isComplete) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4 flex items-center gap-3 text-sm">
        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
        <span className="text-green-800">
          Votre profil est complet à {completion.percent}% — visible publiquement.
        </span>
      </div>
    );
  }

  const barColor = completion.isPublic ? "bg-amber-500" : "bg-red-500";
  const bgColor = completion.isPublic
    ? "bg-amber-50 border-amber-200"
    : "bg-red-50 border-red-200";
  const textColor = completion.isPublic ? "text-amber-900" : "text-red-900";
  const iconColor = completion.isPublic ? "text-amber-600" : "text-red-600";

  return (
    <div className={`border rounded-xl p-5 mb-6 ${bgColor}`}>
      <div className="flex items-start gap-3">
        <AlertCircle className={`h-5 w-5 ${iconColor} shrink-0 mt-0.5`} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-4 flex-wrap mb-2">
            <div>
              <h3 className={`font-semibold ${textColor}`}>
                {completion.isPublic
                  ? `Profil visible publiquement — ${completion.percent}% complet`
                  : `Profil non visible — ${completion.percent}% complet`}
              </h3>
              <p className="text-xs text-stone-600 mt-0.5">
                {completion.isPublic
                  ? "Complétez pour apparaître dans les premiers résultats"
                  : "Atteignez 50% pour apparaître dans la liste publique"}
              </p>
            </div>
            <Link
              href="/dashboard/architecte/profil"
              className="inline-flex items-center gap-1.5 bg-[#b5522a] text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-[#a0441f] transition"
            >
              Compléter maintenant
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Barre de progression */}
          <div className="bg-white rounded-full h-2 overflow-hidden mb-3">
            <div
              className={`${barColor} h-full transition-all duration-500`}
              style={{ width: `${completion.percent}%` }}
            />
          </div>

          {/* Champs manquants prioritaires */}
          {completion.missing.length > 0 && (
            <div>
              <p className="text-xs font-medium text-stone-700 mb-1.5">
                Prochaines étapes :
              </p>
              <ul className="space-y-1">
                {completion.missing.slice(0, 3).map((field, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-xs text-stone-600"
                  >
                    <span className="w-4 h-4 rounded-full border border-stone-300 shrink-0" />
                    {field}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
