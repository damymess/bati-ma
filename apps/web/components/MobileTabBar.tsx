"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, PlusCircle, BookOpen, Menu } from "lucide-react";

const TABS = [
  { href: "/", label: "Accueil", icon: Home },
  { href: "/architecte", label: "Architectes", icon: Search },
  { href: "/soumettre-projet", label: "Projet", icon: PlusCircle },
  { href: "/guide/comment-choisir-architecte-maroc", label: "Guides", icon: BookOpen },
  { href: "/contact", label: "Plus", icon: Menu },
];

/**
 * iOS-style bottom tab bar — visible only on mobile (< lg).
 * Fixed to bottom with safe-area-inset support for notched devices.
 */
export default function MobileTabBar() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-stone-200/60 bg-white/90 backdrop-blur-xl lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="mx-auto flex h-[56px] max-w-lg items-center justify-around px-2">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive =
            tab.href === "/"
              ? pathname === "/"
              : pathname.startsWith(tab.href);

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex flex-1 flex-col items-center gap-0.5 rounded-lg py-1 text-[10px] font-medium transition-colors ${
                isActive
                  ? "text-[#b5522a]"
                  : "text-stone-400 active:text-stone-600"
              }`}
            >
              <Icon
                className={`h-5 w-5 transition-transform ${
                  isActive ? "scale-110" : ""
                }`}
                strokeWidth={isActive ? 2.2 : 1.5}
              />
              <span>{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
