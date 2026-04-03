export default function GuideArchitecteKenitra() {
  const faq = [
    { q: "Combien coûte un architecte à Kénitra ?", a: "Les honoraires d\u2019un architecte à Kénitra varient entre 3 % et 7 % du montant des travaux pour une mission complète. Pour une mission limitée à la conception et au dépôt du permis de construire, comptez entre 15 000 et 35 000 MAD selon la complexité du projet. Les tarifs restent compétitifs par rapport à Rabat, située à seulement 40 km." },
    { q: "Quels sont les quartiers en expansion à Kénitra pour construire ?", a: "Les zones les plus dynamiques sont Mehdia (balnéaire), le quartier de la Gare LGV (nouveau pôle urbain), les lotissements autour de l\u2019Atlantic Free Zone, et Bir Rami pour les projets résidentiels. La ville connaît une forte expansion grâce à la ligne à grande vitesse et à la zone franche industrielle." },
    { q: "Faut-il un architecte pour un projet de R+2 à Kénitra ?", a: "Oui, au Maroc la loi impose le recours à un architecte inscrit à l\u2019Ordre pour tout projet de construction, y compris les maisons individuelles de type R+2. L\u2019architecte est responsable du dépôt du permis de construire et de la conformité du projet aux règles d\u2019urbanisme de la commune de Kénitra." },
    { q: "Comment la LGV a-t-elle impacté l\u2019immobilier à Kénitra ?", a: "La ligne à grande vitesse Al Boraq a placé Kénitra à 20 minutes de Rabat et 1h15 de Casablanca. Cette connectivité a entraîné une hausse de la demande immobilière, avec de nombreux projets résidentiels et commerciaux autour de la gare. Les prix fonciers ont augmenté de 20 à 40 % dans les quartiers proches." },
    { q: "Quelles zones de Kénitra sont à éviter pour construire ?", a: "Évitez les zones inondables le long de l\u2019oued Sebou, identifiées dans le plan d\u2019aménagement. Certaines zones proches de la zone industrielle peuvent aussi présenter des nuisances sonores ou olfactives. Votre architecte local vérifiera le plan d\u2019aménagement et les contraintes hydrauliques avant tout achat de terrain." },
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
        <h2>Pourquoi Kénitra est-elle en pleine transformation urbaine ?</h2>
        <p>
          Kénitra est l&apos;une des villes marocaines à la croissance la plus rapide.
          Avec l&apos;arrivée de la ligne à grande vitesse (LGV), l&apos;implantation de
          l&apos;Atlantic Free Zone et de nombreux projets d&apos;infrastructure, la ville
          attire de plus en plus de particuliers et d&apos;investisseurs souhaitant
          construire. Cette dynamique crée une forte demande en architectes
          qualifiés capables d&apos;accompagner des projets variés.
        </p>

        <h2>Pourquoi choisir un architecte basé à Kénitra ?</h2>
        <p>
          Un architecte local connaît les spécificités du plan d&apos;aménagement de
          Kénitra, les procédures de la commune urbaine, et les contraintes
          propres à chaque quartier (zones inondables le long du Sebou, zones
          industrielles, périmètre de la gare LGV). Il dispose également d&apos;un
          réseau d&apos;entreprises de construction et de fournisseurs locaux, ce
          qui facilite la coordination du chantier.
        </p>

        <h2>Quelles sont les zones résidentielles et économiques de Kénitra ?</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="text-left px-3 py-2 border border-stone-200">Zone</th>
              <th className="text-left px-3 py-2 border border-stone-200">Caractéristiques</th>
              <th className="text-left px-3 py-2 border border-stone-200">Type de projets</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-3 py-2 border border-stone-200">Mehdia / Plage</td><td className="px-3 py-2 border border-stone-200">Front de mer, touristique</td><td className="px-3 py-2 border border-stone-200">Villas balnéaires, résidences</td></tr>
            <tr><td className="px-3 py-2 border border-stone-200">Quartier Gare LGV</td><td className="px-3 py-2 border border-stone-200">Nouveau pôle urbain</td><td className="px-3 py-2 border border-stone-200">Immeubles, commerces, bureaux</td></tr>
            <tr><td className="px-3 py-2 border border-stone-200">Atlantic Free Zone</td><td className="px-3 py-2 border border-stone-200">Zone franche industrielle</td><td className="px-3 py-2 border border-stone-200">Usines, entrepôts, bureaux</td></tr>
            <tr><td className="px-3 py-2 border border-stone-200">Bir Rami</td><td className="px-3 py-2 border border-stone-200">Résidentiel en expansion</td><td className="px-3 py-2 border border-stone-200">Maisons R+2, petits immeubles</td></tr>
            <tr><td className="px-3 py-2 border border-stone-200">Centre-ville</td><td className="px-3 py-2 border border-stone-200">Tissu urbain dense</td><td className="px-3 py-2 border border-stone-200">Rénovation, surélévation</td></tr>
          </tbody>
        </table>

        <h2>Quels grands projets urbains transforment Kénitra ?</h2>
        <p>
          Plusieurs projets structurants redessinent le visage de Kénitra :
        </p>
        <ul>
          <li><strong>Gare LGV Al Boraq</strong> : pôle multimodal avec quartier d&apos;affaires</li>
          <li><strong>Atlantic Free Zone</strong> : zone franche attirant des investisseurs internationaux</li>
          <li><strong>Marina de Mehdia</strong> : projet balnéaire et touristique</li>
          <li><strong>Nouveau stade</strong> : infrastructure sportive et développement périphérique</li>
        </ul>

        <h2>Combien coûte un architecte à Kénitra ?</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="text-left px-3 py-2 border border-stone-200">Mission</th>
              <th className="text-left px-3 py-2 border border-stone-200">Tarif indicatif</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-3 py-2 border border-stone-200">Conception + permis de construire</td><td className="px-3 py-2 border border-stone-200">15 000 – 35 000 MAD</td></tr>
            <tr><td className="px-3 py-2 border border-stone-200">Mission complète (conception + suivi)</td><td className="px-3 py-2 border border-stone-200">3 % – 7 % du montant travaux</td></tr>
            <tr><td className="px-3 py-2 border border-stone-200">Consultation / étude de faisabilité</td><td className="px-3 py-2 border border-stone-200">2 000 – 5 000 MAD</td></tr>
          </tbody>
        </table>

        <div className="bg-[#f4ece7] border border-stone-200 rounded-lg p-4 my-6">
          <p className="text-sm text-stone-700 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-600">
            Kénitra étant traversée par l&apos;oued Sebou, certaines zones sont
            classées inondables. Avant d&apos;acheter un terrain, demandez à votre
            architecte de vérifier le plan d&apos;aménagement et les contraintes
            hydrauliques. Un architecte local saura identifier les secteurs
            à risque et orienter votre choix.
          </p>
        </div>

        <h2>Comment la LGV impacte-t-elle l&apos;immobilier à Kénitra ?</h2>
        <p>
          Depuis la mise en service de la ligne à grande vitesse Al Boraq,
          Kénitra n&apos;est plus qu&apos;à 20 minutes de Rabat et 1h15 de Casablanca.
          Cette connectivité a entraîné une hausse de la demande immobilière,
          avec de nombreux projets résidentiels et commerciaux autour de la
          gare. Les architectes locaux accompagnent cette transformation en
          concevant des projets adaptés à cette nouvelle dynamique urbaine.
        </p>

        <h2>Trouver un architecte à Kénitra sur Bati.ma</h2>
        <p>
          Consultez les profils d&apos;architectes vérifiés à Kénitra, comparez
          leurs réalisations et demandez des devis gratuits directement sur
          Bati.ma. Chaque professionnel affiche ses spécialités, ses projets
          réalisés et les avis de ses clients précédents.
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
