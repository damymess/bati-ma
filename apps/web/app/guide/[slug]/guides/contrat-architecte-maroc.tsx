import Link from "next/link";

export default function GuideContratArchitecteMaroc() {
  const faq = [
    {
      q: "Un contrat avec un architecte est-il obligatoire au Maroc ?",
      a: "La loi 16-89 n&apos;impose pas un contrat \u00e9crit, mais le CNOA le recommande fortement. En pratique, tout architecte s\u00e9rieux proposera un contrat de ma\u00eetrise d&apos;\u0153uvre. Sans contrat, il est tr\u00e8s difficile de faire valoir ses droits en cas de litige.",
    },
    {
      q: "Quelles clauses v\u00e9rifier en priorit\u00e9 dans un contrat d\u2019architecte ?",
      a: "V\u00e9rifiez la d\u00e9finition pr\u00e9cise de la mission (conception, permis, suivi), le mode de calcul des honoraires (pourcentage ou forfait), le calendrier pr\u00e9visionnel, les conditions de r\u00e9siliation et la clause de r\u00e8glement des litiges (tribunal comp\u00e9tent ou arbitrage).",
    },
    {
      q: "Peut-on r\u00e9silier un contrat d\u2019architecte en cours de projet ?",
      a: "Oui, les deux parties peuvent r\u00e9silier. Le ma\u00eetre d&apos;ouvrage devra payer les honoraires des phases r\u00e9alis\u00e9es. Si l&apos;architecte r\u00e9silie sans motif l\u00e9gitime, il peut \u00eatre tenu de verser des dommages. Le contrat doit pr\u00e9voir les modalit\u00e9s pr\u00e9cises.",
    },
    { q: "Quelles clauses v\u00e9rifier en priorit\u00e9 dans un contrat d\u2019architecte ?", a: "V\u00e9rifiez : le p\u00e9rim\u00e8tre exact de la mission (conception seule ou suivi de chantier), le mode de calcul des honoraires (pourcentage ou forfait), les d\u00e9lais de chaque phase, les conditions de r\u00e9siliation et les p\u00e9nalit\u00e9s de retard. Le contrat CNOA est la r\u00e9f\u00e9rence." },
    { q: "Peut-on rompre un contrat d\u2019architecte au Maroc ?", a: "Oui, les deux parties peuvent r\u00e9silier avec un pr\u00e9avis \u00e9crit. Le client doit payer les phases d\u00e9j\u00e0 r\u00e9alis\u00e9es. L\u2019architecte qui rompt sans motif l\u00e9gitime engage sa responsabilit\u00e9 professionnelle. Les litiges sont arbitr\u00e9s par le Conseil de l\u2019Ordre des Architectes." },
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
        <h2>Pourquoi signer un contrat avec son architecte au Maroc</h2>
        <p>
          Le contrat de ma\u00eetrise d&apos;\u0153uvre est le document fondateur de toute collaboration avec un architecte. Au Maroc, m\u00eame si la loi 16-89 n&apos;impose pas formellement un contrat \u00e9crit, le Conseil National de l&apos;Ordre des Architectes (CNOA) recommande syst\u00e9matiquement sa signature. Ce document prot\u00e8ge le ma\u00eetre d&apos;ouvrage comme l&apos;architecte en d\u00e9finissant clairement les engagements de chacun.
        </p>

        <h2>Quels sont les types de contrats d&apos;architecte au Maroc ?</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Type de contrat</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Missions couvertes</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Honoraires typiques</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">Mission compl\u00e8te</td><td className="border border-stone-200 px-3 py-2">Conception + permis + suivi chantier + r\u00e9ception</td><td className="border border-stone-200 px-3 py-2">5 % \u00e0 8 % du co\u00fbt travaux</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Mission partielle</td><td className="border border-stone-200 px-3 py-2">Conception + permis uniquement</td><td className="border border-stone-200 px-3 py-2">3 % \u00e0 5 % du co\u00fbt travaux</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Consultation</td><td className="border border-stone-200 px-3 py-2">\u00c9tude de faisabilit\u00e9, conseil</td><td className="border border-stone-200 px-3 py-2">3 000 \u00e0 10 000 MAD forfait</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Suivi seul</td><td className="border border-stone-200 px-3 py-2">Suivi et coordination chantier</td><td className="border border-stone-200 px-3 py-2">2 % \u00e0 3 % du co\u00fbt travaux</td></tr>
          </tbody>
        </table>

        <h2>Quelles sont les clauses essentielles du contrat ?</h2>
        <p>
          Tout contrat d&apos;architecte au Maroc doit comporter au minimum : l&apos;identification des parties, la d\u00e9finition pr\u00e9cise de la mission, le programme d\u00e9taill\u00e9 du projet, le montant et le mode de calcul des honoraires, le calendrier pr\u00e9visionnel, les conditions de modification du programme, les modalit\u00e9s de r\u00e9siliation et la juridiction comp\u00e9tente en cas de litige.
        </p>

        <h2>Comment sont calculés les honoraires de l&apos;architecte ?</h2>
        <p>
          Au Maroc, trois modes de r\u00e9mun\u00e9ration sont courants : le pourcentage du co\u00fbt des travaux (le plus r\u00e9pandu, entre 3 % et 8 %), le forfait global (fix\u00e9 d\u00e8s la signature), et la r\u00e9mun\u00e9ration au temps pass\u00e9 (facturation horaire ou journali\u00e8re). Le contrat doit pr\u00e9ciser les \u00e9ch\u00e9ances de paiement : g\u00e9n\u00e9ralement 20 % \u00e0 la signature, 30 % au d\u00e9p\u00f4t du permis, 30 % en cours de chantier et 20 % \u00e0 la r\u00e9ception.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm font-semibold text-[#b5522a] mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Exigez un contrat \u00e9crit m\u00eame pour une mission partielle. Le mod\u00e8le CNOA est disponible aupr\u00e8s de votre Conseil R\u00e9gional. Sur{" "}
            <Link href="/architectes" className="text-[#b5522a] underline">Bati.ma</Link>, comparez les architectes et demandez un devis d\u00e9taill\u00e9 avant de signer.
          </p>
        </div>

        <h2>La r\u00e9siliation du contrat</h2>
        <p>
          Le ma\u00eetre d&apos;ouvrage peut r\u00e9silier \u00e0 tout moment en payant les phases r\u00e9alis\u00e9es et une indemnit\u00e9 pr\u00e9vue au contrat (g\u00e9n\u00e9ralement 10 % des honoraires restants). L&apos;architecte peut \u00e9galement r\u00e9silier si le client ne respecte pas ses engagements (non-paiement, modification radicale du programme). Les conditions doivent \u00eatre pr\u00e9cis\u00e9es dans le contrat pour \u00e9viter tout litige.
        </p>

        <h2>R\u00e8glement des litiges</h2>
        <p>
          En cas de diff\u00e9rend, le contrat doit pr\u00e9voir une proc\u00e9dure : m\u00e9diation via le Conseil R\u00e9gional de l&apos;Ordre, arbitrage ou tribunal comp\u00e9tent. La m\u00e9diation est recommand\u00e9e car plus rapide et moins co\u00fbteuse qu&apos;une proc\u00e9dure judiciaire. Le tribunal de commerce du lieu du projet est g\u00e9n\u00e9ralement comp\u00e9tent.
        </p>

        <h2>Le mod\u00e8le CNOA : r\u00e9f\u00e9rence nationale</h2>
        <p>
          Le CNOA propose un mod\u00e8le-type de contrat que la plupart des architectes utilisent. Ce mod\u00e8le couvre l&apos;ensemble des phases (esquisse, APS, APD, DCE, suivi, r\u00e9ception) et int\u00e8gre les sp\u00e9cificit\u00e9s du droit marocain. Vous pouvez le demander aupr\u00e8s de votre Conseil R\u00e9gional ou directement \u00e0 l&apos;architecte que vous avez choisi.
        </p>

        <p className="mt-6 text-sm text-stone-500">
          Trouvez un architecte de confiance sur{" "}
          <Link href="/architectes" className="text-[#b5522a] underline">
            Bati.ma \u2014 Annuaire des architectes au Maroc
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
