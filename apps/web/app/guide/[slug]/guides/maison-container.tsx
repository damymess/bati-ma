export default function GuideMaisonContainer() {
  const faq = [
    {
      q: "Peut-on l\u00e9galement construire une maison container au Maroc ?",
      a: "Oui, il n&apos;y a pas d&apos;interdiction l\u00e9gale sp\u00e9cifique. Cependant, le projet doit respecter le r\u00e8glement d&apos;urbanisme local (plan d&apos;am\u00e9nagement), obtenir un permis de construire et \u00eatre sign\u00e9 par un architecte agr\u00e9\u00e9. L&apos;acceptation d\u00e9pend beaucoup de la commune et du contexte : plus facile en zone rurale ou touristique qu&apos;en quartier r\u00e9sidentiel classique.",
    },
    {
      q: "Combien co\u00fbte une maison container au Maroc en 2026 ?",
      a: "Le co\u00fbt varie de 2 500 \u00e0 5 000 MAD/m\u00b2 selon le niveau de finition. Un container 40 pieds (28 m\u00b2 utiles) co\u00fbte 15 000 \u00e0 25 000 MAD brut. Apr\u00e8s am\u00e9nagement complet (isolation, plomberie, \u00e9lectricit\u00e9, finitions), comptez 80 000 \u00e0 140 000 MAD par container. Une maison de 80 m\u00b2 (3 containers) revient \u00e0 200 000 \u00e0 400 000 MAD tout inclus.",
    },
    {
      q: "Comment isoler un container dans le climat marocain ?",
      a: "L&apos;isolation est le d\u00e9fi num\u00e9ro un. Sans isolation, un container m\u00e9tallique devient un four en \u00e9t\u00e9 (60\u00b0C+). Solutions recommand\u00e9es : mousse polyur\u00e9thane projet\u00e9e (80-120 mm, 150-250 MAD/m\u00b2), laine de roche (100 mm, 80-150 MAD/m\u00b2), ou isolation ext\u00e9rieure avec bardage ventil\u00e9. Pr\u00e9voyez aussi une toiture surplombante pour cr\u00e9er de l&apos;ombre.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="prose-content">
        <h2>Maison container au Maroc : faisabilit\u00e9, co\u00fbts et r\u00e9alit\u00e9s en 2026</h2>
        <p>
          La maison container s\u00e9duit de plus en plus de Marocains et de MRE attir\u00e9s par son esth\u00e9tique industrielle, sa rapidit\u00e9 de mise en \u0153uvre et son prix attractif. Mais derri\u00e8re l&apos;image tendance v\u00e9hicul\u00e9e par les r\u00e9seaux sociaux, la r\u00e9alit\u00e9 de la construction container au Maroc demande une r\u00e9flexion s\u00e9rieuse, notamment sur l&apos;isolation thermique dans un climat pouvant d\u00e9passer 45\u00b0C en \u00e9t\u00e9.
        </p>

        <h2>Faisabilit\u00e9 technique au Maroc</h2>
        <p>
          Un container maritime standard (20 ou 40 pieds) est une structure en acier Corten con\u00e7ue pour r\u00e9sister aux conditions extr\u00eames du transport maritime. Cette robustesse en fait une base de construction solide, mais le m\u00e9tal pose des d\u00e9fis sp\u00e9cifiques au Maroc.
        </p>
        <p>
          <strong>Avantages structurels :</strong> r\u00e9sistance parasismique naturelle (point fort dans les zones sismiques comme Al Hoceima ou Agadir), rapidit\u00e9 d&apos;assemblage (2 \u00e0 4 mois contre 8 \u00e0 12 pour la construction classique), et modularit\u00e9 permettant d&apos;agrandir la maison.
        </p>
        <p>
          <strong>D\u00e9fis climatiques :</strong> la conductivit\u00e9 thermique de l&apos;acier transforme le container en four l&apos;\u00e9t\u00e9 et en r\u00e9frig\u00e9rateur l&apos;hiver dans les r\u00e9gions montagneuses. Une isolation performante est non n\u00e9gociable.
        </p>

        <h2>Co\u00fbts d\u00e9taill\u00e9s d&apos;une maison container</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Poste</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Co\u00fbt unitaire</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Maison 80 m\u00b2 (3 containers)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Containers 40 pieds (occasion)</td>
              <td className="border border-stone-200 px-3 py-2">15 000 - 25 000 MAD/unit\u00e9</td>
              <td className="border border-stone-200 px-3 py-2">45 000 - 75 000 MAD</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Transport + manutention</td>
              <td className="border border-stone-200 px-3 py-2">5 000 - 15 000 MAD/unit\u00e9</td>
              <td className="border border-stone-200 px-3 py-2">15 000 - 45 000 MAD</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Fondations (plots b\u00e9ton)</td>
              <td className="border border-stone-200 px-3 py-2">-</td>
              <td className="border border-stone-200 px-3 py-2">20 000 - 40 000 MAD</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Isolation thermique compl\u00e8te</td>
              <td className="border border-stone-200 px-3 py-2">150 - 250 MAD/m\u00b2</td>
              <td className="border border-stone-200 px-3 py-2">30 000 - 60 000 MAD</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Plomberie + \u00e9lectricit\u00e9</td>
              <td className="border border-stone-200 px-3 py-2">-</td>
              <td className="border border-stone-200 px-3 py-2">40 000 - 70 000 MAD</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Finitions int\u00e9rieures</td>
              <td className="border border-stone-200 px-3 py-2">500 - 1 500 MAD/m\u00b2</td>
              <td className="border border-stone-200 px-3 py-2">40 000 - 120 000 MAD</td>
            </tr>
            <tr className="font-semibold bg-stone-50">
              <td className="border border-stone-200 px-3 py-2">Total</td>
              <td className="border border-stone-200 px-3 py-2">2 500 - 5 000 MAD/m\u00b2</td>
              <td className="border border-stone-200 px-3 py-2">200 000 - 400 000 MAD</td>
            </tr>
          </tbody>
        </table>

        <h2>Le d\u00e9fi de l&apos;isolation thermique</h2>
        <p>
          Dans les r\u00e9gions chaudes du Maroc (Marrakech, Ouarzazate, Errachidia), la temp\u00e9rature int\u00e9rieure d&apos;un container non isol\u00e9 peut d\u00e9passer 60\u00b0C. L&apos;isolation est donc vitale et repr\u00e9sente 15 \u00e0 20 % du budget total. La mousse polyur\u00e9thane projet\u00e9e offre le meilleur compromis performance/\u00e9paisseur. Compl\u00e9tez par une toiture v\u00e9g\u00e9talis\u00e9e ou une surtoiture ventil\u00e9e pour r\u00e9duire l&apos;ensoleillement direct. En zones c\u00f4ti\u00e8res (Essaouira, Asilah), le traitement anti-corrosion est prioritaire face \u00e0 l&apos;air salin.
        </p>

        <h2>Statut r\u00e9glementaire et permis de construire</h2>
        <p>
          La maison container n&apos;a pas de statut juridique sp\u00e9cifique au Maroc. Elle est trait\u00e9e comme une construction classique et doit respecter les m\u00eames r\u00e8gles d&apos;urbanisme : permis de construire obligatoire, respect du plan d&apos;am\u00e9nagement, signature d&apos;un architecte agr\u00e9\u00e9 pour les projets de plus de 150 m\u00b2. L&apos;acceptation varie selon les communes : certaines sont ouvertes \u00e0 l&apos;innovation, d&apos;autres plus conservatrices. Les zones touristiques et rurales sont g\u00e9n\u00e9ralement plus r\u00e9ceptives.
        </p>

        <h2>Fournisseurs de containers au Maroc</h2>
        <p>
          Les containers maritimes sont disponibles aupr\u00e8s des d\u00e9p\u00f4ts portuaires de Casablanca, Tanger Med et Agadir. Des soci\u00e9t\u00e9s sp\u00e9cialis\u00e9es comme Containex Maroc, Box Innov et Maroc Container proposent des containers am\u00e9nag\u00e9s ou bruts. V\u00e9rifiez l&apos;\u00e9tat du container avant achat : \u00e9tanch\u00e9it\u00e9, corrosion, d\u00e9formations, et demandez le certificat CSC (Convention pour la S\u00e9curit\u00e9 des Conteneurs).
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            La maison container n\u00e9cessite un architecte qui ma\u00eetrise les contraintes sp\u00e9cifiques de ce mode constructif. Sur Bati.ma, recherchez un architecte ayant de l&apos;exp\u00e9rience en construction modulaire ou alternative. Il pourra concevoir un projet viable thermiquement et vous accompagner dans les d\u00e9marches de permis de construire aupr\u00e8s de votre commune.
          </p>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-stone-900 mb-5">Questions fr\u00e9quentes</h2>
        <div className="space-y-4">
          {faq.map((f) => (
            <details key={f.q} className="group border border-stone-200 rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between px-4 py-3 cursor-pointer text-sm font-medium text-stone-800 hover:bg-stone-50">
                {f.q}
                <span className="text-stone-400 group-open:rotate-180 transition-transform">\u2193</span>
              </summary>
              <div className="px-4 pb-4 pt-1 text-sm text-stone-600 leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
