import Link from "next/link";

export default function GuideLotissementMaroc() {
  const faq = [
    {
      q: "Quelle est la dur\u00e9e moyenne pour obtenir l\u2019autorisation d\u2019un lotissement au Maroc ?",
      a: "La proc\u00e9dure compl\u00e8te prend g\u00e9n\u00e9ralement entre 6 et 18 mois selon la taille du projet et la commune. L\u2019\u00e9tude du dossier par l\u2019agence urbaine prend 2 \u00e0 3 mois, suivie de l\u2019avis de la commission et de la d\u00e9livrance de l\u2019autorisation par le pr\u00e9sident de la commune.",
    },
    {
      q: "Quel est le r\u00f4le de l\u2019architecte dans un projet de lotissement ?",
      a: "L\u2019architecte urbaniste con\u00e7oit le plan de lotissement (voirie, lots, espaces verts, \u00e9quipements publics), \u00e9tablit le cahier des charges architectural et assure la conformit\u00e9 avec le plan d\u2019am\u00e9nagement. Il coordonne aussi avec le g\u00e9om\u00e8tre-topographe et le BET VRD.",
    },
    {
      q: "Peut-on vendre les lots avant la fin des travaux de viabilisation ?",
      a: "Non, la loi 25-90 interdit la vente de lots avant l\u2019ach\u00e8vement des travaux de voirie et r\u00e9seaux divers (VRD) et la r\u00e9ception provisoire par la commune. Toute vente ant\u00e9rieure est nulle et expose le lotisseur \u00e0 des sanctions p\u00e9nales.",
    },
    { q: "Faut-il un architecte pour un projet de lotissement au Maroc ?", a: "Conform\u00e9ment \u00e0 la loi 16-89, le recours \u00e0 un architecte inscrit \u00e0 l\u2019Ordre est obligatoire pour toute construction au Maroc. M\u00eame pour les projets techniques, l\u2019architecte coordonne le permis de construire et assure la conformit\u00e9. Consultez les profils v\u00e9rifi\u00e9s sur Bati.ma." },
    { q: "Comment obtenir un devis pour lotissement au Maroc ?", a: "Demandez au minimum 3 devis d\u00e9taill\u00e9s aupr\u00e8s de professionnels diff\u00e9rents. Comparez les postes ligne par ligne, v\u00e9rifiez les r\u00e9f\u00e9rences et exigez un calendrier d\u2019ex\u00e9cution. Sur Bati.ma, vous pouvez contacter directement les architectes sp\u00e9cialis\u00e9s et demander vos devis gratuitement." },
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
        <h2>Qu&apos;est-ce qu&apos;un lotissement au Maroc ?</h2>
        <p>
          Un lotissement est une op\u00e9ration d&apos;am\u00e9nagement qui consiste \u00e0 diviser un terrain
          en plusieurs lots destin\u00e9s \u00e0 la construction. Au Maroc, cette activit\u00e9 est
          strictement encadr\u00e9e par la <strong>loi 25-90</strong> relative aux lotissements,
          groupes d&apos;habitations et morcellements.
        </p>

        <h2>Cadre r\u00e9glementaire : la loi 25-90</h2>
        <ul>
          <li><strong>Autorisation obligatoire</strong> : tout lotissement n\u00e9cessite une autorisation du pr\u00e9sident de la commune</li>
          <li><strong>Conformit\u00e9 au plan d&apos;am\u00e9nagement</strong> : le projet doit respecter le zonage et les r\u00e8gles d&apos;urbanisme</li>
          <li><strong>Cahier des charges</strong> : document obligatoire fixant les r\u00e8gles de construction sur chaque lot</li>
          <li><strong>VRD obligatoires</strong> : voirie, eau, \u00e9lectricit\u00e9, assainissement avant toute vente</li>
        </ul>

        <h2>Proc\u00e9dure d&apos;autorisation</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">\u00c9tape</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Intervenants</th>
              <th className="border border-stone-200 px-3 py-2 text-left">D\u00e9lai moyen</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">D\u00e9p\u00f4t du dossier</td><td className="border border-stone-200 px-3 py-2">Architecte + g\u00e9om\u00e8tre</td><td className="border border-stone-200 px-3 py-2">-</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Avis agence urbaine</td><td className="border border-stone-200 px-3 py-2">Agence urbaine</td><td className="border border-stone-200 px-3 py-2">2 - 3 mois</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Commission communale</td><td className="border border-stone-200 px-3 py-2">Commune + services ext\u00e9rieurs</td><td className="border border-stone-200 px-3 py-2">1 - 2 mois</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">D\u00e9livrance autorisation</td><td className="border border-stone-200 px-3 py-2">Pr\u00e9sident commune</td><td className="border border-stone-200 px-3 py-2">1 mois</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Travaux VRD + r\u00e9ception</td><td className="border border-stone-200 px-3 py-2">Entreprise + commune</td><td className="border border-stone-200 px-3 py-2">6 - 12 mois</td></tr>
          </tbody>
        </table>

        <h2>Types de lotissements</h2>
        <p>
          On distingue les lotissements r\u00e9sidentiels (villas, immeubles), les lotissements
          industriels, les lotissements touristiques et les lotissements mixtes. Chaque
          type est soumis \u00e0 des r\u00e8gles sp\u00e9cifiques de COS, CES et hauteur maximale
          d\u00e9finies par le plan d&apos;am\u00e9nagement.
        </p>

        <h2>Le cahier des charges du lotissement</h2>
        <p>
          Le cahier des charges est un document contractuel qui s&apos;impose \u00e0 tous les
          acqu\u00e9reurs de lots. Il fixe les r\u00e8gles architecturales (style, hauteur, reculs),
          les servitudes, les espaces communs et les obligations d&apos;entretien. Il est
          \u00e9tabli par l&apos;architecte et approuv\u00e9 par la commune.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm font-semibold text-[#b5522a] mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Un projet de lotissement n\u00e9cessite un architecte urbaniste exp\u00e9riment\u00e9. Trouvez le bon
            professionnel sur{" "}
            <Link href="/architectes" className="text-[#b5522a] underline">
              Bati.ma
            </Link>{" "}
            en filtrant par sp\u00e9cialit\u00e9 urbanisme.
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
