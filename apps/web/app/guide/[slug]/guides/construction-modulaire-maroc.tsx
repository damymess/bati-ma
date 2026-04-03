export default function GuideConstructionModulaire() {
  const faq = [
    { q: "Quelle est la dur\u00e9e de construction d\u2019un b\u00e2timent modulaire au Maroc ?", a: "Un b\u00e2timent modulaire peut \u00eatre assembl\u00e9 sur site en 2 \u00e0 8 semaines selon la taille, contre 6 \u00e0 18 mois pour une construction traditionnelle. La fabrication en usine se fait en parall\u00e8le des travaux de fondation, ce qui r\u00e9duit consid\u00e9rablement le d\u00e9lai global." },
    { q: "Les b\u00e2timents modulaires sont-ils autoris\u00e9s par la r\u00e9glementation marocaine ?", a: "Oui, les constructions modulaires sont autoris\u00e9es au Maroc \u00e0 condition de respecter le RPS 2000 (r\u00e8glement parasismique), la r\u00e9glementation thermique RTCM, et d\u2019obtenir un permis de construire classique sign\u00e9 par un architecte agr\u00e9\u00e9." },
    { q: "Quel est le co\u00fbt moyen au m\u00b2 d\u2019une construction modulaire au Maroc ?", a: "Le co\u00fbt varie entre 2 500 et 6 000 MAD/m\u00b2 selon le type (conteneur am\u00e9nag\u00e9, pr\u00e9fabriqu\u00e9 b\u00e9ton, modulaire bois). C\u2019est en moyenne 20 \u00e0 40 % moins cher qu\u2019une construction traditionnelle \u00e0 finition \u00e9quivalente." },
    { q: "Peut-on obtenir un cr\u00e9dit immobilier pour une construction modulaire ?", a: "Les banques marocaines financent les constructions modulaires \u00e0 condition qu\u2019elles disposent d\u2019un permis de construire et d\u2019une assurance d\u00e9cennale. Le b\u00e9ton pr\u00e9fabriqu\u00e9 est le mieux accept\u00e9. Les conteneurs am\u00e9nag\u00e9s et le bois sont plus difficiles \u00e0 financer." },
    { q: "Quelle est la dur\u00e9e de vie r\u00e9elle d\u2019un b\u00e2timent modulaire ?", a: "Un b\u00e2timent modulaire en b\u00e9ton pr\u00e9fabriqu\u00e9 dure 50 ans et plus, comparable au traditionnel. Les conteneurs am\u00e9nag\u00e9s durent 20 \u00e0 30 ans avec un entretien r\u00e9gulier. Le modulaire bois atteint 40 ans minimum avec un traitement anti-termites." },
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
        <h2>Qu&apos;est-ce que la construction modulaire ?</h2>
        <p>
          La construction modulaire consiste \u00e0 fabriquer des <strong>modules pr\u00e9assembl\u00e9s en usine</strong>, puis \u00e0 les transporter et les assembler sur le chantier.
          Au Maroc, cette technique gagne du terrain face \u00e0 la demande croissante en logements rapides et \u00e9conomiques, particuli\u00e8rement pour les projets li\u00e9s au <strong>Mondial 2030</strong> et aux zones touristiques.
        </p>

        <h2>Types de b\u00e2timents modulaires disponibles au Maroc</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead><tr className="bg-stone-100"><th className="border border-stone-200 px-3 py-2 text-left">Type</th><th className="border border-stone-200 px-3 py-2 text-left">Prix / m\u00b2</th><th className="border border-stone-200 px-3 py-2 text-left">Dur\u00e9e de vie</th><th className="border border-stone-200 px-3 py-2 text-left">Usage typique</th></tr></thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">Pr\u00e9fabriqu\u00e9 b\u00e9ton</td><td className="border border-stone-200 px-3 py-2">3 500 \u2013 6 000 MAD</td><td className="border border-stone-200 px-3 py-2">50+ ans</td><td className="border border-stone-200 px-3 py-2">Logements, \u00e9coles, bureaux</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Conteneur am\u00e9nag\u00e9</td><td className="border border-stone-200 px-3 py-2">2 500 \u2013 4 500 MAD</td><td className="border border-stone-200 px-3 py-2">20\u201330 ans</td><td className="border border-stone-200 px-3 py-2">Bureaux, commerces, h\u00e9bergement touristique</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Modulaire bois (ossature)</td><td className="border border-stone-200 px-3 py-2">4 000 \u2013 7 000 MAD</td><td className="border border-stone-200 px-3 py-2">40+ ans</td><td className="border border-stone-200 px-3 py-2">Villas, \u00e9co-lodges, chalets</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Structure m\u00e9tallique l\u00e9g\u00e8re (LSF)</td><td className="border border-stone-200 px-3 py-2">3 000 \u2013 5 500 MAD</td><td className="border border-stone-200 px-3 py-2">50+ ans</td><td className="border border-stone-200 px-3 py-2">R+2 max, r\u00e9sidences, cliniques</td></tr>
          </tbody>
        </table>

        <h2>Avantages par rapport \u00e0 la construction traditionnelle</h2>
        <ul>
          <li><strong>Rapidit\u00e9</strong> : 60 \u00e0 70 % de temps gagn\u00e9 sur le chantier</li>
          <li><strong>\u00c9conomie</strong> : 20 \u00e0 40 % de r\u00e9duction des co\u00fbts globaux</li>
          <li><strong>Qualit\u00e9 contr\u00f4l\u00e9e</strong> : fabrication en usine avec normes strictes</li>
          <li><strong>Moins de d\u00e9chets</strong> : jusqu&apos;\u00e0 90 % de r\u00e9duction des d\u00e9chets de chantier</li>
          <li><strong>Flexibilit\u00e9</strong> : modules d\u00e9montables et reconfigurables</li>
        </ul>

        <h2>R\u00e9glementation au Maroc</h2>
        <p>
          Toute construction modulaire permanente n\u00e9cessite un <strong>permis de construire</strong> d\u00e9livr\u00e9 par la commune.
          Le dossier doit \u00eatre sign\u00e9 par un architecte inscrit \u00e0 l&apos;Ordre et respecter le <strong>r\u00e8glement parasismique RPS 2000</strong> ainsi que la <strong>RTCM</strong> (r\u00e9glementation thermique).
          Les constructions temporaires (chantier, \u00e9v\u00e9nements) de moins de 3 mois peuvent b\u00e9n\u00e9ficier d&apos;autorisations simplifi\u00e9es.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Privil\u00e9giez un fournisseur disposant d&apos;une <strong>certification NM</strong> (Norme Marocaine) ou ISO 9001. Demandez syst\u00e9matiquement les PV d&apos;essais structurels et les attestations d&apos;assurance d\u00e9cennale.
          </p>
        </div>

        <h2>Quels sont les principaux fournisseurs modulaires au Maroc ?</h2>
        <p>
          Le march\u00e9 marocain compte plusieurs acteurs sp\u00e9cialis\u00e9s : <strong>TGCC Pr\u00e9fa</strong> (pr\u00e9fabriqu\u00e9 b\u00e9ton, Casablanca),
          <strong> Batipro Modulaire</strong> (conteneurs, Tanger), <strong>Woodia Maroc</strong> (ossature bois, Marrakech)
          et <strong>SAEMOG</strong> (structures m\u00e9talliques, K\u00e9nitra). Comparez toujours au moins 3 devis et v\u00e9rifiez les r\u00e9f\u00e9rences chantier.
        </p>

        <h2>Quels sont les cas d&apos;usage populaires du modulaire en 2026 ?</h2>
        <p>
          Les b\u00e2timents modulaires sont particuli\u00e8rement adapt\u00e9s aux <strong>h\u00e9bergements touristiques</strong> (glamping, \u00e9co-lodges),
          aux <strong>logements sociaux</strong> (programmes ALEM), aux <strong>extensions d&apos;\u00e9tablissements scolaires</strong>
          et aux <strong>bureaux de chantier</strong> pour les grands projets d&apos;infrastructure.
        </p>

        <h2>Comment lancer un projet de construction modulaire ?</h2>
        <ol>
          <li>D\u00e9finissez votre programme (surface, usage, budget)</li>
          <li>Consultez un architecte sur Bati.ma pour l&apos;\u00e9tude de faisabilit\u00e9</li>
          <li>Obtenez 3 devis de fournisseurs modulaires</li>
          <li>D\u00e9posez le permis de construire via votre architecte</li>
          <li>Lancez la fabrication en usine et les fondations en parall\u00e8le</li>
          <li>Assemblez, raccordez et r\u00e9ceptionnez</li>
        </ol>
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
