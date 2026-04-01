import Link from "next/link";

export default function GuideVillaModerneMaroc() {
  const faq = [
    {
      q: "Quel est le prix moyen d\u2019une villa moderne au Maroc en 2026 ?",
      a: "Le co\u00fbt de construction d\u2019une villa moderne varie entre 5 000 et 12 000 MAD/m\u00b2 selon la ville, les mat\u00e9riaux et le standing. Pour une villa de 200 m\u00b2, comptez entre 1 000 000 et 2 400 000 MAD hors terrain. \u00c0 Casablanca et Marrakech, les tarifs sont plus \u00e9lev\u00e9s qu\u2019\u00e0 K\u00e9nitra ou Tanger.",
    },
    {
      q: "Quels mat\u00e9riaux privil\u00e9gier pour une villa moderne au Maroc ?",
      a: "Les mat\u00e9riaux les plus utilis\u00e9s sont le b\u00e9ton arm\u00e9 pour la structure, la brique thermique ou le thermopierre pour l\u2019isolation, l\u2019aluminium \u00e0 rupture de pont thermique pour les baies vitr\u00e9es et la pierre naturelle locale pour les fa\u00e7ades. Le tadelakt et le zellige restent tr\u00e8s demand\u00e9s pour les touches marocaines.",
    },
    {
      q: "Faut-il un architecte pour construire une villa moderne au Maroc ?",
      a: "Oui, la loi 16-89 impose le recours \u00e0 un architecte inscrit \u00e0 l\u2019Ordre pour tout projet d\u00e9passant 150 m\u00b2. M\u00eame en dessous, un architecte garantit un design optimis\u00e9, le respect des normes parasismiques RPS 2000 et un suivi de chantier professionnel.",
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
        <h2>Les tendances de la villa moderne au Maroc en 2026</h2>
        <p>
          La villa moderne au Maroc conjugue lignes \u00e9pur\u00e9es, grandes baies vitr\u00e9es et
          int\u00e9gration de l&apos;identit\u00e9 architecturale marocaine. En 2026, trois styles dominent :
          le <strong>minimaliste m\u00e9diterran\u00e9en</strong>, le <strong>contemporain avec patio
          int\u00e9rieur</strong> et le <strong>bioclimatique</strong> adapt\u00e9 au climat marocain.
        </p>

        <h2>Styles architecturaux populaires</h2>
        <ul>
          <li><strong>Cubique minimaliste</strong> : toits plats, volumes g\u00e9om\u00e9triques, fa\u00e7ades blanches</li>
          <li><strong>N\u00e9o-marocain</strong> : arches, moucharabiehs revisit\u00e9s, tadelakt contemporain</li>
          <li><strong>Villa tropicale</strong> : v\u00e9g\u00e9tation int\u00e9gr\u00e9e, terrasses couvertes, piscine \u00e0 d\u00e9bordement</li>
          <li><strong>Bioclimatique</strong> : orientation solaire, ventilation naturelle, isolation renforc\u00e9e</li>
        </ul>

        <h2>Plans types et surfaces courantes</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Type</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Surface</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Budget construction</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">Villa R+1 standing</td><td className="border border-stone-200 px-3 py-2">200 - 300 m\u00b2</td><td className="border border-stone-200 px-3 py-2">1,2 - 2,5 M MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Villa plain-pied</td><td className="border border-stone-200 px-3 py-2">150 - 200 m\u00b2</td><td className="border border-stone-200 px-3 py-2">900 K - 1,6 M MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Villa luxe avec piscine</td><td className="border border-stone-200 px-3 py-2">300 - 500 m\u00b2</td><td className="border border-stone-200 px-3 py-2">2,5 - 6 M MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Mini villa \u00e9conomique</td><td className="border border-stone-200 px-3 py-2">100 - 150 m\u00b2</td><td className="border border-stone-200 px-3 py-2">500 K - 900 K MAD</td></tr>
          </tbody>
        </table>

        <h2>Piscine, jardin et am\u00e9nagements ext\u00e9rieurs</h2>
        <p>
          La piscine est devenue un incontournable des villas modernes au Maroc. Un bassin de
          8\u00d74 m co\u00fbte entre 120 000 et 250 000 MAD. L&apos;am\u00e9nagement paysager (jardin, terrasse,
          pergola) repr\u00e9sente en moyenne 10 \u00e0 15 % du budget total. Les syst\u00e8mes d&apos;irrigation
          goutte-\u00e0-goutte sont recommand\u00e9s pour \u00e9conomiser l&apos;eau.
        </p>

        <h2>Int\u00e9gration du style marocain dans le moderne</h2>
        <p>
          Les architectes marocains excellent dans la fusion tradition-modernit\u00e9 : patio
          central revisit\u00e9, zellige dans les salles de bain, tadelakt dans les espaces de
          r\u00e9ception, menuiserie en bois de c\u00e8dre et moucharabiehs m\u00e9talliques contemporains.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm font-semibold text-[#b5522a] mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Trouvez un architecte sp\u00e9cialis\u00e9 en villas modernes sur{" "}
            <Link href="/architectes" className="text-[#b5522a] underline">
              Bati.ma
            </Link>. Comparez les portfolios et demandez plusieurs devis gratuitement.
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
