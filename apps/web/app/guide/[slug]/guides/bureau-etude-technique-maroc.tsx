import Link from "next/link";

export default function GuideBureauEtudeTechniqueMaroc() {
  const faq = [
    {
      q: "Quelle est la diff\u00e9rence entre un architecte et un BET au Maroc ?",
      a: "L&apos;architecte con\u00e7oit le projet (esth\u00e9tique, fonctionnalit\u00e9, plans) et g\u00e8re le permis de construire. Le BET calcule la structure (b\u00e9ton arm\u00e9, charpente) et les lots techniques (\u00e9lectricit\u00e9, plomberie, climatisation). Les deux sont compl\u00e9mentaires et travaillent ensemble sur chaque projet.",
    },
    {
      q: "Combien co\u00fbte un BET pour une villa au Maroc ?",
      a: "Pour une villa de 150 \u00e0 300 m\u00b2, les honoraires du BET varient de 8 000 \u00e0 30 000 MAD pour l&apos;\u00e9tude b\u00e9ton arm\u00e9 seule. Une \u00e9tude compl\u00e8te (structure + \u00e9lectricit\u00e9 + plomberie + thermique) co\u00fbte entre 15 000 et 50 000 MAD selon la complexit\u00e9.",
    },
    {
      q: "Est-ce obligatoire de faire appel \u00e0 un BET au Maroc ?",
      a: "Pour les constructions de plus de R+2 ou de plus de 300 m\u00b2, le recours \u00e0 un BET est obligatoire. Pour les villas R+1 ou R+2, il est fortement recommand\u00e9 et souvent exig\u00e9 par la commune pour le d\u00e9p\u00f4t du permis de construire.",
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
        <h2>Qu&apos;est-ce qu&apos;un bureau d&apos;\u00e9tudes techniques (BET) ?</h2>
        <p>
          Le bureau d&apos;\u00e9tudes techniques est un acteur incontournable de la construction au Maroc. Il intervient en compl\u00e9ment de l&apos;architecte pour calculer et dimensionner les \u00e9l\u00e9ments structurels et techniques d&apos;un b\u00e2timent : fondations, poteaux, poutres, dalles, r\u00e9seaux \u00e9lectriques, plomberie, climatisation et performance thermique.
        </p>

        <h2>Les missions du BET au Maroc</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Sp\u00e9cialit\u00e9</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Missions</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Tarif villa (indicatif)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">B\u00e9ton arm\u00e9 (structure)</td><td className="border border-stone-200 px-3 py-2">Calcul fondations, poteaux, poutres, dalles</td><td className="border border-stone-200 px-3 py-2">8 000 \u00e0 25 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">\u00c9lectricit\u00e9</td><td className="border border-stone-200 px-3 py-2">Plans \u00e9lectriques, dimensionnement, conformit\u00e9</td><td className="border border-stone-200 px-3 py-2">3 000 \u00e0 10 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Plomberie / assainissement</td><td className="border border-stone-200 px-3 py-2">R\u00e9seaux eau, \u00e9vacuation, fosse septique</td><td className="border border-stone-200 px-3 py-2">3 000 \u00e0 8 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Thermique / climatisation</td><td className="border border-stone-200 px-3 py-2">Conformit\u00e9 RTCM, CVC, bilan thermique</td><td className="border border-stone-200 px-3 py-2">5 000 \u00e0 15 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">VRD (voiries et r\u00e9seaux)</td><td className="border border-stone-200 px-3 py-2">Acc\u00e8s, voiries, r\u00e9seaux ext\u00e9rieurs</td><td className="border border-stone-200 px-3 py-2">5 000 \u00e0 12 000 MAD</td></tr>
          </tbody>
        </table>

        <h2>BET vs architecte : r\u00f4les compl\u00e9mentaires</h2>
        <p>
          L&apos;architecte est le chef d&apos;orchestre du projet : il con\u00e7oit l&apos;espace, g\u00e8re l&apos;esth\u00e9tique et coordonne les intervenants. Le BET est l&apos;ing\u00e9nieur qui garantit la solidit\u00e9 et le bon fonctionnement technique. Sur un projet de villa, l&apos;architecte choisit souvent le BET et coordonne son intervention. Pour les grands projets, le ma\u00eetre d&apos;ouvrage peut mandater le BET directement.
        </p>

        <h2>Comment choisir son BET au Maroc</h2>
        <p>
          V\u00e9rifiez l&apos;agr\u00e9ment du BET aupr\u00e8s du Minist\u00e8re de l&apos;\u00c9quipement. Privil\u00e9giez un BET ayant de l&apos;exp\u00e9rience dans votre type de projet (villa, immeuble, industriel). Demandez des r\u00e9f\u00e9rences et v\u00e9rifiez la couverture assurance. Les BET de Casablanca, Rabat et Marrakech sont les plus nombreux, mais chaque ville dispose de bureaux comp\u00e9tents.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm font-semibold text-[#b5522a] mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Demandez \u00e0 votre architecte de vous recommander un BET avec lequel il a d\u00e9j\u00e0 travaill\u00e9 : la coordination sera plus fluide. Trouvez votre architecte sur{" "}
            <Link href="/architectes" className="text-[#b5522a] underline">Bati.ma</Link>.
          </p>
        </div>

        <h2>Tarifs des BET au Maroc en 2026</h2>
        <p>
          Les honoraires du BET repr\u00e9sentent en moyenne 1 \u00e0 3 % du co\u00fbt total des travaux pour une mission compl\u00e8te. Pour une villa de 200 m\u00b2 \u00e0 1 500 000 MAD, comptez entre 15 000 et 45 000 MAD. Les tarifs sont n\u00e9gociables, surtout pour les \u00e9tudes group\u00e9es (structure + \u00e9lectricit\u00e9 + plomberie).
        </p>

        <h2>Quand faire appel au BET dans votre projet</h2>
        <p>
          Le BET intervient d\u00e8s la phase APD (avant-projet d\u00e9taill\u00e9), apr\u00e8s la validation de l&apos;esquisse par l&apos;architecte. Ses plans d&apos;ex\u00e9cution sont n\u00e9cessaires au d\u00e9p\u00f4t du permis de construire. Pendant le chantier, le BET peut assurer le suivi technique des lots concern\u00e9s.
        </p>

        <p className="mt-6 text-sm text-stone-500">
          Trouvez un architecte qui coordonne votre projet sur{" "}
          <Link href="/architectes" className="text-[#b5522a] underline">
            Bati.ma \u2014 Architectes au Maroc
          </Link>
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
