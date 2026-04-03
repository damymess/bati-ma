export default function GuideEtancheiteToiture() {
  const faq = [
    { q: "Pourquoi les toitures au Maroc ont-elles autant de probl\u00e8mes d&apos;\u00e9tanch\u00e9it\u00e9 ?", a: "La toiture-terrasse, typique de l&apos;architecture marocaine, est expos\u00e9e aux UV intenses (d\u00e9gradation des membranes), aux \u00e9carts thermiques (fissuration), et aux pluies torrentielles concentr\u00e9es sur quelques mois. S&apos;ajoutent des d\u00e9fauts d&apos;ex\u00e9cution fr\u00e9quents : absence de forme de pente, relev\u00e9s d&apos;\u00e9tanch\u00e9it\u00e9 insuffisants et mat\u00e9riaux de mauvaise qualit\u00e9." },
    { q: "Combien co\u00fbte la r\u00e9fection d&apos;\u00e9tanch\u00e9it\u00e9 d&apos;une terrasse au Maroc ?", a: "Le co\u00fbt varie selon la technique : 80 \u00e0 150 MAD/m\u00b2 pour un rev\u00eatement bitumineux multicouche, 150 \u00e0 250 MAD/m\u00b2 pour une membrane PVC ou TPO, et 200 \u00e0 350 MAD/m\u00b2 pour une r\u00e9sine polyur\u00e9thane liquide. La d\u00e9pose de l&apos;ancien rev\u00eatement ajoute 30 \u00e0 60 MAD/m\u00b2. Pour une terrasse de 100 m\u00b2, pr\u00e9voyez 15 000 \u00e0 35 000 MAD tout compris." },
    { q: "Quelle est la dur\u00e9e de vie d&apos;une \u00e9tanch\u00e9it\u00e9 de toiture ?", a: "Un rev\u00eatement bitumineux bien pos\u00e9 dure 10 \u00e0 15 ans. Les membranes PVC/TPO atteignent 20 \u00e0 25 ans. La r\u00e9sine polyur\u00e9thane offre 15 \u00e0 20 ans de protection. Ces dur\u00e9es supposent une pose dans les r\u00e8gles de l&apos;art et un entretien minimal (nettoyage annuel, v\u00e9rification des relev\u00e9s et des joints)." },
    { q: "Faut-il un architecte pour un projet de etancheite toiture ?", a: "Conform\u00e9ment \u00e0 la loi 16-89, le recours \u00e0 un architecte inscrit \u00e0 l\u2019Ordre est obligatoire pour toute construction au Maroc. M\u00eame pour les projets techniques, l\u2019architecte coordonne le permis de construire et assure la conformit\u00e9. Consultez les profils v\u00e9rifi\u00e9s sur Bati.ma." },
    { q: "Comment obtenir un devis pour etancheite toiture ?", a: "Demandez au minimum 3 devis d\u00e9taill\u00e9s aupr\u00e8s de professionnels diff\u00e9rents. Comparez les postes ligne par ligne, v\u00e9rifiez les r\u00e9f\u00e9rences et exigez un calendrier d\u2019ex\u00e9cution. Sur Bati.ma, vous pouvez contacter directement les architectes sp\u00e9cialis\u00e9s et demander vos devis gratuitement." },
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
        <h2>L&apos;\u00e9tanch\u00e9it\u00e9 : le probl\u00e8me n\u00b01 des b\u00e2timents au Maroc</h2>
        <p>
          Les infiltrations d&apos;eau par la toiture sont la pathologie la plus fr\u00e9quente dans la construction marocaine. Selon les experts du LPEE (Laboratoire Public d&apos;Essais et d&apos;\u00c9tudes), plus de 60 % des litiges en construction concernent des d\u00e9fauts d&apos;\u00e9tanch\u00e9it\u00e9. La toiture-terrasse, omnipr\u00e9sente dans l&apos;architecture marocaine, est particuli\u00e8rement vuln\u00e9rable si elle n&apos;est pas correctement trait\u00e9e.
        </p>

        <h2>Quelles sont les causes principales des infiltrations ?</h2>
        <p>
          Les d\u00e9fauts d&apos;\u00e9tanch\u00e9it\u00e9 au Maroc ont des causes multiples. L&apos;absence de forme de pente (minimum 1,5 % selon le DTU) provoque la stagnation d&apos;eau. Les relev\u00e9s d&apos;\u00e9tanch\u00e9it\u00e9 insuffisants (hauteur minimale 15 cm au-dessus du niveau fini) laissent passer l&apos;eau en cas de forte pluie. Les joints de dilatation mal trait\u00e9s, les traverses de toiture non \u00e9tanch\u00e9es et le vieillissement acc\u00e9l\u00e9r\u00e9 par les UV compl\u00e8tent le tableau.
        </p>
        <p>
          Le probl\u00e8me est aggrav\u00e9 par la pratique courante de poser des paraboles, des r\u00e9servoirs d&apos;eau et des installations diverses sur les terrasses, per\u00e7ant la membrane d&apos;\u00e9tanch\u00e9it\u00e9 sans la r\u00e9parer correctement.
        </p>

        <h2>Solutions d&apos;\u00e9tanch\u00e9it\u00e9</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-300 px-3 py-2 text-left">Technique</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Prix (MAD/m\u00b2)</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Dur\u00e9e de vie</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Usage id\u00e9al</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Bitume SBS multicouche</td>
              <td className="border border-stone-300 px-3 py-2">80 \u2013 150</td>
              <td className="border border-stone-300 px-3 py-2">10 \u2013 15 ans</td>
              <td className="border border-stone-300 px-3 py-2">Terrasses non accessibles</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Membrane PVC</td>
              <td className="border border-stone-300 px-3 py-2">150 \u2013 250</td>
              <td className="border border-stone-300 px-3 py-2">20 \u2013 25 ans</td>
              <td className="border border-stone-300 px-3 py-2">Toitures v\u00e9g\u00e9talis\u00e9es, grandes surfaces</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">R\u00e9sine polyur\u00e9thane (SEL)</td>
              <td className="border border-stone-300 px-3 py-2">200 \u2013 350</td>
              <td className="border border-stone-300 px-3 py-2">15 \u2013 20 ans</td>
              <td className="border border-stone-300 px-3 py-2">Terrasses accessibles, formes complexes</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Membrane TPO</td>
              <td className="border border-stone-300 px-3 py-2">180 \u2013 280</td>
              <td className="border border-stone-300 px-3 py-2">20 \u2013 30 ans</td>
              <td className="border border-stone-300 px-3 py-2">Terrasses expos\u00e9es aux UV</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Ciment hydrofuge (solution locale)</td>
              <td className="border border-stone-300 px-3 py-2">40 \u2013 80</td>
              <td className="border border-stone-300 px-3 py-2">3 \u2013 5 ans</td>
              <td className="border border-stone-300 px-3 py-2">R\u00e9paration temporaire</td>
            </tr>
          </tbody>
        </table>

        <h2>Mise en \u0153uvre dans les r\u00e8gles de l&apos;art</h2>
        <p>
          Une \u00e9tanch\u00e9it\u00e9 durable repose sur plusieurs principes fondamentaux. La forme de pente doit diriger l&apos;eau vers les descentes pluviales (minimum 1,5 %, id\u00e9al 2 \u00e0 3 %). Les relev\u00e9s d&apos;\u00e9tanch\u00e9it\u00e9 doivent remonter d&apos;au moins 15 cm au-dessus du niveau fini de la terrasse, et 20 cm au-dessus des seuils de porte. Les joints de dilatation n\u00e9cessitent un traitement sp\u00e9cifique avec bande de renfort.
        </p>
        <p>
          La protection de la membrane est \u00e9galement essentielle : couche de protection m\u00e9canique (chape ou dalles sur plots) pour les terrasses accessibles, autoprotection min\u00e9rale (paillettes d&apos;ardoise) pour les terrasses non accessibles. L&apos;\u00e9vacuation des eaux pluviales doit \u00eatre dimensionn\u00e9e pour les pluies d&apos;orage marocaines (d\u00e9bit de 3 litres par minute et par m\u00b2 minimum).
        </p>

        <h2>Choisir un \u00e9tanch\u00e9iste qualifi\u00e9</h2>
        <p>
          Le march\u00e9 marocain de l&apos;\u00e9tanch\u00e9it\u00e9 compte des entreprises sp\u00e9cialis\u00e9es et des artisans g\u00e9n\u00e9ralistes. Privil\u00e9giez les entreprises disposant d&apos;une qualification professionnelle (label FNBTP) et offrant une garantie d\u00e9cennale. Les principaux fournisseurs de mat\u00e9riaux d&apos;\u00e9tanch\u00e9it\u00e9 au Maroc sont Sika, Soprema, Mapei et des fabricants locaux comme Isolma.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            N&apos;attendez pas les premi\u00e8res fuites pour traiter votre terrasse. Une \u00e9tanch\u00e9it\u00e9 pr\u00e9ventive co\u00fbte 2 \u00e0 3 fois moins cher qu&apos;une r\u00e9paration apr\u00e8s d\u00e9g\u00e2ts des eaux. Faites inspecter votre toiture par un professionnel avant chaque saison des pluies. Trouvez un architecte ou un BET sp\u00e9cialis\u00e9 sur Bati.ma pour un diagnostic pr\u00e9cis.
          </p>
        </div>

        <h2>Quelles garanties et assurances exiger ?</h2>
        <p>
          La garantie d\u00e9cennale (article 769 du DOC marocain) couvre les d\u00e9fauts d&apos;\u00e9tanch\u00e9it\u00e9 pendant 10 ans apr\u00e8s r\u00e9ception des travaux. L&apos;assurance Tous Risques Chantier (TRC) est obligatoire pour les travaux de plus de 5 millions MAD. Pour les petits chantiers, exigez au minimum un PV de r\u00e9ception et une garantie \u00e9crite de l&apos;entreprise.
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
