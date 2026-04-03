export default function GuideRevetementSol() {
  const faq = [
    { q: "Quel est le rev\u00eatement de sol le plus populaire au Maroc ?", a: "Le carrelage en gr\u00e8s c\u00e9rame domine le march\u00e9 marocain gr\u00e2ce \u00e0 son rapport qualit\u00e9/prix (80 \u00e0 250 MAD/m\u00b2 pos\u00e9). Il est r\u00e9sistant, facile d&apos;entretien et disponible dans une grande vari\u00e9t\u00e9 de finitions (imitation bois, marbre, pierre). Le zellige reste tr\u00e8s pris\u00e9 pour les espaces traditionnels et les projets haut de gamme." },
    { q: "Le zellige est-il adapt\u00e9 \u00e0 toute la maison ?", a: "Le zellige artisanal est magnifique mais fragile. Il convient parfaitement aux murs, cr\u00e9dences et salles de bain. Pour le sol, pr\u00e9f\u00e9rez le zellige \u00e9pais (15 mm minimum) pos\u00e9 sur une chape parfaitement plane. Il n\u00e9cessite un traitement hydrofuge et un entretien r\u00e9gulier. Pour les pi\u00e8ces \u00e0 fort passage, le carrelage ou le granito sont plus adapt\u00e9s." },
    { q: "Le parquet est-il viable dans le climat marocain ?", a: "Le parquet massif souffre des variations d&apos;humidit\u00e9 au Maroc (gonflement en hiver, retrait en \u00e9t\u00e9). Pr\u00e9f\u00e9rez le parquet contrecoll\u00e9 ou stratifi\u00e9, plus stable dimensionnellement. \u00c9vitez les pi\u00e8ces humides et les expositions directes au soleil. Le parquet en teck ou ip\u00e9 (bois tropicaux) r\u00e9siste mieux que le ch\u00eane europ\u00e9en dans ce climat." },
  ];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="prose-content">
        <h2>Choisir son rev\u00eatement de sol au Maroc</h2>
        <p>
          Le choix du rev\u00eatement de sol impacte durablement l&apos;esth\u00e9tique, le confort et la valeur de votre bien immobilier. Le Maroc offre une richesse unique de mat\u00e9riaux, du zellige artisanal ancestral au gr\u00e8s c\u00e9rame high-tech, en passant par le marbre de Khouribga et le granito traditionnel. Ce guide compare les options disponibles pour vous aider \u00e0 faire le bon choix selon votre usage, votre budget et votre style.
        </p>

        <h2>Comparatif des rev\u00eatements</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-300 px-3 py-2 text-left">Mat\u00e9riau</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Prix pos\u00e9 (MAD/m\u00b2)</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Durabilit\u00e9</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Entretien</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Usage recommand\u00e9</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Zellige artisanal</td>
              <td className="border border-stone-300 px-3 py-2">300 \u2013 800</td>
              <td className="border border-stone-300 px-3 py-2">Moyenne</td>
              <td className="border border-stone-300 px-3 py-2">Exigeant</td>
              <td className="border border-stone-300 px-3 py-2">Salons, salles de bain, d\u00e9cor</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Marbre marocain</td>
              <td className="border border-stone-300 px-3 py-2">250 \u2013 600</td>
              <td className="border border-stone-300 px-3 py-2">\u00c9lev\u00e9e</td>
              <td className="border border-stone-300 px-3 py-2">Mod\u00e9r\u00e9</td>
              <td className="border border-stone-300 px-3 py-2">Halls, salons, escaliers</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Gr\u00e8s c\u00e9rame</td>
              <td className="border border-stone-300 px-3 py-2">80 \u2013 250</td>
              <td className="border border-stone-300 px-3 py-2">Tr\u00e8s \u00e9lev\u00e9e</td>
              <td className="border border-stone-300 px-3 py-2">Facile</td>
              <td className="border border-stone-300 px-3 py-2">Toute la maison</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Granito (terrazzo)</td>
              <td className="border border-stone-300 px-3 py-2">200 \u2013 450</td>
              <td className="border border-stone-300 px-3 py-2">Tr\u00e8s \u00e9lev\u00e9e</td>
              <td className="border border-stone-300 px-3 py-2">Facile</td>
              <td className="border border-stone-300 px-3 py-2">Commerces, halls, cuisines</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Parquet contrecoll\u00e9</td>
              <td className="border border-stone-300 px-3 py-2">250 \u2013 500</td>
              <td className="border border-stone-300 px-3 py-2">Moyenne</td>
              <td className="border border-stone-300 px-3 py-2">Mod\u00e9r\u00e9</td>
              <td className="border border-stone-300 px-3 py-2">Chambres, salons (zones s\u00e8ches)</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Carreaux de ciment</td>
              <td className="border border-stone-300 px-3 py-2">200 \u2013 500</td>
              <td className="border border-stone-300 px-3 py-2">\u00c9lev\u00e9e</td>
              <td className="border border-stone-300 px-3 py-2">Mod\u00e9r\u00e9</td>
              <td className="border border-stone-300 px-3 py-2">Entr\u00e9es, cuisines, terrasses couvertes</td>
            </tr>
          </tbody>
        </table>

        <h2>Le zellige : tr\u00e9sor artisanal marocain</h2>
        <p>
          Le zellige est un carreau de terre cuite \u00e9maill\u00e9e, d\u00e9coup\u00e9 \u00e0 la main par des artisans (maalems) de F\u00e8s, principal centre de production. Chaque pi\u00e8ce est unique, avec des variations de teinte et de forme qui cr\u00e9ent un charme irr\u00e9guli\u00e8r caract\u00e9ristique. Les motifs g\u00e9om\u00e9triques traditionnels (zouak) n\u00e9cessitent un savoir-faire transmis de g\u00e9n\u00e9ration en g\u00e9n\u00e9ration.
        </p>
        <p>
          Le zellige moderne se d\u00e9cline en formats plus grands (10x10 cm, 5x5 cm) et en couleurs contemporaines, s\u00e9duisant aussi bien les projets traditionnels que les int\u00e9rieurs design. Les fournisseurs r\u00e9put\u00e9s incluent Popham Design, Mosaic del Sur et les ateliers de F\u00e8s (Ain Nokbi).
        </p>

        <h2>Le marbre marocain</h2>
        <p>
          Le Maroc est un producteur majeur de marbre, notamment le marbre gris de Khouribga, le marbre rose d&apos;Agadir et le marbre fossilis\u00e9 d&apos;Erfoud. Le march\u00e9 local offre des prix tr\u00e8s comp\u00e9titifs par rapport \u00e0 l&apos;import (marbre de Carrare \u00e0 600-1 500 MAD/m\u00b2 contre 250-400 MAD/m\u00b2 pour le marbre marocain). La pose n\u00e9cessite un marbrier qualifi\u00e9 et une chape parfaitement plane.
        </p>

        <h2>Le gr\u00e8s c\u00e9rame : le choix rationnel</h2>
        <p>
          Le gr\u00e8s c\u00e9rame pleine masse est le rev\u00eatement le plus polyvalent. Fabriqu\u00e9 au Maroc par Super C\u00e9rame, Multicerame et import\u00e9 d&apos;Espagne et d&apos;Italie, il existe en grands formats (60x60, 80x80, 120x60 cm) imitant parfaitement le bois, le marbre ou le b\u00e9ton cir\u00e9. Sa r\u00e9sistance \u00e0 l&apos;usure (PEI 4 ou 5), aux taches et \u00e0 l&apos;humidit\u00e9 en fait le choix id\u00e9al pour les pi\u00e8ces \u00e0 fort passage et les terrasses couvertes.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Le choix du rev\u00eatement de sol doit se faire d\u00e8s la conception architecturale, car il impacte l&apos;\u00e9paisseur de la chape et les niveaux finis. Un architecte d&apos;int\u00e9rieur saura marier les mat\u00e9riaux selon les pi\u00e8ces : zellige en salle de bain, gr\u00e8s c\u00e9rame dans les espaces de vie, marbre dans le hall. Consultez les profils d&apos;architectes d&apos;int\u00e9rieur sur Bati.ma.
          </p>
        </div>

        <h2>Pose et pr\u00e9paration du support</h2>
        <p>
          Quel que soit le rev\u00eatement choisi, la qualit\u00e9 de la chape est d\u00e9terminante. Elle doit \u00eatre parfaitement plane (tol\u00e9rance de 2 mm sous la r\u00e8gle de 2 m), s\u00e8che (humidit\u00e9 r\u00e9siduelle inf\u00e9rieure \u00e0 3 %) et suffisamment \u00e9paisse (5 cm minimum). La pose coll\u00e9e au peigne est la technique standard au Maroc, utilisant des mortiers-colles C2 pour les grands formats et les ext\u00e9rieurs.
        </p>
      </div>
      <section className="mt-10">
        <h2 className="text-xl font-bold text-stone-900 mb-5">Questions fr\u00e9quentes</h2>
        <div className="space-y-4">
          {faq.map((f) => (
            <details key={f.q} className="group border border-stone-200 rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between px-4 py-3 cursor-pointer text-sm font-medium text-stone-800 hover:bg-stone-50">{f.q}<span className="text-stone-400 group-open:rotate-180 transition-transform">\u2193</span></summary>
              <div className="px-4 pb-4 pt-1 text-sm text-stone-600 leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
