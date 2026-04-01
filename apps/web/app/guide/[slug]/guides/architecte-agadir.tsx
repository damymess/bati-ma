export default function GuideArchitecteAgadir() {
  const faq = [
    { q: "Quel est le tarif moyen d\u2019un architecte à Agadir ?", a: "Les honoraires d\u2019un architecte à Agadir sont généralement inférieurs de 15 à 20 % par rapport à Casablanca. Comptez entre 3 % et 7 % du montant total des travaux pour une mission complète, ou entre 15 000 et 40 000 MAD pour une mission de conception et dépôt de permis de construire." },
    { q: "Quels quartiers d\u2019Agadir sont les plus prisés pour construire ?", a: "Les zones les plus demandées sont Founty (front de mer haut de gamme), la Cité Balnéaire (résidentiel familial), Hay Mohammadi (centre-ville accessible), et Dcheira El Jihadia pour les budgets plus modérés. Chaque quartier a ses propres contraintes urbanistiques à vérifier auprès de la commune." },
    { q: "Faut-il un architecte spécialisé en construction parasismique à Agadir ?", a: "Oui, Agadir se situe dans une zone sismique classée. La réglementation RPS 2000 impose des normes parasismiques strictes. Un architecte local expérimenté connaît ces exigences et travaille avec des bureaux d\u2019études techniques (BET) spécialisés pour garantir la conformité structurelle de votre projet." },
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
        <h2>Agadir : une ville reconstruite, un urbanisme unique</h2>
        <p>
          Après le séisme dévastateur de 1960, Agadir a été entièrement reconstruite
          selon un plan d&apos;urbanisme moderne. Cette particularité fait d&apos;Agadir
          une ville à l&apos;architecture résolument contemporaine, avec des boulevards
          larges, des normes parasismiques strictes et un style balnéaire qui la
          distingue des autres grandes villes marocaines.
        </p>

        <h2>Pourquoi faire appel à un architecte local à Agadir ?</h2>
        <p>
          Un architecte basé à Agadir maîtrise les spécificités de la région
          Souss-Massa : réglementation parasismique RPS 2000, contraintes du
          littoral, climat semi-aride et matériaux adaptés. Il connaît les
          procédures de la commune urbaine d&apos;Agadir et des communes périphériques
          comme Dcheira El Jihadia, Aït Melloul ou Inezgane, ce qui accélère
          l&apos;obtention de votre permis de construire.
        </p>

        <h2>Les zones de construction à Agadir</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="text-left px-3 py-2 border border-stone-200">Zone</th>
              <th className="text-left px-3 py-2 border border-stone-200">Type de projets</th>
              <th className="text-left px-3 py-2 border border-stone-200">Prix terrain (MAD/m²)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-3 py-2 border border-stone-200">Founty / Secteur touristique</td><td className="px-3 py-2 border border-stone-200">Villas haut de gamme, hôtels</td><td className="px-3 py-2 border border-stone-200">5 000 – 12 000</td></tr>
            <tr><td className="px-3 py-2 border border-stone-200">Cité Balnéaire</td><td className="px-3 py-2 border border-stone-200">Résidentiel familial</td><td className="px-3 py-2 border border-stone-200">3 000 – 6 000</td></tr>
            <tr><td className="px-3 py-2 border border-stone-200">Hay Mohammadi / Centre</td><td className="px-3 py-2 border border-stone-200">Immeubles, commerces</td><td className="px-3 py-2 border border-stone-200">4 000 – 8 000</td></tr>
            <tr><td className="px-3 py-2 border border-stone-200">Dcheira El Jihadia</td><td className="px-3 py-2 border border-stone-200">Logements économiques, R+2</td><td className="px-3 py-2 border border-stone-200">1 500 – 3 500</td></tr>
            <tr><td className="px-3 py-2 border border-stone-200">Aït Melloul</td><td className="px-3 py-2 border border-stone-200">Zones industrielles, habitat</td><td className="px-3 py-2 border border-stone-200">1 000 – 2 500</td></tr>
          </tbody>
        </table>

        <h2>Style architectural balnéaire d&apos;Agadir</h2>
        <p>
          L&apos;architecture à Agadir se caractérise par des lignes épurées, de grandes
          ouvertures vitrées orientées vers l&apos;océan, des terrasses spacieuses et
          l&apos;utilisation de matériaux résistants au sel marin. Les architectes
          locaux combinent souvent le style contemporain avec des touches
          traditionnelles amazighes (motifs géométriques, pierre locale du Souss).
        </p>

        <h2>Tarifs des architectes à Agadir</h2>
        <p>
          Les honoraires à Agadir sont en moyenne 15 à 20 % moins élevés qu&apos;à
          Casablanca ou Rabat, reflétant un coût de la vie plus accessible dans
          la région Souss-Massa.
        </p>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="text-left px-3 py-2 border border-stone-200">Mission</th>
              <th className="text-left px-3 py-2 border border-stone-200">Tarif indicatif</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-3 py-2 border border-stone-200">Conception + permis de construire</td><td className="px-3 py-2 border border-stone-200">15 000 – 40 000 MAD</td></tr>
            <tr><td className="px-3 py-2 border border-stone-200">Mission complète (conception + suivi)</td><td className="px-3 py-2 border border-stone-200">3 % – 7 % du montant travaux</td></tr>
            <tr><td className="px-3 py-2 border border-stone-200">Consultation / avant-projet</td><td className="px-3 py-2 border border-stone-200">2 000 – 5 000 MAD</td></tr>
          </tbody>
        </table>

        <div className="bg-[#f4ece7] border border-stone-200 rounded-lg p-4 my-6">
          <p className="text-sm text-stone-700 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-600">
            À Agadir, vérifiez que votre architecte a une expérience en construction
            parasismique et qu&apos;il collabore avec un BET agréé. La norme RPS 2000
            est obligatoire et son non-respect peut entraîner le refus du permis
            de construire ou des problèmes lors de la réception des travaux.
          </p>
        </div>

        <h2>Normes parasismiques : une obligation à Agadir</h2>
        <p>
          Depuis le tremblement de terre de 1960, Agadir applique des règles
          parasismiques parmi les plus strictes du Maroc. Le règlement de
          construction parasismique RPS 2000 classe Agadir en zone de sismicité
          élevée. Votre architecte doit intégrer ces contraintes dès la phase
          de conception : fondations renforcées, chaînages horizontaux et
          verticaux, joints de dilatation et matériaux adaptés.
        </p>

        <h2>Comment trouver le bon architecte à Agadir ?</h2>
        <p>
          Sur Bati.ma, vous pouvez consulter les profils d&apos;architectes vérifiés
          dans la région Souss-Massa, comparer leurs réalisations, lire les avis
          clients et demander des devis gratuits. Filtrez par spécialité
          (villa balnéaire, immeuble, rénovation) et par zone géographique pour
          trouver le professionnel le mieux adapté à votre projet.
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
