import Link from "next/link";

export default function GuideCreditConstructionMaroc() {
  const faq = [
    {
      q: "Quel taux d\u2019int\u00e9r\u00eat pour un cr\u00e9dit construction au Maroc en 2026 ?",
      a: "Les taux varient entre 4 % et 5,5 % selon la banque, le profil de l\u2019emprunteur et la dur\u00e9e du pr\u00eat. CIH Bank et Attijariwafa Bank proposent g\u00e9n\u00e9ralement les taux les plus comp\u00e9titifs pour les cr\u00e9dits construction. Comparez toujours les offres de 3 banques minimum.",
    },
    {
      q: "Quelle est la diff\u00e9rence entre un cr\u00e9dit immobilier et un cr\u00e9dit construction ?",
      a: "Le cr\u00e9dit immobilier classique finance l\u2019achat d\u2019un bien existant en une seule fois. Le cr\u00e9dit construction est d\u00e9bloqu\u00e9 par tranches (g\u00e9n\u00e9ralement 3 \u00e0 5) selon l\u2019avancement des travaux, constat\u00e9 par un expert de la banque. Les int\u00e9r\u00eats intercalaires s\u2019appliquent sur les sommes d\u00e9j\u00e0 d\u00e9bloqu\u00e9es.",
    },
    {
      q: "Quel apport personnel faut-il pour un cr\u00e9dit construction au Maroc ?",
      a: "Les banques exigent g\u00e9n\u00e9ralement un apport personnel de 20 \u00e0 30 % du co\u00fbt total du projet (terrain + construction). Certaines banques comme CIH peuvent descendre \u00e0 10 % pour les fonctionnaires ou les professions lib\u00e9rales avec de bons revenus.",
    },
    { q: "Quel apport personnel pour un cr\u00e9dit construction au Maroc ?", a: "Les banques marocaines exigent g\u00e9n\u00e9ralement 20 \u00e0 30 % d\u2019apport personnel pour un cr\u00e9dit construction. Certaines offres (CIH, Attijariwafa) descendent \u00e0 10 % pour les salari\u00e9s avec CDI. Le terrain peut servir d\u2019apport si vous en \u00eates propri\u00e9taire." },
    { q: "Comment fonctionne le d\u00e9blocage des fonds pour un cr\u00e9dit construction ?", a: "Le cr\u00e9dit construction est d\u00e9bloqu\u00e9 par tranches li\u00e9es \u00e0 l\u2019avancement du chantier : fondations (20 %), gros \u0153uvre (40 %), finitions (30 %), r\u00e9ception (10 %). Un expert de la banque visite le chantier avant chaque d\u00e9blocage pour v\u00e9rifier la conformit\u00e9." },
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
        <h2>Le cr\u00e9dit construction au Maroc en 2026</h2>
        <p>
          Le cr\u00e9dit construction permet de financer la construction d&apos;une maison ou
          d&apos;une villa au Maroc. Contrairement au cr\u00e9dit immobilier classique, les fonds
          sont d\u00e9bloqu\u00e9s progressivement selon l&apos;avancement du chantier. Voici tout
          ce qu&apos;il faut savoir pour obtenir les meilleures conditions.
        </p>

        <h2>Quelle banque choisir pour un crédit construction en 2026 ?</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Banque</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Taux (fixe)</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Dur\u00e9e max</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Apport min</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">CIH Bank</td><td className="border border-stone-200 px-3 py-2">4,25 - 4,75 %</td><td className="border border-stone-200 px-3 py-2">25 ans</td><td className="border border-stone-200 px-3 py-2">10 - 20 %</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Attijariwafa Bank</td><td className="border border-stone-200 px-3 py-2">4,40 - 5,00 %</td><td className="border border-stone-200 px-3 py-2">25 ans</td><td className="border border-stone-200 px-3 py-2">20 %</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">BMCE (Bank of Africa)</td><td className="border border-stone-200 px-3 py-2">4,50 - 5,20 %</td><td className="border border-stone-200 px-3 py-2">20 ans</td><td className="border border-stone-200 px-3 py-2">20 %</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Banque Populaire</td><td className="border border-stone-200 px-3 py-2">4,30 - 5,00 %</td><td className="border border-stone-200 px-3 py-2">25 ans</td><td className="border border-stone-200 px-3 py-2">20 %</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Cr\u00e9dit du Maroc</td><td className="border border-stone-200 px-3 py-2">4,50 - 5,50 %</td><td className="border border-stone-200 px-3 py-2">20 ans</td><td className="border border-stone-200 px-3 py-2">25 %</td></tr>
          </tbody>
        </table>

        <h2>D\u00e9blocage par tranches</h2>
        <p>
          Le cr\u00e9dit construction est d\u00e9bloqu\u00e9 en 3 \u00e0 5 tranches li\u00e9es \u00e0 l&apos;avancement :
        </p>
        <ul>
          <li><strong>Tranche 1 (20-30 %)</strong> : achat du terrain ou d\u00e9marrage des fondations</li>
          <li><strong>Tranche 2 (25-30 %)</strong> : gros \u0153uvre (dalles, murs, toiture)</li>
          <li><strong>Tranche 3 (25-30 %)</strong> : second \u0153uvre (\u00e9lectricit\u00e9, plomberie, menuiserie)</li>
          <li><strong>Tranche 4 (15-20 %)</strong> : finitions et am\u00e9nagements</li>
        </ul>

        <h2>Dossier \u00e0 constituer</h2>
        <ul>
          <li>CIN et justificatif de domicile</li>
          <li>Attestation de revenus ou bilans (professions lib\u00e9rales)</li>
          <li>Titre foncier ou compromis de vente du terrain</li>
          <li>Plans architecturaux vis\u00e9s et autorisation de construire</li>
          <li>Devis d\u00e9taill\u00e9 de l&apos;entreprise de construction</li>
        </ul>

        <h2>Quelles assurances et garanties sont exigées ?</h2>
        <p>
          L&apos;assurance d\u00e9c\u00e8s-invalidit\u00e9 (ADI) est obligatoire. Son co\u00fbt varie de 0,3 \u00e0
          0,5 % du capital emprunt\u00e9. La banque exige aussi une hypoth\u00e8que de premier
          rang sur le bien construit. Pour les terrains Al Omrane, des conditions
          pr\u00e9f\u00e9rentielles (PTZ) peuvent s&apos;appliquer.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm font-semibold text-[#b5522a] mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Avant de d\u00e9marcher les banques, faites \u00e9tablir vos plans par un architecte.
            Le dossier bancaire sera plus solide. Trouvez votre architecte sur{" "}
            <Link href="/architectes" className="text-[#b5522a] underline">
              Bati.ma
            </Link>.
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
