import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Star, Phone, Globe, Briefcase, MapPin, CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { getCityBySlug } from "@/lib/cities";
import { getArchitectById, getArchitectsByCity } from "@/lib/architects";

export const revalidate = 86400;
export const dynamicParams = true;

type Props = { params: Promise<{ city: string; id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city, id } = await params;
  const architect = await getArchitectById(id);
  if (!architect) return {};

  const cityData = getCityBySlug(city);
  const cityName = cityData?.name ?? city;
  const title = `${architect.name} — Architecte à ${cityName}`;
  const description = architect.description
    ? `${architect.description.slice(0, 140)}…`
    : `${architect.name} est un architecte à ${cityName} avec ${architect.experience} ans d'expérience. Demandez un devis gratuit sur Bati.ma.`;

  return {
    title,
    description,
    openGraph: { title, description },
    alternates: { canonical: `https://bati.ma/architecte/${city}/${id}` },
  };
}

export default async function ArchitectProfilePage({ params }: Props) {
  const { city, id } = await params;
  const [architect, cityArchitects] = await Promise.all([
    getArchitectById(id),
    getArchitectsByCity(city),
  ]);

  if (!architect) notFound();

  const cityData = getCityBySlug(city);
  const cityName = cityData?.name ?? city;

  const initials = architect.name
    .split(" ")
    .map((w: string) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const related = cityArchitects.filter((a) => a.id !== id).slice(0, 4);

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://bati.ma/architecte/${city}/${id}`,
    name: architect.name,
    description: architect.description || undefined,
    telephone: architect.phone || undefined,
    address: {
      "@type": "PostalAddress",
      addressLocality: cityName,
      addressCountry: "MA",
    },
    ...(architect.rating > 0 && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: architect.rating,
        reviewCount: architect.reviewCount,
      },
    }),
    url: `https://bati.ma/architecte/${city}/${id}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumb items={[
        { label: "Accueil", href: "/" },
        { label: "Architectes", href: "/architecte" },
        { label: `Architecte ${cityName}`, href: `/architecte/${city}` },
        { label: architect.name },
      ]} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#f5f0ea] to-white py-10 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <Link href={`/architecte/${city}`} className="inline-flex items-center gap-1 text-sm text-stone-500 hover:text-[#b5522a] mb-6 transition-colors">
            <ArrowLeft className="h-3.5 w-3.5" />
            Retour aux architectes de {cityName}
          </Link>

          <div className="flex items-start gap-5 flex-wrap sm:flex-nowrap">
            <Avatar className="h-20 w-20 border-2 border-white shadow-sm shrink-0">
              <AvatarFallback className="bg-stone-900 text-white text-2xl font-bold">
                {initials}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h1 className="text-2xl sm:text-3xl font-bold text-stone-900">{architect.name}</h1>
                {architect.premium && (
                  <Badge className="bg-[#b5522a] text-white text-xs">Premium</Badge>
                )}
              </div>

              <div className="flex items-center gap-2 text-sm text-stone-500 mb-3">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-[#b5522a]" />
                <span>Architecte à {cityName}</span>
                {architect.experience > 0 && (
                  <>
                    <span className="text-stone-300">·</span>
                    <Briefcase className="h-3.5 w-3.5 shrink-0" />
                    <span>{architect.experience} ans d&apos;expérience</span>
                  </>
                )}
              </div>

              {architect.rating > 0 && (
                <div className="flex items-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className={`h-4 w-4 ${s <= Math.round(architect.rating) ? "fill-amber-400 text-amber-400" : "fill-stone-200 text-stone-200"}`} />
                  ))}
                  <span className="ml-1 text-sm text-stone-600 font-medium">{architect.rating.toFixed(1)}</span>
                  <span className="text-sm text-stone-400">({architect.reviewCount} avis)</span>
                </div>
              )}

              <div className="flex flex-wrap gap-1.5">
                {architect.specialties.map((s) => (
                  <Badge key={s} variant="secondary" className="text-xs">{s}</Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2 shrink-0 w-full sm:w-auto">
              <Button className="bg-[#b5522a] hover:bg-[#9e4725] text-white rounded-full" asChild>
                <Link href={`/soumettre-projet?architect=${id}&city=${city}`}>
                  Demander un devis
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
              {architect.phone && (
                <Button variant="outline" className="rounded-full" asChild>
                  <a href={`tel:${architect.phone}`}>
                    <Phone className="mr-1.5 h-4 w-4" />
                    {architect.phone}
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Corps */}
      <section className="py-10 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Description */}
          <div className="lg:col-span-2 space-y-6">
            {architect.description && (
              <Card>
                <CardContent className="pt-5">
                  <h2 className="font-semibold text-stone-900 mb-3">À propos du cabinet</h2>
                  <p className="text-sm text-stone-600 leading-relaxed">{architect.description}</p>
                </CardContent>
              </Card>
            )}

            {/* CTA devis */}
            <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-6 text-center">
              <h3 className="font-semibold text-stone-900 mb-1">Intéressé par ce cabinet ?</h3>
              <p className="text-sm text-stone-500 mb-4">Soumettez votre projet et recevez une réponse sous 48h.</p>
              <Button className="bg-[#b5522a] hover:bg-[#9e4725] text-white rounded-full" asChild>
                <Link href={`/soumettre-projet?architect=${id}&city=${city}`}>
                  Demander un devis gratuit
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Sidebar infos */}
          <div className="space-y-4">
            <Card>
              <CardContent className="pt-5 space-y-3">
                <h2 className="font-semibold text-stone-900 text-sm">Informations</h2>
                <div className="space-y-2 text-sm text-stone-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 shrink-0 text-stone-400" />
                    {cityName}
                  </div>
                  {architect.experience > 0 && (
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 shrink-0 text-stone-400" />
                      {architect.experience} ans d&apos;expérience
                    </div>
                  )}
                  {architect.phone && (
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 shrink-0 text-stone-400" />
                      <a href={`tel:${architect.phone}`} className="hover:text-[#b5522a]">{architect.phone}</a>
                    </div>
                  )}
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-stone-400 mt-0.5" />
                    <span>Inscrit sur bati.ma</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-stone-50 border-stone-100">
              <CardContent className="pt-5">
                <p className="text-xs text-stone-500 mb-2 font-medium uppercase tracking-wide">Zones d&apos;intervention</p>
                <div className="flex flex-wrap gap-1.5">
                  <Badge variant="outline" className="text-xs">{cityName}</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Autres architectes */}
      {related.length > 0 && (
        <section className="py-10 px-4 sm:px-6 bg-stone-50">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-stone-900">Autres architectes à {cityName}</h2>
              <Link href={`/architecte/${city}`} className="text-sm text-[#b5522a] hover:underline">
                Voir tous →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((a) => (
                <Link key={a.id} href={`/architecte/${city}/${a.id}`} className="block group">
                  <div className="bg-white border border-stone-200 rounded-xl p-4 flex items-start gap-3 hover:shadow-md hover:border-[#b5522a]/30 transition-all">
                    <Avatar className="h-10 w-10 shrink-0 border border-stone-200">
                      <AvatarFallback className="bg-stone-900 text-white text-xs font-semibold">
                        {a.name.split(" ").map((w: string) => w[0]).slice(0, 2).join("").toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                      <p className="font-medium text-stone-900 text-sm group-hover:text-[#b5522a] transition-colors truncate">{a.name}</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {a.specialties.slice(0, 2).map((s) => (
                          <Badge key={s} variant="secondary" className="text-[10px] font-normal">{s}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
