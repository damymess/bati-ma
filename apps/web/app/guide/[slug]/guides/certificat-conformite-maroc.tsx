export default function GuideCertificatConformite() {
  const faq = [
    { q: "Quand faut-il demander le certificat de conformit\u00e9 au Maroc ?", a: "Le certificat de conformit\u00e9 doit \u00eatre demand\u00e9 d\u00e8s l\u2019ach\u00e8vement des travaux de construction. Le propri\u00e9taire dispose d\u2019un d\u00e9lai de 30 jours apr\u00e8s la fin du chantier pour d\u00e9poser la demande aupr\u00e8s de la commune." },
    { q: "Peut-on vendre un bien sans certificat de conformit\u00e9 au Maroc ?", a: "Non, depuis la loi 66-12, le certificat de conformit\u00e9 est obligatoire pour \u00e9tablir le titre foncier d\u00e9finitif et proc\u00e9der \u00e0 toute transaction immobili\u00e8re (vente, donation). Les notaires exigent ce document pour la r\u00e9daction des actes." },
    { q: "Combien de temps faut-il pour obtenir le certificat de conformit\u00e9 ?", a: "Le d\u00e9lai l\u00e9gal est de 60 jours \u00e0 compter du d\u00e9p\u00f4t du dossier complet. En pratique, cela prend 2 \u00e0 4 mois selon la commune et la complexit\u00e9 du projet. L\u2019absence de r\u00e9ponse dans le d\u00e9lai l\u00e9gal vaut acceptation tacite." },
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
        <h2>Qu&apos;est-ce que le certificat de conformit\u00e9 ?</h2>
        <p>
          Le certificat de conformit\u00e9 (ou <strong>permis d&apos;habiter</strong> pour les logements) est un document officiel
          d\u00e9livr\u00e9 par la <strong>commune</strong> qui atteste que la construction r\u00e9alis\u00e9e est conforme aux plans
          approuv\u00e9s dans le permis de construire. Il est r\u00e9gi par la <strong>loi 12-90</strong> relative \u00e0 l&apos;urbanisme
          et la <strong>loi 66-12</strong> sur le contr\u00f4le des constructions.
        </p>

        <h2>Pourquoi est-il indispensable ?</h2>
        <ul>
          <li><strong>Titre foncier</strong> : impossible d&apos;\u00e9tablir le titre d\u00e9finitif sans ce certificat</li>
          <li><strong>Transactions immobili\u00e8res</strong> : obligatoire pour toute vente ou donation</li>
          <li><strong>Raccordements</strong> : n\u00e9cessaire pour les branchements d\u00e9finitifs (eau, \u00e9lectricit\u00e9, assainissement)</li>
          <li><strong>Assurance</strong> : les assureurs l&apos;exigent pour les garanties multirisques habitation</li>
          <li><strong>S\u00e9curit\u00e9 juridique</strong> : prot\u00e8ge le propri\u00e9taire en cas de litige</li>
        </ul>

        <h2>Dossier \u00e0 constituer</h2>
        <p>Le dossier de demande comprend les pi\u00e8ces suivantes :</p>
        <ol>
          <li>Demande adress\u00e9e au pr\u00e9sident de la commune (formulaire type)</li>
          <li>Copie du permis de construire et des plans approuv\u00e9s</li>
          <li>Attestation de fin des travaux sign\u00e9e par l&apos;architecte</li>
          <li>Attestation du bureau de contr\u00f4le technique (si applicable)</li>
          <li>Plan de r\u00e9colement (plans conform\u00e9s \u00e0 la r\u00e9alit\u00e9 construite)</li>
          <li>Photos de la construction achev\u00e9e</li>
          <li>Re\u00e7u de paiement des taxes communales</li>
        </ol>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Confiez le suivi de conformit\u00e9 \u00e0 votre architecte d\u00e8s le d\u00e9but du projet. Il s&apos;assurera que la construction respecte strictement les plans approuv\u00e9s, \u00e9vitant ainsi tout refus lors de l&apos;inspection.
          </p>
        </div>

        <h2>R\u00f4le de l&apos;architecte</h2>
        <p>
          L&apos;architecte joue un r\u00f4le central dans l&apos;obtention du certificat de conformit\u00e9. Il est responsable de :
        </p>
        <ul>
          <li>V\u00e9rifier la conformit\u00e9 de la construction aux plans approuv\u00e9s</li>
          <li>D\u00e9livrer l&apos;<strong>attestation de fin de travaux</strong></li>
          <li>\u00c9tablir le <strong>plan de r\u00e9colement</strong></li>
          <li>Accompagner la commission d&apos;inspection lors de la visite</li>
        </ul>

        <h2>Proc\u00e9dure et d\u00e9lais</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead><tr className="bg-stone-100"><th className="border border-stone-200 px-3 py-2 text-left">\u00c9tape</th><th className="border border-stone-200 px-3 py-2 text-left">D\u00e9lai</th><th className="border border-stone-200 px-3 py-2 text-left">Responsable</th></tr></thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">D\u00e9p\u00f4t du dossier \u00e0 la commune</td><td className="border border-stone-200 px-3 py-2">J+0</td><td className="border border-stone-200 px-3 py-2">Propri\u00e9taire / Architecte</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">V\u00e9rification du dossier</td><td className="border border-stone-200 px-3 py-2">7\u201315 jours</td><td className="border border-stone-200 px-3 py-2">Services techniques communaux</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Visite d&apos;inspection sur site</td><td className="border border-stone-200 px-3 py-2">15\u201330 jours</td><td className="border border-stone-200 px-3 py-2">Commission (commune + agence urbaine)</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">D\u00e9livrance du certificat</td><td className="border border-stone-200 px-3 py-2">30\u201360 jours</td><td className="border border-stone-200 px-3 py-2">Pr\u00e9sident de la commune</td></tr>
          </tbody>
        </table>

        <h2>Cons\u00e9quences de l&apos;absence de certificat</h2>
        <p>
          Construire sans obtenir le certificat de conformit\u00e9 expose le propri\u00e9taire \u00e0 de lourdes sanctions :
          <strong> amendes de 10 000 \u00e0 100 000 MAD</strong>, impossibilit\u00e9 de vendre le bien,
          risque de <strong>d\u00e9molition</strong> en cas de non-conformit\u00e9 grave,
          et blocage des raccordements d\u00e9finitifs. La loi 66-12 a consid\u00e9rablement renforc\u00e9 les sanctions depuis 2016.
        </p>

        <h2>Lien avec le permis de construire</h2>
        <p>
          Le certificat de conformit\u00e9 est la <strong>derni\u00e8re \u00e9tape du cycle du permis de construire</strong>.
          Le permis autorise les travaux, le certificat atteste que les travaux r\u00e9alis\u00e9s respectent l&apos;autorisation.
          Toute modification en cours de chantier doit faire l&apos;objet d&apos;un <strong>permis modificatif</strong>
          avant de demander la conformit\u00e9.
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
