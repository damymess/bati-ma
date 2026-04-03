export default function GuidePeintureFacade() {
  const faq = [
    { q: "Quelles sont les couleurs de fa\u00e7ade autoris\u00e9es au Maroc ?", a: "Chaque commune d\u00e9finit une palette de couleurs autoris\u00e9es via le plan d&apos;am\u00e9nagement et le r\u00e8glement de voirie. \u00c0 Marrakech, les fa\u00e7ades doivent respecter les tons ocre-rose caract\u00e9ristiques. \u00c0 Chefchaouen, le bleu est impos\u00e9. \u00c0 Casablanca, les tons blancs et cr\u00e8me dominent. Avant de peindre, consultez le cahier des charges de votre commune ou lotissement." },
    { q: "Quel type de peinture choisir pour une fa\u00e7ade au Maroc ?", a: "La peinture siloxane est la plus adapt\u00e9e au climat marocain : elle r\u00e9siste aux UV intenses, \u00e0 la pluie et laisse respirer le support. Son prix (80 \u00e0 150 MAD/litre) est sup\u00e9rieur \u00e0 l&apos;acrylique (40 \u00e0 80 MAD/litre) mais sa dur\u00e9e de vie est deux fois plus longue (8 \u00e0 12 ans contre 4 \u00e0 6 ans)." },
    { q: "Combien co\u00fbte le ravalement de fa\u00e7ade au Maroc ?", a: "Le co\u00fbt du ravalement complet (pr\u00e9paration du support + enduit + peinture) se situe entre 80 et 200 MAD/m\u00b2 de fa\u00e7ade. Pour une villa de 200 m\u00b2 de surface de fa\u00e7ade, pr\u00e9voyez 16 000 \u00e0 40 000 MAD. L&apos;\u00e9chafaudage repr\u00e9sente 15 \u00e0 25 % du budget total." },
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
        <h2>La fa\u00e7ade : carte de visite de votre maison au Maroc</h2>
        <p>
          La fa\u00e7ade est le premier \u00e9l\u00e9ment visible de votre b\u00e2timent et joue un r\u00f4le essentiel dans la protection contre les intemp\u00e9ries. Au Maroc, les conditions climatiques sont particuli\u00e8rement exigeantes : UV intenses, \u00e9carts thermiques importants, humidit\u00e9 saline sur le littoral et vent de sable dans les r\u00e9gions int\u00e9rieures. Le choix de la peinture et de l&apos;enduit de fa\u00e7ade doit prendre en compte ces contraintes sp\u00e9cifiques.
        </p>

        <h2>Types de peinture pour fa\u00e7ades</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-300 px-3 py-2 text-left">Type</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Prix (MAD/L)</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Dur\u00e9e de vie</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Avantages</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Climat id\u00e9al</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Acrylique</td>
              <td className="border border-stone-300 px-3 py-2">40 \u2013 80</td>
              <td className="border border-stone-300 px-3 py-2">4 \u2013 6 ans</td>
              <td className="border border-stone-300 px-3 py-2">\u00c9conomique, large palette</td>
              <td className="border border-stone-300 px-3 py-2">Zones temp\u00e9r\u00e9es (Rabat, Casablanca)</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Pliolite</td>
              <td className="border border-stone-300 px-3 py-2">60 \u2013 100</td>
              <td className="border border-stone-300 px-3 py-2">5 \u2013 8 ans</td>
              <td className="border border-stone-300 px-3 py-2">Bonne adh\u00e9rence, microporeux</td>
              <td className="border border-stone-300 px-3 py-2">Zones humides (Tanger, T\u00e9touan)</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Siloxane</td>
              <td className="border border-stone-300 px-3 py-2">80 \u2013 150</td>
              <td className="border border-stone-300 px-3 py-2">8 \u2013 12 ans</td>
              <td className="border border-stone-300 px-3 py-2">Anti-UV, hydrofuge, respirant</td>
              <td className="border border-stone-300 px-3 py-2">Tout le Maroc (r\u00e9f\u00e9rence)</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Min\u00e9rale (silicate)</td>
              <td className="border border-stone-300 px-3 py-2">100 \u2013 180</td>
              <td className="border border-stone-300 px-3 py-2">15 \u2013 20 ans</td>
              <td className="border border-stone-300 px-3 py-2">Ultra-durable, anti-moisissures</td>
              <td className="border border-stone-300 px-3 py-2">B\u00e2timents patrimoniaux, haut de gamme</td>
            </tr>
          </tbody>
        </table>

        <h2>R\u00e9glementation des couleurs par commune</h2>
        <p>
          Le Maroc est c\u00e9l\u00e8bre pour ses villes aux couleurs caract\u00e9ristiques. Marrakech impose des tons ocre-rose (RAL 1015 \u00e0 3012), Chefchaouen le bleu (RAL 5024), Essaouira le blanc et bleu, Ouarzazate les tons terre. Ces prescriptions sont inscrites dans le plan d&apos;am\u00e9nagement communal et appliqu\u00e9es lors de la d\u00e9livrance du permis de construire.
        </p>
        <p>
          Dans les lotissements priv\u00e9s, le cahier des charges impose souvent une palette encore plus restreinte. Le non-respect des couleurs autoris\u00e9es peut entra\u00eener une amende et une obligation de remise en conformit\u00e9. Avant tout ravalement, v\u00e9rifiez les r\u00e8gles aupr\u00e8s du service d&apos;urbanisme de votre commune.
        </p>

        <h2>Enduits de fa\u00e7ade</h2>
        <p>
          L&apos;enduit de fa\u00e7ade assure \u00e0 la fois la protection et l&apos;esth\u00e9tique du b\u00e2timent. Au Maroc, les enduits les plus courants sont : l&apos;enduit monocouche projet\u00e9 (120 \u00e0 200 MAD/m\u00b2, le plus rapide), l&apos;enduit traditionnel trois couches en ciment (80 \u00e0 150 MAD/m\u00b2, le plus r\u00e9pandu) et l&apos;enduit \u00e0 la chaux (150 \u00e0 300 MAD/m\u00b2, pour les b\u00e2timents traditionnels et \u00e9cologiques).
        </p>
        <p>
          Les finitions possibles incluent : le grat\u00e9 (griff\u00e9, le plus courant), le tal\u00e9 (liss\u00e9), le bross\u00e9 et l&apos;\u00e9cras\u00e9. Le choix de la finition impacte l&apos;adh\u00e9rence de la peinture et l&apos;esth\u00e9tique finale. L&apos;enduit monocouche pr\u00eat \u00e0 l&apos;emploi (Weber, Parexlanko, Sika) offre l&apos;avantage d&apos;une mise en \u0153uvre rapide et d&apos;une qualit\u00e9 contr\u00f4l\u00e9e.
        </p>

        <h2>Pr\u00e9paration du support et application</h2>
        <p>
          La pr\u00e9paration du support est la cl\u00e9 d&apos;une peinture durable. Elle comprend : le nettoyage haute pression (500 \u00e0 800 MAD pour une villa), le traitement des fissures (mastic acrylique pour les fissures inf\u00e9rieures \u00e0 2 mm, r\u00e9paration structurelle au-del\u00e0), l&apos;application d&apos;un fixateur de fond (primaire d&apos;accrochage) et le respect des d\u00e9lais de s\u00e9chage entre couches.
        </p>
        <p>
          Appliquez la peinture en deux couches minimum, de pr\u00e9f\u00e9rence au rouleau fa\u00e7ade (nid d&apos;abeille) ou au pistolet airless pour les grandes surfaces. \u00c9vitez de peindre en plein soleil (la peinture s\u00e8che trop vite et cloque), par temps humide (risque de farin\u00e9e) ou en dessous de 5\u00b0C.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Investissez dans une peinture de qualit\u00e9 (siloxane ou min\u00e9rale) : le surco\u00fbt \u00e0 l&apos;achat est largement compens\u00e9 par la dur\u00e9e de vie deux \u00e0 trois fois sup\u00e9rieure. Pour un ravalement r\u00e9ussi, confiez les travaux \u00e0 un fa\u00e7adier professionnel recommand\u00e9 par votre architecte. Trouvez le bon interlocuteur sur Bati.ma.
          </p>
        </div>

        <h2>Tendances fa\u00e7ades au Maroc</h2>
        <p>
          Les tendances actuelles au Maroc incluent : les fa\u00e7ades bicolores (base en pierre naturelle + enduit), le bardage en bois composite (Fiberon, Trex \u2014 400 \u00e0 700 MAD/m\u00b2), les panneaux HPL (200 \u00e0 450 MAD/m\u00b2) et le b\u00e9ton apparent (pour les projets contemporains). L&apos;habillage en pierre naturelle (calcaire, travertin) reste un classique haut de gamme \u00e0 300 \u2013 800 MAD/m\u00b2 pos\u00e9.
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
