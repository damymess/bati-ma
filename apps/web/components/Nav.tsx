"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { isLoggedIn } from "@/lib/auth";

const NAV_LINKS = [
  { href: "/architecte", label: "Architectes" },
  { href: "/architecte-interieur", label: "Intérieur & Déco" },
  { href: "/soumettre-projet", label: "Soumettre un projet" },
  { href: "/guide/comment-choisir-architecte-maroc", label: "Guides" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoggedIn(isLoggedIn());
  }, [pathname]);

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
              className={`rounded-md px-3 py-1.5 text-sm transition-colors hover:bg-stone-100 hover:text-stone-900 ${
                pathname === link.href || pathname?.startsWith(link.href + "/")
                  ? "bg-stone-100 text-stone-900 font-medium"
                  : "text-stone-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Auth + CTA + mobile toggle */}
        <div className="flex items-center gap-2">
          {loggedIn ? (
            <Button size="sm" variant="outline" className="hidden sm:inline-flex border-stone-200" asChild>
              <Link href="/mon-espace">
                <User className="h-3.5 w-3.5 mr-1.5" />
                Mon espace
              </Link>
            </Button>
          ) : (
            <>
              <Link
                href="/connexion"
                className="hidden sm:inline-flex text-sm text-stone-600 hover:text-stone-900 px-3 py-1.5 rounded-md hover:bg-stone-100 transition-colors"
              >
                Se connecter
              </Link>
              <Button size="sm" className="hidden sm:inline-flex rounded-full bg-[#b5522a] hover:bg-[#9e4725] text-white" asChild>
                <Link href="/soumettre-projet">Demander un devis</Link>
              </Button>
            </>
          )}
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
                className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-sm hover:bg-stone-50 ${
                  pathname === link.href || pathname?.startsWith(link.href + "/")
                    ? "text-[#b5522a] font-medium bg-[#f4ece7]"
                    : "text-stone-700"
                }`}
              >
                {link.label}
                <ChevronRight className="h-4 w-4 text-stone-400" />
              </Link>
            ))}
            <Link
              href="/inscription-architecte"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-stone-700 hover:bg-stone-50"
            >
              Inscrire votre cabinet
              <ChevronRight className="h-4 w-4 text-stone-400" />
            </Link>
          </nav>
          <div className="mt-3 border-t border-stone-100 pt-3 flex flex-col gap-2">
            {loggedIn ? (
              <Button className="w-full rounded-full bg-[#b5522a] hover:bg-[#9e4725]" asChild>
                <Link href="/mon-espace" onClick={() => setOpen(false)}>
                  <User className="h-4 w-4 mr-1.5" />
                  Mon espace
                </Link>
              </Button>
            ) : (
              <>
                <Button variant="outline" className="w-full rounded-full" asChild>
                  <Link href="/connexion" onClick={() => setOpen(false)}>Se connecter</Link>
                </Button>
                <Button className="w-full rounded-full bg-[#b5522a] hover:bg-[#9e4725]" asChild>
                  <Link href="/soumettre-projet" onClick={() => setOpen(false)}>Demander un devis gratuit</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
