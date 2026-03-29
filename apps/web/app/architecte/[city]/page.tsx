import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CITIES, getCityBySlug, CITY_SLUGS } from "@/lib/cities";
import { getArchitectsByCity } from "@/lib/architects";
import ArchitectCard from "@/components/ArchitectCard";

export const revalidate = 86400;

type Props = { params: Promise<{ city: string }> };

export async function generateStaticParams() {
  return CITY_SLUGS.map((city) => ({ city }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const data = getCityBySlug(city);
  if (!data) return {};

  const title = `Architecte ${data.name} — Cabinets et Professionnels`;
  const description = `Trouvez un architecte à ${data.name} parmi ${data.architectCount}+ professionnels vérifiés. Portfolios, avis et devis gratuit. Résidentiel, commercial, intérieur, patrimoine.`;

  return {
    title,
    description,
    keywords: data.keywords,
    openGraph: { title, description },
    alternates: {
      canonical: `https://bati.ma/architecte/${city}`,
    },
  };
}

export default async function CityPage({ params }: Props) {
  const { city } = await params;
  const data = getCityBySlug(city);
  if (!data) notFound();

  const architects = await getArchitectsByCity(city);
  const otherCities = CITIES.filter((c) => c.slug !== city).slice(0, 5);

  const faq = [
    {
      q: `Combien coûte un architecte à ${data.name} ?`,
      a: `Les honoraires d'un architecte à ${data.name} varient selon le type et la complexité du projet. En général, les honoraires se situent entre ${data.avgPrice} du coût total des travaux. Pour un projet résidentiel standard, comptez entre 8 et 15 % du montant des travaux TTC.`,
    },
    {
      q: `Est-il obligatoire de faire appel à un architecte à ${data.name} ?`,
      a: `Au Maroc, le recours à un architecte agréé est obligatoire pour toute construction dont la surface de plancher dépasse 150 m². Pour les projets en dessous de ce seuil, il est fortement recommandé car l'architecte est responsable du respect des règles d'urbanisme et du permis de construire.`,
    },
    {
      q: `Comment choisir un architecte à ${data.name} ?`,
      a: `Pour choisir votre architecte à ${data.name}, vérifiez qu'il est inscrit à l'Ordre des Architectes du Maroc, consultez son portfolio de réalisations, lisez les avis de ses anciens clients, et rencontrez plusieurs professionnels avant de vous décider. Bati.ma facilite cette démarche en vous donnant accès à tous ces éléments.`,
    },
    {
      q: `Quels types de projets les architectes de ${data.name} réalisent-ils ?`,
      a: `Les architectes de ${data.name} interviennent sur tous types de projets : villas et maisons individuelles, appartements, immeubles résidentiels, bureaux et locaux commerciaux, hôtels, équipements publics, et rénovations de patrimoine. Certains se spécialisent dans l'architecture d'intérieur et la décoration.`,
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Architectes à ${data.name}`,
    description: `Liste des meilleurs architectes à ${data.name}, Maroc`,
    numberOfItems: architects.length,
    itemListElement: architects.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "LocalBusiness",
        name: a.name,
        address: {
          "@type": "PostalAddress",
          addressLocality: data.name,
          addressCountry: "MA",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: a.rating,
          reviewCount: a.reviewCount,
        },
      },
    })),
  };

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 pt-4 pb-0 text-xs text-stone-400">
        <Link href="/" className="hover:text-[#b5522a]">Accueil</Link>
        {" › "}
        <Link href="/architecte" className="hover:text-[#b5522a]">Architectes</Link>
        {" › "}
        <span className="text-stone-600">{data.name}</span>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#f5f0ea] to-white py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-[#b5522a] text-sm font-medium uppercase tracking-widest mb-2">
              {data.region}
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-3">
              Architecte {data.name}
            </h1>
            <p className="text-stone-600 leading-relaxed mb-4">
              {data.description}
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-stone-500">
              <span className="flex items-center gap-1">
                <span className="text-[#b5522a]">✓</span>
                {data.architectCount}+ architectes vérifiés
              </span>
              <span className="flex items-center gap-1">
                <span className="text-[#b5522a]">✓</span>
                Devis gratuit et sans engagement
              </span>
              <span className="flex items-center gap-1">
                <span className="text-[#b5522a]">✓</span>
                Membres Ordre des Architectes Maroc
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Listings */}
      <section className="py-10 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-stone-900">
              {architects.length > 0
                ? `${architects.length} architectes à ${data.name}`
                : `Architectes à ${data.name}`}
            </h2>
            <div className="text-sm text-stone-500">
              Triés par : <span className="text-stone-800 font-medium">Recommandés</span>
            </div>
          </div>

          {architects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {architects.map((a) => (
                <ArchitectCard key={a.id} architect={a} />
              ))}
            </div>
          ) : (
            <div className="bg-stone-50 border border-stone-100 rounded-xl p-8 text-center mb-8">
              <p className="text-stone-500 mb-3">
                La liste des architectes de {data.name} est en cours de
                constitution.
              </p>
              <p className="text-sm text-stone-400">
                Vous êtes architecte à {data.name} ?{" "}
                <a href="#inscription" className="text-[#b5522a] hover:underline">
                  Inscrivez votre cabinet gratuitement
                </a>
              </p>
            </div>
          )}

          {/* CTA inscription */}
          <div
            id="inscription"
            className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-6 text-center"
          >
            <h3 className="font-semibold text-stone-900 mb-1">
              Vous êtes architecte à {data.name} ?
            </h3>
            <p className="text-sm text-stone-500 mb-4">
              Inscrivez votre cabinet gratuitement et recevez des demandes de
              devis qualifiées.
            </p>
            <Link href="/inscription-architecte" className="inline-block bg-[#b5522a] text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-[#9a4522] transition-colors">
              Inscrire mon cabinet — Gratuit
            </Link>
          </div>
        </div>
      </section>

      {/* Contenu SEO */}
      <section className="py-10 px-4 sm:px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-stone-900 mb-4">
            Trouver un architecte à {data.name} : guide complet
          </h2>
          <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
            <p>
              {data.name} compte plus de {data.architectCount} architectes
              inscrits à l&apos;Ordre des Architectes du Maroc. La ville, qui
              regroupe {data.population}, est l&apos;un des marchés les plus
              dynamiques pour la construction et la rénovation au Maroc.
            </p>
            <p>
              Les <strong>honoraires des architectes à {data.name}</strong> varient
              selon la nature du projet, son envergure et la réputation du
              cabinet. En règle générale, comptez entre{" "}
              <strong>{data.avgPrice}</strong> du coût total des travaux.
            </p>
            <p>
              Pour un projet résidentiel à {data.name} — construction d&apos;une
              villa, rénovation d&apos;un appartement ou aménagement
              d&apos;intérieur — il est recommandé de rencontrer au moins 3
              architectes avant de prendre votre décision. Bati.ma facilite
              cette démarche en regroupant les profils, portfolios et avis en un
              seul endroit.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-stone-900 mb-6">
            Questions fréquentes — Architecte {data.name}
          </h2>
          <div className="space-y-4">
            {faq.map((f) => (
              <details
                key={f.q}
                className="group border border-stone-200 rounded-lg overflow-hidden"
              >
                <summary className="flex items-center justify-between px-4 py-3 cursor-pointer text-sm font-medium text-stone-800 hover:bg-stone-50">
                  {f.q}
                  <span className="text-stone-400 group-open:rotate-180 transition-transform text-lg">
                    ↓
                  </span>
                </summary>
                <div className="px-4 pb-4 pt-1 text-sm text-stone-600 leading-relaxed">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Autres villes */}
      <section className="py-10 px-4 sm:px-6 bg-[#f5f0ea]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-lg font-semibold text-stone-900 mb-4">
            Architectes dans d&apos;autres villes du Maroc
          </h2>
          <div className="flex flex-wrap gap-3">
            {otherCities.map((c) => (
              <Link
                key={c.slug}
                href={`/architecte/${c.slug}`}
                className="bg-white border border-stone-200 text-stone-700 text-sm px-4 py-2 rounded-full hover:border-[#b5522a] hover:text-[#b5522a] transition-colors"
              >
                Architecte {c.name}
              </Link>
            ))}
            <Link
              href="/architecte-interieur"
              className="bg-white border border-stone-200 text-stone-700 text-sm px-4 py-2 rounded-full hover:border-[#b5522a] hover:text-[#b5522a] transition-colors"
            >
              Architecte d&apos;intérieur {data.name}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
