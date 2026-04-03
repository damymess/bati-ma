export default function GuideConstructionHotel() {
  const faq = [
    { q: "Quel budget pour construire un h\u00f4tel au Maroc ?", a: "Le budget varie selon la classification vis\u00e9e. Un h\u00f4tel 2 \u00e9toiles de 30 chambres co\u00fbte entre 8 et 15 millions MAD. Un 4 \u00e9toiles de 80 chambres se situe entre 40 et 80 millions MAD. Un 5 \u00e9toiles d\u00e9passe les 120 millions MAD. Ces montants incluent le gros \u0153uvre, les finitions, l&apos;\u00e9quipement et l&apos;am\u00e9nagement ext\u00e9rieur." },
    { q: "Quelles sont les normes de classification h\u00f4teli\u00e8re au Maroc ?", a: "La classification est r\u00e9gie par l&apos;arr\u00eat\u00e9 du Minist\u00e8re du Tourisme (d\u00e9cret 2-02-640). Les crit\u00e8res portent sur la surface minimale des chambres (12 m\u00b2 pour 1 \u00e9toile, 24 m\u00b2 pour 5 \u00e9toiles), les \u00e9quipements obligatoires (piscine \u00e0 partir de 4 \u00e9toiles), le ratio personnel/chambre et les services (restaurant, spa, conciergerie)." },
    { q: "La Coupe du Monde 2030 est-elle une opportunit\u00e9 pour l&apos;h\u00f4tellerie ?", a: "Le Maroc vise 200 000 lits suppl\u00e9mentaires pour le Mondial 2030. Le gouvernement propose des incitations fiscales (exon\u00e9rations de TVA, subventions fonci\u00e8res) dans les villes h\u00f4tes. Les r\u00e9gions de Casablanca, Rabat, Marrakech, Tanger, Agadir et F\u00e8s sont prioritaires. C&apos;est une fen\u00eatre d&apos;opportunit\u00e9 historique pour les investisseurs." },
  ];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="prose-content">
        <h2>Le march\u00e9 h\u00f4telier marocain en plein essor</h2>
        <p>
          Le Maroc a accueilli plus de 14 millions de touristes en 2024, et la perspective de la Coupe du Monde 2030 (co-organis\u00e9e avec l&apos;Espagne et le Portugal) cr\u00e9e une demande sans pr\u00e9c\u00e9dent en h\u00e9bergement. Le Minist\u00e8re du Tourisme estime le besoin \u00e0 200 000 lits additionnels, repr\u00e9sentant un investissement global de plus de 40 milliards de dirhams. Construire un h\u00f4tel au Maroc n&apos;a jamais \u00e9t\u00e9 aussi pertinent.
        </p>

        <h2>Classification et normes</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-300 px-3 py-2 text-left">Cat\u00e9gorie</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Surface chambre min.</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Co\u00fbt / chambre (MAD)</th>
              <th className="border border-stone-300 px-3 py-2 text-left">\u00c9quipements obligatoires</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-300 px-3 py-2">1 \u00e9toile</td>
              <td className="border border-stone-300 px-3 py-2">12 m\u00b2</td>
              <td className="border border-stone-300 px-3 py-2">150 000 \u2013 250 000</td>
              <td className="border border-stone-300 px-3 py-2">R\u00e9ception, climatisation</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">3 \u00e9toiles</td>
              <td className="border border-stone-300 px-3 py-2">16 m\u00b2</td>
              <td className="border border-stone-300 px-3 py-2">350 000 \u2013 550 000</td>
              <td className="border border-stone-300 px-3 py-2">Restaurant, bar, parking</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">4 \u00e9toiles</td>
              <td className="border border-stone-300 px-3 py-2">20 m\u00b2</td>
              <td className="border border-stone-300 px-3 py-2">550 000 \u2013 800 000</td>
              <td className="border border-stone-300 px-3 py-2">Piscine, spa, room service</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">5 \u00e9toiles</td>
              <td className="border border-stone-300 px-3 py-2">24 m\u00b2</td>
              <td className="border border-stone-300 px-3 py-2">1 000 000 \u2013 2 000 000</td>
              <td className="border border-stone-300 px-3 py-2">Conciergerie, spa complet, gastronomie</td>
            </tr>
          </tbody>
        </table>

        <h2>D\u00e9marches administratives</h2>
        <p>
          La construction d&apos;un h\u00f4tel n\u00e9cessite un parcours administratif sp\u00e9cifique. Au-del\u00e0 du permis de construire classique (loi 12-90), il faut obtenir l&apos;autorisation du Minist\u00e8re du Tourisme pour l&apos;exploitation. Le dossier comprend l&apos;\u00e9tude de faisabilit\u00e9 \u00e9conomique, le programme fonctionnel d\u00e9taill\u00e9, les plans architecturaux conformes aux normes de classification, l&apos;\u00e9tude d&apos;impact environnemental (obligatoire pour les projets de plus de 50 chambres selon la loi 12-03) et l&apos;avis de la commission r\u00e9gionale de tourisme.
        </p>
        <p>
          Pour les investissements sup\u00e9rieurs \u00e0 200 millions MAD, la Charte de l&apos;Investissement (loi-cadre 03-22) offre des avantages fiscaux significatifs : exon\u00e9ration de TVA sur les \u00e9quipements, participation de l&apos;\u00c9tat au foncier, et subventions pouvant atteindre 30 % du co\u00fbt du terrain.
        </p>

        <h2>L&apos;architecte sp\u00e9cialis\u00e9 en h\u00f4tellerie</h2>
        <p>
          Un h\u00f4tel n&apos;est pas un immeuble r\u00e9sidentiel. L&apos;architecte h\u00f4telier ma\u00eetrise les flux (clients, personnel, logistique), l&apos;acoustique entre chambres, les normes incendie sp\u00e9cifiques aux ERP (Etablissements Recevant du Public), la conception des cuisines professionnelles et l&apos;optimisation du ratio surfaces communes / surfaces h\u00e9bergement. Au Maroc, peu d&apos;agences sont v\u00e9ritablement sp\u00e9cialis\u00e9es dans ce domaine.
        </p>
        <p>
          Le programme fonctionnel type comprend : hall d&apos;accueil (minimum 50 m\u00b2 pour 3 \u00e9toiles), restaurant (1,5 m\u00b2 par couvert), cuisine (30 \u00e0 40 % de la surface restaurant), locaux techniques (15 \u00e0 20 % de la surface totale), circulations verticales aux normes PMR et sorties de secours r\u00e9glementaires.
        </p>

        <h2>Opportunit\u00e9s Mondial 2030</h2>
        <p>
          Les six villes h\u00f4tes marocaines (Casablanca, Rabat, Marrakech, Tanger, Agadir, F\u00e8s) b\u00e9n\u00e9ficient de programmes sp\u00e9ciaux. Le Fonds Mohammed VI pour l&apos;Investissement co-finance les projets h\u00f4teliers \u00e9ligibles. Les cat\u00e9gories les plus recherch\u00e9es sont les h\u00f4tels 3 et 4 \u00e9toiles (segment mass-market pour les supporters) et les appart-h\u00f4tels (s\u00e9jours de 2 \u00e0 4 semaines). La rentabilit\u00e9 projet\u00e9e est de 8 \u00e0 12 % pour les projets bien situ\u00e9s.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Un projet h\u00f4telier r\u00e9ussi commence par le choix du bon architecte. Privil\u00e9giez un cabinet ayant d\u00e9j\u00e0 r\u00e9alis\u00e9 des \u00e9tablissements class\u00e9s et ma\u00eetrisant les normes du Minist\u00e8re du Tourisme. Sur Bati.ma, filtrez les architectes par sp\u00e9cialit\u00e9 \u00ab h\u00f4tellerie et tourisme \u00bb pour trouver l&apos;expertise n\u00e9cessaire.
          </p>
        </div>

        <h2>Tendances architecturales h\u00f4teli\u00e8res</h2>
        <p>
          Les concepts qui s\u00e9duisent au Maroc : l&apos;h\u00f4tel-boutique (10 \u00e0 30 chambres, personnalisation forte), le riad de luxe (march\u00e9 de niche tr\u00e8s porteur \u00e0 Marrakech et F\u00e8s), l&apos;\u00e9co-lodge (tourisme durable en montagne ou d\u00e9sert) et le resort int\u00e9gr\u00e9 (avec golf, spa, r\u00e9sidences). La certification Green Key ou Green Globe devient un argument commercial majeur pour la client\u00e8le internationale.
        </p>
      </div>
      <section className="mt-10">
        <h2 className="text-xl font-bold text-stone-900 mb-5">Questions fr\u00e9quentes</h2>
        <div className="space-y-4">
          {faq.map((f) => (
            <details key={f.q} className="group border border-stone-200 rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between px-4 py-3 cursor-pointer text-sm font-medium text-stone-800 hover:bg-stone-50">{f.q}<span className="text-stone-400 group-open:rotate-180 transition-transform">\u2193</span></summary>
              <div className="px-4 pb-4 pt-1 text-sm text-stone-600 leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
