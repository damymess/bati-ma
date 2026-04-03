export default function GuideSecuriteIncendie() {
  const faq = [
    {
      q: "Quels bâtiments sont soumis à la réglementation ERP au Maroc ?",
      a: "Les Établissements Recevant du Public (ERP) au Maroc incluent les commerces, hôtels, restaurants, cinémas, mosquées, écoles, hôpitaux, centres commerciaux et tout bâtiment accueillant du public. Ils sont classés en catégories selon leur capacité d&apos;accueil (1re à 5e catégorie). Les habitations individuelles ne sont pas classées ERP mais doivent respecter des règles minimales de sécurité incendie définies par le règlement général de construction.",
    },
    {
      q: "Les détecteurs de fumée sont-ils obligatoires au Maroc ?",
      a: "Pour les ERP, les détecteurs de fumée et les systèmes de détection incendie sont obligatoires selon la catégorie du bâtiment. Pour les habitations privées, il n&apos;existe pas encore d&apos;obligation légale d&apos;installer des détecteurs de fumée, contrairement à la France. Cependant, leur installation est fortement recommandée : un détecteur coûte entre 100 et 300 MAD et peut sauver des vies. Les immeubles résidentiels de plus de 4 étages doivent disposer de colonnes sèches.",
    },
    {
      q: "Qui délivre l&apos;attestation de conformité incendie au Maroc ?",
      a: "L&apos;attestation de conformité aux normes de sécurité incendie est délivrée par la Protection Civile après inspection du bâtiment. Pour les ERP, cette attestation est obligatoire avant l&apos;ouverture au public. L&apos;inspection vérifie les issues de secours, l&apos;éclairage de sécurité, les extincteurs, le système de détection, le désenfumage et la résistance au feu des structures. La visite de la Protection Civile est également requise lors de l&apos;instruction du permis de construire pour les projets importants.",
    },
    { q: "Faut-il un architecte pour un projet de securite incendie ?", a: "Conform\u00e9ment \u00e0 la loi 16-89, le recours \u00e0 un architecte inscrit \u00e0 l\u2019Ordre est obligatoire pour toute construction au Maroc. M\u00eame pour les projets techniques, l\u2019architecte coordonne le permis de construire et assure la conformit\u00e9. Consultez les profils v\u00e9rifi\u00e9s sur Bati.ma." },
    { q: "Comment obtenir un devis pour securite incendie ?", a: "Demandez au minimum 3 devis d\u00e9taill\u00e9s aupr\u00e8s de professionnels diff\u00e9rents. Comparez les postes ligne par ligne, v\u00e9rifiez les r\u00e9f\u00e9rences et exigez un calendrier d\u2019ex\u00e9cution. Sur Bati.ma, vous pouvez contacter directement les architectes sp\u00e9cialis\u00e9s et demander vos devis gratuitement." },
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
        <h2>La sécurité incendie dans les bâtiments au Maroc</h2>
        <p>
          La sécurité incendie est un enjeu majeur de la construction au Maroc, encadré par le règlement général de construction et les circulaires du ministère de l&apos;Intérieur relatives aux Établissements Recevant du Public (ERP). Les incendies dans les bâtiments causent chaque année des pertes humaines et matérielles considérables, souvent dues au non-respect des normes de base : issues de secours bloquées, absence de détecteurs, matériaux inflammables non conformes.
        </p>
        <p>
          Que vous construisiez un immeuble d&apos;habitation, un local commercial ou un hôtel, la sécurité incendie doit être intégrée dès la phase de conception architecturale. L&apos;architecte, le bureau d&apos;études et le bureau de contrôle travaillent ensemble pour garantir la conformité du projet aux exigences de la Protection Civile.
        </p>

        <h2>Classification des établissements recevant du public</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-300 px-3 py-2 text-left">Catégorie</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Capacité d&apos;accueil</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Exemples</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Exigences</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-300 px-3 py-2 font-medium">1re catégorie</td>
              <td className="border border-stone-300 px-3 py-2">Plus de 1 500 personnes</td>
              <td className="border border-stone-300 px-3 py-2">Centres commerciaux, stades</td>
              <td className="border border-stone-300 px-3 py-2">SSI catégorie A, sprinklers</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2 font-medium">2e catégorie</td>
              <td className="border border-stone-300 px-3 py-2">701 à 1 500 personnes</td>
              <td className="border border-stone-300 px-3 py-2">Hôtels, cinémas, mosquées</td>
              <td className="border border-stone-300 px-3 py-2">SSI catégorie B, détection</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2 font-medium">3e catégorie</td>
              <td className="border border-stone-300 px-3 py-2">301 à 700 personnes</td>
              <td className="border border-stone-300 px-3 py-2">Restaurants, salles de fêtes</td>
              <td className="border border-stone-300 px-3 py-2">Détection, extincteurs, désenfumage</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2 font-medium">4e catégorie</td>
              <td className="border border-stone-300 px-3 py-2">Jusqu&apos;à 300 personnes</td>
              <td className="border border-stone-300 px-3 py-2">Commerces, bureaux</td>
              <td className="border border-stone-300 px-3 py-2">Extincteurs, éclairage de sécurité</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2 font-medium">5e catégorie</td>
              <td className="border border-stone-300 px-3 py-2">Petit effectif</td>
              <td className="border border-stone-300 px-3 py-2">Petits commerces, cabinets</td>
              <td className="border border-stone-300 px-3 py-2">Extincteurs, issue de secours</td>
            </tr>
          </tbody>
        </table>

        <h2>Les équipements de sécurité incendie obligatoires</h2>
        <p>
          <strong>Extincteurs :</strong> Tout ERP doit disposer d&apos;au moins un extincteur pour 200 m² de surface, avec un minimum d&apos;un extincteur par niveau. Les extincteurs à poudre ABC (6 kg) sont les plus polyvalents. Pour les cuisines professionnelles, un extincteur CO2 est recommandé. Les extincteurs doivent être vérifiés annuellement par un organisme agréé. Coût : 300 à 800 MAD l&apos;unité selon le type.
        </p>
        <p>
          <strong>Issues de secours :</strong> Chaque ERP doit disposer d&apos;au moins deux issues de secours indépendantes, signalisées par des blocs autonomes d&apos;éclairage de sécurité (BAES). Les portes coupe-feu doivent s&apos;ouvrir dans le sens de l&apos;évacuation et ne doivent jamais être verrouillées pendant les heures d&apos;ouverture. La largeur minimale est de 90 cm par unité de passage (1 UP = 60 personnes).
        </p>
        <p>
          <strong>Détection et alarme :</strong> Les systèmes de sécurité incendie (SSI) comprennent les détecteurs de fumée, les déclencheurs manuels, la centrale d&apos;alarme et les diffuseurs sonores. Pour les ERP de 1re et 2e catégorie, un SSI avec report d&apos;alarme est obligatoire. Le système doit être installé par un professionnel certifié et vérifié semestriellement.
        </p>
        <p>
          <strong>Désenfumage :</strong> Le désenfumage (naturel ou mécanique) est obligatoire pour les circulations horizontales de plus de 30 m, les cages d&apos;escalier de plus de 3 étages et les locaux de plus de 300 m² sans ouverture directe sur l&apos;extérieur. Il permet d&apos;évacuer les fumées toxiques qui sont la première cause de décès en cas d&apos;incendie.
        </p>

        <h2>Résistance au feu des structures</h2>
        <p>
          Les éléments structuraux doivent présenter une résistance au feu minimale selon la catégorie du bâtiment. Pour un ERP de 1re catégorie, la structure portante doit résister 2 heures au feu (R120). Les planchers doivent être coupe-feu 1 heure (REI 60). Les cloisons de recoupement doivent être coupe-feu 30 minutes minimum. Le béton armé offre naturellement une bonne résistance au feu, mais les structures métalliques nécessitent une protection (peinture intumescente ou flocage).
        </p>

        <h2>Procédure d&apos;inspection et conformité</h2>
        <p>
          La visite de la commission de sécurité (composée de la Protection Civile, de la commune et des services techniques) est obligatoire avant l&apos;ouverture de tout ERP. L&apos;inspection vérifie la conformité aux plans approuvés, le bon fonctionnement des équipements de sécurité, la signalétique d&apos;évacuation et la formation du personnel. Un avis favorable conditionne l&apos;obtention de l&apos;autorisation d&apos;exploiter. Des visites périodiques (annuelles ou triennales selon la catégorie) sont ensuite programmées.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            La sécurité incendie ne doit jamais être traitée comme une formalité administrative. Elle doit être intégrée dès les premières esquisses du projet par l&apos;architecte et validée par un bureau de contrôle agréé. Pour les ERP, prévoyez un budget de 3 à 5 % du coût total pour les équipements de sécurité incendie. Un architecte référencé sur Bati.ma vous garantit une conception conforme aux normes de la Protection Civile.
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
