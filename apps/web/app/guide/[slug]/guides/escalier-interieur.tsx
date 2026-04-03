export default function GuideEscalierInterieur() {
  const faq = [
    {
      q: "Quel est le coût moyen d&apos;un escalier intérieur au Maroc ?",
      a: "Le coût varie selon le matériau et la complexité. Un escalier en béton brut coûte 15 000 à 25 000 MAD, habillé de marbre ou bois il atteint 30 000 à 50 000 MAD. Un escalier métallique avec marches en bois revient à 25 000 à 45 000 MAD. Un escalier hélicoïdal en fer forgé artisanal peut coûter 40 000 à 80 000 MAD selon le niveau de détail et la hauteur d&apos;étage.",
    },
    {
      q: "Quelles sont les dimensions réglementaires d&apos;un escalier au Maroc ?",
      a: "La réglementation marocaine impose une largeur minimale de 80 cm pour un escalier d&apos;habitation individuelle (100 cm recommandé pour le confort). La hauteur de marche ne doit pas dépasser 18 cm (17 cm recommandé) et le giron (profondeur de marche) doit être d&apos;au moins 25 cm. La formule de Blondel (2H + G = 60 à 64 cm) reste la référence pour garantir un escalier confortable et sécuritaire.",
    },
    {
      q: "Quel matériau choisir pour un escalier dans une villa marocaine ?",
      a: "Le béton armé est le choix le plus courant et le plus économique au Maroc. Il peut être habillé de marbre marocain, de bois ou de carrelage. Le métal (acier ou fer forgé) offre des possibilités esthétiques modernes ou traditionnelles. Le bois massif (chêne, hêtre importé ou bois rouge local) est apprécié pour sa chaleur mais coûte plus cher. Pour un style marocain traditionnel, le fer forgé avec des motifs arabesques est un classique indémodable.",
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
        <h2>L&apos;escalier intérieur : un élément architectural central</h2>
        <p>
          Dans les villas et les maisons marocaines, l&apos;escalier intérieur est bien plus qu&apos;un simple moyen de circulation verticale. C&apos;est un élément architectural qui structure l&apos;espace, définit l&apos;esthétique de l&apos;entrée et reflète le style de la maison. Qu&apos;il soit en béton habillé de marbre de Meknès, en fer forgé artisanal ou en bois massif contemporain, l&apos;escalier mérite une conception soignée dès les premières esquisses du projet.
        </p>
        <p>
          Le choix du type d&apos;escalier dépend de la configuration de la maison, de la surface disponible, du budget et du style recherché. Au Maroc, les escaliers droits et les escaliers à quart tournant sont les plus courants dans les constructions résidentielles, tandis que les escaliers hélicoïdaux sont réservés aux espaces restreints ou aux effets architecturaux.
        </p>

        <h2>Types d&apos;escaliers et configurations</h2>
        <p>
          <strong>Escalier droit :</strong> Le plus simple et le plus économique. Il nécessite une trémie de 3 à 4 m de longueur pour une hauteur d&apos;étage standard (2,80 à 3,00 m). Idéal pour les couloirs et les entrées spacieuses.
        </p>
        <p>
          <strong>Escalier à quart tournant :</strong> Il permet de changer de direction à 90° avec un palier intermédiaire ou des marches balancées. C&apos;est le choix le plus fréquent dans les villas marocaines car il optimise l&apos;espace tout en restant confortable.
        </p>
        <p>
          <strong>Escalier à deux quarts tournants :</strong> En forme de U, il change deux fois de direction. Compact, il s&apos;inscrit dans une trémie carrée d&apos;environ 2,50 x 2,50 m. Très utilisé dans les immeubles d&apos;habitation et les villas étroites.
        </p>
        <p>
          <strong>Escalier hélicoïdal (colimaçon) :</strong> Il s&apos;enroule autour d&apos;un noyau central. Très compact (diamètre de 1,40 à 2,00 m), il est esthétique mais moins confortable pour le passage de meubles. En fer forgé artisanal, il constitue une pièce maîtresse du décor.
        </p>

        <h2>Matériaux et coûts comparés</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-300 px-3 py-2 text-left">Matériau</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Prix total estimé</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Style</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Durabilité</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-300 px-3 py-2 font-medium">Béton + marbre marocain</td>
              <td className="border border-stone-300 px-3 py-2">25 000 - 45 000 MAD</td>
              <td className="border border-stone-300 px-3 py-2">Classique, élégant</td>
              <td className="border border-stone-300 px-3 py-2">Excellente (50+ ans)</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2 font-medium">Béton + bois</td>
              <td className="border border-stone-300 px-3 py-2">30 000 - 50 000 MAD</td>
              <td className="border border-stone-300 px-3 py-2">Chaleureux, moderne</td>
              <td className="border border-stone-300 px-3 py-2">Très bonne (30+ ans)</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2 font-medium">Métal + bois</td>
              <td className="border border-stone-300 px-3 py-2">25 000 - 45 000 MAD</td>
              <td className="border border-stone-300 px-3 py-2">Contemporain, industriel</td>
              <td className="border border-stone-300 px-3 py-2">Bonne (anti-rouille requis)</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2 font-medium">Fer forgé artisanal</td>
              <td className="border border-stone-300 px-3 py-2">40 000 - 80 000 MAD</td>
              <td className="border border-stone-300 px-3 py-2">Traditionnel marocain, luxe</td>
              <td className="border border-stone-300 px-3 py-2">Excellente (entretien régulier)</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2 font-medium">Béton brut (sans habillage)</td>
              <td className="border border-stone-300 px-3 py-2">15 000 - 25 000 MAD</td>
              <td className="border border-stone-300 px-3 py-2">Économique, provisoire</td>
              <td className="border border-stone-300 px-3 py-2">Excellente</td>
            </tr>
          </tbody>
        </table>

        <h2>Dimensions réglementaires et confort</h2>
        <p>
          La conception d&apos;un escalier confortable repose sur la formule de Blondel : 2H + G = 60 à 64 cm, où H est la hauteur de la marche et G le giron (profondeur). Pour une hauteur d&apos;étage de 3,00 m (courante au Maroc), un escalier de 17 marches de 17,6 cm avec un giron de 27 cm offre un confort optimal. La largeur minimale réglementaire est de 80 cm, mais 100 cm est recommandé pour les habitations et 120 cm pour les parties communes d&apos;immeubles.
        </p>
        <p>
          La hauteur libre sous plafond (échappée) doit être d&apos;au moins 2,10 m à tout point de l&apos;escalier. Le garde-corps est obligatoire dès que la hauteur de chute dépasse 1 m, avec une hauteur minimale de 90 cm (100 cm recommandé) et des barreaux espacés de 11 cm maximum pour la sécurité des enfants.
        </p>

        <h2>Le fer forgé : tradition artisanale marocaine</h2>
        <p>
          Le fer forgé est un art profondément ancré dans la tradition artisanale marocaine. Les ferroniers (haddadine) de Marrakech, Fès et Casablanca créent des rampes et des garde-corps aux motifs géométriques et floraux d&apos;une grande finesse. Les techniques traditionnelles de forge à chaud permettent de réaliser des volutes, des spirales et des arabesques impossibles à reproduire industriellement.
        </p>
        <p>
          Pour protéger le fer forgé de la corrosion, appliquez une sous-couche antirouille suivie de deux couches de peinture fer forgé (epoxy ou glycéro). Un entretien annuel avec un vernis protecteur prolonge considérablement la durée de vie. Les finitions disponibles vont du noir mat classique au patiné doré, en passant par le bronze vieilli.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            L&apos;escalier doit être conçu dès les plans de la maison, pas en dernière minute. Sa position influence la distribution de toutes les pièces. Faites appel à un architecte pour optimiser l&apos;emplacement de la trémie et respecter les normes de sécurité. Pour un escalier en fer forgé, demandez des devis à au moins trois artisans et visitez leurs ateliers. Trouvez un architecte sur Bati.ma pour concevoir un escalier qui allie esthétique et sécurité.
          </p>
        </div>
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
