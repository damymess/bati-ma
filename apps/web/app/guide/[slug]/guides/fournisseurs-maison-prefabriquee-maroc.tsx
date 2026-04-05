export default function GuideFournisseursPrefab() {
  const faq = [
    { q: "Comment choisir un fournisseur de maison préfabriquée au Maroc ?", a: "Vérifiez cinq critères essentiels : les certifications et normes marocaines (NM), les références de projets réalisés au Maroc avec possibilité de visite, la garantie décennale et l\u0027assurance responsabilité civile professionnelle, la transparence du devis (postes détaillés), et la proximité géographique de l\u0027usine par rapport à votre terrain pour limiter les coûts de transport." },
    { q: "Faut-il préférer un fournisseur local ou un importateur turc/chinois ?", a: "Les fournisseurs locaux offrent une meilleure réactivité, un SAV plus accessible et une connaissance des normes marocaines. Les importateurs turcs et chinois proposent souvent des prix plus bas mais avec des risques : délais de livraison plus longs, conformité aux normes locales à vérifier, et SAV limité. Pour un premier projet, un fournisseur local est généralement plus sûr." },
    { q: "Quelle garantie exiger pour une maison préfabriquée ?", a: "Exigez au minimum : une garantie décennale sur la structure (obligatoire au Maroc), une garantie de parfait achèvement d\u0027un an, et une garantie biennale sur les équipements. Demandez également les PV d\u0027essais (résistance au feu, isolation, parasismique) et vérifiez que le fournisseur dispose d\u0027une assurance responsabilité civile professionnelle valide." },
    { q: "Un fournisseur préfabriqué remplace-t-il l\u0027architecte ?", a: "Non. Au Maroc, le recours à un architecte inscrit à l\u0027Ordre est obligatoire pour toute construction (loi 16-89). Le fournisseur livre la structure, mais l\u0027architecte conçoit les plans, dépose le permis de construire, coordonne les travaux et assure la conformité réglementaire. Certains fournisseurs proposent un service intégré avec un architecte partenaire." },
    { q: "Quels sont les pièges à éviter avec les fournisseurs préfabriqués ?", a: "Les pièges les plus courants : un devis incomplet qui ne mentionne pas le transport, les fondations et les raccordements ; l\u0027absence de garantie décennale écrite ; des matériaux non conformes aux normes NM ; un planning irréaliste sans pénalités de retard ; et le paiement intégral avant livraison. Exigez un contrat détaillé avec un échéancier de paiement lié aux étapes de réalisation." },
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
        <h2>Les fournisseurs de maisons préfabriquées au Maroc en 2026</h2>
        <p>
          Le marché marocain de la construction préfabriquée compte une offre diversifiée de <strong>fournisseurs locaux et
          internationaux</strong>. Entre acteurs industriels marocains, importateurs turcs et fabricants chinois, le choix
          peut sembler complexe. Ce guide recense les principaux fournisseurs actifs au Maroc et vous donne les clés pour
          sélectionner le partenaire le plus fiable pour votre projet.
        </p>

        <h2>Répertoire des principaux fournisseurs</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead><tr className="bg-stone-100"><th className="border border-stone-200 px-3 py-2 text-left">Fournisseur</th><th className="border border-stone-200 px-3 py-2 text-left">Ville</th><th className="border border-stone-200 px-3 py-2 text-left">Spécialité</th><th className="border border-stone-200 px-3 py-2 text-left">Type</th></tr></thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">TGCC Préfa</td><td className="border border-stone-200 px-3 py-2">Casablanca</td><td className="border border-stone-200 px-3 py-2">Béton préfabriqué</td><td className="border border-stone-200 px-3 py-2">Local</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Prefa Maroc</td><td className="border border-stone-200 px-3 py-2">Berrechid / Taroudant</td><td className="border border-stone-200 px-3 py-2">Composants béton</td><td className="border border-stone-200 px-3 py-2">Local</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Woodstock Maroc</td><td className="border border-stone-200 px-3 py-2">Maroc</td><td className="border border-stone-200 px-3 py-2">Maisons bois massif</td><td className="border border-stone-200 px-3 py-2">Local</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Construction Modulaire Maroc</td><td className="border border-stone-200 px-3 py-2">Maroc</td><td className="border border-stone-200 px-3 py-2">Bureaux / maisons modulaires</td><td className="border border-stone-200 px-3 py-2">Local</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">JET Modulaire</td><td className="border border-stone-200 px-3 py-2">Maroc</td><td className="border border-stone-200 px-3 py-2">Construction modulaire</td><td className="border border-stone-200 px-3 py-2">Local</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Focus Project</td><td className="border border-stone-200 px-3 py-2">Maroc</td><td className="border border-stone-200 px-3 py-2">Bases vie / bungalows</td><td className="border border-stone-200 px-3 py-2">Local</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Homebiance</td><td className="border border-stone-200 px-3 py-2">Maroc</td><td className="border border-stone-200 px-3 py-2">Chalets / villas modulaires</td><td className="border border-stone-200 px-3 py-2">Local</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Ecolohome</td><td className="border border-stone-200 px-3 py-2">Maroc</td><td className="border border-stone-200 px-3 py-2">Habitat écologique</td><td className="border border-stone-200 px-3 py-2">Local</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Karmod</td><td className="border border-stone-200 px-3 py-2">Turquie / Maroc</td><td className="border border-stone-200 px-3 py-2">Solutions clé en main</td><td className="border border-stone-200 px-3 py-2">Import</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">LIDA Group</td><td className="border border-stone-200 px-3 py-2">Chine / Maroc</td><td className="border border-stone-200 px-3 py-2">Containers / modulaire</td><td className="border border-stone-200 px-3 py-2">Import</td></tr>
          </tbody>
        </table>

        <h2>Fournisseurs locaux marocains</h2>
        <p>
          Les fournisseurs locaux constituent le choix le plus sûr pour un premier projet préfabriqué. <strong>TGCC Préfa</strong>,
          filiale du groupe TGCC (l&apos;un des plus grands groupes BTP du Maroc), produit des éléments en béton préfabriqué
          de qualité industrielle depuis son usine de Casablanca. <strong>Prefa Maroc</strong>, avec ses deux sites de production
          à Berrechid et Taroudant, couvre l&apos;ensemble du territoire national en composants béton (poutrelles, hourdis,
          prémurs, prédalles).
        </p>
        <p>
          Pour les constructions en bois, <strong>Woodstock Maroc</strong> propose des maisons en bois massif adaptées au
          climat marocain. <strong>Homebiance</strong> se positionne sur le segment haut de gamme avec des chalets et villas
          modulaires au design contemporain. <strong>Ecolohome</strong> cible les projets écologiques avec des solutions à
          faible empreinte carbone.
        </p>
        <p>
          Dans le modulaire industriel, <strong>JET Modulaire</strong> et <strong>Focus Project</strong> proposent des
          solutions de bases vie, bungalows et constructions modulaires pour le résidentiel et le tertiaire.
          <strong> Construction Modulaire Maroc</strong> offre une gamme complète allant des bureaux aux maisons individuelles.
        </p>

        <h2>Fournisseurs internationaux présents au Maroc</h2>
        <p>
          Plusieurs acteurs internationaux ciblent activement le marché marocain. <strong>Karmod</strong>, groupe turc leader
          de la construction préfabriquée, propose des solutions clé en main livrées au Maroc : maisons individuelles,
          bâtiments commerciaux et logements sociaux. Leurs prix sont compétitifs grâce à l&apos;échelle industrielle turque,
          mais les délais de livraison sont plus longs (8–12 semaines de fabrication plus le transport maritime).
        </p>
        <p>
          <strong>LIDA Group</strong>, fabricant chinois, propose des containers transformés et des constructions modulaires
          à des prix très bas. La qualité peut varier et il est indispensable de vérifier la conformité aux normes marocaines
          NM avant toute commande. Le transport depuis la Chine ajoute 4 à 8 semaines au délai et des frais de dédouanement.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Avant de signer avec un fournisseur, <strong>visitez au moins deux réalisations achevées</strong> et interrogez
            les propriétaires sur leur expérience (respect des délais, qualité, SAV). Demandez les PV d&apos;essais et les
            certificats de conformité NM. Sur Bati.ma, consultez les avis vérifiés et comparez les devis de professionnels
            référencés.
          </p>
        </div>

        <h2>Critères de choix d&apos;un fournisseur</h2>
        <p>
          Pour sélectionner le bon fournisseur, évaluez systématiquement ces critères :
        </p>
        <ul>
          <li><strong>Certifications et normes</strong> : le fournisseur doit produire des éléments conformes aux normes marocaines NM. Demandez les PV d&apos;essais (résistance mécanique, thermique, parasismique, feu).</li>
          <li><strong>Références vérifiables</strong> : exigez une liste de projets réalisés au Maroc avec les coordonnées des maîtres d&apos;ouvrage. Visitez au moins deux chantiers terminés.</li>
          <li><strong>Garanties</strong> : garantie décennale sur la structure, garantie biennale sur les équipements, garantie de parfait achèvement d&apos;un an, et assurance RC professionnelle.</li>
          <li><strong>Proximité géographique</strong> : un fournisseur proche de votre terrain réduit considérablement les coûts et délais de transport.</li>
          <li><strong>Capacité de production</strong> : vérifiez que le fournisseur peut tenir les délais annoncés en visitant son usine.</li>
          <li><strong>Service après-vente</strong> : un SAV réactif et accessible est essentiel, surtout pour les fournisseurs internationaux.</li>
        </ul>

        <h2>Les pièges à éviter</h2>
        <p>
          Le marché du préfabriqué au Maroc attire aussi des acteurs peu scrupuleux. Voici les principaux signaux d&apos;alerte :
        </p>
        <ul>
          <li><strong>Devis incomplet</strong> : un prix qui ne détaille pas le transport, les fondations, les raccordements et les finitions cache des surcoûts importants.</li>
          <li><strong>Absence de garantie écrite</strong> : refusez tout fournisseur qui ne formalise pas ses garanties dans le contrat.</li>
          <li><strong>Paiement intégral avant livraison</strong> : n&apos;acceptez jamais de payer plus de 30 % à la commande. L&apos;échéancier doit être lié aux étapes de réalisation.</li>
          <li><strong>Matériaux non conformes</strong> : certains importateurs utilisent des matériaux non certifiés NM. Exigez les certificats avant la commande.</li>
          <li><strong>Planning sans pénalités</strong> : le contrat doit prévoir des pénalités de retard pour protéger le maître d&apos;ouvrage.</li>
        </ul>

        <h2>Certifications à vérifier</h2>
        <p>
          Au Maroc, les produits de construction doivent respecter les <strong>normes marocaines NM</strong> établies par
          l&apos;IMANOR (Institut Marocain de Normalisation). Pour le préfabriqué, les normes clés sont : NM 10.1.008 (béton),
          NM 10.1.009 (acier pour béton armé), les normes parasismiques RPS 2000 et le Règlement Thermique de Construction
          au Maroc (RTCM). Vérifiez que le fournisseur dispose d&apos;un certificat de conformité délivré par un laboratoire
          agréé (LPEE, par exemple).
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
