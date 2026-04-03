export default function GuideMaisonCampagne() {
  const faq = [
    { q: "Peut-on construire sur un terrain agricole au Maroc ?", a: "En principe, les terrains agricoles (terrain falachiya) ne sont pas constructibles. Cependant, il est possible d&apos;obtenir une d\u00e9rogation aupr\u00e8s de la commune rurale et de la Direction R\u00e9gionale de l&apos;Agriculture, \u00e0 condition que la construction soit li\u00e9e \u00e0 l&apos;exploitation agricole (ferme, logement de l&apos;exploitant). Le Dahir du 25 juin 1960 et la loi 12-90 encadrent ces d\u00e9rogations." },
    { q: "Combien co\u00fbte la construction d&apos;une maison \u00e0 la campagne au Maroc ?", a: "Le co\u00fbt au m\u00b2 en zone rurale est inf\u00e9rieur de 20 \u00e0 40 % par rapport aux villes. Comptez entre 2 500 et 4 500 MAD/m\u00b2 pour le gros \u0153uvre et les finitions standard. Le terrain est \u00e9galement beaucoup moins cher : de 50 \u00e0 300 MAD/m\u00b2 selon la r\u00e9gion et la proximit\u00e9 des routes." },
    { q: "Faut-il un architecte pour construire en zone rurale ?", a: "La loi 016-89 impose le recours \u00e0 un architecte pour toute construction de plus de 150 m\u00b2 de surface plancher. En dessous de ce seuil en zone rurale, un plan vis\u00e9 par un technicien agr\u00e9\u00e9 peut suffire, mais l&apos;accompagnement d&apos;un architecte reste vivement recommand\u00e9 pour la d\u00e9rogation et la conformit\u00e9 parasismique." },
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
        <h2>Construire \u00e0 la campagne : un r\u00eave accessible au Maroc</h2>
        <p>
          De plus en plus de Marocains et de MRE (Marocains r\u00e9sidant \u00e0 l&apos;\u00e9tranger) choisissent de construire en zone rurale. Les raisons sont multiples : prix du foncier 5 \u00e0 10 fois inf\u00e9rieur aux villes, cadre de vie paisible, possibilit\u00e9 de grandes surfaces et potentiel agritouristique. Cependant, construire \u00e0 la campagne implique des contraintes sp\u00e9cifiques qu&apos;il faut anticiper.
        </p>

        <h2>Le statut du terrain agricole</h2>
        <p>
          Au Maroc, le foncier rural se d\u00e9cline en plusieurs statuts juridiques : melk (propri\u00e9t\u00e9 priv\u00e9e titris\u00e9e), collectif (terres de tribus g\u00e9r\u00e9es par le Minist\u00e8re de l&apos;Int\u00e9rieur), guich (terrains de l&apos;\u00c9tat) et habous (biens religieux). Seuls les terrains melk titris\u00e9s permettent une construction s\u00e9curis\u00e9e juridiquement. V\u00e9rifiez syst\u00e9matiquement le titre foncier aupr\u00e8s de la Conservation Fonci\u00e8re.
        </p>
        <p>
          Les terrains agricoles sont soumis au principe de non-constructibilit\u00e9 (loi 12-90). Pour obtenir une d\u00e9rogation, vous devez d\u00e9montrer que la construction est n\u00e9cessaire \u00e0 l&apos;exploitation agricole. Le dossier passe par l&apos;agence urbaine et la Direction R\u00e9gionale de l&apos;Agriculture. D\u00e9lai moyen : 4 \u00e0 8 mois. Certaines communes rurales disposent d\u00e9sormais de plans d&apos;am\u00e9nagement qui d\u00e9limitent des zones constructibles.
        </p>

        <h2>Co\u00fbts de construction en zone rurale</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-300 px-3 py-2 text-left">Poste</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Zone urbaine (MAD/m\u00b2)</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Zone rurale (MAD/m\u00b2)</th>
              <th className="border border-stone-300 px-3 py-2 text-left">\u00c9conomie</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Terrain</td>
              <td className="border border-stone-300 px-3 py-2">1 500 \u2013 8 000</td>
              <td className="border border-stone-300 px-3 py-2">50 \u2013 300</td>
              <td className="border border-stone-300 px-3 py-2">80 \u2013 95 %</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Gros \u0153uvre</td>
              <td className="border border-stone-300 px-3 py-2">3 500 \u2013 5 500</td>
              <td className="border border-stone-300 px-3 py-2">2 500 \u2013 4 000</td>
              <td className="border border-stone-300 px-3 py-2">25 \u2013 30 %</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Finitions</td>
              <td className="border border-stone-300 px-3 py-2">1 500 \u2013 3 000</td>
              <td className="border border-stone-300 px-3 py-2">1 000 \u2013 2 000</td>
              <td className="border border-stone-300 px-3 py-2">30 \u2013 35 %</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">VRD (voirie, r\u00e9seaux)</td>
              <td className="border border-stone-300 px-3 py-2">Inclus</td>
              <td className="border border-stone-300 px-3 py-2">500 \u2013 1 500</td>
              <td className="border border-stone-300 px-3 py-2">Surco\u00fbt</td>
            </tr>
          </tbody>
        </table>
        <p>
          Attention aux co\u00fbts cach\u00e9s : en zone rurale, les raccordements aux r\u00e9seaux (eau ONEE, \u00e9lectricit\u00e9 ONE) peuvent repr\u00e9senter 30 000 \u00e0 100 000 MAD si la parcelle est \u00e9loign\u00e9e des lignes existantes. L&apos;assainissement autonome (fosse septique am\u00e9lior\u00e9e) est souvent la seule option et co\u00fbte entre 15 000 et 40 000 MAD.
        </p>

        <h2>Styles architecturaux r\u00e9gionaux</h2>
        <p>
          Le Maroc rural poss\u00e8de une richesse architecturale unique. Dans le Haut Atlas, les maisons en pis\u00e9 (terre crue) avec toits en terrasse s&apos;int\u00e8grent naturellement au paysage. Dans le Rif, la pierre locale domine avec des toitures en tuile. Dans les plaines du Gharb et de la Cha\u00efouia, les fermes traditionnelles (ferma) adoptent un plan en U autour d&apos;une cour centrale. Un bon architecte saura fusionner ces traditions avec le confort moderne.
        </p>
        <p>
          L&apos;\u00e9co-construction gagne du terrain en milieu rural : maisons en pis\u00e9 stabilis\u00e9 (terre + 5 \u00e0 8 % de ciment), briques de terre compress\u00e9e (BTC), toitures v\u00e9g\u00e9talis\u00e9es. Ces techniques r\u00e9duisent le co\u00fbt de construction de 20 \u00e0 30 % et offrent une excellente isolation thermique naturelle.
        </p>

        <h2>Infrastructures et autonomie</h2>
        <p>
          En zone isol\u00e9e, l&apos;autonomie \u00e9nerg\u00e9tique est une option s\u00e9rieuse. Un syst\u00e8me solaire photovolta\u00efque de 3 \u00e0 5 kWc co\u00fbte entre 40 000 et 80 000 MAD et couvre les besoins d&apos;une maison familiale. L&apos;eau peut \u00eatre fournie par un puits ou un forage (10 000 \u00e0 30 000 MAD selon la profondeur) compl\u00e9t\u00e9 par un syst\u00e8me de r\u00e9cup\u00e9ration d&apos;eau de pluie.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Avant d&apos;acheter un terrain agricole, consultez un architecte et un notaire pour v\u00e9rifier la faisabilit\u00e9 de la d\u00e9rogation. De nombreux MRE ach\u00e8tent des parcelles non constructibles par m\u00e9connaissance du droit foncier marocain. Sur Bati.ma, trouvez un architecte exp\u00e9riment\u00e9 en construction rurale dans votre r\u00e9gion.
          </p>
        </div>

        <h2>Le projet agritouristique</h2>
        <p>
          Le Maroc encourage le tourisme rural \u00e0 travers des incitations fiscales et des subventions (programme Maroc Vert, strat\u00e9gie touristique 2030). Transformer une ferme en g\u00eete rural ou maison d&apos;h\u00f4tes permet de rentabiliser l&apos;investissement. Les r\u00e9gions du Souss-Massa, de l&apos;Oriental et de l&apos;Atlas sont particuli\u00e8rement porteuses. Un architecte sp\u00e9cialis\u00e9 en h\u00f4tellerie rurale peut concevoir un projet \u00e0 la fois authentique et conforme aux normes touristiques.
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
