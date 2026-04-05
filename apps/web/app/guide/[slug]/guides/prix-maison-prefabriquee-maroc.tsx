export default function GuidePrixMaisonPrefabriquee() {
  const faq = [
    { q: "Combien coûte une maison préfabriquée de 100 m² au Maroc ?", a: "Pour une maison préfabriquée de 100 m² au Maroc, comptez entre 280 000 et 550 000 MAD pour la structure seule (hors terrain). En ajoutant les fondations (40 000–80 000 MAD), les raccordements (30 000–60 000 MAD) et les finitions (50 000–150 000 MAD), le budget total se situe entre 400 000 et 840 000 MAD selon le type de construction choisi." },
    { q: "Quels sont les coûts cachés d\u0027une maison préfabriquée ?", a: "Les coûts souvent oubliés incluent : le transport des modules depuis l\u0027usine (15 000–50 000 MAD selon la distance), les fondations et terrassement (400–800 MAD/m²), les raccordements eau/électricité/assainissement (30 000–60 000 MAD), les frais d\u0027architecte obligatoires (5–8 % du coût total) et le permis de construire (environ 1 % de la valeur du bien)." },
    { q: "Peut-on obtenir un crédit immobilier pour une maison préfabriquée au Maroc ?", a: "Oui, les banques marocaines financent les maisons préfabriquées à condition qu\u0027elles soient construites sur un terrain titré, avec un permis de construire en règle et des plans signés par un architecte agréé. Les taux sont identiques à ceux d\u0027une construction classique (4,5 à 6 % en 2026). Certains établissements exigent un apport personnel de 20 à 30 %." },
    { q: "Le préfabriqué est-il vraiment moins cher que le traditionnel ?", a: "En moyenne, une maison préfabriquée coûte 20 à 35 % moins cher qu\u0027une construction traditionnelle de qualité équivalente. L\u0027économie provient principalement de la réduction du temps de main-d\u0027œuvre sur chantier, de la diminution des déchets et de l\u0027optimisation des matériaux en usine. Cependant, les coûts de transport et de fondations peuvent réduire cet écart si le terrain est éloigné ou difficile d\u0027accès." },
    { q: "Comment réduire le coût d\u0027une maison préfabriquée au Maroc ?", a: "Pour optimiser votre budget : choisissez un fournisseur proche de votre terrain pour réduire les frais de transport, optez pour un plan standard plutôt que sur mesure, comparez au moins 3 devis détaillés, privilégiez les finitions que vous pouvez réaliser vous-même (peinture, aménagement extérieur) et négociez un forfait tout inclus avec le fournisseur." },
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
        <h2>Quel budget prévoir pour une maison préfabriquée au Maroc en 2026 ?</h2>
        <p>
          Le prix d&apos;une maison préfabriquée au Maroc varie considérablement selon le <strong>système constructif choisi</strong>,
          la surface habitable, le niveau de finition et la localisation du terrain. En 2026, le marché marocain propose des solutions
          allant de 2 500 à 8 000 MAD/m² pour la structure, auxquels s&apos;ajoutent les coûts de fondations, de raccordements
          et de finitions intérieures. Ce guide détaille chaque poste de dépense pour vous aider à établir un budget réaliste.
        </p>

        <h2>Prix par type de construction préfabriquée</h2>
        <p>
          Le choix du système constructif est le premier facteur déterminant du prix. Voici les cinq principales technologies
          disponibles au Maroc avec leurs caractéristiques tarifaires actualisées pour 2026 :
        </p>
        <table className="w-full text-sm border-collapse my-4">
          <thead><tr className="bg-stone-100"><th className="border border-stone-200 px-3 py-2 text-left">Type</th><th className="border border-stone-200 px-3 py-2 text-left">Prix / m²</th><th className="border border-stone-200 px-3 py-2 text-left">Délai montage</th><th className="border border-stone-200 px-3 py-2 text-left">Durée de vie</th><th className="border border-stone-200 px-3 py-2 text-left">Avantage principal</th></tr></thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">Préfabriqué béton</td><td className="border border-stone-200 px-3 py-2">3 000 – 5 500 MAD</td><td className="border border-stone-200 px-3 py-2">4–8 semaines</td><td className="border border-stone-200 px-3 py-2">50+ ans</td><td className="border border-stone-200 px-3 py-2">Robustesse et inertie thermique</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Ossature métallique</td><td className="border border-stone-200 px-3 py-2">2 800 – 5 000 MAD</td><td className="border border-stone-200 px-3 py-2">3–6 semaines</td><td className="border border-stone-200 px-3 py-2">50+ ans</td><td className="border border-stone-200 px-3 py-2">Légèreté et résistance sismique</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Ossature bois</td><td className="border border-stone-200 px-3 py-2">4 500 – 8 000 MAD</td><td className="border border-stone-200 px-3 py-2">3–5 semaines</td><td className="border border-stone-200 px-3 py-2">40+ ans</td><td className="border border-stone-200 px-3 py-2">Isolation naturelle et confort</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Container transformé</td><td className="border border-stone-200 px-3 py-2">2 500 – 4 500 MAD</td><td className="border border-stone-200 px-3 py-2">2–4 semaines</td><td className="border border-stone-200 px-3 py-2">25–30 ans</td><td className="border border-stone-200 px-3 py-2">Budget minimal et rapidité</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">SIP (panneaux isolants)</td><td className="border border-stone-200 px-3 py-2">4 000 – 7 000 MAD</td><td className="border border-stone-200 px-3 py-2">3–5 semaines</td><td className="border border-stone-200 px-3 py-2">50+ ans</td><td className="border border-stone-200 px-3 py-2">Performance énergétique maximale</td></tr>
          </tbody>
        </table>

        <h2>Les coûts cachés à anticiper</h2>
        <p>
          Le prix annoncé par le fournisseur ne couvre généralement que la <strong>structure préfabriquée livrée sur site</strong>.
          Plusieurs postes supplémentaires viennent alourdir la facture finale :
        </p>
        <ul>
          <li><strong>Transport et logistique</strong> : 15 000 à 50 000 MAD selon la distance entre l&apos;usine et le terrain. Un convoi exceptionnel peut être nécessaire pour les modules volumineux.</li>
          <li><strong>Fondations et terrassement</strong> : 400 à 800 MAD/m² selon la nature du sol. Une étude géotechnique (5 000–15 000 MAD) est vivement recommandée.</li>
          <li><strong>Raccordements</strong> : eau potable (ONEE), électricité, assainissement et télécommunications représentent 30 000 à 60 000 MAD en zone urbaine, davantage en zone rurale.</li>
          <li><strong>Frais d&apos;architecte</strong> : obligatoires, ils représentent 5 à 8 % du coût total de construction.</li>
          <li><strong>Permis de construire</strong> : taxes communales d&apos;environ 1 % de la valeur estimée du bien.</li>
          <li><strong>Finitions intérieures</strong> : peinture, revêtements de sol, cuisine équipée et sanitaires ajoutent 500 à 1 500 MAD/m².</li>
        </ul>

        <h2>Comparaison avec la construction traditionnelle</h2>
        <p>
          La construction traditionnelle en maçonnerie au Maroc coûte entre <strong>3 500 et 10 000 MAD/m²</strong> tout compris,
          selon le niveau de finition. Le principal avantage financier du préfabriqué réside dans la réduction du temps de
          chantier : 3 à 4 mois contre 12 à 18 mois pour le traditionnel. Cette rapidité se traduit par une économie directe
          sur la main-d&apos;œuvre et une réduction des frais de surveillance de chantier. En revanche, la construction traditionnelle
          offre une personnalisation totale et bénéficie d&apos;une perception plus favorable sur le marché de la revente.
        </p>

        <h2>Facteurs influençant le prix</h2>
        <p>
          Plusieurs éléments font varier significativement le budget final d&apos;un projet préfabriqué :
        </p>
        <ul>
          <li><strong>Localisation du terrain</strong> : les prix des raccordements et du transport varient fortement entre Casablanca, Marrakech et les zones rurales.</li>
          <li><strong>Nature du sol</strong> : un terrain rocheux ou en pente nécessite des fondations spéciales plus coûteuses.</li>
          <li><strong>Niveau de finition</strong> : standing économique (500 MAD/m²), moyen (800–1 200 MAD/m²) ou haut de gamme (1 500+ MAD/m²).</li>
          <li><strong>Surface et configuration</strong> : les économies d&apos;échelle jouent à partir de 120–150 m². Un plan simple (rectangle) est moins cher qu&apos;un plan en L ou en U.</li>
          <li><strong>Nombre d&apos;étages</strong> : un R+1 nécessite une structure renforcée et des fondations plus profondes.</li>
        </ul>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Exigez toujours un <strong>devis détaillé poste par poste</strong> qui distingue clairement : structure, transport,
            fondations, raccordements, finitions et honoraires d&apos;architecte. Méfiez-vous des prix « tout compris » sans
            décomposition. Sur Bati.ma, comparez gratuitement les devis de plusieurs professionnels vérifiés.
          </p>
        </div>

        <h2>Budget type : maison préfabriquée de 100 m²</h2>
        <p>
          Voici une estimation réaliste pour une maison préfabriquée de 100 m² en ossature métallique, finitions moyennes,
          en zone périurbaine de Casablanca :
        </p>
        <ul>
          <li>Structure préfabriquée livrée : <strong>350 000 MAD</strong> (3 500 MAD/m²)</li>
          <li>Fondations et terrassement : <strong>60 000 MAD</strong></li>
          <li>Transport et montage : <strong>30 000 MAD</strong></li>
          <li>Raccordements (eau, électricité, assainissement) : <strong>45 000 MAD</strong></li>
          <li>Finitions intérieures : <strong>100 000 MAD</strong> (1 000 MAD/m²)</li>
          <li>Architecte (6 %) : <strong>35 000 MAD</strong></li>
          <li>Permis et taxes : <strong>10 000 MAD</strong></li>
          <li><strong>Total estimé : 630 000 MAD</strong></li>
        </ul>

        <h2>Budget type : villa préfabriquée de 200 m²</h2>
        <p>
          Pour une villa de 200 m² en préfabriqué béton, finitions haut de gamme, terrain plat en zone résidentielle :
        </p>
        <ul>
          <li>Structure préfabriquée livrée : <strong>900 000 MAD</strong> (4 500 MAD/m²)</li>
          <li>Fondations et terrassement : <strong>100 000 MAD</strong></li>
          <li>Transport et montage : <strong>50 000 MAD</strong></li>
          <li>Raccordements : <strong>55 000 MAD</strong></li>
          <li>Finitions haut de gamme : <strong>300 000 MAD</strong> (1 500 MAD/m²)</li>
          <li>Architecte (6 %) : <strong>85 000 MAD</strong></li>
          <li>Permis et taxes : <strong>20 000 MAD</strong></li>
          <li><strong>Total estimé : 1 510 000 MAD</strong></li>
        </ul>
        <p>
          À titre de comparaison, une construction traditionnelle équivalente coûterait entre 1 800 000 et 2 200 000 MAD,
          soit 20 à 30 % de plus, pour un délai de réalisation trois à quatre fois plus long.
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
