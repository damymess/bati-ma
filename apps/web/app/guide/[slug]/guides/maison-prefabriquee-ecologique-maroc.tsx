export default function GuidePrefabEcologique() {
  const faq = [
    { q: "La maison préfabriquée est-elle conforme à la RTCM au Maroc ?", a: "Oui, les maisons préfabriquées peuvent être conçues pour respecter et même dépasser les exigences de la RTCM (Réglementation Thermique de Construction au Maroc). Les panneaux SIP, les ossatures bois isolées et les structures à isolation intégrée atteignent facilement les valeurs U requises. Le bureau d\u0027études du fabricant fournit une note de calcul thermique démontrant la conformité." },
    { q: "Combien coûtent des panneaux solaires pour une maison préfabriquée au Maroc ?", a: "Une installation photovoltaïque de 3 kW (suffisante pour une maison de 100-150 m²) coûte entre 30 000 et 45 000 MAD au Maroc, pose incluse. L\u0027ensoleillement exceptionnel du pays (3 000 heures/an en moyenne) permet de produire 4 500 à 5 500 kWh/an, couvrant 70 à 90 % des besoins électriques d\u0027un foyer. Le retour sur investissement est de 4 à 6 ans." },
    { q: "Peut-on récupérer l\u0027eau de pluie pour une maison au Maroc ?", a: "Oui, la récupération d\u0027eau de pluie est autorisée et encouragée au Maroc, surtout dans les zones rurales. Un système de collecte (toiture, gouttières, cuve de stockage) coûte entre 8 000 et 20 000 MAD selon la capacité (2 000 à 10 000 litres). L\u0027eau collectée est utilisable pour l\u0027irrigation, les sanitaires et, après traitement, pour la consommation. Dans les régions semi-arides, cela représente une économie de 15 à 30 % sur la facture d\u0027eau." },
    { q: "Existe-t-il des maisons imprimées en 3D au Maroc ?", a: "Oui, la startup Be More 3D a réalisé en 2023 une maison de 32 m² imprimée en 3D à Casablanca en seulement 12 heures de temps d\u0027impression. Cette technologie utilise un mortier spécial extrudé couche par couche par un robot. Le coût est estimé à 2 000-3 500 MAD/m², mais la technologie est encore au stade expérimental au Maroc. Des projets pilotes sont en cours pour le logement social." },
    { q: "Quelles aides existent pour la construction écologique au Maroc ?", a: "Le Maroc offre plusieurs incitations : exonération de TVA sur les panneaux solaires et chauffe-eau solaires, programme PROMASOL pour le solaire thermique (subvention de 20 à 40 %), fonds de dépollution industrielle (FODEP) pour les systèmes d\u0027assainissement écologiques, et le label Éco-Quartier pour les projets immobiliers durables. L\u0027AMEE (Agence Marocaine pour l\u0027Efficacité Énergétique) accompagne les porteurs de projets." },
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
        <h2>Pourquoi le préfabriqué est plus écologique</h2>
        <p>
          La construction préfabriquée est intrinsèquement plus respectueuse de l&apos;environnement que la construction
          traditionnelle. La fabrication en usine permet de <strong>réduire les déchets de chantier de 80 %</strong>,
          de <strong>diminuer la consommation d&apos;énergie de 30 %</strong> et de limiter les nuisances sonores
          et la pollution de l&apos;air sur le site de construction.
        </p>
        <p>
          Au Maroc, où le secteur du bâtiment représente <strong>33 % de la consommation énergétique nationale</strong>
          et 25 % des émissions de CO₂, la transition vers des méthodes de construction plus durables est une priorité
          nationale inscrite dans la Stratégie Nationale de Développement Durable (SNDD 2030).
        </p>

        <h2>Matériaux durables pour la construction préfabriquée</h2>
        <p>
          Plusieurs matériaux écologiques sont disponibles sur le marché marocain :
        </p>
        <ul>
          <li><strong>Bois certifié PEFC/FSC :</strong> issu de forêts gérées durablement, le bois stocke le carbone et offre une isolation naturelle. Le cèdre de l&apos;Atlas est une ressource locale renouvelable.</li>
          <li><strong>Panneaux SIP (Structural Insulated Panels) :</strong> composés de deux panneaux OSB encadrant un noyau isolant en polystyrène ou polyuréthane, ils offrent une isolation 1,5 fois supérieure aux murs traditionnels pour une épaisseur 2 fois moindre.</li>
          <li><strong>Terre compressée stabilisée (BTC) :</strong> les blocs de terre compressée préfabriqués en usine sont un matériau ancestral remis au goût du jour. Leur inertie thermique est idéale pour le climat marocain.</li>
          <li><strong>Béton bas carbone :</strong> les fabricants marocains développent des bétons à base de cendres volantes et de laitier, réduisant l&apos;empreinte carbone de 30 à 50 %.</li>
          <li><strong>Acier recyclé :</strong> les structures métalliques légères utilisent jusqu&apos;à 90 % d&apos;acier recyclé, avec une recyclabilité totale en fin de vie.</li>
        </ul>

        <h2>Isolation thermique et conformité RTCM</h2>
        <p>
          La <strong>RTCM</strong> (Réglementation Thermique de Construction au Maroc), entrée en vigueur en 2015,
          impose des performances thermiques minimales pour les bâtiments neufs. Les maisons préfabriquées écologiques
          dépassent largement ces exigences grâce à :
        </p>
        <ul>
          <li>Des murs à haute performance thermique (U &lt; 0,45 W/m²·K contre 0,60 exigé)</li>
          <li>Une toiture isolée (U &lt; 0,35 W/m²·K)</li>
          <li>Des menuiseries à rupture de pont thermique (double ou triple vitrage)</li>
          <li>Une étanchéité à l&apos;air supérieure à la construction traditionnelle</li>
        </ul>
        <p>
          Ces performances permettent de réduire les besoins en climatisation de <strong>40 à 60 %</strong>
          dans les régions chaudes du Maroc, et les besoins en chauffage de <strong>50 à 70 %</strong>
          dans les zones de montagne.
        </p>

        <h2>Énergie solaire intégrée</h2>
        <p>
          Avec un ensoleillement de <strong>3 000 heures par an</strong> en moyenne (5 000 heures dans le sud),
          le Maroc est l&apos;un des pays les plus favorables au solaire au monde. L&apos;intégration de panneaux
          photovoltaïques dans une maison préfabriquée est facilitée par la conception en usine :
          les supports sont pré-dimensionnés et les passages de câbles pré-intégrés.
        </p>

        <h2>Solutions écologiques : coûts et retour sur investissement</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead><tr className="bg-stone-100"><th className="border border-stone-200 px-3 py-2 text-left">Solution éco</th><th className="border border-stone-200 px-3 py-2 text-left">Surcoût initial</th><th className="border border-stone-200 px-3 py-2 text-left">Économie / an</th><th className="border border-stone-200 px-3 py-2 text-left">Retour sur investissement</th></tr></thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">Panneaux solaires 3 kW</td><td className="border border-stone-200 px-3 py-2">35 000 – 45 000 MAD</td><td className="border border-stone-200 px-3 py-2">7 000 – 9 000 MAD</td><td className="border border-stone-200 px-3 py-2">4 – 6 ans</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Isolation SIP renforcée</td><td className="border border-stone-200 px-3 py-2">15 000 – 25 000 MAD</td><td className="border border-stone-200 px-3 py-2">4 000 – 7 000 MAD</td><td className="border border-stone-200 px-3 py-2">3 – 5 ans</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Récupération eau de pluie</td><td className="border border-stone-200 px-3 py-2">10 000 – 20 000 MAD</td><td className="border border-stone-200 px-3 py-2">2 000 – 4 000 MAD</td><td className="border border-stone-200 px-3 py-2">4 – 7 ans</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Double vitrage thermique</td><td className="border border-stone-200 px-3 py-2">8 000 – 15 000 MAD</td><td className="border border-stone-200 px-3 py-2">2 500 – 4 500 MAD</td><td className="border border-stone-200 px-3 py-2">3 – 4 ans</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Chauffe-eau solaire</td><td className="border border-stone-200 px-3 py-2">8 000 – 15 000 MAD</td><td className="border border-stone-200 px-3 py-2">3 000 – 5 000 MAD</td><td className="border border-stone-200 px-3 py-2">2 – 4 ans</td></tr>
          </tbody>
        </table>

        <h2>Impression 3D : la révolution en marche</h2>
        <p>
          L&apos;impression 3D de maisons fait son entrée au Maroc avec la startup <strong>Be More 3D</strong>,
          qui a réalisé une maison de <strong>32 m² en seulement 12 heures</strong> de temps d&apos;impression
          à Casablanca. Cette technologie utilise un bras robotisé qui extrude un mortier spécial couche par couche,
          créant des murs porteurs sans coffrage ni main-d&apos;œuvre traditionnelle.
        </p>
        <p>
          Les avantages écologiques sont considérables : <strong>60 % de déchets en moins</strong> par rapport
          au béton coulé, possibilité d&apos;utiliser des matériaux géosourcés (terre, chaux) et une liberté
          de forme qui élimine le besoin de coffrages (économie de bois). Le coût est estimé entre
          <strong> 2 000 et 3 500 MAD/m²</strong>, ce qui en fait une solution prometteuse pour le logement social.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Pour maximiser l&apos;impact écologique de votre maison préfabriquée, combinez <strong>isolation performante + solaire + récupération d&apos;eau</strong>.
            Le surcoût total de 60 000 à 100 000 MAD est amorti en 4 à 6 ans grâce aux économies d&apos;énergie et d&apos;eau.
            Sur Bati.ma, trouvez des architectes certifiés en construction durable qui vous accompagneront dans la conception
            d&apos;une maison à haute performance énergétique.
          </p>
        </div>

        <h2>Exemple : la Maison B autonome</h2>
        <p>
          La <strong>Maison B</strong>, projet marocain primé aux Green Solutions Awards 2019, est un exemple
          concret de maison préfabriquée écologique adaptée au climat local. Conçue par un bureau d&apos;études
          casablancais, elle combine une structure en panneaux SIP, des panneaux solaires en toiture,
          un système de récupération d&apos;eau de pluie et une ventilation naturelle traversante.
        </p>
        <p>
          Résultat : une consommation énergétique de <strong>15 kWh/m²/an</strong> contre 120 kWh/m²/an pour
          une maison marocaine standard, soit une réduction de 87 %. Le surcoût écologique de 20 % a été amorti
          en 5 ans grâce aux économies réalisées sur les factures d&apos;électricité et d&apos;eau.
        </p>

        <h2>Coût vs économies à long terme</h2>
        <p>
          Une maison préfabriquée écologique coûte en moyenne <strong>15 à 25 % de plus</strong> qu&apos;une maison
          préfabriquée standard. Mais les économies annuelles sur l&apos;énergie (6 000 à 15 000 MAD/an)
          et l&apos;eau (2 000 à 4 000 MAD/an) permettent un retour sur investissement en <strong>4 à 7 ans</strong>.
          Sur une durée de vie de 50 ans, l&apos;économie cumulée atteint <strong>400 000 à 950 000 MAD</strong>,
          sans compter la valorisation du bien immobilier liée à sa performance énergétique.
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
