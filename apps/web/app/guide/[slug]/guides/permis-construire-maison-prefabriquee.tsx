export default function GuidePermisPrefab() {
  const faq = [
    { q: "Faut-il un permis de construire pour une maison préfabriquée au Maroc ?", a: "Oui, absolument. Toute construction permanente au Maroc, qu\u0027elle soit préfabriquée ou traditionnelle, nécessite un permis de construire délivré par la commune. Le dossier doit être établi par un architecte inscrit à l\u0027Ordre et respecter le règlement d\u0027aménagement de la zone. Il n\u0027existe aucune dérogation pour le préfabriqué." },
    { q: "Combien de temps faut-il pour obtenir un permis de construire au Maroc ?", a: "Le délai légal est de 2 mois à compter du dépôt du dossier complet. En pratique, comptez 2 à 6 mois selon la commune, la complexité du projet et la charge de l\u0027agence urbaine. Les dossiers incomplets ou non conformes au plan d\u0027aménagement sont rejetés et doivent être redéposés, ce qui allonge considérablement le délai." },
    { q: "Un architecte est-il obligatoire pour une maison préfabriquée ?", a: "Oui. La loi 16-89 rend obligatoire le recours à un architecte inscrit à l\u0027Ordre des Architectes pour toute construction au Maroc, y compris les maisons préfabriquées. L\u0027architecte conçoit les plans, dépose le permis, coordonne les études techniques et assure le suivi de conformité jusqu\u0027à l\u0027obtention du certificat de conformité." },
    { q: "Quelles normes parasismiques s\u0027appliquent aux maisons préfabriquées ?", a: "Les maisons préfabriquées doivent respecter le RPS 2000 (Règlement de Construction Parasismique), identique à celui des constructions traditionnelles. La note de calcul doit être adaptée au système constructif choisi (structure métallique, béton préfabriqué, bois) et validée par un bureau d\u0027études agréé. Le Maroc est classé en 3 zones sismiques et les exigences varient selon la localisation." },
    { q: "Peut-on installer une maison préfabriquée sans permis en zone rurale ?", a: "Non. Même en zone rurale, toute construction permanente nécessite un permis de construire. Les constructions sans permis sont passibles de sanctions (amendes, démolition). En zone rurale non couverte par un plan d\u0027aménagement, le permis est délivré par le gouverneur de la province après avis de l\u0027agence urbaine." },
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
        <h2>Permis de construire pour maison préfabriquée au Maroc : le guide complet</h2>
        <p>
          Contrairement à une idée reçue, une maison préfabriquée au Maroc est soumise aux <strong>mêmes obligations
          réglementaires</strong> qu&apos;une construction traditionnelle. Le permis de construire est obligatoire, le
          recours à un architecte est imposé par la loi, et les normes parasismiques et thermiques s&apos;appliquent
          intégralement. Ce guide détaille l&apos;ensemble des démarches administratives spécifiques au préfabriqué.
        </p>

        <h2>Le préfabriqué suit les mêmes règles que le traditionnel</h2>
        <p>
          Au Maroc, la réglementation urbanistique ne distingue pas le mode constructif. Que vous construisiez en
          parpaings, en béton préfabriqué ou en ossature métallique, les exigences sont identiques :
        </p>
        <ul>
          <li>Permis de construire obligatoire (loi 12-90 relative à l&apos;urbanisme)</li>
          <li>Plans signés par un architecte inscrit à l&apos;Ordre (loi 16-89)</li>
          <li>Respect du plan d&apos;aménagement de la zone (hauteur, COS, CES, reculs)</li>
          <li>Conformité au RPS 2000 (règlement parasismique)</li>
          <li>Conformité au RTCM (règlement thermique de construction)</li>
          <li>Certificat de conformité à l&apos;achèvement des travaux</li>
        </ul>

        <h2>Le rôle obligatoire de l&apos;architecte</h2>
        <p>
          La loi 16-89 impose le recours à un <strong>architecte inscrit à l&apos;Ordre des Architectes du Maroc</strong>
          pour toute construction. Son rôle est multiple :
        </p>
        <ul>
          <li><strong>Conception des plans</strong> : l&apos;architecte adapte le projet préfabriqué au terrain, au règlement d&apos;urbanisme et aux souhaits du client.</li>
          <li><strong>Dépôt du permis</strong> : il constitue et dépose le dossier complet auprès de la commune.</li>
          <li><strong>Coordination technique</strong> : il travaille avec le fournisseur préfabriqué et le bureau d&apos;études structure pour assurer la cohérence du projet.</li>
          <li><strong>Suivi de conformité</strong> : il vérifie que la construction respecte les plans autorisés et délivre l&apos;attestation nécessaire au certificat de conformité.</li>
        </ul>
        <p>
          Les honoraires d&apos;architecte représentent généralement <strong>5 à 8 % du coût total</strong> de construction.
          Ce pourcentage est négociable mais ne doit pas être sacrifié : un bon architecte vous fait économiser bien
          davantage en évitant les erreurs et en optimisant le projet.
        </p>

        <h2>Documents requis pour le permis de construire</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead><tr className="bg-stone-100"><th className="border border-stone-200 px-3 py-2 text-left">Document</th><th className="border border-stone-200 px-3 py-2 text-left">Description</th><th className="border border-stone-200 px-3 py-2 text-left">Obligatoire</th></tr></thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">Titre foncier ou certificat de propriété</td><td className="border border-stone-200 px-3 py-2">Preuve de propriété du terrain délivrée par la Conservation Foncière</td><td className="border border-stone-200 px-3 py-2">Oui</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Plans d&apos;architecture signés</td><td className="border border-stone-200 px-3 py-2">Plans de masse, façades, coupes et plans d&apos;étages signés par l&apos;architecte</td><td className="border border-stone-200 px-3 py-2">Oui</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Note de calcul structure</td><td className="border border-stone-200 px-3 py-2">Calculs de résistance adaptés au système préfabriqué, signés par un BET agréé</td><td className="border border-stone-200 px-3 py-2">Oui</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Plan de béton armé</td><td className="border border-stone-200 px-3 py-2">Plans de ferraillage des fondations et de la structure</td><td className="border border-stone-200 px-3 py-2">Oui</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Étude géotechnique</td><td className="border border-stone-200 px-3 py-2">Analyse du sol pour dimensionner les fondations</td><td className="border border-stone-200 px-3 py-2">Recommandé</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Fiche technique du système constructif</td><td className="border border-stone-200 px-3 py-2">Documentation du fournisseur préfabriqué (PV d&apos;essais, certifications)</td><td className="border border-stone-200 px-3 py-2">Oui (préfabriqué)</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">CIN du propriétaire</td><td className="border border-stone-200 px-3 py-2">Copie de la carte d&apos;identité nationale ou du passeport</td><td className="border border-stone-200 px-3 py-2">Oui</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Attestation de l&apos;architecte</td><td className="border border-stone-200 px-3 py-2">Engagement de l&apos;architecte à suivre les travaux</td><td className="border border-stone-200 px-3 py-2">Oui</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Plan topographique</td><td className="border border-stone-200 px-3 py-2">Relevé du terrain par un géomètre agréé</td><td className="border border-stone-200 px-3 py-2">Oui</td></tr>
          </tbody>
        </table>

        <h2>Procédure de dépôt et d&apos;instruction</h2>
        <p>
          Le dossier complet est déposé auprès du <strong>service d&apos;urbanisme de la commune</strong> où se situe le
          terrain. L&apos;instruction suit un parcours administratif précis :
        </p>
        <ul>
          <li><strong>Dépôt du dossier</strong> : remise contre récépissé au guichet de la commune. Le dossier doit être complet pour être recevable.</li>
          <li><strong>Avis de l&apos;agence urbaine</strong> : la commune transmet le dossier à l&apos;agence urbaine qui vérifie la conformité au plan d&apos;aménagement et émet un avis (favorable, favorable avec réserves ou défavorable).</li>
          <li><strong>Commission technique</strong> : pour les projets importants, une commission composée de représentants de la commune, de l&apos;agence urbaine, de la protection civile et des services techniques examine le dossier.</li>
          <li><strong>Décision du président de la commune</strong> : sur la base des avis recueillis, le président de la commune délivre ou refuse le permis de construire.</li>
          <li><strong>Délai légal</strong> : la commune dispose de 2 mois pour statuer. Passé ce délai, le silence vaut acceptation (en théorie, rarement appliqué en pratique).</li>
        </ul>

        <h2>Délais réalistes en 2026</h2>
        <p>
          En pratique, les délais varient considérablement selon la localisation et la complexité du projet :
        </p>
        <ul>
          <li><strong>Grandes villes (Casablanca, Rabat, Marrakech)</strong> : 3 à 6 mois, en raison de la charge des agences urbaines et des commissions techniques.</li>
          <li><strong>Villes moyennes (Kénitra, Settat, Meknès)</strong> : 2 à 4 mois, avec des procédures généralement plus fluides.</li>
          <li><strong>Zones rurales</strong> : 2 à 5 mois, le permis étant délivré par le gouverneur après avis de l&apos;agence urbaine.</li>
        </ul>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            La <strong>note de calcul adaptée au système constructif préfabriqué</strong> est le document le plus
            spécifique à votre projet. Assurez-vous que votre bureau d&apos;études structure (BET) a l&apos;expérience
            des systèmes préfabriqués et travaille en coordination avec le fournisseur. Une note de calcul mal
            adaptée est la première cause de rejet par l&apos;agence urbaine. Trouvez un architecte expérimenté
            en préfabriqué sur Bati.ma.
          </p>
        </div>

        <h2>Spécificités préfabriqué dans le dossier de permis</h2>
        <p>
          Le dossier de permis pour une maison préfabriquée diffère du dossier classique sur quelques points techniques :
        </p>
        <ul>
          <li><strong>Note de calcul adaptée</strong> : le BET doit dimensionner la structure selon le système constructif préfabriqué choisi (acier, béton précontraint, bois lamellé-collé), et non selon les règles de la maçonnerie traditionnelle.</li>
          <li><strong>Fiche technique du fournisseur</strong> : les PV d&apos;essais (résistance au feu, isolation thermique, parasismique) et les certifications NM des éléments préfabriqués doivent accompagner le dossier.</li>
          <li><strong>Plan de montage</strong> : un descriptif des phases de montage peut être demandé par l&apos;agence urbaine pour vérifier la faisabilité technique.</li>
          <li><strong>Assemblages et jonctions</strong> : les détails d&apos;assemblage entre éléments préfabriqués et la liaison avec les fondations doivent être clairement documentés dans les plans de structure.</li>
        </ul>

        <h2>RPS 2000 et RTCM : les normes à respecter</h2>
        <p>
          Le <strong>RPS 2000</strong> (Règlement de Construction Parasismique) classe le Maroc en trois zones de
          sismicité croissante. Chaque zone impose des exigences structurelles spécifiques que le système préfabriqué
          doit satisfaire. Les structures légères (acier, bois) sont souvent mieux adaptées aux zones à forte sismicité
          grâce à leur flexibilité et leur faible masse.
        </p>
        <p>
          Le <strong>RTCM</strong> (Règlement Thermique de Construction au Maroc) impose des performances d&apos;isolation
          minimales selon la zone climatique. Les systèmes préfabriqués modernes (SIP, ossature bois isolée, double
          paroi béton) offrent généralement des performances thermiques supérieures aux exigences du RTCM, ce qui
          constitue un argument en faveur du préfabriqué auprès de l&apos;agence urbaine.
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
