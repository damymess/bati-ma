import Link from "next/link";

export default function GuideArchitecteInterieurCasablanca() {
  const faq = [
    {
      q: "Quelle est la diff\u00e9rence entre un architecte d\u2019int\u00e9rieur et un d\u00e9corateur \u00e0 Casablanca ?",
      a: "L\u2019architecte d\u2019int\u00e9rieur poss\u00e8de un dipl\u00f4me reconnu (5 ans d\u2019\u00e9tudes) et peut modifier la structure int\u00e9rieure (cloisons, ouvertures, r\u00e9seaux). Le d\u00e9corateur se concentre sur l\u2019esth\u00e9tique : choix de meubles, tissus, couleurs. Pour un projet impliquant des travaux, privil\u00e9giez un architecte d\u2019int\u00e9rieur.",
    },
    {
      q: "Quel budget pr\u00e9voir pour un architecte d\u2019int\u00e9rieur \u00e0 Casablanca ?",
      a: "Les honoraires varient de 300 \u00e0 800 MAD / m\u00b2 pour une mission compl\u00e8te (conception + suivi). Pour un appartement de 100 m\u00b2, comptez entre 30 000 et 80 000 MAD. Une simple consultation de mise en ambiance co\u00fbte entre 3 000 et 8 000 MAD.",
    },
    {
      q: "Quelles sont les tendances d\u2019architecture int\u00e9rieure \u00e0 Casablanca en 2026 ?",
      a: "Les tendances 2026 \u00e0 Casablanca incluent le style minimaliste m\u00e9diterran\u00e9en, l\u2019int\u00e9gration de mat\u00e9riaux naturels (tadelakt, bois, pierre), les cuisines ouvertes, le japandi (m\u00e9lange japonais-scandinave) et les espaces multifonctionnels avec home office int\u00e9gr\u00e9.",
    },
    { q: "Quelle diff\u00e9rence entre architecte d\u2019int\u00e9rieur et d\u00e9corateur \u00e0 Casablanca ?", a: "L\u2019architecte d\u2019int\u00e9rieur peut modifier les volumes (abattre des cloisons, cr\u00e9er des mezzanines) et coordonner les corps de m\u00e9tier. Le d\u00e9corateur intervient uniquement sur le mobilier, les couleurs et les accessoires. Les honoraires diff\u00e8rent : 3-8 % pour l\u2019architecte, forfait pour le d\u00e9corateur." },
    { q: "Combien co\u00fbte un architecte d\u2019int\u00e9rieur \u00e0 Casablanca ?", a: "Les honoraires varient de 500 \u00e0 2 000 MAD/m\u00b2 selon le standing. Pour un appartement de 120 m\u00b2, comptez 60 000 \u00e0 240 000 MAD pour une mission compl\u00e8te (conception, plans, suivi). Les projets haut standing \u00e0 Anfa ou CIL peuvent d\u00e9passer 3 000 MAD/m\u00b2." },
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
        <h2>Architecture d&apos;int\u00e9rieur \u00e0 Casablanca : un march\u00e9 en plein essor</h2>
        <p>
          Casablanca est le premier march\u00e9 marocain pour l&apos;architecture d&apos;int\u00e9rieur.
          La demande explose dans les quartiers haut standing (Anfa, Gauthier, Racine)
          comme dans les nouveaux programmes r\u00e9sidentiels (Bouskoura, Dar Bouazza). Les
          Casablancais investissent de plus en plus dans l&apos;am\u00e9nagement int\u00e9rieur pour
          personnaliser leurs espaces de vie.
        </p>

        <h2>Architecte d&apos;int\u00e9rieur vs d\u00e9corateur : les diff\u00e9rences</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Crit\u00e8re</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Architecte d&apos;int\u00e9rieur</th>
              <th className="border border-stone-200 px-3 py-2 text-left">D\u00e9corateur</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">Formation</td><td className="border border-stone-200 px-3 py-2">Dipl\u00f4me 5 ans (ENA, ENSA, \u00e9quivalent)</td><td className="border border-stone-200 px-3 py-2">Formation courte ou autodidacte</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Travaux structure</td><td className="border border-stone-200 px-3 py-2">Peut modifier cloisons, r\u00e9seaux</td><td className="border border-stone-200 px-3 py-2">Non autoris\u00e9</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Plans techniques</td><td className="border border-stone-200 px-3 py-2">Oui (AutoCAD, 3D)</td><td className="border border-stone-200 px-3 py-2">Moodboards, palettes</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Tarif moyen / m\u00b2</td><td className="border border-stone-200 px-3 py-2">300 - 800 MAD</td><td className="border border-stone-200 px-3 py-2">150 - 400 MAD</td></tr>
          </tbody>
        </table>

        <h2>Tarifs en 2026 \u00e0 Casablanca</h2>
        <p>
          Les tarifs d\u00e9pendent de la surface, du standing et de la complexit\u00e9 du projet.
          Pour un appartement standard : 300 \u00e0 500 MAD / m\u00b2. Pour une villa haut standing :
          500 \u00e0 800 MAD / m\u00b2. Un projet de restaurant ou boutique : forfait de 50 000 \u00e0
          150 000 MAD selon la surface. La consultation initiale est g\u00e9n\u00e9ralement factur\u00e9e
          entre 3 000 et 8 000 MAD.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm font-semibold text-[#b5522a] mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Demandez toujours un rendu 3D avant de valider le projet. Les meilleurs architectes
            d&apos;int\u00e9rieur de Casablanca proposent des visualisations r\u00e9alistes pour que vous
            puissiez vous projeter. Trouvez votre professionnel sur{" "}
            <Link href="/architectes/casablanca" className="text-[#b5522a] underline">
              Bati.ma Casablanca
            </Link>.
          </p>
        </div>

        <h2>Tendances d\u00e9co 2026 \u00e0 Casablanca</h2>
        <p>
          Les tendances qui dominent \u00e0 Casablanca en 2026 : le <strong>minimalisme
          m\u00e9diterran\u00e9en</strong> (tons chauds, mati\u00e8res naturelles), le <strong>japandi</strong>
          (fusion japonais-scandinave), les <strong>cuisines ouvertes</strong> avec \u00eelot central,
          l&apos;int\u00e9gration du <strong>home office</strong> et le retour des mati\u00e8res artisanales
          marocaines (tadelakt, zellige, bois de thuya) dans un cadre contemporain.
        </p>

        <h2>Quartiers phares pour la d\u00e9co int\u00e9rieure</h2>
        <p>
          Les quartiers o\u00f9 la demande est la plus forte : Anfa et Racine pour les
          appartements de luxe, Gauthier et Maarif pour le commercial (restaurants,
          boutiques), Bouskoura Ville Verte pour les villas familiales, et le centre-ville
          pour la r\u00e9novation de biens art d\u00e9co. Chaque quartier a ses codes esth\u00e9tiques
          que votre architecte d&apos;int\u00e9rieur doit ma\u00eetriser.
        </p>

        <h2>Comment choisir son architecte d&apos;int\u00e9rieur</h2>
        <p>
          V\u00e9rifiez le portfolio (les r\u00e9alisations doivent correspondre \u00e0 votre style),
          demandez des r\u00e9f\u00e9rences clients, comparez au moins 3 devis et assurez-vous
          que le professionnel ma\u00eetrise les fournisseurs locaux. Sur{" "}
          <Link href="/architectes/casablanca" className="text-[#b5522a] underline">
            Bati.ma
          </Link>, filtrez par sp\u00e9cialit\u00e9 \u00ab int\u00e9rieur \u00bb pour acc\u00e9der aux meilleurs profils
          casablancais.
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
