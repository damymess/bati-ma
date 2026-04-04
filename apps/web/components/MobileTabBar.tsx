"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, BookOpen, User, FileText } from "lucide-react";
import { useAuth } from "@/components/AuthProvider";

const TABS_LEFT = [
  { href: "/", label: "Accueil", icon: Home },
  { href: "/demandes-devis", label: "Devis", icon: FileText },
];

/**
 * iOS-style bottom tab bar with centered "Publier" CTA button.
 * Fixed to bottom with safe-area-inset support for notched devices.
 */
export default function MobileTabBar() {
  const pathname = usePathname();
  const { user } = useAuth();
  const isPublishActive = pathname === "/demande-devis";

  const accountHref = user
    ? user.role === "architect"
      ? "/dashboard/architecte"
      : "/dashboard/client"
    : "/connexion";
  const accountLabel = user ? user.first_name || "Compte" : "Connexion";

  const TABS_RIGHT = [
    { href: "/architecte", label: "Architectes", icon: Search },
    { href: accountHref, label: accountLabel, icon: User },
  ];

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

        {/* Center: Publier — same style as other tabs but terracotta accent */}
        <Link
          href="/demande-devis"
          className={`flex flex-1 flex-col items-center gap-0.5 py-1 text-[10px] font-medium transition-colors ${
            isPublishActive
              ? "text-[#b5522a]"
              : "text-[#b5522a]/70 active:text-[#b5522a]"
          }`}
        >
          <svg viewBox="0 0 24 24" fill="none" className={`h-5 w-5 transition-transform ${isPublishActive ? "scale-110" : ""}`} aria-hidden="true">
            <path
              d="M12 3V16M8 7L12 3L16 7"
              stroke="currentColor"
              strokeWidth={isPublishActive ? 2.2 : 1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 14V19C4 20.1 4.9 21 6 21H18C19.1 21 20 20.1 20 19V14"
              stroke="currentColor"
              strokeWidth={isPublishActive ? 2.2 : 1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Publier</span>
        </Link>

        {/* Right tabs */}
        {TABS_RIGHT.map(renderTab)}
      </div>
    </nav>
  );
}
