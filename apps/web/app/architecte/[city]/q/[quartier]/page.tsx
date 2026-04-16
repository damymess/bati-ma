import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import QuickLeadForm from "@/components/QuickLeadForm";
import { getCityBySlug } from "@/lib/cities";
import { getArchitectsByCity } from "@/lib/architects";
import ArchitectCard from "@/components/ArchitectCard";
import { QUARTIER_PARAMS, getQuartier, getQuartiersByCity } from "@/lib/quartiers";

export const revalidate = 86400;

type Props = { params: Promise<{ city: string; quartier: string }> };

export async function generateStaticParams() {
  return QUARTIER_PARAMS;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city, quartier } = await params;
  const q = getQuartier(city, quartier);
  if (!q) return {};

  const title = `Architecte à ${q.name}, ${q.cityName} — Bati.ma`;
  const description = `Trouvez un architecte à ${q.name} (${q.cityName}). ${q.description.slice(0, 120)}`;

  return {
    title,
    description,
    keywords: [`architecte ${q.name.toLowerCase()}`, `architecte ${q.name.toLowerCase()} ${q.cityName.toLowerCase()}`, `cabinet architecture ${q.name.toLowerCase()}`],
    alternates: { canonical: `https://bati.ma/architecte/${city}/q/${quartier}` },
    openGraph: { title, description },
  };
}

export default async function QuartierPage({ params }: Props) {
  const { city, quartier } = await params;
  const q = getQuartier(city, quartier);
  const cityData = getCityBySlug(city);

  if (!q || !cityData) notFound();

  const architects = await getArchitectsByCity(city);
  const otherQuartiers = getQuartiersByCity(city).filter((oq) => oq.slug !== quartier);

  const faq = [
    {
      q: `Combien coûte un architecte à ${q.name}, ${q.cityName} ?`,
      a: `Les honoraires d'un architecte à ${q.name} varient entre ${cityData.avgPrice} selon la complexité du projet. Demandez un devis gratuit sur Bati.ma pour obtenir une estimation précise.`,
    },
    {
      q: `Quel type de projet un architecte à ${q.name} peut-il réaliser ?`,
      a: `Les architectes de ${q.name} réalisent des villas, appartements, locaux commerciaux, rénovations et projets d'intérieur. ${q.description}`,
    },
    {
      q: `Comment trouver le meilleur architecte à ${q.name} ?`,
      a: `Comparez les profils, portfolios et avis des architectes sur Bati.ma. Demandez plusieurs devis pour trouver le professionnel adapté à votre projet à ${q.name}.`,
    },
    {
      q: `Faut-il un permis de construire à ${q.name}, ${q.cityName} ?`,
      a: `Oui, un permis de construire est obligatoire pour toute construction neuve ou extension à ${q.name}. L'architecte prépare le dossier technique et le dépose auprès de la commune de ${q.cityName}. Le délai moyen d'obtention est de 2 à 3 mois.`,
    },
    {
      q: `Quels types de projets peut-on réaliser à ${q.name} ?`,
      a: `${q.description} Les architectes de ${q.name} réalisent des constructions neuves (villas, immeubles), des rénovations, de l'aménagement intérieur et des projets commerciaux, dans le respect du plan d'aménagement local.`,
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumb items={[
        { label: "Accueil", href: "/" },
        { label: "Architectes", href: "/architecte" },
        { label: cityData.name, href: `/architecte/${city}` },
        { label: q.name },
      ]} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#f5f0ea] to-white py-10 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#b5522a] text-sm font-medium uppercase tracking-widest mb-2">
            {q.cityName} — {q.name}
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-3">
            Architecte à {q.name}, {q.cityName}
          </h1>
          <p className="text-stone-600 leading-relaxed max-w-3xl">
            {q.description}
          </p>
        </div>
      </section>

      {/* Quick Lead Form */}
      <section className="py-8 px-4 sm:px-6 bg-white">
        <div className="max-w-md mx-auto">
          <QuickLeadForm />
        </div>
      </section>

      {/* Architectes */}
      <section className="py-10 px-4 sm:px-6 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-stone-900 mb-6">
            Architectes disponibles à {q.name}
          </h2>
          {architects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {architects.slice(0, 8).map((a) => (
                <ArchitectCard key={a.id} architect={a} />
              ))}
            </div>
          ) : (
            <p className="text-stone-500 text-sm">
              Aucun architecte trouvé dans ce quartier pour le moment.
              Consultez les <Link href={`/architecte/${city}`} className="text-[#b5522a] hover:underline">architectes de {cityData.name}</Link>.
            </p>
          )}
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-10 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-4 text-sm text-stone-600 leading-relaxed">
          <h2 className="text-xl font-bold text-stone-900">
            Trouver un architecte à {q.name}, {q.cityName}
          </h2>
          <p>
            {q.name} est un quartier de {q.cityName} qui offre de nombreuses opportunités
            architecturales. {q.description} Que vous souhaitiez construire, rénover ou aménager
            un espace, les architectes référencés sur Bati.ma connaissent parfaitement les
            spécificités de {q.name} : réglementation d&apos;urbanisme locale, style
            architectural du quartier et contraintes techniques.
          </p>

          <h3 className="text-lg font-semibold text-stone-800 pt-2">
            Pourquoi choisir un architecte local à {q.name} ?
          </h3>
          <p>
            Un architecte qui connaît {q.name} maîtrise le plan d&apos;aménagement de la
            commune, les règles de hauteur, de prospect et de COS (coefficient d&apos;occupation
            du sol) propres au quartier. Cette expertise locale permet d&apos;éviter les
            refus de permis de construire et d&apos;optimiser la surface constructible de
            votre terrain.
          </p>
          <p>
            À {q.cityName}, les honoraires d&apos;un architecte se situent entre{" "}
            {cityData.avgPrice}. Le tarif dépend de la surface du projet, de la complexité
            architecturale et du niveau de finition souhaité. L&apos;architecte intervient
            de la conception à la réception des travaux.
          </p>

          <h3 className="text-lg font-semibold text-stone-800 pt-2">
            Les démarches pour construire à {q.name}
          </h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Vérifier la note de renseignement urbanistique auprès de la commune</li>
            <li>Choisir un architecte agréé par l&apos;Ordre des Architectes du Maroc</li>
            <li>Réaliser l&apos;étude de sol géotechnique (obligatoire depuis le séisme de 2023)</li>
            <li>Déposer le dossier de permis de construire</li>
            <li>Lancer les travaux avec un suivi de chantier régulier</li>
          </ul>
          <p>
            Pour comparer les architectes disponibles à {q.name}, nous vous recommandons de
            demander au moins 3 devis via Bati.ma. Chaque profil inclut le portfolio, les
            certifications et les avis clients.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 px-4 sm:px-6 bg-stone-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-stone-900 mb-6">
            Questions fréquentes — Architecte {q.name}
          </h2>
          <div className="space-y-4">
            {faq.map((f) => (
              <details key={f.q} className="group border border-stone-200 rounded-lg overflow-hidden bg-white">
                <summary className="flex items-center justify-between px-4 py-3 cursor-pointer text-sm font-medium text-stone-800 hover:bg-stone-50">
                  {f.q}
                  <span className="text-stone-400 group-open:rotate-180 transition-transform text-lg">↓</span>
                </summary>
                <div className="px-4 pb-4 pt-1 text-sm text-stone-600 leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Other quartiers */}
      {otherQuartiers.length > 0 && (
        <section className="py-10 px-4 sm:px-6 bg-[#f5f0ea]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-lg font-semibold text-stone-900 mb-4">
              Autres quartiers à {q.cityName}
            </h2>
            <div className="flex flex-wrap gap-2">
              {otherQuartiers.map((oq) => (
                <Link
                  key={oq.slug}
                  href={`/architecte/${city}/q/${oq.slug}`}
                  className="bg-white border border-stone-200 text-stone-700 text-sm px-4 py-2 rounded-full hover:border-[#b5522a] hover:text-[#b5522a] transition-colors"
                >
                  Architecte {oq.name}
                </Link>
              ))}
              <Link
                href={`/architecte/${city}`}
                className="bg-white border border-stone-200 text-stone-700 text-sm px-4 py-2 rounded-full hover:border-[#b5522a] hover:text-[#b5522a] transition-colors"
              >
                Tous les architectes de {q.cityName}
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
