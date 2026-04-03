import Link from "next/link";

export default function GuideEnergieSolaireMaisonMaroc() {
  const faq = [
    {
      q: "Combien co\u00fbte une installation solaire pour une maison au Maroc ?",
      a: "Pour une installation de 3 kWc (suffisante pour une maison de 100 \u00e0 150 m\u00b2), comptez entre 30 000 et 50 000 MAD pose comprise. Une installation de 6 kWc pour une villa co\u00fbte entre 55 000 et 90 000 MAD. Le retour sur investissement se fait en 4 \u00e0 7 ans selon la consommation.",
    },
    {
      q: "Quelle est la r\u00e9glementation solaire au Maroc en 2026 ?",
      a: "La loi 13-09 autorise l&apos;autoproduction d&apos;\u00e9lectricit\u00e9 renouvelable. Depuis la RTCM 2024, les nouvelles constructions doivent atteindre des performances \u00e9nerg\u00e9tiques minimales. L&apos;injection dans le r\u00e9seau est possible sous certaines conditions via un contrat avec l&apos;ONEE ou le distributeur local.",
    },
    {
      q: "Quels panneaux solaires choisir au Maroc ?",
      a: "Les panneaux monocristallins offrent le meilleur rendement (20-22 %) et sont recommand\u00e9s pour les toitures limit\u00e9es. Les polycristallins (16-18 %) sont plus abordables. Pour l&apos;eau chaude, les capteurs thermiques \u00e0 tubes sous vide sont les plus performants au Maroc gr\u00e2ce \u00e0 l&apos;ensoleillement exceptionnel.",
    },
    { q: "Faut-il un architecte pour un projet de energie solaire maison au Maroc ?", a: "Conform\u00e9ment \u00e0 la loi 16-89, le recours \u00e0 un architecte inscrit \u00e0 l\u2019Ordre est obligatoire pour toute construction au Maroc. M\u00eame pour les projets techniques, l\u2019architecte coordonne le permis de construire et assure la conformit\u00e9. Consultez les profils v\u00e9rifi\u00e9s sur Bati.ma." },
    { q: "Comment obtenir un devis pour energie solaire maison au Maroc ?", a: "Demandez au minimum 3 devis d\u00e9taill\u00e9s aupr\u00e8s de professionnels diff\u00e9rents. Comparez les postes ligne par ligne, v\u00e9rifiez les r\u00e9f\u00e9rences et exigez un calendrier d\u2019ex\u00e9cution. Sur Bati.ma, vous pouvez contacter directement les architectes sp\u00e9cialis\u00e9s et demander vos devis gratuitement." },
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
        <h2>Le Maroc, champion de l&apos;ensoleillement</h2>
        <p>
          Avec plus de 3 000 heures d&apos;ensoleillement par an et une irradiation moyenne de 5 kWh/m\u00b2/jour, le Maroc figure parmi les pays les plus favorables au solaire au monde. Cette ressource naturelle exceptionnelle rend l&apos;\u00e9nergie solaire particuli\u00e8rement rentable pour les habitations, que ce soit pour la production d&apos;\u00e9lectricit\u00e9 ou le chauffage de l&apos;eau.
        </p>

        <h2>Types de panneaux solaires adapt\u00e9s au Maroc</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Type</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Rendement</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Prix indicatif / kWc</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">Monocristallin</td><td className="border border-stone-200 px-3 py-2">20 \u00e0 22 %</td><td className="border border-stone-200 px-3 py-2">10 000 \u00e0 14 000 MAD</td><td className="border border-stone-200 px-3 py-2">\u00c9lectricit\u00e9</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Polycristallin</td><td className="border border-stone-200 px-3 py-2">16 \u00e0 18 %</td><td className="border border-stone-200 px-3 py-2">8 000 \u00e0 11 000 MAD</td><td className="border border-stone-200 px-3 py-2">\u00c9lectricit\u00e9</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Thermique plan</td><td className="border border-stone-200 px-3 py-2">60 \u00e0 70 %</td><td className="border border-stone-200 px-3 py-2">5 000 \u00e0 8 000 MAD / capteur</td><td className="border border-stone-200 px-3 py-2">Eau chaude</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Tubes sous vide</td><td className="border border-stone-200 px-3 py-2">75 \u00e0 85 %</td><td className="border border-stone-200 px-3 py-2">7 000 \u00e0 12 000 MAD / capteur</td><td className="border border-stone-200 px-3 py-2">Eau chaude</td></tr>
          </tbody>
        </table>

        <h2>Co\u00fbts et rentabilit\u00e9 d&apos;une installation</h2>
        <p>
          Une installation photovolta\u00efque de 3 kWc co\u00fbte entre 30 000 et 50 000 MAD et produit environ 4 500 \u00e0 5 500 kWh/an au Maroc. Pour un foyer consommant 5 000 kWh/an, cela couvre la quasi-totalit\u00e9 des besoins. Le retour sur investissement se situe entre 4 et 7 ans, avec une dur\u00e9e de vie des panneaux de 25 \u00e0 30 ans.
        </p>

        <h2>R\u00e9glementation MASEN et loi 13-09</h2>
        <p>
          La loi 13-09 relative aux \u00e9nergies renouvelables autorise l&apos;autoproduction pour les particuliers et les entreprises. Le programme MASEN encourage le solaire r\u00e9sidentiel. Depuis la RTCM 2024, les nouvelles constructions doivent int\u00e9grer des exigences thermiques minimales, rendant le solaire encore plus attractif. L&apos;injection du surplus dans le r\u00e9seau est possible avec un contrat sp\u00e9cifique.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm font-semibold text-[#b5522a] mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Int\u00e9grez le solaire d\u00e8s la conception architecturale : orientation de la toiture, inclinaison optimale (30\u00b0 au Maroc) et espace technique. Sur{" "}
            <Link href="/architectes" className="text-[#b5522a] underline">Bati.ma</Link>, trouvez des architectes sp\u00e9cialis\u00e9s en construction durable.
          </p>
        </div>

        <h2>Comment choisir un installateur solaire fiable ?</h2>
        <p>
          Privil\u00e9giez les installateurs certifi\u00e9s ADEREE ou agr\u00e9\u00e9s par les fabricants de panneaux. V\u00e9rifiez les garanties (minimum 10 ans sur l&apos;installation, 25 ans sur les panneaux). Demandez au moins 3 devis et v\u00e9rifiez les r\u00e9f\u00e9rences locales. Les principales villes (Casablanca, Marrakech, Rabat, Tanger) disposent de nombreux installateurs qualifi\u00e9s.
        </p>

        <h2>Solaire thermique : eau chaude gratuite</h2>
        <p>
          Le chauffe-eau solaire est un investissement tr\u00e8s rentable au Maroc. Un syst\u00e8me de 200 litres (suffisant pour une famille de 4 personnes) co\u00fbte entre 8 000 et 15 000 MAD et r\u00e9duit la facture d&apos;\u00e9lectricit\u00e9 ou de gaz de 60 \u00e0 80 %. Le programme PROMASOL a facilit\u00e9 l&apos;\u00e9quipement de centaines de milliers de foyers.
        </p>

        <p className="mt-6 text-sm text-stone-500">
          Concevez votre maison solaire avec un architecte sur{" "}
          <Link href="/architectes" className="text-[#b5522a] underline">
            Bati.ma \u2014 Architectes sp\u00e9cialis\u00e9s
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
