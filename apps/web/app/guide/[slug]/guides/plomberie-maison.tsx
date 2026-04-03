export default function GuidePlomberieMaison() {
  const faq = [
    {
      q: "Combien coûte la plomberie d\u0027une maison neuve au Maroc ?",
      a: "Le budget plomberie pour une maison neuve au Maroc se situe entre 25 000 et 80 000 MAD selon la surface et le standing. Pour une villa de 200 m², comptez environ 40 000 à 60 000 MAD tout compris (tuyauterie, sanitaires, robinetterie, chauffe-eau). Ce poste représente 5 à 8 % du coût total de construction.",
    },
    {
      q: "Quel type de tuyau choisir pour la plomberie au Maroc ?",
      a: "Le PPR (polypropylène) est le standard actuel au Maroc pour l\u0027eau chaude et froide : résistant, économique et facile à souder. Le PVC est utilisé pour l\u0027évacuation des eaux usées. Le cuivre, plus coûteux, est réservé aux installations haut de gamme. Le multicouche (PER) gagne aussi du terrain pour sa flexibilité.",
    },
    {
      q: "Combien gagne un plombier par jour au Maroc ?",
      a: "Un plombier qualifié facture entre 300 et 500 MAD par jour au Maroc, hors matériaux. Dans les grandes villes comme Casablanca ou Rabat, les tarifs peuvent atteindre 600 à 800 MAD/jour pour les artisans les plus expérimentés. Pour un dépannage d\u0027urgence, comptez 200 à 400 MAD pour une intervention simple.",
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
        <h2>L&apos;installation de plomberie au Maroc : les fondamentaux</h2>
        <p>
          La plomberie est un poste stratégique dans toute construction au Maroc. Une installation bien conçue garantit le confort quotidien, prévient les fuites et les infiltrations, et assure une distribution d&apos;eau efficace dans toutes les pièces. Au Maroc, les normes et pratiques ont considérablement évolué ces dernières années avec l&apos;adoption de matériaux modernes comme le PPR et le multicouche.
        </p>
        <p>
          Que vous construisiez une villa, un appartement ou un riad, la planification de la plomberie doit se faire dès la phase de conception avec votre architecte. Les modifications ultérieures sont toujours coûteuses, car elles impliquent de casser des murs et des sols.
        </p>

        <h2>Types de tuyaux utilisés au Maroc</h2>
        <p>
          Le choix du matériau de tuyauterie influence directement la durabilité, le coût et la qualité de votre installation. Voici les options disponibles sur le marché marocain :
        </p>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-300 px-3 py-2 text-left">Matériau</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Usage</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Prix indicatif</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Durée de vie</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-300 px-3 py-2">PPR (polypropylène)</td>
              <td className="border border-stone-300 px-3 py-2">Eau chaude / froide</td>
              <td className="border border-stone-300 px-3 py-2">15 - 40 MAD/ml</td>
              <td className="border border-stone-300 px-3 py-2">50 ans</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">PVC</td>
              <td className="border border-stone-300 px-3 py-2">Évacuation</td>
              <td className="border border-stone-300 px-3 py-2">10 - 30 MAD/ml</td>
              <td className="border border-stone-300 px-3 py-2">40 ans</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Cuivre</td>
              <td className="border border-stone-300 px-3 py-2">Eau chaude / froide</td>
              <td className="border border-stone-300 px-3 py-2">60 - 120 MAD/ml</td>
              <td className="border border-stone-300 px-3 py-2">70 ans</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Multicouche (PER)</td>
              <td className="border border-stone-300 px-3 py-2">Eau chaude / froide</td>
              <td className="border border-stone-300 px-3 py-2">25 - 60 MAD/ml</td>
              <td className="border border-stone-300 px-3 py-2">50 ans</td>
            </tr>
          </tbody>
        </table>

        <h2>Normes et réglementation de la plomberie au Maroc</h2>
        <p>
          L&apos;installation de plomberie au Maroc doit respecter les normes marocaines NM en vigueur. Les points essentiels incluent : la séparation des réseaux d&apos;eau potable et d&apos;évacuation, la mise en place de siphons sur chaque appareil sanitaire, le respect des pentes d&apos;évacuation (1 à 3 cm par mètre linéaire), et l&apos;installation de vannes d&apos;arrêt individuelles par pièce. Le raccordement au réseau de la LYDEC, de la RADEEMA ou de l&apos;ONEE selon votre ville est obligatoire pour l&apos;alimentation en eau potable.
        </p>

        <h2>Budget plomberie par type de projet</h2>
        <p>
          Le coût de la plomberie varie considérablement selon l&apos;ampleur du projet et le niveau de finition souhaité. Voici une estimation pour les projets courants au Maroc :
        </p>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-300 px-3 py-2 text-left">Type de projet</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Budget estimé (MAD)</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Comprend</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Appartement 80 m²</td>
              <td className="border border-stone-300 px-3 py-2">15 000 - 35 000</td>
              <td className="border border-stone-300 px-3 py-2">Tuyauterie + sanitaires standard</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Villa 200 m²</td>
              <td className="border border-stone-300 px-3 py-2">40 000 - 80 000</td>
              <td className="border border-stone-300 px-3 py-2">Complet + chauffe-eau solaire</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Rénovation salle de bain</td>
              <td className="border border-stone-300 px-3 py-2">8 000 - 25 000</td>
              <td className="border border-stone-300 px-3 py-2">Remplacement complet</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Riad traditionnel</td>
              <td className="border border-stone-300 px-3 py-2">50 000 - 120 000</td>
              <td className="border border-stone-300 px-3 py-2">Réseau neuf + hammam</td>
            </tr>
          </tbody>
        </table>

        <h2>Chauffe-eau : les options au Maroc</h2>
        <p>
          Le chauffe-eau est un élément essentiel de l&apos;installation sanitaire. Au Maroc, trois technologies dominent le marché : le chauffe-eau électrique (1 500 à 4 000 MAD), le chauffe-eau à gaz (2 000 à 5 000 MAD) et le chauffe-eau solaire (8 000 à 15 000 MAD). Le solaire est particulièrement rentable au Maroc grâce aux 3 000 heures d&apos;ensoleillement annuelles, avec un retour sur investissement de 3 à 5 ans. Pour une villa, un système solaire de 300 litres couvre les besoins d&apos;une famille de 4 à 6 personnes.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Ne faites jamais l&apos;impasse sur l&apos;épreuve de pression avant la fermeture des murs. Un test à 10 bars pendant 30 minutes permet de détecter la moindre fuite. Trouvez un plombier qualifié près de chez vous sur Bati.ma et consultez les avis d&apos;anciens clients avant de signer.
          </p>
        </div>

        <h2>Erreurs courantes à éviter</h2>
        <p>
          Les erreurs de plomberie les plus fréquentes au Maroc incluent : l&apos;absence de pente suffisante sur les évacuations (provoquant des bouchons récurrents), le sous-dimensionnement des tuyaux d&apos;alimentation (causant une pression insuffisante aux étages), l&apos;utilisation de matériaux non certifiés, et l&apos;absence de vanne d&apos;arrêt générale accessible. Investissez dans une installation de qualité dès le départ : le coût de réparation d&apos;un dégât des eaux est toujours bien supérieur à celui d&apos;une bonne installation initiale.
        </p>
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-stone-900 mb-5">Questions fréquentes</h2>
        <div className="space-y-4">
          {faq.map((f) => (
            <details
              key={f.q}
              className="group border border-stone-200 rounded-lg overflow-hidden"
            >
              <summary className="flex items-center justify-between px-4 py-3 cursor-pointer text-sm font-medium text-stone-800 hover:bg-stone-50">
                {f.q}
                <span className="text-stone-400 group-open:rotate-180 transition-transform">
                  ↓
                </span>
              </summary>
              <div className="px-4 pb-4 pt-1 text-sm text-stone-600 leading-relaxed">
                {f.a}
              </div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
