export default function GuidePrefabMRE() {
  const faq = [
    { q: "Comment gérer un projet de construction préfabriquée depuis l\u0027étranger ?", a: "La gestion à distance repose sur trois piliers : une procuration notariée au Maroc pour les démarches administratives, un architecte de confiance qui coordonne le projet et vous envoie des rapports photo/vidéo hebdomadaires, et un contrat détaillé avec le fournisseur incluant un échéancier de paiement lié aux étapes vérifiables. Les visioconférences régulières et le suivi photo permettent de suivre l\u0027avancement en temps réel." },
    { q: "Quel financement pour un MRE qui construit au Maroc ?", a: "Les MRE peuvent accéder aux crédits immobiliers marocains avec un apport minimum de 20 à 30 %. Plusieurs banques marocaines ont des agences en Europe (Banque Populaire, Attijariwafa Bank, BMCE). Les transferts d\u0027argent sont facilités par les accords bilatéraux. En 2026, les MRE bénéficient d\u0027une exonération de 5 ans sur les droits d\u0027enregistrement pour leur première acquisition immobilière au Maroc." },
    { q: "Faut-il être présent au Maroc pour obtenir le permis de construire ?", a: "Non, une procuration notariée (légalisée par le consulat du Maroc dans votre pays de résidence) permet à un mandataire de déposer et suivre le dossier de permis de construire en votre nom. L\u0027architecte peut généralement gérer l\u0027ensemble des démarches administratives avec cette procuration." },
    { q: "Combien de temps faut-il pour construire une maison préfabriquée en tant que MRE ?", a: "Le calendrier type est de 8 à 12 mois au total : 1–2 mois pour les démarches administratives (procuration, permis), 2–3 mois pour l\u0027obtention du permis de construire, 1–2 mois pour la fabrication en usine (en parallèle des fondations), et 1–2 mois pour le montage et les finitions. Cela reste nettement plus court que les 18–24 mois nécessaires pour une construction traditionnelle gérée à distance." },
    { q: "Quels documents un MRE doit-il préparer depuis l\u0027étranger ?", a: "Les documents essentiels sont : une copie de la CIN ou du passeport marocain, une procuration notariée légalisée par le consulat, le titre foncier ou le compromis de vente du terrain, un justificatif de domicile à l\u0027étranger, les trois derniers bulletins de salaire (si financement bancaire), et les relevés de compte des 6 derniers mois. Tous les documents en langue étrangère doivent être traduits en arabe par un traducteur assermenté." },
  ];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="prose-content">
        <h2>Maison préfabriquée pour MRE : construire au Maroc depuis l&apos;étranger</h2>
        <p>
          Pour les <strong>Marocains Résidant à l&apos;Étranger (MRE)</strong>, construire une maison au Maroc représente
          souvent un projet de vie. La construction préfabriquée offre des avantages considérables pour les MRE : des
          <strong> délais réduits</strong> (3–4 mois de chantier contre 12–18 mois en traditionnel), un <strong>budget maîtrisé</strong> dès
          la commande et un processus plus facile à superviser à distance. Ce guide détaille chaque étape pour réussir
          votre projet depuis l&apos;étranger.
        </p>

        <h2>Pourquoi le préfabriqué est idéal pour les MRE</h2>
        <p>
          La construction traditionnelle à distance est une source majeure de stress pour les MRE : chantiers qui s&apos;éternisent,
          dépassements de budget, qualité impossible à contrôler sans présence quotidienne. Le préfabriqué résout ces
          problèmes fondamentaux :
        </p>
        <ul>
          <li><strong>Rapidité</strong> : le chantier sur site ne dure que 4 à 8 semaines. Vous pouvez planifier votre projet autour d&apos;un seul voyage au Maroc.</li>
          <li><strong>Prix fixe</strong> : le devis du fournisseur est ferme. Pas de surprises liées aux retards, intempéries ou pénuries de matériaux.</li>
          <li><strong>Qualité contrôlée</strong> : la fabrication en usine garantit une qualité constante, indépendante de la compétence variable des ouvriers de chantier.</li>
          <li><strong>Suivi simplifié</strong> : le nombre d&apos;intervenants est réduit, les étapes sont prévisibles et documentables par photo et vidéo.</li>
          <li><strong>Planification pendant les vacances</strong> : vous pouvez superviser le montage pendant vos congés d&apos;été au Maroc.</li>
        </ul>

        <h2>Les étapes du projet depuis l&apos;étranger</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead><tr className="bg-stone-100"><th className="border border-stone-200 px-3 py-2 text-left">Étape</th><th className="border border-stone-200 px-3 py-2 text-left">Depuis l&apos;étranger</th><th className="border border-stone-200 px-3 py-2 text-left">Sur place</th></tr></thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">Acquisition du terrain</td><td className="border border-stone-200 px-3 py-2">Recherche en ligne, procuration pour compromis</td><td className="border border-stone-200 px-3 py-2">Visite, signature acte définitif</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Choix de l&apos;architecte</td><td className="border border-stone-200 px-3 py-2">Consultation profils Bati.ma, visioconférence</td><td className="border border-stone-200 px-3 py-2">Rencontre en personne (recommandé)</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Plans et permis</td><td className="border border-stone-200 px-3 py-2">Validation des plans par visio, procuration pour dépôt</td><td className="border border-stone-200 px-3 py-2">Non requis (architecte gère)</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Choix du fournisseur</td><td className="border border-stone-200 px-3 py-2">Comparaison devis, visite virtuelle usine</td><td className="border border-stone-200 px-3 py-2">Visite usine et réalisations</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Fabrication en usine</td><td className="border border-stone-200 px-3 py-2">Suivi photo/vidéo hebdomadaire</td><td className="border border-stone-200 px-3 py-2">Non requis</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Fondations</td><td className="border border-stone-200 px-3 py-2">Suivi par architecte, rapports photo</td><td className="border border-stone-200 px-3 py-2">Non requis</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Montage et finitions</td><td className="border border-stone-200 px-3 py-2">Visioconférence quotidienne pendant montage</td><td className="border border-stone-200 px-3 py-2">Présence recommandée pour réception</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Réception des travaux</td><td className="border border-stone-200 px-3 py-2">Procuration possible mais déconseillé</td><td className="border border-stone-200 px-3 py-2">Présence fortement recommandée</td></tr>
          </tbody>
        </table>

        <h2>Financement pour les MRE</h2>
        <p>
          Les MRE disposent de plusieurs options de financement pour leur projet de construction préfabriquée au Maroc :
        </p>
        <ul>
          <li><strong>Crédit immobilier marocain</strong> : les banques marocaines (Banque Populaire, Attijariwafa Bank, BMCE Bank of Africa) proposent des crédits dédiés aux MRE avec un apport minimum de 20 à 30 %. Les taux en 2026 oscillent entre 4,5 et 6 %.</li>
          <li><strong>Agences bancaires en Europe</strong> : la Banque Populaire et Attijariwafa Bank disposent d&apos;agences en France, Belgique, Espagne, Italie et aux Pays-Bas pour faciliter les démarches.</li>
          <li><strong>Exonération fiscale</strong> : les MRE bénéficient d&apos;une exonération de 5 ans sur les droits d&apos;enregistrement pour leur première acquisition immobilière au Maroc.</li>
          <li><strong>Transferts de fonds</strong> : les virements depuis l&apos;étranger sont facilités et les devises convertibles librement en dirhams pour les projets immobiliers.</li>
        </ul>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Établissez une <strong>procuration notariée détaillée</strong> auprès du consulat du Maroc dans votre pays
            de résidence. Précisez les actes autorisés : dépôt de permis, signature de contrats, suivi de chantier
            et réception des travaux. Choisissez un mandataire de confiance (proche, architecte ou avocat) et fixez
            des limites financières claires. Sur Bati.ma, trouvez des architectes habitués à travailler avec les MRE.
          </p>
        </div>

        <h2>La gestion à distance en pratique</h2>
        <p>
          Pour suivre efficacement votre chantier depuis l&apos;étranger, mettez en place un <strong>protocole de communication
          structuré</strong> avec votre architecte et votre fournisseur :
        </p>
        <ul>
          <li><strong>Rapports photo hebdomadaires</strong> : demandez des photos datées de l&apos;avancement, prises depuis des angles convenus à l&apos;avance.</li>
          <li><strong>Visioconférences régulières</strong> : planifiez un appel vidéo hebdomadaire avec l&apos;architecte et le chef de chantier.</li>
          <li><strong>Échéancier de paiement conditionnel</strong> : liez chaque paiement à une étape vérifiable (fondations terminées, structure montée, finitions achevées).</li>
          <li><strong>Personne de confiance sur place</strong> : un proche ou un ami qui peut visiter le chantier ponctuellement apporte une sécurité supplémentaire.</li>
          <li><strong>Contrat détaillé</strong> : prévoyez des pénalités de retard et des clauses de résiliation en cas de non-conformité.</li>
        </ul>

        <h2>Choisir un architecte pour un projet MRE préfabriqué</h2>
        <p>
          L&apos;architecte est votre interlocuteur principal au Maroc. Pour un projet MRE préfabriqué, privilégiez un
          architecte qui :
        </p>
        <ul>
          <li>A déjà travaillé avec des <strong>clients MRE</strong> et connaît les contraintes de la gestion à distance</li>
          <li>Maîtrise les <strong>systèmes constructifs préfabriqués</strong> (ce n&apos;est pas le cas de tous les architectes)</li>
          <li>Est disponible pour des <strong>visioconférences régulières</strong> aux horaires compatibles avec votre fuseau horaire</li>
          <li>Peut fournir un <strong>suivi photo/vidéo structuré</strong> du chantier</li>
          <li>Est inscrit à l&apos;<strong>Ordre des Architectes du Maroc</strong> (vérification obligatoire)</li>
        </ul>

        <h2>Budget type : villa préfabriquée 150 m² pour MRE</h2>
        <p>
          Voici une estimation complète pour une villa préfabriquée de 150 m² en ossature métallique, finitions
          moyennes-hautes, terrain déjà acquis en zone périurbaine :
        </p>
        <ul>
          <li>Structure préfabriquée livrée et montée : <strong>525 000 MAD</strong> (3 500 MAD/m²)</li>
          <li>Fondations et terrassement : <strong>75 000 MAD</strong></li>
          <li>Raccordements : <strong>50 000 MAD</strong></li>
          <li>Finitions intérieures (gamme moyenne-haute) : <strong>180 000 MAD</strong> (1 200 MAD/m²)</li>
          <li>Architecte (6 %) : <strong>50 000 MAD</strong></li>
          <li>Permis, taxes et frais divers : <strong>20 000 MAD</strong></li>
          <li><strong>Total estimé : 900 000 MAD</strong> (environ 82 000 EUR)</li>
        </ul>
        <p>
          Ce budget représente une économie d&apos;environ 25 à 30 % par rapport à une construction traditionnelle
          équivalente, avec un délai réduit de plus de moitié.
        </p>
      </div>
      <section className="mt-10">
        <h2 className="text-xl font-bold text-stone-900 mb-5">Questions fréquentes</h2>
        <div className="space-y-4">
          {faq.map((f) => (
            <details key={f.q} className="group border border-stone-200 rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between px-4 py-3 cursor-pointer text-sm font-medium text-stone-800 hover:bg-stone-50">{f.q}<span className="text-stone-400 group-open:rotate-180 transition-transform">↓</span></summary>
              <div className="px-4 pb-4 pt-1 text-sm text-stone-600 leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
