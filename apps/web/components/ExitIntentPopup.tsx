"use client";

import { useEffect, useState } from "react";
import { X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const STORAGE_KEY = "bati_exit_intent_dismissed";
const DISMISS_DURATION_DAYS = 30;

type Props = {
  /**
   * Quand true, le popup se déclenche au mouvement sortant vers le haut.
   * Sur mobile, tombe back vers un scroll-based trigger (après 70% de la page).
   */
  enabled?: boolean;
  context?: "calculator" | "architect" | "guide" | "generic";
  city?: string;
};

export default function ExitIntentPopup({ enabled = true, context = "generic", city }: Props) {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    // Déjà dismissé récemment ?
    const dismissed = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
    if (dismissed) {
      const dismissedAt = new Date(dismissed);
      const daysSince = (Date.now() - dismissedAt.getTime()) / 86400000;
      if (daysSince < DISMISS_DURATION_DAYS) return;
    }

    let triggered = false;

    // Desktop : mouseleave vers le haut
    const handleMouseLeave = (e: MouseEvent) => {
      if (triggered) return;
      if (e.clientY <= 0) {
        triggered = true;
        setVisible(true);
      }
    };

    // Mobile : déclenché par scroll rapide vers le haut (intent de quitter)
    let lastScrollY = window.scrollY;
    let lastScrollTime = Date.now();
    const handleScroll = () => {
      if (triggered) return;
      const dy = window.scrollY - lastScrollY;
      const dt = Date.now() - lastScrollTime;
      if (dt < 200 && dy < -100 && window.scrollY < 200) {
        triggered = true;
        setVisible(true);
      }
      lastScrollY = window.scrollY;
      lastScrollTime = Date.now();
    };

    // Fallback : après 60s sans action, propose aussi
    const timer = window.setTimeout(() => {
      if (!triggered) {
        triggered = true;
        setVisible(true);
      }
    }, 60000);

    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
      window.clearTimeout(timer);
    };
  }, [enabled]);

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, new Date().toISOString());
    setVisible(false);
  }

  async function handleSubmit() {
    if (!email.trim()) return;
    // Simple enregistrement newsletter (on pourrait appeler une API)
    try {
      const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:9000";
      await fetch(`${API_BASE}/store/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Newsletter Exit Intent",
          email: email.trim(),
          message: `[Exit intent] Context: ${context}${city ? ` · Ville: ${city}` : ""}. Intéressé par ressources bati.ma.`,
        }),
      });
    } catch { /* optional */ }
    setSubmitted(true);
    localStorage.setItem(STORAGE_KEY, new Date().toISOString());
    try {
      const w = window as unknown as { umami?: { track: (e: string, d: Record<string, string>) => void } };
      w.umami?.track("exit_intent_captured", { context, city: city || "" });
    } catch { /* optional */ }
  }

  if (!visible) return null;

  const messages = {
    calculator: {
      title: "Attendez ! Ne partez pas sans votre estimation",
      body: "Recevez votre rapport de budget détaillé et 3 devis d'architectes gratuits.",
    },
    architect: {
      title: "Comparez avant de choisir",
      body: "Recevez gratuitement 3 devis d'architectes pour votre projet et économisez jusqu'à 20%.",
    },
    guide: {
      title: "Un projet en tête ?",
      body: "Recevez notre guide \"Construire au Maroc en 2026\" + liste des architectes vérifiés près de chez vous.",
    },
    generic: {
      title: "Un projet de construction ou rénovation ?",
      body: "Recevez 3 devis gratuits d'architectes vérifiés au Maroc. Gain de temps garanti.",
    },
  };
  const msg = messages[context];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={dismiss}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={dismiss}
          className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-stone-100 transition"
          aria-label="Fermer"
        >
          <X className="h-4 w-4 text-stone-500" />
        </button>

        {submitted ? (
          <div className="text-center py-4">
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
              <Check className="h-7 w-7 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 mb-1">Merci !</h3>
            <p className="text-sm text-stone-600 mb-5">Nous vous recontactons sous 24h.</p>
            <Button onClick={dismiss} variant="outline" className="rounded-full">
              Continuer ma navigation
            </Button>
          </div>
        ) : (
          <>
            <div className="mb-5">
              <p className="text-xs text-[#b5522a] uppercase tracking-widest font-medium mb-1">
                Offre limitée
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">{msg.title}</h3>
              <p className="text-sm text-stone-600">{msg.body}</p>
            </div>

            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12"
              />
              <Button
                onClick={handleSubmit}
                className="w-full h-12 rounded-xl bg-[#b5522a] hover:bg-[#a0441f]"
                disabled={!email.trim()}
              >
                Recevoir mon offre
              </Button>
            </div>

            <div className="mt-4 flex items-center justify-center gap-4 text-xs text-stone-400">
              <span className="flex items-center gap-1">
                <Check className="h-3 w-3" /> Gratuit
              </span>
              <span className="flex items-center gap-1">
                <Check className="h-3 w-3" /> Sans engagement
              </span>
              <span className="flex items-center gap-1">
                <Check className="h-3 w-3" /> 1 clic désinscription
              </span>
            </div>

            <button
              onClick={dismiss}
              className="w-full mt-4 text-xs text-stone-400 hover:text-stone-600 text-center"
            >
              Non merci, je préfère continuer sans
            </button>
          </>
        )}
      </div>
    </div>
  );
}
