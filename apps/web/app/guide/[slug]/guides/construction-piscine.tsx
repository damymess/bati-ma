export default function GuideConstructionPiscine() {
  const faq = [
    { q: "Faut-il un permis pour construire une piscine au Maroc ?", a: "Oui, toute piscine enterr\u00e9e n\u00e9cessite une autorisation de construire d\u00e9livr\u00e9e par la commune. Le dossier comprend les plans sign\u00e9s par un architecte agr\u00e9\u00e9, une \u00e9tude de sol et le plan de situation. Le d\u00e9lai moyen d&apos;obtention est de 2 \u00e0 3 mois." },
    { q: "Combien co\u00fbte une piscine au Maroc en 2025 ?", a: "Le budget varie selon le type : une piscine coque polyester co\u00fbte entre 40 000 et 80 000 MAD, une piscine en b\u00e9ton projet\u00e9 entre 80 000 et 200 000 MAD, et une piscine naturelle (biopiscine) entre 150 000 et 300 000 MAD. Ces prix incluent la structure mais pas forc\u00e9ment l&apos;\u00e9quipement de filtration." },
    { q: "Quelle est la meilleure p\u00e9riode pour construire une piscine au Maroc ?", a: "L&apos;id\u00e9al est de lancer les travaux entre septembre et f\u00e9vrier. Les artisans sont plus disponibles, les prix des mat\u00e9riaux plus stables, et la piscine sera pr\u00eate pour la saison estivale. \u00c9vitez de couler le b\u00e9ton pendant les fortes chaleurs (au-dessus de 35\u00b0C) car le s\u00e9chage trop rapide fragilise la structure." },
    { q: "Faut-il un permis pour construire une piscine au Maroc ?", a: "Oui, toute piscine enterr\u00e9e n\u00e9cessite une d\u00e9claration aupr\u00e8s de la commune dans le cadre du permis de construire ou d\u2019un permis modificatif. Les piscines hors-sol de moins de 10 m\u00b2 sont g\u00e9n\u00e9ralement dispens\u00e9es. V\u00e9rifiez aupr\u00e8s de l\u2019agence urbaine." },
    { q: "Quel est le co\u00fbt d\u2019entretien annuel d\u2019une piscine au Maroc ?", a: "L\u2019entretien annuel d\u2019une piscine au Maroc co\u00fbte entre 5 000 et 15 000 MAD : produits chimiques (2 000-5 000 MAD), \u00e9lectricit\u00e9 pompe (3 000-6 000 MAD), nettoyage et maintenance (2 000-4 000 MAD). L\u2019\u00e9lectrolyse au sel r\u00e9duit les co\u00fbts de 30 %." },
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
        <h2>Pourquoi investir dans une piscine au Maroc ?</h2>
        <p>
          Avec un ensoleillement d\u00e9passant 300 jours par an dans la plupart des r\u00e9gions, le Maroc offre un climat id\u00e9al pour profiter d&apos;une piscine priv\u00e9e. Que vous soyez \u00e0 Marrakech, Agadir ou Casablanca, une piscine valorise votre bien immobilier de 15 \u00e0 25 % en moyenne. Pour les propri\u00e9taires de riads, villas ou maisons d&apos;h\u00f4tes, c&apos;est un investissement qui am\u00e9liore \u00e0 la fois le confort de vie et l&apos;attractivit\u00e9 locative.
        </p>
        <p>
          Le march\u00e9 marocain de la piscine a connu une croissance de 20 % ces derni\u00e8res ann\u00e9es, port\u00e9 par le d\u00e9veloppement des zones r\u00e9sidentielles et le tourisme. Les piscinistes locaux ma\u00eetrisent d\u00e9sormais des techniques vari\u00e9es, du b\u00e9ton arm\u00e9 traditionnel aux solutions modulaires pr\u00e9fabriqu\u00e9es.
        </p>

        <h2>Les diff\u00e9rents types de piscines</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-300 px-3 py-2 text-left">Type</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Budget (MAD)</th>
              <th className="border border-stone-300 px-3 py-2 text-left">D\u00e9lai</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Dur\u00e9e de vie</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Coque polyester</td>
              <td className="border border-stone-300 px-3 py-2">40 000 \u2013 80 000</td>
              <td className="border border-stone-300 px-3 py-2">2 \u00e0 3 semaines</td>
              <td className="border border-stone-300 px-3 py-2">15 \u2013 20 ans</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">B\u00e9ton projet\u00e9 (gunite)</td>
              <td className="border border-stone-300 px-3 py-2">80 000 \u2013 200 000</td>
              <td className="border border-stone-300 px-3 py-2">6 \u00e0 10 semaines</td>
              <td className="border border-stone-300 px-3 py-2">30 \u2013 50 ans</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">B\u00e9ton arm\u00e9 + carrelage</td>
              <td className="border border-stone-300 px-3 py-2">100 000 \u2013 250 000</td>
              <td className="border border-stone-300 px-3 py-2">8 \u00e0 12 semaines</td>
              <td className="border border-stone-300 px-3 py-2">40+ ans</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Piscine naturelle</td>
              <td className="border border-stone-300 px-3 py-2">150 000 \u2013 300 000</td>
              <td className="border border-stone-300 px-3 py-2">10 \u00e0 16 semaines</td>
              <td className="border border-stone-300 px-3 py-2">Illimit\u00e9e</td>
            </tr>
          </tbody>
        </table>
        <p>
          La piscine en b\u00e9ton projet\u00e9 reste la solution la plus populaire au Maroc. Elle permet une personnalisation totale (forme libre, plage immerg\u00e9e, d\u00e9bordement) et r\u00e9siste parfaitement aux \u00e9carts de temp\u00e9rature. La coque polyester convient aux budgets plus serr\u00e9s et aux terrains faciles d&apos;acc\u00e8s. La piscine naturelle, encore rare au Maroc, s\u00e9duit les amateurs d&apos;\u00e9co-construction.
        </p>

        <h2>D\u00e9marches administratives et permis</h2>
        <p>
          Conform\u00e9ment \u00e0 la loi 12-90 relative \u00e0 l&apos;urbanisme, toute construction de piscine enterr\u00e9e n\u00e9cessite une autorisation de construire. Le dossier doit \u00eatre d\u00e9pos\u00e9 aupr\u00e8s de la commune et comprend : le plan architectural sign\u00e9 par un architecte inscrit \u00e0 l&apos;Ordre, l&apos;\u00e9tude g\u00e9otechnique du sol, le plan de raccordement aux r\u00e9seaux (eau, \u00e9lectricit\u00e9, assainissement) et l&apos;attestation de propri\u00e9t\u00e9 fonci\u00e8re.
        </p>
        <p>
          En zone r\u00e9sidentielle, v\u00e9rifiez les r\u00e8gles du lotissement : certaines copropri\u00e9t\u00e9s imposent des distances minimales par rapport aux limites de propri\u00e9t\u00e9 (g\u00e9n\u00e9ralement 3 m\u00e8tres). Les piscines hors-sol de moins de 20 m\u00b2 ne n\u00e9cessitent g\u00e9n\u00e9ralement pas de permis, mais une d\u00e9claration pr\u00e9alable reste recommand\u00e9e.
        </p>

        <h2>\u00c9tapes de construction et choix des mat\u00e9riaux</h2>
        <p>
          La construction d&apos;une piscine en b\u00e9ton suit un processus rigoureux. L&apos;\u00e9tude de sol d\u00e9termine la nature du terrain et le type de fondation n\u00e9cessaire (radier, micropieux en cas de sol argileux). Le terrassement repr\u00e9sente environ 10 \u00e0 15 % du budget total. Vient ensuite le ferraillage, conforme aux normes RPS 2011 en zone sismique, puis le coulage du b\u00e9ton (dosage minimum de 350 kg/m\u00b3 pour l&apos;\u00e9tanch\u00e9it\u00e9).
        </p>
        <p>
          Pour le rev\u00eatement, vous avez le choix entre le carrelage en gr\u00e8s c\u00e9rame (50 \u00e0 150 MAD/m\u00b2), la mosa\u00efque en p\u00e2te de verre (200 \u00e0 500 MAD/m\u00b2), le liner (120 \u00e0 250 MAD/m\u00b2) ou l&apos;enduit type silico-marbre. La filtration \u00e0 sable reste la plus r\u00e9pandue (8 000 \u00e0 15 000 MAD), tandis que la filtration \u00e0 cartouche convient aux petits bassins.
        </p>

        <h2>Entretien et s\u00e9curit\u00e9</h2>
        <p>
          L&apos;entretien annuel d&apos;une piscine au Maroc co\u00fbte entre 5 000 et 15 000 MAD, incluant les produits chimiques (chlore, pH), l&apos;\u00e9lectricit\u00e9 de la pompe et l&apos;eau d&apos;appoint. Le climat chaud acc\u00e9l\u00e8re la prolif\u00e9ration des algues : un traitement r\u00e9gulier au chlore ou au sel est indispensable.
        </p>
        <p>
          En mati\u00e8re de s\u00e9curit\u00e9, bien que la l\u00e9gislation marocaine soit moins stricte que la norme fran\u00e7aise NF P90-306, il est fortement recommand\u00e9 d&apos;installer au minimum une barri\u00e8re de protection (5 000 \u00e0 20 000 MAD) ou une alarme de d\u00e9tection d&apos;immersion, surtout si vous avez des enfants. Les couvertures automatiques offrent \u00e0 la fois s\u00e9curit\u00e9 et \u00e9conomie d&apos;\u00e9vaporation.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Avant de choisir votre pisciniste, demandez syst\u00e9matiquement des r\u00e9f\u00e9rences de chantiers r\u00e9alis\u00e9s dans votre r\u00e9gion et visitez au moins deux piscines achev\u00e9es depuis plus d&apos;un an. Un architecte sp\u00e9cialis\u00e9 en am\u00e9nagement ext\u00e9rieur pourra optimiser l&apos;int\u00e9gration du bassin dans votre jardin et garantir la conformit\u00e9 du dossier de permis. Trouvez le v\u00f4tre sur Bati.ma.
          </p>
        </div>

        <h2>Quelles sont les tendances piscine au Maroc ?</h2>
        <p>
          Les piscines \u00e0 d\u00e9bordement dominent les projets haut de gamme \u00e0 Marrakech et Tanger. L&apos;\u00e9lectrolyse au sel gagne du terrain comme alternative au chlore classique, avec un investissement initial de 8 000 \u00e0 20 000 MAD mais un co\u00fbt d&apos;entretien r\u00e9duit de 50 %. Les pompes \u00e0 chaleur (15 000 \u00e0 40 000 MAD) permettent de prolonger la saison de baignade d&apos;avril \u00e0 novembre, m\u00eame dans les r\u00e9gions de l&apos;int\u00e9rieur.
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
