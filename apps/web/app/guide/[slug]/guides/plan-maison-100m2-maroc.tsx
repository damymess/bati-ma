import Link from "next/link";

export default function GuidePlanMaison100m2Maroc() {
  const faq = [
    {
      q: "Combien co\u00fbte la construction d\u2019une maison de 100 m\u00b2 au Maroc en 2026 ?",
      a: "Le co\u00fbt de construction d\u2019une maison de 100 m\u00b2 varie entre 350 000 et 800 000 MAD selon le standing et la ville. En gamme \u00e9conomique, comptez 3 500 \u00e0 5 000 MAD/m\u00b2. En moyen standing, de 5 000 \u00e0 8 000 MAD/m\u00b2. Ces montants n\u2019incluent pas le terrain.",
    },
    {
      q: "Peut-on avoir 3 chambres dans une maison de 100 m\u00b2 au Maroc ?",
      a: "Oui, une maison R+1 de 100 m\u00b2 habitables peut accueillir 3 chambres confortables \u00e0 l\u2019\u00e9tage (10-14 m\u00b2 chacune) avec un salon, une cuisine et une salle de bain au rez-de-chauss\u00e9e. En plain-pied, 2 chambres sont plus r\u00e9alistes pour garder des espaces de vie spacieux.",
    },
    {
      q: "Faut-il un architecte pour une maison de 100 m\u00b2 au Maroc ?",
      a: "La loi n\u2019impose un architecte qu\u2019au-del\u00e0 de 150 m\u00b2. Toutefois, un architecte est fortement recommand\u00e9 m\u00eame pour 100 m\u00b2 : il optimise l\u2019espace, assure la conformit\u00e9 au plan d\u2019am\u00e9nagement et facilite l\u2019obtention du permis de construire. Ses honoraires repr\u00e9sentent 5 \u00e0 8 % du co\u00fbt des travaux.",
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
        <h2>Plan maison 100 m\u00b2 : un format populaire au Maroc</h2>
        <p>
          La maison de 100 m\u00b2 est l&apos;un des formats les plus demand\u00e9s au Maroc. Elle
          repr\u00e9sente un compromis id\u00e9al entre confort et budget pour une famille de 3 \u00e0
          5 personnes. En 2026, de nombreux lotissements proposent des parcelles
          adapt\u00e9es \u00e0 ce type de construction.
        </p>

        <h2>Configurations possibles</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Configuration</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Chambres</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Caract\u00e9ristiques</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">Plain-pied 2 chambres</td><td className="border border-stone-200 px-3 py-2">2</td><td className="border border-stone-200 px-3 py-2">Grand salon, cuisine ouverte, terrasse</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">R+1 compact 3 chambres</td><td className="border border-stone-200 px-3 py-2">3</td><td className="border border-stone-200 px-3 py-2">RDC : s\u00e9jour + cuisine, \u00e9tage : chambres</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">R+1 avec terrasse</td><td className="border border-stone-200 px-3 py-2">2-3</td><td className="border border-stone-200 px-3 py-2">Terrasse accessible sur le toit</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Maison patio</td><td className="border border-stone-200 px-3 py-2">2</td><td className="border border-stone-200 px-3 py-2">Patio central, style marocain revisit\u00e9</td></tr>
          </tbody>
        </table>

        <h2>Plan R+1 : optimiser l&apos;espace sur 100 m\u00b2</h2>
        <p>
          Le plan R+1 est la solution la plus courante pour 100 m\u00b2 habitables au Maroc.
          Sur une parcelle de 60 \u00e0 80 m\u00b2, le rez-de-chauss\u00e9e accueille le salon (20-25 m\u00b2),
          la cuisine (8-12 m\u00b2), un WC et \u00e9ventuellement une chambre d&apos;amis. L&apos;\u00e9tage comprend
          2 \u00e0 3 chambres (10-14 m\u00b2) et une salle de bain.
        </p>

        <h2>Astuces d&apos;optimisation de l&apos;espace</h2>
        <ul>
          <li><strong>Cuisine ouverte</strong> : gagne 3-5 m\u00b2 par rapport \u00e0 une cuisine ferm\u00e9e</li>
          <li><strong>Rangements int\u00e9gr\u00e9s</strong> : placards sous escalier, dressing mural</li>
          <li><strong>Double fonction</strong> : salon-salle \u00e0 manger, bureau-chambre d&apos;amis</li>
          <li><strong>Terrasse exploitable</strong> : buanderie, espace repas ext\u00e9rieur</li>
          <li><strong>Lumi\u00e8re naturelle</strong> : puits de lumi\u00e8re, grandes fen\u00eatres pour agrandir visuellement</li>
        </ul>

        <h2>Co\u00fbt de construction par gamme</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Gamme</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Prix / m\u00b2</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Budget total (100 m\u00b2)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">\u00c9conomique</td><td className="border border-stone-200 px-3 py-2">3 500 - 5 000 MAD</td><td className="border border-stone-200 px-3 py-2">350 000 - 500 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Moyen standing</td><td className="border border-stone-200 px-3 py-2">5 000 - 8 000 MAD</td><td className="border border-stone-200 px-3 py-2">500 000 - 800 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Haut standing</td><td className="border border-stone-200 px-3 py-2">8 000 - 12 000 MAD</td><td className="border border-stone-200 px-3 py-2">800 000 - 1 200 000 MAD</td></tr>
          </tbody>
        </table>

        <h2>Styles architecturaux pour 100 m\u00b2</h2>
        <p>
          Les styles les plus adapt\u00e9s aux petites surfaces sont le contemporain minimaliste
          (lignes \u00e9pur\u00e9es, toit plat), le n\u00e9o-marocain compact (patio r\u00e9duit, arches) et
          le m\u00e9diterran\u00e9en (fa\u00e7ades claires, pergola). L&apos;architecte adapte le style aux
          contraintes du terrain et au cahier des charges du lotissement.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm font-semibold text-[#b5522a] mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            M\u00eame pour 100 m\u00b2, un architecte fait la diff\u00e9rence. Comparez les portfolios
            et demandez des devis gratuits sur{" "}
            <Link href="/architectes" className="text-[#b5522a] underline">
              Bati.ma
            </Link>.
          </p>
        </div>
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
