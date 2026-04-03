export default function GuideMREConstruire() {
  const faq = [
    {
      q: "Comment donner procuration pour construire au Maroc depuis l&apos;\u00e9tranger ?",
      a: "La procuration doit \u00eatre \u00e9tablie devant un notaire ou au consulat du Maroc dans votre pays de r\u00e9sidence. Elle peut \u00eatre g\u00e9n\u00e9rale (d\u00e9conseill\u00e9) ou sp\u00e9ciale (limit\u00e9e \u00e0 des actes pr\u00e9cis). Co\u00fbt : 200 \u00e0 500 EUR au consulat, 500 \u00e0 1 500 EUR chez un notaire \u00e9tranger avec apostille. Pr\u00e9f\u00e9rez une procuration sp\u00e9ciale limit\u00e9e dans le temps.",
    },
    {
      q: "Quel compte bancaire ouvrir au Maroc pour un projet de construction MRE ?",
      a: "Ouvrez un compte en dirhams convertibles aupr\u00e8s d&apos;une banque marocaine (Attijariwafa Bank, BMCE, Banque Populaire). Ce compte permet de recevoir vos virements depuis l&apos;\u00e9tranger et de payer les artisans. Vous pouvez aussi ouvrir un compte \u00e9pargne logement pour b\u00e9n\u00e9ficier d&apos;avantages fiscaux. Les banques proposent des offres sp\u00e9ciales MRE avec des conseillers d\u00e9di\u00e9s.",
    },
    {
      q: "Comment surveiller un chantier au Maroc \u00e0 distance ?",
      a: "Plusieurs solutions existent : mandater un architecte pour le suivi de chantier (3 \u00e0 5 % du co\u00fbt des travaux), installer des cam\u00e9ras de chantier connect\u00e9es (1 500 \u00e0 3 000 MAD), exiger des rapports photo hebdomadaires de l&apos;entreprise, et utiliser des applications de suivi de projet. La pr\u00e9sence d&apos;un architecte de confiance reste la solution la plus fiable.",
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
        <h2>MRE : construire au Maroc depuis l&apos;\u00e9tranger en 2026</h2>
        <p>
          Chaque ann\u00e9e, des milliers de Marocains R\u00e9sidant \u00e0 l&apos;\u00c9tranger (MRE) investissent dans la construction au Maroc. Que ce soit pour une r\u00e9sidence de vacances, une maison familiale ou un investissement locatif, ce projet \u00e0 distance pr\u00e9sente des d\u00e9fis sp\u00e9cifiques : gestion de la procuration, suivi de chantier \u00e0 des milliers de kilom\u00e8tres, et coordination des intervenants. Ce guide vous donne toutes les cl\u00e9s pour r\u00e9ussir votre projet sans mauvaises surprises.
        </p>

        <h2>La procuration : d\u00e9l\u00e9guer sans risquer</h2>
        <p>
          La procuration est le document juridique qui permet \u00e0 une personne de confiance (mandataire) d&apos;agir en votre nom au Maroc. C&apos;est l&apos;\u00e9tape la plus sensible pour un MRE constructeur.
        </p>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Type de procuration</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Avantages</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Risques</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Co\u00fbt</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">G\u00e9n\u00e9rale</td>
              <td className="border border-stone-200 px-3 py-2">Souplesse totale</td>
              <td className="border border-stone-200 px-3 py-2 text-red-700">Tr\u00e8s \u00e9lev\u00e9s (abus possible)</td>
              <td className="border border-stone-200 px-3 py-2">300 - 800 EUR</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">Sp\u00e9ciale limit\u00e9e</td>
              <td className="border border-stone-200 px-3 py-2">Actes pr\u00e9cis + dur\u00e9e</td>
              <td className="border border-stone-200 px-3 py-2 text-green-700">Faibles</td>
              <td className="border border-stone-200 px-3 py-2">200 - 500 EUR</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">Bancaire uniquement</td>
              <td className="border border-stone-200 px-3 py-2">Op\u00e9rations bancaires</td>
              <td className="border border-stone-200 px-3 py-2 text-green-700">Tr\u00e8s faibles</td>
              <td className="border border-stone-200 px-3 py-2">100 - 300 EUR</td>
            </tr>
          </tbody>
        </table>
        <p>
          R\u00e8gle d&apos;or : ne donnez jamais de procuration g\u00e9n\u00e9rale. Pr\u00e9f\u00e9rez plusieurs procurations sp\u00e9ciales limit\u00e9es dans le temps et dans l&apos;objet. Par exemple, une procuration pour l&apos;achat du terrain (dur\u00e9e 6 mois) et une autre pour le d\u00e9p\u00f4t du permis de construire.
        </p>

        <h2>Le suivi de chantier \u00e0 distance</h2>
        <p>
          Le suivi \u00e0 distance est le point n\u00e9vralgique du projet MRE. Sans pr\u00e9sence r\u00e9guli\u00e8re sur le chantier, les d\u00e9rives sont fr\u00e9quentes : retards, malfacons, d\u00e9tournement de mat\u00e9riaux, modifications non autoris\u00e9es.
        </p>
        <p>
          <strong>Solution 1 - L&apos;architecte mandataire :</strong> c&apos;est la solution la plus fiable. Votre architecte assure le suivi de chantier complet (visite hebdomadaire, contr\u00f4le qualit\u00e9, validation des situations de paiement). Honoraires : 3 \u00e0 5 % du co\u00fbt des travaux, soit 30 000 \u00e0 75 000 MAD pour un projet \u00e0 1 500 000 MAD.
        </p>
        <p>
          <strong>Solution 2 - Cam\u00e9ras de chantier :</strong> des cam\u00e9ras IP connect\u00e9es (Reolink, Hikvision) permettent de surveiller le chantier en temps r\u00e9el depuis votre smartphone. Co\u00fbt : 1 500 \u00e0 3 000 MAD pour 2 cam\u00e9ras avec abonnement 4G.
        </p>
        <p>
          <strong>Solution 3 - Rapports p\u00e9riodiques :</strong> exigez contractuellement des rapports photo et vid\u00e9o hebdomadaires de l&apos;entreprise, valid\u00e9s par l&apos;architecte.
        </p>

        <h2>Gestion financi\u00e8re depuis l&apos;\u00e9tranger</h2>
        <p>
          La gestion financi\u00e8re est un d\u00e9fi majeur pour les MRE. Les transferts internationaux prennent 2 \u00e0 5 jours et sont soumis \u00e0 des frais. Ouvrez un compte en dirhams convertibles dans une banque marocaine propos\u00e9e des offres MRE (Attijariwafa Bank, BMCE Bank of Africa, Banque Populaire). Utilisez les services de transfert en ligne (Western Union, Wise, Remitly) pour les virements urgents.
        </p>
        <p>
          Ne payez jamais l&apos;int\u00e9gralit\u00e9 d&apos;avance \u00e0 une entreprise. \u00c9tablissez un \u00e9ch\u00e9ancier de paiement li\u00e9 \u00e0 l&apos;avancement des travaux, valid\u00e9 par votre architecte. Gardez toujours 10 \u00e0 15 % du montant total comme retenue de garantie jusqu&apos;\u00e0 la r\u00e9ception d\u00e9finitive.
        </p>

        <h2>Les erreurs classiques des MRE</h2>
        <p>
          <strong>Confier le projet \u00e0 un proche non qualifi\u00e9 :</strong> c&apos;est la cause num\u00e9ro un des \u00e9checs. M\u00eame avec les meilleures intentions, un proche sans comp\u00e9tences techniques ne peut pas g\u00e9rer un chantier correctement.
        </p>
        <p>
          <strong>Construire sans architecte :</strong> au Maroc, l&apos;architecte est obligatoire pour tout projet de plus de 150 m\u00b2. M\u00eame en dessous, son intervention \u00e9vite les probl\u00e8mes de conception et de conformit\u00e9.
        </p>
        <p>
          <strong>Ne pas formaliser les contrats :</strong> chaque intervenant (architecte, BET, entreprise, artisans) doit avoir un contrat \u00e9crit avec des obligations pr\u00e9cises, un \u00e9ch\u00e9ancier et des p\u00e9nalit\u00e9s de retard.
        </p>

        <h2>Architectes sp\u00e9cialis\u00e9s MRE sur Bati.ma</h2>
        <p>
          Certains architectes sur Bati.ma ont d\u00e9velopp\u00e9 une expertise sp\u00e9cifique pour les projets MRE : r\u00e9unions en visioconf\u00e9rence adapt\u00e9es au d\u00e9calage horaire, rapports de chantier d\u00e9taill\u00e9s avec photos, gestion int\u00e9grale du projet (de la conception \u00e0 la livraison), et coordination des d\u00e9marches administratives \u00e0 distance.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            En tant que MRE, votre meilleur alli\u00e9 est un architecte qui conna\u00eet les r\u00e9alit\u00e9s du terrain et qui communique r\u00e9guli\u00e8rement. Sur Bati.ma, filtrez les architectes par ville et contactez-en 3 pour comparer leurs offres de suivi \u00e0 distance. Un bon architecte vous fera \u00e9conomiser bien plus que ses honoraires.
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
