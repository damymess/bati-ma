export default function GuideAscenseur() {
  const faq = [
    {
      q: "À partir de combien d\u0027étages un ascenseur est obligatoire au Maroc ?",
      a: "Au Maroc, l\u0027installation d\u0027un ascenseur est obligatoire pour tout immeuble de plus de 4 étages (R+4) selon la réglementation en vigueur. Pour les immeubles R+3 et moins, c\u0027est facultatif mais fortement recommandé pour la valorisation du bien. Les ERP (Établissements Recevant du Public) ont des obligations spécifiques d\u0027accessibilité.",
    },
    {
      q: "Combien coûte l\u0027installation d\u0027un ascenseur au Maroc ?",
      a: "Le coût d\u0027un ascenseur au Maroc varie de 200 000 à 500 000 MAD selon la capacité (4 à 8 personnes), le nombre d\u0027arrêts, la finition de la cabine et la marque. Un ascenseur basique pour un immeuble R+5 coûte environ 250 000 MAD. Les modèles de luxe avec cabine en inox et miroir peuvent dépasser 500 000 MAD.",
    },
    {
      q: "Quel est le coût de maintenance annuel d\u0027un ascenseur au Maroc ?",
      a: "Le contrat de maintenance annuel d\u0027un ascenseur au Maroc coûte entre 12 000 et 30 000 MAD, selon le type de contrat (simple entretien ou tout inclus) et la marque. La maintenance est obligatoire et doit être réalisée par une société agréée. Un contrôle technique annuel par un organisme accrédité (Bureau Veritas, Apave) est également requis.",
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
        <h2>Les ascenseurs au Maroc : réglementation et obligations</h2>
        <p>
          L&apos;ascenseur est un équipement incontournable dans la construction d&apos;immeubles au Maroc. La réglementation marocaine impose son installation pour tout bâtiment dépassant le R+4. Avec l&apos;urbanisation croissante de Casablanca, Rabat, Tanger et Marrakech, la demande en ascenseurs a fortement augmenté, entraînant l&apos;arrivée de nombreux acteurs sur le marché.
        </p>
        <p>
          Que vous soyez promoteur, syndic de copropriété ou propriétaire d&apos;immeuble, ce guide vous aide à comprendre les obligations, les coûts et les critères de choix pour un ascenseur au Maroc.
        </p>

        <h2>Réglementation et normes de sécurité</h2>
        <p>
          La réglementation marocaine encadre strictement l&apos;installation et l&apos;exploitation des ascenseurs. Les principaux textes de référence sont le décret n° 2-14-841 relatif à la sécurité des ascenseurs et les normes marocaines NM. Tout ascenseur doit être installé par une entreprise agréée, faire l&apos;objet d&apos;un contrôle technique initial avant mise en service, subir un contrôle technique annuel par un organisme accrédité, et disposer d&apos;un contrat de maintenance obligatoire.
        </p>

        <h2>Types d&apos;ascenseurs disponibles au Maroc</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-300 px-3 py-2 text-left">Type</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Prix (MAD)</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Adapté pour</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Avantage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Électrique à câbles</td>
              <td className="border border-stone-300 px-3 py-2">200 000 - 400 000</td>
              <td className="border border-stone-300 px-3 py-2">Immeubles R+3 à R+10</td>
              <td className="border border-stone-300 px-3 py-2">Fiable, économique</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Hydraulique</td>
              <td className="border border-stone-300 px-3 py-2">250 000 - 450 000</td>
              <td className="border border-stone-300 px-3 py-2">Immeubles R+2 à R+6</td>
              <td className="border border-stone-300 px-3 py-2">Pas de local machine en toiture</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">MRL (sans local machine)</td>
              <td className="border border-stone-300 px-3 py-2">280 000 - 500 000</td>
              <td className="border border-stone-300 px-3 py-2">Tous immeubles</td>
              <td className="border border-stone-300 px-3 py-2">Gain de place, moderne</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Panoramique (vitré)</td>
              <td className="border border-stone-300 px-3 py-2">350 000 - 700 000</td>
              <td className="border border-stone-300 px-3 py-2">Hôtels, résidences luxe</td>
              <td className="border border-stone-300 px-3 py-2">Esthétique, valorisation</td>
            </tr>
          </tbody>
        </table>

        <h2>Marques et fabricants présents au Maroc</h2>
        <p>
          Le marché marocain des ascenseurs est partagé entre les grandes marques internationales et des fabricants locaux ou régionaux. Otis, Schindler et Kone dominent le segment haut de gamme et tertiaire. ThyssenKrupp est bien implanté dans le résidentiel de standing. Des marques turques (Asansor) et chinoises proposent des alternatives plus abordables pour le résidentiel économique. Pour le choix de la marque, les critères déterminants sont la disponibilité des pièces détachées au Maroc, la réactivité du SAV et la solidité financière du représentant local.
        </p>

        <h2>Coûts d&apos;exploitation et maintenance</h2>
        <p>
          Au-delà du coût d&apos;achat, l&apos;ascenseur génère des charges récurrentes qu&apos;il faut anticiper dans le budget de la copropriété :
        </p>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-300 px-3 py-2 text-left">Poste</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Coût annuel (MAD)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Contrat maintenance simple</td>
              <td className="border border-stone-300 px-3 py-2">12 000 - 18 000</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Contrat tout inclus</td>
              <td className="border border-stone-300 px-3 py-2">20 000 - 30 000</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Contrôle technique annuel</td>
              <td className="border border-stone-300 px-3 py-2">3 000 - 5 000</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Consommation électrique</td>
              <td className="border border-stone-300 px-3 py-2">4 000 - 8 000</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Assurance responsabilité civile</td>
              <td className="border border-stone-300 px-3 py-2">2 000 - 4 000</td>
            </tr>
          </tbody>
        </table>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Lors du choix d&apos;un ascensoriste, ne vous basez pas uniquement sur le prix d&apos;achat. Le coût de maintenance sur 20 ans représente souvent le double du prix d&apos;installation. Privilégiez un installateur ayant une présence pérenne au Maroc. Sur Bati.ma, comparez les professionnels du secteur dans votre région.
          </p>
        </div>

        <h2>Prévoir la gaine dès la conception</h2>
        <p>
          La gaine d&apos;ascenseur doit être prévue dès la phase de conception architecturale. Les dimensions minimales de la gaine sont de 1,50 m x 1,60 m pour un ascenseur standard de 6 personnes. La fosse en partie basse doit avoir une profondeur de 1,20 à 1,50 m. Prévoyez également un dégagement en partie haute (course morte) d&apos;au moins 3,50 m. Ces contraintes impactent directement le plan de l&apos;immeuble et doivent être intégrées par l&apos;architecte dès le permis de construire.
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
