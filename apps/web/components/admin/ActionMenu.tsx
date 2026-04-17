"use client";

import { useEffect, useRef, useState } from "react";
import { MoreVertical, X } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ActionItem = {
  label: string;
  Icon: LucideIcon;
  onClick: (e: React.MouseEvent) => void;
  variant?: "default" | "danger";
  disabled?: boolean;
};

type Props = {
  actions: ActionItem[];
  align?: "right" | "left";
};

/**
 * Menu d'actions contextuel pour les cards admin.
 *
 * Desktop : dropdown classique sous le bouton.
 * Mobile (< sm) : bottom sheet full-width. Plus facile à tapper.
 */
export default function ActionMenu({ actions, align = "right" }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onDocClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  function handleTriggerClick(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setOpen((v) => !v);
  }

  function handleActionClick(e: React.MouseEvent, action: ActionItem) {
    e.preventDefault();
    e.stopPropagation();
    setOpen(false);
    action.onClick(e);
  }

  return (
    <div ref={ref} className="relative inline-block">
      <button
        type="button"
        onClick={handleTriggerClick}
        aria-label="Actions"
        className="inline-flex items-center justify-center w-11 h-11 rounded-full hover:bg-stone-100 transition text-stone-600"
      >
        <MoreVertical className="h-5 w-5" />
      </button>

      {/* Desktop dropdown */}
      {open && (
        <div
          className={`hidden sm:block absolute z-30 mt-1 w-52 rounded-lg border border-stone-200 bg-white shadow-lg ${
            align === "right" ? "right-0" : "left-0"
          }`}
        >
          {actions.map((a, i) => (
            <button
              key={i}
              onClick={(e) => handleActionClick(e, a)}
              disabled={a.disabled}
              className={`w-full flex items-center gap-2 px-3 py-2.5 text-sm text-left first:rounded-t-lg last:rounded-b-lg transition disabled:opacity-50 disabled:cursor-not-allowed ${
                a.variant === "danger"
                  ? "text-red-700 hover:bg-red-50"
                  : "text-stone-700 hover:bg-stone-50"
              }`}
            >
              <a.Icon className="h-4 w-4 shrink-0" />
              {a.label}
            </button>
          ))}
        </div>
      )}

      {/* Mobile bottom sheet */}
      {open && (
        <>
          <div
            className="sm:hidden fixed inset-0 z-40 bg-black/40 animate-in fade-in duration-150"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
          />
          <div className="sm:hidden fixed inset-x-0 bottom-0 z-50 bg-white rounded-t-2xl shadow-2xl animate-in slide-in-from-bottom duration-200 pb-safe">
            <div className="flex items-center justify-between px-4 py-3 border-b border-stone-100">
              <p className="text-sm font-semibold text-stone-900">Actions</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(false);
                }}
                className="p-2 -mr-2 text-stone-500"
                aria-label="Fermer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="py-2">
              {actions.map((a, i) => (
                <button
                  key={i}
                  onClick={(e) => handleActionClick(e, a)}
                  disabled={a.disabled}
                  className={`w-full flex items-center gap-3 px-5 py-4 text-base text-left transition disabled:opacity-50 ${
                    a.variant === "danger"
                      ? "text-red-700 active:bg-red-50"
                      : "text-stone-700 active:bg-stone-50"
                  }`}
                >
                  <a.Icon className="h-5 w-5 shrink-0" />
                  {a.label}
                </button>
              ))}
            </div>
            <div className="h-4" />
          </div>
        </>
      )}
    </div>
  );
}
