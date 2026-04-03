export default function GuideTinyHouse() {
  const faq = [
    {
      q: "Les tiny houses sont-elles l\u00e9gales au Maroc ?",
      a: "Le cadre juridique est flou. Une tiny house sur roues est consid\u00e9r\u00e9e comme une caravane (pas de permis de construire n\u00e9cessaire), mais son stationnement permanent peut poser probl\u00e8me selon les r\u00e8glements communaux. Une tiny house sur fondations est trait\u00e9e comme une construction classique et n\u00e9cessite un permis. En zone rurale, la tol\u00e9rance est g\u00e9n\u00e9ralement plus grande.",
    },
    {
      q: "Combien co\u00fbte une tiny house au Maroc en 2026 ?",
      a: "Les prix varient de 80 000 \u00e0 250 000 MAD selon la taille (15-35 m\u00b2), les mat\u00e9riaux et le niveau d&apos;\u00e9quipement. Un mod\u00e8le basique en bois de 20 m\u00b2 co\u00fbte environ 80 000 \u00e0 120 000 MAD. Un mod\u00e8le haut de gamme avec panneaux solaires, r\u00e9cup\u00e9ration d&apos;eau et finitions soign\u00e9es atteint 180 000 \u00e0 250 000 MAD.",
    },
    {
      q: "O\u00f9 installer sa tiny house au Maroc ?",
      a: "Les meilleurs emplacements sont les terrains agricoles avec autorisation du propri\u00e9taire, les campings et aires de caravaning, les \u00e9co-villages en d\u00e9veloppement (r\u00e9gion de Chefchaouen, Atlas), et les terrains priv\u00e9s en zone rurale. \u00c9vitez les zones urbaines o\u00f9 le stationnement permanent de structures alternatives est g\u00e9n\u00e9ralement interdit.",
    },
    { q: "Faut-il un architecte pour un projet de tiny house ?", a: "Conform\u00e9ment \u00e0 la loi 16-89, le recours \u00e0 un architecte inscrit \u00e0 l\u2019Ordre est obligatoire pour toute construction au Maroc. M\u00eame pour les projets techniques, l\u2019architecte coordonne le permis de construire et assure la conformit\u00e9. Consultez les profils v\u00e9rifi\u00e9s sur Bati.ma." },
    { q: "Comment obtenir un devis pour tiny house ?", a: "Demandez au minimum 3 devis d\u00e9taill\u00e9s aupr\u00e8s de professionnels diff\u00e9rents. Comparez les postes ligne par ligne, v\u00e9rifiez les r\u00e9f\u00e9rences et exigez un calendrier d\u2019ex\u00e9cution. Sur Bati.ma, vous pouvez contacter directement les architectes sp\u00e9cialis\u00e9s et demander vos devis gratuitement." },
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
        <h2>Tiny house au Maroc : la tendance micro-habitat en 2026</h2>
        <p>
          Le mouvement tiny house arrive au Maroc, port\u00e9 par une g\u00e9n\u00e9ration en qu\u00eate de sobri\u00e9t\u00e9, de mobilit\u00e9 et de connexion \u00e0 la nature. Ces micro-habitats de 15 \u00e0 35 m\u00b2, souvent sur roues, s\u00e9duisent les jeunes couples, les digital nomads install\u00e9s au Maroc et les porteurs de projets d&apos;\u00e9co-tourisme. Mais entre r\u00eave minimaliste et r\u00e9alit\u00e9 r\u00e9glementaire, le chemin est sem\u00e9 d&apos;emb\u00fbches.
        </p>

        <h2>Le march\u00e9 de la tiny house au Maroc</h2>
        <p>
          Le march\u00e9 est encore naissant mais en croissance. Quelques constructeurs locaux ont \u00e9merg\u00e9 ces derni\u00e8res ann\u00e9es, proposant des mod\u00e8les adapt\u00e9s au climat marocain. La demande vient principalement de trois profils : les porteurs de projets d&apos;\u00e9cotourisme (glamping, lodges nature), les particuliers cherchant une r\u00e9sidence secondaire abordable, et les investisseurs dans la location saisonni\u00e8re.
        </p>
        <p>
          Plusieurs projets d&apos;\u00e9co-villages int\u00e9grant des tiny houses ont vu le jour dans la r\u00e9gion de Chefchaouen, autour du Haut Atlas et dans l&apos;arri\u00e8re-pays d&apos;Essaouira. Ces initiatives combinent micro-habitat, agriculture biologique et tourisme responsable.
        </p>

        <h2>Co\u00fbts de construction d&apos;une tiny house</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Gamme</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Surface</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Prix</th>
              <th className="border border-stone-200 px-3 py-2 text-left">\u00c9quipements</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">Basique</td>
              <td className="border border-stone-200 px-3 py-2">15 - 20 m\u00b2</td>
              <td className="border border-stone-200 px-3 py-2">80 000 - 120 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">Structure bois, cuisine, SdB basique</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">Confort</td>
              <td className="border border-stone-200 px-3 py-2">20 - 28 m\u00b2</td>
              <td className="border border-stone-200 px-3 py-2">120 000 - 180 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">Isolation renforc\u00e9e, mezzanine, terrasse</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">Premium</td>
              <td className="border border-stone-200 px-3 py-2">28 - 35 m\u00b2</td>
              <td className="border border-stone-200 px-3 py-2">180 000 - 250 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">Solaire, r\u00e9cup\u00e9ration eau, domotique</td>
            </tr>
          </tbody>
        </table>

        <h2>La zone grise r\u00e9glementaire</h2>
        <p>
          Le Maroc ne dispose pas de l\u00e9gislation sp\u00e9cifique pour les tiny houses. Cette absence cr\u00e9e une zone grise qui peut jouer en votre faveur ou contre vous selon la commune :
        </p>
        <p>
          <strong>Tiny house sur roues :</strong> juridiquement assimilable \u00e0 une caravane. Pas de permis de construire n\u00e9cessaire, mais le stationnement permanent sur un terrain priv\u00e9 peut \u00eatre contest\u00e9 par la commune. En pratique, la tol\u00e9rance est grande en zone rurale.
        </p>
        <p>
          <strong>Tiny house sur fondations :</strong> trait\u00e9e comme une construction classique. Permis de construire obligatoire, respect du COS et du plan d&apos;am\u00e9nagement. La petite surface peut poser probl\u00e8me si le r\u00e8glement impose un minimum constructible.
        </p>
        <p>
          <strong>Tiny house dans un projet touristique :</strong> le cadre l\u00e9gal de l&apos;h\u00e9bergement touristique (maison d&apos;h\u00f4tes, camping) est plus favorable. Une autorisation d&apos;exploitation touristique peut couvrir l&apos;installation de tiny houses sur un terrain.
        </p>

        <h2>Constructeurs locaux et artisans</h2>
        <p>
          Quelques artisans et petites entreprises marocaines se sont sp\u00e9cialis\u00e9s dans la construction de tiny houses. Les mat\u00e9riaux utilis\u00e9s sont g\u00e9n\u00e9ralement le bois (c\u00e8dre, pin), la structure m\u00e9tallique l\u00e9g\u00e8re et des mat\u00e9riaux composites. Les menuisiers marocains, r\u00e9put\u00e9s pour leur savoir-faire, peuvent r\u00e9aliser des am\u00e9nagements int\u00e9rieurs sur mesure \u00e0 des prix comp\u00e9titifs.
        </p>
        <p>
          Le d\u00e9lai de fabrication varie de 2 \u00e0 4 mois pour un mod\u00e8le standard et 4 \u00e0 6 mois pour un mod\u00e8le sur mesure. Le transport jusqu&apos;au site d&apos;installation co\u00fbte entre 3 000 et 10 000 MAD selon la distance.
        </p>

        <h2>Autonomie \u00e9nerg\u00e9tique et eau</h2>
        <p>
          La tiny house se pr\u00eate parfaitement \u00e0 l&apos;autonomie \u00e9nerg\u00e9tique gr\u00e2ce \u00e0 l&apos;ensoleillement marocain. Un kit solaire de 2 \u00e0 3 kWc (15 000 \u00e0 30 000 MAD) suffit pour les besoins d&apos;une tiny house. Pour l&apos;eau, un syst\u00e8me de r\u00e9cup\u00e9ration des eaux de pluie compl\u00e9t\u00e9 par une citerne peut assurer l&apos;autonomie en zone rurale. L&apos;assainissement individuel (micro-station ou toilettes s\u00e8ches) compl\u00e8te le dispositif.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            M\u00eame pour un projet de tiny house, l&apos;avis d&apos;un architecte est pr\u00e9cieux. Il peut vous aider \u00e0 optimiser l&apos;espace, choisir les bons mat\u00e9riaux pour le climat local et naviguer dans la r\u00e9glementation. Trouvez un architecte ouvert aux projets alternatifs sur Bati.ma pour transformer votre r\u00eave minimaliste en r\u00e9alit\u00e9 habitable.
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
