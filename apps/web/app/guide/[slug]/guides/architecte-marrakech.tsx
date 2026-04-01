import Link from "next/link";

export default function GuideArchitecteMarrakech() {
  const faq = [
    {
      q: "Combien co\u00fbte un architecte \u00e0 Marrakech pour une villa ?",
      a: "Pour une villa \u00e0 Marrakech, les honoraires d\u2019un architecte se situent entre 4 % et 8 % du co\u00fbt total des travaux. Pour une villa de 200 m\u00b2 avec un budget travaux de 1,5 million MAD, comptez entre 60 000 et 120 000 MAD d\u2019honoraires pour une mission compl\u00e8te (conception + suivi).",
    },
    {
      q: "Peut-on trouver un architecte sp\u00e9cialis\u00e9 en riads \u00e0 Marrakech ?",
      a: "Oui, Marrakech poss\u00e8de de nombreux architectes sp\u00e9cialis\u00e9s dans la restauration et la r\u00e9novation de riads. Ces professionnels ma\u00eetrisent les techniques traditionnelles (tadelakt, zelliges, bejmat) tout en int\u00e9grant le confort moderne. Sur Bati.ma, filtrez par sp\u00e9cialit\u00e9 \u00ab riad \u00bb pour trouver ces experts.",
    },
    {
      q: "Quels sont les d\u00e9lais pour obtenir un permis de construire \u00e0 Marrakech ?",
      a: "Le d\u00e9lai moyen pour obtenir un permis de construire \u00e0 Marrakech est de 2 \u00e0 4 mois. Dans la m\u00e9dina, les d\u00e9lais peuvent \u00eatre plus longs en raison des contraintes patrimoniales et de l\u2019avis obligatoire des B\u00e2timents de France marocains (Minist\u00e8re de la Culture).",
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
      <div className="prose-content">
        <h2>L&apos;architecture \u00e0 Marrakech : entre tradition et modernit\u00e9</h2>
        <p>
          Marrakech est une ville o\u00f9 l&apos;architecture raconte des si\u00e8cles d&apos;histoire. De la
          m\u00e9dina class\u00e9e UNESCO aux villas contemporaines de la Palmeraie, la ville ocre
          offre un terrain de jeu unique pour les architectes. Le d\u00e9fi principal : respecter
          l&apos;identit\u00e9 architecturale locale tout en r\u00e9pondant aux exigences modernes de
          confort et d&apos;\u00e9conomie d&apos;\u00e9nergie.
        </p>

        <h2>Zones de construction cl\u00e9s \u00e0 Marrakech</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Zone</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Type de projets</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Budget moyen / m\u00b2</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">M\u00e9dina</td><td className="border border-stone-200 px-3 py-2">Restauration riads, maisons d&apos;h\u00f4tes</td><td className="border border-stone-200 px-3 py-2">6 000 - 12 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Gu\u00e9liz / Hivernage</td><td className="border border-stone-200 px-3 py-2">Appartements, commerces, h\u00f4tels</td><td className="border border-stone-200 px-3 py-2">5 000 - 9 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Palmeraie</td><td className="border border-stone-200 px-3 py-2">Villas luxe, resorts</td><td className="border border-stone-200 px-3 py-2">8 000 - 18 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Route de l&apos;Ourika / Tameslouht</td><td className="border border-stone-200 px-3 py-2">Villas, projets touristiques</td><td className="border border-stone-200 px-3 py-2">3 500 - 7 000 MAD</td></tr>
          </tbody>
        </table>

        <h2>Sp\u00e9cialit\u00e9s architecturales \u00e0 Marrakech</h2>
        <p>
          La ville se distingue par des sp\u00e9cialit\u00e9s uniques au Maroc : la restauration de riads
          (avec ma\u00eetrise du tadelakt, zelliges et bois de c\u00e8dre), l&apos;architecture de maisons
          d&apos;h\u00f4tes et boutique-h\u00f4tels, la conception de villas avec piscine et jardins
          paysagers, et de plus en plus, l&apos;architecture bioclimatique adapt\u00e9e au climat
          semi-aride.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm font-semibold text-[#b5522a] mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Pour un projet en m\u00e9dina, choisissez imp\u00e9rativement un architecte qui conna\u00eet
            les contraintes patrimoniales et les techniques traditionnelles. Consultez les profils
            sp\u00e9cialis\u00e9s sur{" "}
            <Link href="/architectes/marrakech" className="text-[#b5522a] underline">
              Bati.ma Marrakech
            </Link>.
          </p>
        </div>

        <h2>Tarifs des architectes \u00e0 Marrakech</h2>
        <p>
          Les tarifs \u00e0 Marrakech sont comparables \u00e0 ceux de Casablanca, avec une prime pour
          les projets en m\u00e9dina qui n\u00e9cessitent des comp\u00e9tences sp\u00e9cifiques. Mission
          compl\u00e8te : 5 % \u00e0 8 % du co\u00fbt travaux. Restauration de riad : souvent au forfait,
          entre 80 000 et 200 000 MAD selon la surface. Consultation initiale : 2 000 \u00e0
          5 000 MAD.
        </p>

        <h2>Construire \u00e0 Marrakech : r\u00e9glementation sp\u00e9cifique</h2>
        <p>
          La m\u00e9dina est soumise \u00e0 des r\u00e8gles strictes : hauteur limit\u00e9e, mat\u00e9riaux
          traditionnels obligatoires, couleur ocre impos\u00e9e. En dehors de la m\u00e9dina, le plan
          d&apos;am\u00e9nagement de Marrakech impose des COS (coefficients d&apos;occupation des sols)
          variables selon les zones. Votre architecte doit ma\u00eetriser ces r\u00e8gles pour \u00e9viter
          les refus de permis.
        </p>

        <h2>Trouver le bon architecte \u00e0 Marrakech</h2>
        <p>
          Privil\u00e9giez un architecte qui conna\u00eet bien la ville et ses sp\u00e9cificit\u00e9s. V\u00e9rifiez
          son portfolio, ses r\u00e9f\u00e9rences et son inscription \u00e0 l&apos;Ordre. Sur{" "}
          <Link href="/architectes/marrakech" className="text-[#b5522a] underline">
            Bati.ma
          </Link>, comparez les profils, lisez les avis et contactez directement les
          professionnels qui correspondent \u00e0 votre projet.
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
