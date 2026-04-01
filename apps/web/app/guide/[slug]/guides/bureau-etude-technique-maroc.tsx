import Link from "next/link";

export default function GuideBureauEtudeTechniqueMaroc() {
  const faq = [
    {
      q: "Quelle est la diff\u00e9rence entre un architecte et un BET au Maroc ?",
      a: "L&apos;architecte con\u00e7oit le projet (plans, esth\u00e9tique, fonctionnalit\u00e9, permis de construire). Le BET calcule la structure (b\u00e9ton arm\u00e9, fondations) et les lots techniques (\u00e9lectricit\u00e9, plomberie, climatisation). Les deux sont compl\u00e9mentaires : l&apos;architecte dessine, le BET v\u00e9rifie que \u00e7a tient debout.",
    },
    {
      q: "Combien co\u00fbte un bureau d&apos;\u00e9tudes techniques au Maroc ?",
      a: "Pour une villa, comptez 8 000 \u00e0 25 000 MAD pour l&apos;\u00e9tude b\u00e9ton arm\u00e9 seule. Pour un immeuble R+4, les tarifs montent \u00e0 40 000 \u00e0 80 000 MAD. Les lots techniques (CVC, \u00e9lectricit\u00e9, plomberie) sont factur\u00e9s s\u00e9par\u00e9ment, g\u00e9n\u00e9ralement entre 1 % et 3 % du co\u00fbt des travaux.",
    },
    {
      q: "Le BET est-il obligatoire pour construire au Maroc ?",
      a: "Oui, pour toute construction de plus de R+2 ou de plus de 150 m\u00b2, le recours \u00e0 un BET agr\u00e9\u00e9 est obligatoire pour les plans de b\u00e9ton arm\u00e9. Les communes exigent les plans BET vis\u00e9s pour d\u00e9livrer le permis de construire. M\u00eame pour des projets plus petits, le BET est fortement recommand\u00e9.",
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
        <h2>Qu&apos;est-ce qu&apos;un Bureau d&apos;\u00c9tudes Techniques (BET) ?</h2>
        <p>
          Le BET est un cabinet d&apos;ing\u00e9nieurs sp\u00e9cialis\u00e9s qui calcule et dimensionne les \u00e9l\u00e9ments techniques d&apos;un b\u00e2timent. Au Maroc, le BET intervient apr\u00e8s l&apos;architecte pour transformer les plans architecturaux en plans d&apos;ex\u00e9cution techniques : structure b\u00e9ton arm\u00e9, \u00e9lectricit\u00e9, plomberie, climatisation et thermique.
        </p>

        <h2>Les missions du BET au Maroc</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Lot technique</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Missions</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Tarif villa</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">B\u00e9ton arm\u00e9 (BA)</td><td className="border border-stone-200 px-3 py-2">Calcul fondations, poteaux, dalles, escaliers</td><td className="border border-stone-200 px-3 py-2">8 000 \u00e0 25 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">\u00c9lectricit\u00e9</td><td className="border border-stone-200 px-3 py-2">Dimensionnement, sch\u00e9mas, bilan de puissance</td><td className="border border-stone-200 px-3 py-2">5 000 \u00e0 12 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Plomberie</td><td className="border border-stone-200 px-3 py-2">R\u00e9seaux eau froide/chaude, \u00e9vacuation</td><td className="border border-stone-200 px-3 py-2">4 000 \u00e0 10 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">CVC (Climatisation)</td><td className="border border-stone-200 px-3 py-2">Bilan thermique, dimensionnement clim/chauffage</td><td className="border border-stone-200 px-3 py-2">6 000 \u00e0 15 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Thermique (RTCM)</td><td className="border border-stone-200 px-3 py-2">Conformit\u00e9 r\u00e9glementation thermique</td><td className="border border-stone-200 px-3 py-2">5 000 \u00e0 10 000 MAD</td></tr>
          </tbody>
        </table>

        <h2>Comment choisir son BET au Maroc</h2>
        <p>
          V\u00e9rifiez l&apos;agr\u00e9ment du BET aupr\u00e8s du Minist\u00e8re de l&apos;\u00c9quipement. Assurez-vous qu&apos;il dispose d&apos;une assurance responsabilit\u00e9 civile professionnelle. Demandez des r\u00e9f\u00e9rences de projets similaires au v\u00f4tre. Un bon BET utilise des logiciels de calcul modernes (Robot, ETABS, Revit) et fournit des plans d\u00e9taill\u00e9s exploitables par les entreprises de construction.
        </p>

        <h2>BET et architecte : compl\u00e9mentarit\u00e9</h2>
        <p>
          L&apos;architecte d\u00e9finit le projet, le BET le rend techniquement r\u00e9alisable. L&apos;architecte dessine les espaces, le BET calcule les porteurs. Sur les grands projets, le BET peut aussi intervenir en VRD (voiries et r\u00e9seaux divers) et en \u00e9tude de sol. La coordination entre architecte et BET est essentielle pour \u00e9viter les incoh\u00e9rences entre plans architecturaux et plans d&apos;ex\u00e9cution.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm font-semibold text-[#b5522a] mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Demandez \u00e0 votre architecte de vous recommander un BET avec lequel il a l&apos;habitude de travailler. La bonne coordination architecte-BET \u00e9vite les erreurs co\u00fbteuses en chantier. Comparez les profils sur{" "}
            <Link href="/architectes" className="text-[#b5522a] underline">Bati.ma</Link>.
          </p>
        </div>

        <h2>Tarifs des BET selon la taille du projet</h2>
        <p>
          Pour une villa standard (150 \u00e0 300 m\u00b2), le co\u00fbt total du BET (tous lots confondus) se situe entre 15 000 et 50 000 MAD. Pour un immeuble R+4, comptez 50 000 \u00e0 120 000 MAD. Pour les projets commerciaux ou industriels, les tarifs sont g\u00e9n\u00e9ralement calcul\u00e9s en pourcentage du co\u00fbt des travaux (1 \u00e0 3 %).
        </p>

        <h2>\u00c9tude thermique RTCM : nouvelle obligation</h2>
        <p>
          Depuis l&apos;entr\u00e9e en vigueur de la RTCM (R\u00e9glementation Thermique de Construction au Maroc), toute nouvelle construction doit respecter des performances \u00e9nerg\u00e9tiques minimales selon sa zone climatique. Le BET thermique calcule les besoins en isolation, fen\u00eatres et syst\u00e8mes de chauffage/climatisation pour obtenir la conformit\u00e9.
        </p>

        <p className="mt-6 text-sm text-stone-500">
          Trouvez votre architecte sur{" "}
          <Link href="/architectes" className="text-[#b5522a] underline">
            Bati.ma \u2014 Annuaire professionnel
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
