export default function GuideEtudeSol() {
  const faq = [
    {
      q: "L\u0027étude de sol est-elle obligatoire au Maroc ?",
      a: "L\u0027étude de sol n\u0027est pas systématiquement obligatoire pour une maison individuelle au Maroc, mais elle est fortement recommandée et souvent exigée par les bureaux d\u0027études pour le calcul des fondations. Elle est obligatoire pour les immeubles de plus de R+2, les bâtiments publics, et les zones à risque sismique ou inondable. De nombreux architectes l\u0027exigent avant de signer les plans de fondation.",
    },
    {
      q: "Combien coûte une étude de sol au Maroc ?",
      a: "Le prix d\u0027une étude géotechnique au Maroc varie de 5 000 à 15 000 MAD pour une villa, et de 15 000 à 40 000 MAD pour un immeuble. Le coût dépend de la profondeur des sondages, du nombre de points d\u0027essai, du type de tests réalisés et de l\u0027accessibilité du terrain. C\u0027est un investissement minime comparé au coût des fondations.",
    },
    {
      q: "Quels types de tests sont réalisés lors d\u0027une étude de sol ?",
      a: "Les principaux essais géotechniques utilisés au Maroc sont : l\u0027essai pressiométrique (le plus courant, mesure la résistance du sol en profondeur), l\u0027essai pénétrométrique (évalue la compacité du sol), les sondages carottés (prélèvement d\u0027échantillons pour analyse en laboratoire), et les essais de plaque. Le choix des essais dépend du type de projet et de la nature présumée du sol.",
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
        <h2>L&apos;étude de sol au Maroc : un investissement essentiel</h2>
        <p>
          L&apos;étude géotechnique, communément appelée étude de sol, est une étape cruciale avant toute construction au Maroc. Elle permet de connaître la nature du terrain, sa capacité portante et les risques géologiques, afin de dimensionner correctement les fondations. Au Maroc, la diversité des sols (argileux dans le Gharb, rocheux dans l&apos;Atlas, sablonneux en zones côtières) rend cette étude particulièrement importante pour éviter des désordres structurels coûteux.
        </p>

        <h2>Pourquoi réaliser une étude de sol ?</h2>
        <p>
          Les sinistres liés aux fondations sont parmi les plus coûteux dans la construction. Au Maroc, les sols gonflants (argiles) provoquent des fissures dans des milliers de maisons chaque année, notamment dans les régions de Kénitra, Meknès et Béni Mellal. Une étude de sol permet d&apos;adapter les fondations au terrain réel, d&apos;éviter le surdimensionnement inutile des fondations (économie de 10 à 30 % sur le poste fondations), de détecter la présence d&apos;eau souterraine, et d&apos;identifier les risques de glissement ou de tassement.
        </p>

        <h2>Types d&apos;essais géotechniques</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-300 px-3 py-2 text-left">Type d&apos;essai</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Principe</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Profondeur</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Coût indicatif (MAD)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Pressiomètre Ménard</td>
              <td className="border border-stone-300 px-3 py-2">Expansion d&apos;une sonde dans un forage</td>
              <td className="border border-stone-300 px-3 py-2">5 - 30 m</td>
              <td className="border border-stone-300 px-3 py-2">3 000 - 8 000 / point</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Pénétromètre dynamique</td>
              <td className="border border-stone-300 px-3 py-2">Enfoncement d&apos;une pointe par battage</td>
              <td className="border border-stone-300 px-3 py-2">3 - 15 m</td>
              <td className="border border-stone-300 px-3 py-2">1 500 - 4 000 / point</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Sondage carotté</td>
              <td className="border border-stone-300 px-3 py-2">Prélèvement d&apos;échantillons intacts</td>
              <td className="border border-stone-300 px-3 py-2">5 - 50 m</td>
              <td className="border border-stone-300 px-3 py-2">5 000 - 15 000 / forage</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Essai de plaque</td>
              <td className="border border-stone-300 px-3 py-2">Chargement d&apos;une plaque en surface</td>
              <td className="border border-stone-300 px-3 py-2">Surface</td>
              <td className="border border-stone-300 px-3 py-2">2 000 - 5 000 / point</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Analyse en laboratoire</td>
              <td className="border border-stone-300 px-3 py-2">Granulométrie, limites d&apos;Atterberg</td>
              <td className="border border-stone-300 px-3 py-2">-</td>
              <td className="border border-stone-300 px-3 py-2">1 000 - 3 000 / lot</td>
            </tr>
          </tbody>
        </table>

        <h2>Les missions géotechniques selon la norme NF P 94-500</h2>
        <p>
          Les études géotechniques au Maroc suivent généralement la classification normative en missions progressives. La mission G1 (étude préliminaire) est suffisante pour une villa individuelle : elle comprend 2 à 3 sondages et fournit les premières recommandations sur le type de fondations. La mission G2 (étude de conception) est requise pour les immeubles : elle détaille le dimensionnement des fondations et le calcul de la capacité portante. La mission G3 (suivi d&apos;exécution) est optionnelle et intervient pendant les travaux de terrassement.
        </p>

        <h2>Laboratoires géotechniques accrédités au Maroc</h2>
        <p>
          Plusieurs laboratoires sont accrédités pour réaliser des études géotechniques au Maroc. Le LPEE (Laboratoire Public d&apos;Essais et d&apos;Études) est l&apos;organisme public de référence avec des antennes dans toutes les régions. Les bureaux privés comme LABO-SOL, GEOSOL, AGM Géotechnique et SIREQ sont également reconnus. Choisissez un laboratoire certifié ISO 17025 et demandez des références de projets similaires dans votre zone géographique, car la connaissance du contexte géologique local est un atout majeur.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            L&apos;étude de sol représente moins de 1 % du budget total de construction mais peut vous faire économiser 10 à 30 % sur les fondations en évitant le surdimensionnement. Réalisez-la avant même de finaliser les plans avec votre architecte. Retrouvez les BET géotechniques de votre région sur Bati.ma.
          </p>
        </div>

        <h2>Zones à risques particuliers au Maroc</h2>
        <p>
          Certaines zones au Maroc nécessitent une attention géotechnique particulière : les régions à sols gonflants (Gharb, Doukkala, Béni Mellal) où les argiles expansives provoquent des mouvements de terrain, les zones sismiques (Al Hoceima, Agadir, Nador) classées en zone II et III du RPS 2000, les zones côtières avec des remontées de nappe phréatique, et les terrains en pente nécessitant une étude de stabilité. Dans ces zones, l&apos;étude de sol n&apos;est pas une option mais une nécessité absolue.
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
