import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
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
import QuickLeadForm from "@/components/QuickLeadForm";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";


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

      {/* ──── HERO — Centered, Social Proof Sandwich ──── */}
      <section className="relative overflow-hidden bg-stone-950" id="devis">
        {/* Background image */}
        <Image
          src="/images/hero-villa.jpg"
          alt="Villa architecte Maroc"
          fill
          className="object-cover"
          priority
        />
        <div className="pointer-events-none absolute inset-0 bg-stone-950/70" />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 py-16 sm:px-8 sm:py-20 lg:py-28">
          {/* Social proof mini */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-1.5 mb-6">
            <span className="text-amber-400 text-sm font-medium">★ 4.7/5</span>
            <span className="h-3 w-px bg-stone-700" />
            <span className="text-sm text-stone-400">800+ architectes vérifiés</span>
          </div>

          {/* Headline */}
          <h1 className="text-center text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            Trouvez votre architecte
            <br />
            <span className="bg-gradient-to-r from-[#b5522a] to-[#e07a55] bg-clip-text text-transparent">
              au Maroc
            </span>
          </h1>

          <p className="mt-5 text-center text-base sm:text-lg leading-relaxed text-stone-400 max-w-lg">
            Décrivez votre projet, comparez les portfolios et recevez
            un devis gratuit sous 48h.
          </p>

          {/* Inline form */}
          <div className="mt-10 w-full">
            <QuickLeadForm variant="inline" />
          </div>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-stone-500">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#b5522a]" />
              Inscrits à l&apos;Ordre
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#b5522a]" />
              Devis 100% gratuit
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#b5522a]" />
              Réponse sous 48h
            </span>
          </div>

          {/* City pills */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            {CITIES.slice(0, 6).map((c) => (
              <Link
                key={c.slug}
                href={`/architecte/${c.slug}`}
                className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/40 transition-colors hover:border-[#b5522a]/60 hover:text-[#b5522a]"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom separator */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#b5522a]/30 to-transparent" />
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
            {CITIES.slice(0, 6).map((c) => (
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

          <div className="mt-4 text-center">
            <Link
              href="/architecte"
              className="inline-flex items-center gap-1 text-sm font-medium text-[#b5522a] hover:underline"
            >
              Voir les 14 villes <ArrowRight className="h-3.5 w-3.5" />
            </Link>
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

      {/* ──── TÉMOIGNAGES ──── */}
      <TestimonialCarousel />

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
