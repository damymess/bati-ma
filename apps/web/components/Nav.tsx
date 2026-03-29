"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "/architecte", label: "Architectes" },
  { href: "/architecte-interieur", label: "Intérieur & Déco" },
  { href: "/soumettre-projet", label: "Soumettre un projet" },
  { href: "/guide/comment-choisir-architecte-maroc", label: "Guides" },
];

export default function Nav() {
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

        {/* CTA — always visible but smaller on mobile */}
        <Button size="sm" className="h-9 rounded-full text-sm" asChild>
          <Link href="#devis">Demander un devis</Link>
        </Button>
      </div>
    </header>
  );
}
