export default function GuideArchitecteMohammedia() {
  const faq = [
    { q: "Combien coûte un architecte à Mohammedia ?", a: "Les honoraires d\u2019un architecte à Mohammedia se situent entre 3 % et 7 % du montant des travaux pour une mission complète. Pour une conception avec dépôt de permis de construire, comptez entre 18 000 et 40 000 MAD. Les tarifs sont proches de ceux de Casablanca en raison de la proximité géographique, mais certains architectes locaux proposent des offres plus compétitives." },
    { q: "Quels sont les meilleurs quartiers pour construire à Mohammedia ?", a: "Les quartiers les plus prisés sont le Secteur balnéaire (front de mer, villas de standing), Ville Verte (nouveau lotissement résidentiel), le quartier des Crêtes (vue mer, résidentiel calme), et la zone de Mannesmann pour les projets industriels ou commerciaux. Chaque secteur a ses propres règles d\u2019urbanisme à vérifier avec votre architecte." },
    { q: "Mohammedia est-elle un bon choix pour construire une villa balnéaire ?", a: "Oui, Mohammedia est réputée pour sa qualité de vie balnéaire à seulement 25 km de Casablanca. La ville offre un front de mer attractif, un climat agréable et des prix fonciers inférieurs à ceux de Casablanca pour des terrains en bord de mer. Les architectes locaux sont spécialisés dans les villas balnéaires avec terrasses, piscines et orientations optimisées vers l\u2019océan." },
    { q: "Quelles sont les contraintes pour construire en front de mer à Mohammedia ?", a: "Le recul obligatoire par rapport au domaine public maritime et les servitudes de passage sont à vérifier. Les matériaux doivent résister à la corrosion saline : aluminium traité, pierres naturelles, béton avec enrobage renforcé. Un architecte local expérimenté anticipe ces contraintes dès la conception." },
    { q: "Pourquoi Mohammedia est-elle moins chère que Casablanca pour construire ?", a: "Les prix fonciers à Mohammedia sont inférieurs de 20 à 30 % par rapport aux quartiers équivalents de Casablanca, tout en offrant un cadre de vie balnéaire à seulement 25 km. Cela permet de construire des villas plus spacieuses pour un budget comparable, avec l\u2019avantage d\u2019un environnement plus calme." },
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
        <h2>Pourquoi construire à Mohammedia plutôt qu&apos;à Casablanca ?</h2>
        <p>
          Mohammedia est une ville côtière résidentielle située à seulement
          25 km de Casablanca. Surnommée la « ville des fleurs et des sports »,
          elle attire des familles et des cadres qui souhaitent profiter d&apos;un
          cadre de vie balnéaire tout en restant proches de la métropole
          économique. Cette position stratégique en fait un lieu prisé pour
          la construction de villas et de résidences.
        </p>

        <h2>Pourquoi choisir un architecte à Mohammedia ?</h2>
        <p>
          Un architecte basé à Mohammedia connaît les spécificités locales :
          plan d&apos;aménagement de la commune, contraintes liées au littoral
          (recul par rapport à la mer, protection du domaine public maritime),
          et style architectural balnéaire. Il maîtrise les procédures
          administratives locales et dispose d&apos;un réseau d&apos;entreprises de
          construction de confiance dans la région.
        </p>

        <h2>Quelles sont les zones de construction à Mohammedia ?</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="text-left px-3 py-2 border border-stone-200">Zone</th>
              <th className="text-left px-3 py-2 border border-stone-200">Caractéristiques</th>
              <th className="text-left px-3 py-2 border border-stone-200">Type de projets</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-3 py-2 border border-stone-200">Secteur balnéaire / Front de mer</td><td className="px-3 py-2 border border-stone-200">Vue océan, haut standing</td><td className="px-3 py-2 border border-stone-200">Villas balnéaires, résidences</td></tr>
            <tr><td className="px-3 py-2 border border-stone-200">Les Crêtes</td><td className="px-3 py-2 border border-stone-200">Hauteurs, vue panoramique</td><td className="px-3 py-2 border border-stone-200">Villas résidentielles</td></tr>
            <tr><td className="px-3 py-2 border border-stone-200">Ville Verte</td><td className="px-3 py-2 border border-stone-200">Nouveau lotissement</td><td className="px-3 py-2 border border-stone-200">Maisons individuelles, R+2</td></tr>
            <tr><td className="px-3 py-2 border border-stone-200">Centre-ville</td><td className="px-3 py-2 border border-stone-200">Tissu urbain mixte</td><td className="px-3 py-2 border border-stone-200">Immeubles, commerces, rénovation</td></tr>
            <tr><td className="px-3 py-2 border border-stone-200">Zone industrielle Mannesmann</td><td className="px-3 py-2 border border-stone-200">Industriel, logistique</td><td className="px-3 py-2 border border-stone-200">Entrepôts, bureaux, usines</td></tr>
          </tbody>
        </table>

        <h2>Comment concevoir une villa balnéaire à Mohammedia ?</h2>
        <p>
          La conception de villas balnéaires est la spécialité phare des
          architectes de Mohammedia. Ces projets se caractérisent par :
        </p>
        <ul>
          <li>De grandes baies vitrées orientées vers l&apos;océan</li>
          <li>Des terrasses spacieuses et des rooftops aménagés</li>
          <li>Des piscines intégrées à l&apos;architecture</li>
          <li>Des matériaux résistants à l&apos;air marin (pierres naturelles, aluminium traité)</li>
          <li>Une ventilation naturelle optimisée grâce à l&apos;orientation des vents</li>
        </ul>

        <h2>Combien coûte un architecte à Mohammedia ?</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="text-left px-3 py-2 border border-stone-200">Mission</th>
              <th className="text-left px-3 py-2 border border-stone-200">Tarif indicatif</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-3 py-2 border border-stone-200">Conception + permis de construire</td><td className="px-3 py-2 border border-stone-200">18 000 – 40 000 MAD</td></tr>
            <tr><td className="px-3 py-2 border border-stone-200">Mission complète (conception + suivi)</td><td className="px-3 py-2 border border-stone-200">3 % – 7 % du montant travaux</td></tr>
            <tr><td className="px-3 py-2 border border-stone-200">Consultation / avant-projet</td><td className="px-3 py-2 border border-stone-200">2 500 – 6 000 MAD</td></tr>
          </tbody>
        </table>

        <div className="bg-[#f4ece7] border border-stone-200 rounded-lg p-4 my-6">
          <p className="text-sm text-stone-700 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-600">
            Si vous construisez en front de mer à Mohammedia, votre architecte
            doit vérifier le recul obligatoire par rapport au domaine public
            maritime et les servitudes de passage. Les matériaux doivent être
            choisis pour résister à la corrosion saline. Un architecte local
            expérimenté anticipe ces contraintes dès la phase de conception.
          </p>
        </div>

        <h2>Quel est l&apos;avantage stratégique de la proximité avec Casablanca ?</h2>
        <p>
          La proximité de Casablanca (25 km, 20 minutes par autoroute) fait de
          Mohammedia un choix judicieux pour ceux qui travaillent dans la
          métropole mais souhaitent un cadre de vie plus calme et balnéaire.
          Les prix fonciers restent inférieurs de 20 à 30 % par rapport aux
          quartiers équivalents de Casablanca, ce qui permet de construire
          des villas plus spacieuses pour un budget comparable.
        </p>

        <h2>Trouver un architecte à Mohammedia sur Bati.ma</h2>
        <p>
          Consultez les profils d&apos;architectes vérifiés à Mohammedia sur
          Bati.ma. Comparez leurs réalisations de villas balnéaires, lisez
          les avis clients et demandez des devis gratuits. Chaque professionnel
          affiche ses spécialités et ses projets récents pour vous aider
          à faire le bon choix.
        </p>
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-stone-900 mb-5">Questions fréquentes</h2>
        <div className="space-y-4">
          {faq.map((f) => (
            <details key={f.q} className="group border border-stone-200 rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between px-4 py-3 cursor-pointer text-sm font-medium text-stone-800 hover:bg-stone-50">
                {f.q}
                <span className="text-stone-400 group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <div className="px-4 pb-4 pt-1 text-sm text-stone-600 leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
