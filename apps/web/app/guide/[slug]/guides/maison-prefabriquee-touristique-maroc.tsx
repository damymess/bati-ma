export default function GuidePrefabTouristique() {
  const faq = [
    { q: "Faut-il un permis de construire pour un hébergement touristique préfabriqué au Maroc ?", a: "Oui, tout hébergement touristique permanent nécessite un permis de construire et une autorisation d\u0027exploitation délivrée par le ministère du Tourisme. Pour les structures démontables (tentes glamping, dômes), une autorisation d\u0027occupation temporaire du sol peut suffire dans certaines communes rurales, mais il est recommandé de consulter l\u0027agence urbaine locale. Les zones touristiques classées (SDAU) ont des procédures accélérées." },
    { q: "Quelle est la rentabilité d\u0027un projet glamping préfabriqué au Maroc ?", a: "Un projet glamping bien positionné (désert, montagne, littoral) génère un ROI de 25 à 45 % par an. Une tente luxury à 150 000 MAD louée à 1 500 MAD/nuit avec un taux d\u0027occupation de 55 % rapporte environ 300 000 MAD/an brut. Le retour sur investissement se fait en 1 à 2 ans pour les tentes, 2 à 3 ans pour les chalets et 3 à 5 ans pour les lodges modulaires." },
    { q: "Quels sont les meilleurs emplacements pour un hébergement touristique préfabriqué ?", a: "Les zones les plus rentables sont le désert d\u0027Agafay (à 30 min de Marrakech), la vallée de l\u0027Ourika, le littoral atlantique (Essaouira, Taghazout, Dakhla), le Moyen Atlas (Ifrane, Azrou) et les palmeraies du sud (Zagora, Merzouga). La proximité d\u0027un aéroport international et d\u0027attractions touristiques est déterminante pour le taux d\u0027occupation." },
    { q: "Peut-on déplacer un hébergement touristique préfabriqué ?", a: "Oui, c\u0027est l\u0027un des principaux avantages du préfabriqué touristique. Les tentes glamping se démontent en 1 à 2 jours, les dômes géodésiques en 2 à 3 jours, et les modules container en 1 journée (grue + camion). Seuls les chalets en bois sur fondations nécessitent un démontage plus complexe. Cette mobilité permet de tester différents emplacements ou de s\u0027adapter aux saisons." },
    { q: "Quelles normes respecter pour un hébergement touristique au Maroc ?", a: "L\u0027hébergement doit respecter la loi 80-14 relative aux établissements touristiques, le dahir de 2015 sur les maisons d\u0027hôtes, les normes de sécurité incendie, et les réglementations sanitaires (eau potable, assainissement). Pour le classement en étoiles, des critères supplémentaires de confort et de service s\u0027appliquent. Un architecte agréé doit valider la conformité du projet." },
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
        <h2>Le boom du tourisme préfabriqué au Maroc</h2>
        <p>
          Le Maroc a accueilli <strong>plus de 14,5 millions de touristes en 2023</strong>, un record historique.
          Cette dynamique, amplifiée par la perspective du Mondial 2030, stimule une demande sans précédent en
          <strong> hébergements touristiques alternatifs</strong> : glamping, écolodges, chalets de montagne et hôtels modulaires.
          Le pays compte désormais plus de <strong>883 sites de glamping et hébergements insolites</strong> référencés
          sur les plateformes internationales, contre moins de 200 en 2019.
        </p>
        <p>
          La construction préfabriquée répond parfaitement à cette demande : déploiement rapide, coût maîtrisé,
          impact environnemental réduit et possibilité de démontage. Les investisseurs, marocains comme étrangers,
          privilégient ces solutions pour lancer des projets touristiques en 2 à 4 mois au lieu de 12 à 18 mois
          en construction traditionnelle.
        </p>

        <h2>Types de structures préfabriquées pour le tourisme</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead><tr className="bg-stone-100"><th className="border border-stone-200 px-3 py-2 text-left">Type structure</th><th className="border border-stone-200 px-3 py-2 text-left">Capacité</th><th className="border border-stone-200 px-3 py-2 text-left">Prix unitaire</th><th className="border border-stone-200 px-3 py-2 text-left">Délai installation</th><th className="border border-stone-200 px-3 py-2 text-left">ROI estimé</th></tr></thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">Tente glamping luxury</td><td className="border border-stone-200 px-3 py-2">2 – 4 personnes</td><td className="border border-stone-200 px-3 py-2">100 000 – 200 000 MAD</td><td className="border border-stone-200 px-3 py-2">3 – 5 jours</td><td className="border border-stone-200 px-3 py-2">35 – 45 %/an</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Chalet bois préfab</td><td className="border border-stone-200 px-3 py-2">4 – 6 personnes</td><td className="border border-stone-200 px-3 py-2">300 000 – 600 000 MAD</td><td className="border border-stone-200 px-3 py-2">3 – 5 semaines</td><td className="border border-stone-200 px-3 py-2">20 – 30 %/an</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Lodge modulaire</td><td className="border border-stone-200 px-3 py-2">2 – 8 personnes</td><td className="border border-stone-200 px-3 py-2">400 000 – 900 000 MAD</td><td className="border border-stone-200 px-3 py-2">4 – 8 semaines</td><td className="border border-stone-200 px-3 py-2">18 – 25 %/an</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Dôme géodésique</td><td className="border border-stone-200 px-3 py-2">2 – 4 personnes</td><td className="border border-stone-200 px-3 py-2">80 000 – 180 000 MAD</td><td className="border border-stone-200 px-3 py-2">2 – 4 jours</td><td className="border border-stone-200 px-3 py-2">30 – 40 %/an</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Container hôtel</td><td className="border border-stone-200 px-3 py-2">1 – 2 personnes</td><td className="border border-stone-200 px-3 py-2">150 000 – 350 000 MAD</td><td className="border border-stone-200 px-3 py-2">1 – 2 semaines</td><td className="border border-stone-200 px-3 py-2">25 – 35 %/an</td></tr>
          </tbody>
        </table>

        <h2>Avantages pour les investisseurs touristiques</h2>
        <p><strong>Déploiement rapide :</strong></p>
        <ul>
          <li>Ouverture possible en 2 à 4 mois contre 12 à 18 mois en construction classique</li>
          <li>Revenus générés dès la première saison touristique</li>
          <li>Possibilité d&apos;ajouter des unités progressivement selon la demande</li>
        </ul>
        <p><strong>Coût maîtrisé :</strong></p>
        <ul>
          <li>Investissement initial 40 à 60 % inférieur à un hôtel traditionnel</li>
          <li>Pas de gros œuvre lourd ni de fondations profondes dans la plupart des cas</li>
          <li>Coûts de maintenance réduits grâce aux matériaux industriels</li>
        </ul>
        <p><strong>Flexibilité et démontabilité :</strong></p>
        <ul>
          <li>Structures démontables et relocalisables en quelques jours</li>
          <li>Adaptation saisonnière possible (montagne en été, désert en hiver)</li>
          <li>Valeur résiduelle élevée en cas de revente ou de relocalisation</li>
        </ul>

        <h2>Exemples de projets réussis au Maroc</h2>
        <p>
          Le <strong>désert d&apos;Agafay</strong>, à 30 minutes de Marrakech, concentre la plus forte densité de camps
          glamping haut de gamme du pays. Des projets comme Scarabeo Camp et Inara Camp utilisent des structures
          préfabriquées (tentes sur plateformes, dômes transparents) avec des tarifs de 2 000 à 5 000 MAD/nuit.
        </p>
        <p>
          Dans le <strong>Haut Atlas</strong>, les écolodges en bois préfabriqué comme Kasbah du Toubkal et
          les refuges de montagne modernisés attirent les randonneurs internationaux. Sur la <strong>côte atlantique</strong>,
          Taghazout et Dakhla voient fleurir des surf camps modulaires en containers aménagés, ciblant
          une clientèle jeune et internationale avec des budgets de 500 à 1 500 MAD/nuit.
        </p>

        <h2>Réglementation du tourisme rural et alternatif</h2>
        <p>
          Le cadre réglementaire marocain pour les hébergements touristiques repose sur :
        </p>
        <ul>
          <li><strong>Loi 80-14 :</strong> relative aux établissements touristiques, définissant les catégories et les normes de classement</li>
          <li><strong>Dahir de 2015 :</strong> réglementant les maisons d&apos;hôtes et gîtes ruraux</li>
          <li><strong>Plan Forêts :</strong> pour les projets en zone forestière, autorisation des Eaux et Forêts nécessaire</li>
          <li><strong>SDAU et plans d&apos;aménagement :</strong> vérifier la compatibilité du terrain avec l&apos;usage touristique</li>
        </ul>
        <p>
          Les zones touristiques classées bénéficient de procédures accélérées et d&apos;incitations fiscales
          (exonération de l&apos;IS pendant 5 ans, TVA réduite sur les équipements).
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Avant d&apos;investir dans un hébergement touristique préfabriqué, réalisez une <strong>étude de marché locale</strong> :
            taux d&apos;occupation moyen de la zone, prix pratiqués par la concurrence, saisonnalité et profil de la clientèle cible.
            Un architecte spécialisé en tourisme vous aidera à optimiser l&apos;implantation et à obtenir les autorisations.
            Trouvez des professionnels vérifiés sur Bati.ma.
          </p>
        </div>

        <h2>Rentabilité et ROI d&apos;un projet touristique préfabriqué</h2>
        <p>
          La rentabilité d&apos;un hébergement touristique préfabriqué dépend de trois facteurs clés :
          l&apos;<strong>emplacement</strong> (proximité d&apos;un aéroport et d&apos;attractions), le <strong>positionnement tarifaire</strong>
          (luxe vs budget) et le <strong>taux d&apos;occupation</strong> (objectif minimal de 50 % annuel).
        </p>
        <p>
          Un camp glamping de 10 tentes luxury dans le désert d&apos;Agafay, avec un investissement total de
          <strong> 2 000 000 MAD</strong> (tentes, aménagements, raccordements), peut générer un chiffre d&apos;affaires
          annuel de <strong>3 000 000 à 4 500 000 MAD</strong> avec un taux d&apos;occupation de 60 % et un prix moyen
          de 1 800 MAD/nuit. Après charges d&apos;exploitation (personnel, énergie, marketing), le bénéfice net
          se situe entre 800 000 et 1 500 000 MAD/an, soit un ROI de 40 à 75 %.
        </p>

        <h2>Choisir son fournisseur de structures touristiques</h2>
        <p>
          Les critères de sélection d&apos;un fournisseur pour un projet touristique sont :
        </p>
        <ul>
          <li><strong>Références :</strong> demandez à visiter des installations existantes au Maroc</li>
          <li><strong>Garantie :</strong> minimum 2 ans sur la structure, 5 ans sur l&apos;étanchéité</li>
          <li><strong>Service après-vente :</strong> disponibilité de pièces de rechange et intervention rapide</li>
          <li><strong>Conformité :</strong> certification aux normes marocaines de sécurité incendie et de résistance au vent</li>
          <li><strong>Personnalisation :</strong> capacité à adapter les designs à votre concept et à votre branding</li>
        </ul>
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
