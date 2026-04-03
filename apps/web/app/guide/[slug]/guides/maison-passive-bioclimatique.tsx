export default function GuideMaisonPassive() {
  const faq = [
    {
      q: "Qu&apos;est-ce qu&apos;une maison passive au Maroc ?",
      a: "Une maison passive (ou bioclimatique) est con\u00e7ue pour minimiser ses besoins en chauffage et climatisation gr\u00e2ce \u00e0 la conception architecturale : orientation solaire optimis\u00e9e, isolation renforc\u00e9e, ventilation naturelle, masse thermique, et protection contre le soleil d&apos;\u00e9t\u00e9. Au Maroc, l&apos;objectif principal est de r\u00e9duire les besoins en climatisation qui repr\u00e9sentent jusqu&apos;\u00e0 60 % de la facture \u00e9nerg\u00e9tique.",
    },
    {
      q: "Combien co\u00fbte le surco\u00fbt d&apos;une maison passive au Maroc ?",
      a: "Le surco\u00fbt est de 10 \u00e0 15 % par rapport \u00e0 une construction conventionnelle. Pour une villa de 200 m\u00b2 \u00e0 1 500 000 MAD, cela repr\u00e9sente 150 000 \u00e0 225 000 MAD de plus. Ce surco\u00fbt est amorti en 5 \u00e0 8 ans gr\u00e2ce aux \u00e9conomies d&apos;\u00e9nergie (40 \u00e0 60 % de r\u00e9duction sur la facture) et \u00e0 la plus-value immobili\u00e8re.",
    },
    {
      q: "La RTCM impose-t-elle la construction passive au Maroc ?",
      a: "La RTCM (R\u00e9glementation Thermique de Construction au Maroc) n&apos;impose pas le standard passif mais fixe des performances thermiques minimales selon 6 zones climatiques. La maison passive va bien au-del\u00e0 des exigences RTCM. Respecter la RTCM est obligatoire depuis 2015 pour le neuf, mais atteindre le niveau passif est un choix volontaire qui apporte un confort et des \u00e9conomies sup\u00e9rieurs.",
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
        <h2>Maison passive et bioclimatique au Maroc : construire intelligemment</h2>
        <p>
          Le Maroc dispose d&apos;un potentiel exceptionnel pour la construction bioclimatique : ensoleillement parmi les plus \u00e9lev\u00e9s au monde (3 000 heures/an), vents r\u00e9guliers pour la ventilation naturelle, et mat\u00e9riaux locaux \u00e0 forte inertie thermique (pis\u00e9, pierre, terre crue). Paradoxalement, la majorit\u00e9 des constructions neuves ignorent ces atouts et d\u00e9pendent massivement de la climatisation. La maison passive propose une approche radicalement diff\u00e9rente.
        </p>

        <h2>Les principes de la conception bioclimatique au Maroc</h2>
        <p>
          <strong>Orientation solaire :</strong> la fa\u00e7ade principale doit \u00eatre orient\u00e9e sud pour capter le soleil d&apos;hiver (chauffage passif) tout en \u00e9tant prot\u00e9g\u00e9e du soleil d&apos;\u00e9t\u00e9 par des casquettes solaires ou des brise-soleil. La fa\u00e7ade ouest, la plus expos\u00e9e \u00e0 la surchauffe, doit \u00eatre minimis\u00e9e et prot\u00e9g\u00e9e.
        </p>
        <p>
          <strong>Ventilation naturelle :</strong> le principe du tirage thermique (effet chemin\u00e9e) est utilis\u00e9 depuis des si\u00e8cles dans l&apos;architecture marocaine traditionnelle. Les patios centraux des riads fonctionnent exactement sur ce principe. Dans une maison moderne, des ouvertures basses au nord et hautes au sud cr\u00e9ent un flux d&apos;air naturel qui \u00e9vacue la chaleur.
        </p>
        <p>
          <strong>Masse thermique :</strong> les murs \u00e9pais en pierre, en pis\u00e9 ou en b\u00e9ton stockent la fra\u00eecheur nocturne et la restituent pendant la journ\u00e9e. C&apos;est le principe ancestral des ksour du sud marocain. En construction moderne, un mur en b\u00e9ton de 20 cm avec isolation ext\u00e9rieure offre le m\u00eame effet.
        </p>

        <h2>Performance thermique par zone climatique</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Zone RTCM</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Villes concern\u00e9es</th>
              <th className="border border-stone-200 px-3 py-2 text-left">D\u00e9fi principal</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Strat\u00e9gie bioclimatique</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">Z1 (littoral)</td>
              <td className="border border-stone-200 px-3 py-2">Casablanca, Rabat</td>
              <td className="border border-stone-200 px-3 py-2">Humidit\u00e9, chaleur mod\u00e9r\u00e9e</td>
              <td className="border border-stone-200 px-3 py-2">Ventilation crois\u00e9e, protection pluie</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">Z2 (plaines)</td>
              <td className="border border-stone-200 px-3 py-2">F\u00e8s, Mekn\u00e8s</td>
              <td className="border border-stone-200 px-3 py-2">\u00c9t\u00e9s chauds, hivers frais</td>
              <td className="border border-stone-200 px-3 py-2">Inertie forte, isolation toiture</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">Z3 (montagne)</td>
              <td className="border border-stone-200 px-3 py-2">Ifrane, Azrou</td>
              <td className="border border-stone-200 px-3 py-2">Hivers rigoureux</td>
              <td className="border border-stone-200 px-3 py-2">Super-isolation, apport solaire</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">Z4 (continental)</td>
              <td className="border border-stone-200 px-3 py-2">Marrakech, B\u00e9ni Mellal</td>
              <td className="border border-stone-200 px-3 py-2">Chaleur extr\u00eame \u00e9t\u00e9</td>
              <td className="border border-stone-200 px-3 py-2">Patio, ventilation nocturne, masse</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">Z5 (semi-aride)</td>
              <td className="border border-stone-200 px-3 py-2">Ouarzazate, Errachidia</td>
              <td className="border border-stone-200 px-3 py-2">Amplitude thermique extr\u00eame</td>
              <td className="border border-stone-200 px-3 py-2">Terre crue, tours \u00e0 vent</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">Z6 (d\u00e9sertique)</td>
              <td className="border border-stone-200 px-3 py-2">Zagora, Tan-Tan</td>
              <td className="border border-stone-200 px-3 py-2">Chaleur extr\u00eame + sable</td>
              <td className="border border-stone-200 px-3 py-2">Architecture enterr\u00e9e, patio profond</td>
            </tr>
          </tbody>
        </table>

        <h2>Mat\u00e9riaux et techniques bioclimatiques locaux</h2>
        <p>
          Le Maroc dispose de mat\u00e9riaux de construction naturels performants pour la conception bioclimatique. Le pis\u00e9 (terre crue compress\u00e9e) offre une inertie thermique exceptionnelle et un d\u00e9phasage de 10 \u00e0 12 heures. Le BTC (bloc de terre compress\u00e9e) est une version industrialis\u00e9e du pis\u00e9, plus facile \u00e0 mettre en \u0153uvre. Le li\u00e8ge de la for\u00eat de Maamora est un isolant naturel local performant. La pierre locale (calcaire, gr\u00e8s) offre masse thermique et esth\u00e9tique.
        </p>

        <h2>Co\u00fbts et retour sur investissement</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Poste</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Surco\u00fbt passif</th>
              <th className="border border-stone-200 px-3 py-2 text-left">\u00c9conomie annuelle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Isolation renforc\u00e9e (murs + toiture)</td>
              <td className="border border-stone-200 px-3 py-2">50 000 - 80 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">8 000 - 15 000 MAD</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Menuiseries double vitrage</td>
              <td className="border border-stone-200 px-3 py-2">30 000 - 50 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">5 000 - 10 000 MAD</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Brise-soleil et casquettes</td>
              <td className="border border-stone-200 px-3 py-2">15 000 - 30 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">3 000 - 6 000 MAD</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Ventilation naturelle assist\u00e9e</td>
              <td className="border border-stone-200 px-3 py-2">10 000 - 20 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">4 000 - 8 000 MAD</td>
            </tr>
            <tr className="font-semibold bg-stone-50">
              <td className="border border-stone-200 px-3 py-2">Total (villa 200 m\u00b2)</td>
              <td className="border border-stone-200 px-3 py-2">105 000 - 180 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">20 000 - 39 000 MAD</td>
            </tr>
          </tbody>
        </table>
        <p>
          Amortissement du surco\u00fbt : 5 \u00e0 8 ans. Au-del\u00e0, la maison passive g\u00e9n\u00e8re des \u00e9conomies nettes de 20 000 \u00e0 39 000 MAD par an, tout en offrant un confort thermique sup\u00e9rieur sans d\u00e9pendre de la climatisation.
        </p>

        <h2>Conformit\u00e9 RTCM et labels</h2>
        <p>
          La RTCM (R\u00e9glementation Thermique de Construction au Maroc) est obligatoire pour les constructions neuves depuis 2015. Elle divise le Maroc en 6 zones climatiques et fixe des valeurs maximales de transmission thermique pour les murs, toitures et vitrages. Une maison passive d\u00e9passe largement ces exigences. Le label \u00e9nerg\u00e9tique marocain (en cours de d\u00e9ploiement) permettra \u00e0 terme de valoriser cette performance \u00e0 la revente.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            La conception bioclimatique doit \u00eatre pens\u00e9e d\u00e8s l&apos;esquisse, pas ajout\u00e9e en fin de projet. Sur Bati.ma, recherchez un architecte form\u00e9 \u00e0 la conception bioclimatique ou ayant une exp\u00e9rience en \u00e9co-construction. Le surco\u00fbt de 10 \u00e0 15 % est rapidement amorti et votre confort sera incomparable.
          </p>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-stone-900 mb-5">Questions fr\u00e9quentes</h2>
        <div className="space-y-4">
          {faq.map((f) => (
            <details key={f.q} className="group border border-stone-200 rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between px-4 py-3 cursor-pointer text-sm font-medium text-stone-800 hover:bg-stone-50">
                {f.q}
                <span className="text-stone-400 group-open:rotate-180 transition-transform">\u2193</span>
              </summary>
              <div className="px-4 pb-4 pt-1 text-sm text-stone-600 leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
