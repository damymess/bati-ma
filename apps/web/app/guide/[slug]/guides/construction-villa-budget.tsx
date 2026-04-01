import Link from "next/link";

export default function GuideConstructionVillaBudget() {
  const faq = [
    {
      q: "Quel budget total pr\u00e9voir pour construire une villa au Maroc en 2026 ?",
      a: "Pour une villa de 200 m\u00b2, le budget global (terrain + construction + honoraires + taxes) varie entre 1,5 et 4 millions MAD selon la ville et le standing. Pr\u00e9voyez terrain (40-50 % du budget total), construction (40-45 %), honoraires et frais (10-15 %).",
    },
    {
      q: "Quelle part du budget r\u00e9server aux impr\u00e9vus ?",
      a: "Il est prudent de r\u00e9server 10 \u00e0 15 % du budget construction pour les impr\u00e9vus : d\u00e9couvertes lors du terrassement, modifications en cours de chantier, hausse des prix des mat\u00e9riaux ou retards. Ce poste est souvent sous-estim\u00e9 par les particuliers.",
    },
    {
      q: "Peut-on construire une villa au Maroc par tranches pour \u00e9taler le budget ?",
      a: "Oui, il est courant de construire en deux phases : le gros \u0153uvre et la mise hors d\u2019eau d\u2019abord, puis les finitions dans un second temps. Pr\u00e9voyez n\u00e9anmoins les fondations et la structure pour la version finale d\u00e8s le d\u00e9part.",
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
        <h2>Comprendre le budget global d&apos;une villa au Maroc</h2>
        <p>
          Le budget d&apos;une villa ne se limite pas au co\u00fbt de construction. Il comprend
          l&apos;achat du terrain, les frais de construction, les honoraires des professionnels,
          les taxes et les am\u00e9nagements ext\u00e9rieurs. Voici la r\u00e9partition type pour un
          projet r\u00e9sidentiel au Maroc en 2026.
        </p>

        <h2>R\u00e9partition du budget par poste</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Poste</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Part du budget</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Exemple (villa 200 m\u00b2)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">Terrain (200 m\u00b2)</td><td className="border border-stone-200 px-3 py-2">40 - 50 %</td><td className="border border-stone-200 px-3 py-2">600 K - 1,5 M MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Construction</td><td className="border border-stone-200 px-3 py-2">35 - 45 %</td><td className="border border-stone-200 px-3 py-2">1 - 2,4 M MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Honoraires architecte</td><td className="border border-stone-200 px-3 py-2">5 - 8 %</td><td className="border border-stone-200 px-3 py-2">80 K - 180 K MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Taxes et frais (notaire, enregistrement)</td><td className="border border-stone-200 px-3 py-2">4 - 6 %</td><td className="border border-stone-200 px-3 py-2">60 K - 120 K MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Am\u00e9nagements ext\u00e9rieurs</td><td className="border border-stone-200 px-3 py-2">5 - 10 %</td><td className="border border-stone-200 px-3 py-2">80 K - 200 K MAD</td></tr>
          </tbody>
        </table>

        <h2>Budget par gamme de standing</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Gamme</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Co\u00fbt construction / m\u00b2</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Caract\u00e9ristiques</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">\u00c9conomique</td><td className="border border-stone-200 px-3 py-2">3 500 - 5 000 MAD</td><td className="border border-stone-200 px-3 py-2">Finitions standards, mat\u00e9riaux locaux</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Moyen standing</td><td className="border border-stone-200 px-3 py-2">5 000 - 8 000 MAD</td><td className="border border-stone-200 px-3 py-2">Bonnes finitions, cuisine \u00e9quip\u00e9e</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Haut standing</td><td className="border border-stone-200 px-3 py-2">8 000 - 12 000 MAD</td><td className="border border-stone-200 px-3 py-2">Mat\u00e9riaux premium, domotique, piscine</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Luxe</td><td className="border border-stone-200 px-3 py-2">12 000 - 20 000 MAD</td><td className="border border-stone-200 px-3 py-2">Architecture sur mesure, marbre, spa</td></tr>
          </tbody>
        </table>

        <h2>G\u00e9rer les impr\u00e9vus et le financement</h2>
        <p>
          Pr\u00e9voyez une r\u00e9serve de 10 \u00e0 15 % pour les al\u00e9as de chantier. Les principales
          sources de d\u00e9passement sont : les modifications en cours de chantier, les
          probl\u00e8mes de sol non d\u00e9tect\u00e9s, la hausse des prix des mat\u00e9riaux (acier, ciment)
          et les retards de livraison. Un bon architecte limite ces risques par une
          \u00e9tude pr\u00e9alable rigoureuse.
        </p>

        <h2>Solutions de financement</h2>
        <ul>
          <li><strong>Cr\u00e9dit immobilier</strong> : taux entre 4 % et 5,5 % en 2026, dur\u00e9e jusqu&apos;\u00e0 25 ans</li>
          <li><strong>Cr\u00e9dit construction</strong> : d\u00e9blocage par tranches selon l&apos;avancement</li>
          <li><strong>Autofinancement</strong> : construction par phases \u00e9tal\u00e9es dans le temps</li>
          <li><strong>PTZ Al Omrane</strong> : aide pour les terrains en zones am\u00e9nag\u00e9es</li>
        </ul>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm font-semibold text-[#b5522a] mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Un architecte peut vous aider \u00e0 optimiser votre budget d\u00e8s la conception. Trouvez
            un professionnel adapt\u00e9 \u00e0 votre budget sur{" "}
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
