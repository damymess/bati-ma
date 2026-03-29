"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, BookOpen, User } from "lucide-react";

const TABS_LEFT = [
  { href: "/", label: "Accueil", icon: Home },
  { href: "/architecte", label: "Architectes", icon: Search },
];

const TABS_RIGHT = [
  { href: "/guide/comment-choisir-architecte-maroc", label: "Guides", icon: BookOpen },
  { href: "/contact", label: "Profil", icon: User },
];

/**
 * iOS-style bottom tab bar with centered "Publier" CTA button.
 * Fixed to bottom with safe-area-inset support for notched devices.
 */
export default function MobileTabBar() {
  const pathname = usePathname();
  const isPublishActive = pathname === "/soumettre-projet";

  const renderTab = (tab: { href: string; label: string; icon: typeof Home }) => {
    const Icon = tab.icon;
    const isActive =
      tab.href === "/" ? pathname === "/" : pathname.startsWith(tab.href);

    return (
      <Link
        key={tab.href}
        href={tab.href}
        className={`flex flex-1 flex-col items-center gap-0.5 py-1 text-[10px] font-medium transition-colors ${
          isActive
            ? "text-[#b5522a]"
            : "text-stone-400 active:text-stone-600"
        }`}
      >
        <Icon
          className={`h-5 w-5 transition-transform ${isActive ? "scale-110" : ""}`}
          strokeWidth={isActive ? 2.2 : 1.5}
        />
        <span>{tab.label}</span>
      </Link>
    );
  };

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-stone-200/60 bg-white/90 backdrop-blur-xl lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="mx-auto flex h-[56px] max-w-lg items-center justify-around px-2">
        {/* Left tabs */}
        {TABS_LEFT.map(renderTab)}

        {/* Center: Publier button (elevated) */}
        <div className="flex flex-1 items-center justify-center">
          <Link
            href="/soumettre-projet"
            className={`-mt-5 flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-all active:scale-95 ${
              isPublishActive
                ? "bg-[#b5522a] shadow-[#b5522a]/30"
                : "bg-[#b5522a] shadow-stone-300/50 hover:bg-[#a0471f]"
            }`}
          >
            {/* Moroccan arch icon (keyhole arch / bab) */}
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
              <path
                d="M6 22V12C6 8.68 8.68 6 12 6C15.32 6 18 8.68 18 12V22"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L12 2L18 6"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.5 22V16C9.5 14.62 10.62 13.5 12 13.5C13.38 13.5 14.5 14.62 14.5 16V22"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <span className={`absolute bottom-1 text-[9px] font-medium ${
            isPublishActive ? "text-[#b5522a]" : "text-stone-400"
          }`}>
            Publier
          </span>
        </div>

        {/* Right tabs */}
        {TABS_RIGHT.map(renderTab)}
      </div>
    </nav>
  );
}
