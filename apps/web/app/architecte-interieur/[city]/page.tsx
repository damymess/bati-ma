import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
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

  const title = `Architecte d'Intérieur ${data.name} — Décorateurs & Designers`;
  const description = `Trouvez un architecte d'intérieur à ${data.name}. Décorateurs, designers et aménageurs certifiés. Consultez portfolios, avis et demandez un devis gratuit.`;

  return {
    title,
    description,
    keywords: [
      `architecte d'intérieur ${data.name}`,
      `décorateur intérieur ${data.name}`,
      `design intérieur ${data.name}`,
      `aménagement intérieur ${data.name}`,
    ],
    openGraph: { title, description },
    alternates: {
      canonical: `https://bati.ma/architecte-interieur/${city}`,
    },
  };
}

export default async function InteriorCityPage({ params }: Props) {
  const { city } = await params;
  const data = getCityBySlug(city);
  if (!data) notFound();

  const allArchitects = await getArchitectsByCity(city);
  const interiorArchitects = allArchitects.filter((a) =>
    a.specialties.includes("Intérieur")
  );
  const otherCities = CITIES.filter((c) => c.slug !== city).slice(0, 5);

  const faq = [
    {
      q: `Quel est le prix d'un architecte d'intérieur à ${data.name} ?`,
      a: `Le tarif d'un architecte d'intérieur à ${data.name} dépend du type de mission. Pour une mission complète (conception et suivi de travaux), comptez entre 10 et 20 % du coût total des travaux. Pour une mission conseil ou un plan 3D uniquement, les prix varient entre 2 000 et 8 000 MAD selon l'envergure du projet.`,
    },
    {
      q: `Quelle est la différence entre architecte et architecte d'intérieur à ${data.name} ?`,
      a: `L'architecte est habilité à concevoir des projets de construction et à signer les permis de construire. L'architecte d'intérieur, lui, intervient exclusivement sur l'aménagement des espaces existants : distribution des pièces, choix des matériaux, mobilier, éclairage et décoration. Les deux peuvent collaborer sur un même projet.`,
    },
    {
      q: `Comment trouver un bon architecte d'intérieur à ${data.name} ?`,
      a: `Pour trouver un bon architecte d'intérieur à ${data.name}, consultez les portfolios en ligne, lisez les témoignages de clients, vérifiez que le professionnel comprend votre style et votre budget. Bati.ma regroupe les profils des meilleurs professionnels de ${data.name} avec leurs réalisations.`,
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
        { label: "Architectes d'intérieur", href: "/architecte-interieur" },
        { label: data.name },
      ]} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#f5f0ea] to-white py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-[#b5522a] text-sm font-medium uppercase tracking-widest mb-2">
              Design & Décoration
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-3">
              Architecte d&apos;Intérieur {data.name}
            </h1>
            <p className="text-stone-600 leading-relaxed mb-4">
              Trouvez un architecte d&apos;intérieur ou décorateur qualifié à{" "}
              {data.name} pour votre projet d&apos;aménagement résidentiel ou
              commercial. Transformez vos espaces avec un professionnel du
              design intérieur marocain.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-stone-500">
              <span className="flex items-center gap-1">
                <span className="text-[#b5522a]">✓</span>
                Designers vérifiés
              </span>
              <span className="flex items-center gap-1">
                <span className="text-[#b5522a]">✓</span>
                Portfolios photo
              </span>
              <span className="flex items-center gap-1">
                <span className="text-[#b5522a]">✓</span>
                Devis gratuit
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Listings */}
      <section className="py-10 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-semibold text-stone-900 mb-6">
            Architectes d&apos;intérieur à {data.name}
          </h2>

          {interiorArchitects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {interiorArchitects.map((a) => (
                <ArchitectCard key={a.id} architect={a} />
              ))}
            </div>
          ) : (
            <div className="bg-stone-50 border border-stone-100 rounded-xl p-8 text-center mb-8">
              <p className="text-stone-500 mb-3">
                Le répertoire des architectes d&apos;intérieur de {data.name} est
                en cours de constitution.
              </p>
              <p className="text-sm text-stone-400">
                Vous exercez à {data.name} ?{" "}
                <a href="#inscription" className="text-[#b5522a] hover:underline">
                  Inscrivez votre studio gratuitement
                </a>
              </p>
            </div>
          )}

          {/* CTA */}
          <div
            id="inscription"
            className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-6 text-center"
          >
            <h3 className="font-semibold text-stone-900 mb-1">
              Architecte d&apos;intérieur à {data.name} ?
            </h3>
            <p className="text-sm text-stone-500 mb-4">
              Rejoignez Bati.ma et recevez des clients qualifiés cherchant
              un designer d&apos;intérieur à {data.name}.
            </p>
            <button className="bg-[#b5522a] text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-[#9a4522] transition-colors">
              Inscrire mon studio — Gratuit
            </button>
          </div>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-10 px-4 sm:px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-stone-900 mb-4">
            Architecture d&apos;intérieur à {data.name}
          </h2>
          <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
            <p>
              Le marché de l&apos;architecture d&apos;intérieur à {data.name} est en
              plein essor. Les propriétaires et promoteurs immobiliers font de
              plus en plus appel à des <strong>architectes d&apos;intérieur</strong>{" "}
              professionnels pour maximiser la valeur de leurs biens et créer
              des espaces fonctionnels et esthétiques.
            </p>
            <p>
              Un <strong>architecte d&apos;intérieur à {data.name}</strong> peut
              intervenir pour : la rénovation d&apos;un appartement, l&apos;aménagement
              d&apos;une villa, la décoration d&apos;un espace commercial ou d&apos;un hôtel.
              Les professionnels maîtrisent l&apos;art marocain traditionnel
              (zellige, moucharabieh, tadelakt) autant que les tendances
              contemporaines.
            </p>
            <p>
              Pour trouver le bon{" "}
              <strong>décorateur d&apos;intérieur à {data.name}</strong>,
              consultez les portfolios des professionnels inscrits sur
              Bati.ma et demandez plusieurs devis comparatifs. L&apos;investissement
              dans un architecte d&apos;intérieur augmente généralement la valeur
              d&apos;un bien de 15 à 30 %.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-stone-900 mb-6">
            FAQ — Architecte d&apos;intérieur {data.name}
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

      {/* Cross-links */}
      <section className="py-10 px-4 sm:px-6 bg-[#f5f0ea]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-lg font-semibold text-stone-900 mb-4">
            Architecte d&apos;intérieur dans d&apos;autres villes
          </h2>
          <div className="flex flex-wrap gap-3">
            {otherCities.map((c) => (
              <Link
                key={c.slug}
                href={`/architecte-interieur/${c.slug}`}
                className="bg-white border border-stone-200 text-stone-700 text-sm px-4 py-2 rounded-full hover:border-[#b5522a] hover:text-[#b5522a] transition-colors"
              >
                Architecte intérieur {c.name}
              </Link>
            ))}
            <Link
              href={`/architecte/${city}`}
              className="bg-white border border-stone-200 text-stone-700 text-sm px-4 py-2 rounded-full hover:border-[#b5522a] hover:text-[#b5522a] transition-colors"
            >
              Architecte {data.name}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
