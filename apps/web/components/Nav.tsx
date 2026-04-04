"use client";

import Link from "next/link";
import Image from "next/image";
import { User, Shield, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/components/AuthProvider";

const NAV_LINKS = [
  { href: "/architecte", label: "Architectes" },
  { href: "/architecte-interieur", label: "Intérieur & Déco" },
  { href: "/soumettre-projet", label: "Soumettre un projet" },
  { href: "/appels-offres", label: "Appels d'offres" },
  { href: "/guide/comment-choisir-architecte-maroc", label: "Guides" },
];

export default function Nav() {
  const { user, loading } = useAuth();

  const isAdmin = user?.email === "contact@bati.ma";
  const dashboardPath = user
    ? user.role === "architect"
      ? "/dashboard/architecte"
      : "/dashboard/client"
    : "/connexion";

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-stone-200/60 bg-white/80 backdrop-blur-xl"
      style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
    >
      <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-4 sm:px-6 lg:h-14">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/images/logo-bati.jpg" alt="Bati.ma" width={100} height={28} className="h-6 w-auto rounded lg:h-7" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-1.5 text-sm text-stone-600 transition-colors hover:bg-stone-100 hover:text-stone-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side: CTA + Auth */}
        <div className="flex items-center gap-2">
          <Button size="sm" className="h-9 rounded-full text-sm" asChild>
            <Link href="/demande-devis">Demander un devis</Link>
          </Button>

          {!loading && (
            <>
              {user ? (
                <div className="hidden lg:flex items-center gap-1.5">
                  {isAdmin && (
                    <Link
                      href="/admin"
                      className="flex items-center gap-1 rounded-full px-2.5 py-1.5 text-xs text-[#b5522a] hover:bg-[#b5522a]/5 transition-colors"
                    >
                      <Shield className="h-3.5 w-3.5" />
                      Admin
                    </Link>
                  )}
                  <Link
                    href={dashboardPath}
                    className="flex items-center gap-1.5 rounded-full bg-stone-100 px-3 py-1.5 text-sm text-stone-700 hover:bg-stone-200 transition-colors"
                  >
                    <User className="h-4 w-4" />
                    <span className="max-w-[100px] truncate">{user.first_name}</span>
                  </Link>
                </div>
              ) : (
                <Link
                  href="/connexion"
                  className="hidden lg:flex items-center gap-1.5 rounded-full bg-stone-100 px-3 py-1.5 text-sm text-stone-700 hover:bg-stone-200 transition-colors"
                >
                  <LogIn className="h-4 w-4" />
                  Connexion
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
}
