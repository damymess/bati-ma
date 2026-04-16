import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import QuickLeadForm from "@/components/QuickLeadForm";
import ArchitectCard from "@/components/ArchitectCard";
import { CITIES, getCityBySlug, CITY_SLUGS } from "@/lib/cities";
import { getArchitectsByCity } from "@/lib/architects";
import { SPECIALTIES_SEO, SPECIALTY_SLUGS, getSpecialtyBySlug } from "@/lib/specialties";

export const revalidate = 86400;

type Props = { params: Promise<{ city: string; specialite: string }> };

export async function generateStaticParams() {
  const params: { city: string; specialite: string }[] = [];
  for (const city of CITY_SLUGS) {
    for (const spec of SPECIALTY_SLUGS) {
      params.push({ city, specialite: spec });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city, specialite } = await params;
  const cityData = getCityBySlug(city);
  const spec = getSpecialtyBySlug(specialite);
  if (!cityData || !spec) return {};

  const title = `Architecte ${spec.label} à ${cityData.name} — Bati.ma`;
  const description = `Trouvez un architecte spécialisé en ${spec.description} à ${cityData.name}. Comparez les profils, portfolios et demandez un devis gratuit.`;

  return {
    title,
    description,
    keywords: spec.keywords.map((k) => `${k} ${cityData.name.toLowerCase()}`),
    alternates: { canonical: `https://bati.ma/architecte/${city}/specialite/${specialite}` },
    openGraph: { title, description },
  };
}

export default async function SpecialitePage({ params }: Props) {
  const { city, specialite } = await params;
  const cityData = getCityBySlug(city);
  const spec = getSpecialtyBySlug(specialite);

  if (!cityData || !spec) notFound();

  const allArchitects = await getArchitectsByCity(city);

  // Filter by specialty — no fallback to avoid duplicate content with city page
  const filtered = allArchitects.filter((a) => {
    const specs = (a.specialties || []) as string[];
    return specs.some((s) => s.toLowerCase().includes(spec.label.toLowerCase().split(" ")[0]));
  });

  const otherSpecs = SPECIALTIES_SEO.filter((s) => s.slug !== specialite);

  const faq = [
    {
      q: `Quel est le prix d'un architecte ${spec.label.toLowerCase()} à ${cityData.name} ?`,
      a: `Les honoraires d'un architecte spécialisé en ${spec.description} à ${cityData.name} se situent entre ${cityData.avgPrice}. Le tarif varie selon la surface, la complexité et les finitions souhaitées.`,
    },
    {
      q: `Pourquoi choisir un architecte ${spec.label.toLowerCase()} à ${cityData.name} ?`,
      a: `Un architecte spécialisé en ${spec.description} connaît les normes locales, les matériaux disponibles à ${cityData.name} et peut optimiser votre projet en termes de coût et de design.`,
    },
    {
      q: `Comment trouver un architecte ${spec.label.toLowerCase()} à ${cityData.name} ?`,
      a: `Bati.ma référence les architectes spécialisés en ${spec.description} à ${cityData.name}. Comparez les profils, consultez les portfolios et demandez un devis gratuit en ligne.`,
    },
    {
      q: `Quelles sont les étapes d'un projet ${spec.label.toLowerCase()} à ${cityData.name} ?`,
      a: `Un projet de ${spec.description} passe par plusieurs étapes : consultation initiale, étude de faisabilité, avant-projet (APS/APD), dépôt du permis de construire, choix des entreprises, suivi de chantier et réception des travaux. Un architecte spécialisé vous accompagne à chaque étape.`,
    },
    {
      q: `Faut-il un permis de construire pour un projet ${spec.label.toLowerCase()} à ${cityData.name} ?`,
      a: `Au Maroc, un permis de construire est obligatoire pour toute construction neuve ou extension significative. Pour les projets de ${spec.description}, l'architecte prépare le dossier technique et assure la conformité aux plans d'aménagement de ${cityData.name}.`,
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
        { label: spec.label },
      ]} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#f5f0ea] to-white py-10 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#b5522a] text-sm font-medium uppercase tracking-widest mb-2">
            {spec.label} — {cityData.name}
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-3">
            Architecte {spec.label} à {cityData.name}
          </h1>
          <p className="text-stone-600 leading-relaxed max-w-3xl">
            Trouvez un architecte spécialisé en {spec.description} à {cityData.name}.
            Comparez les profils de {allArchitects.length}+ professionnels et demandez un devis gratuit.
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
            Architectes {spec.label.toLowerCase()} à {cityData.name}
          </h2>
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filtered.slice(0, 8).map((a) => (
                <ArchitectCard key={a.id} architect={a} />
              ))}
            </div>
          ) : (
            <div className="bg-white border border-stone-200 rounded-xl p-6 text-center space-y-3">
              <p className="text-stone-600 text-sm">
                Aucun architecte spécialisé en {spec.label.toLowerCase()} n&apos;est encore référencé à {cityData.name}.
              </p>
              <p className="text-stone-500 text-sm">
                Découvrez les <Link href={`/architecte/${city}`} className="text-[#b5522a] hover:underline font-medium">architectes disponibles à {cityData.name}</Link> ou{" "}
                <Link href="/demande-devis" className="text-[#b5522a] hover:underline font-medium">demandez un devis gratuit</Link> pour être mis en relation.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-10 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-4 text-sm text-stone-600 leading-relaxed">
          <h2 className="text-xl font-bold text-stone-900">
            Architecte {spec.label.toLowerCase()} à {cityData.name} : guide pratique
          </h2>
          <p>
            Vous recherchez un architecte spécialisé en {spec.description} à {cityData.name} ?
            Le marché de l&apos;architecture à {cityData.name} compte plus de {cityData.architectCount}{" "}
            professionnels inscrits à l&apos;Ordre des Architectes du Maroc, dont de nombreux
            spécialistes en {spec.label.toLowerCase()}.
          </p>
          <p>{spec.seoDescription}</p>
          <p>
            Les projets de {spec.description} à {cityData.name} requièrent une expertise
            spécifique : connaissance des réglementations locales, des matériaux
            disponibles et des contraintes urbanistiques de la ville. Un architecte
            spécialisé saura optimiser votre projet en termes de budget, de délais et de
            conformité aux normes en vigueur au Maroc.
          </p>

          <h3 className="text-lg font-semibold text-stone-800 pt-2">
            Pourquoi faire appel à un architecte {spec.label.toLowerCase()} ?
          </h3>
          <p>
            Au Maroc, tout projet de construction dépassant 150 m² nécessite obligatoirement
            l&apos;intervention d&apos;un architecte agréé. Pour les projets de {spec.description},
            un spécialiste apporte une valeur ajoutée considérable : il maîtrise les
            techniques propres à ce type de réalisation, connaît les fournisseurs locaux de{" "}
            {cityData.name} et anticipe les contraintes réglementaires spécifiques.
          </p>
          <p>
            L&apos;architecte {spec.label.toLowerCase()} intervient dès la phase de conception :
            étude de faisabilité, avant-projet sommaire (APS), avant-projet détaillé (APD),
            puis suivi de chantier. À {cityData.name}, les honoraires se situent généralement
            entre {cityData.avgPrice}, selon la complexité et la surface du projet.
          </p>

          <h3 className="text-lg font-semibold text-stone-800 pt-2">
            Les étapes d&apos;un projet {spec.label.toLowerCase()} à {cityData.name}
          </h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Consultation initiale et définition du cahier des charges</li>
            <li>Étude de faisabilité et esquisse architecturale</li>
            <li>Obtention du permis de construire auprès de la commune</li>
            <li>Choix des entreprises et lancement des travaux</li>
            <li>Suivi de chantier et réception des travaux</li>
          </ul>
          <p>
            Pour comparer les architectes spécialisés en {spec.label.toLowerCase()} à{" "}
            {cityData.name}, nous recommandons de demander au moins 3 devis via Bati.ma.
            Chaque profil inclut le portfolio, les certifications et les avis clients.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 px-4 sm:px-6 bg-stone-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-stone-900 mb-6">
            Questions fréquentes
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

      {/* Other specialties + cities */}
      <section className="py-10 px-4 sm:px-6 bg-[#f5f0ea]">
        <div className="max-w-5xl mx-auto space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-stone-900 mb-3">
              Autres spécialités à {cityData.name}
            </h2>
            <div className="flex flex-wrap gap-2">
              {otherSpecs.map((s) => (
                <Link
                  key={s.slug}
                  href={`/architecte/${city}/specialite/${s.slug}`}
                  className="bg-white border border-stone-200 text-stone-700 text-sm px-4 py-2 rounded-full hover:border-[#b5522a] hover:text-[#b5522a] transition-colors"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-stone-900 mb-3">
              {spec.label} dans d&apos;autres villes
            </h2>
            <div className="flex flex-wrap gap-2">
              {CITIES.filter((c) => c.slug !== city).slice(0, 6).map((c) => (
                <Link
                  key={c.slug}
                  href={`/architecte/${c.slug}/specialite/${specialite}`}
                  className="bg-white border border-stone-200 text-stone-700 text-sm px-4 py-2 rounded-full hover:border-[#b5522a] hover:text-[#b5522a] transition-colors"
                >
                  {spec.label} {c.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
