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

      {/* ──── MOBILE HERO — Compact app style (Airbnb pattern) ──── */}
      <section className="bg-stone-950 px-4 pt-4 pb-6 lg:hidden" id="devis">
        <h1 className="text-xl font-bold text-white">
          Trouvez votre architecte{" "}
          <span className="text-[#b5522a]">au Maroc</span>
        </h1>

        {/* Search bar — large, prominent */}
        <div className="relative mt-4">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-stone-500" />
          <Input
            placeholder="Ville, quartier ou spécialité..."
            className="h-12 rounded-2xl border-stone-700 bg-stone-900 pl-12 text-base text-white placeholder:text-stone-500 focus-visible:ring-[#b5522a]"
          />
        </div>

        {/* City shortcuts — horizontal scroll */}
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          {CITIES.slice(0, 5).map((c) => (
            <Link
              key={c.slug}
              href={`/architecte/${c.slug}`}
              className="shrink-0 rounded-full border border-stone-800 px-3 py-1.5 text-xs text-stone-400 transition-colors active:border-[#b5522a]/60 active:text-[#b5522a]"
            >
              {c.name}
            </Link>
          ))}
        </div>
      </section>

      {/* ──── DESKTOP HERO — Split layout: text left, skyline right ──── */}
      <section className="relative hidden overflow-hidden bg-stone-950 lg:block">
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

        <div className="relative mx-auto flex max-w-7xl flex-row items-stretch">
          {/* ── Left: Text + Search ── */}
          <div className="flex flex-1 flex-col justify-center px-8 py-20 pr-12">
            <Badge variant="outline" className="mb-5 w-fit border-stone-700 text-stone-400 text-sm">
              Annuaire Architectes Maroc — 2026
            </Badge>

            <h1 className="text-6xl font-bold tracking-tight text-white">
              Trouvez votre architecte
              <br />
              <span className="bg-gradient-to-r from-[#b5522a] to-[#e07a55] bg-clip-text text-transparent">
                au Maroc
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-stone-400">
              800+ architectes et designers d&apos;intérieur vérifiés. Portfolios réels,
              avis clients vérifiés et demande de devis gratuite.
            </p>

            {/* Search */}
            <div className="mt-8 flex max-w-lg flex-row gap-2" id="devis">
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

            {/* City pills */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="text-xs text-stone-600">Villes populaires :</span>
              {CITIES.slice(0, 5).map((c) => (
                <Link
                  key={c.slug}
                  href={`/architecte/${c.slug}`}
                  className="rounded-full border border-stone-800 px-3 py-1 text-xs text-stone-400 transition-colors hover:border-[#b5522a]/60 hover:text-[#b5522a]"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>

          {/* ── Right: Animated skyline ── */}
          <div className="relative flex min-h-[400px] w-[45%] items-end justify-center overflow-hidden">
            <HeroSkyline />
          </div>
        </div>

        {/* Separator */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#b5522a]/30 to-transparent" />
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
