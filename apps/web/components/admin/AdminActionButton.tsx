"use client";

import type { LucideIcon } from "lucide-react";

type Variant = "blue" | "red" | "gray" | "green";

const VARIANT_STYLES: Record<Variant, string> = {
  blue: "border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100",
  red: "border-red-200 bg-red-50 text-red-700 hover:bg-red-100",
  gray: "border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100",
  green: "border-green-200 bg-green-50 text-green-700 hover:bg-green-100",
};

type Props = {
  label: string;
  Icon: LucideIcon;
  variant?: Variant;
  onClick: (e: React.MouseEvent) => void;
  disabled?: boolean;
  title?: string;
  className?: string;
};

/**
 * Bouton d'action uniforme pour l'admin.
 * Minimum 44px de hauteur tactile (recommandation Apple/Google pour mobile).
 */
export default function AdminActionButton({
  label,
  Icon,
  variant = "gray",
  onClick,
  disabled = false,
  title,
  className = "",
}: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      title={title || label}
      className={`inline-flex items-center justify-center gap-1.5 text-sm px-3 py-2 min-h-[44px] rounded-md border transition disabled:opacity-50 disabled:cursor-not-allowed ${VARIANT_STYLES[variant]} ${className}`}
    >
      <Icon className="h-4 w-4 shrink-0" />
      <span className="whitespace-nowrap">{label}</span>
    </button>
  );
}
