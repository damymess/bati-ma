export default function GuideVEFA() {
  const faq = [
    {
      q: "Qu&apos;est-ce que la VEFA au Maroc et comment \u00e7a fonctionne ?",
      a: "La VEFA (Vente en \u00c9tat Futur d&apos;Ach\u00e8vement) est l&apos;achat d&apos;un bien immobilier sur plan, avant ou pendant sa construction. R\u00e9glement\u00e9e par la loi 44-00 au Maroc, elle impose un contrat pr\u00e9liminaire notari\u00e9, un \u00e9ch\u00e9ancier de paiement progressif et une garantie bancaire ou de caution. Le promoteur s&apos;engage \u00e0 livrer le bien conforme aux plans dans un d\u00e9lai d\u00e9fini.",
    },
    {
      q: "Comment se d\u00e9roule le paiement en VEFA au Maroc ?",
      a: "L&apos;\u00e9ch\u00e9ancier l\u00e9gal pr\u00e9voit un versement maximal de 5 % \u00e0 la signature du contrat pr\u00e9liminaire, puis les paiements sont li\u00e9s \u00e0 l&apos;avancement des travaux : 20 % aux fondations, 40 % \u00e0 l&apos;ach\u00e8vement du gros \u0153uvre, 20 % aux finitions et 20 % \u00e0 la livraison. Tout versement doit correspondre \u00e0 un avancement constat\u00e9.",
    },
    {
      q: "Que faire en cas de retard de livraison VEFA au Maroc ?",
      a: "La loi 44-00 pr\u00e9voit des p\u00e9nalit\u00e9s de retard au profit de l&apos;acheteur (1 % par mois de retard en g\u00e9n\u00e9ral). Si le retard d\u00e9passe 12 mois, vous pouvez demander la r\u00e9solution du contrat avec restitution des sommes vers\u00e9es. Conservez tous les re\u00e7us et correspondances. Un avocat sp\u00e9cialis\u00e9 peut vous aider \u00e0 faire valoir vos droits.",
    },
    { q: "Faut-il un architecte pour un projet de vefa au Maroc ?", a: "Conform\u00e9ment \u00e0 la loi 16-89, le recours \u00e0 un architecte inscrit \u00e0 l\u2019Ordre est obligatoire pour toute construction au Maroc. M\u00eame pour les projets techniques, l\u2019architecte coordonne le permis de construire et assure la conformit\u00e9. Consultez les profils v\u00e9rifi\u00e9s sur Bati.ma." },
    { q: "Comment obtenir un devis pour vefa au Maroc ?", a: "Demandez au minimum 3 devis d\u00e9taill\u00e9s aupr\u00e8s de professionnels diff\u00e9rents. Comparez les postes ligne par ligne, v\u00e9rifiez les r\u00e9f\u00e9rences et exigez un calendrier d\u2019ex\u00e9cution. Sur Bati.ma, vous pouvez contacter directement les architectes sp\u00e9cialis\u00e9s et demander vos devis gratuitement." },
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
        <h2>Acheter en VEFA au Maroc : tout comprendre avant de signer</h2>
        <p>
          La VEFA repr\u00e9sente plus de 40 % des transactions immobili\u00e8res neuves au Maroc. Acheter sur plan permet de b\u00e9n\u00e9ficier de prix plus attractifs (10 \u00e0 20 % inf\u00e9rieurs au march\u00e9 du fini) et de personnaliser son logement. Cependant, ce mode d&apos;achat comporte des risques sp\u00e9cifiques que la loi 44-00, entr\u00e9e en vigueur en 2003 et renforc\u00e9e depuis, tente d&apos;encadrer.
        </p>

        <h2>La loi 44-00 : vos protections l\u00e9gales</h2>
        <p>
          La loi 44-00 est la pierre angulaire de la protection de l&apos;acqu\u00e9reur en VEFA au Maroc. Elle impose plusieurs obligations au promoteur :
        </p>
        <p>
          <strong>Contrat pr\u00e9liminaire obligatoire :</strong> il doit \u00eatre \u00e9tabli par acte authentique (notaire) et contenir la description pr\u00e9cise du bien, le prix, l&apos;\u00e9ch\u00e9ancier de paiement, le d\u00e9lai de livraison et les p\u00e9nalit\u00e9s de retard.
        </p>
        <p>
          <strong>Garantie d&apos;ach\u00e8vement :</strong> le promoteur doit fournir une garantie bancaire ou une caution de soci\u00e9t\u00e9 d&apos;assurance couvrant l&apos;ach\u00e8vement des travaux. V\u00e9rifiez absolument l&apos;existence de cette garantie avant tout versement.
        </p>
        <p>
          <strong>Inscription au titre foncier :</strong> le contrat pr\u00e9liminaire doit \u00eatre inscrit \u00e0 la Conservation Fonci\u00e8re, ce qui prot\u00e8ge l&apos;acqu\u00e9reur contre une double vente ou une hypoth\u00e8que ult\u00e9rieure.
        </p>

        <h2>\u00c9ch\u00e9ancier de paiement type en VEFA</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">\u00c9tape</th>
              <th className="border border-stone-200 px-3 py-2 text-left">% du prix</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Exemple (1 000 000 MAD)</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Condition</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-200 px-3 py-2">R\u00e9servation</td>
              <td className="border border-stone-200 px-3 py-2">5 %</td>
              <td className="border border-stone-200 px-3 py-2">50 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">Signature contrat pr\u00e9liminaire</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Fondations</td>
              <td className="border border-stone-200 px-3 py-2">15 %</td>
              <td className="border border-stone-200 px-3 py-2">150 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">Ach\u00e8vement fondations</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Gros \u0153uvre</td>
              <td className="border border-stone-200 px-3 py-2">40 %</td>
              <td className="border border-stone-200 px-3 py-2">400 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">Structure termin\u00e9e</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Finitions</td>
              <td className="border border-stone-200 px-3 py-2">20 %</td>
              <td className="border border-stone-200 px-3 py-2">200 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">Second \u0153uvre termin\u00e9</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Livraison</td>
              <td className="border border-stone-200 px-3 py-2">20 %</td>
              <td className="border border-stone-200 px-3 py-2">200 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">Remise des cl\u00e9s</td>
            </tr>
          </tbody>
        </table>

        <h2>Les pi\u00e8ges de la VEFA au Maroc</h2>
        <p>
          Malgr\u00e9 la protection l\u00e9gale, de nombreux acqu\u00e9reurs rencontrent des difficult\u00e9s. Les probl\u00e8mes les plus fr\u00e9quents sont les retards de livraison (parfois 2 \u00e0 3 ans), les diff\u00e9rences entre le plan vendu et le produit livr\u00e9 (surfaces r\u00e9duites, mat\u00e9riaux de moindre qualit\u00e9), et l&apos;absence de permis d&apos;habiter \u00e0 la livraison.
        </p>
        <p>
          Pour vous prot\u00e9ger : exigez le permis de construire d\u00e9finitif avant de signer, v\u00e9rifiez les r\u00e9alisations pr\u00e9c\u00e9dentes du promoteur, inscrivez dans le contrat les mat\u00e9riaux exacts (marque et r\u00e9f\u00e9rence) et pr\u00e9voyez une clause de p\u00e9nalit\u00e9 de retard de minimum 1 % par mois.
        </p>

        <h2>La r\u00e9ception du bien : \u00e9tape cruciale</h2>
        <p>
          La r\u00e9ception est le moment o\u00f9 vous v\u00e9rifiez la conformit\u00e9 du bien livr\u00e9. Faites-vous accompagner par un architecte ou un expert ind\u00e9pendant. V\u00e9rifiez les surfaces (mesurage contradictoire), la qualit\u00e9 des finitions, le fonctionnement des \u00e9quipements (plomberie, \u00e9lectricit\u00e9, climatisation), et \u00e9tablissez un proc\u00e8s-verbal de r\u00e9ception listant toutes les r\u00e9serves. Vous disposez d&apos;un d\u00e9lai d&apos;un an pour signaler les vices cach\u00e9s.
        </p>

        <h2>R\u00e9soudre les litiges VEFA</h2>
        <p>
          En cas de litige, plusieurs options existent : la n\u00e9gociation amiable (souvent efficace si bien document\u00e9e), la m\u00e9diation via la FNPI (F\u00e9d\u00e9ration Nationale des Promoteurs Immobiliers), et en dernier recours, l&apos;action en justice devant le tribunal comp\u00e9tent. Les d\u00e9lais judiciaires sont de 1 \u00e0 3 ans en moyenne. Le co\u00fbt d&apos;un avocat sp\u00e9cialis\u00e9 en immobilier varie de 10 000 \u00e0 30 000 MAD selon la complexit\u00e9 du dossier.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Avant de signer un contrat VEFA, demandez \u00e0 un architecte inscrit sur Bati.ma d&apos;analyser les plans et le cahier des charges du promoteur. Il pourra d\u00e9tecter les incoh\u00e9rences, v\u00e9rifier la qualit\u00e9 des mat\u00e9riaux pr\u00e9vus et vous accompagner lors de la r\u00e9ception pour un co\u00fbt de 2 000 \u00e0 5 000 MAD.
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
