import Link from "next/link";

export default function GuideEtapesConstruireVilla() {
  const faq = [
    {
      q: "Combien de temps faut-il pour construire une villa au Maroc ?",
      a: "En moyenne, comptez 12 \u00e0 18 mois du d\u00e9marrage du chantier \u00e0 la r\u00e9ception. Il faut ajouter 3 \u00e0 6 mois pour la phase conception et permis de construire. Au total, un projet de villa dure entre 15 et 24 mois du premier contact avec l&apos;architecte \u00e0 la remise des cl\u00e9s.",
    },
    {
      q: "Quel budget pr\u00e9voir pour construire une villa au Maroc en 2026 ?",
      a: "Le co\u00fbt varie selon la ville et le standing : 3 500 \u00e0 5 000 MAD/m\u00b2 pour une villa \u00e9conomique, 5 000 \u00e0 8 000 MAD/m\u00b2 pour du moyen standing, et 8 000 \u00e0 15 000 MAD/m\u00b2 pour du haut standing. Pour une villa de 200 m\u00b2, pr\u00e9voyez entre 700 000 et 3 000 000 MAD hors terrain.",
    },
    {
      q: "Faut-il obligatoirement un architecte pour construire une villa au Maroc ?",
      a: "Oui, la loi marocaine impose le recours \u00e0 un architecte inscrit \u00e0 l&apos;Ordre pour toute construction de plus de 150 m\u00b2 ou de plus de 3 niveaux (R+2). L&apos;architecte est indispensable pour le d\u00e9p\u00f4t du permis de construire et la signature des plans.",
    },
    { q: "Faut-il un architecte pour un projet de etapes construire villa ?", a: "Conform\u00e9ment \u00e0 la loi 16-89, le recours \u00e0 un architecte inscrit \u00e0 l\u2019Ordre est obligatoire pour toute construction au Maroc. M\u00eame pour les projets techniques, l\u2019architecte coordonne le permis de construire et assure la conformit\u00e9. Consultez les profils v\u00e9rifi\u00e9s sur Bati.ma." },
    { q: "Comment obtenir un devis pour etapes construire villa ?", a: "Demandez au minimum 3 devis d\u00e9taill\u00e9s aupr\u00e8s de professionnels diff\u00e9rents. Comparez les postes ligne par ligne, v\u00e9rifiez les r\u00e9f\u00e9rences et exigez un calendrier d\u2019ex\u00e9cution. Sur Bati.ma, vous pouvez contacter directement les architectes sp\u00e9cialis\u00e9s et demander vos devis gratuitement." },
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
        <h2>Chronologie compl\u00e8te : du terrain \u00e0 la r\u00e9ception</h2>
        <p>
          Construire une villa au Maroc est un projet structur\u00e9 en \u00e9tapes cl\u00e9s. Chaque phase fait intervenir des professionnels sp\u00e9cifiques et n\u00e9cessite un budget d\u00e9di\u00e9. Voici le parcours complet pour mener votre projet \u00e0 bien, de l&apos;achat du terrain \u00e0 la remise des cl\u00e9s.
        </p>

        <h2>\u00c9tape 1 : Achat du terrain et v\u00e9rifications</h2>
        <p>
          V\u00e9rifiez le titre foncier aupr\u00e8s de la Conservation Fonci\u00e8re, consultez le Plan d&apos;Am\u00e9nagement pour conna\u00eetre les r\u00e8gles d&apos;urbanisme (COS, CES, hauteur), et assurez-vous de la viabilisation (eau, \u00e9lectricit\u00e9, assainissement). Budget terrain : 500 \u00e0 5 000 MAD/m\u00b2 selon la ville et le quartier.
        </p>

        <h2>\u00c9tape 2 : Choix de l&apos;architecte et conception</h2>
        <p>
          Comparez au moins 3 architectes, signez un contrat de ma\u00eetrise d&apos;\u0153uvre, puis l&apos;architecte r\u00e9alise l&apos;esquisse, l&apos;avant-projet sommaire (APS) et l&apos;avant-projet d\u00e9taill\u00e9 (APD). Dur\u00e9e : 1 \u00e0 3 mois. Honoraires : 3 % \u00e0 8 % du co\u00fbt des travaux.
        </p>

        <h2>\u00c9tape 3 : Permis de construire</h2>
        <p>
          L&apos;architecte d\u00e9pose le dossier aupr\u00e8s de la commune concern\u00e9e. Pi\u00e8ces n\u00e9cessaires : plans architecturaux, \u00e9tude de sol, plans BET (b\u00e9ton arm\u00e9), attestation de propri\u00e9t\u00e9. D\u00e9lai : 2 \u00e0 4 mois selon la commune.
        </p>

        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">\u00c9tape</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Dur\u00e9e</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Budget indicatif</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">Terrain + v\u00e9rifications</td><td className="border border-stone-200 px-3 py-2">1 \u00e0 3 mois</td><td className="border border-stone-200 px-3 py-2">Variable</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Conception architecturale</td><td className="border border-stone-200 px-3 py-2">1 \u00e0 3 mois</td><td className="border border-stone-200 px-3 py-2">5 \u00e0 8 % du total</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Permis de construire</td><td className="border border-stone-200 px-3 py-2">2 \u00e0 4 mois</td><td className="border border-stone-200 px-3 py-2">5 000 \u00e0 15 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Gros \u0153uvre</td><td className="border border-stone-200 px-3 py-2">4 \u00e0 8 mois</td><td className="border border-stone-200 px-3 py-2">50 % du co\u00fbt travaux</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Second \u0153uvre + finitions</td><td className="border border-stone-200 px-3 py-2">4 \u00e0 8 mois</td><td className="border border-stone-200 px-3 py-2">35 % du co\u00fbt travaux</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">R\u00e9ception + permis d&apos;habiter</td><td className="border border-stone-200 px-3 py-2">1 \u00e0 2 mois</td><td className="border border-stone-200 px-3 py-2">15 % restants</td></tr>
          </tbody>
        </table>

        <h2>\u00c9tape 4 : Gros \u0153uvre</h2>
        <p>
          Fondations, structure b\u00e9ton arm\u00e9, murs, dalles et toiture. C&apos;est la phase la plus lourde du chantier. L&apos;architecte et le BET supervisent la conformit\u00e9 aux plans. Intervenants : entreprise de construction, ma\u00e7ons, ferrailleurs.
        </p>

        <h2>\u00c9tape 5 : Second \u0153uvre et finitions</h2>
        <p>
          \u00c9lectricit\u00e9, plomberie, menuiserie, rev\u00eatements, peinture, am\u00e9nagements ext\u00e9rieurs. Cette phase d\u00e9termine le confort et l&apos;esth\u00e9tique finale. Pr\u00e9voyez un budget de 35 % du co\u00fbt total des travaux pour ces postes.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm font-semibold text-[#b5522a] mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Pr\u00e9voyez une marge de 10 \u00e0 15 % au-dessus de votre budget initial pour les impr\u00e9vus. Sur{" "}
            <Link href="/architectes" className="text-[#b5522a] underline">Bati.ma</Link>, trouvez un architecte sp\u00e9cialis\u00e9 en villas dans votre ville pour un accompagnement de A \u00e0 Z.
          </p>
        </div>

        <h2>\u00c9tape 6 : R\u00e9ception et permis d&apos;habiter</h2>
        <p>
          L&apos;architecte proc\u00e8de \u00e0 la r\u00e9ception provisoire avec v\u00e9rification de conformit\u00e9. Apr\u00e8s lev\u00e9e des r\u00e9serves, vous obtenez le permis d&apos;habiter aupr\u00e8s de la commune. Ce document est indispensable pour le raccordement d\u00e9finitif et la mise en service de la villa.
        </p>

        <h2>Erreurs fr\u00e9quentes \u00e0 \u00e9viter</h2>
        <p>
          Ne commencez jamais les travaux sans permis de construire valid\u00e9 (risque de d\u00e9molition). Ne n\u00e9gligez pas l&apos;\u00e9tude de sol (affaissements futurs). \u00c9vitez de payer l&apos;int\u00e9gralit\u00e9 des travaux \u00e0 l&apos;avance. Pr\u00e9voyez un contrat \u00e9crit avec chaque intervenant.
        </p>

        <p className="mt-6 text-sm text-stone-500">
          D\u00e9marrez votre projet sur{" "}
          <Link href="/architectes" className="text-[#b5522a] underline">
            Bati.ma \u2014 Trouvez votre architecte
          </Link>
        </p>
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
