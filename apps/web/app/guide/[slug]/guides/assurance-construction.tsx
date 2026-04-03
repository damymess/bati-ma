export default function GuideAssuranceConstruction() {
  const faq = [
    {
      q: "L\u0027assurance TRC est-elle obligatoire au Maroc ?",
      a: "L\u0027assurance TRC (Tous Risques Chantier) n\u0027est pas légalement obligatoire pour les particuliers au Maroc, mais elle est fortement recommandée et souvent exigée par les banques pour les crédits construction. Elle couvre les dommages matériels pendant le chantier : effondrement, incendie, vol de matériaux, dégâts des eaux, catastrophes naturelles. Son coût représente 0,15 à 0,30 % du montant des travaux.",
    },
    {
      q: "Qu\u0027est-ce que l\u0027assurance décennale au Maroc ?",
      a: "L\u0027assurance décennale (ou garantie décennale) couvre les vices et malfaçons affectant la solidité de l\u0027ouvrage ou le rendant impropre à sa destination pendant 10 ans après la réception des travaux. Au Maroc, elle est obligatoire pour les architectes et les entreprises de construction en vertu du Code des obligations et contrats (articles 769 et suivants). Elle couvre les fissures structurelles, les problèmes d\u0027étanchéité majeurs et les affaissements.",
    },
    {
      q: "Combien coûte l\u0027assurance construction au Maroc ?",
      a: "Le coût total des assurances construction au Maroc se situe entre 0,5 et 2 % du montant des travaux. La TRC coûte 0,15 à 0,30 % du montant chantier, la RC Pro de l\u0027entreprise est intégrée dans ses charges (impacte le devis), et l\u0027assurance dommages-ouvrage (quand disponible) coûte 1 à 3 % du montant des travaux.",
    },
    {
      q: "Comment vérifier que mon architecte est bien assuré au Maroc ?",
      a: "Demandez une attestation d\u0027assurance RC Professionnelle en cours de validité avant de signer le contrat. Tout architecte inscrit à l\u0027Ordre National est tenu de détenir cette assurance. Vous pouvez vérifier son inscription auprès du CNOA ou sur les profils vérifiés de Bati.ma.",
    },
    {
      q: "Que couvre exactement la garantie décennale en cas de fissures ?",
      a: "La garantie décennale couvre uniquement les fissures structurelles compromettant la solidité du bâtiment ou le rendant impropre à sa destination. Les fissures superficielles d\u0027enduit ou de peinture ne sont pas couvertes. En cas de doute, un expert judiciaire peut déterminer si le désordre relève de la décennale.",
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
        <h2>Pourquoi souscrire une assurance construction au Maroc ?</h2>
        <p>
          Construire une maison au Maroc représente souvent l&apos;investissement d&apos;une vie. Les assurances construction protègent cet investissement contre les aléas du chantier et les malfaçons post-livraison. Pourtant, de nombreux maîtres d&apos;ouvrage marocains négligent ces protections, s&apos;exposant à des risques financiers considérables. Ce guide détaille les différentes assurances disponibles, leurs obligations légales et leurs coûts au Maroc.
        </p>

        <h2>Quelles sont les principales assurances construction au Maroc ?</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-300 px-3 py-2 text-left">Assurance</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Couverture</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Obligatoire ?</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Coût estimé</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-300 px-3 py-2">TRC (Tous Risques Chantier)</td>
              <td className="border border-stone-300 px-3 py-2">Dommages pendant le chantier</td>
              <td className="border border-stone-300 px-3 py-2">Non (recommandée)</td>
              <td className="border border-stone-300 px-3 py-2">0,15 - 0,30 % du montant</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Décennale</td>
              <td className="border border-stone-300 px-3 py-2">Vices structurels sur 10 ans</td>
              <td className="border border-stone-300 px-3 py-2">Oui (constructeur)</td>
              <td className="border border-stone-300 px-3 py-2">Incluse dans devis entreprise</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">RC Professionnelle</td>
              <td className="border border-stone-300 px-3 py-2">Responsabilité de l&apos;entreprise</td>
              <td className="border border-stone-300 px-3 py-2">Oui (architecte / BET)</td>
              <td className="border border-stone-300 px-3 py-2">Incluse dans honoraires</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Dommages-ouvrage (DO)</td>
              <td className="border border-stone-300 px-3 py-2">Réparation rapide sans recherche de responsabilité</td>
              <td className="border border-stone-300 px-3 py-2">Non (rare au Maroc)</td>
              <td className="border border-stone-300 px-3 py-2">1 - 3 % du montant</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Multirisque habitation</td>
              <td className="border border-stone-300 px-3 py-2">Incendie, vol, dégâts après livraison</td>
              <td className="border border-stone-300 px-3 py-2">Non (recommandée)</td>
              <td className="border border-stone-300 px-3 py-2">1 500 - 5 000 MAD/an</td>
            </tr>
          </tbody>
        </table>

        <h2>Que couvre l&apos;assurance Tous Risques Chantier (TRC) ?</h2>
        <p>
          La TRC est l&apos;assurance la plus importante pendant la phase de construction. Elle protège contre les dommages matériels survenant sur le chantier : effondrement partiel ou total, incendie, foudre et explosion, dégâts des eaux et inondations, vol et vandalisme, et catastrophes naturelles (séisme, tempête). La prime est calculée sur le montant total des travaux. Pour une villa à 1 000 000 MAD, comptez une prime de 1 500 à 3 000 MAD. La couverture démarre à l&apos;ouverture du chantier et se termine à la réception des travaux.
        </p>

        <h2>Comment fonctionne la garantie décennale au Maroc ?</h2>
        <p>
          Le Dahir des Obligations et Contrats (DOC) prévoit une responsabilité décennale pour les architectes et entrepreneurs. Cette garantie couvre les défauts qui compromettent la solidité de l&apos;ouvrage ou le rendent impropre à sa destination. Les désordres couverts incluent les fissures structurelles importantes, les problèmes d&apos;étanchéité de la toiture et des terrasses, les affaissements de fondations, et les défauts de gros œuvre. La prescription est de 10 ans à compter de la réception définitive des travaux.
        </p>

        <h2>Pourquoi la RC Professionnelle de l&apos;architecte est-elle importante ?</h2>
        <p>
          Au Maroc, tout architecte inscrit à l&apos;Ordre National des Architectes doit détenir une assurance RC Professionnelle. Cette assurance couvre les erreurs de conception, les fautes dans le suivi de chantier et les manquements aux obligations professionnelles. Avant de signer un contrat avec un architecte, demandez une attestation d&apos;assurance en cours de validité. Les honoraires de l&apos;architecte (8 à 12 % du montant des travaux) incluent cette couverture.
        </p>

        <h2>Comment bien choisir ses assurances construction au Maroc ?</h2>
        <p>
          Les principales compagnies d&apos;assurance proposant des produits construction au Maroc sont Wafa Assurance, MAMDA, RMA, Saham Assurance et Atlanta. Pour obtenir le meilleur tarif, comparez au moins 3 devis, vérifiez les exclusions de garantie (travaux en sous-traitance, retard de livraison), assurez-vous que les montants de couverture correspondent au coût réel des travaux, et négociez la franchise (montant restant à votre charge en cas de sinistre).
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Exigez systématiquement de votre entreprise de construction et de votre architecte la preuve de leur assurance RC Pro en cours de validité. En cas de sinistre sans assurance, vous n&apos;aurez aucun recours financier efficace. Sur Bati.ma, les professionnels vérifiés affichent leur statut d&apos;assurance.
          </p>
        </div>

        <h2>Que faire en cas de sinistre sur un chantier au Maroc ?</h2>
        <p>
          En cas de sinistre pendant ou après la construction, déclarez-le à votre assureur dans les 5 jours ouvrables par lettre recommandée. Documentez les dégâts avec des photos et des constats. Ne commencez aucune réparation avant le passage de l&apos;expert mandaté par l&apos;assureur. Si le sinistre relève de la décennale, envoyez une mise en demeure à l&apos;entreprise par courrier recommandé et saisissez un expert judiciaire si nécessaire. Les délais d&apos;indemnisation varient de 1 à 6 mois selon la complexité du dossier.
        </p>
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-stone-900 mb-5">Questions fréquentes</h2>
        <div className="space-y-4">
          {faq.map((f) => (
            <details
              key={f.q}
              className="group border border-stone-200 rounded-lg overflow-hidden"
            >
              <summary className="flex items-center justify-between px-4 py-3 cursor-pointer text-sm font-medium text-stone-800 hover:bg-stone-50">
                {f.q}
                <span className="text-stone-400 group-open:rotate-180 transition-transform">
                  ↓
                </span>
              </summary>
              <div className="px-4 pb-4 pt-1 text-sm text-stone-600 leading-relaxed">
                {f.a}
              </div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
