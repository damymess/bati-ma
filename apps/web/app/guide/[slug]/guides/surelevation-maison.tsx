export default function GuideSurelevation() {
  const faq = [
    { q: "Peut-on ajouter un \u00e9tage \u00e0 n&apos;importe quelle maison au Maroc ?", a: "Non, cela d\u00e9pend de plusieurs facteurs : la capacit\u00e9 portante des fondations existantes (v\u00e9rifi\u00e9e par une \u00e9tude structurelle), le r\u00e8glement d&apos;urbanisme de la zone (COS et hauteur maximale autoris\u00e9e), et le nombre d&apos;\u00e9tages d\u00e9j\u00e0 pr\u00e9vus dans le permis initial. Une \u00e9tude technique pr\u00e9alable par un bureau d&apos;\u00e9tudes agr\u00e9\u00e9 est indispensable." },
    { q: "Combien co\u00fbte une sur\u00e9l\u00e9vation au Maroc ?", a: "Le co\u00fbt se situe entre 3 500 et 6 000 MAD/m\u00b2, incluant le renforcement structurel, le gros \u0153uvre, les finitions et la mise aux normes \u00e9lectrique et plomberie. Pour une maison de 100 m\u00b2 au sol, la sur\u00e9l\u00e9vation d&apos;un \u00e9tage complet revient donc entre 350 000 et 600 000 MAD." },
    { q: "Faut-il un nouveau permis de construire pour une sur\u00e9l\u00e9vation ?", a: "Oui, la sur\u00e9l\u00e9vation constitue une modification de la construction existante et n\u00e9cessite un permis de construire modificatif (article 40 de la loi 12-90). Le dossier comprend les plans de l&apos;\u00e9tat existant, les plans projet\u00e9s, l&apos;\u00e9tude structurelle et les plans sign\u00e9s par un architecte agr\u00e9\u00e9." },
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
        <h2>Pourquoi sur\u00e9lever sa maison au Maroc ?</h2>
        <p>
          Face \u00e0 la hausse des prix du foncier urbain et aux besoins croissants des familles marocaines, la sur\u00e9l\u00e9vation (ajout d&apos;un ou plusieurs \u00e9tages) est une solution avantageuse. Elle permet de doubler la surface habitable sans acheter un nouveau terrain, tout en restant dans son quartier. C&apos;est aussi une pratique courante pour cr\u00e9er un logement ind\u00e9pendant pour les enfants mari\u00e9s ou g\u00e9n\u00e9rer un revenu locatif.
        </p>

        <h2>\u00c9tude structurelle : l&apos;\u00e9tape incontournable</h2>
        <p>
          Avant tout projet de sur\u00e9l\u00e9vation, un bureau d&apos;\u00e9tudes techniques (BET) doit r\u00e9aliser un diagnostic complet de la structure existante. Cette \u00e9tude (5 000 \u00e0 15 000 MAD) analyse les fondations, les poteaux, les poutres et les dalles pour d\u00e9terminer si la structure peut supporter le poids suppl\u00e9mentaire. Conform\u00e9ment au R\u00e8glement de Construction Parasismique RPS 2011, la v\u00e9rification sismique est obligatoire dans les zones \u00e0 risque (Agadir, Al Hoce\u00efma, R\u00e9gion du Rif).
        </p>
        <p>
          Si les fondations sont insuffisantes, un renforcement est n\u00e9cessaire : micropieux (15 000 \u00e0 30 000 MAD l&apos;unit\u00e9), chemisage des poteaux (ajout de b\u00e9ton arm\u00e9 autour des poteaux existants) ou ajout de voiles de contreventement. Ces travaux de renforcement peuvent repr\u00e9senter 15 \u00e0 30 % du budget total.
        </p>

        <h2>R\u00e9glementation et permis</h2>
        <p>
          La sur\u00e9l\u00e9vation est soumise au Plan d&apos;Am\u00e9nagement de la commune, qui fixe la hauteur maximale autoris\u00e9e et le Coefficient d&apos;Occupation au Sol (COS). En zone R+2, vous ne pouvez pas d\u00e9passer R+2 sauf d\u00e9rogation. Le dossier de permis modificatif doit \u00eatre d\u00e9pos\u00e9 aupr\u00e8s de la commune avec les documents suivants :
        </p>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-300 px-3 py-2 text-left">Document</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Responsable</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Co\u00fbt estimatif (MAD)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Plans architecturaux (existant + projet)</td>
              <td className="border border-stone-300 px-3 py-2">Architecte agr\u00e9\u00e9</td>
              <td className="border border-stone-300 px-3 py-2">15 000 \u2013 40 000</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">\u00c9tude structurelle</td>
              <td className="border border-stone-300 px-3 py-2">Bureau d&apos;\u00e9tudes</td>
              <td className="border border-stone-300 px-3 py-2">5 000 \u2013 15 000</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Plans b\u00e9ton arm\u00e9</td>
              <td className="border border-stone-300 px-3 py-2">Ing\u00e9nieur structure</td>
              <td className="border border-stone-300 px-3 py-2">8 000 \u2013 20 000</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Titre foncier + certificat de propri\u00e9t\u00e9</td>
              <td className="border border-stone-300 px-3 py-2">Conservation Fonci\u00e8re</td>
              <td className="border border-stone-300 px-3 py-2">500 \u2013 2 000</td>
            </tr>
          </tbody>
        </table>

        <h2>D\u00e9roulement des travaux</h2>
        <p>
          Les travaux de sur\u00e9l\u00e9vation durent g\u00e9n\u00e9ralement 3 \u00e0 5 mois. La premi\u00e8re phase consiste \u00e0 pr\u00e9parer la dalle haute existante : d\u00e9molition de l&apos;acrot\u00e8re, v\u00e9rification des attentes (fers d&apos;armature laiss\u00e9s en attente lors de la construction initiale). Si les attentes sont absentes ou corrod\u00e9es, un sc\u00e9llement chimique est n\u00e9cessaire (r\u00e9sine \u00e9poxy + barres HA).
        </p>
        <p>
          Le gros \u0153uvre suit le processus classique : coffrage des poteaux et poutres, ferraillage, coulage du b\u00e9ton, puis construction des murs en briques creuses ou blocs de b\u00e9ton. L&apos;isolation thermique de la nouvelle toiture est essentielle (voir notre guide sur l&apos;isolation thermique). Pr\u00e9voyez \u00e9galement la mise \u00e0 jour du r\u00e9seau \u00e9lectrique et de la plomberie aux normes actuelles.
        </p>

        <h2>Points de vigilance</h2>
        <p>
          Les erreurs fr\u00e9quentes incluent : n\u00e9gliger l&apos;\u00e9tude structurelle (risque d&apos;effondrement), oublier l&apos;\u00e9tanch\u00e9it\u00e9 de la nouvelle terrasse, sous-dimensionner l&apos;escalier d&apos;acc\u00e8s et ne pas pr\u00e9voir les r\u00e9serves pour les r\u00e9seaux. Les travaux sans permis exposent \u00e0 des amendes de 10 000 \u00e0 100 000 MAD et \u00e0 un ordre de d\u00e9molition (article 71 de la loi 12-90).
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Ne commencez jamais une sur\u00e9l\u00e9vation sans \u00e9tude structurelle et permis de construire. Les \u00e9conomies r\u00e9alis\u00e9es en \u00e9vitant ces \u00e9tapes se transforment en co\u00fbts bien sup\u00e9rieurs en cas de probl\u00e8me. Sur Bati.ma, trouvez un architecte et un BET qualifi\u00e9s pour s\u00e9curiser votre projet de sur\u00e9l\u00e9vation.
          </p>
        </div>

        <h2>Alternatives \u00e0 la sur\u00e9l\u00e9vation</h2>
        <p>
          Si la structure ne le permet pas, envisagez l&apos;extension horizontale (si le terrain le permet), l&apos;am\u00e9nagement des combles (si toiture en pente) ou la construction l\u00e9g\u00e8re en structure m\u00e9tallique (plus l\u00e9g\u00e8re que le b\u00e9ton, donc moins de charge sur les fondations). La structure m\u00e9tallique co\u00fbte environ 4 000 \u00e0 7 000 MAD/m\u00b2 mais offre un gain de poids de 40 \u00e0 60 % par rapport au b\u00e9ton.
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
