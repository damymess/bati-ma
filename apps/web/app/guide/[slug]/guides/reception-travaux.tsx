export default function GuideReceptionTravaux() {
  const faq = [
    {
      q: "Quelle est la différence entre réception provisoire et définitive au Maroc ?",
      a: "La réception provisoire marque la fin des travaux et le transfert de possession au maître d\u0027ouvrage. Elle peut être prononcée avec ou sans réserves. La réception définitive intervient 1 an après (délai de garantie de parfait achèvement). Entre les deux, l\u0027entreprise est tenue de corriger toutes les réserves et malfaçons constatées. La retenue de garantie (généralement 10 % du montant) n\u0027est libérée qu\u0027à la réception définitive.",
    },
    {
      q: "Que contient le PV de réception des travaux ?",
      a: "Le procès-verbal (PV) de réception doit mentionner : la date de réception, les parties présentes (maître d\u0027ouvrage, architecte, entreprise), la description de l\u0027ouvrage, la liste détaillée des réserves (malfaçons, non-conformités), le délai accordé pour lever les réserves, et les signatures de toutes les parties. Ce document est juridiquement contraignant et constitue le point de départ des garanties.",
    },
    {
      q: "Quelles garanties courent après la réception au Maroc ?",
      a: "Après la réception provisoire, trois garanties s\u0027appliquent : la garantie de parfait achèvement (1 an, couvre toutes les malfaçons signalées), la garantie de bon fonctionnement (2 ans, couvre les équipements dissociables comme la robinetterie et les volets), et la garantie décennale (10 ans, couvre les vices affectant la solidité ou rendant l\u0027ouvrage impropre à sa destination).",
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
        <h2>La réception des travaux au Maroc : une étape décisive</h2>
        <p>
          La réception des travaux est l&apos;acte par lequel le maître d&apos;ouvrage accepte l&apos;ouvrage réalisé par l&apos;entreprise de construction. Au Maroc, cette étape est cruciale car elle marque le transfert de propriété, le point de départ des garanties légales et le solde des comptes financiers. Pourtant, beaucoup de particuliers marocains négligent cette formalité, s&apos;exposant à des complications juridiques en cas de malfaçons ultérieures.
        </p>

        <h2>Les deux phases de réception</h2>
        <p>
          La réception au Maroc se déroule en deux temps distincts, chacun ayant des implications juridiques et financières spécifiques :
        </p>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-300 px-3 py-2 text-left">Phase</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Moment</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Effets juridiques</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Retenue financière</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Réception provisoire</td>
              <td className="border border-stone-300 px-3 py-2">Fin des travaux</td>
              <td className="border border-stone-300 px-3 py-2">Transfert de garde, début des garanties</td>
              <td className="border border-stone-300 px-3 py-2">10 % retenus</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Réception définitive</td>
              <td className="border border-stone-300 px-3 py-2">1 an après la provisoire</td>
              <td className="border border-stone-300 px-3 py-2">Libération de la retenue, fin du parfait achèvement</td>
              <td className="border border-stone-300 px-3 py-2">Solde libéré</td>
            </tr>
          </tbody>
        </table>

        <h2>Comment se déroule la réception provisoire ?</h2>
        <p>
          La réception provisoire est un acte formel qui doit être réalisé avec rigueur. Voici les étapes recommandées pour une réception réussie au Maroc. Convocez par écrit l&apos;entreprise et l&apos;architecte au moins 8 jours avant la date de réception. Le jour J, parcourez méthodiquement chaque pièce et chaque élément de la construction avec un mètre, un niveau et une lampe torche. Notez chaque défaut, même mineur, sur un document structuré. L&apos;architecte joue un rôle clé dans l&apos;identification des non-conformités par rapport aux plans et au cahier des charges.
        </p>

        <h2>Les réserves : quoi vérifier ?</h2>
        <p>
          La liste des points à contrôler lors de la réception est longue. Voici les principales catégories à inspecter systématiquement :
        </p>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-300 px-3 py-2 text-left">Lot</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Points à vérifier</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Gros œuvre</td>
              <td className="border border-stone-300 px-3 py-2">Fissures, aplomb des murs, planéité des dalles</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Étanchéité</td>
              <td className="border border-stone-300 px-3 py-2">Terrasses, toiture, sous-sol (test à l&apos;eau 48h)</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Menuiseries</td>
              <td className="border border-stone-300 px-3 py-2">Ouverture/fermeture, joints, quincaillerie</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Plomberie</td>
              <td className="border border-stone-300 px-3 py-2">Fuites, pression, évacuations, chauffe-eau</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Électricité</td>
              <td className="border border-stone-300 px-3 py-2">Prises, interrupteurs, tableau, mise à la terre</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Revêtements</td>
              <td className="border border-stone-300 px-3 py-2">Carrelage (sonnette), peinture, enduits</td>
            </tr>
          </tbody>
        </table>

        <h2>Les garanties post-réception</h2>
        <p>
          La réception provisoire déclenche trois niveaux de garantie encadrés par le droit marocain :
        </p>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-300 px-3 py-2 text-left">Garantie</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Durée</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Couverture</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Parfait achèvement</td>
              <td className="border border-stone-300 px-3 py-2">1 an</td>
              <td className="border border-stone-300 px-3 py-2">Tous défauts signalés lors de la réception ou apparus la 1ère année</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Bon fonctionnement</td>
              <td className="border border-stone-300 px-3 py-2">2 ans</td>
              <td className="border border-stone-300 px-3 py-2">Équipements dissociables : volets, robinetterie, interphones</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Décennale</td>
              <td className="border border-stone-300 px-3 py-2">10 ans</td>
              <td className="border border-stone-300 px-3 py-2">Solidité de l&apos;ouvrage, impropriété à la destination</td>
            </tr>
          </tbody>
        </table>

        <h2>Le PV de réception : un document juridique clé</h2>
        <p>
          Le procès-verbal de réception est le document le plus important de votre projet de construction. Il doit être rédigé avec soin et signé par toutes les parties. Un PV bien rédigé mentionne la date et le lieu, l&apos;identité complète des parties, la description précise de l&apos;ouvrage, la liste numérotée et détaillée des réserves, les délais de levée des réserves (généralement 30 à 90 jours), et le montant de la retenue de garantie. Conservez l&apos;original en lieu sûr : il sera votre preuve en cas de litige pendant toute la durée de la garantie décennale.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Ne signez jamais un PV de réception sans réserves si vous constatez des défauts, même mineurs. Une fois le PV signé sans réserve, il sera très difficile de faire valoir vos droits. Faites-vous accompagner par votre architecte lors de la réception. Trouvez un architecte expérimenté dans le suivi de chantier sur Bati.ma.
          </p>
        </div>

        <h2>Que faire si l&apos;entreprise ne lève pas les réserves ?</h2>
        <p>
          Si l&apos;entreprise de construction ne corrige pas les réserves dans le délai imparti, envoyez-lui une mise en demeure par lettre recommandée avec accusé de réception. Si elle ne réagit pas sous 15 jours, vous pouvez faire réaliser les travaux correctifs par une autre entreprise aux frais de la première, en prélevant sur la retenue de garantie. En dernier recours, saisissez le tribunal compétent. L&apos;architecte peut vous aider à constituer le dossier technique nécessaire à la procédure.
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
