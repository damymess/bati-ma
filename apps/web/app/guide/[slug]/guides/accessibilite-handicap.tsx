export default function GuideAccessibiliteHandicap() {
  const faq = [
    { q: "L\u2019accessibilité PMR est-elle obligatoire pour les constructions neuves au Maroc ?", a: "Oui, la loi 10-03 relative aux accessibilités impose que tout bâtiment recevant du public (ERP) et tout immeuble d\u2019habitation collective neuf intègre des aménagements pour les personnes à mobilité réduite. Les maisons individuelles ne sont pas soumises à cette obligation, mais il est fortement recommandé d\u2019y penser dès la conception." },
    { q: "Quels sont les aménagements PMR obligatoires dans un immeuble au Maroc ?", a: "Les aménagements obligatoires comprennent : une rampe d\u2019accès (pente max 5 %), un ascenseur à partir du R+4, des portes d\u2019une largeur minimale de 90 cm, des sanitaires adaptés au rez-de-chaussée, un parking réservé (3 % minimum des places) et une signalétique tactile et visuelle." },
    { q: "Quelles sanctions en cas de non-respect des normes PMR au Maroc ?", a: "Le non-respect des normes d\u2019accessibilité peut entraîner le refus de délivrance du certificat de conformité, des amendes de 10 000 à 100 000 MAD et l\u2019obligation de mise en conformité à la charge du promoteur. L\u2019architecte engage également sa responsabilité professionnelle." },
    { q: "Combien coûte la mise en accessibilité PMR d\u2019un bâtiment existant au Maroc ?", a: "La mise en conformité PMR d\u2019un bâtiment existant coûte entre 50 000 et 500 000 MAD selon l\u2019ampleur des travaux. L\u2019ajout d\u2019une rampe revient à 5 000-25 000 MAD, un ascenseur PMR à 200 000-500 000 MAD. Pour une construction neuve, le surcoût est de seulement 1 à 3 % du budget total." },
    { q: "Est-ce que les maisons individuelles doivent respecter les normes PMR au Maroc ?", a: "Non, les maisons individuelles ne sont pas soumises à l\u2019obligation légale d\u2019accessibilité PMR au Maroc. Seuls les ERP, immeubles collectifs et bâtiments administratifs sont concernés. Il est toutefois recommandé d\u2019intégrer l\u2019accessibilité dès la conception, notamment pour les personnes âgées." },
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
        <h2>Quel est le cadre juridique de l&apos;accessibilité PMR au Maroc ?</h2>
        <p>
          L&apos;accessibilité des personnes à mobilité réduite (PMR) dans les bâtiments au Maroc est encadrée par la <strong>loi 10-03 relative aux accessibilités</strong>, promulguée en 2003 et complétée par ses décrets d&apos;application. Cette loi vise à garantir l&apos;accès des personnes en situation de handicap aux espaces publics, aux bâtiments administratifs, aux commerces et aux immeubles d&apos;habitation collective. Au Maroc, environ <strong>6,8 % de la population</strong> vit avec un handicap selon le dernier recensement, ce qui représente plus de 2,5 millions de personnes concernées.
        </p>
        <p>
          La loi 10-03 s&apos;inscrit dans le cadre de la <strong>Convention des Nations Unies relative aux droits des personnes handicapées</strong>, ratifiée par le Maroc en 2009. Elle impose aux maîtres d&apos;ouvrage et aux architectes d&apos;intégrer les normes d&apos;accessibilité dès la phase de conception.
        </p>

        <h2>Quelles sont les normes techniques d&apos;accessibilité PMR ?</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead><tr className="bg-stone-100"><th className="border border-stone-200 px-3 py-2 text-left">Aménagement</th><th className="border border-stone-200 px-3 py-2 text-left">Norme</th><th className="border border-stone-200 px-3 py-2 text-left">Coût estimé</th></tr></thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">Rampe d&apos;accès</td><td className="border border-stone-200 px-3 py-2">Pente max 5 %, largeur min 1,40 m, palier de repos tous les 10 m</td><td className="border border-stone-200 px-3 py-2">5 000 – 25 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Ascenseur PMR</td><td className="border border-stone-200 px-3 py-2">Cabine min 1,10 × 1,40 m, commandes à 1,30 m max, signalisation sonore</td><td className="border border-stone-200 px-3 py-2">200 000 – 500 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Portes élargies</td><td className="border border-stone-200 px-3 py-2">Largeur min 90 cm, poignée à bec-de-cane, seuil &lt; 2 cm</td><td className="border border-stone-200 px-3 py-2">1 500 – 4 000 MAD/porte</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Sanitaires adaptés</td><td className="border border-stone-200 px-3 py-2">Surface min 1,50 × 2,10 m, barres d&apos;appui, WC surélevé</td><td className="border border-stone-200 px-3 py-2">8 000 – 20 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Parking réservé</td><td className="border border-stone-200 px-3 py-2">3 % des places min, largeur 3,30 m, signalétique au sol</td><td className="border border-stone-200 px-3 py-2">2 000 – 5 000 MAD/place</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Guidage podotactile</td><td className="border border-stone-200 px-3 py-2">Bandes au sol pour déficients visuels, contraste de couleur</td><td className="border border-stone-200 px-3 py-2">150 – 400 MAD/ml</td></tr>
          </tbody>
        </table>

        <h2>Quels bâtiments sont concernés par l&apos;obligation PMR ?</h2>
        <p>
          La réglementation distingue plusieurs catégories de bâtiments soumis aux normes d&apos;accessibilité :
        </p>
        <ul>
          <li><strong>ERP (Établissements Recevant du Public)</strong> : commerces, hôtels, restaurants, cliniques, écoles, mosquées — accessibilité obligatoire sans exception</li>
          <li><strong>Immeubles d&apos;habitation collective</strong> : parties communes accessibles (hall, ascenseur, parking), 10 % des logements adaptables</li>
          <li><strong>Bâtiments administratifs</strong> : administrations publiques, tribunaux, services communaux — accessibilité totale exigée</li>
          <li><strong>Espaces publics</strong> : trottoirs (largeur 1,40 m min, abaissement aux passages piétons), parcs et jardins publics</li>
          <li><strong>Maisons individuelles</strong> : non obligatoire mais recommandé, surtout pour les personnes âgées ou en prévision</li>
        </ul>

        <h2>Quel est le rôle de l&apos;architecte dans l&apos;accessibilité ?</h2>
        <p>
          L&apos;architecte inscrit à l&apos;Ordre (loi 16-89) a une <strong>responsabilité directe</strong> dans le respect des normes PMR. Dès la phase d&apos;avant-projet, il doit intégrer les circulations accessibles, les dimensions réglementaires et les équipements adaptés. Le dossier de permis de construire doit inclure un <strong>plan d&apos;accessibilité</strong> détaillant les aménagements prévus.
        </p>
        <p>
          Lors du suivi de chantier, l&apos;architecte vérifie la conformité des réalisations : pentes de rampe, largeurs de passage, hauteur des interrupteurs (entre 0,90 et 1,30 m), positionnement des barres d&apos;appui. Le certificat de conformité ne peut être délivré sans validation des normes PMR pour les ERP.
        </p>

        <h2>Combien coûte la mise en accessibilité d&apos;un bâtiment ?</h2>
        <p>
          Pour une construction neuve, l&apos;intégration des normes PMR représente un <strong>surcoût de 1 à 3 %</strong> du budget total, soit un investissement minime par rapport au coût d&apos;une mise en conformité ultérieure (5 à 10 fois plus cher). Pour un immeuble R+4 de 20 appartements, le budget accessibilité se situe entre <strong>80 000 et 200 000 MAD</strong>, incluant rampe, ascenseur adapté, sanitaires et signalétique.
        </p>
        <p>
          Pour la rénovation d&apos;un bâtiment existant, les coûts peuvent varier de <strong>50 000 à 500 000 MAD</strong> selon l&apos;ampleur des travaux nécessaires : ajout d&apos;un ascenseur, élargissement des portes, création de sanitaires adaptés ou installation de rampes.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Intégrez l&apos;accessibilité dès la conception de votre projet : le surcoût est minime (1-3 %) et vous évitez les refus de certificat de conformité. Sur <strong>Bati.ma</strong>, filtrez les architectes par spécialité pour trouver ceux qui maîtrisent les normes PMR et la conception universelle.
          </p>
        </div>

        <h2>Quelles sont les évolutions réglementaires à venir ?</h2>
        <p>
          Le Maroc renforce progressivement son cadre réglementaire en matière d&apos;accessibilité. Le <strong>Plan National pour l&apos;Intégration des Personnes Handicapées</strong> prévoit l&apos;accessibilité de tous les bâtiments publics d&apos;ici 2030. Les grands projets liés au <strong>Mondial 2030</strong> (stades, gares, hôtels) intègrent d&apos;ores et déjà les standards internationaux d&apos;accessibilité universelle, créant un effet d&apos;entraînement sur l&apos;ensemble du secteur BTP.
        </p>
        <p>
          Les architectes marocains sont de plus en plus formés au <strong>design universel</strong>, une approche qui vise à concevoir des espaces utilisables par tous, indépendamment de l&apos;âge ou du handicap. Cette tendance transforme l&apos;accessibilité d&apos;une contrainte réglementaire en véritable valeur ajoutée architecturale.
        </p>
      </div>
      <section className="mt-10">
        <h2 className="text-xl font-bold text-stone-900 mb-5">Questions fréquentes</h2>
        <div className="space-y-4">
          {faq.map((f) => (
            <details key={f.q} className="group border border-stone-200 rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between px-4 py-3 cursor-pointer text-sm font-medium text-stone-800 hover:bg-stone-50">{f.q}<span className="text-stone-400 group-open:rotate-180 transition-transform">{"\u2193"}</span></summary>
              <div className="px-4 pb-4 pt-1 text-sm text-stone-600 leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
