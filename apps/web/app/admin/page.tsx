import { redirect } from "next/navigation";

/**
 * Legacy URL /admin — redirige vers le nouveau dashboard admin unifié.
 * Tous les features admin sont dans /dashboard/admin (pipeline, avis,
 * vérifications, architectes inscrits, stats, search, export CSV).
 */
export default function LegacyAdminRedirect() {
  redirect("/dashboard/admin");
}
