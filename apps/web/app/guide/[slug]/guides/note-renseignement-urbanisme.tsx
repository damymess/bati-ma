export default function GuideNoteRenseignement() {
  const faq = [
    {
      q: "La note de renseignement urbanistique est-elle payante ?",
      a: "Non, la note de renseignement urbanistique est entièrement gratuite au Maroc. Elle est délivrée par l&apos;agence urbaine compétente sans aucun frais. Seuls les frais de déplacement ou de constitution du dossier (copies, plans) sont à votre charge.",
    },
    {
      q: "Combien de temps faut-il pour obtenir une note de renseignement ?",
      a: "Le délai légal est de 15 jours ouvrables à compter du dépôt du dossier complet auprès de l&apos;agence urbaine. En pratique, ce délai peut varier entre 10 et 30 jours selon la charge de travail de l&apos;agence et la complexité du terrain (zone urbaine, rurale, ou zone d&apos;extension).",
    },
    {
      q: "Quelle est la différence entre COS et CES ?",
      a: "Le COS (Coefficient d&apos;Occupation du Sol) définit la surface totale constructible rapportée à la surface du terrain (tous étages confondus). Le CES (Coefficient d&apos;Emprise au Sol) indique la part maximale du terrain pouvant être couverte par la construction au sol. Par exemple, un CES de 60 % sur un terrain de 200 m² signifie que l&apos;emprise au sol ne peut dépasser 120 m².",
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
        <h2>Qu&apos;est-ce que la note de renseignement urbanistique ?</h2>
        <p>
          La note de renseignement urbanistique (NRU) est un document administratif indispensable avant tout projet de construction au Maroc. Délivrée par l&apos;agence urbaine, elle informe le propriétaire ou l&apos;acquéreur d&apos;un terrain sur les règles d&apos;urbanisme applicables à la parcelle : zonage, hauteur maximale autorisée, coefficients d&apos;occupation (COS) et d&apos;emprise au sol (CES), servitudes et contraintes éventuelles. C&apos;est la première étape avant de mandater un architecte ou de déposer une demande de permis de construire.
        </p>
        <p>
          Au Maroc, les règles d&apos;urbanisme sont encadrées par la loi 12-90 relative à l&apos;urbanisme et la loi 25-90 sur les lotissements. Chaque commune dispose d&apos;un plan d&apos;aménagement qui fixe les règles de constructibilité. La note de renseignement permet de connaître précisément ces règles pour votre terrain.
        </p>

        <h2>Les informations contenues dans la note de renseignement</h2>
        <p>
          La NRU fournit des données essentielles pour dimensionner votre projet. Voici les principaux paramètres communiqués :
        </p>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-300 px-3 py-2 text-left">Paramètre</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Description</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Exemple courant</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-300 px-3 py-2 font-medium">Zonage</td>
              <td className="border border-stone-300 px-3 py-2">Type de zone (résidentielle, commerciale, industrielle, agricole)</td>
              <td className="border border-stone-300 px-3 py-2">Zone résidentielle R+2</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2 font-medium">CES</td>
              <td className="border border-stone-300 px-3 py-2">Coefficient d&apos;emprise au sol maximal</td>
              <td className="border border-stone-300 px-3 py-2">50 % à 70 %</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2 font-medium">COS</td>
              <td className="border border-stone-300 px-3 py-2">Coefficient d&apos;occupation du sol</td>
              <td className="border border-stone-300 px-3 py-2">1,5 à 3</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2 font-medium">Hauteur maximale</td>
              <td className="border border-stone-300 px-3 py-2">Nombre d&apos;étages et hauteur en mètres</td>
              <td className="border border-stone-300 px-3 py-2">R+2 (11,80 m)</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2 font-medium">Reculements</td>
              <td className="border border-stone-300 px-3 py-2">Distances minimales par rapport aux limites</td>
              <td className="border border-stone-300 px-3 py-2">3 m en façade, 0 m latéral</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2 font-medium">Servitudes</td>
              <td className="border border-stone-300 px-3 py-2">Contraintes particulières (passage, vue, réseau)</td>
              <td className="border border-stone-300 px-3 py-2">Servitude ONEE ou voirie</td>
            </tr>
          </tbody>
        </table>

        <h2>Procédure d&apos;obtention de la note de renseignement</h2>
        <p>
          La demande de note de renseignement se dépose auprès de l&apos;agence urbaine dont dépend votre terrain. Voici les étapes à suivre :
        </p>
        <p>
          <strong>1. Constitution du dossier :</strong> Préparez une demande écrite adressée au directeur de l&apos;agence urbaine, accompagnée d&apos;une copie du titre foncier ou du certificat de propriété, d&apos;un plan de situation et d&apos;un plan cadastral. Si le terrain n&apos;est pas titré, joignez une attestation administrative et un plan topographique.
        </p>
        <p>
          <strong>2. Dépôt du dossier :</strong> Déposez le dossier au guichet de l&apos;agence urbaine. Un récépissé de dépôt vous est remis avec un numéro de suivi. Certaines agences urbaines proposent désormais un dépôt en ligne via la plateforme Rokhas.ma.
        </p>
        <p>
          <strong>3. Étude et traitement :</strong> L&apos;agence vérifie la conformité du terrain avec le plan d&apos;aménagement en vigueur. Elle consulte le plan de zonage, les servitudes et les projets d&apos;infrastructure à proximité.
        </p>
        <p>
          <strong>4. Délivrance :</strong> La note est remise dans un délai de 15 jours ouvrables. Elle est valable pour une durée d&apos;un an à compter de sa date de délivrance.
        </p>

        <h2>Les agences urbaines au Maroc</h2>
        <p>
          Le Maroc compte 31 agences urbaines réparties sur tout le territoire. Chaque agence couvre une ou plusieurs préfectures/provinces. Les principales agences sont celles de Casablanca, Rabat-Salé, Marrakech, Fès, Tanger-Tétouan et Agadir. L&apos;agence urbaine est l&apos;interlocuteur principal pour toute question d&apos;urbanisme, de permis de construire et de conformité réglementaire.
        </p>
        <p>
          Depuis 2020, la digitalisation des services a permis de simplifier les démarches. La plateforme nationale Rokhas.ma centralise les demandes d&apos;autorisations d&apos;urbanisme et facilite le suivi en ligne. Néanmoins, la note de renseignement reste parfois traitée de manière distincte selon les agences.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Avant d&apos;acheter un terrain au Maroc, exigez toujours la note de renseignement urbanistique. C&apos;est un document gratuit qui vous évitera de mauvaises surprises : terrain non constructible, hauteur limitée, ou servitude cachée. Un architecte inscrit à l&apos;Ordre peut vous accompagner dans cette démarche et interpréter les résultats pour adapter votre projet. Consultez l&apos;annuaire Bati.ma pour trouver un architecte dans votre ville.
          </p>
        </div>

        <h2>Pourquoi la note de renseignement est indispensable</h2>
        <p>
          Ne jamais acheter un terrain sans note de renseignement : c&apos;est la règle d&apos;or de l&apos;immobilier au Maroc. Sans ce document, vous risquez de découvrir trop tard que votre terrain est situé en zone non aedificandi (inconstructible), qu&apos;une voie express est prévue à travers votre parcelle, ou que la hauteur maximale autorisée ne permet pas le projet que vous envisagiez. La NRU est aussi un outil de négociation : elle permet d&apos;évaluer le potentiel réel du terrain et d&apos;ajuster le prix d&apos;achat en conséquence.
        </p>
        <p>
          Pour les architectes et les bureaux d&apos;études, la note de renseignement est le point de départ de toute conception. Elle détermine l&apos;enveloppe constructible et les contraintes à respecter. Un projet qui ne respecte pas les paramètres de la NRU sera systématiquement refusé lors de l&apos;instruction du permis de construire par la commune.
        </p>
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
