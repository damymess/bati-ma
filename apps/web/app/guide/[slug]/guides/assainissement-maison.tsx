export default function GuideAssainissement() {
  const faq = [
    {
      q: "Réseau collectif ou fosse septique : que choisir au Maroc ?",
      a: "Si votre terrain est situé en zone urbaine desservie par le réseau d\u0027assainissement collectif, le raccordement est obligatoire. En zone rurale ou péri-urbaine non raccordée, la fosse septique (ou fosse toutes eaux) est la solution. Les communes exigent souvent une étude d\u0027assainissement avant de délivrer le permis de construire.",
    },
    {
      q: "Combien coûte le raccordement au réseau d\u0027assainissement au Maroc ?",
      a: "Le coût de raccordement au réseau d\u0027assainissement varie de 5 000 à 20 000 MAD selon la distance au réseau et la commune. Ce montant inclut les droits de branchement, les travaux de terrassement et le regard de branchement. La redevance annuelle d\u0027assainissement est facturée via la quittance d\u0027eau (environ 3 à 5 MAD/m³ consommé).",
    },
    {
      q: "À quelle fréquence faut-il vidanger une fosse septique au Maroc ?",
      a: "Une fosse septique doit être vidangée tous les 2 à 4 ans selon sa capacité et le nombre d\u0027occupants. Pour une famille de 4 personnes avec une fosse de 3 000 litres, comptez une vidange tous les 3 ans. Le coût de vidange est de 500 à 1 500 MAD selon la région et l\u0027accessibilité.",
    },
    {
      q: "Est-ce qu\u0027une micro-station d\u0027épuration est autorisée au Maroc ?",
      a: "Oui, les micro-stations sont autorisées et de plus en plus populaires en zone rurale. Elles offrent un traitement biologique des eaux usées sans épandage. Leur coût (30 000 à 60 000 MAD) est plus élevé qu\u0027une fosse classique, mais elles nécessitent moins d\u0027espace et rejettent une eau de meilleure qualité.",
    },
    {
      q: "Comment savoir si mon terrain est raccordable au réseau collectif ?",
      a: "Consultez la régie locale (LYDEC, REDAL, RADEEMA ou ONEE selon votre commune). Demandez un certificat de raccordabilité avant l\u0027achat du terrain. Si le réseau passe à moins de 50 mètres, le raccordement est généralement obligatoire et possible sous 2 à 4 semaines après autorisation.",
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
        <h2>Quels sont les enjeux de l&apos;assainissement au Maroc ?</h2>
        <p>
          L&apos;assainissement est un aspect fondamental de toute construction au Maroc, qu&apos;il s&apos;agisse d&apos;une villa, d&apos;un immeuble ou d&apos;un projet rural. Le Maroc a considérablement investi dans l&apos;infrastructure d&apos;assainissement ces dernières années via le Programme National d&apos;Assainissement Liquide (PNA), mais de nombreuses zones restent non desservies par le réseau collectif. Ce guide vous aide à comprendre les options, les obligations et les coûts de l&apos;assainissement pour votre projet de construction.
        </p>

        <h2>Comment se raccorder au réseau d&apos;assainissement collectif ?</h2>
        <p>
          En zone urbaine, le raccordement au réseau d&apos;assainissement collectif est géré par les régies locales (LYDEC à Casablanca, REDAL à Rabat, RADEEMA à Marrakech) ou par l&apos;ONEE en zones périurbaines. Le raccordement est obligatoire quand le réseau passe devant votre terrain. La procédure comprend le dépôt d&apos;une demande avec plan de masse, le paiement des droits de branchement, la réalisation des travaux par un prestataire agréé, et le contrôle de conformité par la régie.
        </p>

        <h2>Quel système d&apos;assainissement autonome choisir ?</h2>
        <p>
          Lorsque le réseau collectif n&apos;est pas disponible, l&apos;assainissement autonome devient la seule option. Les systèmes les plus courants au Maroc sont :
        </p>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-300 px-3 py-2 text-left">Système</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Coût (MAD)</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Capacité</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Entretien</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Fosse septique béton</td>
              <td className="border border-stone-300 px-3 py-2">8 000 - 15 000</td>
              <td className="border border-stone-300 px-3 py-2">2 000 - 5 000 L</td>
              <td className="border border-stone-300 px-3 py-2">Vidange tous les 2-4 ans</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Fosse toutes eaux plastique</td>
              <td className="border border-stone-300 px-3 py-2">12 000 - 25 000</td>
              <td className="border border-stone-300 px-3 py-2">3 000 - 6 000 L</td>
              <td className="border border-stone-300 px-3 py-2">Vidange tous les 3-4 ans</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Micro-station d&apos;épuration</td>
              <td className="border border-stone-300 px-3 py-2">30 000 - 60 000</td>
              <td className="border border-stone-300 px-3 py-2">4 - 20 EH</td>
              <td className="border border-stone-300 px-3 py-2">Contrôle annuel</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Filtre à sable</td>
              <td className="border border-stone-300 px-3 py-2">15 000 - 30 000</td>
              <td className="border border-stone-300 px-3 py-2">Complémentaire</td>
              <td className="border border-stone-300 px-3 py-2">Remplacement sable 10 ans</td>
            </tr>
          </tbody>
        </table>

        <h2>Comment dimensionner sa fosse septique ?</h2>
        <p>
          Le dimensionnement dépend du nombre d&apos;occupants et du type d&apos;eaux traitées. La règle de base au Maroc est de prévoir 250 litres par personne pour les eaux-vannes seules, ou 500 litres par personne pour une fosse toutes eaux (eaux-vannes + eaux ménagères). Pour une famille de 6 personnes, une fosse toutes eaux de 3 000 litres minimum est recommandée. Le terrain d&apos;épandage associé doit avoir une surface de 20 à 30 m² selon la perméabilité du sol.
        </p>

        <h2>Quelle réglementation encadre l&apos;assainissement au Maroc ?</h2>
        <p>
          La loi marocaine 36-15 sur l&apos;eau impose des obligations strictes en matière d&apos;assainissement. Le rejet des eaux usées dans la nature est interdit et passible de sanctions. En zone rurale, l&apos;étude de sol est souvent exigée avant la réalisation d&apos;un système autonome. Les communes peuvent imposer le raccordement au réseau collectif dès qu&apos;il est disponible, même pour les propriétés disposant d&apos;un système autonome fonctionnel. La mise en conformité doit alors être réalisée dans un délai de 2 ans.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Avant d&apos;acheter un terrain en zone non raccordée, faites réaliser une étude de sol pour vérifier la faisabilité de l&apos;assainissement autonome. Certains sols argileux ou à nappe phréatique haute rendent l&apos;épandage impossible. Consultez les BET (bureaux d&apos;études techniques) référencés sur Bati.ma pour cette étude.
          </p>
        </div>

        <h2>Comment bien entretenir son système d&apos;assainissement ?</h2>
        <p>
          Un système d&apos;assainissement bien entretenu évite les nuisances et protège l&apos;environnement. Pour une fosse septique, n&apos;utilisez jamais de javel ou de produits chimiques agressifs qui tuent les bactéries de décomposition. Faites vérifier les regards de visite annuellement. Ne plantez pas d&apos;arbres à proximité des canalisations d&apos;évacuation (les racines peuvent les obstruer). Conservez les bons de vidange comme justificatif en cas de contrôle par les autorités locales.
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
