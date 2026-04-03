export default function GuideMaisonBois() {
  const faq = [
    { q: "Est-il l\u00e9gal de construire une maison en bois au Maroc ?", a: "Oui, la construction en bois est autoris\u00e9e au Maroc. Il faut obtenir un permis de construire classique sign\u00e9 par un architecte agr\u00e9\u00e9 et respecter le RPS 2000 (parasismique) et la RTCM (thermique). Certaines communes exigent une \u00e9tude structurelle sp\u00e9cifique pour l\u2019ossature bois." },
    { q: "Le bois r\u00e9siste-t-il au climat marocain (chaleur, termites) ?", a: "Oui, \u00e0 condition de choisir des essences adapt\u00e9es (c\u00e8dre de l\u2019Atlas, pin trait\u00e9 classe 4, douglas) et d\u2019appliquer un traitement anti-termites et anti-humidit\u00e9. Les maisons ossature bois bien con\u00e7ues offrent une excellente isolation thermique, r\u00e9duisant la climatisation en \u00e9t\u00e9." },
    { q: "Combien co\u00fbte une maison en bois au Maroc par rapport au b\u00e9ton ?", a: "Une maison ossature bois co\u00fbte entre 5 000 et 9 000 MAD/m\u00b2 cl\u00e9s en main. C\u2019est comparable voire l\u00e9g\u00e8rement sup\u00e9rieur au b\u00e9ton (4 000\u20138 000 MAD/m\u00b2), mais les \u00e9conomies d\u2019\u00e9nergie \u00e0 long terme compensent le surco\u00fbt initial." },
    { q: "Faut-il un architecte pour un projet de maison bois au Maroc ?", a: "Conform\u00e9ment \u00e0 la loi 16-89, le recours \u00e0 un architecte inscrit \u00e0 l\u2019Ordre est obligatoire pour toute construction au Maroc. M\u00eame pour les projets techniques, l\u2019architecte coordonne le permis de construire et assure la conformit\u00e9. Consultez les profils v\u00e9rifi\u00e9s sur Bati.ma." },
    { q: "Comment obtenir un devis pour maison bois au Maroc ?", a: "Demandez au minimum 3 devis d\u00e9taill\u00e9s aupr\u00e8s de professionnels diff\u00e9rents. Comparez les postes ligne par ligne, v\u00e9rifiez les r\u00e9f\u00e9rences et exigez un calendrier d\u2019ex\u00e9cution. Sur Bati.ma, vous pouvez contacter directement les architectes sp\u00e9cialis\u00e9s et demander vos devis gratuitement." },
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
        <h2>La maison en bois est-elle autoris\u00e9e au Maroc ?</h2>
        <p>
          Contrairement aux id\u00e9es re\u00e7ues, la construction en bois est <strong>parfaitement l\u00e9gale au Maroc</strong>.
          Aucun texte de loi n&apos;interdit l&apos;utilisation du bois comme mat\u00e9riau structurel. Le permis de construire est d\u00e9livr\u00e9
          dans les m\u00eames conditions qu&apos;une construction classique, \u00e0 condition que l&apos;\u00e9tude technique respecte le
          <strong> RPS 2000</strong> et la <strong>RTCM</strong>. Les zones sismiques (Al Hoceima, Agadir) n\u00e9cessitent
          une attention particuli\u00e8re au contreventement.
        </p>

        <h2>Types de construction bois au Maroc</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead><tr className="bg-stone-100"><th className="border border-stone-200 px-3 py-2 text-left">Technique</th><th className="border border-stone-200 px-3 py-2 text-left">Prix / m\u00b2</th><th className="border border-stone-200 px-3 py-2 text-left">D\u00e9lai</th><th className="border border-stone-200 px-3 py-2 text-left">Id\u00e9al pour</th></tr></thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">Ossature bois (MOB)</td><td className="border border-stone-200 px-3 py-2">5 000 \u2013 8 000 MAD</td><td className="border border-stone-200 px-3 py-2">3\u20135 mois</td><td className="border border-stone-200 px-3 py-2">Villas, maisons individuelles</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Poteau-poutre</td><td className="border border-stone-200 px-3 py-2">6 000 \u2013 9 000 MAD</td><td className="border border-stone-200 px-3 py-2">4\u20136 mois</td><td className="border border-stone-200 px-3 py-2">Architecture contemporaine, grandes baies</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Madrier / rondin</td><td className="border border-stone-200 px-3 py-2">5 500 \u2013 8 500 MAD</td><td className="border border-stone-200 px-3 py-2">4\u20136 mois</td><td className="border border-stone-200 px-3 py-2">Chalets, lodges Atlas/Ifrane</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">CLT (bois lamell\u00e9 crois\u00e9)</td><td className="border border-stone-200 px-3 py-2">7 000 \u2013 11 000 MAD</td><td className="border border-stone-200 px-3 py-2">3\u20134 mois</td><td className="border border-stone-200 px-3 py-2">R+2 max, performances \u00e9nerg\u00e9tiques \u00e9lev\u00e9es</td></tr>
          </tbody>
        </table>

        <h2>Isolation et performance \u00e9nerg\u00e9tique</h2>
        <p>
          Le bois est un <strong>isolant naturel 15 fois plus performant que le b\u00e9ton</strong>. Une maison ossature bois
          avec isolation int\u00e9gr\u00e9e (laine de bois, li\u00e8ge, ouate de cellulose) atteint facilement les normes RTCM sans surco\u00fbt.
          En \u00e9t\u00e9 \u00e0 Marrakech, la temp\u00e9rature int\u00e9rieure reste 5 \u00e0 8 \u00b0C inf\u00e9rieure \u00e0 l&apos;ext\u00e9rieur,
          r\u00e9duisant la facture de climatisation de 40 \u00e0 60 %.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Exigez un traitement <strong>classe 4</strong> (autoclave) pour tout bois expos\u00e9 aux intemp\u00e9ries, et une barri\u00e8re anti-termites physique ou chimique. Le c\u00e8dre de l&apos;Atlas, naturellement r\u00e9sistant, est un excellent choix local.
          </p>
        </div>

        <h2>Durabilit\u00e9 face au climat marocain</h2>
        <p>
          Le principal d\u00e9fi est la <strong>chaleur estivale</strong> et les <strong>termites</strong> dans certaines r\u00e9gions (Souss, Gharb).
          Les solutions existent : bardage ventil\u00e9, d\u00e9bords de toiture g\u00e9n\u00e9reux, traitement autoclave,
          essences r\u00e9sistantes (c\u00e8dre, m\u00e9l\u00e8ze import\u00e9, accoya). En montagne (Ifrane, Azrou, Atlas), le bois est le mat\u00e9riau
          de pr\u00e9dilection depuis des si\u00e8cles.
        </p>

        <h2>Fournisseurs et constructeurs bois au Maroc</h2>
        <p>
          Plusieurs entreprises se sont sp\u00e9cialis\u00e9es : <strong>Woodia Maroc</strong> (Marrakech), <strong>Atlas Bois Construction</strong> (Ifrane),
          <strong> Dar Bois</strong> (Casablanca) et <strong>EcoHabitat Maroc</strong> (Rabat). V\u00e9rifiez que le constructeur dispose
          d&apos;une assurance d\u00e9cennale et de r\u00e9f\u00e9rences v\u00e9rifiables au Maroc.
        </p>

        <h2>Autorisations et d\u00e9marches administratives</h2>
        <ol>
          <li>Consultez un architecte inscrit \u00e0 l&apos;Ordre pour l&apos;\u00e9tude de faisabilit\u00e9</li>
          <li>R\u00e9alisez une \u00e9tude g\u00e9otechnique du terrain</li>
          <li>Pr\u00e9parez les plans architecturaux et la note de calcul structure bois</li>
          <li>D\u00e9posez le dossier de permis de construire \u00e0 la commune</li>
          <li>Obtenez l&apos;avis conforme de l&apos;agence urbaine</li>
          <li>Lancez le chantier apr\u00e8s d\u00e9livrance du permis</li>
        </ol>

        <h2>Avantages et inconv\u00e9nients</h2>
        <ul>
          <li><strong>+</strong> Construction rapide (3 \u00e0 6 mois vs 12 \u00e0 18 mois)</li>
          <li><strong>+</strong> Excellente isolation thermique et acoustique</li>
          <li><strong>+</strong> Empreinte carbone r\u00e9duite</li>
          <li><strong>+</strong> L\u00e9g\u00e8ret\u00e9 (fondations moins co\u00fbteuses)</li>
          <li><strong>\u2013</strong> Entretien r\u00e9gulier du bardage ext\u00e9rieur (tous les 5\u201310 ans)</li>
          <li><strong>\u2013</strong> Perception culturelle encore n\u00e9gative chez certains Marocains</li>
          <li><strong>\u2013</strong> Peu de main-d&apos;\u0153uvre qualifi\u00e9e hors grandes villes</li>
        </ul>
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
