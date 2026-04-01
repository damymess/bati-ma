import Link from "next/link";

export default function GuideMondial2030() {
  const faq = [
    {
      q: "Combien de stades le Maroc construit-il pour le Mondial 2030 ?",
      a: "Le Maroc pr\u00e9voit 6 stades : le Grand Stade de Casablanca (93 000 places, enti\u00e8rement neuf), le stade de Rabat (extension \u00e0 75 000), le stade de Marrakech (extension \u00e0 65 000), et les r\u00e9novations des stades de Tanger, F\u00e8s et Agadir. L&apos;investissement total pour les stades d\u00e9passe 20 milliards MAD.",
    },
    {
      q: "Quelles opportunit\u00e9s pour les architectes marocains avec le Mondial 2030 ?",
      a: "Les opportunit\u00e9s couvrent les stades, l&apos;h\u00f4tellerie (200 000 lits suppl\u00e9mentaires), les infrastructures de transport (LGV, tramways, a\u00e9roports), les espaces publics (fan zones, parcs urbains) et la r\u00e9novation urbaine des villes h\u00f4tes. Des milliers de projets sont pr\u00e9vus entre 2025 et 2030.",
    },
    {
      q: "Quel est le budget total des infrastructures du Mondial 2030 au Maroc ?",
      a: "Le budget global est estim\u00e9 entre 50 et 80 milliards MAD pour les infrastructures directement li\u00e9es au Mondial. En incluant les projets connexes (routes, h\u00f4tels, am\u00e9nagements urbains), l&apos;investissement total pourrait d\u00e9passer 150 milliards MAD sur la p\u00e9riode 2025-2030.",
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
        <h2>Le Mondial 2030 : catalyseur de la transformation architecturale du Maroc</h2>
        <p>
          La Coupe du Monde 2030, co-organis\u00e9e par le Maroc, l&apos;Espagne et le Portugal, repr\u00e9sente le plus grand chantier architectural de l&apos;histoire du Royaume. Avec 6 villes h\u00f4tes, des dizaines de milliards d&apos;investissements et des milliers de projets connexes, le Mondial est un acc\u00e9l\u00e9rateur sans pr\u00e9c\u00e9dent pour le secteur de l&apos;architecture et du BTP au Maroc.
        </p>

        <h2>Les 6 stades du Mondial 2030 au Maroc</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Stade</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Ville</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Capacit\u00e9</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Type</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">Grand Stade Hassan II</td><td className="border border-stone-200 px-3 py-2">Casablanca</td><td className="border border-stone-200 px-3 py-2">93 000 places</td><td className="border border-stone-200 px-3 py-2">Construction neuve</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Stade Moulay Abdallah</td><td className="border border-stone-200 px-3 py-2">Rabat</td><td className="border border-stone-200 px-3 py-2">75 000 places</td><td className="border border-stone-200 px-3 py-2">Extension</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Grand Stade de Marrakech</td><td className="border border-stone-200 px-3 py-2">Marrakech</td><td className="border border-stone-200 px-3 py-2">65 000 places</td><td className="border border-stone-200 px-3 py-2">Extension</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Stade Ibn Batouta</td><td className="border border-stone-200 px-3 py-2">Tanger</td><td className="border border-stone-200 px-3 py-2">45 000+ places</td><td className="border border-stone-200 px-3 py-2">R\u00e9novation</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Complexe Sportif de F\u00e8s</td><td className="border border-stone-200 px-3 py-2">F\u00e8s</td><td className="border border-stone-200 px-3 py-2">45 000+ places</td><td className="border border-stone-200 px-3 py-2">R\u00e9novation</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Stade Adrar</td><td className="border border-stone-200 px-3 py-2">Agadir</td><td className="border border-stone-200 px-3 py-2">45 000+ places</td><td className="border border-stone-200 px-3 py-2">R\u00e9novation</td></tr>
          </tbody>
        </table>

        <h2>Le Grand Stade de Casablanca : projet phare</h2>
        <p>
          Avec 93 000 places, ce sera le plus grand stade d&apos;Afrique et l&apos;un des plus grands au monde. Con\u00e7u avec un toit r\u00e9tractable, il int\u00e8gre des technologies durables (panneaux solaires, r\u00e9cup\u00e9ration d&apos;eau). Le projet inclut un complexe multifonctionnel (commerces, h\u00f4tels, bureaux) sur plus de 100 hectares.
        </p>

        <h2>Infrastructures de transport</h2>
        <p>
          L&apos;extension du TGV (LGV) vers Marrakech et Agadir est pr\u00e9vue pour 2030. De nouvelles lignes de tramway sont planifi\u00e9es \u00e0 Casablanca, Marrakech et Tanger. Les a\u00e9roports de Casablanca, Marrakech et Tanger font l&apos;objet d&apos;extensions majeures pour absorber les 5 millions de visiteurs attendus.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm font-semibold text-[#b5522a] mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Les appels d&apos;offres li\u00e9s au Mondial 2030 sont publi\u00e9s r\u00e9guli\u00e8rement. Inscrivez-vous aux portails de march\u00e9s publics et valorisez votre expertise sur{" "}
            <Link href="/architectes" className="text-[#b5522a] underline">Bati.ma</Link>.
          </p>
        </div>

        <h2>H\u00f4tellerie : 200 000 lits suppl\u00e9mentaires</h2>
        <p>
          Le Maroc ambitionne de doubler sa capacit\u00e9 h\u00f4teli\u00e8re dans les villes h\u00f4tes. Des dizaines de projets h\u00f4teliers sont en cours : grandes cha\u00eenes internationales (Marriott, Hilton, Accor) et h\u00f4tels boutique. Les architectes sp\u00e9cialis\u00e9s en h\u00f4tellerie sont particuli\u00e8rement recherch\u00e9s pour ces projets haut de gamme.
        </p>

        <h2>R\u00e9novation urbaine des villes h\u00f4tes</h2>
        <p>
          Chaque ville h\u00f4te b\u00e9n\u00e9ficie d&apos;un programme de r\u00e9novation urbaine : espaces publics, places, jardins, fan zones, signalisation et mobilier urbain. Casablanca pr\u00e9voit la requalification de plusieurs quartiers autour du Grand Stade. Marrakech am\u00e9nage de nouveaux axes reliant l&apos;a\u00e9roport au centre.
        </p>

        <h2>Opportunit\u00e9s pour les architectes marocains</h2>
        <p>
          Les cabinets marocains peuvent se positionner sur les projets h\u00f4teliers, les \u00e9quipements publics, les espaces commerciaux et la r\u00e9novation urbaine. Les partenariats avec des cabinets internationaux se multiplient. La ma\u00eetrise du contexte local (r\u00e9glementation, climat, culture) est un atout majeur pour les architectes marocains.
        </p>

        <p className="mt-6 text-sm text-stone-500">
          Trouvez des architectes sp\u00e9cialis\u00e9s sur{" "}
          <Link href="/architectes" className="text-[#b5522a] underline">
            Bati.ma \u2014 Annuaire des architectes
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
