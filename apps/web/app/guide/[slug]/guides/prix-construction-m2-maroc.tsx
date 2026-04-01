export default function GuidePrixConstructionM2() {
  const faq = [
    { q: "Quel est le prix moyen de construction au m\u00b2 au Maroc en 2026 ?", a: "Le prix moyen de construction au Maroc en 2026 se situe entre 4 500 et 7 000 MAD/m\u00b2 pour une finition standard. Ce prix varie fortement selon la ville, le type de finition (\u00e9conomique, moyen standing, haut standing) et la complexit\u00e9 architecturale du projet." },
    { q: "Pourquoi le prix au m\u00b2 varie-t-il autant entre les villes marocaines ?", a: "Les \u00e9carts s\u2019expliquent par le co\u00fbt du terrain (non inclus dans le prix de construction), la disponibilit\u00e9 de la main-d\u2019\u0153uvre qualifi\u00e9e, le co\u00fbt de transport des mat\u00e9riaux, et les exigences d\u2019urbanisme locales. Casablanca et Marrakech sont 15 \u00e0 25 % plus ch\u00e8res que les villes moyennes." },
    { q: "Comment r\u00e9duire le co\u00fbt de construction au Maroc ?", a: "Plusieurs leviers : choisir un terrain d\u00e9j\u00e0 viabilis\u00e9, opter pour un plan compact (moins de murs = moins cher), comparer au moins 3 devis d\u2019entreprises, \u00e9viter les modifications en cours de chantier, et confier le suivi \u00e0 un architecte pour \u00e9viter les surco\u00fbts impr\u00e9vus." },
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
        <h2>Prix de construction au m\u00b2 par ville en 2026</h2>
        <p>
          Le co\u00fbt de construction au Maroc varie consid\u00e9rablement selon la localisation.
          Voici les fourchettes de prix constat\u00e9es pour une <strong>construction neuve hors terrain</strong>,
          en MAD par m\u00b2 habitable :
        </p>
        <table className="w-full text-sm border-collapse my-4">
          <thead><tr className="bg-stone-100"><th className="border border-stone-200 px-3 py-2 text-left">Ville</th><th className="border border-stone-200 px-3 py-2 text-left">\u00c9conomique</th><th className="border border-stone-200 px-3 py-2 text-left">Moyen standing</th><th className="border border-stone-200 px-3 py-2 text-left">Haut standing</th></tr></thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">Casablanca</td><td className="border border-stone-200 px-3 py-2">4 500 \u2013 5 500</td><td className="border border-stone-200 px-3 py-2">6 000 \u2013 8 000</td><td className="border border-stone-200 px-3 py-2">9 000 \u2013 14 000</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Rabat</td><td className="border border-stone-200 px-3 py-2">4 000 \u2013 5 000</td><td className="border border-stone-200 px-3 py-2">5 500 \u2013 7 500</td><td className="border border-stone-200 px-3 py-2">8 000 \u2013 12 000</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Marrakech</td><td className="border border-stone-200 px-3 py-2">4 500 \u2013 5 500</td><td className="border border-stone-200 px-3 py-2">6 000 \u2013 8 500</td><td className="border border-stone-200 px-3 py-2">9 000 \u2013 15 000</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Tanger</td><td className="border border-stone-200 px-3 py-2">4 000 \u2013 5 000</td><td className="border border-stone-200 px-3 py-2">5 500 \u2013 7 000</td><td className="border border-stone-200 px-3 py-2">8 000 \u2013 11 000</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Agadir</td><td className="border border-stone-200 px-3 py-2">3 800 \u2013 4 800</td><td className="border border-stone-200 px-3 py-2">5 000 \u2013 6 500</td><td className="border border-stone-200 px-3 py-2">7 500 \u2013 10 000</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">F\u00e8s</td><td className="border border-stone-200 px-3 py-2">3 500 \u2013 4 500</td><td className="border border-stone-200 px-3 py-2">5 000 \u2013 6 500</td><td className="border border-stone-200 px-3 py-2">7 000 \u2013 10 000</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Oujda</td><td className="border border-stone-200 px-3 py-2">3 200 \u2013 4 200</td><td className="border border-stone-200 px-3 py-2">4 500 \u2013 6 000</td><td className="border border-stone-200 px-3 py-2">6 500 \u2013 9 000</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">K\u00e9nitra / Mekn\u00e8s</td><td className="border border-stone-200 px-3 py-2">3 300 \u2013 4 300</td><td className="border border-stone-200 px-3 py-2">4 800 \u2013 6 200</td><td className="border border-stone-200 px-3 py-2">7 000 \u2013 9 500</td></tr>
          </tbody>
        </table>

        <h2>Facteurs qui influencent le prix</h2>
        <ul>
          <li><strong>Qualit\u00e9 des finitions</strong> : le poste le plus variable (30 \u00e0 40 % du budget total)</li>
          <li><strong>Complexit\u00e9 architecturale</strong> : une villa avec piscine co\u00fbte 20 \u00e0 30 % de plus qu&apos;une maison simple</li>
          <li><strong>Nature du terrain</strong> : terrain en pente, sol rocheux ou nappe phr\u00e9atique = surco\u00fbt fondations</li>
          <li><strong>Nombre d&apos;\u00e9tages</strong> : chaque \u00e9tage suppl\u00e9mentaire augmente le co\u00fbt structurel</li>
          <li><strong>Mat\u00e9riaux import\u00e9s</strong> : carrelage italien, sanitaires europ\u00e9ens, menuiserie aluminium haut de gamme</li>
          <li><strong>Conjoncture</strong> : les prix des mat\u00e9riaux (acier, ciment) fluctuent fortement</li>
        </ul>

        <h2>D\u00e9composition du budget de construction</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead><tr className="bg-stone-100"><th className="border border-stone-200 px-3 py-2 text-left">Poste</th><th className="border border-stone-200 px-3 py-2 text-left">% du budget</th><th className="border border-stone-200 px-3 py-2 text-left">Exemple (villa 200 m\u00b2)</th></tr></thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">Gros \u0153uvre (structure, ma\u00e7onnerie)</td><td className="border border-stone-200 px-3 py-2">35\u201340 %</td><td className="border border-stone-200 px-3 py-2">420 000 \u2013 560 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Second \u0153uvre (enduits, \u00e9tanch\u00e9it\u00e9)</td><td className="border border-stone-200 px-3 py-2">15\u201320 %</td><td className="border border-stone-200 px-3 py-2">180 000 \u2013 280 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Finitions (carrelage, peinture, cuisine)</td><td className="border border-stone-200 px-3 py-2">30\u201340 %</td><td className="border border-stone-200 px-3 py-2">360 000 \u2013 560 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Honoraires architecte</td><td className="border border-stone-200 px-3 py-2">5\u201310 %</td><td className="border border-stone-200 px-3 py-2">60 000 \u2013 140 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Frais annexes (taxes, assurance, lab)</td><td className="border border-stone-200 px-3 py-2">3\u20135 %</td><td className="border border-stone-200 px-3 py-2">36 000 \u2013 70 000 MAD</td></tr>
          </tbody>
        </table>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Pr\u00e9voyez toujours une <strong>marge de 10 \u00e0 15 %</strong> pour les impr\u00e9vus. Les modifications en cours de chantier et les fluctuations du prix des mat\u00e9riaux sont les premi\u00e8res causes de d\u00e9passement budg\u00e9taire au Maroc.
          </p>
        </div>

        <h2>Budget pr\u00e9visionnel : exemple concret</h2>
        <p>
          Pour une <strong>villa de 200 m\u00b2 habitable \u00e0 Casablanca</strong> en moyen standing :
        </p>
        <ul>
          <li>Construction : 200 m\u00b2 \u00d7 7 000 MAD = <strong>1 400 000 MAD</strong></li>
          <li>Architecte (8 %) : <strong>112 000 MAD</strong></li>
          <li>Frais annexes (4 %) : <strong>56 000 MAD</strong></li>
          <li>Impr\u00e9vus (10 %) : <strong>140 000 MAD</strong></li>
          <li><strong>Total estim\u00e9 : 1 708 000 MAD</strong> (hors terrain)</li>
        </ul>

        <h2>Comment r\u00e9duire les co\u00fbts de construction</h2>
        <ol>
          <li><strong>Plan compact</strong> : minimiser le p\u00e9rim\u00e8tre de murs ext\u00e9rieurs</li>
          <li><strong>Mat\u00e9riaux locaux</strong> : privil\u00e9gier la pierre locale, le carrelage marocain</li>
          <li><strong>Comparaison de devis</strong> : 3 \u00e0 5 entreprises minimum</li>
          <li><strong>\u00c9viter les modifications</strong> : figer les plans avant le d\u00e9marrage du chantier</li>
          <li><strong>Suivi architecte</strong> : un suivi rigoureux \u00e9vite les malfacons co\u00fbteuses</li>
          <li><strong>Construction hors-site</strong> : le pr\u00e9fabriqu\u00e9 peut r\u00e9duire le co\u00fbt de 20 \u00e0 35 %</li>
        </ol>

        <h2>\u00c9volution des prix et tendances 2026</h2>
        <p>
          Les prix de construction au Maroc ont augment\u00e9 de <strong>8 \u00e0 12 % entre 2024 et 2026</strong>,
          principalement en raison de la hausse du prix de l&apos;acier et du ciment. La demande li\u00e9e aux infrastructures
          du <strong>Mondial 2030</strong> maintient la pression sur les prix de la main-d&apos;\u0153uvre qualifi\u00e9e.
          Cependant, la construction modulaire et pr\u00e9fabriqu\u00e9e offre des alternatives comp\u00e9titives.
        </p>
      </div>
      <section className="mt-10">
        <h2 className="text-xl font-bold text-stone-900 mb-5">Questions fr\u00e9quentes</h2>
        <div className="space-y-4">
          {faq.map((f) => (
            <details key={f.q} className="group border border-stone-200 rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between px-4 py-3 cursor-pointer text-sm font-medium text-stone-800 hover:bg-stone-50">{f.q}<span className="text-stone-400 group-open:rotate-180 transition-transform">\u2193</span></summary>
              <div className="px-4 pb-4 pt-1 text-sm text-stone-600 leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
