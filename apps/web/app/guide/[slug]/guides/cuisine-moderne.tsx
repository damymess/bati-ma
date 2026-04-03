export default function GuideCuisineModerne() {
  const faq = [
    {
      q: "Quel budget prévoir pour une cuisine moderne au Maroc ?",
      a: "Le budget dépend de la taille et des matériaux choisis. Pour une cuisine de 8 à 12 m², comptez entre 20 000 et 40 000 MAD pour une entrée de gamme (MDF mélaminé, plan de travail en granit local), 40 000 à 80 000 MAD pour du milieu de gamme (MDF laqué, quartz, électroménager de marque), et 80 000 à 120 000 MAD ou plus pour du haut de gamme (bois massif, Corian ou Silestone, électroménager encastrable premium).",
    },
    {
      q: "Faut-il faire appel à un cuisiniste ou à un menuisier ?",
      a: "Un cuisiniste professionnel conçoit la cuisine en 3D, optimise l&apos;agencement selon le triangle d&apos;activité (évier-plaque-réfrigérateur), et coordonne la pose. Un menuisier traditionnel peut réaliser les meubles à moindre coût mais n&apos;offre généralement pas de service de conception ni de garantie sur l&apos;ensemble. Pour une cuisine moderne avec électroménager intégré, le cuisiniste est recommandé.",
    },
    {
      q: "Quels matériaux résistent le mieux au climat marocain ?",
      a: "Le quartz et le granit sont les meilleurs choix pour les plans de travail : ils résistent à la chaleur, aux taches et à l&apos;humidité. Pour les façades, le MDF laqué est populaire mais sensible aux rayures ; le MDF mélaminé haute pression (HPL) offre un bon rapport qualité-prix. Évitez le bois massif non traité dans les cuisines exposées à l&apos;humidité, sauf en teck ou en iroko traité.",
    },
    {
      q: "Comment optimiser l&apos;agencement d&apos;une petite cuisine au Maroc ?",
      a: "Pour les cuisines de 6 à 10 m², privilégiez la configuration en L qui libère l&apos;espace central. Respectez le triangle d&apos;activité (évier-plaque-réfrigérateur) avec une somme des côtés inférieure à 7 mètres. Les meubles hauts jusqu&apos;au plafond maximisent le rangement.",
    },
    {
      q: "Est-ce que l&apos;électroménager encastrable vaut le surcoût au Maroc ?",
      a: "Oui, l&apos;encastrable valorise la cuisine de 10 à 15 % et offre une esthétique épurée. Le surcoût de 30 à 50 % par rapport au pose-libre est compensé par l&apos;intégration harmonieuse et la durabilité. Privilégiez four, hotte et lave-vaisselle encastrables en priorité.",
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
        <h2>Quelles sont les tendances cuisine 2026 au Maroc ?</h2>
        <p>
          La cuisine moderne marocaine évolue vers des espaces ouverts, fonctionnels et esthétiques. En 2026, les tendances phares sont les cuisines ouvertes sur le salon avec îlot central, les teintes neutres (beige, gris taupe, vert sauge) associées à des touches de bois naturel, et l&apos;intégration de la domotique (éclairage LED sous meubles, prises USB intégrées). Les cuisines en U et en L restent les configurations les plus demandées dans les appartements marocains.
        </p>
        <p>
          L&apos;influence du design européen est forte, mais les cuisines marocaines conservent leurs spécificités : un espace généreux pour la préparation des plats traditionnels (couscous, tagines), une ventilation renforcée pour les cuissons longues, et souvent une arrière-cuisine (bit lma) pour le stockage et le lavage.
        </p>

        <h2>Quels matériaux choisir pour les plans de travail et façades ?</h2>
        <p>
          Le choix des matériaux détermine le budget, la durabilité et l&apos;esthétique de votre cuisine. Voici un comparatif des options disponibles au Maroc :
        </p>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-300 px-3 py-2 text-left">Matériau</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Prix indicatif</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Avantages</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Inconvénients</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-300 px-3 py-2 font-medium">Granit local</td>
              <td className="border border-stone-300 px-3 py-2">600 - 1 200 MAD/ml</td>
              <td className="border border-stone-300 px-3 py-2">Résistant, naturel, prix accessible</td>
              <td className="border border-stone-300 px-3 py-2">Poreux si non traité, lourd</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2 font-medium">Quartz (Silestone, Caesarstone)</td>
              <td className="border border-stone-300 px-3 py-2">1 500 - 3 500 MAD/ml</td>
              <td className="border border-stone-300 px-3 py-2">Non poreux, large choix de couleurs</td>
              <td className="border border-stone-300 px-3 py-2">Prix élevé, importé</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2 font-medium">MDF laqué</td>
              <td className="border border-stone-300 px-3 py-2">800 - 1 500 MAD/ml (façade)</td>
              <td className="border border-stone-300 px-3 py-2">Finition brillante, coloris variés</td>
              <td className="border border-stone-300 px-3 py-2">Sensible aux rayures et chocs</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2 font-medium">MDF mélaminé HPL</td>
              <td className="border border-stone-300 px-3 py-2">400 - 900 MAD/ml (façade)</td>
              <td className="border border-stone-300 px-3 py-2">Économique, facile d&apos;entretien</td>
              <td className="border border-stone-300 px-3 py-2">Esthétique moins raffinée</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2 font-medium">Bois massif (hêtre, chêne)</td>
              <td className="border border-stone-300 px-3 py-2">1 800 - 4 000 MAD/ml</td>
              <td className="border border-stone-300 px-3 py-2">Noble, chaleureux, durable</td>
              <td className="border border-stone-300 px-3 py-2">Entretien régulier, sensible à l&apos;humidité</td>
            </tr>
          </tbody>
        </table>

        <h2>Quel budget prévoir selon la gamme ?</h2>
        <p>
          <strong>Entrée de gamme (20 000 - 40 000 MAD) :</strong> Meubles en MDF mélaminé, plan de travail en granit local, évier inox simple, robinetterie basique. Convient pour un premier équipement ou une location.
        </p>
        <p>
          <strong>Milieu de gamme (40 000 - 80 000 MAD) :</strong> Façades en MDF laqué ou HPL premium, plan de travail en quartz ou granit importé, évier à un bac et demi en inox brossé, robinetterie mitigeur, hotte aspirante de marque. C&apos;est le choix le plus courant pour les villas et les appartements de standing.
        </p>
        <p>
          <strong>Haut de gamme (80 000 - 120 000 MAD et plus) :</strong> Façades en bois massif ou laqué mat avec poignées intégrées, plan de travail en Corian ou Dekton, électroménager encastrable (Bosch, Siemens, Smeg), îlot central avec plaque induction, éclairage LED intégré et système de rangement optimisé (tiroirs à l&apos;anglaise, organiseurs).
        </p>

        <h2>Comment concevoir un agencement optimal ?</h2>
        <p>
          La règle du triangle d&apos;activité reste fondamentale : les trois pôles principaux (évier, plaque de cuisson, réfrigérateur) doivent former un triangle dont la somme des côtés n&apos;excède pas 7 mètres. Dans les appartements marocains, la configuration en L est la plus adaptée aux petites surfaces (6 à 10 m²), tandis que la cuisine en U convient aux espaces de 10 m² et plus.
        </p>
        <p>
          Les cuisinistes professionnels au Maroc utilisent des logiciels de conception 3D qui permettent de visualiser le résultat avant fabrication. Parmi les enseignes réputées, on trouve des cuisinistes locaux à Casablanca, Rabat et Marrakech, ainsi que des franchises internationales (Schmidt, Mobalpa, Ixina). Les délais de fabrication varient de 3 à 8 semaines selon le niveau de personnalisation.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Pour une cuisine réussie, impliquez un architecte d&apos;intérieur dès la phase de conception. Il coordonnera le cuisiniste, le plombier et l&apos;électricien pour éviter les mauvaises surprises. Prévoyez les arrivées d&apos;eau, les évacuations et les points électriques avant la pose des meubles. Sur Bati.ma, trouvez un architecte d&apos;intérieur spécialisé en aménagement de cuisines dans votre ville.
          </p>
        </div>

        <h2>L&apos;électroménager : bien choisir au Maroc</h2>
        <p>
          Le marché marocain de l&apos;électroménager offre un large choix, des marques économiques aux premium. Pour une cuisine moderne, privilégiez l&apos;encastrable qui s&apos;intègre harmonieusement dans les meubles. Les plaques à induction gagnent du terrain face au gaz, mais vérifiez que votre installation électrique supporte la puissance nécessaire (minimum 32A dédié). Le four encastrable, le lave-vaisselle et la hotte aspirante sont les trois équipements qui valorisent le plus une cuisine au Maroc.
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
