export default function GuideMaisonPrefabriquee() {
  const faq = [
    { q: "Quelle est la diff\u00e9rence entre maison pr\u00e9fabriqu\u00e9e et maison modulaire ?", a: "La maison pr\u00e9fabriqu\u00e9e d\u00e9signe tout b\u00e2timent dont les \u00e9l\u00e9ments sont fabriqu\u00e9s en usine (murs, dalles, charpente). La maison modulaire est un sous-type o\u00f9 des modules 3D complets (pi\u00e8ces enti\u00e8res) sont assembl\u00e9s sur site. Le pr\u00e9fabriqu\u00e9 inclut aussi les panneaux 2D et les \u00e9l\u00e9ments ponctuels." },
    { q: "Faut-il un permis de construire pour une maison pr\u00e9fabriqu\u00e9e au Maroc ?", a: "Oui, toute construction permanente au Maroc n\u00e9cessite un permis de construire, qu\u2019elle soit pr\u00e9fabriqu\u00e9e ou traditionnelle. Le dossier doit \u00eatre sign\u00e9 par un architecte agr\u00e9\u00e9 et respecter le RPS 2000 et la RTCM." },
    { q: "Une maison pr\u00e9fabriqu\u00e9e r\u00e9siste-t-elle aux s\u00e9ismes au Maroc ?", a: "Oui, les maisons pr\u00e9fabriqu\u00e9es en b\u00e9ton arm\u00e9 ou en structure m\u00e9tallique respectent le RPS 2000 (r\u00e8glement parasismique marocain). Les structures l\u00e9g\u00e8res en acier et bois sont m\u00eame plus performantes que la ma\u00e7onnerie traditionnelle face aux s\u00e9ismes gr\u00e2ce \u00e0 leur flexibilit\u00e9." },
    { q: "Faut-il un architecte pour un projet de maison prefabriquee au Maroc ?", a: "Conform\u00e9ment \u00e0 la loi 16-89, le recours \u00e0 un architecte inscrit \u00e0 l\u2019Ordre est obligatoire pour toute construction au Maroc. M\u00eame pour les projets techniques, l\u2019architecte coordonne le permis de construire et assure la conformit\u00e9. Consultez les profils v\u00e9rifi\u00e9s sur Bati.ma." },
    { q: "Comment obtenir un devis pour maison prefabriquee au Maroc ?", a: "Demandez au minimum 3 devis d\u00e9taill\u00e9s aupr\u00e8s de professionnels diff\u00e9rents. Comparez les postes ligne par ligne, v\u00e9rifiez les r\u00e9f\u00e9rences et exigez un calendrier d\u2019ex\u00e9cution. Sur Bati.ma, vous pouvez contacter directement les architectes sp\u00e9cialis\u00e9s et demander vos devis gratuitement." },
  ];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="prose-content">
        <h2>Qu&apos;est-ce qu&apos;une maison pr\u00e9fabriqu\u00e9e ?</h2>
        <p>
          Une maison pr\u00e9fabriqu\u00e9e est une habitation dont les <strong>\u00e9l\u00e9ments structurels sont fabriqu\u00e9s en usine</strong>
          puis assembl\u00e9s sur le chantier. Au Maroc, ce mode constructif se d\u00e9veloppe rapidement, port\u00e9 par les besoins
          en logements \u00e9conomiques et les grands projets d&apos;infrastructure li\u00e9s au Mondial 2030.
        </p>

        <h2>Types de maisons pr\u00e9fabriqu\u00e9es disponibles</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead><tr className="bg-stone-100"><th className="border border-stone-200 px-3 py-2 text-left">Type</th><th className="border border-stone-200 px-3 py-2 text-left">Prix / m\u00b2</th><th className="border border-stone-200 px-3 py-2 text-left">D\u00e9lai montage</th><th className="border border-stone-200 px-3 py-2 text-left">Dur\u00e9e de vie</th></tr></thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">Pr\u00e9fabriqu\u00e9 b\u00e9ton (panneaux)</td><td className="border border-stone-200 px-3 py-2">3 000 \u2013 5 500 MAD</td><td className="border border-stone-200 px-3 py-2">4\u20138 semaines</td><td className="border border-stone-200 px-3 py-2">50+ ans</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Ossature m\u00e9tallique l\u00e9g\u00e8re</td><td className="border border-stone-200 px-3 py-2">2 800 \u2013 5 000 MAD</td><td className="border border-stone-200 px-3 py-2">3\u20136 semaines</td><td className="border border-stone-200 px-3 py-2">50+ ans</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Ossature bois pr\u00e9fabriqu\u00e9e</td><td className="border border-stone-200 px-3 py-2">4 500 \u2013 8 000 MAD</td><td className="border border-stone-200 px-3 py-2">3\u20135 semaines</td><td className="border border-stone-200 px-3 py-2">40+ ans</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Conteneur transform\u00e9</td><td className="border border-stone-200 px-3 py-2">2 500 \u2013 4 500 MAD</td><td className="border border-stone-200 px-3 py-2">2\u20134 semaines</td><td className="border border-stone-200 px-3 py-2">25\u201330 ans</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">SIP (panneaux isolants structurels)</td><td className="border border-stone-200 px-3 py-2">4 000 \u2013 7 000 MAD</td><td className="border border-stone-200 px-3 py-2">3\u20135 semaines</td><td className="border border-stone-200 px-3 py-2">50+ ans</td></tr>
          </tbody>
        </table>

        <h2>Avantages et inconv\u00e9nients</h2>
        <p><strong>Avantages :</strong></p>
        <ul>
          <li>Construction 3 \u00e0 5 fois plus rapide que le traditionnel</li>
          <li>Co\u00fbt r\u00e9duit de 20 \u00e0 35 % en moyenne</li>
          <li>Qualit\u00e9 de fabrication contr\u00f4l\u00e9e en usine</li>
          <li>R\u00e9duction des d\u00e9chets de chantier (80 \u00e0 90 %)</li>
          <li>Moins de nuisances sonores pour le voisinage</li>
        </ul>
        <p><strong>Inconv\u00e9nients :</strong></p>
        <ul>
          <li>Personnalisation plus limit\u00e9e que la construction ma\u00e7onn\u00e9e</li>
          <li>Transport des modules co\u00fbteux si le terrain est \u00e9loign\u00e9 de l&apos;usine</li>
          <li>Acc\u00e8s au terrain n\u00e9cessaire pour les engins de levage</li>
          <li>Perception culturelle : certains Marocains assimilent encore le pr\u00e9fabriqu\u00e9 au provisoire</li>
        </ul>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Demandez au fournisseur les <strong>PV d&apos;essais</strong> (r\u00e9sistance au feu, isolation thermique, parasismique) et v\u00e9rifiez que ses produits sont conformes aux <strong>normes marocaines NM</strong>. Un architecte inscrit doit signer les plans.
          </p>
        </div>

        <h2>Fournisseurs au Maroc</h2>
        <p>
          Le march\u00e9 marocain compte des acteurs locaux et internationaux : <strong>TGCC Pr\u00e9fa</strong> (Casablanca),
          <strong> Batiplus</strong> (Tanger), <strong>Modulex Maroc</strong> (K\u00e9nitra), <strong>Nidacom</strong> (Rabat).
          Certains fournisseurs turcs et chinois proposent \u00e9galement des solutions cl\u00e9s en main \u00e0 des prix tr\u00e8s comp\u00e9titifs,
          mais attention \u00e0 la conformit\u00e9 aux normes locales.
        </p>

        <h2>Autorisations n\u00e9cessaires</h2>
        <p>
          Le processus administratif est <strong>identique \u00e0 celui d&apos;une construction traditionnelle</strong> :
          permis de construire sign\u00e9 par un architecte agr\u00e9\u00e9, avis de l&apos;agence urbaine, respect du plan d&apos;am\u00e9nagement.
          La seule diff\u00e9rence est la note de calcul qui doit \u00eatre adapt\u00e9e au syst\u00e8me constructif pr\u00e9fabriqu\u00e9 (structure m\u00e9tallique, bois ou b\u00e9ton pr\u00e9contraint).
        </p>

        <h2>Qualit\u00e9 : pr\u00e9fabriqu\u00e9 vs traditionnel</h2>
        <p>
          Contrairement aux id\u00e9es re\u00e7ues, une maison pr\u00e9fabriqu\u00e9e peut offrir une <strong>qualit\u00e9 sup\u00e9rieure</strong>
          \u00e0 la construction traditionnelle. La fabrication en usine permet un contr\u00f4le qualit\u00e9 rigoureux, des tolérances
          dimensionnelles pr\u00e9cises et une meilleure isolation. La cl\u00e9 est de choisir un fournisseur certifi\u00e9 et un architecte
          exp\u00e9riment\u00e9 dans ce type de construction.
        </p>
      </div>
      <section className="mt-10">
        <h2 className="text-xl font-bold text-stone-900 mb-5">Questions fr\u00e9quentes</h2>
        <div className="space-y-4">
          {faq.map((f) => (
            <details key={f.q} className="group border border-stone-200 rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between px-4 py-3 cursor-pointer text-sm font-medium text-stone-800 hover:bg-stone-50">{f.q}<span className="text-stone-400 group-open:rotate-180 transition-transform">\u2193</span></summary>
              <div className="px-4 pb-4 pt-1 text-sm text-stone-600 leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
