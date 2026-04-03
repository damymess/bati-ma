export default function GuideMurVegetal() {
  const faq = [
    {
      q: "Combien co\u00fbte un mur v\u00e9g\u00e9tal au Maroc ?",
      a: "Le co\u00fbt varie de 500 \u00e0 2 000 MAD/m\u00b2 selon le syst\u00e8me choisi. Un mur v\u00e9g\u00e9tal en feutre horticole co\u00fbte 500 \u00e0 800 MAD/m\u00b2, un syst\u00e8me modulaire en PVC 800 \u00e0 1 200 MAD/m\u00b2, et un mur v\u00e9g\u00e9tal haut de gamme avec irrigation automatique 1 200 \u00e0 2 000 MAD/m\u00b2. Ajoutez 100 \u00e0 300 MAD/m\u00b2/an pour l&apos;entretien.",
    },
    {
      q: "Quelles plantes choisir pour un mur v\u00e9g\u00e9tal au Maroc ?",
      a: "Pour l&apos;ext\u00e9rieur : bougainvillier, jasmin \u00e9toil\u00e9, ficus pumila, lierre, rosier grimpant, ch\u00e8vrefeuille et plumbago. Pour l&apos;int\u00e9rieur : pothos, fougère de Boston, philodendron, spathiphyllum et chlorophytum. Privil\u00e9giez les plantes r\u00e9sistantes \u00e0 la chaleur et \u00e0 la s\u00e9cheresse pour l&apos;ext\u00e9rieur.",
    },
    {
      q: "Un mur v\u00e9g\u00e9tal n\u00e9cessite-t-il beaucoup d&apos;entretien ?",
      a: "L&apos;entretien d\u00e9pend du syst\u00e8me d&apos;irrigation. Avec un syst\u00e8me automatique (goutte-\u00e0-goutte connect\u00e9), l&apos;entretien se limite \u00e0 une taille mensuelle et un contr\u00f4le des nutriments. Sans automatisation, l&apos;arrosage est quotidien en \u00e9t\u00e9. Pr\u00e9voyez un budget de 100 \u00e0 300 MAD/m\u00b2/an pour l&apos;entretien professionnel, ou g\u00e9rez-le vous-m\u00eame avec un syst\u00e8me automatique.",
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
        <h2>Mur v\u00e9g\u00e9tal et jardin vertical au Maroc : le guide complet</h2>
        <p>
          Les murs v\u00e9g\u00e9taux connaissent un essor remarquable au Maroc, port\u00e9s par la volont\u00e9 de v\u00e9g\u00e9taliser les espaces urbains et de cr\u00e9er des \u00eelots de fra\u00eecheur dans les villes chaudes. De Casablanca \u00e0 Marrakech, des h\u00f4tels, restaurants et r\u00e9sidences int\u00e8grent d\u00e9sormais ces jardins verticaux qui allient esth\u00e9tique, r\u00e9gulation thermique et am\u00e9lioration de la qualit\u00e9 de l&apos;air.
        </p>

        <h2>Types de murs v\u00e9g\u00e9taux adapt\u00e9s au Maroc</h2>
        <p>
          Plusieurs syst\u00e8mes existent, chacun avec ses avantages et contraintes dans le contexte climatique marocain :
        </p>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Syst\u00e8me</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Co\u00fbt/m\u00b2</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Entretien</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Dur\u00e9e de vie</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">Feutre horticole</td>
              <td className="border border-stone-200 px-3 py-2">500 - 800 MAD</td>
              <td className="border border-stone-200 px-3 py-2">\u00c9lev\u00e9</td>
              <td className="border border-stone-200 px-3 py-2">5 - 8 ans</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">Modules PVC/plastique</td>
              <td className="border border-stone-200 px-3 py-2">800 - 1 200 MAD</td>
              <td className="border border-stone-200 px-3 py-2">Mod\u00e9r\u00e9</td>
              <td className="border border-stone-200 px-3 py-2">10 - 15 ans</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">Gabions v\u00e9g\u00e9talis\u00e9s</td>
              <td className="border border-stone-200 px-3 py-2">600 - 1 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">Faible</td>
              <td className="border border-stone-200 px-3 py-2">15 - 20 ans</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">Syst\u00e8me hydroponique</td>
              <td className="border border-stone-200 px-3 py-2">1 200 - 2 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">Automatis\u00e9</td>
              <td className="border border-stone-200 px-3 py-2">10 - 15 ans</td>
            </tr>
          </tbody>
        </table>

        <h2>Plantes adapt\u00e9es au climat marocain</h2>
        <p>
          Le choix des plantes est d\u00e9terminant pour la r\u00e9ussite de votre mur v\u00e9g\u00e9tal. Le climat marocain, avec ses \u00e9t\u00e9s chauds et secs, impose de s\u00e9lectionner des esp\u00e8ces r\u00e9sistantes :
        </p>
        <p>
          <strong>Ext\u00e9rieur plein soleil :</strong> bougainvillier (spectaculaire, r\u00e9sistant), jasmin \u00e9toil\u00e9 (parfum\u00e9, persistant), plumbago (bleu, floraison longue), rosier grimpant (vari\u00e9t\u00e9s adapt\u00e9es), ch\u00e8vrefeuille (croissance rapide), et bignone (fleurs oranges tropicales).
        </p>
        <p>
          <strong>Ext\u00e9rieur mi-ombre :</strong> ficus pumila (couvre-mur naturel), lierre (classique, r\u00e9sistant), fougères (zones humides), et asparagus (retombant \u00e9l\u00e9gant).
        </p>
        <p>
          <strong>Int\u00e9rieur :</strong> pothos dor\u00e9 (imbattable en int\u00e9rieur), philodendron (grandes feuilles d\u00e9coratives), spathiphyllum (fleur blanche, purifiant), chlorophytum (d\u00e9polluant), et fougère de Boston (humidit\u00e9).
        </p>

        <h2>Irrigation : la cl\u00e9 de la r\u00e9ussite</h2>
        <p>
          Dans le climat marocain, l&apos;irrigation est le facteur critique. Un syst\u00e8me de goutte-\u00e0-goutte automatis\u00e9 avec programmateur est indispensable pour les murs ext\u00e9rieurs. En \u00e9t\u00e9, un mur v\u00e9g\u00e9tal de 10 m\u00b2 consomme environ 20 \u00e0 40 litres d&apos;eau par jour. L&apos;utilisation d&apos;eau de r\u00e9cup\u00e9ration (eaux grises filtr\u00e9es) r\u00e9duit la facture et s&apos;inscrit dans une d\u00e9marche \u00e9cologique.
        </p>
        <p>
          Le co\u00fbt d&apos;un syst\u00e8me d&apos;irrigation automatique pour un mur de 10 m\u00b2 est de 2 000 \u00e0 5 000 MAD, incluant la pompe, le programmateur, les tuyaux et les goutteurs. Un programmateur connect\u00e9 (Wi-Fi) permet de piloter l&apos;arrosage depuis votre smartphone.
        </p>

        <h2>B\u00e9n\u00e9fices thermiques et \u00e9conomiques</h2>
        <p>
          Un mur v\u00e9g\u00e9tal ext\u00e9rieur r\u00e9duit la temp\u00e9rature de surface du mur de 10 \u00e0 15\u00b0C en \u00e9t\u00e9, ce qui diminue les besoins en climatisation de 20 \u00e0 30 %. Pour une fa\u00e7ade ouest de 20 m\u00b2 v\u00e9g\u00e9talis\u00e9e, l&apos;\u00e9conomie annuelle en \u00e9lectricit\u00e9 peut atteindre 2 000 \u00e0 4 000 MAD. Le mur v\u00e9g\u00e9tal am\u00e9liore aussi l&apos;isolation acoustique (r\u00e9duction de 5 \u00e0 10 dB) et augmente la valeur du bien immobilier.
        </p>

        <h2>Entretien et maintenance</h2>
        <p>
          L&apos;entretien r\u00e9gulier comprend la taille des plantes (mensuelle), le remplacement des plants morts (5 \u00e0 10 % par an), le contr\u00f4le du syst\u00e8me d&apos;irrigation (trimestriel), l&apos;apport d&apos;engrais liquide (mensuel en saison de croissance) et le traitement pr\u00e9ventif contre les parasites. Un contrat d&apos;entretien avec un paysagiste co\u00fbte 100 \u00e0 300 MAD/m\u00b2/an.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Pour un mur v\u00e9g\u00e9tal r\u00e9ussi, int\u00e9grez-le d\u00e8s la conception architecturale. L&apos;architecte pr\u00e9voira l&apos;\u00e9tanch\u00e9it\u00e9 du mur support, les arriv\u00e9es d&apos;eau et l&apos;orientation optimale. Sur Bati.ma, trouvez un architecte sensible au v\u00e9g\u00e9tal pour un projet harmonieux entre b\u00e2ti et nature.
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
