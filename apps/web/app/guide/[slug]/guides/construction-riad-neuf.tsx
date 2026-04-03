export default function GuideConstructionRiadNeuf() {
  const faq = [
    { q: "Combien coûte la construction d\u2019un riad neuf au Maroc ?", a: "Le coût de construction d\u2019un riad neuf varie entre 5 000 et 8 000 MAD/m² pour un projet de qualité avec finitions traditionnelles (zellige, tadelakt, bois sculpté). Pour un riad haut standing avec piscine, hammam et matériaux premium, comptez 8 000 à 12 000 MAD/m². Un riad de 200 m² habitables coûtera donc entre 1 et 2,4 millions MAD tout compris." },
    { q: "Peut-on construire un riad en dehors de la médina ?", a: "Oui, il est tout à fait possible de construire un riad neuf en dehors de la médina, dans un lotissement ou en zone périurbaine. Le concept du riad (maison à patio central) s\u2019adapte à tout terrain. En dehors de la médina, vous bénéficiez de terrains plus grands, d\u2019un accès véhicule et de procédures administratives plus simples. De nombreux architectes marocains réinterprètent le riad traditionnel dans un cadre contemporain." },
    { q: "Quels artisans sont nécessaires pour un riad ?", a: "La construction d\u2019un riad fait appel à des corps de métier spécialisés : le maalem (maître artisan) pour le zellige et le bejmat, le tadelakteur pour les enduits chaux, le menuisier ébéniste pour le moucharabieh et les portes sculptées, le ferronnier pour les grilles et rampes, et le fontainier pour les vasques et fontaines en marbre. Un architecte expérimenté coordonne ces artisans." },
    { q: "Combien de temps faut-il pour construire un riad neuf au Maroc ?", a: "La construction d\u2019un riad neuf prend en moyenne 14 à 24 mois. Le gros œuvre dure 4 à 8 mois, les finitions traditionnelles (zellige, tadelakt, bois sculpté) nécessitent 4 à 8 mois supplémentaires. La fabrication artisanale du zellige et du bois doit être lancée 2 à 4 mois avant la pose." },
    { q: "Est-ce qu\u2019un riad neuf peut servir de maison d\u2019hôtes au Maroc ?", a: "Oui, mais il faut obtenir une autorisation touristique du Ministère du Tourisme. Les exigences portent sur la sécurité incendie (extincteurs, issues de secours), la capacité d\u2019accueil (5 chambres maximum pour une maison d\u2019hôtes) et l\u2019hygiène. Prévoyez ces normes dès la conception avec votre architecte pour éviter des travaux de mise en conformité." },
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
        <h2>Comment construire un riad neuf alliant tradition et confort moderne ?</h2>
        <p>
          La <strong>construction d&apos;un riad neuf au Maroc</strong> permet de créer
          une demeure authentique intégrant le meilleur du savoir-faire
          artisanal marocain et le confort contemporain. Contrairement à la
          rénovation d&apos;un riad ancien en médina, construire un riad neuf
          offre une liberté totale sur la conception, l&apos;isolation, les
          installations techniques et l&apos;aménagement des espaces. Ce projet
          séduit aussi bien les particuliers souhaitant une résidence
          principale que les investisseurs visant une maison d&apos;hôtes
          touristique.
        </p>

        <h2>Qu&apos;est-ce qu&apos;un riad ? Les éléments architecturaux essentiels</h2>
        <p>
          Le riad est une maison traditionnelle marocaine organisée autour
          d&apos;un <strong>patio central</strong> (wast ed-dar), véritable cœur de la
          maison. Les pièces s&apos;ouvrent sur ce patio intérieur qui apporte
          lumière et ventilation naturelle. Les éléments architecturaux
          fondamentaux d&apos;un riad sont :
        </p>
        <ul>
          <li><strong>Le patio</strong> : cour intérieure avec fontaine ou bassin, plantations (orangers, jasmins)</li>
          <li><strong>Le zellige</strong> : mosaïque de carreaux de céramique taillés à la main, motifs géométriques</li>
          <li><strong>Le tadelakt</strong> : enduit de chaux polie imperméable, utilisé pour les salles de bain et hammams</li>
          <li><strong>Le bois sculpté</strong> : cèdre ou thuya pour les plafonds, portes et moucharabiehs</li>
          <li><strong>Le bejmat</strong> : carreaux de terre cuite émaillée pour les sols</li>
          <li><strong>La terrasse</strong> : espace de vie en hauteur avec vue panoramique</li>
        </ul>

        <h2>Combien coûte la construction d&apos;un riad neuf ?</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="text-left px-3 py-2 border border-stone-200">Poste</th>
              <th className="text-left px-3 py-2 border border-stone-200">Coût (MAD/m²)</th>
              <th className="text-left px-3 py-2 border border-stone-200">% du budget</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-3 py-2 border border-stone-200">Gros œuvre (fondations, structure, dalle)</td>
              <td className="px-3 py-2 border border-stone-200">2 500 - 3 500</td>
              <td className="px-3 py-2 border border-stone-200">35 - 40 %</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-stone-200">Zellige, tadelakt, bejmat</td>
              <td className="px-3 py-2 border border-stone-200">800 - 2 000</td>
              <td className="px-3 py-2 border border-stone-200">15 - 20 %</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-stone-200">Menuiserie bois (cèdre, thuya)</td>
              <td className="px-3 py-2 border border-stone-200">500 - 1 500</td>
              <td className="px-3 py-2 border border-stone-200">10 - 15 %</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-stone-200">Plomberie, électricité, climatisation</td>
              <td className="px-3 py-2 border border-stone-200">600 - 1 200</td>
              <td className="px-3 py-2 border border-stone-200">10 - 12 %</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-stone-200">Piscine / hammam</td>
              <td className="px-3 py-2 border border-stone-200">400 - 800</td>
              <td className="px-3 py-2 border border-stone-200">5 - 8 %</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-stone-200">Honoraires (architecte, BET)</td>
              <td className="px-3 py-2 border border-stone-200">350 - 600</td>
              <td className="px-3 py-2 border border-stone-200">5 - 8 %</td>
            </tr>
          </tbody>
        </table>
        <p>
          <strong>Budget total indicatif</strong> : un riad neuf de 200 m² avec
          4 chambres, patio, terrasse et finitions traditionnelles coûte
          entre 1 000 000 et 1 600 000 MAD. Avec piscine, hammam et
          finitions haut standing, le budget monte à 1 600 000 -
          2 400 000 MAD.
        </p>

        <h2>Comment concevoir un riad entre tradition et modernité ?</h2>
        <p>
          Un architecte spécialisé en riads saura adapter les proportions
          traditionnelles aux usages contemporains. Le patio, autrefois
          uniquement décoratif, peut intégrer une piscine plongeoir ou un
          jacuzzi. Les chambres sont conçues avec salles de bain en suite
          (tadelakt) et dressings. La cuisine, traditionnellement petite
          dans les riads anciens, est repensée en cuisine ouverte
          fonctionnelle. L&apos;isolation thermique et acoustique, absente des
          riads historiques, est intégrée dans les murs (brique thermique
          25 cm), les menuiseries (double vitrage) et la toiture.
        </p>

        <h2>Pourquoi le savoir-faire des artisans marocains est-il irremplaçable ?</h2>
        <p>
          La qualité d&apos;un riad repose sur le savoir-faire des artisans
          marocains. Les meilleurs se trouvent à Fès (zellige), Marrakech
          (tadelakt, bois sculpté), Salé (poterie) et Essaouira (thuya).
          Un architecte expérimenté en construction de riads dispose d&apos;un
          réseau d&apos;artisans de confiance et sait coordonner leur
          intervention sur le chantier. Les délais de fabrication du zellige
          et du bois sculpté (2 à 4 mois) doivent être anticipés dans le
          planning de construction. Prévoyez un budget artisanat de 15 à
          25 % du coût total pour un résultat authentique.
        </p>

        <h2>Quelle réglementation encadre la construction d&apos;un riad neuf ?</h2>
        <p>
          La construction d&apos;un riad neuf suit les mêmes règles que toute
          construction au Maroc. La <strong>loi 12-90</strong> encadre le permis de
          construire, la <strong>loi 016-89</strong> impose le recours à un architecte
          inscrit à l&apos;Ordre. Si le riad est destiné à une activité de maison
          d&apos;hôtes, une autorisation touristique du ministère du Tourisme est
          nécessaire, avec des exigences spécifiques en matière de sécurité
          incendie, de capacité d&apos;accueil et de classification. La
          <strong> loi 25-90</strong> s&apos;applique si le terrain est en lotissement.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Vous rêvez de construire votre riad au Maroc ? Trouvez sur Bati.ma
            des architectes spécialisés en architecture traditionnelle
            marocaine, avec des réalisations de riads à Marrakech, Fès,
            Essaouira et dans tout le Maroc. Comparez les profils et demandez
            vos devis gratuitement.
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
