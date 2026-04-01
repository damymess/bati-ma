import Link from "next/link";

export default function GuideDomotiqueMaroc() {
  const faq = [
    {
      q: "Combien co\u00fbte une installation domotique au Maroc ?",
      a: "Le co\u00fbt d\u2019une installation domotique au Maroc varie de 15 000 MAD pour un kit de base (\u00e9clairage + volets) \u00e0 plus de 200 000 MAD pour un syst\u00e8me complet KNX (s\u00e9curit\u00e9, \u00e9nergie, multim\u00e9dia, climatisation). Pour une villa de 200 m\u00b2, pr\u00e9voyez en moyenne 50 000 \u00e0 100 000 MAD pour un syst\u00e8me int\u00e9gr\u00e9.",
    },
    {
      q: "Quelles marques de domotique sont disponibles au Maroc ?",
      a: "Les principales marques pr\u00e9sentes au Maroc sont KNX (standard europ\u00e9en), Legrand, Schneider Electric, Somfy (volets), Hager, et les solutions connect\u00e9es comme Google Home et Amazon Alexa. Les int\u00e9grateurs locaux proposent aussi des solutions sur mesure avec Loxone ou Control4.",
    },
    {
      q: "Faut-il pr\u00e9voir la domotique d\u00e8s la conception avec l&apos;architecte ?",
      a: "Oui, c\u2019est fortement recommand\u00e9. Int\u00e9grer la domotique d\u00e8s la phase de conception permet de pr\u00e9voir le c\u00e2blage ad\u00e9quat, de r\u00e9duire les co\u00fbts (30 \u00e0 40 % moins cher qu\u2019en r\u00e9novation) et d\u2019optimiser l\u2019ergonomie du syst\u00e8me. Parlez-en \u00e0 votre architecte d\u00e8s le d\u00e9but.",
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
        <h2>La domotique au Maroc : un march\u00e9 en pleine expansion</h2>
        <p>
          Le march\u00e9 de la maison intelligente au Maroc conna\u00eet une croissance rapide,
          port\u00e9 par les villas haut standing de Casablanca, Marrakech et Rabat. De plus
          en plus de ma\u00eetres d&apos;ouvrage int\u00e8grent la domotique d\u00e8s la conception pour
          optimiser le confort, la s\u00e9curit\u00e9 et la consommation \u00e9nerg\u00e9tique. Le Maroc
          b\u00e9n\u00e9ficie d\u00e9sormais d&apos;un r\u00e9seau d&apos;int\u00e9grateurs certifi\u00e9s.
        </p>

        <h2>Solutions domotiques disponibles au Maroc</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Solution</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Technologie</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Budget indicatif</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">KNX filaire</td><td className="border border-stone-200 px-3 py-2">Standard europ\u00e9en, bus filaire</td><td className="border border-stone-200 px-3 py-2">80 000 - 200 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Legrand / Schneider</td><td className="border border-stone-200 px-3 py-2">Filaire + connect\u00e9</td><td className="border border-stone-200 px-3 py-2">30 000 - 80 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Wi-Fi / Zigbee (DIY)</td><td className="border border-stone-200 px-3 py-2">Sans fil, plug &amp; play</td><td className="border border-stone-200 px-3 py-2">5 000 - 25 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Loxone / Control4</td><td className="border border-stone-200 px-3 py-2">Syst\u00e8me int\u00e9gr\u00e9 premium</td><td className="border border-stone-200 px-3 py-2">100 000 - 300 000 MAD</td></tr>
          </tbody>
        </table>

        <h2>Les avantages de la domotique au Maroc</h2>
        <p>
          Dans un pays ensoleill\u00e9 comme le Maroc, la domotique offre des b\u00e9n\u00e9fices
          concrets : gestion automatis\u00e9e de la climatisation (r\u00e9duction de 20 \u00e0 30 % de
          la facture \u00e9nerg\u00e9tique), contr\u00f4le des volets pour se prot\u00e9ger de la chaleur,
          gestion de l&apos;arrosage des jardins, vid\u00e9osurveillance \u00e0 distance et contr\u00f4le
          d&apos;acc\u00e8s pour les r\u00e9sidences secondaires.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm font-semibold text-[#b5522a] mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Int\u00e9grez la domotique d\u00e8s la phase de conception avec votre architecte. C&apos;est
            30 \u00e0 40 % moins cher qu&apos;en r\u00e9novation. Trouvez un architecte qui ma\u00eetrise
            ces sujets sur{" "}
            <Link href="/architectes" className="text-[#b5522a] underline">
              Bati.ma
            </Link>.
          </p>
        </div>

        <h2>Int\u00e9grateurs domotiques au Maroc</h2>
        <p>
          Le Maroc compte d\u00e9sormais plusieurs int\u00e9grateurs certifi\u00e9s KNX \u00e0 Casablanca et
          Marrakech. Ces professionnels con\u00e7oivent, installent et programment les syst\u00e8mes
          domotiques en collaboration avec votre architecte. Privil\u00e9giez un int\u00e9grateur
          certifi\u00e9 par le fabricant de la solution choisie pour garantir la qualit\u00e9
          de l&apos;installation.
        </p>

        <h2>R\u00e9glementation et normes</h2>
        <p>
          Au Maroc, il n&apos;existe pas encore de r\u00e9glementation sp\u00e9cifique \u00e0 la domotique.
          Cependant, les installations \u00e9lectriques doivent respecter la norme NM 06.1.001
          et les r\u00e8gles de s\u00e9curit\u00e9 incendie. Pour les syst\u00e8mes KNX, la certification
          europ\u00e9enne fait r\u00e9f\u00e9rence. Assurez-vous que votre int\u00e9grateur respecte ces
          standards.
        </p>

        <h2>Domotique et valeur immobili\u00e8re</h2>
        <p>
          Un bien \u00e9quip\u00e9 en domotique se valorise en moyenne 5 \u00e0 10 % de plus sur le
          march\u00e9 immobilier marocain. C&apos;est un argument de vente fort pour les villas
          haut standing \u00e0{" "}
          <Link href="/architectes/casablanca" className="text-[#b5522a] underline">Casablanca</Link>,{" "}
          <Link href="/architectes/marrakech" className="text-[#b5522a] underline">Marrakech</Link> et{" "}
          <Link href="/architectes/rabat" className="text-[#b5522a] underline">Rabat</Link>.
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
