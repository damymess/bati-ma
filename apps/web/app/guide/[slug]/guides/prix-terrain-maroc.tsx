import Link from "next/link";

export default function GuidePrixTerrainMaroc() {
  const faq = [
    {
      q: "Comment v\u00e9rifier la situation juridique d\u2019un terrain au Maroc ?",
      a: "Demandez un certificat de propri\u00e9t\u00e9 \u00e0 la Conservation Fonci\u00e8re (ANCFCC) pour v\u00e9rifier que le terrain est titr\u00e9, libre d\u2019hypoth\u00e8ques et sans opposition. Pour les terrains non titr\u00e9s (melkia), exigez une attestation de possession coutumi\u00e8re l\u00e9galis\u00e9e et proc\u00e9dez \u00e0 l\u2019immatriculation fonci\u00e8re.",
    },
    {
      q: "Quels frais pr\u00e9voir en plus du prix d\u2019achat du terrain ?",
      a: "Comptez les droits d\u2019enregistrement (4 % du prix), la conservation fonci\u00e8re (1,5 % + timbres), les honoraires du notaire (1 \u00e0 1,5 %) et les frais de g\u00e9om\u00e8tre pour le bornage. Au total, pr\u00e9voyez 7 \u00e0 8 % de frais suppl\u00e9mentaires.",
    },
    {
      q: "Vaut-il mieux acheter un terrain titr\u00e9 ou melkia au Maroc ?",
      a: "Un terrain titr\u00e9 (immatricul\u00e9 \u00e0 la Conservation Fonci\u00e8re) offre une s\u00e9curit\u00e9 juridique totale : titre foncier inattaquable, pas de litige possible. Le terrain melkia (non titr\u00e9) est souvent moins cher mais plus risqu\u00e9. Proc\u00e9dez toujours \u00e0 l\u2019immatriculation avant d\u2019acheter un melkia.",
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
        <h2>Prix du terrain au Maroc en 2026 : vue d&apos;ensemble</h2>
        <p>
          Le prix du terrain au Maroc varie consid\u00e9rablement selon la ville, le quartier
          et la vocation du terrain (r\u00e9sidentiel, commercial, agricole). En 2026, la
          demande reste forte dans les grandes m\u00e9tropoles et les p\u00e9riph\u00e9ries en expansion.
        </p>

        <h2>Prix moyens par ville</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Ville</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Prix / m\u00b2 (zone urbaine)</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Prix / m\u00b2 (p\u00e9riph\u00e9rie)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">Casablanca</td><td className="border border-stone-200 px-3 py-2">3 000 - 15 000 MAD</td><td className="border border-stone-200 px-3 py-2">800 - 3 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Marrakech</td><td className="border border-stone-200 px-3 py-2">2 000 - 10 000 MAD</td><td className="border border-stone-200 px-3 py-2">500 - 2 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Rabat</td><td className="border border-stone-200 px-3 py-2">3 000 - 12 000 MAD</td><td className="border border-stone-200 px-3 py-2">700 - 2 500 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Tanger</td><td className="border border-stone-200 px-3 py-2">1 500 - 8 000 MAD</td><td className="border border-stone-200 px-3 py-2">400 - 1 500 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Agadir</td><td className="border border-stone-200 px-3 py-2">1 200 - 5 000 MAD</td><td className="border border-stone-200 px-3 py-2">300 - 1 200 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">K\u00e9nitra / Mekn\u00e8s</td><td className="border border-stone-200 px-3 py-2">800 - 3 500 MAD</td><td className="border border-stone-200 px-3 py-2">200 - 800 MAD</td></tr>
          </tbody>
        </table>

        <h2>Facteurs qui influencent le prix</h2>
        <ul>
          <li><strong>Emplacement</strong> : proximit\u00e9 des axes routiers, commerces et \u00e9coles</li>
          <li><strong>Zonage</strong> : terrain constructible (immeuble, villa) vs zone agricole</li>
          <li><strong>Viabilisation</strong> : terrain viabilis\u00e9 (eau, \u00e9lectricit\u00e9, assainissement) ou nu</li>
          <li><strong>Titre foncier</strong> : terrain titr\u00e9 plus cher mais plus s\u00fbr que le melkia</li>
          <li><strong>Superficie</strong> : les petits lots (\u003c 200 m\u00b2) co\u00fbtent proportionnellement plus cher</li>
        </ul>

        <h2>V\u00e9rifications avant achat</h2>
        <p>
          Avant tout achat, exigez : le <strong>certificat de propri\u00e9t\u00e9</strong> de la Conservation
          Fonci\u00e8re, la <strong>note de renseignements urbanistiques</strong> de l&apos;agence urbaine,
          l&apos;\u00e9tude g\u00e9otechnique du sol et la v\u00e9rification des servitudes. Faites-vous accompagner
          par un notaire et un architecte.
        </p>

        <h2>R\u00f4le du notaire et de la conservation fonci\u00e8re</h2>
        <p>
          Le notaire r\u00e9dige l&apos;acte de vente, v\u00e9rifie la cha\u00eene de propri\u00e9t\u00e9 et proc\u00e8de \u00e0
          l&apos;inscription au livre foncier. La Conservation Fonci\u00e8re (ANCFCC) d\u00e9livre le
          titre foncier qui constitue la preuve d\u00e9finitive de propri\u00e9t\u00e9 au Maroc.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm font-semibold text-[#b5522a] mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Avant d&apos;acheter un terrain, consultez un architecte pour v\u00e9rifier la
            constructibilit\u00e9 et le potentiel du lot. Trouvez-en un sur{" "}
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
