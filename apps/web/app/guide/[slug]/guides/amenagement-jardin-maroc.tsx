import Link from "next/link";

export default function GuideAmenagementJardinMaroc() {
  const faq = [
    {
      q: "Quel budget pr\u00e9voir pour am\u00e9nager un jardin au Maroc ?",
      a: "Pour un jardin simple (gazon, haies, all\u00e9es), comptez 200 \u00e0 500 MAD/m\u00b2. Un jardin paysager avec terrasse et plantations vari\u00e9es co\u00fbte 500 \u00e0 1 200 MAD/m\u00b2. Avec piscine et am\u00e9nagements haut de gamme, pr\u00e9voyez 1 200 \u00e0 3 000 MAD/m\u00b2.",
    },
    {
      q: "Quelles plantes r\u00e9sistent le mieux au climat marocain ?",
      a: "Les plantes m\u00e9diterran\u00e9ennes (olivier, lavande, romarin, bougainvillier, jasmin) s&apos;adaptent parfaitement. Les palmiers (washingtonia, phoenix) sont tr\u00e8s utilis\u00e9s. Pour les zones arides, privil\u00e9giez les plantes xero-paysag\u00e8res : agaves, alo\u00e8s, cactus, lantana.",
    },
    {
      q: "Faut-il un paysagiste ou un architecte pour am\u00e9nager son jardin ?",
      a: "Pour un jardin simple, un paysagiste suffit. Pour un projet int\u00e9gr\u00e9 (villa + jardin + piscine + terrasse), un architecte coordonne l&apos;ensemble et le paysagiste intervient sur la partie v\u00e9g\u00e9tale. Sur Bati.ma, certains architectes sont sp\u00e9cialis\u00e9s en am\u00e9nagement ext\u00e9rieur.",
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
        <h2>L&apos;am\u00e9nagement ext\u00e9rieur, composante cl\u00e9 d&apos;une villa au Maroc</h2>
        <p>
          Au Maroc, le jardin est un espace de vie \u00e0 part enti\u00e8re. Avec un climat qui permet de profiter de l&apos;ext\u00e9rieur plus de 300 jours par an, l&apos;am\u00e9nagement paysager repr\u00e9sente un investissement qui valorise consid\u00e9rablement votre bien. Un jardin bien con\u00e7u peut augmenter la valeur d&apos;une propri\u00e9t\u00e9 de 15 \u00e0 25 %.
        </p>

        <h2>Styles de jardins adapt\u00e9s au Maroc</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Style</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Caract\u00e9ristiques</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Budget / m\u00b2</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">Marocain traditionnel</td><td className="border border-stone-200 px-3 py-2">Fontaine, zellige, orangers, jasmin</td><td className="border border-stone-200 px-3 py-2">600 \u00e0 1 500 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">M\u00e9diterran\u00e9en</td><td className="border border-stone-200 px-3 py-2">Oliviers, lavande, pierres naturelles</td><td className="border border-stone-200 px-3 py-2">400 \u00e0 1 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Moderne minimaliste</td><td className="border border-stone-200 px-3 py-2">Lignes \u00e9pur\u00e9es, b\u00e9ton, gramin\u00e9es</td><td className="border border-stone-200 px-3 py-2">500 \u00e0 1 200 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Xero-paysager (aride)</td><td className="border border-stone-200 px-3 py-2">Cactus, graviers, \u00e9conomie d&apos;eau</td><td className="border border-stone-200 px-3 py-2">300 \u00e0 800 MAD</td></tr>
          </tbody>
        </table>

        <h2>Plantes adapt\u00e9es au climat marocain</h2>
        <p>
          Le choix des v\u00e9g\u00e9taux d\u00e9pend de votre zone climatique. Au nord (Tanger, T\u00e9touan), le climat est humide et permet des jardins luxuriants. Au centre (Casablanca, Rabat), le climat atlantique favorise les plantes m\u00e9diterran\u00e9ennes. Au sud (Marrakech, Ouarzazate), optez pour des esp\u00e8ces r\u00e9sistantes \u00e0 la chaleur et \u00e9conomes en eau.
        </p>

        <h2>Piscine et terrasse</h2>
        <p>
          La piscine est un \u00e9l\u00e9ment central des jardins marocains haut de gamme. Une piscine traditionnelle (8x4 m) co\u00fbte entre 80 000 et 200 000 MAD. Les piscines \u00e0 d\u00e9bordement sont plus on\u00e9reuses (150 000 \u00e0 400 000 MAD). Pr\u00e9voyez \u00e9galement une terrasse am\u00e9nag\u00e9e (bois, pierre ou b\u00e9ton d\u00e9coratif) pour profiter de l&apos;espace ext\u00e9rieur.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm font-semibold text-[#b5522a] mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Pensez \u00e0 l&apos;irrigation goutte-\u00e0-goutte pour r\u00e9duire la consommation d&apos;eau de 50 \u00e0 70 %. Un syst\u00e8me automatis\u00e9 co\u00fbte entre 5 000 et 15 000 MAD. Trouvez un architecte paysagiste sur{" "}
            <Link href="/architectes" className="text-[#b5522a] underline">Bati.ma</Link>.
          </p>
        </div>

        <h2>Co\u00fbts d\u00e9taill\u00e9s par poste</h2>
        <p>
          Pr\u00e9paration du sol et terrassement : 50 \u00e0 150 MAD/m\u00b2. Gazon naturel : 40 \u00e0 80 MAD/m\u00b2 (synth\u00e9tique : 150 \u00e0 300 MAD/m\u00b2). Plantations : 100 \u00e0 500 MAD par arbre/arbuste. All\u00e9es et dallage : 200 \u00e0 600 MAD/m\u00b2. Cl\u00f4ture v\u00e9g\u00e9tale : 100 \u00e0 300 MAD/ml. \u00c9clairage ext\u00e9rieur : 5 000 \u00e0 20 000 MAD.
        </p>

        <h2>Choisir un paysagiste au Maroc</h2>
        <p>
          Les paysagistes professionnels sont encore rares au Maroc, mais leur nombre cro\u00eet rapidement. Certains architectes proposent une offre compl\u00e8te incluant l&apos;am\u00e9nagement ext\u00e9rieur. V\u00e9rifiez les r\u00e9alisations pr\u00e9c\u00e9dentes, demandez un plan d&apos;am\u00e9nagement d\u00e9taill\u00e9 et un devis par poste avant de vous engager.
        </p>

        <p className="mt-6 text-sm text-stone-500">
          Trouvez un architecte sp\u00e9cialis\u00e9 sur{" "}
          <Link href="/architectes" className="text-[#b5522a] underline">
            Bati.ma \u2014 Architectes au Maroc
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
