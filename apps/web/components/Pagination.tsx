"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  /** Base path without query params, e.g. "/architecte/casablanca" */
  basePath: string;
  /** Extra query params to preserve (filters, sort, etc.) */
  queryParams?: Record<string, string>;
  /** Label for the items being paginated */
  itemLabel?: string;
};

function buildHref(basePath: string, page: number, extra: Record<string, string> = {}) {
  const params = new URLSearchParams(extra);
  if (page > 1) params.set("page", String(page));
  const qs = params.toString();
  return qs ? `${basePath}?${qs}` : basePath;
}

function getPageNumbers(current: number, total: number): (number | "...")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const pages: (number | "...")[] = [1];

  if (current > 3) pages.push("...");

  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  for (let i = start; i <= end; i++) pages.push(i);

  if (current < total - 2) pages.push("...");

  pages.push(total);
  return pages;
}

export default function Pagination({
  currentPage,
  totalPages,
  totalItems,
  basePath,
  queryParams = {},
  itemLabel = "résultats",
}: Props) {
  if (totalPages <= 1) return null;

  const pages = getPageNumbers(currentPage, totalPages);

  return (
    <nav aria-label="Pagination" className="flex flex-col items-center gap-3 mt-8">
      <div className="flex items-center gap-1">
        {/* Previous */}
        {currentPage > 1 ? (
          <Link
            href={buildHref(basePath, currentPage - 1, queryParams)}
            className="flex items-center gap-1 rounded-lg border border-stone-200 px-3 py-2 text-sm text-stone-600 hover:bg-stone-50 hover:border-stone-300 transition-colors"
            aria-label="Page précédente"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Précédent</span>
          </Link>
        ) : (
          <span className="flex items-center gap-1 rounded-lg border border-stone-100 px-3 py-2 text-sm text-stone-300 cursor-not-allowed">
            <ChevronLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Précédent</span>
          </span>
        )}

        {/* Page numbers */}
        <div className="flex items-center gap-1 mx-1">
          {pages.map((p, i) =>
            p === "..." ? (
              <span key={`dots-${i}`} className="px-2 text-sm text-stone-400">
                ...
              </span>
            ) : (
              <Link
                key={p}
                href={buildHref(basePath, p, queryParams)}
                aria-current={p === currentPage ? "page" : undefined}
                className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                  p === currentPage
                    ? "bg-[#b5522a] text-white"
                    : "text-stone-600 hover:bg-stone-100"
                }`}
              >
                {p}
              </Link>
            )
          )}
        </div>

        {/* Next */}
        {currentPage < totalPages ? (
          <Link
            href={buildHref(basePath, currentPage + 1, queryParams)}
            className="flex items-center gap-1 rounded-lg border border-stone-200 px-3 py-2 text-sm text-stone-600 hover:bg-stone-50 hover:border-stone-300 transition-colors"
            aria-label="Page suivante"
          >
            <span className="hidden sm:inline">Suivant</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        ) : (
          <span className="flex items-center gap-1 rounded-lg border border-stone-100 px-3 py-2 text-sm text-stone-300 cursor-not-allowed">
            <span className="hidden sm:inline">Suivant</span>
            <ChevronRight className="h-4 w-4" />
          </span>
        )}
      </div>

      {/* Info */}
      <p className="text-xs text-stone-400">
        Page {currentPage} sur {totalPages} — {totalItems} {itemLabel}
      </p>
    </nav>
  );
}
