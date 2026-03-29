"use client";

import Link from "next/link";
import Image from "next/image";
import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/components/AuthProvider";

const NAV_LINKS = [
  { href: "/architecte", label: "Architectes" },
  { href: "/demandes-devis", label: "Demandes de devis" },
  { href: "/architecte-interieur", label: "Intérieur & Déco" },
  { href: "/guide/comment-choisir-architecte-maroc", label: "Guides" },
];

export default function Nav() {
  const { user } = useAuth();

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

        {/* Desktop nav — hidden on mobile (tabs handle navigation) */}
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

        {/* Right side — CTA + auth */}
        <div className="flex items-center gap-2">
          {user ? (
            <Link
              href={user.role === "architect" ? "/dashboard/architecte" : "/dashboard/client"}
              className="hidden items-center gap-1.5 rounded-full border border-stone-200 px-3 py-1.5 text-xs text-stone-600 transition-colors hover:bg-stone-100 lg:flex"
            >
              <User className="h-3.5 w-3.5" />
              Mon espace
            </Link>
          ) : (
            <Link
              href="/connexion"
              className="hidden rounded-md px-3 py-1.5 text-sm text-stone-600 transition-colors hover:bg-stone-100 hover:text-stone-900 lg:block"
            >
              Connexion
            </Link>
          )}
          <Button size="sm" className="h-8 rounded-full text-xs lg:h-9 lg:text-sm" asChild>
            <Link href="/demande-devis">Demander un devis</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
