import Link from "next/link";

export default function GuideArchitecteTanger() {
  const faq = [
    {
      q: "Pourquoi Tanger est-elle en plein boom immobilier ?",
      a: "Tanger conna\u00eet un essor immobilier majeur gr\u00e2ce au port Tanger Med (premier port d\u2019Afrique), aux zones franches industrielles, au TGV reliant Tanger \u00e0 Casablanca et aux investissements massifs dans les infrastructures. La ville attire de plus en plus d\u2019investisseurs nationaux et internationaux.",
    },
    {
      q: "Combien co\u00fbte un architecte \u00e0 Tanger ?",
      a: "Les honoraires d\u2019un architecte \u00e0 Tanger sont g\u00e9n\u00e9ralement 10 \u00e0 20 % inf\u00e9rieurs \u00e0 ceux de Casablanca. Pour une mission compl\u00e8te, comptez entre 4 % et 7 % du co\u00fbt des travaux. Une \u00e9tude pr\u00e9liminaire co\u00fbte entre 2 000 et 5 000 MAD.",
    },
    {
      q: "Quelles sont les zones les plus demand\u00e9es pour construire \u00e0 Tanger ?",
      a: "Les zones les plus actives sont Tanger City Center, la route de Malabata (vue mer), Cap Spartel, les nouvelles extensions vers Gzenaya et la zone franche TFZ. La m\u00e9dina attire aussi les projets de restauration pour maisons d\u2019h\u00f4tes et riads.",
    },
    { q: "Comment le boom de Tanger Med impacte-t-il le march\u00e9 immobilier ?", a: "Tanger Med a attir\u00e9 des milliers de cadres et techniciens, dopant la demande en logements de standing dans les zones Boukhalef, Cap Spartel et Malabata. Les prix ont augment\u00e9 de 30 \u00e0 50 % en 5 ans. Les architectes sont tr\u00e8s sollicit\u00e9s pour les projets r\u00e9sidentiels." },
    { q: "Faut-il adapter la construction au vent \u00e0 Tanger ?", a: "Oui, Tanger est l\u2019une des villes les plus venteuses du Maroc (chergui et vent du d\u00e9troit). L\u2019architecte doit orienter les ouvertures \u00e0 l\u2019abri du vent dominant, pr\u00e9voir des menuiseries renforc\u00e9es et concevoir des terrasses prot\u00e9g\u00e9es. L\u2019isolation acoustique est \u00e9galement n\u00e9cessaire." },
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
        <h2>Pourquoi Tanger est-elle en pleine transformation urbaine ?</h2>
        <p>
          Tanger vit une transformation spectaculaire depuis le lancement du port Tanger Med
          et l&apos;arriv\u00e9e du TGV Al Boraq. La ville du d\u00e9troit attire des investissements
          massifs en immobilier r\u00e9sidentiel, commercial et industriel. Cette dynamique cr\u00e9e
          une forte demande pour des architectes capables de concevoir des projets modernes
          tout en respectant le cachet m\u00e9diterran\u00e9en de la ville.
        </p>

        <h2>Zones cl\u00e9s de construction \u00e0 Tanger</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Zone</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Type de projets</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Budget moyen / m\u00b2</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">Malabata / Corniche</td><td className="border border-stone-200 px-3 py-2">Appartements vue mer, h\u00f4tels</td><td className="border border-stone-200 px-3 py-2">6 000 - 11 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Tanger City Center</td><td className="border border-stone-200 px-3 py-2">Bureaux, commerces, r\u00e9sidentiel</td><td className="border border-stone-200 px-3 py-2">4 500 - 8 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Cap Spartel / Vieille Montagne</td><td className="border border-stone-200 px-3 py-2">Villas luxe, r\u00e9sidences secondaires</td><td className="border border-stone-200 px-3 py-2">7 000 - 15 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Gzenaya / Zone franche</td><td className="border border-stone-200 px-3 py-2">Industriel, logistique, \u00e9conomique</td><td className="border border-stone-200 px-3 py-2">2 500 - 4 500 MAD</td></tr>
          </tbody>
        </table>

        <h2>Sp\u00e9cialit\u00e9s des architectes tangiers</h2>
        <p>
          Les architectes de Tanger excellent dans la conception de projets vue mer
          (optimisation des orientations et terrasses), l&apos;architecture industrielle et
          logistique (li\u00e9e \u00e0 Tanger Med), la restauration de la m\u00e9dina et les r\u00e9sidences
          touristiques. L&apos;influence hispano-mauresque et art d\u00e9co de la ville inspire
          des cr\u00e9ations architecturales uniques.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm font-semibold text-[#b5522a] mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Le march\u00e9 immobilier de Tanger \u00e9volue vite. Choisissez un architecte qui conna\u00eet les
            nouvelles r\u00e8gles d&apos;urbanisme et les zones d&apos;extension. D\u00e9couvrez les profils sur{" "}
            <Link href="/architectes/tanger" className="text-[#b5522a] underline">
              Bati.ma Tanger
            </Link>.
          </p>
        </div>

        <h2>Tarifs des architectes \u00e0 Tanger en 2026</h2>
        <p>
          Tanger offre des tarifs comp\u00e9titifs par rapport \u00e0 Casablanca et Rabat. Mission
          compl\u00e8te : 4 % \u00e0 7 % du co\u00fbt des travaux. Consultation initiale : 2 000 \u00e0
          5 000 MAD. Pour les projets industriels li\u00e9s aux zones franches, des forfaits
          sp\u00e9cifiques sont souvent propos\u00e9s par les cabinets sp\u00e9cialis\u00e9s.
        </p>

        <h2>Quel est l&apos;impact de Tanger Med sur l&apos;architecture locale ?</h2>
        <p>
          Le port Tanger Med, premier port \u00e0 conteneurs d&apos;Afrique, a transform\u00e9 la r\u00e9gion.
          Les zones franches attirent des entreprises internationales qui ont besoin
          d&apos;entrep\u00f4ts, de si\u00e8ges r\u00e9gionaux et de logements pour leurs employ\u00e9s. Cette
          demande stimule l&apos;innovation architecturale et cr\u00e9e des opportunit\u00e9s pour les
          architectes sp\u00e9cialis\u00e9s en b\u00e2timents industriels et tertiaires.
        </p>

        <h2>Trouver un architecte \u00e0 Tanger</h2>
        <p>
          Explorez les profils v\u00e9rifi\u00e9s sur{" "}
          <Link href="/architectes/tanger" className="text-[#b5522a] underline">
            Bati.ma \u2014 Architectes \u00e0 Tanger
          </Link>. Comparez les sp\u00e9cialit\u00e9s, consultez les r\u00e9alisations et contactez
          directement les architectes qui correspondent \u00e0 votre projet dans la ville
          du d\u00e9troit.
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
