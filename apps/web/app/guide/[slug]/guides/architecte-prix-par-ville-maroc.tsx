import Link from "next/link";

export default function GuideArchitectePrixParVille() {
  const faq = [
    {
      q: "Quel est le tarif moyen d\u2019un architecte au Maroc en 2026 ?",
      a: "En 2026, les honoraires d\u2019un architecte au Maroc repr\u00e9sentent en moyenne 8 \u00e0 15 % du co\u00fbt des travaux pour une mission compl\u00e8te. En forfait, comptez entre 4 000 et 15 000 MAD pour un plan simple et entre 12 000 et 90 000 MAD pour une villa compl\u00e8te selon la ville et le standing du projet.",
    },
    {
      q: "Pourquoi les architectes de Casablanca et Marrakech sont-ils plus chers ?",
      a: "Casablanca et Marrakech concentrent la plus forte demande en construction haut standing, villas de luxe et projets touristiques. Les architectes y sont plus sp\u00e9cialis\u00e9s, les co\u00fbts de fonctionnement plus \u00e9lev\u00e9s et la concurrence pour les profils exp\u00e9riment\u00e9s plus intense, ce qui tire les honoraires vers le haut.",
    },
    {
      q: "Peut-on n\u00e9gocier les honoraires d\u2019un architecte au Maroc ?",
      a: "Oui, la n\u00e9gociation est courante. Demandez au moins 3 devis comparatifs, proposez une mission partielle (conception sans suivi de chantier) pour r\u00e9duire la facture, ou regroupez plusieurs projets pour obtenir un tarif d\u00e9gressif. Le mode de r\u00e9mun\u00e9ration (pourcentage, forfait, taux horaire) est \u00e9galement n\u00e9gociable.",
    },
    {
      q: "Que comprennent exactement les honoraires d\u2019un architecte ?",
      a: "Une mission compl\u00e8te comprend l\u2019esquisse, l\u2019avant-projet sommaire (APS), l\u2019avant-projet d\u00e9taill\u00e9 (APD), le dossier de permis de construire, les plans d\u2019ex\u00e9cution et le suivi de chantier jusqu\u2019\u00e0 la r\u00e9ception. Les \u00e9tudes techniques (BET, thermique, topographie) sont factur\u00e9es s\u00e9par\u00e9ment.",
    },
    {
      q: "Faut-il obligatoirement un architecte pour construire au Maroc ?",
      a: "Oui. La loi 16-89 impose le recours \u00e0 un architecte inscrit \u00e0 l\u2019Ordre National des Architectes pour toute demande de permis de construire au Maroc. M\u00eame les projets de petite taille n\u00e9cessitent la signature d\u2019un architecte agr\u00e9\u00e9 pour le d\u00e9p\u00f4t l\u00e9gal du dossier.",
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
        <h2>Quels sont les honoraires d&apos;un architecte au Maroc ?</h2>
        <p>
          Au Maroc, le co\u00fbt d&apos;un architecte d\u00e9pend fortement de la ville o\u00f9 se situe votre projet. Les \u00e9carts de tarifs entre Casablanca et B\u00e9ni Mellal peuvent atteindre 40 \u00e0 60 %, refl\u00e9tant les diff\u00e9rences de co\u00fbt de la vie, de demande en construction et de niveau de sp\u00e9cialisation des cabinets locaux. Comprendre ces \u00e9carts vous permet de mieux budg\u00e9tiser votre projet et d&apos;\u00e9viter les mauvaises surprises.
        </p>
        <p>
          Les honoraires d&apos;architecte au Maroc se d\u00e9clinent en trois modes de r\u00e9mun\u00e9ration principaux : le <strong>pourcentage du co\u00fbt des travaux</strong> (le plus courant pour les missions compl\u00e8tes), le <strong>forfait</strong> (pour les plans ou les missions bien d\u00e9finies) et le <strong>taux horaire</strong> (pour les consultations ponctuelles). Le choix du mode influe directement sur le montant final, et chaque ville pr\u00e9sente ses propres fourchettes.
        </p>
        <p>
          Conform\u00e9ment \u00e0 la <strong>loi 16-89</strong> r\u00e9gissant la profession d&apos;architecte au Maroc, le recours \u00e0 un architecte inscrit \u00e0 l&apos;Ordre est obligatoire pour tout projet n\u00e9cessitant un permis de construire. Les honoraires ne sont pas r\u00e9glement\u00e9s par un bar\u00e8me officiel, mais le Conseil National de l&apos;Ordre des Architectes (CNOA) publie des recommandations tarifaires qui servent de r\u00e9f\u00e9rence \u00e0 la profession.
        </p>

        <h2>Quel est le tarif des honoraires d&apos;un architecte par ville ?</h2>
        <p>
          Les honoraires d&apos;un architecte au Maroc varient de 8 &agrave; 18 % du co&ucirc;t des travaux selon la ville. &Agrave; Casablanca et Marrakech, comptez 10 &agrave; 15 % (voire 18 % pour les riads). &Agrave; F&egrave;s, Oujda ou B&eacute;ni Mellal, les tarifs descendent &agrave; 8-10 %. Voici le comparatif complet :
        </p>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Ville</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Pourcentage travaux</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Forfait plan simple</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Forfait villa compl\u00e8te</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Taux horaire</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">Casablanca</td><td className="border border-stone-200 px-3 py-2">10\u201315 %</td><td className="border border-stone-200 px-3 py-2">8 000\u201315 000 MAD</td><td className="border border-stone-200 px-3 py-2">30 000\u201380 000 MAD</td><td className="border border-stone-200 px-3 py-2">500\u2013800 MAD/h</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Rabat</td><td className="border border-stone-200 px-3 py-2">10\u201315 %</td><td className="border border-stone-200 px-3 py-2">7 000\u201312 000 MAD</td><td className="border border-stone-200 px-3 py-2">25 000\u201370 000 MAD</td><td className="border border-stone-200 px-3 py-2">400\u2013700 MAD/h</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Marrakech</td><td className="border border-stone-200 px-3 py-2">10\u201318 %</td><td className="border border-stone-200 px-3 py-2">8 000\u201315 000 MAD</td><td className="border border-stone-200 px-3 py-2">30 000\u201390 000 MAD</td><td className="border border-stone-200 px-3 py-2">500\u2013800 MAD/h</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Tanger</td><td className="border border-stone-200 px-3 py-2">8\u201312 %</td><td className="border border-stone-200 px-3 py-2">6 000\u201310 000 MAD</td><td className="border border-stone-200 px-3 py-2">20 000\u201360 000 MAD</td><td className="border border-stone-200 px-3 py-2">350\u2013600 MAD/h</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Agadir</td><td className="border border-stone-200 px-3 py-2">8\u201312 %</td><td className="border border-stone-200 px-3 py-2">5 000\u201310 000 MAD</td><td className="border border-stone-200 px-3 py-2">20 000\u201355 000 MAD</td><td className="border border-stone-200 px-3 py-2">300\u2013500 MAD/h</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">F\u00e8s</td><td className="border border-stone-200 px-3 py-2">8\u201312 %</td><td className="border border-stone-200 px-3 py-2">5 000\u20138 000 MAD</td><td className="border border-stone-200 px-3 py-2">18 000\u201350 000 MAD</td><td className="border border-stone-200 px-3 py-2">300\u2013500 MAD/h</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Mekn\u00e8s</td><td className="border border-stone-200 px-3 py-2">8\u201310 %</td><td className="border border-stone-200 px-3 py-2">4 000\u20138 000 MAD</td><td className="border border-stone-200 px-3 py-2">15 000\u201345 000 MAD</td><td className="border border-stone-200 px-3 py-2">250\u2013450 MAD/h</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">El Jadida</td><td className="border border-stone-200 px-3 py-2">8\u201312 %</td><td className="border border-stone-200 px-3 py-2">5 000\u20139 000 MAD</td><td className="border border-stone-200 px-3 py-2">18 000\u201350 000 MAD</td><td className="border border-stone-200 px-3 py-2">300\u2013500 MAD/h</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Oujda</td><td className="border border-stone-200 px-3 py-2">8\u201310 %</td><td className="border border-stone-200 px-3 py-2">4 000\u20138 000 MAD</td><td className="border border-stone-200 px-3 py-2">15 000\u201340 000 MAD</td><td className="border border-stone-200 px-3 py-2">250\u2013400 MAD/h</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">T\u00e9touan</td><td className="border border-stone-200 px-3 py-2">8\u201312 %</td><td className="border border-stone-200 px-3 py-2">5 000\u20139 000 MAD</td><td className="border border-stone-200 px-3 py-2">18 000\u201350 000 MAD</td><td className="border border-stone-200 px-3 py-2">300\u2013500 MAD/h</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Nador</td><td className="border border-stone-200 px-3 py-2">8\u201310 %</td><td className="border border-stone-200 px-3 py-2">4 000\u20138 000 MAD</td><td className="border border-stone-200 px-3 py-2">15 000\u201345 000 MAD</td><td className="border border-stone-200 px-3 py-2">250\u2013450 MAD/h</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">B\u00e9ni Mellal</td><td className="border border-stone-200 px-3 py-2">8\u201310 %</td><td className="border border-stone-200 px-3 py-2">4 000\u20137 000 MAD</td><td className="border border-stone-200 px-3 py-2">12 000\u201340 000 MAD</td><td className="border border-stone-200 px-3 py-2">250\u2013400 MAD/h</td></tr>
          </tbody>
        </table>
        <p>
          <strong>Lecture du tableau</strong> : le pourcentage s&apos;applique au montant total des travaux (hors terrain). Le forfait plan simple correspond \u00e0 la conception architecturale sans suivi de chantier. Le forfait villa compl\u00e8te inclut la conception, le permis de construire et le suivi int\u00e9gral du chantier jusqu&apos;\u00e0 la r\u00e9ception des travaux.
        </p>

        <h2>Pourquoi les architectes sont-ils plus chers &agrave; Casablanca et Marrakech ?</h2>
        <p>
          Les tarifs d&apos;architectes \u00e0 Casablanca et Marrakech sont syst\u00e9matiquement sup\u00e9rieurs \u00e0 ceux des autres villes marocaines. Plusieurs facteurs structurels expliquent ces \u00e9carts.
        </p>
        <ul>
          <li>
            <strong>Demande soutenue</strong> : Casablanca est le poumon \u00e9conomique du Maroc avec le plus grand volume de projets immobiliers (r\u00e9sidentiels, commerciaux, bureaux). Marrakech concentre les projets touristiques haut de gamme (riads, h\u00f4tels, villas de luxe). Cette forte demande maintient les tarifs \u00e0 la hausse.
          </li>
          <li>
            <strong>Sp\u00e9cialisation des cabinets</strong> : les architectes de ces deux villes disposent d&apos;une expertise plus pointue en design contemporain, construction durable et projets complexes. Leurs portfolios incluent des r\u00e9alisations haut de gamme qui justifient des honoraires plus \u00e9lev\u00e9s.
          </li>
          <li>
            <strong>Co\u00fbt de fonctionnement</strong> : loyer des bureaux, salaires des collaborateurs et charges fixes sont 30 \u00e0 50 % plus \u00e9lev\u00e9s \u00e0 Casablanca et Marrakech qu&apos;ailleurs au Maroc. Ces co\u00fbts se r\u00e9percutent naturellement sur les honoraires.
          </li>
          <li>
            <strong>Standing des projets</strong> : la client\u00e8le de ces villes est plus exigeante en termes de finitions, de mat\u00e9riaux et de d\u00e9tails architecturaux. Les missions sont plus longues et plus complexes, ce qui justifie une facturation sup\u00e9rieure.
          </li>
          <li>
            <strong>Pr\u00e9paratifs Mondial 2030</strong> : les grands projets d&apos;infrastructure li\u00e9s \u00e0 la Coupe du Monde 2030 (stades, h\u00f4tels, voiries) mobilisent de nombreux architectes exp\u00e9riment\u00e9s, r\u00e9duisant la disponibilit\u00e9 pour les projets priv\u00e9s et augmentant les tarifs.
          </li>
        </ul>
        <p>
          \u00c0 l&apos;inverse, les villes moyennes comme Mekn\u00e8s, Oujda, Nador ou B\u00e9ni Mellal offrent des tarifs plus accessibles. La concurrence entre cabinets y est moins intense, les co\u00fbts de fonctionnement plus bas et les projets g\u00e9n\u00e9ralement moins complexes. C&apos;est un avantage pour les ma\u00eetres d&apos;ouvrage avec un budget serr\u00e9, \u00e0 condition de v\u00e9rifier les r\u00e9f\u00e9rences et le portfolio de l&apos;architecte choisi.
        </p>

        <h2>Que comprennent les honoraires d&apos;un architecte au Maroc ?</h2>
        <p>
          Les honoraires d&apos;un architecte au Maroc couvrent un ensemble de prestations d\u00e9finies contractuellement. Pour une <strong>mission compl\u00e8te de ma\u00eetrise d&apos;\u0153uvre</strong>, voici ce qui est g\u00e9n\u00e9ralement inclus :
        </p>
        <ul>
          <li>
            <strong>Esquisse (ESQ)</strong> : premi\u00e8re \u00e9bauche du projet \u00e0 partir du programme du client. L&apos;architecte propose une ou plusieurs esquisses volumiques et fonctionnelles pour valider le parti architectural.
          </li>
          <li>
            <strong>Avant-Projet Sommaire (APS)</strong> : d\u00e9finition pr\u00e9cise des surfaces, de la disposition des pi\u00e8ces, des fa\u00e7ades et du budget pr\u00e9visionnel. L&apos;APS sert de base \u00e0 la discussion et aux ajustements avant de passer \u00e0 l&apos;\u00e9tape suivante.
          </li>
          <li>
            <strong>Avant-Projet D\u00e9taill\u00e9 (APD)</strong> : plans cot\u00e9s \u00e0 l&apos;\u00e9chelle, coupes, \u00e9l\u00e9vations, description des mat\u00e9riaux et estimation d\u00e9taill\u00e9e des co\u00fbts. L&apos;APD constitue le dossier technique d\u00e9finitif.
          </li>
          <li>
            <strong>Dossier de permis de construire</strong> : pr\u00e9paration et d\u00e9p\u00f4t du dossier complet aupr\u00e8s de la commune (plans, pi\u00e8ces administratives, formulaires). L&apos;architecte assure le suivi jusqu&apos;\u00e0 l&apos;obtention du permis.
          </li>
          <li>
            <strong>Plans d&apos;ex\u00e9cution</strong> : documents techniques d\u00e9taill\u00e9s destin\u00e9s aux entreprises de construction. Ils pr\u00e9cisent chaque d\u00e9tail : dimensions, mat\u00e9riaux, points de raccordement, finitions.
          </li>
          <li>
            <strong>Suivi de chantier</strong> : visites r\u00e9guli\u00e8res pour v\u00e9rifier la conformit\u00e9 des travaux avec les plans, coordonner les intervenants, valider les \u00e9tapes cl\u00e9s et r\u00e9soudre les probl\u00e8mes techniques.
          </li>
          <li>
            <strong>R\u00e9ception des travaux</strong> : inspection finale, \u00e9tablissement du proc\u00e8s-verbal de r\u00e9ception et liste des r\u00e9serves \u00e9ventuelles \u00e0 lever par les entreprises.
          </li>
        </ul>
        <p>
          Pour en savoir plus sur les phases de mission, consultez notre{" "}
          <Link href="/guide/contrat-architecte-maroc" className="text-[#b5522a] underline">guide du contrat d&apos;architecte au Maroc</Link>.
        </p>

        <h2>Quelles prestations ne sont pas incluses dans les honoraires ?</h2>
        <p>
          Certaines prestations techniques sont syst\u00e9matiquement factur\u00e9es en dehors des honoraires de l&apos;architecte. Il est important de les budg\u00e9tiser s\u00e9par\u00e9ment pour \u00e9viter les d\u00e9passements :
        </p>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Prestation externe</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Intervenant</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Co\u00fbt estimatif</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">\u00c9tude b\u00e9ton arm\u00e9 (structure)</td><td className="border border-stone-200 px-3 py-2">Bureau d&apos;\u00e9tudes techniques (BET)</td><td className="border border-stone-200 px-3 py-2">8 000\u201340 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">\u00c9tude thermique (RTCM)</td><td className="border border-stone-200 px-3 py-2">BET thermique</td><td className="border border-stone-200 px-3 py-2">5 000\u201315 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">\u00c9tude de sol (g\u00e9otechnique)</td><td className="border border-stone-200 px-3 py-2">Laboratoire agr\u00e9\u00e9</td><td className="border border-stone-200 px-3 py-2">8 000\u201325 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Lev\u00e9 topographique</td><td className="border border-stone-200 px-3 py-2">G\u00e9om\u00e8tre-topographe</td><td className="border border-stone-200 px-3 py-2">3 000\u201310 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">VRD (voirie et r\u00e9seaux divers)</td><td className="border border-stone-200 px-3 py-2">BET VRD</td><td className="border border-stone-200 px-3 py-2">5 000\u201320 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">\u00c9tude \u00e9lectrique et CVC</td><td className="border border-stone-200 px-3 py-2">BET fluides</td><td className="border border-stone-200 px-3 py-2">5 000\u201325 000 MAD</td></tr>
          </tbody>
        </table>
        <p>
          Au total, ces prestations externes repr\u00e9sentent 2 \u00e0 5 % du co\u00fbt total des travaux. L&apos;architecte coordonne g\u00e9n\u00e9ralement ces intervenants mais ne r\u00e9alise pas lui-m\u00eame ces \u00e9tudes. Pour une villa standard, pr\u00e9voyez un budget suppl\u00e9mentaire de <strong>30 000 \u00e0 100 000 MAD</strong> pour l&apos;ensemble des \u00e9tudes techniques.
        </p>

        <h2>Comment n&eacute;gocier les honoraires de son architecte au Maroc ?</h2>
        <p>
          Les honoraires d&apos;architecte ne sont pas fig\u00e9s. Voici les leviers concrets pour obtenir un meilleur tarif sans compromettre la qualit\u00e9 de la prestation :
        </p>
        <ol>
          <li>
            <strong>Comparez au moins 3 devis</strong> : c&apos;est la r\u00e8gle d&apos;or. Sollicitez trois architectes de votre ville pour le m\u00eame programme et comparez les prestations poste par poste, pas uniquement le montant global. Sur{" "}
            <Link href="/demande-devis" className="text-[#b5522a] underline">Bati.ma</Link>, vous pouvez demander des devis gratuits en quelques clics.
          </li>
          <li>
            <strong>Optez pour une mission partielle</strong> : si votre budget est limit\u00e9, confiez uniquement la conception et le permis de construire \u00e0 l&apos;architecte. Le suivi de chantier peut \u00eatre assur\u00e9 par un ma\u00eetre d&apos;\u0153uvre ou un conducteur de travaux \u00e0 moindre co\u00fbt. Les honoraires passent alors de 10\u201315 % \u00e0 5\u20138 % du budget travaux.
          </li>
          <li>
            <strong>N\u00e9gociez le mode de r\u00e9mun\u00e9ration</strong> : pour un projet dont le budget est bien d\u00e9fini, le forfait est souvent plus avantageux que le pourcentage. Pour un projet \u00e9volutif, le pourcentage prot\u00e8ge mieux l&apos;architecte et peut entra\u00eener un meilleur engagement.
          </li>
          <li>
            <strong>Jouez sur le volume</strong> : si vous avez plusieurs projets (lotissement, immeuble multi-lots), n\u00e9gociez un tarif d\u00e9gressif. Les architectes sont ouverts \u00e0 r\u00e9duire leur pourcentage de 1 \u00e0 3 points pour des missions r\u00e9currentes.
          </li>
          <li>
            <strong>Pr\u00e9parez un programme d\u00e9taill\u00e9</strong> : plus votre cahier des charges est pr\u00e9cis (surfaces, nombre de pi\u00e8ces, budget, d\u00e9lais), moins l&apos;architecte passera de temps en allers-retours. Un programme bien ficel\u00e9 peut r\u00e9duire la facture de 10 \u00e0 15 %.
          </li>
          <li>
            <strong>Exigez un contrat \u00e9crit</strong> : les honoraires, le p\u00e9rim\u00e8tre de mission et les \u00e9ch\u00e9ances de paiement doivent \u00eatre formalis\u00e9s par \u00e9crit. Consultez notre{" "}
            <Link href="/guide/contrat-architecte-maroc" className="text-[#b5522a] underline">guide du contrat d&apos;architecte</Link>{" "}
            pour les clauses essentielles.
          </li>
        </ol>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm font-semibold text-[#b5522a] mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Ne choisissez jamais un architecte uniquement sur le prix. V\u00e9rifiez son inscription \u00e0 l&apos;Ordre, consultez son portfolio et demandez des r\u00e9f\u00e9rences de clients r\u00e9cents. Un architecte moins cher mais incomp\u00e9tent peut co\u00fbter bien plus cher en erreurs de conception et en retards de chantier. Comparez les profils v\u00e9rifi\u00e9s sur{" "}
            <Link href="/demande-devis" className="text-[#b5522a] underline">Bati.ma</Link>{" "}
            et demandez vos devis gratuits.
          </p>
        </div>

        <h2>Trouver un architecte dans votre ville</h2>
        <p>
          Bati.ma r\u00e9f\u00e9rence des <strong>architectes v\u00e9rifi\u00e9s dans les 12 principales villes du Maroc</strong>. Chaque profil inclut le portfolio, les r\u00e9alisations, les sp\u00e9cialisations et les avis clients. Cliquez sur votre ville pour acc\u00e9der \u00e0 l&apos;annuaire local :
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-4">
          <Link href="/architecte/casablanca" className="block border border-stone-200 rounded-lg px-4 py-3 text-sm font-medium text-stone-800 hover:bg-stone-50 hover:border-[#b5522a]/30 transition-colors">
            Architectes \u00e0 Casablanca
          </Link>
          <Link href="/architecte/rabat" className="block border border-stone-200 rounded-lg px-4 py-3 text-sm font-medium text-stone-800 hover:bg-stone-50 hover:border-[#b5522a]/30 transition-colors">
            Architectes \u00e0 Rabat
          </Link>
          <Link href="/architecte/marrakech" className="block border border-stone-200 rounded-lg px-4 py-3 text-sm font-medium text-stone-800 hover:bg-stone-50 hover:border-[#b5522a]/30 transition-colors">
            Architectes \u00e0 Marrakech
          </Link>
          <Link href="/architecte/tanger" className="block border border-stone-200 rounded-lg px-4 py-3 text-sm font-medium text-stone-800 hover:bg-stone-50 hover:border-[#b5522a]/30 transition-colors">
            Architectes \u00e0 Tanger
          </Link>
          <Link href="/architecte/agadir" className="block border border-stone-200 rounded-lg px-4 py-3 text-sm font-medium text-stone-800 hover:bg-stone-50 hover:border-[#b5522a]/30 transition-colors">
            Architectes \u00e0 Agadir
          </Link>
          <Link href="/architecte/fes" className="block border border-stone-200 rounded-lg px-4 py-3 text-sm font-medium text-stone-800 hover:bg-stone-50 hover:border-[#b5522a]/30 transition-colors">
            Architectes \u00e0 F\u00e8s
          </Link>
          <Link href="/architecte/meknes" className="block border border-stone-200 rounded-lg px-4 py-3 text-sm font-medium text-stone-800 hover:bg-stone-50 hover:border-[#b5522a]/30 transition-colors">
            Architectes \u00e0 Mekn\u00e8s
          </Link>
          <Link href="/architecte/el-jadida" className="block border border-stone-200 rounded-lg px-4 py-3 text-sm font-medium text-stone-800 hover:bg-stone-50 hover:border-[#b5522a]/30 transition-colors">
            Architectes \u00e0 El Jadida
          </Link>
          <Link href="/architecte/oujda" className="block border border-stone-200 rounded-lg px-4 py-3 text-sm font-medium text-stone-800 hover:bg-stone-50 hover:border-[#b5522a]/30 transition-colors">
            Architectes \u00e0 Oujda
          </Link>
          <Link href="/architecte/tetouan" className="block border border-stone-200 rounded-lg px-4 py-3 text-sm font-medium text-stone-800 hover:bg-stone-50 hover:border-[#b5522a]/30 transition-colors">
            Architectes \u00e0 T\u00e9touan
          </Link>
          <Link href="/architecte/nador" className="block border border-stone-200 rounded-lg px-4 py-3 text-sm font-medium text-stone-800 hover:bg-stone-50 hover:border-[#b5522a]/30 transition-colors">
            Architectes \u00e0 Nador
          </Link>
          <Link href="/architecte/beni-mellal" className="block border border-stone-200 rounded-lg px-4 py-3 text-sm font-medium text-stone-800 hover:bg-stone-50 hover:border-[#b5522a]/30 transition-colors">
            Architectes \u00e0 B\u00e9ni Mellal
          </Link>
        </div>
        <p>
          Vous pouvez \u00e9galement consulter nos guides compl\u00e9mentaires pour approfondir votre recherche :
        </p>
        <ul>
          <li>
            <Link href="/guide/honoraires-architecte-maroc" className="text-[#b5522a] underline">Honoraires d&apos;architecte au Maroc : guide complet</Link>{" "}
            \u2014 d\u00e9tail des modes de r\u00e9mun\u00e9ration et \u00e9ch\u00e9anciers de paiement
          </li>
          <li>
            <Link href="/guide/comment-choisir-architecte-maroc" className="text-[#b5522a] underline">Comment choisir son architecte au Maroc</Link>{" "}
            \u2014 crit\u00e8res de s\u00e9lection, portfolio, r\u00e9f\u00e9rences
          </li>
          <li>
            <Link href="/guide/contrat-architecte-maroc" className="text-[#b5522a] underline">Contrat d&apos;architecte au Maroc</Link>{" "}
            \u2014 clauses indispensables et mod\u00e8le CNOA
          </li>
          <li>
            <Link href="/outils/calculateur-cout-construction-maroc" className="text-[#b5522a] underline">Calculateur de co\u00fbt de construction</Link>{" "}
            \u2014 estimez le budget total de votre projet en quelques clics
          </li>
        </ul>
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
