import Link from "next/link";

export default function GuideMarcheBTP2026() {
  const faq = [
    {
      q: "Quelle est la taille du march\u00e9 BTP au Maroc en 2026 ?",
      a: "Le march\u00e9 BTP marocain repr\u00e9sente plus de 550 milliards MAD d&apos;investissements cumul\u00e9s sur la p\u00e9riode 2024-2030. Le secteur emploie directement plus de 500 000 personnes et contribue \u00e0 environ 6 % du PIB national. La croissance annuelle est estim\u00e9e entre 5 et 7 %.",
    },
    {
      q: "Quels sont les projets BTP les plus importants au Maroc en 2026 ?",
      a: "Les projets phares sont : la reconstruction d&apos;Al Haouz (120 milliards MAD), les infrastructures du Mondial 2030 (stades, LGV, h\u00f4tels), la ville nouvelle de Zenata (1 700 ha), Tanger Tech (2 000 ha) et les programmes de logements sociaux. Le NMD (Nouveau Mod\u00e8le de D\u00e9veloppement) acc\u00e9l\u00e8re tous ces chantiers.",
    },
    {
      q: "Comment un architecte peut-il profiter de la croissance BTP au Maroc ?",
      a: "Les architectes peuvent se sp\u00e9cialiser dans les segments en croissance (h\u00f4tellerie, infrastructure sportive, \u00e9co-construction), r\u00e9pondre aux appels d&apos;offres publics, former des partenariats avec des promoteurs et des cabinets internationaux, et d\u00e9velopper des comp\u00e9tences BIM et construction durable.",
    },
    { q: "Faut-il un architecte pour un projet de marche btp 2026 ?", a: "Conform\u00e9ment \u00e0 la loi 16-89, le recours \u00e0 un architecte inscrit \u00e0 l\u2019Ordre est obligatoire pour toute construction au Maroc. M\u00eame pour les projets techniques, l\u2019architecte coordonne le permis de construire et assure la conformit\u00e9. Consultez les profils v\u00e9rifi\u00e9s sur Bati.ma." },
    { q: "Comment obtenir un devis pour marche btp 2026 ?", a: "Demandez au minimum 3 devis d\u00e9taill\u00e9s aupr\u00e8s de professionnels diff\u00e9rents. Comparez les postes ligne par ligne, v\u00e9rifiez les r\u00e9f\u00e9rences et exigez un calendrier d\u2019ex\u00e9cution. Sur Bati.ma, vous pouvez contacter directement les architectes sp\u00e9cialis\u00e9s et demander vos devis gratuitement." },
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
        <h2>Un march\u00e9 BTP en pleine expansion</h2>
        <p>
          Le march\u00e9 de la construction au Maroc conna\u00eet une dynamique exceptionnelle en 2026. Port\u00e9 par la pr\u00e9paration du Mondial 2030, le programme de reconstruction d&apos;Al Haouz et le Nouveau Mod\u00e8le de D\u00e9veloppement, le secteur BTP mobilise des investissements massifs de plus de <strong>550 milliards MAD</strong> et g\u00e9n\u00e8re plus de <strong>500 000 emplois</strong> directs.
        </p>

        <h2>Chiffres cl\u00e9s du BTP marocain en 2026</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Indicateur</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Valeur 2026</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">Investissements cumul\u00e9s 2024-2030</td><td className="border border-stone-200 px-3 py-2">550+ milliards MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Emplois directs</td><td className="border border-stone-200 px-3 py-2">500 000+</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Architectes inscrits CNOA</td><td className="border border-stone-200 px-3 py-2">2 700+</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Croissance annuelle</td><td className="border border-stone-200 px-3 py-2">5 \u00e0 7 %</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Part du PIB</td><td className="border border-stone-200 px-3 py-2">~6 %</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Production de ciment</td><td className="border border-stone-200 px-3 py-2">15+ millions de tonnes/an</td></tr>
          </tbody>
        </table>

        <h2>Segments porteurs</h2>
        <p>
          Le segment r\u00e9sidentiel reste dominant (logements sociaux, moyen standing, luxe), mais les segments h\u00f4tellerie-tourisme, infrastructure de transport et \u00e9quipements sportifs connaissent la plus forte croissance. L&apos;\u00e9co-construction et la r\u00e9novation \u00e9nerg\u00e9tique gagnent aussi en importance avec la RTCM.
        </p>

        <h2>Projets phares en 2026</h2>
        <p>
          La <strong>reconstruction d&apos;Al Haouz</strong> mobilise 120 milliards MAD pour reconstruire les villages touch\u00e9s par le s\u00e9isme de 2023. La <strong>ville nouvelle de Zenata</strong> (1 700 hectares pr\u00e8s de Casablanca) accueillera 300 000 habitants. <strong>Tanger Tech</strong> (2 000 hectares) cr\u00e9e une zone industrielle high-tech. Les <strong>stades du Mondial 2030</strong> repr\u00e9sentent plus de 20 milliards MAD.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm font-semibold text-[#b5522a] mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Avec plus de 2 700 architectes inscrits pour des dizaines de milliers de projets, la demande d\u00e9passe l&apos;offre. C&apos;est le moment de renforcer votre visibilit\u00e9 sur{" "}
            <Link href="/architectes" className="text-[#b5522a] underline">Bati.ma</Link> et de vous sp\u00e9cialiser.
          </p>
        </div>

        <h2>Perspectives 2026-2030</h2>
        <p>
          Le march\u00e9 devrait maintenir sa croissance de 5 \u00e0 7 % par an jusqu&apos;en 2030. Les grands catalyseurs sont le Mondial, le NMD, la poursuite de l&apos;urbanisation (65 % de la population sera urbaine en 2030) et la transition \u00e9nerg\u00e9tique. Les architectes ma\u00eetrisant le BIM, la construction durable et l&apos;architecture parasismique seront les plus demand\u00e9s.
        </p>

        <h2>R\u00f4le des architectes dans cette croissance</h2>
        <p>
          Les architectes marocains sont au c\u0153ur de cette transformation. La loi 16-89 les rend incontournables pour tout projet de construction. Les opportunit\u00e9s couvrent les march\u00e9s publics (appels d&apos;offres), les projets priv\u00e9s (promoteurs, particuliers) et les partenariats internationaux. La sp\u00e9cialisation et la formation continue sont les cl\u00e9s du succ\u00e8s.
        </p>

        <h2>Acc\u00e9der aux march\u00e9s publics</h2>
        <p>
          Les march\u00e9s publics sont publi\u00e9s sur le portail marchespublics.gov.ma. L&apos;inscription est obligatoire pour r\u00e9pondre aux appels d&apos;offres. Les architectes peuvent se grouper en \u00e9quipe (groupement) pour les grands projets. Le dossier technique et les r\u00e9f\u00e9rences sont d\u00e9terminants dans la s\u00e9lection.
        </p>

        <p className="mt-6 text-sm text-stone-500">
          D\u00e9veloppez votre activit\u00e9 sur{" "}
          <Link href="/architectes" className="text-[#b5522a] underline">
            Bati.ma \u2014 Plateforme des architectes
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
