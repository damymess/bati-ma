export default function GuideElectriciteMaison() {
  const faq = [
    {
      q: "Combien coûte l\u0027installation électrique d\u0027une maison au Maroc ?",
      a: "L\u0027installation électrique complète d\u0027une maison au Maroc coûte entre 30 000 et 100 000 MAD selon la surface et le standing. Pour une villa de 200 m², le budget moyen se situe autour de 50 000 à 70 000 MAD, incluant le tableau électrique, le câblage, les prises, les interrupteurs et l\u0027éclairage de base.",
    },
    {
      q: "Quelle norme électrique s\u0027applique au Maroc ?",
      a: "Le Maroc applique la norme NFC 15-100, d\u0027inspiration française. Elle définit les règles de sécurité pour les installations basse tension : nombre minimum de prises par pièce, protection différentielle obligatoire, mise à la terre, et zones de sécurité dans les salles d\u0027eau. Le certificat de conformité est exigé par l\u0027ONEE pour le raccordement.",
    },
    {
      q: "Comment se raccorder au réseau ONEE ?",
      a: "Pour obtenir un branchement ONEE, il faut déposer une demande auprès de l\u0027agence locale avec le permis de construire, le plan de masse et l\u0027attestation d\u0027achèvement du gros œuvre. Le coût de raccordement varie de 3 000 à 15 000 MAD selon la puissance demandée et la distance au réseau. Le délai moyen est de 2 à 6 semaines.",
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
        <h2>L&apos;installation électrique au Maroc : guide complet</h2>
        <p>
          L&apos;électricité est le système nerveux de toute maison. Au Maroc, une installation électrique bien conçue et conforme aux normes est indispensable pour la sécurité des occupants et le bon fonctionnement des équipements. Avec la multiplication des appareils électriques et électroménagers, la demande en puissance des foyers marocains a considérablement augmenté ces dernières années.
        </p>
        <p>
          Ce guide détaille les aspects essentiels de l&apos;installation électrique résidentielle au Maroc : normes, composants, coûts et démarches de raccordement.
        </p>

        <h2>La norme NFC 15-100 au Maroc</h2>
        <p>
          Le Maroc a adopté la norme NFC 15-100 comme référence pour les installations électriques basse tension. Cette norme impose des exigences minimales de sécurité que tout électricien doit respecter. Les points clés incluent : un tableau électrique avec disjoncteur général et différentiels 30 mA, un minimum de 5 prises par séjour et 3 par chambre, des circuits séparés pour l&apos;éclairage, les prises et les gros appareils (climatiseur, chauffe-eau), et le respect des volumes de sécurité dans les salles de bain.
        </p>

        <h2>Composants d&apos;une installation électrique</h2>
        <p>
          Une installation résidentielle complète comprend plusieurs éléments essentiels dont le coût varie selon la qualité et la marque choisie :
        </p>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-300 px-3 py-2 text-left">Composant</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Prix unitaire (MAD)</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Marques courantes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Tableau électrique complet</td>
              <td className="border border-stone-300 px-3 py-2">2 000 - 8 000</td>
              <td className="border border-stone-300 px-3 py-2">Schneider, Legrand, Hager</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Disjoncteur différentiel 30 mA</td>
              <td className="border border-stone-300 px-3 py-2">300 - 800</td>
              <td className="border border-stone-300 px-3 py-2">Schneider, ABB</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Câble 2,5 mm² (100 ml)</td>
              <td className="border border-stone-300 px-3 py-2">250 - 500</td>
              <td className="border border-stone-300 px-3 py-2">Nexans Maroc, Câbleries du Maroc</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Prise / interrupteur (unité)</td>
              <td className="border border-stone-300 px-3 py-2">20 - 150</td>
              <td className="border border-stone-300 px-3 py-2">Legrand, Schneider, Simon</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Gaine ICTA (100 ml)</td>
              <td className="border border-stone-300 px-3 py-2">150 - 300</td>
              <td className="border border-stone-300 px-3 py-2">Tuboplast, Polyflex</td>
            </tr>
          </tbody>
        </table>

        <h2>Types de compteurs et tarification ONEE</h2>
        <p>
          L&apos;ONEE (Office National de l&apos;Électricité et de l&apos;Eau potable) propose plusieurs formules d&apos;abonnement. Le compteur monophasé (3,5 à 10 kVA) convient aux logements standards. Le compteur triphasé (10 à 40 kVA) est recommandé pour les villas avec climatisation centralisée ou piscine. Depuis 2020, l&apos;ONEE déploie progressivement des compteurs intelligents (smart meters) permettant un suivi en temps réel de la consommation. La tarification est progressive : les premières tranches (0-100 kWh) bénéficient d&apos;un tarif social, tandis que les tranches supérieures sont facturées à des tarifs plus élevés.
        </p>

        <h2>Sécurité électrique : les règles essentielles</h2>
        <p>
          La sécurité électrique est primordiale au Maroc où les accidents domestiques liés à l&apos;électricité restent fréquents. Les règles fondamentales incluent : toujours installer un différentiel 30 mA (protection contre l&apos;électrocution), réaliser une mise à la terre efficace (résistance inférieure à 10 ohms), utiliser des câbles de section adaptée à l&apos;intensité (2,5 mm² pour les prises, 1,5 mm² pour l&apos;éclairage, 6 mm² pour les gros appareils), et ne jamais surcharger un circuit.
        </p>
        <p>
          Dans les salles de bain, respectez impérativement les volumes de sécurité : aucun appareil électrique dans le volume 0 (baignoire/douche), et seuls les appareils classe II dans le volume 1. Ces règles sauvent des vies.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Exigez toujours un certificat de conformité (Consuel marocain) à la fin des travaux. Ce document est indispensable pour le raccordement ONEE et prouve que votre installation respecte les normes de sécurité. Sur Bati.ma, trouvez des électriciens certifiés qui délivrent ce certificat.
          </p>
        </div>

        <h2>Coûts de main-d&apos;œuvre et planning</h2>
        <p>
          Un électricien qualifié au Maroc facture entre 300 et 600 MAD par jour. Pour une maison de 200 m², prévoyez 2 à 3 semaines de travail pour l&apos;installation complète. Le chantier électrique se déroule en deux phases : le premier passage (gaines et câbles) pendant le gros œuvre, et le second passage (branchements, prises, interrupteurs) après les enduits. Prévoyez 15 à 20 % de câble supplémentaire pour les modifications éventuelles et les ajouts futurs.
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
