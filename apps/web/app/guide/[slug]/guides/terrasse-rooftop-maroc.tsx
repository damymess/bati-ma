import Link from "next/link";

export default function GuideTerrasseRooftopMaroc() {
  const faq = [
    {
      q: "A-t-on le droit d&apos;am\u00e9nager une terrasse accessible au Maroc ?",
      a: "Oui, si le titre foncier ou le r\u00e8glement de copropri\u00e9t\u00e9 vous accorde le droit de jouissance ou de sur\u00e9l\u00e9vation. En maison individuelle, la terrasse accessible est g\u00e9n\u00e9ralement autoris\u00e9e. En copropri\u00e9t\u00e9, v\u00e9rifiez le r\u00e8glement et obtenez l&apos;accord de l&apos;assembl\u00e9e g\u00e9n\u00e9rale.",
    },
    {
      q: "Combien co\u00fbte l&apos;am\u00e9nagement d&apos;une terrasse au Maroc ?",
      a: "Un am\u00e9nagement basique (rev\u00eatement + garde-corps) co\u00fbte 300 \u00e0 600 MAD/m\u00b2. Avec pergola, \u00e9clairage et mobilier int\u00e9gr\u00e9, comptez 800 \u00e0 1 500 MAD/m\u00b2. Un rooftop haut de gamme avec cuisine ext\u00e9rieure et jacuzzi peut d\u00e9passer 2 000 MAD/m\u00b2.",
    },
    {
      q: "L&apos;\u00e9tanch\u00e9it\u00e9 est-elle obligatoire pour une terrasse au Maroc ?",
      a: "L&apos;\u00e9tanch\u00e9it\u00e9 est indispensable pour toute terrasse accessible, qu&apos;elle soit obligatoire ou non par la r\u00e9glementation locale. Au Maroc, les pluies hivernales et les \u00e9carts thermiques imposent un syst\u00e8me d&apos;\u00e9tanch\u00e9it\u00e9 multicouche. Le co\u00fbt moyen est de 150 \u00e0 300 MAD/m\u00b2.",
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
        <h2>La terrasse accessible : un atout majeur au Maroc</h2>
        <p>
          Au Maroc, la terrasse (ou stah) est un espace de vie \u00e0 part enti\u00e8re. Que ce soit pour un rooftop en ville avec vue panoramique ou une terrasse de villa ouverte sur le jardin, l&apos;am\u00e9nagement de cet espace est devenu une priorit\u00e9 pour les propri\u00e9taires. Le climat g\u00e9n\u00e9reux permet d&apos;en profiter 8 \u00e0 10 mois par an.
        </p>

        <h2>Droit de sur\u00e9l\u00e9vation et r\u00e9glementation</h2>
        <p>
          Avant d&apos;am\u00e9nager une terrasse en toiture, v\u00e9rifiez le Plan d&apos;Am\u00e9nagement (hauteur maximale autoris\u00e9e), le titre foncier (droit de sur\u00e9l\u00e9vation) et le r\u00e8glement de copropri\u00e9t\u00e9 si applicable. En g\u00e9n\u00e9ral, l&apos;am\u00e9nagement d&apos;une terrasse existante ne n\u00e9cessite pas de permis, mais toute construction (pergola fixe, murs) peut en exiger un.
        </p>

        <h2>Styles d&apos;am\u00e9nagement populaires</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Style</th>
              <th className="border border-stone-200 px-3 py-2 text-left">\u00c9l\u00e9ments cl\u00e9s</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Budget / m\u00b2</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">Lounge marocain</td><td className="border border-stone-200 px-3 py-2">Banquettes ma\u00e7onn\u00e9es, tadelakt, coussins</td><td className="border border-stone-200 px-3 py-2">600 \u00e0 1 200 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Rooftop moderne</td><td className="border border-stone-200 px-3 py-2">Pergola alu, \u00e9clairage LED, bois composite</td><td className="border border-stone-200 px-3 py-2">800 \u00e0 1 500 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Jardin suspendu</td><td className="border border-stone-200 px-3 py-2">Jardini\u00e8res, gazon synth\u00e9tique, treillage</td><td className="border border-stone-200 px-3 py-2">500 \u00e0 1 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Espace barbecue</td><td className="border border-stone-200 px-3 py-2">Cuisine ext\u00e9rieure, coin repas, hotte</td><td className="border border-stone-200 px-3 py-2">1 000 \u00e0 2 000 MAD</td></tr>
          </tbody>
        </table>

        <h2>Mat\u00e9riaux de rev\u00eatement pour terrasse</h2>
        <p>
          Le carrelage ext\u00e9rieur antid\u00e9rapant (150 \u00e0 350 MAD/m\u00b2) est le choix le plus courant. Le bois composite (300 \u00e0 600 MAD/m\u00b2) offre un look chaleureux sans l&apos;entretien du bois naturel. La pierre naturelle (400 \u00e0 900 MAD/m\u00b2) convient au haut standing. Le zellige d\u00e9coratif apporte une touche marocaine authentique.
        </p>

        <h2>\u00c9tanch\u00e9it\u00e9 : la priorit\u00e9 absolue</h2>
        <p>
          Sans \u00e9tanch\u00e9it\u00e9 correcte, une terrasse accessible devient un cauchemar. Les techniques utilis\u00e9es au Maroc sont : la membrane bitumineuse (100 \u00e0 200 MAD/m\u00b2), la r\u00e9sine polyur\u00e9thane (200 \u00e0 350 MAD/m\u00b2) et le syst\u00e8me multicouche avec drainage (250 \u00e0 400 MAD/m\u00b2). Pr\u00e9voyez une pente minimale de 1,5 % pour l&apos;\u00e9vacuation des eaux.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm font-semibold text-[#b5522a] mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            L&apos;\u00e9tanch\u00e9it\u00e9 doit \u00eatre r\u00e9alis\u00e9e avant tout rev\u00eatement et contr\u00f4l\u00e9e par un professionnel. Votre architecte peut superviser cette \u00e9tape critique. Trouvez-en un sur{" "}
            <Link href="/architectes" className="text-[#b5522a] underline">Bati.ma</Link>.
          </p>
        </div>

        <h2>Pergola et protection solaire</h2>
        <p>
          Une pergola est quasi indispensable pour profiter de la terrasse en \u00e9t\u00e9. Les options vont de la pergola bioclimatique en aluminium (25 000 \u00e0 60 000 MAD pour 15 m\u00b2) \u00e0 la pergola en bois trait\u00e9 (15 000 \u00e0 35 000 MAD) ou la toile tendue (5 000 \u00e0 15 000 MAD). La pergola bioclimatique \u00e0 lames orientables offre le meilleur confort.
        </p>

        <h2>Co\u00fbts r\u00e9capitulatifs</h2>
        <p>
          Pour une terrasse de 40 m\u00b2 : \u00e9tanch\u00e9it\u00e9 (8 000 \u00e0 14 000 MAD), rev\u00eatement (8 000 \u00e0 24 000 MAD), garde-corps (6 000 \u00e0 15 000 MAD), pergola (15 000 \u00e0 40 000 MAD), \u00e9clairage (3 000 \u00e0 8 000 MAD), mobilier (5 000 \u00e0 20 000 MAD). Total : 45 000 \u00e0 121 000 MAD selon le niveau de finition.
        </p>

        <p className="mt-6 text-sm text-stone-500">
          Concevez votre terrasse avec un architecte sur{" "}
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
