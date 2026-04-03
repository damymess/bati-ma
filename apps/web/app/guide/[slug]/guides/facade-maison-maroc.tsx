export default function GuideFacadeMaison() {
  const faq = [
    { q: "Quels mat\u00e9riaux utiliser pour une fa\u00e7ade au Maroc ?", a: "Les mat\u00e9riaux les plus courants sont l\u2019enduit ciment peint, la pierre naturelle (Taza, Ifrane), le zellige pour les accents d\u00e9coratifs, le moucharabieh en bois ou aluminium, et le bardage en bois trait\u00e9 ou composite. Le choix d\u00e9pend du style, du budget et des r\u00e8gles d\u2019urbanisme de la commune." },
    { q: "Y a-t-il des r\u00e8gles de couleur pour les fa\u00e7ades au Maroc ?", a: "Oui, chaque ville impose des r\u00e8gles sp\u00e9cifiques via son plan d\u2019am\u00e9nagement. Marrakech impose l\u2019ocre/rose, Chefchaouen le bleu, Essaouira le blanc et bleu. Casablanca et Rabat sont plus souples mais les couleurs vives sont g\u00e9n\u00e9ralement interdites." },
    { q: "Combien co\u00fbte un ravalement de fa\u00e7ade au Maroc ?", a: "Un ravalement de fa\u00e7ade co\u00fbte entre 150 et 500 MAD/m\u00b2 selon les travaux : simple peinture (150\u2013250 MAD/m\u00b2), enduit + peinture (250\u2013400 MAD/m\u00b2), habillage pierre ou composite (400\u2013800 MAD/m\u00b2). Pour une villa de 200 m\u00b2 de fa\u00e7ade, comptez 30 000 \u00e0 100 000 MAD." },
    { q: "Faut-il un architecte pour un projet de facade maison au Maroc ?", a: "Conform\u00e9ment \u00e0 la loi 16-89, le recours \u00e0 un architecte inscrit \u00e0 l\u2019Ordre est obligatoire pour toute construction au Maroc. M\u00eame pour les projets techniques, l\u2019architecte coordonne le permis de construire et assure la conformit\u00e9. Consultez les profils v\u00e9rifi\u00e9s sur Bati.ma." },
    { q: "Comment obtenir un devis pour facade maison au Maroc ?", a: "Demandez au minimum 3 devis d\u00e9taill\u00e9s aupr\u00e8s de professionnels diff\u00e9rents. Comparez les postes ligne par ligne, v\u00e9rifiez les r\u00e9f\u00e9rences et exigez un calendrier d\u2019ex\u00e9cution. Sur Bati.ma, vous pouvez contacter directement les architectes sp\u00e9cialis\u00e9s et demander vos devis gratuitement." },
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
        <h2>L&apos;importance de la fa\u00e7ade au Maroc</h2>
        <p>
          La fa\u00e7ade est la <strong>carte de visite de votre maison</strong>. Au Maroc, elle est aussi soumise \u00e0 des
          r\u00e8gles d&apos;urbanisme strictes qui varient selon les villes. Un projet de fa\u00e7ade r\u00e9ussi combine esth\u00e9tique,
          conformit\u00e9 r\u00e9glementaire et r\u00e9sistance aux conditions climatiques locales (soleil intense, pluie, vent de sable).
        </p>

        <h2>Styles de fa\u00e7ades tendance en 2026</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead><tr className="bg-stone-100"><th className="border border-stone-200 px-3 py-2 text-left">Style</th><th className="border border-stone-200 px-3 py-2 text-left">Caract\u00e9ristiques</th><th className="border border-stone-200 px-3 py-2 text-left">Budget / m\u00b2</th></tr></thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">Moderne minimaliste</td><td className="border border-stone-200 px-3 py-2">Lignes droites, b\u00e9ton apparent, grandes baies</td><td className="border border-stone-200 px-3 py-2">400 \u2013 800 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">N\u00e9o-marocaine</td><td className="border border-stone-200 px-3 py-2">Arcs, moucharabieh, enduit ocre/terre</td><td className="border border-stone-200 px-3 py-2">500 \u2013 1 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Traditionnelle (riad)</td><td className="border border-stone-200 px-3 py-2">Fa\u00e7ade sobre ext\u00e9rieur, richesse int\u00e9rieure</td><td className="border border-stone-200 px-3 py-2">300 \u2013 600 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Contemporaine mixte</td><td className="border border-stone-200 px-3 py-2">Pierre + bois + m\u00e9tal, jeux de volumes</td><td className="border border-stone-200 px-3 py-2">600 \u2013 1 200 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">M\u00e9diterran\u00e9enne</td><td className="border border-stone-200 px-3 py-2">Enduit blanc, tuiles, pergolas, volets</td><td className="border border-stone-200 px-3 py-2">350 \u2013 700 MAD</td></tr>
          </tbody>
        </table>

        <h2>Mat\u00e9riaux de fa\u00e7ade populaires</h2>
        <ul>
          <li><strong>Enduit ciment peint</strong> : le plus r\u00e9pandu, \u00e9conomique (150\u2013300 MAD/m\u00b2)</li>
          <li><strong>Pierre naturelle</strong> : noble et durable (Taza, Ifrane, Kh\u00e9nifra) \u2014 500\u20131 200 MAD/m\u00b2</li>
          <li><strong>Moucharabieh</strong> : bois, aluminium ou composite \u2014 800\u20132 000 MAD/m\u00b2</li>
          <li><strong>Zellige</strong> : accents d\u00e9coratifs (encadrements, frises) \u2014 600\u20131 500 MAD/m\u00b2</li>
          <li><strong>Bardage bois / composite</strong> : contemporain et chaleureux \u2014 500\u20131 000 MAD/m\u00b2</li>
          <li><strong>Panneau HPL / Alucobond</strong> : ultra-moderne, immeubles \u2014 700\u20131 500 MAD/m\u00b2</li>
        </ul>

        <h2>R\u00e9glementation des fa\u00e7ades par ville</h2>
        <p>
          Chaque commune marocaine dispose de r\u00e8gles d&apos;urbanisme sp\u00e9cifiques concernant les fa\u00e7ades. L&apos;agence urbaine
          contr\u00f4le la conformit\u00e9 des fa\u00e7ades lors de l&apos;instruction du permis de construire.
        </p>
        <table className="w-full text-sm border-collapse my-4">
          <thead><tr className="bg-stone-100"><th className="border border-stone-200 px-3 py-2 text-left">Ville</th><th className="border border-stone-200 px-3 py-2 text-left">Couleurs impos\u00e9es</th><th className="border border-stone-200 px-3 py-2 text-left">Restrictions</th></tr></thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">Marrakech</td><td className="border border-stone-200 px-3 py-2">Ocre, rose saumon, terre</td><td className="border border-stone-200 px-3 py-2">M\u00e9dina class\u00e9e UNESCO</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Chefchaouen</td><td className="border border-stone-200 px-3 py-2">Bleu (m\u00e9dina)</td><td className="border border-stone-200 px-3 py-2">M\u00e9dina prot\u00e9g\u00e9e</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Casablanca</td><td className="border border-stone-200 px-3 py-2">Blanc, gris, cr\u00e8me (souple)</td><td className="border border-stone-200 px-3 py-2">Art d\u00e9co centre-ville</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Essaouira</td><td className="border border-stone-200 px-3 py-2">Blanc et bleu</td><td className="border border-stone-200 px-3 py-2">M\u00e9dina class\u00e9e UNESCO</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Tanger</td><td className="border border-stone-200 px-3 py-2">Blanc (vieille ville)</td><td className="border border-stone-200 px-3 py-2">Zone portuaire r\u00e9glement\u00e9e</td></tr>
          </tbody>
        </table>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Avant de choisir le style de votre fa\u00e7ade, consultez le <strong>r\u00e8glement d&apos;urbanisme</strong> de votre commune aupr\u00e8s de l&apos;agence urbaine. Votre architecte pourra int\u00e9grer les contraintes d\u00e8s la phase de conception et \u00e9viter les refus de permis.
          </p>
        </div>

        <h2>Entretien et r\u00e9novation de fa\u00e7ade</h2>
        <p>
          Au Maroc, les fa\u00e7ades subissent une forte exposition solaire et, dans les villes c\u00f4ti\u00e8res, l&apos;air salin.
          Un ravalement est recommand\u00e9 tous les <strong>5 \u00e0 10 ans</strong>. Pr\u00e9voyez une peinture anti-UV
          et hydrofuge pour prolonger la dur\u00e9e de vie de l&apos;enduit. Les fa\u00e7ades en pierre naturelle n\u00e9cessitent
          un traitement hydrofuge tous les 10 \u00e0 15 ans.
        </p>

        <h2>Comment budg\u00e9tiser votre fa\u00e7ade</h2>
        <p>
          Le co\u00fbt de la fa\u00e7ade repr\u00e9sente g\u00e9n\u00e9ralement <strong>8 \u00e0 15 % du budget total de construction</strong>.
          Pour une villa de 200 m\u00b2 habitable avec 250 m\u00b2 de fa\u00e7ade, pr\u00e9voyez entre 50 000 et 200 000 MAD
          selon les mat\u00e9riaux choisis. Un architecte vous aidera \u00e0 optimiser le rapport qualit\u00e9/prix.
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
