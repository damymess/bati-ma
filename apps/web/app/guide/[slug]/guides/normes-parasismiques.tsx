export default function GuideNormesParasismiques() {
  const faq = [
    {
      q: "Quelles sont les zones sismiques les plus à risque au Maroc ?",
      a: "Le Maroc est divisé en 5 zones sismiques selon le RPS 2011. La zone 5 (risque maximal) couvre Al Hoceima et le Rif oriental. La zone 4 concerne Agadir, Nador et le nord du Maroc. La zone 3 inclut Fès, Meknès et Tanger. La zone 2 couvre Casablanca, Rabat et Marrakech. La zone 1 (risque minimal) concerne le sud saharien. Le séisme d&apos;Al Hoceima en 2004 (magnitude 6,3) et celui d&apos;Agadir en 1960 (magnitude 5,7) rappellent l&apos;importance de ces normes.",
    },
    {
      q: "Les normes parasismiques sont-elles obligatoires pour les maisons individuelles ?",
      a: "Oui, le RPS 2011 s&apos;applique à toutes les constructions neuves au Maroc, y compris les maisons individuelles. Toute construction doit être conçue pour résister aux sollicitations sismiques correspondant à sa zone. En pratique, l&apos;architecte et le bureau d&apos;études techniques (BET) intègrent ces exigences dans les plans de structure. Le non-respect expose à un refus du permis de construire et à des sanctions pénales en cas de sinistre.",
    },
    {
      q: "Quel surcoût représente la construction parasismique ?",
      a: "Le surcoût d&apos;une construction conforme au RPS 2011 est estimé entre 3 % et 8 % du coût total de la structure, selon la zone sismique et la classe du bâtiment. Ce surcoût se traduit par des fondations plus profondes, un ferraillage renforcé (poteaux, poutres, chaînages), des joints de dilatation parasismique et des dispositions constructives spécifiques. C&apos;est un investissement minime comparé aux conséquences d&apos;un effondrement.",
    },
    { q: "Faut-il un architecte pour un projet de normes parasismiques ?", a: "Conform\u00e9ment \u00e0 la loi 16-89, le recours \u00e0 un architecte inscrit \u00e0 l\u2019Ordre est obligatoire pour toute construction au Maroc. M\u00eame pour les projets techniques, l\u2019architecte coordonne le permis de construire et assure la conformit\u00e9. Consultez les profils v\u00e9rifi\u00e9s sur Bati.ma." },
    { q: "Comment obtenir un devis pour normes parasismiques ?", a: "Demandez au minimum 3 devis d\u00e9taill\u00e9s aupr\u00e8s de professionnels diff\u00e9rents. Comparez les postes ligne par ligne, v\u00e9rifiez les r\u00e9f\u00e9rences et exigez un calendrier d\u2019ex\u00e9cution. Sur Bati.ma, vous pouvez contacter directement les architectes sp\u00e9cialis\u00e9s et demander vos devis gratuitement." },
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
        <h2>Le règlement parasismique marocain RPS 2011</h2>
        <p>
          Le Maroc est situé dans une zone de sismicité modérée à forte, à la jonction des plaques tectoniques africaine et eurasienne. Le Règlement de Construction Parasismique (RPS 2011), entré en vigueur par le décret n° 2-02-177, constitue le cadre réglementaire obligatoire pour toute construction neuve sur le territoire national. Il remplace le RPS 2000 et intègre les retours d&apos;expérience des séismes récents, notamment celui d&apos;Al Hoceima en 2004.
        </p>
        <p>
          Le RPS 2011 définit les règles de conception et de calcul des structures pour résister aux forces sismiques. Il s&apos;applique à tous les types de bâtiments : habitations, bâtiments publics, ouvrages industriels et infrastructures. Son respect est contrôlé lors de l&apos;instruction du permis de construire par l&apos;agence urbaine et lors des visites de chantier par le bureau de contrôle.
        </p>

        <h2>Zonage sismique du Maroc</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-300 px-3 py-2 text-left">Zone</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Accélération (Ag/g)</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Villes concernées</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Niveau de risque</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-300 px-3 py-2 font-medium">Zone 5</td>
              <td className="border border-stone-300 px-3 py-2">0,18 g</td>
              <td className="border border-stone-300 px-3 py-2">Al Hoceima, Rif oriental</td>
              <td className="border border-stone-300 px-3 py-2">Très élevé</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2 font-medium">Zone 4</td>
              <td className="border border-stone-300 px-3 py-2">0,14 g</td>
              <td className="border border-stone-300 px-3 py-2">Agadir, Nador, Tétouan</td>
              <td className="border border-stone-300 px-3 py-2">Élevé</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2 font-medium">Zone 3</td>
              <td className="border border-stone-300 px-3 py-2">0,10 g</td>
              <td className="border border-stone-300 px-3 py-2">Fès, Meknès, Tanger, Oujda</td>
              <td className="border border-stone-300 px-3 py-2">Modéré à élevé</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2 font-medium">Zone 2</td>
              <td className="border border-stone-300 px-3 py-2">0,08 g</td>
              <td className="border border-stone-300 px-3 py-2">Casablanca, Rabat, Marrakech</td>
              <td className="border border-stone-300 px-3 py-2">Modéré</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2 font-medium">Zone 1</td>
              <td className="border border-stone-300 px-3 py-2">0,04 g</td>
              <td className="border border-stone-300 px-3 py-2">Laâyoune, Dakhla, sud saharien</td>
              <td className="border border-stone-300 px-3 py-2">Faible</td>
            </tr>
          </tbody>
        </table>

        <h2>Classes de bâtiments et exigences</h2>
        <p>
          Le RPS 2011 classe les bâtiments en trois catégories selon leur importance et leur fonction :
        </p>
        <p>
          <strong>Classe I (importance vitale) :</strong> Hôpitaux, casernes de pompiers, centres de protection civile, centrales électriques. Ces bâtiments doivent rester fonctionnels après un séisme. Coefficient d&apos;importance = 1,3.
        </p>
        <p>
          <strong>Classe II (importance élevée) :</strong> Écoles, mosquées, salles de spectacle, centres commerciaux, immeubles de plus de 5 étages. Coefficient d&apos;importance = 1,2.
        </p>
        <p>
          <strong>Classe III (importance courante) :</strong> Habitations individuelles, immeubles de bureaux de moins de 5 étages, bâtiments industriels. Coefficient d&apos;importance = 1,0.
        </p>

        <h2>Obligations structurelles principales</h2>
        <p>
          Le RPS 2011 impose des dispositions constructives spécifiques qui doivent être intégrées par le bureau d&apos;études techniques (BET) :
        </p>
        <p>
          <strong>Fondations :</strong> Les fondations doivent être reliées entre elles par des longrines (poutres de liaison) pour éviter les déplacements différentiels. En zone 4 et 5, un radier général peut être exigé pour les sols meubles. L&apos;étude géotechnique est obligatoire pour déterminer la classe du site (S1 à S4).
        </p>
        <p>
          <strong>Poteaux et poutres :</strong> Les sections minimales des poteaux sont augmentées en fonction de la zone sismique. Le ferraillage doit respecter des dispositions de confinement (cadres rapprochés dans les zones critiques). Les noeuds poteau-poutre font l&apos;objet de vérifications spécifiques pour assurer la ductilité de la structure.
        </p>
        <p>
          <strong>Murs et voiles :</strong> Dans les zones de forte sismicité, des voiles en béton armé (murs de contreventement) sont obligatoires pour reprendre les efforts horizontaux. Leur disposition doit être symétrique pour éviter les effets de torsion.
        </p>
        <p>
          <strong>Joints parasismiques :</strong> Les bâtiments de grande longueur ou de forme irrégulière doivent comporter des joints de dilatation parasismique, avec un jeu minimal de 3 cm en zone 2 à 6 cm en zone 5.
        </p>

        <h2>Le rôle du bureau d&apos;études techniques</h2>
        <p>
          L&apos;ingénieur structure du BET est le garant de la conformité parasismique. Il réalise le calcul dynamique de la structure sous sollicitation sismique, détermine les efforts dans chaque élément porteur et dimensionne le ferraillage en conséquence. Les logiciels de calcul utilisés au Maroc (Robot Structural Analysis, ETABS, SAP2000) permettent une modélisation précise du comportement sismique du bâtiment.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Ne faites jamais l&apos;impasse sur les normes parasismiques, même en zone 2. Le séisme d&apos;Al Haouz en 2023 a montré que des constructions non conformes s&apos;effondrent même sous des sollicitations modérées. Assurez-vous que votre architecte travaille avec un BET qualifié et qu&apos;un bureau de contrôle agréé vérifie la conformité de votre structure. Trouvez un architecte et un BET de confiance sur Bati.ma.
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
