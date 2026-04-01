import Link from "next/link";

export default function GuideArchitecteCasablanca() {
  const faq = [
    {
      q: "Quel est le tarif moyen d\u2019un architecte \u00e0 Casablanca en 2026 ?",
      a: "Les honoraires d\u2019un architecte \u00e0 Casablanca varient entre 3 % et 8 % du co\u00fbt total des travaux pour une mission compl\u00e8te. Pour une consultation initiale ou une \u00e9tude de faisabilit\u00e9, comptez entre 3 000 et 8 000 MAD. Les tarifs d\u00e9pendent de la complexit\u00e9 du projet, de la surface et de la r\u00e9putation du cabinet.",
    },
    {
      q: "Quels quartiers de Casablanca concentrent le plus de projets architecturaux ?",
      a: "Les quartiers les plus actifs en construction neuve et r\u00e9novation sont Maarif, Anfa, Bouskoura Ville Verte, A\u00efn Diab, Gauthier et la zone industrielle de Nouaceur. Chaque quartier a ses sp\u00e9cificit\u00e9s : Anfa pour le haut standing, Bouskoura pour les villas, Maarif pour les immeubles de rapport.",
    },
    {
      q: "Comment v\u00e9rifier qu\u2019un architecte \u00e0 Casablanca est bien inscrit \u00e0 l\u2019Ordre ?",
      a: "Vous pouvez v\u00e9rifier l\u2019inscription de tout architecte sur le site de l\u2019Ordre des Architectes du Maroc (ordre-architectes.ma) ou sur Bati.ma o\u00f9 chaque profil est v\u00e9rifi\u00e9. Demandez le num\u00e9ro d\u2019inscription au Conseil R\u00e9gional de Casablanca-Settat.",
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
        <h2>Pourquoi Casablanca est le hub architectural du Maroc</h2>
        <p>
          Casablanca concentre plus de 40 % des projets de construction du Royaume. Capitale
          \u00e9conomique avec pr\u00e8s de 4 millions d&apos;habitants, la ville attire les meilleurs
          cabinets d&apos;architecture du pays. Entre tours de bureaux \u00e0 la Marina, villas
          haut standing \u00e0 Anfa et programmes r\u00e9sidentiels \u00e0 Bouskoura, le march\u00e9
          casablancais offre une diversit\u00e9 de projets in\u00e9gal\u00e9e au Maroc.
        </p>

        <h2>Les zones cl\u00e9s de construction \u00e0 Casablanca</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Quartier</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Sp\u00e9cialit\u00e9</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Budget moyen / m\u00b2</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">Anfa / Ain Diab</td><td className="border border-stone-200 px-3 py-2">Villas luxe, immeubles haut standing</td><td className="border border-stone-200 px-3 py-2">8 000 - 15 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Maarif / Gauthier</td><td className="border border-stone-200 px-3 py-2">Immeubles de rapport, commerces</td><td className="border border-stone-200 px-3 py-2">5 000 - 9 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Bouskoura Ville Verte</td><td className="border border-stone-200 px-3 py-2">Villas modernes, lotissements</td><td className="border border-stone-200 px-3 py-2">4 500 - 8 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Nouaceur / Dar Bouazza</td><td className="border border-stone-200 px-3 py-2">Projets industriels, \u00e9conomique</td><td className="border border-stone-200 px-3 py-2">3 000 - 5 500 MAD</td></tr>
          </tbody>
        </table>

        <h2>Tarifs des architectes \u00e0 Casablanca en 2026</h2>
        <p>
          Les honoraires se calculent g\u00e9n\u00e9ralement en pourcentage du co\u00fbt total des travaux.
          Pour une mission compl\u00e8te (conception + suivi de chantier), pr\u00e9voyez entre 5 % et 8 %.
          Une mission partielle (conception uniquement) se n\u00e9gocie entre 3 % et 5 %. Les grands
          cabinets facturent souvent un forfait pour les \u00e9tudes pr\u00e9liminaires (3 000 \u00e0 8 000 MAD).
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm font-semibold text-[#b5522a] mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Comparez toujours au moins 3 architectes avant de vous engager. Sur{" "}
            <Link href="/architectes/casablanca" className="text-[#b5522a] underline">
              Bati.ma Casablanca
            </Link>, filtrez par sp\u00e9cialit\u00e9, budget et avis clients pour trouver le professionnel
            id\u00e9al en quelques clics.
          </p>
        </div>

        <h2>Top sp\u00e9cialit\u00e9s recherch\u00e9es \u00e0 Casablanca</h2>
        <p>
          Les sp\u00e9cialit\u00e9s les plus demand\u00e9es sont l&apos;architecture r\u00e9sidentielle haut standing,
          l&apos;architecture commerciale (malls, showrooms), la r\u00e9novation de biens anciens au
          centre-ville et l&apos;architecture durable (HQE, bioclimatique). De plus en plus de
          promoteurs recherchent des architectes certifi\u00e9s en BIM pour les grands projets.
        </p>

        <h2>Comment choisir son architecte \u00e0 Casablanca</h2>
        <p>
          V\u00e9rifiez l&apos;inscription \u00e0 l&apos;Ordre des Architectes (obligatoire pour signer un permis
          de construire), consultez le portfolio en ligne, demandez des r\u00e9f\u00e9rences clients et
          comparez les devis d\u00e9taill\u00e9s. Un bon architecte doit aussi ma\u00eetriser la
          r\u00e9glementation urbaine de Casablanca, notamment le <strong>Plan d&apos;Am\u00e9nagement</strong> et
          les contraintes de la commune concern\u00e9e.
        </p>

        <h2>D\u00e9marches administratives \u00e0 Casablanca</h2>
        <p>
          Votre architecte g\u00e8re le d\u00e9p\u00f4t du permis de construire aupr\u00e8s de la commune,
          l&apos;\u00e9tude de sol (obligatoire dans certaines zones), la coordination avec le BET
          (bureau d&apos;\u00e9tudes techniques) et le suivi de conformit\u00e9 jusqu&apos;\u00e0 l&apos;obtention du
          permis d&apos;habiter. \u00c0 Casablanca, les d\u00e9lais varient de 2 \u00e0 6 mois selon
          l&apos;arrondissement.
        </p>

        <p className="mt-6 text-sm text-stone-500">
          Trouvez votre architecte sur{" "}
          <Link href="/architectes/casablanca" className="text-[#b5522a] underline">
            Bati.ma \u2014 Architectes \u00e0 Casablanca
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
