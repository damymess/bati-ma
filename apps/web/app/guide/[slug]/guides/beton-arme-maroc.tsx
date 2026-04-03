export default function GuideBetonArme() {
  const faq = [
    { q: "Quel est le dosage standard du b\u00e9ton arm\u00e9 au Maroc ?", a: "Le dosage courant pour les \u00e9l\u00e9ments structurels (poteaux, poutres, dalles) est de 350 kg de ciment par m\u00b3 de b\u00e9ton (classe C25/30). Pour les fondations, on utilise 300 kg/m\u00b3. Le b\u00e9ton de propret\u00e9 (non arm\u00e9) est dos\u00e9 \u00e0 150 kg/m\u00b3. Ces dosages sont conformes \u00e0 la norme marocaine NM 10.1.008 et au BAEL 91 r\u00e9vis\u00e9." },
    { q: "Comment fonctionne le RPS 2011 ?", a: "Le R\u00e8glement de Construction Parasismique RPS 2011 classe le Maroc en 5 zones sismiques (0 \u00e0 4). Chaque zone impose des r\u00e8gles de ferraillage, de contreventement et de d\u00e9tails constructifs sp\u00e9cifiques. La zone 4 (Al Hoce\u00efma, R\u00e9gion du Rif) est la plus contraignante. Le respect du RPS est obligatoire et v\u00e9rifi\u00e9 par le bureau de contr\u00f4le." },
    { q: "Quel est le prix du b\u00e9ton pr\u00eat \u00e0 l&apos;emploi au Maroc ?", a: "Le b\u00e9ton pr\u00eat \u00e0 l&apos;emploi (BPE) livr\u00e9 par camion-toupie co\u00fbte entre 900 et 1 200 MAD/m\u00b3 en classe C25/30, selon la r\u00e9gion et les volumes command\u00e9s. Le b\u00e9ton fabriqu\u00e9 sur chantier revient \u00e0 700 \u2013 900 MAD/m\u00b3 mais sa qualit\u00e9 est moins contr\u00f4l\u00e9e. Pour les projets importants, le BPE est fortement recommand\u00e9." },
    { q: "Quel dosage de b\u00e9ton utiliser pour une villa au Maroc ?", a: "Pour une villa standard, le b\u00e9ton C25/30 (dos\u00e9 \u00e0 350 kg/m\u00b3 de ciment) est le minimum recommand\u00e9. En zone c\u00f4ti\u00e8re, passez au C30/37 (400 kg/m\u00b3) pour r\u00e9sister \u00e0 la corrosion. Le BPE (b\u00e9ton pr\u00eat \u00e0 l\u2019emploi) garantit un dosage pr\u00e9cis et homog\u00e8ne." },
    { q: "Comment v\u00e9rifier la qualit\u00e9 du b\u00e9ton sur un chantier marocain ?", a: "Exigez des \u00e9prouvettes cylindriques (16x32 cm) coul\u00e9es \u00e0 chaque livraison et test\u00e9es en laboratoire agr\u00e9\u00e9 (LPEE) \u00e0 7 et 28 jours. V\u00e9rifiez le bon de livraison BPE (dosage, adjuvants, rapport E/C). Un slump test sur site mesure la consistance." },
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
        <h2>Le b\u00e9ton arm\u00e9 : pilier de la construction marocaine</h2>
        <p>
          Le b\u00e9ton arm\u00e9 repr\u00e9sente plus de 90 % de la construction au Maroc, des villas aux immeubles de grande hauteur. Ma\u00eetriser ses caract\u00e9ristiques, ses dosages et les normes parasismiques est essentiel pour tout ma\u00eetre d&apos;ouvrage. Ce guide d\u00e9taille les r\u00e8gles du b\u00e9ton arm\u00e9 dans le contexte marocain, des mat\u00e9riaux disponibles aux exigences r\u00e9glementaires.
        </p>

        <h2>Normes et r\u00e9glementation</h2>
        <p>
          La construction en b\u00e9ton arm\u00e9 au Maroc est encadr\u00e9e par plusieurs textes : le BAEL 91 r\u00e9vis\u00e9 99 (r\u00e8gles de calcul), le RPS 2011 (construction parasismique), les normes marocaines NM 10.1.008 (b\u00e9ton) et NM 10.1.012 (aciers d&apos;armature). Depuis 2002, le contr\u00f4le technique obligatoire par un organisme agr\u00e9\u00e9 (Bureau Veritas, Socotec, LPEE) s&apos;applique \u00e0 toute construction de plus de R+2 ou recevant du public.
        </p>

        <h2>Quelles sont les zones sismiques du Maroc selon le RPS 2011 ?</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-300 px-3 py-2 text-left">Zone</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Acc\u00e9l\u00e9ration (Ag/g)</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Villes concern\u00e9es</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Exigences</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Zone 0</td>
              <td className="border border-stone-300 px-3 py-2">0,01</td>
              <td className="border border-stone-300 px-3 py-2">Laayoune, Dakhla</td>
              <td className="border border-stone-300 px-3 py-2">Minimales</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Zone 1</td>
              <td className="border border-stone-300 px-3 py-2">0,04</td>
              <td className="border border-stone-300 px-3 py-2">Casablanca, Rabat</td>
              <td className="border border-stone-300 px-3 py-2">Standards</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Zone 2</td>
              <td className="border border-stone-300 px-3 py-2">0,08</td>
              <td className="border border-stone-300 px-3 py-2">F\u00e8s, Marrakech, Tanger</td>
              <td className="border border-stone-300 px-3 py-2">Renforc\u00e9es</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Zone 3</td>
              <td className="border border-stone-300 px-3 py-2">0,12</td>
              <td className="border border-stone-300 px-3 py-2">Agadir, Nador</td>
              <td className="border border-stone-300 px-3 py-2">\u00c9lev\u00e9es</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Zone 4</td>
              <td className="border border-stone-300 px-3 py-2">0,18</td>
              <td className="border border-stone-300 px-3 py-2">Al Hoce\u00efma, Rif</td>
              <td className="border border-stone-300 px-3 py-2">Maximales</td>
            </tr>
          </tbody>
        </table>

        <h2>Mat\u00e9riaux et fournisseurs au Maroc</h2>
        <p>
          Le march\u00e9 marocain du ciment est domin\u00e9 par LafargeHolcim Maroc (45 % du march\u00e9), Ciments du Maroc (groupe HeidelbergCement, 25 %) et CIMAT (15 %). Le prix du ciment CPJ 45 (le plus utilis\u00e9) se situe entre 65 et 80 MAD le sac de 50 kg. Pour le b\u00e9ton arm\u00e9, utilisez exclusivement du ciment CPJ 45 ou CPA 55 pour les \u00e9l\u00e9ments fortement sollicit\u00e9s.
        </p>
        <p>
          Les aciers d&apos;armature (barres HA \u2014 Haute Adh\u00e9rence) proviennent principalement de Sonasid (groupe ArcelorMittal) et des importations turques. Le prix moyen est de 8 000 \u00e0 10 000 MAD la tonne. Les diam\u00e8tres courants sont : HA6 et HA8 pour les \u00e9triers et cadres, HA10 et HA12 pour les dalles, HA14 et HA16 pour les poutres, HA20 et HA25 pour les poteaux et fondations.
        </p>

        <h2>Dosages et classes de b\u00e9ton</h2>
        <p>
          Le b\u00e9ton est class\u00e9 selon sa r\u00e9sistance \u00e0 la compression \u00e0 28 jours. La classe C25/30 (r\u00e9sistance caract\u00e9ristique de 25 MPa sur cylindre) est le standard pour les constructions courantes. Le dosage correspondant est de 350 kg de ciment CPJ 45 par m\u00b3, avec un rapport eau/ciment (E/C) maximal de 0,55. Le sable doit \u00eatre propre (teneur en fines inf\u00e9rieure \u00e0 5 %) et les granulats bien calibr\u00e9s (5/15 et 15/25 mm).
        </p>
        <p>
          Le b\u00e9ton de chantier artisanal, encore tr\u00e8s r\u00e9pandu au Maroc, pr\u00e9sente des risques de sous-dosage et de qualit\u00e9 variable. Pour toute construction structurelle, privil\u00e9giez le b\u00e9ton pr\u00eat \u00e0 l&apos;emploi (BPE) livr\u00e9 par centrale, dont la composition est contr\u00f4l\u00e9e et trac\u00e9e. Les principales centrales \u00e0 b\u00e9ton sont g\u00e9r\u00e9es par LafargeHolcim (Mabetex), Lafarge B\u00e9tons et des op\u00e9rateurs r\u00e9gionaux.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Exigez toujours les r\u00e9sultats d&apos;essais d&apos;\u00e9crasement (essais sur \u00e9prouvettes \u00e0 7 et 28 jours) pour chaque lot de b\u00e9ton coul\u00e9 sur votre chantier. C&apos;est la seule garantie de la r\u00e9sistance r\u00e9elle du b\u00e9ton. Un architecte et un BET comp\u00e9tents superviseront ces contr\u00f4les. Trouvez-les sur Bati.ma.
          </p>
        </div>

        <h2>Bonnes pratiques de mise en \u0153uvre</h2>
        <p>
          Le coulage du b\u00e9ton doit \u00eatre r\u00e9alis\u00e9 en continu, sans reprise de b\u00e9tonnage dans les zones critiques (n\u0153uds poteau-poutre). La vibration du b\u00e9ton frais est obligatoire pour \u00e9liminer les bulles d&apos;air. La cure (arrosage) doit durer au minimum 7 jours pour \u00e9viter la fissuration par retrait. En \u00e9t\u00e9 marocain, avec des temp\u00e9ratures d\u00e9passant 35\u00b0C, le b\u00e9tonnage doit se faire t\u00f4t le matin ou en fin de journ\u00e9e.
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
