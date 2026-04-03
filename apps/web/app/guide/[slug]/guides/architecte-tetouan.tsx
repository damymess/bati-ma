export default function GuideArchitecteTetouan() {
  const faq = [
    { q: "Peut-on r\u00e9nover une maison dans la m\u00e9dina de T\u00e9touan sans architecte ?", a: "Non. La m\u00e9dina de T\u00e9touan est class\u00e9e patrimoine mondial UNESCO depuis 1997. Toute intervention (r\u00e9novation, restauration, changement de fa\u00e7ade) n\u00e9cessite un architecte inscrit \u00e0 l\u2019Ordre ET l\u2019approbation de l\u2019Inspection r\u00e9gionale des monuments historiques. Les mat\u00e9riaux, couleurs et ouvertures doivent respecter le cahier des charges patrimonial. Un architecte sp\u00e9cialis\u00e9 en restauration est fortement recommand\u00e9." },
    { q: "Combien co\u00fbte une villa \u00e0 Cabo Negro ou M\u2019diq ?", a: "La construction d\u2019une villa baln\u00e9aire de 250 m\u00b2 \u00e0 Cabo Negro ou M\u2019diq co\u00fbte entre 1 200 000 et 2 000 000 MAD (hors terrain). Le terrain en premi\u00e8re ligne c\u00f4ti\u00e8re atteint 5 000 \u00e0 12 000 MAD/m\u00b2. L\u2019architecte doit int\u00e9grer la protection contre l\u2019air marin (corrosion, humidit\u00e9), les normes parasismiques renforc\u00e9es (zone 3 RPS 2011) et les contraintes du littoral (loi 81-12)." },
    { q: "Quelles sp\u00e9cificit\u00e9s sismiques pour la r\u00e9gion de T\u00e9touan ?", a: "T\u00e9touan est en zone sismique 3 (mod\u00e9r\u00e9e \u00e0 \u00e9lev\u00e9e) selon le RPS 2011. Le s\u00e9isme d\u2019Al Hoceima en 2004 (6,3 Richter) a rappel\u00e9 la vuln\u00e9rabilit\u00e9 du Rif. Tout architecte \u00e0 T\u00e9touan doit concevoir en conformit\u00e9 stricte : joints de dilatation, poteaux renforc\u00e9s, fondations adapt\u00e9es au sol argileux local." },
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
        <h2>T\u00e9touan : l\u00e0 o\u00f9 l&apos;Andalousie rencontre le Rif</h2>
        <p>
          Chercher un <strong>architecte \u00e0 T\u00e9touan</strong>, c&apos;est entrer dans un march\u00e9 o\u00f9 trois mondes architecturaux coexistent. La <strong>m\u00e9dina andalouse</strong>, inscrite au patrimoine mondial UNESCO depuis 1997, avec ses maisons blanches, ses patios \u00e0 fontaines et ses moucharabiehs h\u00e9rit\u00e9s des Morisques expuls\u00e9s d&apos;Espagne au XVe si\u00e8cle. La <strong>ville coloniale espagnole</strong>, avec ses immeubles Art d\u00e9co de la Place Moulay El Mehdi et du boulevard Mohammed V. Et la <strong>T\u00e9touan contemporaine</strong> qui s&apos;\u00e9tire vers M&apos;diq, Cabo Negro et Martil le long du littoral m\u00e9diterran\u00e9en.
        </p>
        <p>
          Cette triple identit\u00e9 cr\u00e9e des besoins architecturaux uniques au Maroc : restauration patrimoniale sous contr\u00f4le UNESCO, r\u00e9habilitation d&apos;immeubles coloniaux, et villas baln\u00e9aires modernes adapt\u00e9es aux contraintes sismiques et maritimes.
        </p>

        <h2>Restaurer dans la m\u00e9dina : un exercice sous haute surveillance</h2>
        <p>
          La m\u00e9dina de T\u00e9touan est la mieux conserv\u00e9e des m\u00e9dinas andalouses du Maroc. Ses <strong>5 000 maisons</strong> aux fa\u00e7ades blanches et aux toits de tuiles vertes forment un ensemble unique. Restaurer ici n&apos;a rien \u00e0 voir avec r\u00e9nover un riad \u00e0 Marrakech : le cahier des charges UNESCO est bien plus strict.
        </p>
        <table className="w-full text-sm border-collapse my-4">
          <thead><tr className="bg-stone-100"><th className="text-left px-3 py-2 border border-stone-200">Contrainte UNESCO</th><th className="text-left px-3 py-2 border border-stone-200">Autoris\u00e9</th><th className="text-left px-3 py-2 border border-stone-200">Interdit</th></tr></thead>
          <tbody>
            <tr><td className="px-3 py-2 border border-stone-200">Fa\u00e7ades</td><td className="px-3 py-2 border border-stone-200">Chaux blanche traditionnelle, r\u00e9paration \u00e0 l&apos;identique</td><td className="px-3 py-2 border border-stone-200">Peinture acrylique, bardage, rev\u00eatement moderne</td></tr>
            <tr><td className="px-3 py-2 border border-stone-200">Toitures</td><td className="px-3 py-2 border border-stone-200">Tuiles vertes verniss\u00e9es (forme et couleur d&apos;origine)</td><td className="px-3 py-2 border border-stone-200">Toiture terrasse, t\u00f4le, tuiles m\u00e9caniques</td></tr>
            <tr><td className="px-3 py-2 border border-stone-200">Ouvertures</td><td className="px-3 py-2 border border-stone-200">Menuiserie bois peint, dimensions d&apos;origine</td><td className="px-3 py-2 border border-stone-200">Aluminium, PVC, baies vitr\u00e9es</td></tr>
            <tr><td className="px-3 py-2 border border-stone-200">Structure</td><td className="px-3 py-2 border border-stone-200">Renforcement par micropieux, cha\u00eenage discret</td><td className="px-3 py-2 border border-stone-200">D\u00e9molition de murs porteurs, ajout d&apos;\u00e9tages</td></tr>
            <tr><td className="px-3 py-2 border border-stone-200">Int\u00e9rieurs</td><td className="px-3 py-2 border border-stone-200">Plomberie/\u00e9lectricit\u00e9 encastr\u00e9es, confort moderne</td><td className="px-3 py-2 border border-stone-200">Modification des volumes, suppression du patio</td></tr>
          </tbody>
        </table>
        <p>
          Le co\u00fbt de restauration dans la m\u00e9dina varie de <strong>4 000 \u00e0 8 000 MAD/m\u00b2</strong>. L&apos;architecte coordonne avec l&apos;Inspection des monuments historiques, les ma\u00e2lems sp\u00e9cialis\u00e9s en chaux et zellige t\u00e9touanais, et souvent un BET pour les renforcements antisismiques.
        </p>

        <h2>La c\u00f4te M\u00e9diterran\u00e9e : construire face \u00e0 la mer, face au risque</h2>
        <p>
          Le boom immobilier de la r\u00e9gion se joue sur le littoral. <strong>Cabo Negro</strong> est le Saint-Tropez marocain, <strong>M&apos;diq</strong> accueille le port Marina Smir, et <strong>Martil</strong> reste plus accessible pour les projets familiaux. Construire ici impose des contraintes que l&apos;int\u00e9rieur du pays ignore :
        </p>
        <ul>
          <li><strong>Corrosion marine</strong> : les armatures rouillent 3 fois plus vite. B\u00e9ton dos\u00e9 \u00e0 400 kg/m\u00b3 minimum, enrobage de 5 cm, aciers galvanis\u00e9s et peinture anti-corrosion sur toute la menuiserie</li>
          <li><strong>Zone sismique 3 (RPS 2011)</strong> : le nord du Maroc est la r\u00e9gion la plus expos\u00e9e. Poteaux surdimensionn\u00e9s, joints de dilatation, calculs parasismiques renforc\u00e9s obligatoires</li>
          <li><strong>Loi littoral 81-12</strong> : interdiction de construire \u00e0 moins de 100 m du domaine public maritime, hauteur limit\u00e9e, \u00e9tude d&apos;impact environnemental</li>
          <li><strong>Humidit\u00e9 75-85 %</strong> : VMC obligatoire, enduits respirants, traitement anti-moisissures syst\u00e9matique</li>
        </ul>

        <h2>L&apos;h\u00e9ritage espagnol : l&apos;ensanche, un tr\u00e9sor m\u00e9connu</h2>
        <p>
          La ville nouvelle espagnole (l&apos;<em>ensanche</em>), b\u00e2tie entre 1912 et 1956 sous le protectorat, constitue un patrimoine m\u00e9connu. Les immeubles Art d\u00e9co et n\u00e9o-mauresques de la Place Moulay El Mehdi offrent des opportunit\u00e9s de r\u00e9habilitation exceptionnelles. Convertir un appartement colonial de 180 m\u00b2 avec 3,5 m sous plafond co\u00fbte entre <strong>300 000 et 600 000 MAD</strong>, bien moins qu&apos;une construction neuve pour un cachet incomparable.
        </p>
        <p>
          Les architectes t\u00e9touanais sp\u00e9cialis\u00e9s ma\u00eetrisent le renforcement des planchers bois, la restauration du stuc sculpt\u00e9, et l&apos;int\u00e9gration technique moderne sans d\u00e9naturer les volumes d&apos;origine. Un cr\u00e9neau rare et recherch\u00e9.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            \u00c0 T\u00e9touan, le choix d\u00e9pend du projet. M\u00e9dina ? Cherchez un sp\u00e9cialiste en <strong>restauration patrimoniale</strong>. C\u00f4te ? Un architecte avec des r\u00e9alisations baln\u00e9aires et une ma\u00eetrise antisismique. Sur <strong>Bati.ma</strong>, consultez les portfolios pour identifier la bonne sp\u00e9cialit\u00e9 avant de demander un devis.
          </p>
        </div>

        <h2>Un march\u00e9 trilingue et saisonnier</h2>
        <p>
          Particularit\u00e9 unique : beaucoup de clients sont hispanophones (proximit\u00e9 de Ceuta et Melilla), et plusieurs cabinets travaillent en <strong>espagnol, arabe et fran\u00e7ais</strong>. Les honoraires tournent autour de 3 \u00e0 7 % du montant des travaux, entre les tarifs \u00e9lev\u00e9s de Tanger (inflat\u00e9s par Tanger Med) et les prix bas de l&apos;int\u00e9rieur.
        </p>
        <p>
          Le secteur est fortement saisonnier : les chantiers c\u00f4tiers s&apos;acc\u00e9l\u00e8rent d&apos;octobre \u00e0 mai (hors saison touristique), tandis que les projets en m\u00e9dina se planifient toute l&apos;ann\u00e9e. Les meilleurs artisans (zellige t\u00e9touanais, chaux, bois sculpt\u00e9) sont r\u00e9serv\u00e9s 3 \u00e0 6 mois \u00e0 l&apos;avance.
        </p>
      </div>
      <section className="mt-10">
        <h2 className="text-xl font-bold text-stone-900 mb-5">Questions fr\u00e9quentes</h2>
        <div className="space-y-4">
          {faq.map((f) => (
            <details key={f.q} className="group border border-stone-200 rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between px-4 py-3 cursor-pointer text-sm font-medium text-stone-800 hover:bg-stone-50">{f.q}<span className="text-stone-400 group-open:rotate-180 transition-transform">{"\u2193"}</span></summary>
              <div className="px-4 pb-4 pt-1 text-sm text-stone-600 leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
