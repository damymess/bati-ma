import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Building2,
  ExternalLink,
  Tag,
  Banknote,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AO_IDS, getAppelOffreById } from "@/lib/appels-offres";
import { CITIES } from "@/lib/cities";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return AO_IDS.map((id) => ({ id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const ao = getAppelOffreById(id);
  if (!ao) return {};
  return {
    title: `${ao.title} | Appels d'offres Architecture Maroc — Bati.ma`,
    description: ao.description,
    openGraph: { title: ao.title, description: ao.description },
    alternates: { canonical: `https://bati.ma/appels-offres/${id}` },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("fr-MA", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const statusColors: Record<string, string> = {
  Ouvert: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Clôturé: "bg-stone-100 text-stone-500 border-stone-200",
  Attribué: "bg-blue-50 text-blue-700 border-blue-200",
};

export default async function AppelOffreDetailPage({ params }: Props) {
  const { id } = await params;
  const ao = getAppelOffreById(id);
  if (!ao) notFound();

  const cityName = CITIES.find((c) => c.slug === ao.city)?.name ?? ao.city;

  const schema = {
    "@context": "https://schema.org",
    "@type": "GovernmentService",
    name: ao.title,
    description: ao.description,
    provider: { "@type": "Organization", name: ao.organism },
    areaServed: { "@type": "City", name: cityName },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Breadcrumb items={[
        { label: "Accueil", href: "/" },
        { label: "Appels d'offres", href: "/appels-offres" },
        { label: ao.reference ?? ao.id },
      ]} />

      {/* Contenu */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Link
            href="/appels-offres"
            className="inline-flex items-center gap-1 text-xs text-stone-500 hover:text-stone-700 mb-6"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Retour aux appels d&apos;offres
          </Link>

          {/* Status + title */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <Badge
                variant="outline"
                className={`text-xs font-medium ${statusColors[ao.status]}`}
              >
                {ao.status}
              </Badge>
              <Badge variant="secondary" className="text-xs">
                {ao.sector}
              </Badge>
              <Badge variant="secondary" className="text-xs">
                {ao.type}
              </Badge>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4">
              {ao.title}
            </h1>
            <p className="text-stone-600 text-sm leading-relaxed">
              {ao.description}
            </p>
          </div>

          {/* Détails */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="rounded-xl border border-stone-200 p-4 space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Building2 className="h-4 w-4 text-stone-400" />
                <div>
                  <p className="text-xs text-stone-500">Organisme</p>
                  <p className="font-medium text-stone-900">{ao.organism}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-stone-400" />
                <div>
                  <p className="text-xs text-stone-500">Ville</p>
                  <p className="font-medium text-stone-900">{cityName}</p>
                </div>
              </div>
              {ao.reference && (
                <div className="flex items-center gap-2 text-sm">
                  <FileText className="h-4 w-4 text-stone-400" />
                  <div>
                    <p className="text-xs text-stone-500">Référence</p>
                    <p className="font-medium text-stone-900">{ao.reference}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="rounded-xl border border-stone-200 p-4 space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-stone-400" />
                <div>
                  <p className="text-xs text-stone-500">Date de publication</p>
                  <p className="font-medium text-stone-900">
                    {formatDate(ao.publishDate)}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-[#b5522a]" />
                <div>
                  <p className="text-xs text-stone-500">Date limite</p>
                  <p className="font-bold text-[#b5522a]">
                    {formatDate(ao.deadline)}
                  </p>
                </div>
              </div>
              {ao.budget && (
                <div className="flex items-center gap-2 text-sm">
                  <Banknote className="h-4 w-4 text-stone-400" />
                  <div>
                    <p className="text-xs text-stone-500">Budget estimé</p>
                    <p className="font-medium text-stone-900">{ao.budget}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" className="rounded-full" asChild>
              <a
                href={ao.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir sur {ao.source}{" "}
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full"
              asChild
            >
              <Link href="/inscription-architecte">
                Recevoir les alertes AO
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
