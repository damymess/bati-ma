"use client";

import { useEffect, useState } from "react";
import { X, Clock } from "lucide-react";

// Données anonymes : prénoms communs marocains + villes couvertes
const FIRST_NAMES = [
  "Ahmed", "Mehdi", "Youssef", "Karim", "Rachid", "Hassan", "Ali", "Omar", "Soufiane", "Adil",
  "Fatima", "Soukaina", "Khadija", "Laila", "Amina", "Nadia", "Sofia", "Imane", "Yasmine",
];

const CITIES = [
  "Casablanca", "Rabat", "Marrakech", "Tanger", "Agadir", "Fès",
  "Meknès", "Oujda", "Kénitra", "Tétouan", "El Jadida", "Nador",
];

const ACTIONS = [
  { type: "calculateur", text: "a calculé son budget" },
  { type: "devis", text: "a demandé 3 devis" },
  { type: "architecte", text: "a consulté un architecte" },
  { type: "calculateur", text: "a reçu son estimation" },
  { type: "devis", text: "a contacté un architecte vérifié" },
];

type Activity = {
  id: string;
  name: string;
  city: string;
  action: string;
  minutesAgo: number;
};

function anonymize(name: string): string {
  // RGPD-safe : on affiche uniquement le prénom + initiale
  const firstLetter = name.charAt(0).toUpperCase();
  return `${name.slice(0, 1)}${name.slice(1).toLowerCase()}. ${firstLetter}.`;
}

function generateActivity(): Activity {
  const name = FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)];
  const city = CITIES[Math.floor(Math.random() * CITIES.length)];
  const action = ACTIONS[Math.floor(Math.random() * ACTIONS.length)];
  const minutesAgo = Math.floor(Math.random() * 45) + 2; // 2-47 min
  return {
    id: `${Date.now()}-${Math.random()}`,
    name: anonymize(name),
    city,
    action: action.text,
    minutesAgo,
  };
}

export default function SocialProofFeed() {
  const [activity, setActivity] = useState<Activity | null>(null);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    // 1er popup après 15s
    const first = window.setTimeout(() => {
      setActivity(generateActivity());
      setVisible(true);
    }, 15000);

    // Rotation toutes les 20s
    const rotate = window.setInterval(() => {
      setVisible(false);
      window.setTimeout(() => {
        setActivity(generateActivity());
        setVisible(true);
      }, 500);
    }, 25000);

    // Auto-hide après 7s chaque popup
    const hideAfterShow = window.setInterval(() => {
      setVisible(false);
    }, 7000);

    return () => {
      window.clearTimeout(first);
      window.clearInterval(rotate);
      window.clearInterval(hideAfterShow);
    };
  }, [dismissed]);

  if (!activity || !visible || dismissed) return null;

  return (
    <div
      className="fixed bottom-4 left-4 z-40 max-w-xs bg-white border border-stone-200 rounded-xl shadow-lg p-3 pr-8 animate-in slide-in-from-bottom-4 duration-300"
      role="status"
      aria-live="polite"
    >
      <button
        onClick={() => setDismissed(true)}
        className="absolute top-2 right-2 p-1 rounded-full hover:bg-stone-100 transition"
        aria-label="Fermer"
      >
        <X className="h-3 w-3 text-stone-400" />
      </button>
      <div className="flex items-start gap-2.5">
        <div className="w-8 h-8 rounded-full bg-[#b5522a]/10 text-[#b5522a] flex items-center justify-center text-xs font-bold shrink-0">
          {activity.name.charAt(0)}
        </div>
        <div className="min-w-0">
          <p className="text-xs text-stone-700 leading-snug">
            <strong>{activity.name}</strong> de {activity.city} {activity.action}
          </p>
          <p className="text-[10px] text-stone-400 flex items-center gap-1 mt-0.5">
            <Clock className="h-2.5 w-2.5" /> Il y a {activity.minutesAgo} min
          </p>
        </div>
      </div>
    </div>
  );
}
