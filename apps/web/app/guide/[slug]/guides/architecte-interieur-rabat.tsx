export default function GuideArchitecteInterieurRabat() {
  const faq = [
    { q: "Quelle est la différence entre un architecte et un architecte d\u2019intérieur à Rabat ?", a: "L\u2019architecte conçoit la structure du bâtiment (plans, permis de construire, gros œuvre) tandis que l\u2019architecte d\u2019intérieur intervient sur l\u2019aménagement et la décoration des espaces intérieurs : choix des matériaux, mobilier, éclairage, couleurs, optimisation des volumes. Au Maroc, la profession d\u2019architecte d\u2019intérieur n\u2019est pas réglementée de la même façon, mais il est recommandé de choisir un professionnel diplômé." },
    { q: "Combien coûte un architecte d\u2019intérieur à Rabat ?", a: "Les honoraires varient selon la mission : comptez entre 300 et 800 MAD/m² pour un projet complet (conception + suivi), ou entre 150 et 400 MAD/m² pour une mission de conseil et conception uniquement. Pour un appartement de 100 m², le budget total se situe entre 30 000 et 80 000 MAD selon le niveau de prestation." },
    { q: "Un architecte d\u2019intérieur peut-il intervenir sur un bureau ou un local professionnel ?", a: "Oui, de nombreux architectes d\u2019intérieur à Rabat se spécialisent dans l\u2019aménagement de bureaux, espaces de coworking, cabinets médicaux, boutiques et restaurants. La capitale administrative du Maroc génère une forte demande en aménagement d\u2019espaces institutionnels et professionnels." },
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
        <h2>Rabat : un marché unique pour l&apos;architecture d&apos;intérieur</h2>
        <p>
          Capitale administrative du Maroc, Rabat présente un marché spécifique
          pour l&apos;architecture d&apos;intérieur. La ville concentre des ministères,
          des ambassades, des sièges d&apos;entreprises et une population aisée dans
          des quartiers résidentiels prisés. Cette dualité entre espaces
          institutionnels et résidentiels crée une demande variée pour les
          architectes d&apos;intérieur.
        </p>

        <h2>Style institutionnel vs résidentiel</h2>
        <p>
          À Rabat, l&apos;architecture d&apos;intérieur se décline en deux grandes
          catégories :
        </p>
        <ul>
          <li><strong>Style institutionnel</strong> : bureaux ministériels, sièges d&apos;entreprises,
          cabinets de conseil, ambassades. Sobriété, fonctionnalité, matériaux
          nobles (bois, marbre), éclairage professionnel.</li>
          <li><strong>Style résidentiel</strong> : appartements haut standing, villas, penthouses.
          Personnalisation poussée, mélange de contemporain et de touches
          marocaines, mobilier sur mesure.</li>
        </ul>

        <h2>Les quartiers clés pour l&apos;architecture d&apos;intérieur</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="text-left px-3 py-2 border border-stone-200">Quartier</th>
              <th className="text-left px-3 py-2 border border-stone-200">Profil</th>
              <th className="text-left px-3 py-2 border border-stone-200">Projets typiques</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-3 py-2 border border-stone-200">Agdal</td><td className="px-3 py-2 border border-stone-200">Résidentiel / commercial animé</td><td className="px-3 py-2 border border-stone-200">Appartements, restaurants, boutiques</td></tr>
            <tr><td className="px-3 py-2 border border-stone-200">Hay Riad</td><td className="px-3 py-2 border border-stone-200">Quartier d&apos;affaires moderne</td><td className="px-3 py-2 border border-stone-200">Bureaux, showrooms, villas</td></tr>
            <tr><td className="px-3 py-2 border border-stone-200">Souissi</td><td className="px-3 py-2 border border-stone-200">Résidentiel haut de gamme</td><td className="px-3 py-2 border border-stone-200">Villas, résidences diplomatiques</td></tr>
            <tr><td className="px-3 py-2 border border-stone-200">Centre-ville / Hassan</td><td className="px-3 py-2 border border-stone-200">Patrimoine art déco</td><td className="px-3 py-2 border border-stone-200">Rénovation appartements anciens</td></tr>
            <tr><td className="px-3 py-2 border border-stone-200">Océan / Oudayas</td><td className="px-3 py-2 border border-stone-200">Front de mer, charme</td><td className="px-3 py-2 border border-stone-200">Lofts, espaces atypiques</td></tr>
          </tbody>
        </table>

        <h2>Tarifs des architectes d&apos;intérieur à Rabat</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="text-left px-3 py-2 border border-stone-200">Prestation</th>
              <th className="text-left px-3 py-2 border border-stone-200">Tarif indicatif</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-3 py-2 border border-stone-200">Conseil / planche d&apos;ambiance</td><td className="px-3 py-2 border border-stone-200">3 000 – 8 000 MAD</td></tr>
            <tr><td className="px-3 py-2 border border-stone-200">Conception complète (plans + 3D)</td><td className="px-3 py-2 border border-stone-200">150 – 400 MAD / m²</td></tr>
            <tr><td className="px-3 py-2 border border-stone-200">Conception + suivi travaux</td><td className="px-3 py-2 border border-stone-200">300 – 800 MAD / m²</td></tr>
            <tr><td className="px-3 py-2 border border-stone-200">Aménagement bureau / local commercial</td><td className="px-3 py-2 border border-stone-200">400 – 1 000 MAD / m²</td></tr>
          </tbody>
        </table>

        <h2>Tendances déco et aménagement à Rabat en 2026</h2>
        <p>
          Les tendances actuelles chez les architectes d&apos;intérieur de Rabat
          reflètent un équilibre entre modernité internationale et identité
          marocaine :
        </p>
        <ul>
          <li>Matériaux naturels : bois, pierre, tadelakt, béton ciré</li>
          <li>Couleurs terracotta, vert sauge et tons neutres</li>
          <li>Mobilier sur mesure par des artisans locaux</li>
          <li>Intégration de la domotique et de l&apos;éclairage LED indirect</li>
          <li>Espaces ouverts avec cuisine intégrée au salon</li>
          <li>Terrasses aménagées et jardins d&apos;intérieur</li>
        </ul>

        <div className="bg-[#f4ece7] border border-stone-200 rounded-lg p-4 my-6">
          <p className="text-sm text-stone-700 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-600">
            Avant de choisir un architecte d&apos;intérieur à Rabat, demandez à voir
            son portfolio complet avec des photos avant/après. Les meilleurs
            professionnels proposent des rendus 3D réalistes pour vous permettre
            de visualiser le résultat final. Vérifiez également qu&apos;il dispose
            d&apos;un réseau d&apos;artisans et de fournisseurs fiables.
          </p>
        </div>

        <h2>Comment choisir son architecte d&apos;intérieur à Rabat ?</h2>
        <p>
          Pour bien choisir votre architecte d&apos;intérieur, évaluez son portfolio,
          sa compréhension de votre style de vie et son réseau de fournisseurs.
          Sur Bati.ma, comparez les profils, consultez les réalisations et
          demandez des devis gratuits. Privilégiez un professionnel dont le style
          correspond à vos attentes et qui propose un accompagnement clair,
          du conseil initial à la livraison finale.
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
