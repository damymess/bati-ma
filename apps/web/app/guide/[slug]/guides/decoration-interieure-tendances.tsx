export default function GuideDecorationInterieure() {
  const faq = [
    {
      q: "Quelles sont les tendances d\u00e9co int\u00e9rieure au Maroc en 2026 ?",
      a: "Trois styles dominent en 2026 : le boho-marocain (m\u00e9lange de zellige, tapis berb\u00e8res et rotin), le minimal-warm (lignes \u00e9pur\u00e9es avec mat\u00e9riaux naturels chauds comme le tadelakt et le bois), et le n\u00e9o-artisanal (r\u00e9interpr\u00e9tation contemporaine de l&apos;artisanat marocain). Le terracotta, le vert sauge et le beige restent les couleurs phares.",
    },
    {
      q: "Combien co\u00fbte un architecte d&apos;int\u00e9rieur au Maroc ?",
      a: "Les honoraires varient de 300 \u00e0 800 MAD/m\u00b2 pour une mission compl\u00e8te (conception + suivi). Pour un appartement de 100 m\u00b2, comptez 30 000 \u00e0 80 000 MAD. Certains architectes d&apos;int\u00e9rieur proposent une mission de conseil (plans + shopping list) \u00e0 partir de 5 000 MAD. Les tarifs sont plus \u00e9lev\u00e9s \u00e0 Casablanca et Marrakech.",
    },
    {
      q: "O\u00f9 trouver des artisans d\u00e9co traditionnels au Maroc ?",
      a: "Les meilleurs artisans sont \u00e0 F\u00e8s (zellige, sculpt\u00e9 sur pl\u00e2tre), Marrakech (tadelakt, fer forg\u00e9), Essaouira (bois de thuya), Sal\u00e9 (poterie), et Ouarzazate (tapis). Pour les trouver, passez par les coop\u00e9ratives artisanales, les maalems recommand\u00e9s par votre architecte d&apos;int\u00e9rieur, ou les showrooms sp\u00e9cialis\u00e9s comme Loft Design \u00e0 Casablanca.",
    },
    { q: "Faut-il un architecte pour un projet de decoration interieure tendances ?", a: "Conform\u00e9ment \u00e0 la loi 16-89, le recours \u00e0 un architecte inscrit \u00e0 l\u2019Ordre est obligatoire pour toute construction au Maroc. M\u00eame pour les projets techniques, l\u2019architecte coordonne le permis de construire et assure la conformit\u00e9. Consultez les profils v\u00e9rifi\u00e9s sur Bati.ma." },
    { q: "Comment obtenir un devis pour decoration interieure tendances ?", a: "Demandez au minimum 3 devis d\u00e9taill\u00e9s aupr\u00e8s de professionnels diff\u00e9rents. Comparez les postes ligne par ligne, v\u00e9rifiez les r\u00e9f\u00e9rences et exigez un calendrier d\u2019ex\u00e9cution. Sur Bati.ma, vous pouvez contacter directement les architectes sp\u00e9cialis\u00e9s et demander vos devis gratuitement." },
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
        <h2>D\u00e9coration int\u00e9rieure au Maroc : tendances et inspirations 2026</h2>
        <p>
          La d\u00e9coration int\u00e9rieure au Maroc vit une r\u00e9volution cr\u00e9ative. Les designers marocains fusionnent h\u00e9ritage artisanal et design contemporain pour cr\u00e9er des int\u00e9rieurs uniques. Le tadelakt c\u00f4toie le b\u00e9ton cir\u00e9, le zellige traditionnel s&apos;associe au mobilier scandinave, et les tapis berb\u00e8res trouvent leur place dans les lofts industriels. En 2026, trois grandes tendances se d\u00e9gagent, toutes ancr\u00e9es dans la valorisation du savoir-faire local.
        </p>

        <h2>Tendance 1 : le boho-marocain</h2>
        <p>
          Le style boho-marocain est le plus populaire en 2026, port\u00e9 par Instagram et les riads-h\u00f4tels de Marrakech. Il m\u00e9lange les textures naturelles (rotin, jute, lin), les motifs g\u00e9om\u00e9triques berb\u00e8res, les couleurs terracotta et les plantes vertes abondantes. Le zellige artisanal est utilis\u00e9 en cr\u00e9dence de cuisine et en salle de bain, tandis que les tapis Beni Ourain apportent chaleur et caract\u00e8re.
        </p>
        <p>
          Budget moyen pour un salon boho-marocain de 30 m\u00b2 : 25 000 \u00e0 60 000 MAD (mobilier + accessoires + rev\u00eatements).
        </p>

        <h2>Tendance 2 : le minimal-warm</h2>
        <p>
          Le minimal-warm s\u00e9duit les jeunes professionnels urbains de Casablanca et Rabat. Les lignes sont \u00e9pur\u00e9es, les espaces d\u00e9gag\u00e9s, mais les mat\u00e9riaux apportent de la chaleur : tadelakt couleur sable, bois de noyer, pierre naturelle locale. Les couleurs sont neutres (blanc cass\u00e9, beige, gris chaud) avec des touches de vert olive ou de terracotta.
        </p>
        <p>
          Ce style valorise les beaux volumes et la lumi\u00e8re naturelle. Il fonctionne particuli\u00e8rement bien dans les appartements modernes et les villas contemporaines. Budget : 30 000 \u00e0 80 000 MAD pour un salon de 30 m\u00b2.
        </p>

        <h2>Tendance 3 : le n\u00e9o-artisanal</h2>
        <p>
          Le n\u00e9o-artisanal est la tendance la plus sophistiqu\u00e9e. Elle r\u00e9interpr\u00e8te les savoir-faire traditionnels marocains dans un langage contemporain : zellige aux formats XXL ou aux couleurs pastel inhabituelles, moucharabiehs en m\u00e9tal d\u00e9coup\u00e9 au laser, pl\u00e2tre sculpt\u00e9 aux motifs g\u00e9om\u00e9triques minimalistes. Les designers marocains comme Hicham Lahlou ou Amina Agueznay sont les figures de proue de ce mouvement.
        </p>

        <h2>Quelles palettes de couleurs adopter en 2026 ?</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Palette</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Couleurs cl\u00e9s</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Id\u00e9al pour</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">Terre & Sable</td>
              <td className="border border-stone-200 px-3 py-2">Terracotta, beige, ocre, blanc cass\u00e9</td>
              <td className="border border-stone-200 px-3 py-2">Salon, chambre</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">Oasis</td>
              <td className="border border-stone-200 px-3 py-2">Vert sauge, vert olive, cr\u00e8me, bois</td>
              <td className="border border-stone-200 px-3 py-2">Salle de bain, bureau</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">M\u00e9dina</td>
              <td className="border border-stone-200 px-3 py-2">Bleu majorelle, blanc, indigo, or</td>
              <td className="border border-stone-200 px-3 py-2">Entr\u00e9e, riad</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">Atelier</td>
              <td className="border border-stone-200 px-3 py-2">Gris anthracite, noir, noyer, laiton</td>
              <td className="border border-stone-200 px-3 py-2">Cuisine, espace de vie</td>
            </tr>
          </tbody>
        </table>

        <h2>Quels artisans sont incontournables pour la déco au Maroc ?</h2>
        <p>
          Le Maroc poss\u00e8de un r\u00e9seau d&apos;artisans (maalems) parmi les plus talentueux au monde. Pour votre projet de d\u00e9coration, faites appel aux sp\u00e9cialistes de chaque m\u00e9tier : le malem zellige de F\u00e8s pour le carrelage artisanal (200 \u00e0 600 MAD/m\u00b2), le malem tadelakt de Marrakech pour les enduits (300 \u00e0 800 MAD/m\u00b2), le sculpteur sur pl\u00e2tre (gebs) pour les moulures et arcs (500 \u00e0 1 500 MAD/m lin\u00e9aire), et les ferroniers de la m\u00e9dina pour le mobilier sur mesure.
        </p>

        <h2>Budgets d\u00e9coration par pi\u00e8ce</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Pi\u00e8ce</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Budget \u00e9conomique</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Budget confort</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Budget premium</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Salon (30 m\u00b2)</td>
              <td className="border border-stone-200 px-3 py-2">15 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">40 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">80 000+ MAD</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Chambre (15 m\u00b2)</td>
              <td className="border border-stone-200 px-3 py-2">8 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">20 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">50 000+ MAD</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Cuisine (10 m\u00b2)</td>
              <td className="border border-stone-200 px-3 py-2">20 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">50 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">100 000+ MAD</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Salle de bain (6 m\u00b2)</td>
              <td className="border border-stone-200 px-3 py-2">10 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">30 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">60 000+ MAD</td>
            </tr>
          </tbody>
        </table>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Un architecte d&apos;int\u00e9rieur vous fait gagner du temps et de l&apos;argent en \u00e9vitant les erreurs co\u00fbteuses. Sur Bati.ma, trouvez des architectes d&apos;int\u00e9rieur avec portfolio pour visualiser leur style avant de les contacter. Beaucoup proposent une premi\u00e8re consultation gratuite pour \u00e9valuer votre projet.
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
