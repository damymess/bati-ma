export default function GuideAmenagementCommercial() {
  const faq = [
    { q: "Faut-il un architecte pour aménager un local commercial au Maroc ?", a: "Un architecte est obligatoire dès que les travaux modifient la structure, la façade ou la destination du local (loi 016-89). Pour un simple aménagement intérieur sans modification structurelle, un architecte n\u2019est pas légalement requis mais reste fortement recommandé, notamment pour les locaux recevant du public (ERP) qui doivent respecter des normes de sécurité incendie et d\u2019accessibilité." },
    { q: "Quel budget pour aménager un local commercial ?", a: "Le budget d\u2019aménagement d\u2019un local commercial au Maroc varie selon l\u2019activité : 1 500 à 3 000 MAD/m² pour un bureau simple, 3 000 à 6 000 MAD/m² pour un commerce de détail (boutique, pharmacie), 5 000 à 10 000 MAD/m² pour un restaurant ou un café, et 8 000 à 15 000 MAD/m² pour un espace de santé (clinique, laboratoire). Les honoraires d\u2019architecte représentent 5 à 10 % du montant des travaux." },
    { q: "Quelles autorisations pour ouvrir un commerce au Maroc ?", a: "Pour ouvrir un commerce, vous devez obtenir : un permis d\u2019aménagement si les travaux modifient la structure (commune), une autorisation d\u2019exploitation commerciale (commune), un avis de la Protection civile pour les établissements recevant du public (ERP), et éventuellement des autorisations sectorielles (ONSSA pour l\u2019alimentaire, ministère de la Santé pour le médical)." },
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
        <h2>Aménagement d&apos;un local commercial au Maroc : guide complet</h2>
        <p>
          L&apos;<strong>aménagement d&apos;un local commercial au Maroc</strong> est un projet
          qui nécessite une planification minutieuse, tant sur le plan
          architectural que réglementaire. Que vous ouvriez une boutique à
          Casablanca, un restaurant à Marrakech, un cabinet médical à Rabat
          ou un showroom à Tanger, ce guide vous accompagne dans toutes les
          étapes : choix du local, conception, autorisations, normes de
          sécurité et coûts.
        </p>

        <h2>Quand l&apos;architecte est-il obligatoire ?</h2>
        <p>
          Conformément à la <strong>loi 016-89</strong>, le recours à un architecte
          est obligatoire dans les cas suivants :
        </p>
        <ul>
          <li><strong>Changement de destination</strong> : transformer un logement en local commercial</li>
          <li><strong>Modification de structure</strong> : abattre des cloisons porteuses, créer des ouvertures</li>
          <li><strong>Modification de façade</strong> : nouvelle devanture, enseigne structurelle</li>
          <li><strong>Construction neuve</strong> : local commercial dans un bâtiment neuf</li>
        </ul>
        <p>
          Pour un aménagement intérieur simple (peinture, mobilier,
          électricité), un architecte d&apos;intérieur ou un décorateur peut
          suffire. Cependant, pour tout local recevant du public (ERP),
          les normes de sécurité incendie et d&apos;accessibilité imposent
          souvent une étude technique.
        </p>

        <h2>Coûts d&apos;aménagement par type de commerce</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="text-left px-3 py-2 border border-stone-200">Type de commerce</th>
              <th className="text-left px-3 py-2 border border-stone-200">Coût aménagement (MAD/m²)</th>
              <th className="text-left px-3 py-2 border border-stone-200">Postes principaux</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-3 py-2 border border-stone-200">Bureau / coworking</td>
              <td className="px-3 py-2 border border-stone-200">1 500 - 3 000</td>
              <td className="px-3 py-2 border border-stone-200">Cloisonnement, électricité, climatisation</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-stone-200">Boutique / prêt-à-porter</td>
              <td className="px-3 py-2 border border-stone-200">2 500 - 5 000</td>
              <td className="px-3 py-2 border border-stone-200">Vitrine, éclairage, mobilier, sol</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-stone-200">Pharmacie</td>
              <td className="px-3 py-2 border border-stone-200">4 000 - 7 000</td>
              <td className="px-3 py-2 border border-stone-200">Comptoir, rayonnages, froid, sécurité</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-stone-200">Restaurant / café</td>
              <td className="px-3 py-2 border border-stone-200">5 000 - 10 000</td>
              <td className="px-3 py-2 border border-stone-200">Cuisine pro, ventilation, plomberie, déco</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-stone-200">Clinique / laboratoire</td>
              <td className="px-3 py-2 border border-stone-200">8 000 - 15 000</td>
              <td className="px-3 py-2 border border-stone-200">Normes sanitaires, fluides médicaux, insonorisation</td>
            </tr>
          </tbody>
        </table>

        <h2>Les normes ERP (Établissements Recevant du Public)</h2>
        <p>
          Tout local commercial recevant du public doit respecter des
          normes strictes de sécurité. Au Maroc, la Protection civile
          délivre un avis de conformité basé sur :
        </p>
        <ul>
          <li><strong>Sécurité incendie</strong> : extincteurs, issues de secours, détection fumée, désenfumage</li>
          <li><strong>Accessibilité</strong> : rampe d&apos;accès PMR, largeur de portes (minimum 90 cm), sanitaires adaptés</li>
          <li><strong>Ventilation</strong> : renouvellement d&apos;air obligatoire, extraction cuisine pour la restauration</li>
          <li><strong>Électricité</strong> : installation aux normes NM, tableau électrique conforme, mise à la terre</li>
          <li><strong>Capacité d&apos;accueil</strong> : calcul selon la surface et l&apos;activité (1 personne pour 1 à 5 m² selon le type)</li>
        </ul>

        <h2>Démarches administratives pas à pas</h2>
        <ul>
          <li><strong>Étape 1</strong> : vérification de la conformité du local avec le plan d&apos;aménagement (usage commercial autorisé)</li>
          <li><strong>Étape 2</strong> : dépôt du dossier d&apos;aménagement à la commune (plans architecte si modification structurelle)</li>
          <li><strong>Étape 3</strong> : obtention de l&apos;avis de la Protection civile (ERP)</li>
          <li><strong>Étape 4</strong> : réalisation des travaux par des entreprises qualifiées</li>
          <li><strong>Étape 5</strong> : visite de conformité de la Protection civile</li>
          <li><strong>Étape 6</strong> : demande d&apos;autorisation d&apos;exploitation commerciale à la commune</li>
          <li><strong>Étape 7</strong> : obtention des autorisations sectorielles si applicable (ONSSA, Santé, etc.)</li>
        </ul>

        <h2>Le rôle de l&apos;architecte dans l&apos;aménagement commercial</h2>
        <p>
          Un architecte spécialisé en aménagement commercial apporte une
          valeur ajoutée à plusieurs niveaux : optimisation de la surface
          de vente (agencement, flux clients), conception de la façade
          et de la vitrine (premier contact visuel), respect des normes
          ERP (sécurité, accessibilité), coordination des corps de métier
          (électricien, plombier, menuisier) et conformité réglementaire
          pour les autorisations. Son intervention est un investissement
          qui se rentabilise rapidement par l&apos;attractivité commerciale
          du local.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Vous aménagez un local commercial au Maroc ? Trouvez un architecte
            ou un architecte d&apos;intérieur spécialisé en aménagement commercial
            sur Bati.ma. Comparez les profils par ville et par spécialité
            (restauration, retail, médical) et obtenez vos devis gratuitement.
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
