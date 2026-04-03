import Link from "next/link";

export default function GuideArchitecteInterieurMarrakech() {
  const faq = [
    {
      q: "Combien co\u00fbte un architecte d\u2019int\u00e9rieur \u00e0 Marrakech ?",
      a: "Les honoraires d\u2019un architecte d\u2019int\u00e9rieur \u00e0 Marrakech varient de 250 \u00e0 700 MAD / m\u00b2 pour une mission compl\u00e8te. Pour un riad de 150 m\u00b2, comptez entre 40 000 et 100 000 MAD. Les projets de maisons d\u2019h\u00f4tes et boutique-h\u00f4tels sont g\u00e9n\u00e9ralement factur\u00e9s au forfait.",
    },
    {
      q: "Quel style d\u2019int\u00e9rieur est le plus demand\u00e9 \u00e0 Marrakech ?",
      a: "Le style le plus recherch\u00e9 est le \u00ab marocain contemporain \u00bb qui m\u00e9lange artisanat traditionnel (zelliges, tadelakt, moucharabieh) et design moderne (lignes \u00e9pur\u00e9es, mobilier contemporain). Le boho-chic et le style oriental revisit\u00e9 sont \u00e9galement tr\u00e8s pris\u00e9s, notamment pour les maisons d\u2019h\u00f4tes.",
    },
    {
      q: "O\u00f9 trouver les meilleurs artisans pour un projet d\u2019int\u00e9rieur \u00e0 Marrakech ?",
      a: "Les meilleurs artisans (zelligeurs, tadelakteurs, menuisiers c\u00e8dre, ferronniers) se trouvent dans les souks de la m\u00e9dina et dans la zone artisanale de Sidi Ghanem. Un bon architecte d\u2019int\u00e9rieur \u00e0 Marrakech poss\u00e8de d\u00e9j\u00e0 un carnet d\u2019artisans de confiance.",
    },
    { q: "Comment int\u00e9grer le style marocain dans un int\u00e9rieur moderne \u00e0 Marrakech ?", a: "Les architectes d\u2019int\u00e9rieur \u00e0 Marrakech fusionnent tadelakt, zellige et bois sculpt\u00e9 avec du mobilier contemporain. Les tendances 2026 privil\u00e9gient le \u00ab boho-marocain \u00bb : couleurs terracotta, mati\u00e8res naturelles et artisanat local r\u00e9interpr\u00e9t\u00e9." },
    { q: "Faut-il un architecte d\u2019int\u00e9rieur pour r\u00e9nover un riad \u00e0 Marrakech ?", a: "Fortement recommand\u00e9. Un riad pr\u00e9sente des contraintes sp\u00e9cifiques : murs en pis\u00e9, patio central, plomberie v\u00e9tuste. L\u2019architecte d\u2019int\u00e9rieur optimise les espaces tout en respectant l\u2019\u00e2me du lieu. Budget : 800 \u00e0 2 500 MAD/m\u00b2 selon l\u2019\u00e9tat initial." },
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
      <div className="prose-content">
        <h2>Architecture d&apos;int\u00e9rieur \u00e0 Marrakech : l&apos;art de vivre marocain</h2>
        <p>
          Marrakech est la capitale incontournable du design d&apos;int\u00e9rieur au Maroc. La ville
          attire des cr\u00e9atifs du monde entier, s\u00e9duits par la richesse de l&apos;artisanat local
          et la lumi\u00e8re unique de la ville ocre. Que ce soit pour am\u00e9nager un riad, une
          villa contemporaine ou une maison d&apos;h\u00f4tes, Marrakech offre un vivier
          d&apos;architectes d&apos;int\u00e9rieur talentueux.
        </p>

        <h2>Styles d&apos;int\u00e9rieur populaires \u00e0 Marrakech</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Style</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Caract\u00e9ristiques</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Id\u00e9al pour</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">Marocain contemporain</td><td className="border border-stone-200 px-3 py-2">Zellige + lignes modernes, tadelakt, c\u00e8dre</td><td className="border border-stone-200 px-3 py-2">Riads, villas</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Boho-chic</td><td className="border border-stone-200 px-3 py-2">Textiles, kilims, macram\u00e9, couleurs chaudes</td><td className="border border-stone-200 px-3 py-2">Maisons d&apos;h\u00f4tes, boutiques</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Oriental revisit\u00e9</td><td className="border border-stone-200 px-3 py-2">Moucharabieh, arcs, laiton, velours</td><td className="border border-stone-200 px-3 py-2">H\u00f4tels, restaurants</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Minimaliste m\u00e9diterran\u00e9en</td><td className="border border-stone-200 px-3 py-2">Tons neutres, b\u00e9ton cir\u00e9, lin, bois clair</td><td className="border border-stone-200 px-3 py-2">Villas modernes</td></tr>
          </tbody>
        </table>

        <h2>Am\u00e9nagement de riads : un savoir-faire unique</h2>
        <p>
          L&apos;am\u00e9nagement d&apos;un riad est un exercice sp\u00e9cifique qui demande de ma\u00eetriser
          les contraintes : espaces centr\u00e9s autour du patio, lumi\u00e8re z\u00e9nithale, humidit\u00e9,
          acc\u00e8s \u00e9troit en m\u00e9dina. Un bon architecte d&apos;int\u00e9rieur \u00e0 Marrakech sait
          optimiser chaque m\u00e8tre carr\u00e9 tout en pr\u00e9servant l&apos;\u00e2me du lieu. Le choix des
          mat\u00e9riaux traditionnels (tadelakt \u00e9tanche pour les salles de bains, zelliges
          pour les sols, bois de c\u00e8dre pour les plafonds) est crucial.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm font-semibold text-[#b5522a] mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Pour un riad \u00e0 Marrakech, choisissez un architecte d&apos;int\u00e9rieur qui conna\u00eet les
            artisans locaux (zelligeurs, tadelakteurs de Sidi Ghanem). Consultez les profils
            sp\u00e9cialis\u00e9s sur{" "}
            <Link href="/architectes/marrakech" className="text-[#b5522a] underline">
              Bati.ma Marrakech
            </Link>.
          </p>
        </div>

        <h2>Tarifs de l&apos;architecture d&apos;int\u00e9rieur \u00e0 Marrakech</h2>
        <p>
          Les tarifs \u00e0 Marrakech sont attractifs compar\u00e9s aux standards internationaux.
          Mission compl\u00e8te : 250 \u00e0 700 MAD / m\u00b2. Projet riad : forfait de 40 000 \u00e0
          150 000 MAD. Maison d&apos;h\u00f4tes : forfait de 80 000 \u00e0 250 000 MAD. Consultation
          de style : 2 000 \u00e0 5 000 MAD. L&apos;artisanat local permet de r\u00e9duire les co\u00fbts
          tout en obtenant une qualit\u00e9 exceptionnelle.
        </p>

        <h2>Quelle est la tendance déco phare à Marrakech en 2026 ?</h2>
        <p>
          La tendance phare \u00e0 Marrakech en 2026 est la fusion boho-chic et artisanat
          marocain : textiles tiss\u00e9s \u00e0 la main, poteries de Tamegroute (vert olive),
          luminaires en laiton d\u00e9coup\u00e9, b\u00e9ton cir\u00e9 au sol et touches de zellige color\u00e9.
          Cette approche s\u00e9duit autant les propri\u00e9taires locaux que les investisseurs
          \u00e9trangers en maisons d&apos;h\u00f4tes.
        </p>

        <h2>Trouver son architecte d&apos;int\u00e9rieur \u00e0 Marrakech</h2>
        <p>
          Explorez les portfolios sur{" "}
          <Link href="/architectes/marrakech" className="text-[#b5522a] underline">
            Bati.ma \u2014 Architectes \u00e0 Marrakech
          </Link>. Filtrez par sp\u00e9cialit\u00e9 \u00ab int\u00e9rieur \u00bb ou \u00ab riad \u00bb, consultez les photos
          de r\u00e9alisations et lisez les avis clients pour choisir le cr\u00e9atif qui donnera
          vie \u00e0 votre projet dans la ville ocre.
        </p>
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-stone-900 mb-5">Questions fr\u00e9quentes</h2>
        <div className="space-y-4">
          {faq.map((f) => (
            <details key={f.q} className="group border border-stone-200 rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between px-4 py-3 cursor-pointer text-sm font-medium text-stone-800 hover:bg-stone-50">
                {f.q}
                <span className="text-stone-400 group-open:rotate-180 transition-transform">\u2193</span>
              </summary>
              <div className="px-4 pb-4 pt-1 text-sm text-stone-600 leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
