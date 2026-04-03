import Link from "next/link";

export default function GuideAmenagementJardinMaroc() {
  const faq = [
    {
      q: "Quel budget pr\u00e9voir pour am\u00e9nager un jardin au Maroc ?",
      a: "Pour un jardin simple (gazon, plantes, all\u00e9es) de 100 m\u00b2, comptez 20 000 \u00e0 50 000 MAD. Un jardin paysager avec terrasse, \u00e9clairage et irrigation automatique co\u00fbte 50 000 \u00e0 150 000 MAD. Avec piscine, le budget d\u00e9passe souvent 200 000 MAD pour l&apos;ensemble de l&apos;am\u00e9nagement ext\u00e9rieur.",
    },
    {
      q: "Quelles plantes r\u00e9sistent \u00e0 la chaleur au Maroc ?",
      a: "Les plantes les plus adapt\u00e9es sont : le bougainvillier, le jasmin, le laurier-rose, l&apos;olivier, l&apos;oranger, le palmier, le romarin, la lavande et le g\u00e9ranium. Ces esp\u00e8ces supportent les \u00e9t\u00e9s chauds marocains et n\u00e9cessitent peu d&apos;arrosage une fois bien enracin\u00e9es.",
    },
    {
      q: "Faut-il un paysagiste ou un architecte pour am\u00e9nager son jardin ?",
      a: "Pour un jardin simple, un paysagiste suffit. Pour un am\u00e9nagement int\u00e9gr\u00e9 \u00e0 la construction (terrasse, piscine, murs de cl\u00f4ture, \u00e9clairage ext\u00e9rieur), un architecte coordonne l&apos;ensemble. Certains architectes sur Bati.ma se sp\u00e9cialisent en am\u00e9nagement ext\u00e9rieur et paysagisme.",
    },
    { q: "Quelles plantes r\u00e9sistent le mieux au climat marocain ?", a: "Les plantes m\u00e9diterran\u00e9ennes s\u2019adaptent parfaitement : bougainvillier, jasmin, laurier-rose, olivier, palmier et agrumes. En zone aride, privil\u00e9giez les plantes succulentes et les esp\u00e8ces locales comme le thuya et l\u2019arganier. L\u2019irrigation goutte-\u00e0-goutte est recommand\u00e9e." },
    { q: "Combien co\u00fbte un paysagiste au Maroc ?", a: "Les honoraires d\u2019un paysagiste au Maroc varient de 5 000 \u00e0 30 000 MAD pour la conception d\u2019un jardin de 100 \u00e0 500 m\u00b2. La r\u00e9alisation compl\u00e8te (plantes, am\u00e9nagements, irrigation) co\u00fbte entre 200 et 800 MAD/m\u00b2 selon la complexit\u00e9 et le choix des v\u00e9g\u00e9taux." },
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
        <h2>Le jardin marocain : entre tradition et modernit\u00e9</h2>
        <p>
          Le jardin occupe une place centrale dans l&apos;habitat marocain. Du riad traditionnel avec son patio plant\u00e9 aux villas modernes avec piscine et terrasse, l&apos;am\u00e9nagement ext\u00e9rieur est un v\u00e9ritable art de vivre. Le climat marocain, avec ses \u00e9t\u00e9s chauds et ses hivers doux, permet de profiter du jardin presque toute l&apos;ann\u00e9e.
        </p>

        <h2>Quels styles de jardins sont populaires au Maroc ?</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Style</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Caract\u00e9ristiques</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Budget / 100 m\u00b2</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">Marocain traditionnel</td><td className="border border-stone-200 px-3 py-2">Fontaine, zellige, orangers, jasmin</td><td className="border border-stone-200 px-3 py-2">40 000 \u00e0 80 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">M\u00e9diterran\u00e9en</td><td className="border border-stone-200 px-3 py-2">Lavande, olivier, gravier, murets</td><td className="border border-stone-200 px-3 py-2">30 000 \u00e0 60 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Moderne minimaliste</td><td className="border border-stone-200 px-3 py-2">Lignes \u00e9pur\u00e9es, b\u00e9ton, plantes architecturales</td><td className="border border-stone-200 px-3 py-2">50 000 \u00e0 100 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Tropical</td><td className="border border-stone-200 px-3 py-2">Palmiers, bananiers, bassin</td><td className="border border-stone-200 px-3 py-2">45 000 \u00e0 90 000 MAD</td></tr>
          </tbody>
        </table>

        <h2>Plantes adapt\u00e9es au climat marocain</h2>
        <p>
          Le choix des plantes d\u00e9pend de votre zone climatique. Sur le littoral (Casablanca, Rabat, Tanger), les plantes m\u00e9diterran\u00e9ennes prosp\u00e8rent. \u00c0 l&apos;int\u00e9rieur (Marrakech, F\u00e8s, Mekn\u00e8s), privil\u00e9giez les esp\u00e8ces r\u00e9sistantes \u00e0 la chaleur. Dans le Sud, les palmiers, cactus et plantes grasses sont id\u00e9aux. L&apos;irrigation goutte-\u00e0-goutte est recommand\u00e9e partout pour \u00e9conomiser l&apos;eau.
        </p>

        <h2>Am\u00e9nager une piscine dans son jardin</h2>
        <p>
          La piscine est un \u00e9quipement tr\u00e8s pris\u00e9 au Maroc. Une piscine ma\u00e7onn\u00e9e de 8 x 4 m co\u00fbte entre 80 000 et 150 000 MAD. Les piscines en coque (pr\u00e9fabriqu\u00e9es) sont plus abordables : 50 000 \u00e0 90 000 MAD. Pr\u00e9voyez un budget annuel de 5 000 \u00e0 10 000 MAD pour l&apos;entretien (produits, \u00e9lectricit\u00e9, hivernage).
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm font-semibold text-[#b5522a] mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Pensez \u00e0 l&apos;am\u00e9nagement ext\u00e9rieur d\u00e8s la conception de votre villa. Un architecte int\u00e8gre le jardin, la terrasse et la piscine dans le plan d&apos;ensemble pour un r\u00e9sultat harmonieux. Comparez sur{" "}
            <Link href="/architectes" className="text-[#b5522a] underline">Bati.ma</Link>.
          </p>
        </div>

        <h2>Terrasse et espace de vie ext\u00e9rieur</h2>
        <p>
          La terrasse est l&apos;extension naturelle du salon au Maroc. Les mat\u00e9riaux courants sont le carrelage ext\u00e9rieur (150 \u00e0 400 MAD/m\u00b2), le bois composite (300 \u00e0 600 MAD/m\u00b2) et la pierre naturelle (400 \u00e0 800 MAD/m\u00b2). Une pergola en aluminium ou en bois ajoute 15 000 \u00e0 40 000 MAD selon la taille.
        </p>

        <h2>Co\u00fbts d\u00e9taill\u00e9s de l&apos;am\u00e9nagement</h2>
        <p>
          Gazon naturel : 30 \u00e0 50 MAD/m\u00b2 (pose comprise). Gazon synth\u00e9tique : 150 \u00e0 300 MAD/m\u00b2. Irrigation automatique : 8 000 \u00e0 20 000 MAD pour 200 m\u00b2. \u00c9clairage ext\u00e9rieur : 5 000 \u00e0 15 000 MAD. Cl\u00f4ture et mur d&apos;enceinte : 500 \u00e0 1 200 MAD/ml. Le budget total d\u00e9pend des choix de mat\u00e9riaux et du niveau de finition souhait\u00e9.
        </p>

        <h2>Faire appel \u00e0 un paysagiste</h2>
        <p>
          Un paysagiste professionnel facture entre 3 000 et 8 000 MAD pour une \u00e9tude et un plan d&apos;am\u00e9nagement. La r\u00e9alisation est factur\u00e9e s\u00e9par\u00e9ment. Pour un projet int\u00e9gr\u00e9 \u00e0 la construction, l&apos;architecte peut coordonner l&apos;ensemble et garantir la coh\u00e9rence entre l&apos;habitation et l&apos;espace ext\u00e9rieur.
        </p>

        <p className="mt-6 text-sm text-stone-500">
          Trouvez un architecte paysagiste sur{" "}
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
