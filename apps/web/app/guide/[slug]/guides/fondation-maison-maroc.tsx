import Link from "next/link";

export default function GuideFondationMaisonMaroc() {
  const faq = [
    {
      q: "Combien co\u00fbte une fondation de maison au Maroc ?",
      a: "Les co\u00fbts varient selon le type : semelles isol\u00e9es (200 \u00e0 400 MAD/m\u00b2), semelles filantes (300 \u00e0 500 MAD/m\u00b2), radier g\u00e9n\u00e9ral (400 \u00e0 700 MAD/m\u00b2) et pieux (800 \u00e0 1 500 MAD/ml). Pour une villa de 150 m\u00b2, le budget fondations repr\u00e9sente 8 \u00e0 15 % du co\u00fbt total de construction.",
    },
    {
      q: "L&apos;\u00e9tude de sol est-elle obligatoire au Maroc ?",
      a: "L&apos;\u00e9tude g\u00e9otechnique n&apos;est pas toujours l\u00e9galement obligatoire pour les petites constructions, mais elle est fortement recommand\u00e9e et souvent exig\u00e9e par les communes et le BET. Elle co\u00fbte entre 5 000 et 15 000 MAD et peut \u00e9viter des surco\u00fbts de 10 fois sup\u00e9rieurs en cas de probl\u00e8me.",
    },
    {
      q: "Quel type de fondation pour un sol argileux au Maroc ?",
      a: "Sur sol argileux (fr\u00e9quent dans les r\u00e9gions de Casablanca, Rabat et Mekn\u00e8s), le BET recommande g\u00e9n\u00e9ralement un radier g\u00e9n\u00e9ral ou des semelles filantes renforc\u00e9es avec un vide sanitaire. L&apos;argile gonfle avec l&apos;eau et se r\u00e9tracte en s\u00e9cheresse, ce qui peut fissurer les fondations classiques.",
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
        <h2>Les fondations : base de toute construction r\u00e9ussie</h2>
        <p>
          Les fondations sont l&apos;\u00e9l\u00e9ment le plus critique d&apos;une construction. Au Maroc, la diversit\u00e9 des sols (rocheux dans l&apos;Atlas, argileux sur le littoral, sableux dans le Sud) impose un choix adapt\u00e9. Une fondation mal dimensionn\u00e9e entra\u00eene des fissures, des affaissements et des co\u00fbts de r\u00e9paration consid\u00e9rables.
        </p>

        <h2>Types de fondations utilis\u00e9s au Maroc</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Type</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Sol adapt\u00e9</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Co\u00fbt indicatif</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">Semelles isol\u00e9es</td><td className="border border-stone-200 px-3 py-2">Sol ferme, rocheux</td><td className="border border-stone-200 px-3 py-2">200 \u00e0 400 MAD/m\u00b2</td><td className="border border-stone-200 px-3 py-2">Villas R+1 \u00e0 R+2</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Semelles filantes</td><td className="border border-stone-200 px-3 py-2">Sol moyen</td><td className="border border-stone-200 px-3 py-2">300 \u00e0 500 MAD/m\u00b2</td><td className="border border-stone-200 px-3 py-2">Maisons, immeubles R+3</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Radier g\u00e9n\u00e9ral</td><td className="border border-stone-200 px-3 py-2">Sol faible, argileux</td><td className="border border-stone-200 px-3 py-2">400 \u00e0 700 MAD/m\u00b2</td><td className="border border-stone-200 px-3 py-2">Sol compressible</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Pieux for\u00e9s</td><td className="border border-stone-200 px-3 py-2">Sol tr\u00e8s faible en surface</td><td className="border border-stone-200 px-3 py-2">800 \u00e0 1 500 MAD/ml</td><td className="border border-stone-200 px-3 py-2">Grands projets, immeubles</td></tr>
          </tbody>
        </table>

        <h2>L&apos;\u00e9tude de sol : une \u00e9tape incontournable</h2>
        <p>
          L&apos;\u00e9tude g\u00e9otechnique analyse la nature du sol, sa portance, la pr\u00e9sence de nappe phr\u00e9atique et les risques sismiques. Au Maroc, les zones d&apos;Al Hoce\u00efma, Agadir et le Rif sont class\u00e9es sismiques et n\u00e9cessitent des fondations renforc\u00e9es. Le co\u00fbt d&apos;une \u00e9tude varie de 5 000 \u00e0 15 000 MAD selon la taille du projet.
        </p>

        <h2>Normes de construction au Maroc</h2>
        <p>
          Le RPS 2000 (R\u00e8glement de Construction Parasismique) d\u00e9finit les exigences sismiques. Le BAEL (B\u00e9ton Arm\u00e9 aux \u00c9tats Limites) r\u00e9git le dimensionnement des fondations en b\u00e9ton arm\u00e9. Le BET (Bureau d&apos;\u00c9tudes Techniques) est responsable du calcul des fondations en coordination avec l&apos;architecte.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm font-semibold text-[#b5522a] mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Ne faites jamais l&apos;impasse sur l&apos;\u00e9tude de sol : elle co\u00fbte 5 000 \u00e0 15 000 MAD mais peut vous \u00e9viter des r\u00e9parations de 100 000 MAD ou plus. Trouvez un architecte exp\u00e9riment\u00e9 sur{" "}
            <Link href="/architectes" className="text-[#b5522a] underline">Bati.ma</Link> pour vous accompagner.
          </p>
        </div>

        <h2>Erreurs fr\u00e9quentes et comment les \u00e9viter</h2>
        <p>
          Les erreurs les plus courantes sont : construire sans \u00e9tude de sol, sous-dimensionner les fondations pour r\u00e9duire les co\u00fbts, ne pas respecter la profondeur hors gel (60 cm minimum au Maroc), ignorer la nappe phr\u00e9atique et ne pas pr\u00e9voir le drainage. Chacune de ces erreurs peut entra\u00eener des fissures structurelles dans les ann\u00e9es suivant la construction.
        </p>

        <h2>Le r\u00f4le du BET dans les fondations</h2>
        <p>
          Le Bureau d&apos;\u00c9tudes Techniques dimensionne les fondations \u00e0 partir de l&apos;\u00e9tude de sol et des plans architecturaux. Il calcule les charges, d\u00e9finit les armatures et produit les plans d&apos;ex\u00e9cution. Son intervention est obligatoire pour les constructions de plus de R+2 et fortement recommand\u00e9e pour toute construction. Les tarifs du BET pour une villa varient de 8 000 \u00e0 25 000 MAD.
        </p>

        <p className="mt-6 text-sm text-stone-500">
          Trouvez votre architecte sur{" "}
          <Link href="/architectes" className="text-[#b5522a] underline">
            Bati.ma \u2014 Annuaire des architectes
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
