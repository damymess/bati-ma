export default function GuideIsolationThermique() {
  const faq = [
    { q: "L&apos;isolation thermique est-elle obligatoire au Maroc ?", a: "Oui, depuis l&apos;entr\u00e9e en vigueur du R\u00e8glement Thermique de Construction au Maroc (RTCM) en 2015, les constructions neuves doivent respecter des performances thermiques minimales. Le RTCM d\u00e9finit 6 zones climatiques avec des valeurs maximales de coefficient de transmission thermique (U) pour les murs, toitures et vitrages." },
    { q: "Quels sont les mat\u00e9riaux d&apos;isolation les plus utilis\u00e9s au Maroc ?", a: "Le polystyr\u00e8ne expans\u00e9 (PSE) domine le march\u00e9 gr\u00e2ce \u00e0 son prix abordable (40 \u00e0 80 MAD/m\u00b2 pos\u00e9 en 5 cm). La laine de roche offre de meilleures performances acoustiques et coupe-feu (80 \u00e0 150 MAD/m\u00b2). Le polyur\u00e9thane projet\u00e9 (120 \u00e0 200 MAD/m\u00b2) est id\u00e9al pour les toitures terrasses. Les blocs ICF (coffrage isolant permanent) combinent structure et isolation." },
    { q: "Combien peut-on \u00e9conomiser avec une bonne isolation ?", a: "Une isolation conforme au RTCM permet de r\u00e9duire la consommation \u00e9nerg\u00e9tique de 30 \u00e0 50 % pour la climatisation et le chauffage. Pour une villa de 200 m\u00b2 \u00e0 Marrakech, cela repr\u00e9sente une \u00e9conomie annuelle de 5 000 \u00e0 12 000 MAD sur la facture d&apos;\u00e9lectricit\u00e9. Le retour sur investissement de l&apos;isolation se fait en 3 \u00e0 5 ans." },
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
        <h2>L&apos;isolation thermique au Maroc : un enjeu \u00e9nerg\u00e9tique majeur</h2>
        <p>
          Le Maroc conna\u00eet des \u00e9carts de temp\u00e9rature consid\u00e9rables : plus de 45\u00b0C en \u00e9t\u00e9 \u00e0 Marrakech, en dessous de 0\u00b0C en hiver dans l&apos;Atlas. Pourtant, la majorit\u00e9 des b\u00e2timents existants ne sont pas isol\u00e9s, entra\u00eenant des factures \u00e9nerg\u00e9tiques excessives et un inconfort permanent. Depuis 2015, le RTCM impose des standards thermiques pour les constructions neuves, mais la r\u00e9novation \u00e9nerg\u00e9tique du parc existant reste un d\u00e9fi immense.
        </p>

        <h2>Le RTCM : zones climatiques et exigences</h2>
        <p>
          Le R\u00e8glement Thermique de Construction au Maroc divise le pays en 6 zones climatiques, de Z1 (littoral temp\u00e9r\u00e9 : Casablanca, Rabat) \u00e0 Z6 (montagne froide : Ifrane, Midelt). Chaque zone d\u00e9finit des valeurs maximales de coefficient U pour les parois :
        </p>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-300 px-3 py-2 text-left">Zone</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Villes</th>
              <th className="border border-stone-300 px-3 py-2 text-left">U murs (W/m\u00b2.K)</th>
              <th className="border border-stone-300 px-3 py-2 text-left">U toiture (W/m\u00b2.K)</th>
              <th className="border border-stone-300 px-3 py-2 text-left">\u00c9paisseur isolant recommand\u00e9e</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Z1</td>
              <td className="border border-stone-300 px-3 py-2">Casablanca, Rabat</td>
              <td className="border border-stone-300 px-3 py-2">0,80</td>
              <td className="border border-stone-300 px-3 py-2">0,65</td>
              <td className="border border-stone-300 px-3 py-2">3 \u2013 5 cm</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Z2</td>
              <td className="border border-stone-300 px-3 py-2">Tanger, T\u00e9touan</td>
              <td className="border border-stone-300 px-3 py-2">0,70</td>
              <td className="border border-stone-300 px-3 py-2">0,55</td>
              <td className="border border-stone-300 px-3 py-2">4 \u2013 6 cm</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Z4</td>
              <td className="border border-stone-300 px-3 py-2">Marrakech, F\u00e8s</td>
              <td className="border border-stone-300 px-3 py-2">0,60</td>
              <td className="border border-stone-300 px-3 py-2">0,50</td>
              <td className="border border-stone-300 px-3 py-2">5 \u2013 8 cm</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Z6</td>
              <td className="border border-stone-300 px-3 py-2">Ifrane, Midelt</td>
              <td className="border border-stone-300 px-3 py-2">0,45</td>
              <td className="border border-stone-300 px-3 py-2">0,35</td>
              <td className="border border-stone-300 px-3 py-2">8 \u2013 12 cm</td>
            </tr>
          </tbody>
        </table>

        <h2>Solutions d&apos;isolation pour le Maroc</h2>
        <p>
          L&apos;isolation par l&apos;ext\u00e9rieur (ITE) est la technique la plus performante : elle supprime les ponts thermiques et ne r\u00e9duit pas la surface habitable. Le syst\u00e8me ETICS (enduit sur isolant coll\u00e9) co\u00fbte entre 200 et 400 MAD/m\u00b2 de fa\u00e7ade. L&apos;isolation par l&apos;int\u00e9rieur (doublage en polystyr\u00e8ne + plaque de pl\u00e2tre) est moins ch\u00e8re (100 \u00e0 200 MAD/m\u00b2) mais cr\u00e9e des ponts thermiques au niveau des dalles.
        </p>
        <p>
          Pour les toitures-terrasses, tr\u00e8s courantes au Maroc, l&apos;isolation invers\u00e9e (isolant au-dessus de l&apos;\u00e9tanch\u00e9it\u00e9) avec du polystyr\u00e8ne extrud\u00e9 (XPS) est la solution de r\u00e9f\u00e9rence. Le polyur\u00e9thane projet\u00e9 in situ est une alternative rapide et sans joint. Les blocs ICF (Insulated Concrete Forms) permettent de combiner structure en b\u00e9ton arm\u00e9 et isolation int\u00e9gr\u00e9e d\u00e8s la construction.
        </p>

        <h2>Vitrages et menuiseries</h2>
        <p>
          Les fen\u00eatres repr\u00e9sentent 25 \u00e0 40 % des d\u00e9perditions thermiques d&apos;un b\u00e2timent. Le simple vitrage (encore tr\u00e8s r\u00e9pandu au Maroc) a un coefficient U de 5,8 W/m\u00b2.K. Le double vitrage (4/12/4 mm) r\u00e9duit ce coefficient \u00e0 2,8 W/m\u00b2.K. Les menuiseries en aluminium \u00e0 rupture de pont thermique (RPT), fabriqu\u00e9es localement par des acteurs comme Technal Maroc ou Alumil, offrent le meilleur compromis performance/prix (1 500 \u00e0 3 000 MAD/m\u00b2 de fen\u00eatre pos\u00e9e).
        </p>

        <h2>Aides et incitations</h2>
        <p>
          L&apos;AMEE (Agence Marocaine pour l&apos;Efficacit\u00e9 \u00c9nerg\u00e9tique) accompagne les projets d&apos;isolation thermique avec des programmes de sensibilisation et de formation des professionnels. Certains programmes de coop\u00e9ration (GIZ, PNUD) financent partiellement les \u00e9tudes thermiques et les audits \u00e9nerg\u00e9tiques. Le label ADEREE pour les b\u00e2timents \u00e9co\u00e9nerg\u00e9tiques valorise les projets conformes au RTCM.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            L&apos;isolation thermique est l&apos;investissement le plus rentable dans une construction au Maroc. Pour une villa de 200 m\u00b2, le surco\u00fbt d&apos;une isolation performante (30 000 \u00e0 60 000 MAD) est amorti en 3 \u00e0 5 ans gr\u00e2ce aux \u00e9conomies d&apos;\u00e9nergie. Demandez \u00e0 votre architecte de r\u00e9aliser une simulation thermique d\u00e8s la conception. Trouvez un architecte sensibilis\u00e9 \u00e0 l&apos;efficacit\u00e9 \u00e9nerg\u00e9tique sur Bati.ma.
          </p>
        </div>

        <h2>R\u00e9novation \u00e9nerg\u00e9tique de l&apos;existant</h2>
        <p>
          Pour les b\u00e2timents existants non isol\u00e9s, les interventions prioritaires sont : l&apos;isolation de la toiture-terrasse (impact imm\u00e9diat sur le confort \u00e9t\u00e9/hiver), le remplacement des fen\u00eatres par du double vitrage, et l&apos;isolation des murs ext\u00e9rieurs. Un audit \u00e9nerg\u00e9tique pr\u00e9alable (3 000 \u00e0 8 000 MAD) permet de prioriser les travaux selon leur rapport co\u00fbt/efficacit\u00e9.
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
