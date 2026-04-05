export default function GuidePrefabBois() {
  const faq = [
    { q: "Les maisons en bois résistent-elles aux termites au Maroc ?", a: "Oui, à condition d\u0027utiliser du bois traité en autoclave classe 4 ou du bois naturellement résistant comme le cèdre de l\u0027Atlas. Un traitement anti-termites préventif est obligatoire dans les zones à risque (littoral, plaines). Les fabricants sérieux appliquent un traitement fongicide et insecticide en usine, garantissant une protection de 10 à 25 ans renouvelable." },
    { q: "Une maison en bois préfabriquée est-elle résistante au feu ?", a: "Le bois massif offre une résistance au feu supérieure à l\u0027acier : il se consume lentement en formant une couche carbonisée protectrice. Les maisons à ossature bois au Maroc doivent respecter la réglementation incendie et utiliser des plaques de plâtre BA13 ou des panneaux ignifugés. Un mur ossature bois standard offre une résistance au feu de 30 à 60 minutes." },
    { q: "Quel entretien pour une maison en bois au Maroc ?", a: "L\u0027entretien consiste à appliquer une lasure ou un saturateur tous les 3 à 5 ans sur les parties extérieures exposées. Les bardages en bois thermotraité ou en composite nécessitent moins d\u0027entretien. À l\u0027intérieur, aucun entretien spécifique n\u0027est requis. Le coût d\u0027entretien annuel est estimé à 15-30 MAD/m²." },
    { q: "Quelle est la durée de vie d\u0027une maison en bois au Maroc ?", a: "Une maison à ossature bois bien construite et entretenue dure 50 ans et plus. Les structures en bois massif (madriers, poteaux-poutres) peuvent dépasser 100 ans. La clé est un bon traitement du bois, une conception adaptée au climat marocain (ventilation, protection contre l\u0027humidité) et un entretien régulier des façades." },
    { q: "Peut-on obtenir un permis de construire pour une maison en bois au Maroc ?", a: "Oui, la réglementation marocaine n\u0027interdit pas la construction en bois. Le permis de construire est délivré selon les mêmes procédures que pour une construction traditionnelle, à condition de respecter le RPS 2000 et les normes NM. Un architecte agréé doit signer les plans et la note de calcul doit être adaptée à la structure bois." },
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
        <h2>Pourquoi choisir le bois pour sa maison préfabriquée au Maroc ?</h2>
        <p>
          La maison préfabriquée en bois séduit de plus en plus de Marocains grâce à ses <strong>performances thermiques exceptionnelles</strong>,
          son esthétique chaleureuse et sa rapidité de montage. Le bois est un isolant naturel dont la conductivité thermique est
          <strong> 15 fois inférieure à celle du béton</strong>, ce qui en fait un matériau idéal pour réduire les factures d&apos;énergie
          dans un pays où les étés dépassent régulièrement 40 °C dans l&apos;intérieur.
        </p>
        <p>
          Le marché marocain de la construction bois connaît une croissance annuelle de 8 à 12 % depuis 2020, portée par la demande
          en résidences secondaires, écolodges touristiques et habitations écologiques. Les fournisseurs locaux et internationaux
          proposent désormais des solutions adaptées au climat et aux normes marocaines.
        </p>

        <h2>Types de bois utilisés dans la construction préfabriquée</h2>
        <p>
          Le choix de l&apos;essence de bois est déterminant pour la durabilité, l&apos;isolation et le coût final du projet.
          Voici les essences les plus courantes sur le marché marocain :
        </p>
        <table className="w-full text-sm border-collapse my-4">
          <thead><tr className="bg-stone-100"><th className="border border-stone-200 px-3 py-2 text-left">Type de bois</th><th className="border border-stone-200 px-3 py-2 text-left">Prix / m²</th><th className="border border-stone-200 px-3 py-2 text-left">Isolation</th><th className="border border-stone-200 px-3 py-2 text-left">Durabilité</th><th className="border border-stone-200 px-3 py-2 text-left">Adapté au climat</th></tr></thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">Pin traité autoclave</td><td className="border border-stone-200 px-3 py-2">4 500 – 5 500 MAD</td><td className="border border-stone-200 px-3 py-2">Bonne (λ = 0,15)</td><td className="border border-stone-200 px-3 py-2">30 – 40 ans</td><td className="border border-stone-200 px-3 py-2">Moyen (traitement obligatoire)</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Cèdre de l&apos;Atlas</td><td className="border border-stone-200 px-3 py-2">6 000 – 8 000 MAD</td><td className="border border-stone-200 px-3 py-2">Excellente (λ = 0,12)</td><td className="border border-stone-200 px-3 py-2">50+ ans</td><td className="border border-stone-200 px-3 py-2">Excellent (naturellement résistant)</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Douglas importé</td><td className="border border-stone-200 px-3 py-2">5 500 – 7 000 MAD</td><td className="border border-stone-200 px-3 py-2">Très bonne (λ = 0,13)</td><td className="border border-stone-200 px-3 py-2">40 – 50 ans</td><td className="border border-stone-200 px-3 py-2">Bon (résistant naturel)</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Épicéa (lamellé-collé)</td><td className="border border-stone-200 px-3 py-2">4 500 – 6 000 MAD</td><td className="border border-stone-200 px-3 py-2">Bonne (λ = 0,14)</td><td className="border border-stone-200 px-3 py-2">35 – 45 ans</td><td className="border border-stone-200 px-3 py-2">Moyen (traitement nécessaire)</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Bois thermotraité</td><td className="border border-stone-200 px-3 py-2">5 000 – 7 500 MAD</td><td className="border border-stone-200 px-3 py-2">Très bonne (λ = 0,11)</td><td className="border border-stone-200 px-3 py-2">50+ ans</td><td className="border border-stone-200 px-3 py-2">Excellent (stable dimensionnellement)</td></tr>
          </tbody>
        </table>

        <h2>Avantages de la maison préfabriquée en bois</h2>
        <p><strong>Performances thermiques :</strong></p>
        <ul>
          <li>Isolation 15 fois supérieure au béton, réduisant la climatisation de 30 à 50 %</li>
          <li>Déphasage thermique de 10 à 12 heures (le frais du matin reste jusqu&apos;au soir)</li>
          <li>Conformité facilitée à la RTCM (Réglementation Thermique de Construction au Maroc)</li>
        </ul>
        <p><strong>Rapidité et économie :</strong></p>
        <ul>
          <li>Montage en 3 à 5 semaines contre 6 à 12 mois pour le traditionnel</li>
          <li>Réduction des coûts de main-d&apos;œuvre de 20 à 30 %</li>
          <li>Chantier sec : pas de temps de séchage du béton</li>
        </ul>
        <p><strong>Esthétique et confort :</strong></p>
        <ul>
          <li>Ambiance chaleureuse et naturelle très recherchée pour les résidences de montagne</li>
          <li>Régulation naturelle de l&apos;humidité intérieure (hygrométrie stable)</li>
          <li>Personnalisation facilitée des façades et finitions</li>
        </ul>

        <h2>Inconvénients et précautions</h2>
        <ul>
          <li><strong>Traitement anti-termites obligatoire :</strong> les zones côtières et les plaines du Maroc abritent des termites actifs. Un traitement en autoclave classe 4 est indispensable.</li>
          <li><strong>Entretien régulier des façades :</strong> lasure ou saturateur tous les 3 à 5 ans, surtout dans les régions à forte exposition solaire (Marrakech, Agadir).</li>
          <li><strong>Perception culturelle :</strong> certains acheteurs marocains associent encore le bois à une construction provisoire. L&apos;éducation du marché est en cours.</li>
          <li><strong>Coût supérieur au béton préfabriqué :</strong> le bois reste 20 à 40 % plus cher que le béton préfabriqué, mais les économies d&apos;énergie compensent sur 10 à 15 ans.</li>
          <li><strong>Humidité côtière :</strong> dans les villes comme Tanger ou Essaouira, une ventilation mécanique et un bardage ventilé sont indispensables.</li>
        </ul>

        <h2>Prix d&apos;une maison préfabriquée en bois au Maroc</h2>
        <p>
          Le budget pour une maison à ossature bois au Maroc varie entre <strong>4 500 et 8 000 MAD/m²</strong> hors foncier,
          selon l&apos;essence de bois, le niveau de finition et la complexité architecturale. Ce prix inclut généralement
          la structure, l&apos;isolation, la couverture et le second œuvre. Les fondations (dalle béton) sont à ajouter,
          soit environ 500 à 800 MAD/m² supplémentaires.
        </p>
        <p>
          Pour une villa de 150 m², comptez un budget global de <strong>675 000 à 1 200 000 MAD</strong> clé en main,
          soit 30 à 50 % moins cher qu&apos;une villa traditionnelle de standing équivalent à Marrakech ou Tanger.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Exigez du fournisseur un <strong>certificat de traitement du bois</strong> (autoclave classe 4 minimum pour le Maroc)
            et vérifiez que la structure est calculée selon le <strong>RPS 2000</strong>. Privilégiez le cèdre de l&apos;Atlas
            pour les régions chaudes et humides : c&apos;est l&apos;essence locale la plus adaptée au climat marocain.
            Sur Bati.ma, comparez gratuitement les devis d&apos;architectes spécialisés en construction bois.
          </p>
        </div>

        <h2>Fournisseurs de maisons en bois au Maroc</h2>
        <p>
          Plusieurs acteurs se partagent le marché marocain de la construction bois : <strong>Woodstock Maroc</strong> (Casablanca),
          spécialisé dans les chalets et villas en bois massif ; <strong>Kontio Maroc</strong> (représentant du finlandais Kontio),
          pour les maisons en madriers ; <strong>Bois &amp; Compagnie</strong> (Marrakech), orienté écolodges et résidences touristiques ;
          et <strong>Atlas Wood</strong> (Ifrane), qui travaille le cèdre de l&apos;Atlas local. Des fournisseurs européens
          comme Natilia et Ami Bois proposent également des projets export vers le Maroc.
        </p>

        <h2>Adaptation au climat marocain</h2>
        <p>
          Le Maroc présente une grande diversité climatique : aride dans le sud, méditerranéen sur le littoral, continental
          dans l&apos;intérieur et montagnard dans l&apos;Atlas. La maison en bois doit être conçue en conséquence :
        </p>
        <ul>
          <li><strong>Zones chaudes (Marrakech, Agadir) :</strong> isolation renforcée en toiture, débords de toit généreux, bardage ventilé clair pour réfléchir le soleil</li>
          <li><strong>Littoral (Tanger, Essaouira) :</strong> bois thermotraité ou cèdre, bardage ventilé obligatoire, traitement anti-sel</li>
          <li><strong>Montagne (Ifrane, Azrou) :</strong> double isolation, triple vitrage, bois massif empilé pour l&apos;inertie thermique</li>
          <li><strong>Zones arides (Ouarzazate, Errachidia) :</strong> protection UV renforcée, finitions claires, ventilation naturelle</li>
        </ul>

        <h2>Durabilité et entretien à long terme</h2>
        <p>
          La durabilité d&apos;une maison en bois au Maroc repose sur trois piliers : le <strong>choix de l&apos;essence</strong>
          (cèdre et Douglas sont les plus durables), la <strong>qualité du traitement</strong> (autoclave classe 4 minimum)
          et la <strong>conception architecturale</strong> (protection des bois contre les intempéries et le soleil direct).
          Un entretien régulier des façades (lasure tous les 3 à 5 ans) et une inspection annuelle de la charpente
          garantissent une durée de vie supérieure à 50 ans.
        </p>
        <p>
          Le coût d&apos;entretien annuel est estimé à <strong>15 à 30 MAD/m²</strong>, soit 2 250 à 4 500 MAD/an
          pour une maison de 150 m². C&apos;est comparable à l&apos;entretien d&apos;une maison traditionnelle
          (ravalement, étanchéité terrasse).
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
