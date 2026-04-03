export default function GuideConstructionMarrakech() {
  const faq = [
    { q: "Quel est le prix de construction au m² à Marrakech en 2026 ?", a: "Le coût de construction à Marrakech varie entre 4 500 et 8 000 MAD/m² pour une construction standard, et peut dépasser 12 000 MAD/m² pour du haut de gamme avec finitions de luxe (zellige, tadelakt, bois de cèdre). Ces prix incluent le gros œuvre et les finitions mais excluent le terrain et les honoraires d\u2019architecte." },
    { q: "Combien de temps faut-il pour construire une maison à Marrakech ?", a: "Comptez en moyenne 12 à 18 mois pour une villa de taille moyenne, de l\u2019obtention du permis de construire à la remise des clés. Les délais peuvent s\u2019allonger en cas de finitions traditionnelles marocaines (zellige artisanal, plâtre sculpté) ou de projet architectural complexe. La phase administrative (permis) prend généralement 2 à 4 mois." },
    { q: "Quels intervenants sont nécessaires pour construire à Marrakech ?", a: "Un projet de construction à Marrakech mobilise plusieurs intervenants : un architecte (obligatoire pour le permis), un bureau d\u2019études techniques (BET) pour la structure, un topographe pour le bornage, une entreprise de construction générale ou des corps de métier séparés, et éventuellement des artisans spécialisés (maâlem) pour les finitions traditionnelles." },
    { q: "Faut-il une autorisation spéciale pour construire dans la Palmeraie de Marrakech ?", a: "Oui, la Palmeraie est une zone protégée avec des contraintes spécifiques : interdiction de couper les palmiers, hauteur limitée à R+1, coefficient d\u2019emprise au sol réduit et obligation de maintenir un pourcentage d\u2019espaces verts. L\u2019architecte doit obtenir l\u2019avis favorable de l\u2019Agence Urbaine de Marrakech." },
    { q: "Comment trouver des artisans fiables pour le zellige et le tadelakt à Marrakech ?", a: "Les meilleurs maâlems travaillent par recommandation directe des architectes locaux. Un architecte expérimenté à Marrakech dispose d\u2019un réseau d\u2019artisans de confiance. Demandez des références de chantiers achevés et visitez les réalisations. Les délais de fabrication du zellige (2 à 4 mois) doivent être anticipés." },
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
        <h2>Pourquoi Marrakech est-elle un marché dynamique pour la construction ?</h2>
        <p>
          Marrakech est l&apos;une des destinations les plus prisées pour la
          construction au Maroc, tant par les Marocains que par les étrangers.
          Villas de luxe dans la Palmeraie, riads dans la médina, résidences
          contemporaines sur la route d&apos;Ourika : la ville offre une diversité
          de projets qui nécessite de bien s&apos;entourer de professionnels qualifiés.
        </p>

        <h2>Combien coûte la construction au m² à Marrakech ?</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="text-left px-3 py-2 border border-stone-200">Gamme</th>
              <th className="text-left px-3 py-2 border border-stone-200">Prix / m²</th>
              <th className="text-left px-3 py-2 border border-stone-200">Caractéristiques</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-3 py-2 border border-stone-200">Économique</td><td className="px-3 py-2 border border-stone-200">3 500 – 5 000 MAD</td><td className="px-3 py-2 border border-stone-200">Finitions standard, matériaux courants</td></tr>
            <tr><td className="px-3 py-2 border border-stone-200">Moyen standing</td><td className="px-3 py-2 border border-stone-200">5 000 – 8 000 MAD</td><td className="px-3 py-2 border border-stone-200">Bonnes finitions, climatisation, piscine</td></tr>
            <tr><td className="px-3 py-2 border border-stone-200">Haut de gamme</td><td className="px-3 py-2 border border-stone-200">8 000 – 12 000 MAD</td><td className="px-3 py-2 border border-stone-200">Zellige, tadelakt, bois noble, domotique</td></tr>
            <tr><td className="px-3 py-2 border border-stone-200">Luxe / prestige</td><td className="px-3 py-2 border border-stone-200">12 000 – 18 000+ MAD</td><td className="px-3 py-2 border border-stone-200">Matériaux importés, artisanat d&apos;exception</td></tr>
          </tbody>
        </table>

        <h2>Quelles sont les meilleures zones pour construire à Marrakech ?</h2>
        <p>
          Chaque secteur de Marrakech a ses propres caractéristiques et contraintes :
        </p>
        <ul>
          <li><strong>La Palmeraie</strong> : villas de luxe, terrains vastes, contraintes paysagères (protection des palmiers)</li>
          <li><strong>Route d&apos;Ourika</strong> : secteur en plein essor, terrains accessibles, projets résidentiels et touristiques</li>
          <li><strong>Targa / Agdal</strong> : quartiers résidentiels prisés, proximité centre-ville</li>
          <li><strong>Route de l&apos;Ourika / Tassoultant</strong> : terrains agricoles en reconversion, prix attractifs</li>
          <li><strong>Médina</strong> : rénovation de riads, contraintes patrimoniales strictes</li>
          <li><strong>Guéliz / Hivernage</strong> : tissu urbain dense, immeubles et commerces</li>
        </ul>

        <h2>Quels styles architecturaux choisir à Marrakech ?</h2>
        <p>
          Marrakech se distingue par la richesse de ses styles architecturaux.
          Le style marocain traditionnel (arcs, patios, zellige, moucharabiehs)
          côtoie l&apos;architecture contemporaine avec de grandes baies vitrées et
          des lignes épurées. De nombreux projets adoptent un style
          fusion alliant les deux approches : volumes modernes avec des
          finitions artisanales marocaines.
        </p>

        <h2>Quels intervenants mobiliser pour un projet de construction ?</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="text-left px-3 py-2 border border-stone-200">Intervenant</th>
              <th className="text-left px-3 py-2 border border-stone-200">Rôle</th>
              <th className="text-left px-3 py-2 border border-stone-200">Coût indicatif</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-3 py-2 border border-stone-200">Architecte</td><td className="px-3 py-2 border border-stone-200">Conception, permis, suivi chantier</td><td className="px-3 py-2 border border-stone-200">5 % – 10 % du montant travaux</td></tr>
            <tr><td className="px-3 py-2 border border-stone-200">Bureau d&apos;études (BET)</td><td className="px-3 py-2 border border-stone-200">Études structurelles, béton armé</td><td className="px-3 py-2 border border-stone-200">8 000 – 25 000 MAD</td></tr>
            <tr><td className="px-3 py-2 border border-stone-200">Topographe</td><td className="px-3 py-2 border border-stone-200">Bornage, levé topographique</td><td className="px-3 py-2 border border-stone-200">3 000 – 8 000 MAD</td></tr>
            <tr><td className="px-3 py-2 border border-stone-200">Entreprise de construction</td><td className="px-3 py-2 border border-stone-200">Gros œuvre et second œuvre</td><td className="px-3 py-2 border border-stone-200">Variable selon projet</td></tr>
            <tr><td className="px-3 py-2 border border-stone-200">Maâlem (artisan)</td><td className="px-3 py-2 border border-stone-200">Zellige, tadelakt, bois sculpté</td><td className="px-3 py-2 border border-stone-200">Variable selon finitions</td></tr>
          </tbody>
        </table>

        <div className="bg-[#f4ece7] border border-stone-200 rounded-lg p-4 my-6">
          <p className="text-sm text-stone-700 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-600">
            À Marrakech, le choix entre construire en entreprise générale ou en
            corps d&apos;état séparés a un impact majeur sur le budget et les délais.
            L&apos;entreprise générale simplifie la gestion mais coûte 10 à 15 % de
            plus. Les corps d&apos;état séparés exigent un suivi rigoureux de
            l&apos;architecte mais permettent de mieux maîtriser chaque poste.
          </p>
        </div>

        <h2>Combien de temps faut-il pour construire à Marrakech ?</h2>
        <p>
          Les délais moyens pour un projet de construction à Marrakech :
        </p>
        <ul>
          <li><strong>Études et permis de construire</strong> : 2 à 4 mois</li>
          <li><strong>Gros œuvre</strong> : 4 à 8 mois selon la taille du projet</li>
          <li><strong>Second œuvre et finitions</strong> : 4 à 6 mois</li>
          <li><strong>Finitions traditionnelles (zellige, tadelakt)</strong> : 2 à 4 mois supplémentaires</li>
        </ul>

        <h2>Comment trouver les bons professionnels à Marrakech ?</h2>
        <p>
          Bati.ma vous permet de trouver des architectes, des bureaux d&apos;études
          et des professionnels de la construction vérifiés à Marrakech. Comparez
          les profils, consultez les réalisations et obtenez des devis gratuits
          pour votre projet de construction.
        </p>
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
