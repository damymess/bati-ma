import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface AdminBreadcrumbItem {
  label: string;
  href?: string;
}

type Props = {
  items: AdminBreadcrumbItem[];
};

/**
 * Fil d'Ariane pour les pages admin.
 * Version épurée, sans JSON-LD (inutile pour l'admin)
 * et sans contrainte max-w-6xl (le layout parent s'en charge).
 */
export default function AdminBreadcrumb({ items }: Props) {
  return (
    <nav className="flex items-center gap-1.5 text-xs text-stone-500 mb-4 flex-wrap">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && <ChevronRight className="h-3 w-3 text-stone-300 shrink-0" />}
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-[#b5522a] transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-stone-700 font-medium truncate max-w-[240px]">
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
