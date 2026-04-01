import Link from "next/link";

export default function GuideConcours2026() {
  const faq = [
    {
      q: "Quels concours d&apos;architecture sont ouverts aux Marocains en 2026 ?",
      a: "Les principaux concours accessibles en 2026 sont : le Prix Aga Khan (1 000 000 USD), le World Architecture Festival (30+ cat\u00e9gories), le Tamayouz (monde arabe), les LafargeHolcim Awards (200 000 USD/r\u00e9gion), les concours CNOA nationaux, Archiprix International et le Young Architects Prize RIBA.",
    },
    {
      q: "Comment participer au Prix Aga Khan depuis le Maroc ?",
      a: "Les candidatures sont soumises en ligne sur le site de la fondation Aga Khan. Les projets doivent \u00eatre achev\u00e9s depuis au moins 2 ans. L&apos;inscription est gratuite et ouverte aux projets r\u00e9alis\u00e9s dans les pays musulmans. Le jury international s\u00e9lectionne des projets exemplaires tous les 3 ans.",
    },
    {
      q: "Participer \u00e0 un concours international aide-t-il la carri\u00e8re d&apos;un architecte marocain ?",
      a: "Absolument. M\u00eame sans gagner, la participation apporte une visibilit\u00e9 internationale, enrichit le portfolio et ouvre des opportunit\u00e9s de collaboration. Les laur\u00e9ats b\u00e9n\u00e9ficient d&apos;une couverture m\u00e9diatique mondiale, de prix financiers cons\u00e9quents et d&apos;un r\u00e9seau professionnel \u00e9largi.",
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
        <h2>Pourquoi participer \u00e0 des concours internationaux d&apos;architecture</h2>
        <p>
          Les concours d&apos;architecture offrent aux professionnels marocains une plateforme pour se mesurer aux meilleurs cabinets mondiaux. En 2026, avec le Mondial 2030 en pr\u00e9paration et les grands chantiers en cours, le Maroc attire l&apos;attention internationale. C&apos;est le moment id\u00e9al pour les architectes marocains de br\u00e8ller sur la sc\u00e8ne mondiale.
        </p>

        <h2>1. Prix Aga Khan d&apos;Architecture</h2>
        <p>
          Cr\u00e9\u00e9 en 1977, c&apos;est le prix d&apos;architecture le plus prestigieux du monde musulman. Dotation : <strong>1 000 000 USD</strong> partag\u00e9s entre les laur\u00e9ats. Le prix est d\u00e9cern\u00e9 tous les 3 ans \u00e0 des projets achev\u00e9s qui am\u00e9liorent la qualit\u00e9 de vie. Le Maroc a d\u00e9j\u00e0 \u00e9t\u00e9 distingu\u00e9 pour des projets de restauration de m\u00e9dinas. Inscription gratuite, soumission en ligne.
        </p>

        <h2>2. World Architecture Festival (WAF)</h2>
        <p>
          Le plus grand festival d&apos;architecture au monde r\u00e9unit plus de 2 000 professionnels. Plus de <strong>30 cat\u00e9gories</strong> (r\u00e9sidentiel, commercial, paysage, int\u00e9rieur). Les finalistes pr\u00e9sentent leurs projets devant un jury international. Frais d&apos;inscription : environ 350 \u00e0 500 EUR par projet. D\u00e9lai de soumission : g\u00e9n\u00e9ralement juin-juillet pour le festival d&apos;automne.
        </p>

        <h2>3. Prix Tamayouz d&apos;Excellence</h2>
        <p>
          D\u00e9di\u00e9 aux jeunes architectes du monde arabe et du Moyen-Orient. Cat\u00e9gories : Young Architect Award, Women in Architecture, Student Award. <strong>Inscription gratuite</strong>. Les laur\u00e9ats re\u00e7oivent un troph\u00e9e, une publication internationale et une couverture m\u00e9diatique. Date limite g\u00e9n\u00e9ralement en mars-avril.
        </p>

        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Concours</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Dotation</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Fr\u00e9quence</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Inscription</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">Aga Khan</td><td className="border border-stone-200 px-3 py-2">1 000 000 USD</td><td className="border border-stone-200 px-3 py-2">Tous les 3 ans</td><td className="border border-stone-200 px-3 py-2">Gratuite</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">WAF</td><td className="border border-stone-200 px-3 py-2">Troph\u00e9e + visibilit\u00e9</td><td className="border border-stone-200 px-3 py-2">Annuel</td><td className="border border-stone-200 px-3 py-2">350-500 EUR</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Tamayouz</td><td className="border border-stone-200 px-3 py-2">Troph\u00e9e + publication</td><td className="border border-stone-200 px-3 py-2">Annuel</td><td className="border border-stone-200 px-3 py-2">Gratuite</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">LafargeHolcim</td><td className="border border-stone-200 px-3 py-2">200 000 USD / r\u00e9gion</td><td className="border border-stone-200 px-3 py-2">Tous les 3 ans</td><td className="border border-stone-200 px-3 py-2">Gratuite</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">CNOA National</td><td className="border border-stone-200 px-3 py-2">Variable</td><td className="border border-stone-200 px-3 py-2">Selon projets</td><td className="border border-stone-200 px-3 py-2">R\u00e9serv\u00e9 CNOA</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Archiprix</td><td className="border border-stone-200 px-3 py-2">Troph\u00e9e + exposition</td><td className="border border-stone-200 px-3 py-2">Annuel</td><td className="border border-stone-200 px-3 py-2">Via \u00e9cole</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">RIBA Young Architects</td><td className="border border-stone-200 px-3 py-2">Publication + r\u00e9seau</td><td className="border border-stone-200 px-3 py-2">Annuel</td><td className="border border-stone-200 px-3 py-2">Payante</td></tr>
          </tbody>
        </table>

        <h2>4. LafargeHolcim Awards (construction durable)</h2>
        <p>
          Ax\u00e9 sur la construction durable, ce prix r\u00e9gional Afrique-Moyen-Orient offre <strong>200 000 USD</strong> par r\u00e9gion. Ouvert aux projets non encore construits. Les crit\u00e8res incluent l&apos;innovation, la durabilit\u00e9 environnementale et l&apos;impact social. Inscription gratuite, soumission en ligne.
        </p>

        <h2>5. Concours nationaux CNOA</h2>
        <p>
          L&apos;Ordre des Architectes organise r\u00e9guli\u00e8rement des concours pour les projets publics (\u00e9quipements, espaces urbains, logements sociaux). R\u00e9serv\u00e9s aux architectes inscrits au CNOA. Ces concours sont une excellente porte d&apos;entr\u00e9e pour les march\u00e9s publics et offrent une visibilit\u00e9 nationale.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm font-semibold text-[#b5522a] mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Mettez en avant vos prix et participations \u00e0 des concours sur votre profil{" "}
            <Link href="/architectes" className="text-[#b5522a] underline">Bati.ma</Link>. C&apos;est un gage de qualit\u00e9 recherch\u00e9 par les clients.
          </p>
        </div>

        <h2>6. Archiprix International</h2>
        <p>
          R\u00e9serv\u00e9 aux meilleurs projets de fin d&apos;\u00e9tudes, soumis par les \u00e9coles d&apos;architecture. Les \u00e9coles marocaines (ENA Rabat, INAU, etc.) peuvent pr\u00e9senter leurs meilleurs dipl\u00f4m\u00e9s. Les laur\u00e9ats b\u00e9n\u00e9ficient d&apos;une exposition internationale et d&apos;une publication.
        </p>

        <h2>7. RIBA Young Architects Prize</h2>
        <p>
          Le Royal Institute of British Architects d\u00e9cerne ce prix aux architectes de moins de 40 ans. Ouvert aux praticiens internationaux. C&apos;est un tremplin vers le march\u00e9 anglo-saxon et une reconnaissance mondiale. Les candidatures sont \u00e9valu\u00e9es sur le portfolio complet.
        </p>

        <p className="mt-6 text-sm text-stone-500">
          Valorisez votre profil professionnel sur{" "}
          <Link href="/architectes" className="text-[#b5522a] underline">
            Bati.ma \u2014 Annuaire des architectes
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
