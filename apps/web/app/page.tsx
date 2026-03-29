import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  Search,
  Home,
  Landmark,
  Armchair,
  Building2,
  Leaf,
  Compass,
  ArrowRight,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import { CITIES } from "@/lib/cities";
import { ARCHITECTS } from "@/lib/architects";
import ArchitectCard from "@/components/ArchitectCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import HeroSkyline from "@/components/HeroSkyline";

export const metadata: Metadata = {
  title: "Bati.ma — Annuaire des Architectes au Maroc",
  description:
    "Trouvez votre architecte au Maroc parmi 800+ professionnels vérifiés. Portfolios, avis clients et devis gratuit. Casablanca, Marrakech, Rabat, Tanger et toutes les villes.",
  openGraph: {
    title: "Bati.ma — Annuaire des Architectes au Maroc",
    description: "800+ architectes vérifiés. Portfolios, avis et devis en ligne.",
  },
};

const FEATURED = ARCHITECTS.filter((a) => a.premium).slice(0, 4);

const SPECIALTIES = [
  { icon: Home, label: "Résidentiel", desc: "Villas, appartements, maisons" },
  { icon: Landmark, label: "Riad & Patrimoine", desc: "Rénovation riads et médinas" },
  { icon: Armchair, label: "Architecture d'intérieur", desc: "Décoration et aménagement" },
  { icon: Building2, label: "Commercial", desc: "Bureaux, commerces, hôtels" },
  { icon: Leaf, label: "Éco-construction", desc: "Bâtiments durables et bioclimatiques" },
  { icon: Compass, label: "Urbanisme", desc: "Plans d'aménagement et ZAC" },
];

const STATS = [
  { value: "800+", label: "Architectes" },
  { value: "7", label: "Villes" },
  { value: "4.7/5", label: "Note moyenne" },
  { value: "0 MAD", label: "Devis gratuit" },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Bati.ma",
  url: "https://bati.ma",
  description: "Annuaire de référence des architectes et architectes d'intérieur au Maroc",
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: "https://bati.ma/architecte/{city}" },
    "query-input": "required name=city",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />

      {/* ──── HERO — Split layout: text left, skyline right ──── */}
      <section className="relative overflow-hidden bg-stone-950">
        {/* Background image */}
        <Image
          src="/images/hero-villa.jpg"
          alt="Villa architecte Maroc"
          fill
          className="object-cover opacity-15"
          priority
        />
        {/* Gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/60 to-stone-950" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center lg:flex-row lg:items-stretch">
          {/* ── Left: Text + Search ── */}
          <div className="flex flex-1 flex-col justify-center px-4 pt-6 pb-16 sm:px-8 lg:py-20 lg:pr-12">
            <Badge variant="outline" className="mb-5 w-fit border-stone-700 text-stone-400 text-xs sm:text-sm">
              Annuaire Architectes Maroc — 2026
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Trouvez votre architecte
              <br />
              <span className="bg-gradient-to-r from-[#b5522a] to-[#e07a55] bg-clip-text text-transparent">
                au Maroc
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-stone-400 sm:text-lg">
              800+ architectes et designers d&apos;intérieur vérifiés. Portfolios réels,
              avis clients vérifiés et demande de devis gratuite.
            </p>

            {/* Search */}
            <div className="mt-8 flex max-w-lg flex-col gap-2 sm:flex-row" id="devis">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-500" />
                <Input
                  placeholder="Votre ville (ex: Casablanca)"
                  className="h-11 rounded-full border-stone-700 bg-stone-900 pl-10 text-white placeholder:text-stone-500 focus-visible:ring-[#b5522a]"
                />
              </div>
              <Button size="lg" className="h-11 rounded-full px-6">
                Trouver <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>

            {/* City pills — 3 on mobile, 5 on sm+ */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="text-xs text-stone-600">Villes :</span>
              {CITIES.slice(0, 5).map((c, i) => (
                <Link
                  key={c.slug}
                  href={`/architecte/${c.slug}`}
                  className={`rounded-full border border-stone-800 px-3 py-1 text-xs text-stone-400 transition-colors hover:border-[#b5522a]/60 hover:text-[#b5522a] ${
                    i >= 3 ? "hidden sm:inline-flex" : ""
                  }`}
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>

          {/* ── Mobile: compact skyline illustration ── */}
          <div className="relative flex h-36 w-full items-end justify-center overflow-hidden lg:hidden">
            <Image
              src="/images/hero-skyline.svg"
              alt=""
              width={400}
              height={200}
              className="h-full w-auto object-contain opacity-30"
              aria-hidden="true"
            />
          </div>

          {/* ── Desktop: Animated skyline (right panel) ── */}
          <div className="relative hidden min-h-[400px] w-full items-end justify-center overflow-hidden lg:flex lg:w-[45%]">
            <HeroSkyline />
          </div>
        </div>

        {/* ── Mobile: zellige border at bottom ── */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-center lg:hidden">
          <svg viewBox="0 0 400 45" fill="none" className="w-full opacity-40" aria-hidden="true">
            <line x1="0" y1="28" x2="400" y2="28" stroke="#b5522a" strokeWidth="1" />
            <path d="M15 28 L25 13 L35 28 L45 13 L55 28 L65 13 L75 28" stroke="#b5522a" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
            <path d="M165 28 V16 Q165 3 180 3 Q195 3 195 16 V28" stroke="#b5522a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M205 28 V16 Q205 3 220 3 Q235 3 235 16 V28" stroke="#b5522a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M200 10 L202 16 L208 16 L203 20 L205 26 L200 22 L195 26 L197 20 L192 16 L198 16 Z" stroke="#b5522a" strokeWidth="0.8" strokeLinejoin="round" fill="none" />
            <path d="M325 28 L335 13 L345 28 L355 13 L365 28 L375 13 L385 28" stroke="#b5522a" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
            <path d="M100 28 L112 18 L124 28" stroke="#b5522a" strokeWidth="1" fill="none" />
            <path d="M135 28 L145 20 L155 28" stroke="#b5522a" strokeWidth="1" fill="none" />
            <path d="M245 28 L255 20 L265 28" stroke="#b5522a" strokeWidth="1" fill="none" />
            <path d="M276 28 L288 18 L300 28" stroke="#b5522a" strokeWidth="1" fill="none" />
          </svg>
        </div>
      </section>

      {/* ──── STATS ──── */}
      <section className="border-b border-stone-100 bg-white px-4 py-6">
        <div className="mx-auto grid max-w-4xl grid-cols-4 gap-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-xl font-bold text-stone-900 sm:text-2xl">{s.value}</p>
              <p className="text-xs text-stone-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ──── SPÉCIALITÉS ──── */}
      <section className="bg-white px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-stone-900">
              Toutes les spécialités
            </h2>
            <p className="mt-1 text-sm text-stone-500">
              Des architectes spécialisés pour chaque type de projet
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
            {SPECIALTIES.map((s) => {
              const Icon = s.icon;
              return (
                <Card
                  key={s.label}
                  className="group cursor-pointer border-stone-100 transition-all hover:border-[#b5522a]/30 hover:shadow-sm"
                >
                  <CardContent className="p-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-stone-100 text-stone-600 transition-colors group-hover:bg-[#b5522a]/10 group-hover:text-[#b5522a]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="mt-2.5 text-sm font-semibold text-stone-900">{s.label}</h3>
                    <p className="mt-0.5 text-xs text-stone-500">{s.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──── GALERIE PROJETS ──── */}
      <section className="bg-stone-950 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              L&apos;excellence architecturale marocaine
            </h2>
            <p className="mt-1 text-sm text-stone-500">
              Découvrez les projets réalisés par nos architectes partenaires
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="group relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image src="/images/hero-villa.jpg" alt="Villa moderne Maroc" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-3">
                <p className="text-sm font-semibold text-white">Villas & Résidentiel</p>
                <p className="text-xs text-stone-300">Casablanca, Marrakech</p>
              </div>
            </div>
            <div className="group relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image src="/images/interieur-luxe.jpg" alt="Architecture intérieur Maroc" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-3">
                <p className="text-sm font-semibold text-white">Architecture d&apos;intérieur</p>
                <p className="text-xs text-stone-300">Design contemporain marocain</p>
              </div>
            </div>
            <div className="group relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image src="/images/marrakech-skyline.jpg" alt="Marrakech architecture" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-3">
                <p className="text-sm font-semibold text-white">Patrimoine & Rénovation</p>
                <p className="text-xs text-stone-300">Riads, médinas, patrimoine</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──── FEATURED ARCHITECTS ──── */}
      <section className="bg-stone-50 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-stone-900">
                Architectes à la une
              </h2>
              <p className="mt-1 text-sm text-stone-500">
                Cabinets premium vérifiés et recommandés
              </p>
            </div>
            <Link
              href="/architecte/casablanca"
              className="hidden items-center gap-1 text-sm font-medium text-[#b5522a] hover:underline md:inline-flex"
            >
              Voir tous <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {FEATURED.map((a) => (
              <ArchitectCard key={a.id} architect={a} />
            ))}
          </div>
        </div>
      </section>

      {/* ──── VILLES ──── */}
      <section className="bg-white px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-stone-900">
              Architectes par ville
            </h2>
            <p className="mt-1 text-sm text-stone-500">
              Trouvez un professionnel de proximité
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CITIES.map((c) => (
              <Link
                key={c.slug}
                href={`/architecte/${c.slug}`}
                className="group flex items-start gap-3 rounded-xl border border-stone-100 bg-white p-4 transition-all hover:border-[#b5522a]/30 hover:shadow-sm"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-stone-100 text-stone-500 transition-colors group-hover:bg-[#b5522a]/10 group-hover:text-[#b5522a]">
                  <MapPin className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-stone-900 group-hover:text-[#b5522a] transition-colors">
                      Architecte {c.name}
                    </h3>
                    <Badge variant="secondary" className="text-[10px] font-normal">
                      {c.architectCount}+
                    </Badge>
                  </div>
                  <p className="mt-0.5 text-xs text-stone-400">{c.region}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-stone-500 line-clamp-2">
                    {c.description.slice(0, 90)}...
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ──── COMMENT ÇA MARCHE ──── */}
      <section className="bg-stone-950 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-white">Comment ça marche ?</h2>
          <p className="mt-1 text-sm text-stone-500">3 étapes simples</p>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { n: "01", title: "Recherchez", desc: "Choisissez votre ville et votre type de projet" },
              { n: "02", title: "Comparez", desc: "Consultez les portfolios, spécialités et avis" },
              { n: "03", title: "Contactez", desc: "Demandez un devis gratuit et sans engagement" },
            ].map((step) => (
              <div key={step.n}>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-stone-800 text-lg font-bold text-[#b5522a]">
                  {step.n}
                </div>
                <h3 className="mt-3 font-semibold text-white">{step.title}</h3>
                <p className="mt-1 text-sm text-stone-500">{step.desc}</p>
              </div>
            ))}
          </div>

          <Button size="lg" className="mt-10 rounded-full" asChild>
            <Link href="/architecte/casablanca">
              Trouver un architecte <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* ──── TRUST ──── */}
      <section className="bg-white px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-xl border border-stone-100 bg-stone-50 p-6 sm:p-8">
            <h2 className="text-lg font-bold text-stone-900">
              Pourquoi Bati.ma ?
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                "Architectes inscrits à l'Ordre du Maroc",
                "Portfolios et avis vérifiés",
                "Demande de devis 100% gratuite",
                "Couverture nationale (7 villes)",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#b5522a]" />
                  <span className="text-sm text-stone-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* ──── SEO TEXT ──── */}
      <section className="bg-white px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-lg font-bold text-stone-900 mb-3">
            L&apos;annuaire des architectes au Maroc
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-stone-500">
            <p>
              Bati.ma est la première plateforme dédiée aux architectes et
              professionnels du design au Maroc. Que vous cherchiez un{" "}
              <Link href="/architecte/casablanca" className="text-[#b5522a] hover:underline">
                architecte à Casablanca
              </Link>
              , un{" "}
              <Link href="/architecte/marrakech" className="text-[#b5522a] hover:underline">
                architecte à Marrakech
              </Link>{" "}
              pour rénover un riad, ou un{" "}
              <Link href="/architecte-interieur" className="text-[#b5522a] hover:underline">
                architecte d&apos;intérieur
              </Link>{" "}
              pour aménager votre appartement, notre annuaire vous permet de
              trouver le professionnel idéal.
            </p>
            <p>
              Tous les architectes inscrits sur Bati.ma sont des
              professionnels diplômés et membres de l&apos;Ordre des Architectes du
              Maroc. Consultez leurs portfolios, lisez les avis de leurs anciens
              clients et demandez un devis directement en ligne, gratuitement.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
