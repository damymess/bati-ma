"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "/architecte", label: "Architectes" },
  { href: "/architecte-interieur", label: "Intérieur & Déco" },
  { href: "/soumettre-projet", label: "Soumettre un projet" },
  { href: "/guide/comment-choisir-architecte-maroc", label: "Guides" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/images/logo-bati.jpg" alt="Bati.ma" width={100} height={28} className="h-7 w-auto rounded" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
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

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-2">
          <Button size="sm" className="hidden rounded-full sm:inline-flex" asChild>
            <Link href="#devis">Demander un devis</Link>
          </Button>
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-stone-600 hover:bg-stone-100 md:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-stone-100 bg-white px-4 pb-4 pt-2 md:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-stone-700 hover:bg-stone-50"
              >
                {link.label}
                <ChevronRight className="h-4 w-4 text-stone-400" />
              </Link>
            ))}
          </nav>
          <div className="mt-3 border-t border-stone-100 pt-3">
            <Button className="w-full rounded-full" asChild>
              <Link href="#devis" onClick={() => setOpen(false)}>
                Demander un devis gratuit
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
