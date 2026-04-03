import Link from "next/link";

export default function GuideArchitecteRabat() {
  const faq = [
    {
      q: "Quel est le tarif d\u2019un architecte \u00e0 Rabat pour une maison individuelle ?",
      a: "Pour une maison individuelle \u00e0 Rabat, les honoraires d\u2019un architecte varient entre 4 % et 7 % du co\u00fbt total des travaux. Une \u00e9tude pr\u00e9liminaire co\u00fbte entre 3 000 et 6 000 MAD. Les cabinets install\u00e9s \u00e0 Hay Riad ou Souissi facturent g\u00e9n\u00e9ralement dans la fourchette haute.",
    },
    {
      q: "Quelles sont les sp\u00e9cialit\u00e9s des architectes \u00e0 Rabat ?",
      a: "Rabat \u00e9tant la capitale administrative, les architectes locaux sont souvent sp\u00e9cialis\u00e9s en b\u00e2timents institutionnels (minist\u00e8res, ambassades, \u00e9coles), en r\u00e9sidentiel haut standing (Souissi, Hay Riad) et en urbanisme. On trouve \u00e9galement des experts en restauration du patrimoine dans la m\u00e9dina et la kasbah des Oudayas.",
    },
    {
      q: "Les architectes de Rabat travaillent-ils aussi \u00e0 Sal\u00e9 et T\u00e9mara ?",
      a: "Oui, la majorit\u00e9 des architectes install\u00e9s \u00e0 Rabat interviennent sur l\u2019ensemble de l\u2019agglom\u00e9ration Rabat-Sal\u00e9-T\u00e9mara. Cette m\u00e9tropole partage le m\u00eame Conseil R\u00e9gional de l\u2019Ordre des Architectes et les m\u00eames r\u00e8gles d\u2019urbanisme.",
    },
    { q: "Quels sont les quartiers les plus pris\u00e9s pour construire \u00e0 Rabat ?", a: "Hay Riad, Souissi et Agdal sont les quartiers haut standing. Les nouveaux lotissements de Sala Al Jadida et Temara attirent les projets \u00e0 budget mod\u00e9r\u00e9. Les prix du terrain varient de 4 000 MAD/m\u00b2 \u00e0 T\u00e9mara \u00e0 15 000+ MAD/m\u00b2 \u00e0 Souissi." },
    { q: "Est-ce que Rabat est en zone sismique ?", a: "Rabat est class\u00e9e en zone sismique 1 (risque faible) selon le RPS 2011. Les normes parasismiques s\u2019appliquent n\u00e9anmoins, particuli\u00e8rement pour les immeubles de plus de R+2. Le bureau d\u2019\u00e9tudes techniques int\u00e8gre ces calculs dans le dimensionnement de la structure." },
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
        <h2>Pourquoi Rabat est-elle la capitale de l&apos;architecture institutionnelle ?</h2>
        <p>
          Rabat, capitale administrative du Royaume, concentre les projets institutionnels
          les plus prestigieux du Maroc. La ville abrite \u00e9galement des quartiers r\u00e9sidentiels
          haut standing comme Souissi et Hay Riad, o\u00f9 la demande en architecture de qualit\u00e9
          est constante. Le classement de Rabat au patrimoine mondial de l&apos;UNESCO renforce
          l&apos;exigence architecturale de la ville.
        </p>

        <h2>Zones cl\u00e9s de Rabat pour construire</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Quartier</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Type de projets</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Budget moyen / m\u00b2</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">Souissi</td><td className="border border-stone-200 px-3 py-2">Villas luxe, ambassades</td><td className="border border-stone-200 px-3 py-2">7 000 - 14 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Hay Riad</td><td className="border border-stone-200 px-3 py-2">R\u00e9sidentiel haut standing</td><td className="border border-stone-200 px-3 py-2">5 500 - 10 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Agdal</td><td className="border border-stone-200 px-3 py-2">Immeubles, bureaux, commerces</td><td className="border border-stone-200 px-3 py-2">4 500 - 8 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Sal\u00e9 / T\u00e9mara</td><td className="border border-stone-200 px-3 py-2">R\u00e9sidentiel moyen standing</td><td className="border border-stone-200 px-3 py-2">3 000 - 5 500 MAD</td></tr>
          </tbody>
        </table>

        <h2>Sp\u00e9cialit\u00e9s des architectes \u00e0 Rabat</h2>
        <p>
          La capitale se distingue par des comp\u00e9tences fortes en architecture institutionnelle
          (minist\u00e8res, ambassades, si\u00e8ges sociaux), en urbanisme (plans d&apos;am\u00e9nagement,
          \u00e9co-quartiers) et en r\u00e9sidentiel de standing. La proximit\u00e9 des instances
          gouvernementales attire \u00e9galement des architectes sp\u00e9cialis\u00e9s dans les b\u00e2timents
          \u00e0 haute performance \u00e9nerg\u00e9tique.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm font-semibold text-[#b5522a] mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Pour un projet \u00e0 Rabat, v\u00e9rifiez que votre architecte ma\u00eetrise les r\u00e8gles
            sp\u00e9cifiques de l&apos;Agence Urbaine de Rabat-Sal\u00e9. Comparez les profils sur{" "}
            <Link href="/architectes/rabat" className="text-[#b5522a] underline">
              Bati.ma Rabat
            </Link>{" "}
            pour trouver un expert de votre quartier.
          </p>
        </div>

        <h2>Tarifs des architectes \u00e0 Rabat en 2026</h2>
        <p>
          Les tarifs \u00e0 Rabat sont l\u00e9g\u00e8rement inf\u00e9rieurs \u00e0 Casablanca. Mission compl\u00e8te :
          4 % \u00e0 7 % du co\u00fbt des travaux. \u00c9tude pr\u00e9liminaire : 3 000 \u00e0 6 000 MAD.
          Les projets institutionnels sont g\u00e9n\u00e9ralement factur\u00e9s au forfait ou en r\u00e9gie.
          Pour les petits projets r\u00e9sidentiels, certains architectes proposent des
          forfaits tout compris.
        </p>

        <h2>R\u00e9glementation urbaine \u00e0 Rabat</h2>
        <p>
          Rabat dispose d&apos;un plan d&apos;am\u00e9nagement strict, particuli\u00e8rement dans les zones
          class\u00e9es patrimoine UNESCO (m\u00e9dina, kasbah des Oudayas). L&apos;Agence Urbaine de
          Rabat-Sal\u00e9 v\u00e9rifie la conformit\u00e9 de chaque projet. Votre architecte doit
          conna\u00eetre les hauteurs autoris\u00e9es, les retraits obligatoires et les r\u00e8gles
          de stationnement propres \u00e0 chaque zone.
        </p>

        <h2>Trouver son architecte \u00e0 Rabat</h2>
        <p>
          Consultez les profils v\u00e9rifi\u00e9s sur{" "}
          <Link href="/architectes/rabat" className="text-[#b5522a] underline">
            Bati.ma \u2014 Architectes \u00e0 Rabat
          </Link>. Filtrez par sp\u00e9cialit\u00e9, lisez les avis clients et comparez les portfolios
          pour choisir le professionnel qui correspond le mieux \u00e0 votre projet et \u00e0 votre
          budget.
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
