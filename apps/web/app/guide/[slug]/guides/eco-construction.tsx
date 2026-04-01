import Link from "next/link";

export default function GuideEcoConstruction() {
  const faq = [
    {
      q: "Qu&apos;est-ce que la RTCM au Maroc ?",
      a: "La RTCM (R\u00e9glementation Thermique de Construction au Maroc) impose des performances \u00e9nerg\u00e9tiques minimales pour les nouvelles constructions. Le Maroc est divis\u00e9 en 6 zones climatiques, chacune avec des exigences sp\u00e9cifiques en mati\u00e8re d&apos;isolation, de fen\u00eatres et de syst\u00e8mes de chauffage/climatisation.",
    },
    {
      q: "Combien co\u00fbte le surco\u00fbt d&apos;une \u00e9co-construction au Maroc ?",
      a: "Le surco\u00fbt d&apos;une construction \u00e9cologique varie de 5 \u00e0 15 % par rapport \u00e0 une construction conventionnelle. Ce surco\u00fbt est amorti en 5 \u00e0 10 ans gr\u00e2ce aux \u00e9conomies d&apos;\u00e9nergie (30 \u00e0 50 % de r\u00e9duction sur la facture \u00e9nerg\u00e9tique) et \u00e0 la valorisation du bien immobilier.",
    },
    {
      q: "Quels mat\u00e9riaux \u00e9cologiques sont disponibles au Maroc ?",
      a: "Le pis\u00e9 (terre crue) et le BTC (bloc de terre compress\u00e9e) sont produits localement. Le b\u00e9ton bas carbone est propos\u00e9 par LafargeHolcim Maroc. Le c\u00e8dre de l&apos;Atlas sert pour la charpente. L&apos;isolation en li\u00e8ge (r\u00e9gion de Maamora) et la laine de mouton sont des alternatives locales performantes.",
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
        <h2>L&apos;\u00e9co-construction au Maroc : un march\u00e9 en plein essor</h2>
        <p>
          L&apos;\u00e9co-construction gagne du terrain au Maroc, port\u00e9e par la RTCM, la strat\u00e9gie nationale de d\u00e9veloppement durable et une prise de conscience croissante. Le Maroc dispose d&apos;atouts uniques : mat\u00e9riaux traditionnels performants (pis\u00e9, BTC), un ensoleillement exceptionnel pour le solaire, et un savoir-faire ancestral en construction bioclimatique.
        </p>

        <h2>La RTCM : cadre r\u00e9glementaire d\u00e9taill\u00e9</h2>
        <p>
          La R\u00e9glementation Thermique de Construction au Maroc d\u00e9finit 6 zones climatiques, de Z1 (littoral atlantique temp\u00e9r\u00e9) \u00e0 Z6 (montagne froide). Chaque zone impose des niveaux d&apos;isolation diff\u00e9rents pour les murs, les toitures et les fen\u00eatres. Les constructions neuves doivent d\u00e9montrer leur conformit\u00e9 via une \u00e9tude thermique r\u00e9alis\u00e9e par un BET sp\u00e9cialis\u00e9.
        </p>

        <h2>Les 6 zones climatiques du Maroc</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Zone</th>
              <th className="border border-stone-200 px-3 py-2 text-left">R\u00e9gions</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Climat</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Priorit\u00e9 thermique</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">Z1</td><td className="border border-stone-200 px-3 py-2">Agadir, Essaouira</td><td className="border border-stone-200 px-3 py-2">Littoral doux</td><td className="border border-stone-200 px-3 py-2">Ventilation</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Z2</td><td className="border border-stone-200 px-3 py-2">Casablanca, Rabat, Tanger</td><td className="border border-stone-200 px-3 py-2">Atlantique temp\u00e9r\u00e9</td><td className="border border-stone-200 px-3 py-2">Isolation mod\u00e9r\u00e9e</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Z3</td><td className="border border-stone-200 px-3 py-2">F\u00e8s, Mekn\u00e8s</td><td className="border border-stone-200 px-3 py-2">Semi-continental</td><td className="border border-stone-200 px-3 py-2">Chauffage + clim</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Z4</td><td className="border border-stone-200 px-3 py-2">Marrakech, B\u00e9ni Mellal</td><td className="border border-stone-200 px-3 py-2">Semi-aride chaud</td><td className="border border-stone-200 px-3 py-2">Protection solaire</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Z5</td><td className="border border-stone-200 px-3 py-2">Ouarzazate, Errachidia</td><td className="border border-stone-200 px-3 py-2">Aride</td><td className="border border-stone-200 px-3 py-2">Inertie thermique</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Z6</td><td className="border border-stone-200 px-3 py-2">Ifrane, Azrou, Atlas</td><td className="border border-stone-200 px-3 py-2">Montagne froide</td><td className="border border-stone-200 px-3 py-2">Forte isolation</td></tr>
          </tbody>
        </table>

        <h2>Mat\u00e9riaux durables disponibles au Maroc</h2>
        <p>
          Le <strong>pis\u00e9</strong> (terre crue tass\u00e9e) est un isolant naturel ancestral, encore utilis\u00e9 dans le Sud. Le <strong>BTC</strong> (bloc de terre compress\u00e9e) est sa version moderne, produit industriellement. Le <strong>b\u00e9ton bas carbone</strong> r\u00e9duit l&apos;empreinte de 30 \u00e0 40 %. Le <strong>c\u00e8dre de l&apos;Atlas</strong> est id\u00e9al pour la charpente et la menuiserie. Le li\u00e8ge de la for\u00eat de Maamora offre une isolation thermique et acoustique naturelle.
        </p>

        <h2>Certifications \u00e9nerg\u00e9tiques au Maroc</h2>
        <p>
          La certification <strong>HQE International</strong> est la plus r\u00e9pandue pour les grands projets (bureaux, h\u00f4tels). <strong>LEED</strong> (Leadership in Energy and Environmental Design) est utilis\u00e9e par les investisseurs internationaux. Le <strong>label ADEREE</strong> (Agence de D\u00e9veloppement des \u00c9nergies Renouvelables) certifie la performance \u00e9nerg\u00e9tique des b\u00e2timents r\u00e9sidentiels au Maroc.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm font-semibold text-[#b5522a] mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Le surco\u00fbt de l&apos;\u00e9co-construction (5-15 %) est amorti en 5 \u00e0 10 ans. De plus, les b\u00e2timents certifi\u00e9s se vendent 10 \u00e0 20 % plus cher. Trouvez un architecte sp\u00e9cialis\u00e9 en \u00e9co-construction sur{" "}
            <Link href="/architectes" className="text-[#b5522a] underline">Bati.ma</Link>.
          </p>
        </div>

        <h2>Co\u00fbt du surco\u00fbt \u00e9cologique</h2>
        <p>
          L&apos;isolation thermique renforc\u00e9e ajoute 100 \u00e0 300 MAD/m\u00b2. Les fen\u00eatres double vitrage co\u00fbtent 30 \u00e0 50 % de plus que le simple vitrage. Un chauffe-eau solaire \u00e9conomise 5 000 \u00e0 10 000 MAD/an. Au total, pour une villa de 200 m\u00b2, le surco\u00fbt \u00e9cologique se situe entre 50 000 et 200 000 MAD selon le niveau d&apos;ambition.
        </p>

        <h2>Architectes sp\u00e9cialis\u00e9s en \u00e9co-construction</h2>
        <p>
          De plus en plus d&apos;architectes marocains se forment \u00e0 la construction durable. Certains ont obtenu des certifications internationales (LEED AP, BREEAM). Les villes de Casablanca, Rabat et Marrakech concentrent les cabinets les plus avanc\u00e9s en \u00e9co-conception. V\u00e9rifiez les r\u00e9alisations et les certifications sur le profil de l&apos;architecte.
        </p>

        <p className="mt-6 text-sm text-stone-500">
          Trouvez un \u00e9co-architecte sur{" "}
          <Link href="/architectes" className="text-[#b5522a] underline">
            Bati.ma \u2014 Architectes sp\u00e9cialis\u00e9s
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
