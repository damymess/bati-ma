import Link from "next/link";

export default function GuideDevisConstructionMaroc() {
  const faq = [
    {
      q: "Combien de devis faut-il demander avant de lancer une construction au Maroc ?",
      a: "Il est recommand\u00e9 de demander au minimum 3 devis d\u00e9taill\u00e9s aupr\u00e8s d\u2019entreprises diff\u00e9rentes. Comparez poste par poste (gros \u0153uvre, second \u0153uvre, finitions) et v\u00e9rifiez que chaque devis inclut les m\u00eames prestations pour une comparaison fiable.",
    },
    {
      q: "Un devis de construction au Maroc est-il engageant ?",
      a: "Un devis sign\u00e9 par les deux parties a valeur de contrat au Maroc. Il engage l\u2019entreprise sur les prix et les prestations d\u00e9crites. Avant de signer, v\u00e9rifiez les conditions de r\u00e9vision de prix, les d\u00e9lais et les p\u00e9nalit\u00e9s de retard.",
    },
    {
      q: "Quels postes repr\u00e9sentent la plus grande part du devis ?",
      a: "Le gros \u0153uvre (fondations, structure, ma\u00e7onnerie) repr\u00e9sente 40 \u00e0 50 % du budget total. Le second \u0153uvre (\u00e9lectricit\u00e9, plomberie, \u00e9tanch\u00e9it\u00e9) compte pour 25 \u00e0 30 %, et les finitions (rev\u00eatements, peinture, menuiserie) pour 20 \u00e0 30 %.",
    },
    { q: "Faut-il un architecte pour un projet de devis construction au Maroc ?", a: "Conform\u00e9ment \u00e0 la loi 16-89, le recours \u00e0 un architecte inscrit \u00e0 l\u2019Ordre est obligatoire pour toute construction au Maroc. M\u00eame pour les projets techniques, l\u2019architecte coordonne le permis de construire et assure la conformit\u00e9. Consultez les profils v\u00e9rifi\u00e9s sur Bati.ma." },
    { q: "Comment obtenir un devis pour devis construction au Maroc ?", a: "Demandez au minimum 3 devis d\u00e9taill\u00e9s aupr\u00e8s de professionnels diff\u00e9rents. Comparez les postes ligne par ligne, v\u00e9rifiez les r\u00e9f\u00e9rences et exigez un calendrier d\u2019ex\u00e9cution. Sur Bati.ma, vous pouvez contacter directement les architectes sp\u00e9cialis\u00e9s et demander vos devis gratuitement." },
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
        <h2>Qu&apos;est-ce qu&apos;un devis de construction au Maroc ?</h2>
        <p>
          Le devis de construction est un document d\u00e9taill\u00e9 qui chiffre l&apos;ensemble des
          travaux \u00e0 r\u00e9aliser. Au Maroc, il est \u00e9tabli par l&apos;entreprise de construction
          (ou le ma\u00eetre d&apos;\u0153uvre) sur la base des plans de l&apos;architecte. Un devis bien
          structur\u00e9 est votre meilleure protection contre les d\u00e9passements de budget.
        </p>

        <h2>Quels sont les postes principaux d&apos;un devis ?</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Poste</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Part du budget</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Exemple (villa 200 m\u00b2)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">Gros \u0153uvre</td><td className="border border-stone-200 px-3 py-2">40 - 50 %</td><td className="border border-stone-200 px-3 py-2">480 000 - 600 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Second \u0153uvre</td><td className="border border-stone-200 px-3 py-2">25 - 30 %</td><td className="border border-stone-200 px-3 py-2">300 000 - 360 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Finitions</td><td className="border border-stone-200 px-3 py-2">20 - 30 %</td><td className="border border-stone-200 px-3 py-2">240 000 - 360 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Honoraires architecte</td><td className="border border-stone-200 px-3 py-2">5 - 10 %</td><td className="border border-stone-200 px-3 py-2">60 000 - 120 000 MAD</td></tr>
          </tbody>
        </table>

        <h2>Comment lire un devis de construction</h2>
        <p>
          Un devis s\u00e9rieux doit d\u00e9tailler : les quantit\u00e9s (m\u00b2, m\u00b3, unit\u00e9s), les prix
          unitaires, le co\u00fbt total par poste, les d\u00e9lais par phase, les conditions de paiement
          et les r\u00e9serves \u00e9ventuelles. M\u00e9fiez-vous des devis trop vagues ou qui regroupent
          plusieurs lots sans d\u00e9tail.
        </p>

        <h2>Les pi\u00e8ges \u00e0 \u00e9viter</h2>
        <ul>
          <li><strong>Devis anormalement bas</strong> : risque de mat\u00e9riaux de mauvaise qualit\u00e9 ou de travaux suppl\u00e9mentaires non pr\u00e9vus</li>
          <li><strong>Absence de d\u00e9tails</strong> : un poste \u00ab gros \u0153uvre forfait \u00bb sans d\u00e9composition est suspect</li>
          <li><strong>Pas de clause de r\u00e9vision</strong> : les prix des mat\u00e9riaux (acier, ciment) fluctuent</li>
          <li><strong>D\u00e9lais flous</strong> : exigez un planning pr\u00e9cis avec p\u00e9nalit\u00e9s de retard</li>
        </ul>

        <h2>N\u00e9gocier son devis</h2>
        <p>
          La n\u00e9gociation est courante au Maroc. Vous pouvez obtenir 5 \u00e0 15 % de r\u00e9duction en
          comparant plusieurs offres, en regroupant les lots ou en proposant un paiement
          comptant partiel. Votre architecte peut aussi n\u00e9gocier en votre nom gr\u00e2ce \u00e0 son
          r\u00e9seau d&apos;entreprises partenaires.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm font-semibold text-[#b5522a] mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Demandez \u00e0 votre architecte de valider chaque devis avant signature. Sur{" "}
            <Link href="/architectes" className="text-[#b5522a] underline">
              Bati.ma
            </Link>, trouvez un architecte qui vous accompagne dans l&apos;analyse des offres.
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
