import Link from "next/link";

export default function GuideRenovationRiad() {
  const faq = [
    {
      q: "Combien co\u00fbte la r\u00e9novation d&apos;un riad au Maroc ?",
      a: "Les co\u00fbts varient selon l&apos;ampleur : r\u00e9novation l\u00e9g\u00e8re (peinture, \u00e9lectricit\u00e9) 3 000 \u00e0 5 000 MAD/m\u00b2 ; r\u00e9novation moyenne (salles de bain, cuisine, sols) 5 000 \u00e0 8 000 MAD/m\u00b2 ; r\u00e9novation compl\u00e8te (structure, toiture, tout refaire) 8 000 \u00e0 15 000 MAD/m\u00b2 ; transformation en maison d&apos;h\u00f4tes 10 000 \u00e0 20 000 MAD/m\u00b2.",
    },
    {
      q: "Faut-il une autorisation pour r\u00e9nover un riad en m\u00e9dina ?",
      a: "Oui. Les riads situ\u00e9s dans les m\u00e9dinas class\u00e9es (Marrakech, F\u00e8s, Essaouira, Mekn\u00e8s) sont prot\u00e9g\u00e9s par la r\u00e9glementation du patrimoine. Toute r\u00e9novation doit \u00eatre autoris\u00e9e par l&apos;ADER (Agence pour le D\u00e9d\u00e9nsification et la R\u00e9habilitation) \u00e0 F\u00e8s ou la commune concern\u00e9e. Un architecte inscrit \u00e0 l&apos;Ordre est obligatoire.",
    },
    {
      q: "Combien de temps dure la r\u00e9novation d&apos;un riad ?",
      a: "Une r\u00e9novation l\u00e9g\u00e8re prend 2 \u00e0 4 mois. Une r\u00e9novation compl\u00e8te n\u00e9cessite 6 \u00e0 12 mois. La transformation en maison d&apos;h\u00f4tes peut prendre 12 \u00e0 18 mois en raison des normes de s\u00e9curit\u00e9 et d&apos;accessibilit\u00e9 \u00e0 respecter. L&apos;acc\u00e8s difficile en m\u00e9dina rallonge souvent les d\u00e9lais.",
    },
    { q: "Faut-il un architecte pour un projet de renovation riad ?", a: "Conform\u00e9ment \u00e0 la loi 16-89, le recours \u00e0 un architecte inscrit \u00e0 l\u2019Ordre est obligatoire pour toute construction au Maroc. M\u00eame pour les projets techniques, l\u2019architecte coordonne le permis de construire et assure la conformit\u00e9. Consultez les profils v\u00e9rifi\u00e9s sur Bati.ma." },
    { q: "Comment obtenir un devis pour renovation riad ?", a: "Demandez au minimum 3 devis d\u00e9taill\u00e9s aupr\u00e8s de professionnels diff\u00e9rents. Comparez les postes ligne par ligne, v\u00e9rifiez les r\u00e9f\u00e9rences et exigez un calendrier d\u2019ex\u00e9cution. Sur Bati.ma, vous pouvez contacter directement les architectes sp\u00e9cialis\u00e9s et demander vos devis gratuitement." },
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
        <h2>Pourquoi r\u00e9nover un riad au Maroc</h2>
        <p>
          Le riad est l&apos;habitation traditionnelle des m\u00e9dinas marocaines : une maison \u00e0 patio central, tourn\u00e9e vers l&apos;int\u00e9rieur, avec une architecture s\u00e9culaire. La r\u00e9novation de riad est devenue un investissement prisé, tant pour l&apos;habitat personnel que pour la transformation en maison d&apos;h\u00f4tes. Les villes de Marrakech, F\u00e8s, Essaouira et Mekn\u00e8s concentrent l&apos;essentiel des projets.
        </p>

        <h2>Les villes phares de la r\u00e9novation de riad</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Ville</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Sp\u00e9cificit\u00e9s</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Prix achat riad brut</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">Marrakech</td><td className="border border-stone-200 px-3 py-2">March\u00e9 mature, forte demande touristique</td><td className="border border-stone-200 px-3 py-2">800 000 \u00e0 5 000 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">F\u00e8s</td><td className="border border-stone-200 px-3 py-2">Plus grande m\u00e9dina, patrimoine UNESCO</td><td className="border border-stone-200 px-3 py-2">400 000 \u00e0 2 500 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Essaouira</td><td className="border border-stone-200 px-3 py-2">Charme c\u00f4tier, riads plus petits</td><td className="border border-stone-200 px-3 py-2">500 000 \u00e0 3 000 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Mekn\u00e8s</td><td className="border border-stone-200 px-3 py-2">March\u00e9 \u00e9mergent, prix attractifs</td><td className="border border-stone-200 px-3 py-2">300 000 \u00e0 1 500 000 MAD</td></tr>
          </tbody>
        </table>

        <h2>Techniques traditionnelles \u00e0 pr\u00e9server</h2>
        <p>
          Le <strong>zellige</strong> est la mosa\u00efque \u00e9maill\u00e9e taill\u00e9e \u00e0 la main, signature de l&apos;architecture marocaine. Comptez 800 \u00e0 2 000 MAD/m\u00b2 pour un zellige artisanal. Le <strong>tadelakt</strong> est un enduit \u00e0 base de chaux de Marrakech, imperm\u00e9able et liss\u00e9 au galet : 400 \u00e0 800 MAD/m\u00b2. Le <strong>moucharabieh</strong> (claustra en bois sculpt\u00e9) habille les fen\u00eatres : 2 000 \u00e0 5 000 MAD/pi\u00e8ce. Le <strong>gebs</strong> (pl\u00e2tre sculpt\u00e9) orne plafonds et corniches : 300 \u00e0 800 MAD/m\u00b2.
        </p>

        <h2>Co\u00fbts d\u00e9taill\u00e9s par type de r\u00e9novation</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Type</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Travaux inclus</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Co\u00fbt / m\u00b2</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">L\u00e9g\u00e8re</td><td className="border border-stone-200 px-3 py-2">Peinture, \u00e9lectricit\u00e9, petites r\u00e9parations</td><td className="border border-stone-200 px-3 py-2">3 000 \u00e0 5 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Moyenne</td><td className="border border-stone-200 px-3 py-2">SdB, cuisine, sols, plomberie</td><td className="border border-stone-200 px-3 py-2">5 000 \u00e0 8 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Compl\u00e8te</td><td className="border border-stone-200 px-3 py-2">Structure, toiture, tout refaire</td><td className="border border-stone-200 px-3 py-2">8 000 \u00e0 15 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Maison d&apos;h\u00f4tes</td><td className="border border-stone-200 px-3 py-2">+ normes s\u00e9curit\u00e9, acc\u00e8s, confort</td><td className="border border-stone-200 px-3 py-2">10 000 \u00e0 20 000 MAD</td></tr>
          </tbody>
        </table>

        <h2>R\u00e9glementation patrimoine</h2>
        <p>
          Les m\u00e9dinas class\u00e9es sont r\u00e9gies par des r\u00e8gles strictes de protection du patrimoine. \u00c0 F\u00e8s, l&apos;ADER supervise les r\u00e9novations. \u00c0 Marrakech, la commune et les autorit\u00e9s du patrimoine doivent approuver tout projet. Les fa\u00e7ades ext\u00e9rieures, la hauteur et les mat\u00e9riaux doivent respecter le cachet de la m\u00e9dina. Un architecte exp\u00e9riment\u00e9 en r\u00e9novation de riad est indispensable pour naviguer dans ces contraintes.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm font-semibold text-[#b5522a] mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Faites toujours r\u00e9aliser un diagnostic complet avant d&apos;acheter un riad : structure, humidit\u00e9, toiture, \u00e9lectricit\u00e9, plomberie. Un architecte sp\u00e9cialis\u00e9 \u00e9value les travaux n\u00e9cessaires et leur co\u00fbt. Trouvez-en un sur{" "}
            <Link href="/architectes" className="text-[#b5522a] underline">Bati.ma</Link>.
          </p>
        </div>

        <h2>Dur\u00e9e des travaux et logistique</h2>
        <p>
          L&apos;acc\u00e8s aux riads en m\u00e9dina est souvent limit\u00e9 aux ruelles \u00e9troites. Les mat\u00e9riaux sont transport\u00e9s \u00e0 dos de mulet ou \u00e0 bras. Cette contrainte rallonge les d\u00e9lais et augmente les co\u00fbts de 10 \u00e0 20 %. Pr\u00e9voyez 6 \u00e0 12 mois pour une r\u00e9novation compl\u00e8te et 12 \u00e0 18 mois pour une transformation en maison d&apos;h\u00f4tes.
        </p>

        <h2>Trouver des artisans sp\u00e9cialis\u00e9s</h2>
        <p>
          Les ma\u00e2lems (ma\u00eetres artisans) de F\u00e8s et Marrakech sont les plus r\u00e9put\u00e9s pour le zellige, le tadelakt et le gebs. Votre architecte coordonne g\u00e9n\u00e9ralement les artisans. V\u00e9rifiez toujours les r\u00e9f\u00e9rences et visitez des chantiers en cours avant de vous engager. Les bons artisans sont souvent r\u00e9serv\u00e9s plusieurs mois \u00e0 l&apos;avance.
        </p>

        <p className="mt-6 text-sm text-stone-500">
          Trouvez un architecte sp\u00e9cialist\u00e9 en r\u00e9novation de riad sur{" "}
          <Link href="/architectes" className="text-[#b5522a] underline">
            Bati.ma \u2014 Architectes au Maroc
          </Link>
        </p>
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
