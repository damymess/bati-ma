"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:9000";

export default function MagicLinkPage() {
  const { token } = useParams() as { token: string };
  const router = useRouter();
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${API_URL}/store/clients/magic-link/verify`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        });
        const data = await res.json();

        if (!res.ok) {
          setErrorMsg(data.message || "Lien invalide ou expiré");
          setStatus("error");
          return;
        }

        // Stocker le JWT dans localStorage (comme le pattern login standard)
        if (data.token) {
          localStorage.setItem("bati_token", data.token);
          localStorage.setItem("bati_user", JSON.stringify({
            ...data.client,
            role: "client",
            first_name: (data.client?.name || "").split(" ")[0] || "",
            last_name: (data.client?.name || "").split(" ").slice(1).join(" ") || "",
          }));
        }
        setStatus("success");

        // Redirection après 1s
        setTimeout(() => router.push("/dashboard/client"), 1200);
      } catch {
        setErrorMsg("Erreur réseau. Réessayez.");
        setStatus("error");
      }
    })();
  }, [token, router]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full text-center">
        {status === "loading" && (
          <>
            <Loader2 className="h-10 w-10 text-[#b5522a] mx-auto animate-spin mb-4" />
            <h1 className="text-xl font-bold text-stone-900">Vérification du lien...</h1>
            <p className="text-sm text-stone-500 mt-2">Un instant</p>
          </>
        )}

        {status === "success" && (
          <>
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-xl font-bold text-stone-900">Bienvenue !</h1>
            <p className="text-sm text-stone-500 mt-2">Redirection vers votre espace...</p>
          </>
        )}

        {status === "error" && (
          <>
            <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="h-8 w-8 text-red-600" />
            </div>
            <h1 className="text-xl font-bold text-stone-900">Lien invalide</h1>
            <p className="text-sm text-stone-500 mt-2 mb-6">{errorMsg}</p>
            <div className="flex gap-3 justify-center">
              <Link
                href="/demande-devis"
                className="inline-flex items-center px-5 py-2 rounded-full bg-[#b5522a] text-white text-sm font-medium hover:bg-[#a0441f] transition"
              >
                Nouvelle demande
              </Link>
              <Link
                href="/connexion"
                className="inline-flex items-center px-5 py-2 rounded-full border border-stone-300 text-stone-700 text-sm hover:bg-stone-50 transition"
              >
                Se connecter
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
