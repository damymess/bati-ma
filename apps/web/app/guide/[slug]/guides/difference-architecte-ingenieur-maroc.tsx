import Link from "next/link";

export default function GuideDifferenceArchitecteIngenieur() {
  const faq = [
    {
      q: "Peut-on construire au Maroc sans architecte ni ing\u00e9nieur ?",
      a: "Non pour la plupart des projets. La loi 16-89 impose le recours \u00e0 un architecte agr\u00e9\u00e9 pour tout projet d\u00e9passant 150 m\u00b2. L&apos;ing\u00e9nieur structure (BET) est obligatoire d\u00e8s que le projet d\u00e9passe R+2 ou pr\u00e9sente des contraintes techniques particuli\u00e8res. Seules les petites constructions rurales de moins de 150 m\u00b2 peuvent \u00e9chapper \u00e0 ces obligations.",
    },
    {
      q: "Combien co\u00fbte un architecte par rapport \u00e0 un ing\u00e9nieur au Maroc ?",
      a: "L&apos;architecte facture g\u00e9n\u00e9ralement entre 5 % et 15 % du co\u00fbt total des travaux selon l&apos;\u00e9tendue de sa mission. L&apos;ing\u00e9nieur structure travaille plutot au forfait : de 8 000 \u00e0 25 000 MAD pour une villa, et jusqu&apos;\u00e0 150 000 MAD pour un immeuble. Les deux honoraires s&apos;additionnent car les missions sont compl\u00e9mentaires.",
    },
    {
      q: "L&apos;architecte peut-il remplacer l&apos;ing\u00e9nieur au Maroc ?",
      a: "Non. L&apos;architecte ne peut pas signer les plans de b\u00e9ton arm\u00e9 ni les \u00e9tudes de structure. Inversement, l&apos;ing\u00e9nieur ne peut pas d\u00e9poser un permis de construire. Chaque professionnel a des comp\u00e9tences r\u00e9glement\u00e9es distinctes. Pour un projet s\u00e9rieux, les deux sont indispensables.",
    },
    {
      q: "Comment trouver un bon architecte et un bon ing\u00e9nieur au Maroc ?",
      a: "V\u00e9rifiez l&apos;inscription de l&apos;architecte au CNOA (Conseil National de l&apos;Ordre des Architectes) et l&apos;agr\u00e9ment du BET aupr\u00e8s du Minist\u00e8re de l&apos;\u00c9quipement. Demandez des r\u00e9f\u00e9rences de projets similaires. Consultez l&apos;annuaire Bati.ma pour comparer les profils et demander des devis gratuits.",
    },
    {
      q: "Qui est responsable en cas de d\u00e9faut de construction : l&apos;architecte ou l&apos;ing\u00e9nieur ?",
      a: "La responsabilit\u00e9 d\u00e9pend de la nature du d\u00e9faut. Un probl\u00e8me de conception ou d&apos;esth\u00e9tique engage la responsabilit\u00e9 de l&apos;architecte. Un d\u00e9faut structurel (fissures, affaissement) engage celle de l&apos;ing\u00e9nieur. La responsabilit\u00e9 d\u00e9cennale s&apos;applique aux deux pendant 10 ans apr\u00e8s la r\u00e9ception des travaux.",
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
        <h2>Quelle est la diff&eacute;rence entre un architecte et un ing&eacute;nieur au Maroc ?</h2>
        <p>
          Au Maroc, la confusion entre architecte et ing\u00e9nieur en g\u00e9nie civil est fr\u00e9quente chez les ma\u00eetres d&apos;ouvrage. Pourtant, ces deux professions sont fondamentalement diff\u00e9rentes dans leur formation, leurs comp\u00e9tences et leur r\u00f4le l\u00e9gal. Comprendre cette distinction est essentiel avant de lancer un projet de construction, qu&apos;il s&apos;agisse d&apos;une villa, d&apos;un immeuble r\u00e9sidentiel ou d&apos;un b\u00e2timent commercial.
        </p>
        <p>
          L&apos;architecte est le cr\u00e9ateur du projet. Il con\u00e7oit les espaces, dessine les plans, d\u00e9finit l&apos;esth\u00e9tique et veille \u00e0 la fonctionnalit\u00e9 du b\u00e2timent. L&apos;ing\u00e9nieur, lui, est le garant de la solidit\u00e9. Il calcule les structures, dimensionne les fondations et s&apos;assure que le b\u00e2timent r\u00e9siste aux charges et aux contraintes sismiques. Ces deux m\u00e9tiers sont compl\u00e9mentaires : l&apos;un ne peut pas remplacer l&apos;autre.
        </p>
        <p>
          Dans la pratique marocaine, le ma\u00eetre d&apos;ouvrage engage d&apos;abord un architecte pour concevoir son projet et obtenir le permis de construire, puis fait appel \u00e0 un ing\u00e9nieur (souvent via un{" "}
          <Link href="/guide/bureau-etude-technique-maroc" className="text-[#b5522a] underline">bureau d&apos;\u00e9tudes techniques</Link>
          ) pour les \u00e9tudes de structure et les lots techniques.
        </p>

        <h2>Quelles formations pour devenir architecte ou ing&eacute;nieur au Maroc ?</h2>
        <p>
          Les parcours de formation de l&apos;architecte et de l&apos;ing\u00e9nieur sont tr\u00e8s diff\u00e9rents. L&apos;architecte suit un cursus de 6 ans dans une \u00e9cole d&apos;architecture reconnue. Au Maroc, les principales \u00e9coles sont l&apos;ENA (Ecole Nationale d&apos;Architecture) de Rabat, l&apos;ENA de Marrakech, l&apos;ENA de F\u00e8s et l&apos;ENA de T\u00e9touan. La formation couvre le dessin, la conception spatiale, l&apos;urbanisme, l&apos;histoire de l&apos;architecture, la r\u00e9glementation et la gestion de projet.
        </p>
        <p>
          L&apos;ing\u00e9nieur en g\u00e9nie civil suit un cursus de 5 ans dans une grande \u00e9cole d&apos;ing\u00e9nieurs. Les \u00e9tablissements de r\u00e9f\u00e9rence au Maroc sont l&apos;EMI (Ecole Mohammadia d&apos;Ing\u00e9nieurs) \u00e0 Rabat, l&apos;ENIM (\u00c9cole Nationale de l&apos;Industrie Min\u00e9rale), l&apos;EHTP (\u00c9cole Hassania des Travaux Publics) et l&apos;ENSEM. La formation est centr\u00e9e sur les math\u00e9matiques appliqu\u00e9es, la r\u00e9sistance des mat\u00e9riaux, la m\u00e9canique des sols, le b\u00e9ton arm\u00e9 et les m\u00e9thodes de calcul num\u00e9rique.
        </p>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Crit\u00e8re</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Architecte</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Ing\u00e9nieur g\u00e9nie civil</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">Dur\u00e9e formation</td><td className="border border-stone-200 px-3 py-2">6 ans (Bac + 6)</td><td className="border border-stone-200 px-3 py-2">5 ans (Bac + 5)</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">\u00c9coles principales</td><td className="border border-stone-200 px-3 py-2">ENA Rabat, ENA Marrakech, ENA F\u00e8s, ENA T\u00e9touan</td><td className="border border-stone-200 px-3 py-2">EMI, ENIM, EHTP, ENSEM</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Inscription obligatoire</td><td className="border border-stone-200 px-3 py-2">CNOA (Ordre des Architectes)</td><td className="border border-stone-200 px-3 py-2">ONICG (Ordre des Ing\u00e9nieurs)</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Comp\u00e9tences cl\u00e9s</td><td className="border border-stone-200 px-3 py-2">Conception, esth\u00e9tique, urbanisme</td><td className="border border-stone-200 px-3 py-2">Calcul, structure, r\u00e9sistance</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Stage requis</td><td className="border border-stone-200 px-3 py-2">18 mois en agence</td><td className="border border-stone-200 px-3 py-2">6 mois en entreprise BTP</td></tr>
          </tbody>
        </table>
        <p>
          Apr\u00e8s sa formation, l&apos;architecte doit s&apos;inscrire au Conseil National de l&apos;Ordre des Architectes (CNOA) pour exercer l\u00e9galement. Cette inscription garantit le respect d&apos;un code de d\u00e9ontologie et permet au public de v\u00e9rifier le statut de tout architecte. L&apos;ing\u00e9nieur, quant \u00e0 lui, peut exercer au sein d&apos;un BET agr\u00e9\u00e9 par le Minist\u00e8re de l&apos;\u00c9quipement et du Transport.
        </p>

        <h2>Quels sont les r&ocirc;les respectifs de l&apos;architecte et de l&apos;ing&eacute;nieur ?</h2>
        <p>
          Pour bien comprendre qui fait quoi sur un chantier marocain, voici un comparatif d\u00e9taill\u00e9 des responsabilit\u00e9s de chaque professionnel. Ce tableau vous aidera \u00e0 d\u00e9terminer \u00e0 quel moment faire appel \u00e0 l&apos;un ou \u00e0 l&apos;autre.
        </p>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Responsabilit\u00e9</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Architecte</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Ing\u00e9nieur</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">Conception des plans</td><td className="border border-stone-200 px-3 py-2">Oui (mission principale)</td><td className="border border-stone-200 px-3 py-2">Non</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">D\u00e9p\u00f4t du permis de construire</td><td className="border border-stone-200 px-3 py-2">Oui (obligation l\u00e9gale)</td><td className="border border-stone-200 px-3 py-2">Non</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Calcul de structure (b\u00e9ton arm\u00e9)</td><td className="border border-stone-200 px-3 py-2">Non</td><td className="border border-stone-200 px-3 py-2">Oui (mission principale)</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Dimensionnement des fondations</td><td className="border border-stone-200 px-3 py-2">Non</td><td className="border border-stone-200 px-3 py-2">Oui</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Plans d&apos;ex\u00e9cution structure</td><td className="border border-stone-200 px-3 py-2">Non</td><td className="border border-stone-200 px-3 py-2">Oui</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">\u00c9tudes thermiques et \u00e9nerg\u00e9tiques</td><td className="border border-stone-200 px-3 py-2">Orientation g\u00e9n\u00e9rale</td><td className="border border-stone-200 px-3 py-2">Calculs d\u00e9taill\u00e9s</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Suivi de chantier</td><td className="border border-stone-200 px-3 py-2">Oui (coordination g\u00e9n\u00e9rale)</td><td className="border border-stone-200 px-3 py-2">Oui (v\u00e9rification structure)</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Certificat de conformit\u00e9</td><td className="border border-stone-200 px-3 py-2">Oui (signature obligatoire)</td><td className="border border-stone-200 px-3 py-2">Oui (partie technique)</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">VRD (voiries et r\u00e9seaux)</td><td className="border border-stone-200 px-3 py-2">Non</td><td className="border border-stone-200 px-3 py-2">Oui</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">\u00c9tude d&apos;impact environnemental</td><td className="border border-stone-200 px-3 py-2">Participation</td><td className="border border-stone-200 px-3 py-2">Coordination technique</td></tr>
          </tbody>
        </table>

        <h2>Quand faut-il choisir un architecte au Maroc ?</h2>
        <p>
          L&apos;architecte est votre premier interlocuteur pour tout projet de construction au Maroc. Son intervention est l\u00e9galement obligatoire d\u00e8s que la surface d\u00e9passe 150 m\u00b2 (article 50 de la loi 12-90 relative \u00e0 l&apos;urbanisme). Mais au-del\u00e0 de l&apos;obligation l\u00e9gale, l&apos;architecte apporte une valeur ajout\u00e9e consid\u00e9rable dans plusieurs situations.
        </p>
        <p>
          <strong>Conception et cr\u00e9ativit\u00e9.</strong> Si vous souhaitez une villa avec un design unique, des espaces optimis\u00e9s ou une int\u00e9gration harmonieuse dans le paysage, l&apos;architecte est indispensable. Il traduit vos besoins en plans concrets tout en respectant les r\u00e8gles d&apos;urbanisme locales (COS, CUS, hauteur maximale, reculs).
        </p>
        <p>
          <strong>Obtention du{" "}
          <Link href="/guide/permis-de-construire-maroc" className="text-[#b5522a] underline">permis de construire</Link>.</strong>{" "}
          Seul un architecte inscrit au CNOA peut d\u00e9poser un dossier de permis de construire aupr\u00e8s de la commune. Les plans sign\u00e9s par l&apos;architecte sont une pi\u00e8ce obligatoire du dossier. Sans architecte, votre demande sera rejet\u00e9e.
        </p>
        <p>
          <strong>R\u00e9novation et patrimoine.</strong> Pour la r\u00e9novation d&apos;un riad ancien, la restructuration d&apos;un b\u00e2timent existant ou un projet en m\u00e9dina, l&apos;architecte ma\u00eetrise les contraintes patrimoniales et les r\u00e8gles sp\u00e9cifiques aux zones class\u00e9es. Il sait dialoguer avec les autorit\u00e9s comp\u00e9tentes (inspection des monuments historiques, agence urbaine).
        </p>
        <p>
          <strong>Ma\u00eetrise d&apos;oeuvre compl\u00e8te.</strong> Si vous souhaitez d\u00e9l\u00e9guer la gestion compl\u00e8te de votre projet, l&apos;architecte peut assurer la mission de ma\u00eetre d&apos;oeuvre : coordination de tous les intervenants (BET, entreprises, fournisseurs), suivi de chantier et r\u00e9ception des travaux. Consultez notre guide sur les{" "}
          <Link href="/guide/honoraires-architecte-maroc" className="text-[#b5522a] underline">honoraires d&apos;architecte au Maroc</Link>{" "}
          pour comprendre le co\u00fbt de chaque type de mission.
        </p>

        <h2>Quand faut-il faire appel &agrave; un ing&eacute;nieur au Maroc ?</h2>
        <p>
          L&apos;ing\u00e9nieur en g\u00e9nie civil intervient d\u00e8s que votre projet pr\u00e9sente des d\u00e9fis techniques. Son expertise est incontournable dans les situations suivantes.
        </p>
        <p>
          <strong>Structure en b\u00e9ton arm\u00e9.</strong> Tout b\u00e2timent en b\u00e9ton arm\u00e9 n\u00e9cessite une \u00e9tude de structure r\u00e9alis\u00e9e par un ing\u00e9nieur. Il dimensionne les fondations (semelles, radier, pieux selon la nature du sol), les poteaux, les poutres et les dalles. Les plans de{" "}
          <Link href="/guide/bureau-etude-technique-maroc" className="text-[#b5522a] underline">b\u00e9ton arm\u00e9</Link>{" "}
          doivent \u00eatre vis\u00e9s par un BET agr\u00e9\u00e9 pour obtenir le permis de construire des b\u00e2timents de plus de R+2.
        </p>
        <p>
          <strong>\u00c9tudes g\u00e9otechniques et de sol.</strong> Avant toute construction, l&apos;ing\u00e9nieur r\u00e9alise ou commande une \u00e9tude de sol pour d\u00e9terminer la capacit\u00e9 portante du terrain. Cette \u00e9tude est particuli\u00e8rement critique dans les zones \u00e0 risque (sols argileux de Tanger, zones inondables de la plaine du Gharb, terrains en pente du Rif).
        </p>
        <p>
          <strong>VRD (Voiries et R\u00e9seaux Divers).</strong> Pour les lotissements, les zones industrielles ou les projets immobiliers de grande envergure, l&apos;ing\u00e9nieur con\u00e7oit les r\u00e9seaux d&apos;assainissement, d&apos;eau potable, d&apos;\u00e9lectricit\u00e9 et les voies d&apos;acc\u00e8s. Il dimensionne les ouvrages hydrauliques et s&apos;assure de la conformit\u00e9 avec les normes ONEE et les cahiers des charges communaux.
        </p>
        <p>
          <strong>Conformit\u00e9 parasismique.</strong> Le Maroc est situ\u00e9 dans une zone sismique active (notamment le Rif et la r\u00e9gion d&apos;Al Hoceima). L&apos;ing\u00e9nieur applique le R\u00e8glement de Construction Parasismique (RPS 2000, r\u00e9vis\u00e9 en 2011) pour garantir la r\u00e9sistance du b\u00e2timent. Cette \u00e9tude est obligatoire dans les zones \u00e0 sismicit\u00e9 mod\u00e9r\u00e9e \u00e0 forte.
        </p>

        <h2>Comment travailler avec un architecte et un ing&eacute;nieur en m&ecirc;me temps ?</h2>
        <p>
          Pour tout projet de construction s\u00e9rieux au Maroc, la collaboration entre architecte et ing\u00e9nieur est la norme. Voici comment se d\u00e9roule concr\u00e8tement cette collaboration sur un projet type de villa ou d&apos;immeuble.
        </p>
        <p>
          <strong>\u00c9tape 1 : Conception architecturale.</strong> L&apos;architecte \u00e9labore l&apos;avant-projet sommaire (APS) puis l&apos;avant-projet d\u00e9taill\u00e9 (APD). Il d\u00e9finit les volumes, les circulations, l&apos;orientation, les fa\u00e7ades et les mat\u00e9riaux de finition. Le client valide cette phase avant de passer aux \u00e9tudes techniques.
        </p>
        <p>
          <strong>\u00c9tape 2 : \u00c9tudes techniques de l&apos;ing\u00e9nieur.</strong> Sur la base des plans architecturaux valid\u00e9s, l&apos;ing\u00e9nieur r\u00e9alise les \u00e9tudes de structure. Il positionne les \u00e9l\u00e9ments porteurs (poteaux, voiles, poutres) en coordination avec l&apos;architecte pour ne pas compromettre la conception spatiale. Il produit les plans de coffrage, de ferraillage et les notes de calcul.
        </p>
        <p>
          <strong>\u00c9tape 3 : D\u00e9p\u00f4t du permis de construire.</strong> L&apos;architecte constitue le dossier complet : plans architecturaux + plans de b\u00e9ton arm\u00e9 du BET + \u00e9tude de sol + certificat de propri\u00e9t\u00e9. Le dossier est d\u00e9pos\u00e9 \u00e0 la commune et examin\u00e9 par l&apos;agence urbaine.
        </p>
        <p>
          <strong>\u00c9tape 4 : Suivi de chantier concert\u00e9.</strong> Pendant la construction, l&apos;architecte coordonne l&apos;ensemble des corps de m\u00e9tier et v\u00e9rifie la conformit\u00e9 aux plans. L&apos;ing\u00e9nieur contr\u00f4le sp\u00e9cifiquement la r\u00e9alisation de la structure : qualit\u00e9 du b\u00e9ton, positionnement des armatures, respect des plans de ferraillage. Des r\u00e9unions de chantier r\u00e9guli\u00e8res r\u00e9unissent les deux professionnels.
        </p>
        <p>
          <strong>\u00c9tape 5 : R\u00e9ception des travaux.</strong> L&apos;architecte et l&apos;ing\u00e9nieur participent conjointement \u00e0 la r\u00e9ception. Chacun v\u00e9rifie la conformit\u00e9 de sa partie. L&apos;architecte signe le certificat de conformit\u00e9 n\u00e9cessaire pour obtenir le permis d&apos;habiter. Consultez notre guide complet sur{" "}
          <Link href="/guide/permis-de-construire-maroc" className="text-[#b5522a] underline">le permis de construire au Maroc</Link>{" "}
          pour conna\u00eetre toutes les pi\u00e8ces requises.
        </p>

        <h2>Combien co&ucirc;te un architecte par rapport &agrave; un ing&eacute;nieur au Maroc ?</h2>
        <p>
          La structure de r\u00e9mun\u00e9ration diff\u00e8re sensiblement entre les deux professions. L&apos;architecte est g\u00e9n\u00e9ralement pay\u00e9 en pourcentage du co\u00fbt des travaux, tandis que l&apos;ing\u00e9nieur travaille plus souvent au forfait par mission. Utilisez notre{" "}
          <Link href="/outils/calculateur-cout-construction-maroc" className="text-[#b5522a] underline">calculateur de co\u00fbt de construction</Link>{" "}
          pour estimer le budget total de votre projet.
        </p>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Crit\u00e8re</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Architecte</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Ing\u00e9nieur (BET)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">Mode de facturation</td><td className="border border-stone-200 px-3 py-2">Pourcentage du co\u00fbt travaux</td><td className="border border-stone-200 px-3 py-2">Forfait par mission ou % travaux</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Mission compl\u00e8te (villa)</td><td className="border border-stone-200 px-3 py-2">8 % \u00e0 15 % du co\u00fbt travaux</td><td className="border border-stone-200 px-3 py-2">15 000 \u00e0 50 000 MAD forfait</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Mission compl\u00e8te (immeuble R+4)</td><td className="border border-stone-200 px-3 py-2">5 % \u00e0 10 % du co\u00fbt travaux</td><td className="border border-stone-200 px-3 py-2">50 000 \u00e0 150 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Plans seuls (sans suivi)</td><td className="border border-stone-200 px-3 py-2">3 % \u00e0 5 %</td><td className="border border-stone-200 px-3 py-2">8 000 \u00e0 25 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Suivi de chantier</td><td className="border border-stone-200 px-3 py-2">2 % \u00e0 4 % suppl\u00e9mentaire</td><td className="border border-stone-200 px-3 py-2">Inclus ou 5 000 \u00e0 15 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">\u00c9chelonnement paiement</td><td className="border border-stone-200 px-3 py-2">Par phase (APS, APD, DCE, chantier)</td><td className="border border-stone-200 px-3 py-2">50 % \u00e0 la commande, 50 % \u00e0 la livraison</td></tr>
          </tbody>
        </table>
        <p>
          Pour une villa de 300 m\u00b2 avec un co\u00fbt de construction de 1 500 000 MAD, le budget total des professionnels se d\u00e9compose typiquement ainsi : honoraires architecte de 120 000 \u00e0 225 000 MAD (8 \u00e0 15 %), honoraires BET structure de 15 000 \u00e0 30 000 MAD, et honoraires BET lots techniques de 10 000 \u00e0 20 000 MAD. Consultez notre guide d\u00e9taill\u00e9 sur les{" "}
          <Link href="/guide/honoraires-architecte-maroc" className="text-[#b5522a] underline">honoraires d&apos;architecte au Maroc</Link>{" "}
          pour n\u00e9gocier au mieux.
        </p>

        <h2>Quel est le cadre l&eacute;gal pour les architectes et ing&eacute;nieurs au Maroc ?</h2>
        <p>
          La profession d&apos;architecte est r\u00e9glement\u00e9e par la <strong>loi 16-89</strong> relative \u00e0 l&apos;exercice de la profession d&apos;architecte. Cette loi d\u00e9finit les conditions d&apos;acc\u00e8s \u00e0 la profession, les missions de l&apos;architecte et les sanctions en cas d&apos;exercice ill\u00e9gal. Seuls les architectes inscrits au tableau de l&apos;Ordre peuvent signer des plans et d\u00e9poser des permis de construire.
        </p>
        <p>
          La profession d&apos;ing\u00e9nieur en g\u00e9nie civil est encadr\u00e9e par le dahir de 1993 relatif aux bureaux d&apos;\u00e9tudes techniques. Les BET doivent obtenir un agr\u00e9ment du Minist\u00e8re de l&apos;\u00c9quipement pour exercer. Cet agr\u00e9ment est class\u00e9 par cat\u00e9gorie (A, B, C) selon l&apos;importance des projets que le BET peut traiter.
        </p>
        <p>
          La <strong>loi 12-03</strong> relative aux \u00e9tudes d&apos;impact sur l&apos;environnement impose une \u00e9tude d&apos;impact pour les projets de grande envergure (lotissements de plus de 2 hectares, constructions industrielles, h\u00f4tels de plus de 100 chambres). Cette \u00e9tude n\u00e9cessite la collaboration entre architecte et ing\u00e9nieur pour \u00e9valuer les impacts et proposer des mesures d&apos;att\u00e9nuation.
        </p>
        <p>
          La <strong>responsabilit\u00e9 d\u00e9cennale</strong> s&apos;applique aux deux professions. Architecte et ing\u00e9nieur sont responsables pendant 10 ans apr\u00e8s la r\u00e9ception des travaux pour tout vice de construction compromettant la solidit\u00e9 de l&apos;ouvrage ou le rendant impropre \u00e0 sa destination (articles 769 et 770 du DOC). Cette responsabilit\u00e9 est une protection majeure pour le ma\u00eetre d&apos;ouvrage.
        </p>
        <p>
          Depuis 2016, la <strong>R\u00e9glementation Thermique de Construction au Maroc (RTCM)</strong> impose des performances \u00e9nerg\u00e9tiques minimales pour toute nouvelle construction. L&apos;architecte int\u00e8gre les principes bioclimatiques d\u00e8s la conception (orientation, protection solaire), tandis que l&apos;ing\u00e9nieur thermicien r\u00e9alise les calculs d\u00e9taill\u00e9s de conformit\u00e9.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm font-semibold text-[#b5522a] mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Ne cherchez pas \u00e0 opposer architecte et ing\u00e9nieur : les deux sont indispensables \u00e0 la r\u00e9ussite de votre projet. Choisissez un architecte inscrit au CNOA et un BET agr\u00e9\u00e9 par le Minist\u00e8re. Trouvez les meilleurs professionnels pr\u00e8s de chez vous sur{" "}
            <Link href="/architecte" className="text-[#b5522a] underline">l&apos;annuaire Bati.ma</Link>{" "}
            et demandez un devis gratuit via{" "}
            <Link href="/demande-devis" className="text-[#b5522a] underline">notre formulaire en ligne</Link>.
          </p>
        </div>

        <p className="mt-6 text-sm text-stone-500">
          Retrouvez tous nos guides : {" "}
          <Link href="/guide/honoraires-architecte-maroc" className="text-[#b5522a] underline">honoraires architecte</Link>{" "} | {" "}
          <Link href="/guide/permis-de-construire-maroc" className="text-[#b5522a] underline">permis de construire</Link>{" "} | {" "}
          <Link href="/guide/bureau-etude-technique-maroc" className="text-[#b5522a] underline">bureau d&apos;\u00e9tudes techniques</Link>{" "} | {" "}
          <Link href="/architecte" className="text-[#b5522a] underline">annuaire architectes</Link>
        </p>
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-stone-900 mb-5">Questions fr\u00e9quentes</h2>
        <div className="space-y-4">
          {faq.map((f) => (
            <details key={f.q} className="group border border-stone-200 rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between px-4 py-3 cursor-pointer text-sm font-medium text-stone-800 hover:bg-stone-50">
                {f.q}
                <span className="text-stone-400 group-open:rotate-180 transition-transform">{"\u2193"}</span>
              </summary>
              <div className="px-4 pb-4 pt-1 text-sm text-stone-600 leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
