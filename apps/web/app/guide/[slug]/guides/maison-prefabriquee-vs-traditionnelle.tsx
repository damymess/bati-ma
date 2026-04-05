export default function GuidePrefabVsTraditionnelle() {
  const faq = [
    { q: "Une maison préfabriquée dure-t-elle aussi longtemps qu\u0027une maison traditionnelle ?", a: "Oui, une maison préfabriquée en béton armé ou en ossature métallique a une durée de vie de 50 ans et plus, comparable à une construction en maçonnerie traditionnelle. La clé réside dans la qualité des matériaux, le respect des normes NM et un entretien régulier. Seuls les containers transformés ont une durée de vie plus courte (25–30 ans)." },
    { q: "La revente d\u0027une maison préfabriquée est-elle difficile au Maroc ?", a: "La perception évolue rapidement au Maroc. En 2026, les maisons préfabriquées bien construites et conformes aux normes trouvent acquéreur sans difficulté, surtout dans les villes dynamiques comme Casablanca, Marrakech et Tanger. La clé est de disposer de tous les documents (permis, certificat de conformité, plans d\u0027architecte) et de choisir un système constructif pérenne comme le béton ou l\u0027acier." },
    { q: "Le préfabriqué résiste-t-il aux séismes aussi bien que le traditionnel ?", a: "Les structures préfabriquées en acier et en bois sont en réalité plus performantes que la maçonnerie traditionnelle face aux séismes, grâce à leur flexibilité et leur légèreté. Le béton préfabriqué offre une résistance équivalente au béton coulé sur place. Tous les systèmes doivent respecter le RPS 2000 (règlement parasismique marocain) et être validés par un bureau d\u0027études structure." },
    { q: "Peut-on personnaliser entièrement une maison préfabriquée ?", a: "La personnalisation est possible mais plus encadrée qu\u0027en construction traditionnelle. Vous pouvez choisir les dimensions, l\u0027agencement intérieur, les finitions et les façades. En revanche, les formes architecturales complexes (courbes, porte-à-faux importants) sont plus coûteuses et parfois impossibles selon le système constructif. Les fournisseurs proposent généralement un catalogue de modèles adaptables." },
    { q: "Quand faut-il choisir le préfabriqué plutôt que le traditionnel ?", a: "Le préfabriqué est particulièrement adapté si vous avez une contrainte de délai (projet à livrer en moins de 6 mois), un budget maîtrisé, un terrain accessible aux engins de levage, ou si vous gérez le projet à distance (MRE). Le traditionnel reste préférable pour les projets architecturaux très personnalisés, les terrains en pente forte ou les rénovations/extensions de bâtiments existants." },
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
        <h2>Préfabriqué vs traditionnel : quel mode de construction choisir au Maroc ?</h2>
        <p>
          Au Maroc, la construction traditionnelle en maçonnerie domine largement le marché résidentiel. Pourtant, la
          <strong> construction préfabriquée</strong> gagne du terrain, portée par les grands chantiers du Mondial 2030 et la
          demande croissante de logements abordables. Ce guide compare objectivement les deux approches pour vous aider à
          faire le choix le plus adapté à votre projet.
        </p>

        <h2>Tableau comparatif détaillé</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead><tr className="bg-stone-100"><th className="border border-stone-200 px-3 py-2 text-left">Critère</th><th className="border border-stone-200 px-3 py-2 text-left">Préfabriqué</th><th className="border border-stone-200 px-3 py-2 text-left">Traditionnel</th></tr></thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">Prix / m²</td><td className="border border-stone-200 px-3 py-2">2 500 – 5 500 MAD</td><td className="border border-stone-200 px-3 py-2">3 500 – 10 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Délai de construction</td><td className="border border-stone-200 px-3 py-2">3–4 mois</td><td className="border border-stone-200 px-3 py-2">12–18 mois</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Contrôle qualité</td><td className="border border-stone-200 px-3 py-2">En usine, rigoureux</td><td className="border border-stone-200 px-3 py-2">Sur chantier, variable</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Personnalisation</td><td className="border border-stone-200 px-3 py-2">Modérée</td><td className="border border-stone-200 px-3 py-2">Totale</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Valeur de revente</td><td className="border border-stone-200 px-3 py-2">Perception en évolution</td><td className="border border-stone-200 px-3 py-2">Bien établie</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Déchets de chantier</td><td className="border border-stone-200 px-3 py-2">–80 %</td><td className="border border-stone-200 px-3 py-2">Standard</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Normes applicables</td><td className="border border-stone-200 px-3 py-2">RPS 2000, RTCM</td><td className="border border-stone-200 px-3 py-2">RPS 2000, RTCM</td></tr>
          </tbody>
        </table>

        <h2>Avantages de la construction préfabriquée</h2>
        <p>
          Le préfabriqué offre des atouts considérables pour le marché marocain :
        </p>
        <ul>
          <li><strong>Rapidité d&apos;exécution</strong> : la fabrication en usine se fait en parallèle des travaux de fondations. Le montage sur site ne prend que quelques semaines, réduisant le délai global à 3–4 mois.</li>
          <li><strong>Maîtrise du budget</strong> : le prix est fixé dès la commande. Pas de surprises liées aux retards, aux intempéries ou aux pénuries de matériaux sur chantier.</li>
          <li><strong>Qualité constante</strong> : chaque élément est fabriqué dans des conditions contrôlées, avec des tolérances dimensionnelles précises et des tests qualité systématiques.</li>
          <li><strong>Impact environnemental réduit</strong> : les déchets de chantier sont réduits de 80 à 90 %. Le préfabriqué consomme moins d&apos;eau et génère moins de nuisances sonores.</li>
          <li><strong>Idéal pour les MRE</strong> : la gestion à distance est facilitée car le chantier est court et les étapes sont prévisibles.</li>
        </ul>

        <h2>Avantages de la construction traditionnelle</h2>
        <p>
          La maçonnerie traditionnelle conserve des atouts indéniables :
        </p>
        <ul>
          <li><strong>Personnalisation totale</strong> : toutes les formes architecturales sont possibles, y compris les voûtes, les arcs et les détails en zellige ou en tadelakt propres à l&apos;architecture marocaine.</li>
          <li><strong>Main-d&apos;œuvre locale abondante</strong> : le savoir-faire en maçonnerie est largement répandu au Maroc, facilitant la recherche d&apos;artisans compétents.</li>
          <li><strong>Perception culturelle favorable</strong> : une maison en dur est perçue comme un investissement solide et durable par la majorité des Marocains.</li>
          <li><strong>Adaptabilité au terrain</strong> : la construction sur mesure s&apos;adapte à tous les terrains, y compris les pentes fortes et les configurations complexes.</li>
          <li><strong>Extensions faciles</strong> : ajouter un étage ou une pièce est techniquement simple avec la maçonnerie.</li>
        </ul>

        <h2>Inconvénients respectifs</h2>
        <p>
          <strong>Limites du préfabriqué :</strong> personnalisation plus restreinte, nécessité d&apos;un accès au terrain
          pour les engins de levage, coût de transport élevé si le terrain est éloigné de l&apos;usine, et perception encore
          parfois assimilée au provisoire par certains acheteurs.
        </p>
        <p>
          <strong>Limites du traditionnel :</strong> délais longs et souvent dépassés (12 à 18 mois minimum), qualité
          dépendante de la compétence des ouvriers et de la surveillance du chantier, dépassements budgétaires fréquents
          (15 à 30 % en moyenne), et nuisances importantes pour le voisinage.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Ne choisissez pas uniquement sur le prix. Évaluez votre projet selon <strong>quatre critères clés</strong> :
            le délai souhaité, votre budget réel (incluant les imprévus), le niveau de personnalisation requis et
            votre capacité à suivre le chantier. Un architecte expérimenté peut vous orienter vers la solution la
            plus adaptée. Consultez les profils vérifiés sur Bati.ma.
          </p>
        </div>

        <h2>La perception culturelle au Maroc</h2>
        <p>
          Au Maroc, la maison en dur reste un <strong>symbole de réussite et de stabilité</strong>. Le préfabriqué souffre
          encore d&apos;une image associée aux constructions provisoires ou aux chantiers de BTP. Pourtant, cette perception
          évolue rapidement : les villas préfabriquées haut de gamme en béton architectonique ou en ossature métallique
          sont de plus en plus visibles dans les quartiers résidentiels de Casablanca, Rabat et Marrakech. Les grands projets
          du Mondial 2030 contribuent également à normaliser ce mode constructif auprès du grand public.
        </p>

        <h2>Quand choisir le préfabriqué ?</h2>
        <ul>
          <li>Vous avez un <strong>délai serré</strong> (moins de 6 mois pour emménager)</li>
          <li>Vous êtes <strong>MRE</strong> et ne pouvez pas suivre un chantier long à distance</li>
          <li>Votre budget est <strong>limité et fixe</strong>, sans marge pour les imprévus</li>
          <li>Le terrain est plat, accessible et proche d&apos;une zone industrielle</li>
          <li>Vous souhaitez une construction <strong>éco-responsable</strong></li>
        </ul>

        <h2>Quand choisir le traditionnel ?</h2>
        <ul>
          <li>Vous souhaitez une <strong>architecture sur mesure</strong> avec des détails artisanaux marocains</li>
          <li>Le terrain présente des <strong>contraintes fortes</strong> (forte pente, accès étroit)</li>
          <li>Vous prévoyez des <strong>extensions futures</strong> (ajout d&apos;étages)</li>
          <li>La <strong>valeur de revente</strong> est votre priorité absolue</li>
          <li>Vous êtes sur place et pouvez <strong>superviser le chantier</strong> quotidiennement</li>
        </ul>

        <h2>Tendances 2026 au Maroc</h2>
        <p>
          Le marché de la construction préfabriquée au Maroc connaît une croissance estimée à 15–20 % par an. Plusieurs
          facteurs accélèrent cette tendance : les investissements massifs liés au <strong>Mondial 2030</strong> (stades,
          hôtels, logements), la volonté gouvernementale de réduire le déficit en logements sociaux, l&apos;arrivée de
          fournisseurs internationaux (turcs, chinois, européens) et la prise de conscience environnementale. Les
          solutions hybrides, combinant structure préfabriquée et finitions artisanales traditionnelles, représentent
          une tendance prometteuse qui réconcilie modernité et identité architecturale marocaine.
        </p>
      </div>
      <section className="mt-10">
        <h2 className="text-xl font-bold text-stone-900 mb-5">Questions fréquentes</h2>
        <div className="space-y-4">
          {faq.map((f) => (
            <details key={f.q} className="group border border-stone-200 rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between px-4 py-3 cursor-pointer text-sm font-medium text-stone-800 hover:bg-stone-50">{f.q}<span className="text-stone-400 group-open:rotate-180 transition-transform">↓</span></summary>
              <div className="px-4 pb-4 pt-1 text-sm text-stone-600 leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
