/**
 * Constants partagées par toutes les pages admin.
 * Source de vérité unique pour les labels, couleurs et filtres
 * des statuts de projets et des types de leads.
 */

export type ProjectStatus =
  | "submitted"
  | "viewed"
  | "quoted"
  | "accepted"
  | "rejected"
  | "completed"
  | "to_verify"
  | "verified"
  | "invalid";

export type LeadType = "cold" | "warm" | "hot" | "exclusive";

export const STATUS_LABELS: Record<string, { label: string; color: string }> = {
  submitted: { label: "Soumis", color: "bg-blue-100 text-blue-700" },
  viewed: { label: "Vu", color: "bg-amber-100 text-amber-700" },
  quoted: { label: "Devis envoyé", color: "bg-purple-100 text-purple-700" },
  accepted: { label: "Accepté", color: "bg-emerald-100 text-emerald-700" },
  rejected: { label: "Refusé", color: "bg-red-100 text-red-700" },
  completed: { label: "Terminé", color: "bg-stone-100 text-stone-600" },
  to_verify: { label: "🔍 À vérifier", color: "bg-yellow-100 text-yellow-800" },
  verified: { label: "✅ Vérifié", color: "bg-green-100 text-green-700" },
  invalid: { label: "🚫 Invalide", color: "bg-stone-200 text-stone-500 line-through" },
};

export const LEAD_TYPE_LABELS: Record<string, { label: string; color: string; emoji: string }> = {
  cold: { label: "Cold", emoji: "❄️", color: "bg-sky-100 text-sky-700 border-sky-300" },
  warm: { label: "Warm", emoji: "🟡", color: "bg-yellow-100 text-yellow-700 border-yellow-300" },
  hot: { label: "Hot", emoji: "🔥", color: "bg-orange-100 text-orange-700 border-orange-300" },
  exclusive: { label: "Exclusive", emoji: "⭐", color: "bg-purple-100 text-purple-700 border-purple-300" },
};

export const STATUS_FILTERS = [
  { value: "all", label: "Tous" },
  { value: "submitted", label: "Soumis" },
  { value: "to_verify", label: "🔍 À vérifier" },
  { value: "verified", label: "✅ Vérifiés" },
  { value: "viewed", label: "Vus" },
  { value: "quoted", label: "Devis" },
  { value: "accepted", label: "Acceptés" },
  { value: "completed", label: "Terminés" },
  { value: "invalid", label: "🚫 Invalides" },
];

export const LEAD_FILTERS = [
  { value: "all", label: "Tous les leads" },
  { value: "hot", label: "🔥 Hot" },
  { value: "warm", label: "🟡 Warm" },
  { value: "cold", label: "❄️ Cold" },
  { value: "exclusive", label: "⭐ Exclusive" },
];

/** Actions possibles dans le STATUS_ACTIONS (page détail) — workflow natural order */
export const STATUS_ACTIONS = [
  { value: "submitted", label: "Soumis" },
  { value: "viewed", label: "Vu" },
  { value: "quoted", label: "Devis envoyé" },
  { value: "accepted", label: "Accepté" },
  { value: "rejected", label: "Refusé" },
  { value: "completed", label: "Terminé" },
];

export function getStatusLabel(status: string | null | undefined) {
  return STATUS_LABELS[status || "submitted"] || STATUS_LABELS.submitted;
}

export function getLeadTypeLabel(leadType: string | null | undefined) {
  return LEAD_TYPE_LABELS[leadType || "cold"] || LEAD_TYPE_LABELS.cold;
}
