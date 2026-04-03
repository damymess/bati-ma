export default function GuideSalleBain() {
  const faq = [
    {
      q: "Quel budget pour rénover une salle de bain au Maroc ?",
      a: "Pour une salle de bain de 4 à 8 m², comptez 15 000 à 30 000 MAD en entrée de gamme (faïence locale, sanitaires basiques, robinetterie standard), 30 000 à 55 000 MAD en milieu de gamme (carrelage importé, meuble vasque, douche italienne), et 55 000 à 80 000 MAD ou plus en haut de gamme (tadelakt, robinetterie design, douche à l&apos;italienne avec paroi en verre, baignoire îlot).",
    },
    {
      q: "La douche italienne est-elle adaptée aux maisons marocaines ?",
      a: "Oui, la douche à l&apos;italienne est parfaitement adaptée au Maroc. Elle nécessite cependant une étanchéité rigoureuse (membrane SPEC ou similaire) et un siphon de sol de qualité. L&apos;épaisseur du plancher doit permettre d&apos;intégrer la pente d&apos;évacuation (1 à 2 %). Faites appel à un artisan spécialisé pour garantir une réalisation sans fuites.",
    },
    {
      q: "Le tadelakt est-il recommandé pour une salle de bain ?",
      a: "Le tadelakt est idéal pour les salles de bain grâce à son imperméabilité naturelle une fois ciré. C&apos;est un enduit à base de chaux de Marrakech, travaillé avec un galet d&apos;onyx et protégé au savon noir. Il offre un rendu lisse et brillant, résiste à l&apos;eau et ne développe pas de moisissures. Son coût (400 à 800 MAD/m²) est supérieur au carrelage mais il apporte un cachet unique et authentiquement marocain.",
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
        <h2>Concevoir une salle de bain au Maroc : les fondamentaux</h2>
        <p>
          La salle de bain est l&apos;une des pièces les plus techniques d&apos;une maison au Maroc. Entre l&apos;étanchéité, la plomberie, la ventilation et les finitions, chaque détail compte pour obtenir un espace fonctionnel et durable. Que vous construisiez une villa neuve à Casablanca ou rénoviez un appartement à Rabat, ce guide couvre toutes les étapes et les coûts à prévoir.
        </p>
        <p>
          Au Maroc, la salle de bain combine souvent influences modernes européennes et traditions locales. Le tadelakt, la zellige et le bois de thuya côtoient les douches à l&apos;italienne, les meubles vasques suspendus et les robinetteries design. Cette fusion crée des espaces uniques qui reflètent l&apos;identité architecturale marocaine.
        </p>

        <h2>Types d&apos;aménagements et configurations</h2>
        <p>
          <strong>Douche à l&apos;italienne :</strong> C&apos;est la tendance dominante au Maroc depuis 2020. Plain-pied, sans receveur apparent, elle offre un espace épuré et accessible. L&apos;installation requiert une étanchéité irréprochable sous le carrelage (système d&apos;étanchéité liquide ou membrane). Comptez 8 000 à 20 000 MAD pour la réalisation complète (étanchéité, carrelage, paroi en verre, siphon).
        </p>
        <p>
          <strong>Baignoire :</strong> La baignoire reste appréciée dans les grandes salles de bain. Les modèles encastrés sont les plus courants (3 000 à 8 000 MAD), tandis que les baignoires îlot design commencent à 12 000 MAD. Pour un hammam intégré, la baignoire est souvent remplacée par un espace tadelakt avec douchette.
        </p>
        <p>
          <strong>Double vasque :</strong> Idéale pour les suites parentales, la double vasque nécessite un meuble d&apos;au moins 120 cm de largeur. Les vasques à poser sur plan sont très tendance, avec des prix allant de 800 à 4 000 MAD la vasque selon le matériau (céramique, pierre naturelle, solid surface).
        </p>

        <h2>Matériaux et revêtements</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-300 px-3 py-2 text-left">Revêtement</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Prix au m²</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Caractéristiques</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-300 px-3 py-2 font-medium">Faïence locale</td>
              <td className="border border-stone-300 px-3 py-2">80 - 200 MAD</td>
              <td className="border border-stone-300 px-3 py-2">Économique, choix limité de motifs</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2 font-medium">Carrelage importé (Espagne, Italie)</td>
              <td className="border border-stone-300 px-3 py-2">250 - 600 MAD</td>
              <td className="border border-stone-300 px-3 py-2">Large choix, haute qualité</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2 font-medium">Tadelakt</td>
              <td className="border border-stone-300 px-3 py-2">400 - 800 MAD</td>
              <td className="border border-stone-300 px-3 py-2">Imperméable, lisse, artisanal</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2 font-medium">Zellige</td>
              <td className="border border-stone-300 px-3 py-2">800 - 2 500 MAD</td>
              <td className="border border-stone-300 px-3 py-2">Artisanal, unique, pose complexe</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2 font-medium">Marbre naturel</td>
              <td className="border border-stone-300 px-3 py-2">500 - 1 500 MAD</td>
              <td className="border border-stone-300 px-3 py-2">Luxueux, nécessite un traitement hydrofuge</td>
            </tr>
          </tbody>
        </table>

        <h2>Plomberie et robinetterie</h2>
        <p>
          La robinetterie représente un poste important du budget. Au Maroc, les marques les plus fiables sont Grohe, Hansgrohe et Roca pour le haut de gamme, et Rousseau ou des marques turques pour l&apos;entrée de gamme. Un mitigeur de qualité pour lavabo coûte entre 500 et 3 000 MAD, et une colonne de douche thermostatique entre 2 000 et 8 000 MAD.
        </p>
        <p>
          Pour la plomberie, privilégiez le cuivre ou le multicouche (PEX-AL-PEX) pour les alimentations, et le PVC pour les évacuations. Le chauffe-eau solaire est très rentable au Maroc grâce à l&apos;ensoleillement exceptionnel : un système de 200 litres coûte entre 8 000 et 15 000 MAD et couvre 70 à 90 % des besoins en eau chaude.
        </p>

        <h2>Ventilation et étanchéité</h2>
        <p>
          La ventilation est souvent négligée dans les salles de bain marocaines, ce qui entraîne moisissures et dégradations prématurées. Installez un extracteur d&apos;air (VMC ponctuelle) de 100 à 150 m³/h, avec un déclenchement automatique lié à l&apos;éclairage. Pour l&apos;étanchéité, appliquez un système complet sous le carrelage dans toute la zone de douche et autour de la baignoire : membrane liquide (type Sika ou Weber) en deux couches croisées, avec bandes d&apos;étanchéité aux angles et aux jonctions sol/mur.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            L&apos;étanchéité est le point le plus critique d&apos;une salle de bain. Une fuite non détectée peut causer des dommages considérables à la structure du bâtiment. Faites appel à un artisan expérimenté et exigez un test d&apos;étanchéité (mise en eau pendant 48h) avant la pose du carrelage. Un architecte d&apos;intérieur référencé sur Bati.ma peut superviser votre chantier et garantir la qualité d&apos;exécution.
          </p>
        </div>

        <h2>Artisans spécialisés et délais</h2>
        <p>
          La réalisation d&apos;une salle de bain complète nécessite la coordination de plusieurs corps de métier : plombier, carreleur, électricien, peintre et éventuellement un maître artisan tadelakt. Le délai moyen est de 2 à 4 semaines pour une rénovation complète. Pour le tadelakt, comptez une semaine supplémentaire de séchage et de cirage. Un architecte d&apos;intérieur joue un rôle de coordinateur essentiel pour respecter le planning et le budget.
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
