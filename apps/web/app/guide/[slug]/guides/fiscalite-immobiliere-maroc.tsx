import Link from "next/link";

export default function GuideFiscaliteImmobiliere() {
  const faq = [
    {
      q: "Quels sont les frais totaux lors de l&apos;achat d&apos;un bien immobilier au Maroc ?",
      a: "Les frais totaux a l&apos;achat representent environ 7 a 8 % du prix du bien. Ils se decomposent ainsi : droits d&apos;enregistrement 4 %, conservation fonciere 1,5 %, timbres fiscaux environ 0,5 %, et honoraires du notaire 1 a 1,5 % (avec un minimum de 2 500 MAD). Pour un bien a 1 000 000 MAD, comptez donc 70 000 a 80 000 MAD de frais.",
    },
    {
      q: "Comment est calculee la taxe sur les profits immobiliers (TPI) au Maroc ?",
      a: "La TPI est de 20 % sur la plus-value nette realisee lors de la revente (avec un minimum de 3 % du prix de cession). La plus-value est calculee en soustrayant le prix d&apos;acquisition (majore des frais d&apos;acquisition forfaitaires de 15 %) du prix de vente. Un abattement de 5 % par annee de detention est applique au-dela de la 5e annee, aboutissant a une exoneration totale apres 10 ans pour la residence principale.",
    },
    {
      q: "Les MRE paient-ils des impots immobiliers au Maroc ?",
      a: "Oui, les MRE sont soumis aux memes taxes immobilieres que les residents pour les biens situes au Maroc : taxe d&apos;habitation, taxe de services communaux, et TPI a la revente. Cependant, ils beneficient de conventions fiscales bilaterales (France, Belgique, Canada, etc.) pour eviter la double imposition. Les revenus locatifs au Maroc sont declares dans le pays de residence avec credit d&apos;impot.",
    },
    {
      q: "Existe-t-il des exonerations fiscales pour le logement social au Maroc ?",
      a: "Oui, les logements sociaux dont le prix ne depasse pas 250 000 MAD TTC et la superficie 80 m2 beneficient d&apos;une exoneration totale de TVA, des droits d&apos;enregistrement reduits a 1,5 %, et d&apos;une exoneration de la taxe d&apos;habitation pendant 5 ans. Les promoteurs agrees beneficient egalement d&apos;avantages fiscaux importants (exoneration d&apos;IS et de TVA sous conditions).",
    },
    {
      q: "Peut-on optimiser legalement sa fiscalite immobiliere au Maroc ?",
      a: "Oui, plusieurs leviers legaux existent : acheter en nom propre pour beneficier de l&apos;abattement de 40 % sur les revenus fonciers, conserver son bien plus de 5 ans pour reduire la TPI (abattement de 5 % par an), declarer le bien comme residence principale pour une exoneration de TPI apres 6 ans, ou investir dans des zones franches (Tanger, Kenitra) offrant des avantages specifiques. La creation d&apos;une SCI au Maroc peut aussi etre avantageuse a partir de 3-4 biens.",
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
        <h2>Quels imp&ocirc;ts et taxes s&apos;appliquent &agrave; l&apos;immobilier au Maroc ?</h2>
        <p>
          La fiscalite immobiliere au Maroc est regie par le Code General des Impots (CGI), mis a jour annuellement par la Loi de Finances. Elle intervient a chaque etape du cycle immobilier : achat, detention, mise en location et revente. Comprendre ces mecanismes est indispensable pour tout investisseur, proprietaire ou MRE souhaitant optimiser son patrimoine immobilier au Maroc en 2026.
        </p>
        <p>
          Le systeme fiscal marocain distingue plusieurs categories de taxes : les droits de mutation a l&apos;achat, les taxes locales annuelles (habitation, services communaux, terrains non batis), la TVA sur la construction neuve, et la taxe sur les profits immobiliers (TPI) a la revente. Chacune obeit a des regles specifiques avec des taux, des exonerations et des delais de paiement distincts.
        </p>
        <p>
          Ce guide detaille l&apos;ensemble des taxes applicables, les exonerations disponibles et les strategies d&apos;optimisation legales pour reduire votre charge fiscale. Que vous envisagiez d&apos;<Link href="/guide/acheter-terrain-constructible" className="text-[#b5522a] underline">acheter un terrain constructible</Link>, investir dans le <Link href="/guide/investissement-locatif" className="text-[#b5522a] underline">locatif</Link> ou construire pour votre propre usage, la fiscalite doit etre integree des la phase de conception du projet.
        </p>

        <h2>Combien de taxes paie-t-on &agrave; l&apos;achat d&apos;un bien au Maroc ?</h2>
        <p>
          L&apos;acquisition d&apos;un bien immobilier au Maroc genere des frais obligatoires qui representent globalement 7 a 8 % du prix d&apos;achat. Ces frais sont a la charge de l&apos;acquereur et doivent etre acquittes au moment de la signature de l&apos;acte definitif chez le notaire.
        </p>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Poste</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Taux / Montant</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Base de calcul</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Observation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">Droits d&apos;enregistrement</td>
              <td className="border border-stone-200 px-3 py-2">4 %</td>
              <td className="border border-stone-200 px-3 py-2">Prix declare ou valeur venale</td>
              <td className="border border-stone-200 px-3 py-2">Reduit a 1,5 % pour le logement social</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">Conservation fonciere</td>
              <td className="border border-stone-200 px-3 py-2">1,5 %</td>
              <td className="border border-stone-200 px-3 py-2">Prix declare</td>
              <td className="border border-stone-200 px-3 py-2">Inscription au <Link href="/guide/titre-foncier" className="text-[#b5522a] underline">titre foncier</Link></td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">Timbres fiscaux</td>
              <td className="border border-stone-200 px-3 py-2">~0,5 %</td>
              <td className="border border-stone-200 px-3 py-2">Prix declare</td>
              <td className="border border-stone-200 px-3 py-2">Montant fixe par page + proportionnel</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">Honoraires notaire</td>
              <td className="border border-stone-200 px-3 py-2">1 a 1,5 %</td>
              <td className="border border-stone-200 px-3 py-2">Prix declare</td>
              <td className="border border-stone-200 px-3 py-2">Minimum 2 500 MAD, TVA de 10 % en sus</td>
            </tr>
          </tbody>
        </table>
        <p>
          <strong>Exemple concret :</strong> pour l&apos;achat d&apos;un appartement a 1 200 000 MAD a Casablanca, les frais se decomposent ainsi : droits d&apos;enregistrement 48 000 MAD, conservation fonciere 18 000 MAD, timbres fiscaux environ 6 000 MAD, honoraires notaire environ 15 000 MAD. Total : environ 87 000 MAD, soit 7,25 % du prix d&apos;achat.
        </p>
        <p>
          L&apos;administration fiscale peut contester le prix declare si elle l&apos;estime inferieur a la valeur venale du bien. Dans ce cas, un redressement est notifie avec des droits complementaires, des penalites de retard (15 %) et une majoration de 5 %. Il est donc recommande de declarer le prix reel de la transaction.
        </p>

        <h2>Comment est calcul&eacute;e la taxe d&apos;habitation au Maroc ?</h2>
        <p>
          La taxe d&apos;habitation et la taxe de services communaux sont les deux taxes annuelles que doit acquitter tout proprietaire d&apos;un bien immobilier au Maroc. Elles sont calculees sur la base de la valeur locative annuelle (VLA) determinee par la commission de recensement tous les 5 ans.
        </p>
        <h3>Taxe d&apos;habitation (ex-taxe urbaine)</h3>
        <p>
          Elle s&apos;applique aux immeubles batis occupes en tant que residence principale ou secondaire. Les locaux professionnels sont soumis a la taxe professionnelle (ex-patente).
        </p>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Tranche de VLA annuelle</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Taux</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-200 px-3 py-2">0 a 5 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">0 % (exoneree)</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">5 001 a 20 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">10 %</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">20 001 a 40 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">20 %</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Plus de 40 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">30 %</td>
            </tr>
          </tbody>
        </table>
        <p>
          <strong>Exoneration :</strong> les constructions neuves beneficient d&apos;une exoneration de taxe d&apos;habitation pendant 5 ans a compter de la date d&apos;achevement des travaux (obtention du certificat de conformite). Les logements sociaux en beneficient egalement pendant 5 ans.
        </p>
        <h3>Taxe de services communaux</h3>
        <p>
          Elle s&apos;ajoute a la taxe d&apos;habitation et finance les services municipaux (voirie, eclairage, collecte des dechets). Son taux est de 10,5 % de la VLA en zone urbaine et de 6,5 % en zone periurbaine. Le paiement s&apos;effectue aupres de la tresorerie communale avant le 1er mars de chaque annee.
        </p>
        <h3>Taxe professionnelle</h3>
        <p>
          Applicable aux locaux a usage professionnel ou commercial, elle est calculee sur la VLA du local avec un taux variant de 10 a 30 % selon la classe d&apos;activite (C1, C2 ou C3). Les nouvelles entreprises beneficient d&apos;une exoneration de 5 ans. Cette taxe est a prendre en compte si vous envisagez un <Link href="/guide/investissement-locatif" className="text-[#b5522a] underline">investissement locatif commercial</Link>.
        </p>

        <h2>Faut-il payer une taxe sur les terrains non b&acirc;tis au Maroc ?</h2>
        <p>
          La TNB est un outil fiscal incitatif visant a encourager la construction et a lutter contre la speculation fonciere. Elle frappe les terrains urbains non batis situes a l&apos;interieur des perimetres des communes urbaines et des centres delimites.
        </p>
        <p>
          Le taux de la TNB varie de 2 a 20 MAD/m2 selon la zone, fixe par arrete de la commune. Les terrains situes dans les zones immaticulees et servies par les reseaux (eau, electricite, voirie) sont les plus taxes. Un terrain de 300 m2 en zone urbaine de Casablanca peut ainsi generer une TNB annuelle de 3 000 a 6 000 MAD.
        </p>
        <p>
          <strong>Exonerations :</strong> sont exoneres les terrains dont la superficie ne depasse pas 5 fois la superficie couverte des constructions existantes, les terrains faisant l&apos;objet d&apos;un permis de construire en cours de validite, et les terrains agricoles effectivement exploites. Si vous dtenez un terrain en attente de construction, consultez notre guide sur l&apos;<Link href="/guide/acheter-terrain-constructible" className="text-[#b5522a] underline">achat de terrain constructible</Link> pour planifier votre projet et eviter de payer la TNB inutilement.
        </p>

        <h2>Combien paie-t-on de taxe &agrave; la revente d&apos;un bien au Maroc (TPI) ?</h2>
        <p>
          La TPI est l&apos;impot le plus significatif lors de la cession d&apos;un bien immobilier. Elle frappe la plus-value realisee entre le prix d&apos;acquisition et le prix de cession. Son taux de base est de 20 % du profit net, avec un minimum de perception de 3 % du prix de vente.
        </p>
        <p>
          Le profit net est calcule ainsi : prix de cession - (prix d&apos;acquisition + frais d&apos;acquisition forfaitaires de 15 % + depenses d&apos;investissement justifiees + interets d&apos;emprunt). L&apos;administration applique ensuite un coefficient de revalorisation lie a l&apos;inflation.
        </p>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Duree de detention</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Abattement sur la plus-value</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Taux effectif</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Moins de 5 ans</td>
              <td className="border border-stone-200 px-3 py-2">Aucun abattement</td>
              <td className="border border-stone-200 px-3 py-2">20 % (min. 3 % du prix)</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Entre 5 et 6 ans</td>
              <td className="border border-stone-200 px-3 py-2">5 %</td>
              <td className="border border-stone-200 px-3 py-2">19 % effectif</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Entre 6 et 7 ans</td>
              <td className="border border-stone-200 px-3 py-2">10 %</td>
              <td className="border border-stone-200 px-3 py-2">18 % effectif</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Entre 7 et 8 ans</td>
              <td className="border border-stone-200 px-3 py-2">15 %</td>
              <td className="border border-stone-200 px-3 py-2">17 % effectif</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Entre 8 et 10 ans</td>
              <td className="border border-stone-200 px-3 py-2">20 a 25 %</td>
              <td className="border border-stone-200 px-3 py-2">15 a 16 % effectif</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Plus de 10 ans</td>
              <td className="border border-stone-200 px-3 py-2">Jusqu&apos;a 50 %</td>
              <td className="border border-stone-200 px-3 py-2">10 % effectif (min. 3 %)</td>
            </tr>
          </tbody>
        </table>
        <p>
          <strong>Exonerations totales de TPI :</strong> la cession de la residence principale occupee depuis au moins 6 ans est totalement exoneree de TPI (a condition que le prix de cession ne depasse pas 4 000 000 MAD). Les cessions entre conjoints, ascendants et descendants en ligne directe beneficient egalement d&apos;une exoneration. Enfin, les cessions dont le prix ne depasse pas 140 000 MAD sont exonerees.
        </p>
        <p>
          La declaration de TPI doit etre deposee dans les 30 jours suivant la date de cession, accompagnee du versement de l&apos;impot. Tout retard entraine une majoration de 5 % le premier mois, puis 0,5 % par mois supplementaire. Un paiement preventif de 5 % est retenu par le notaire a la source.
        </p>

        <h2>Quelle TVA s&apos;applique &agrave; la construction neuve au Maroc ?</h2>
        <p>
          La TVA s&apos;applique a toutes les prestations de construction : travaux de gros oeuvre, second oeuvre, materiaux, et honoraires de l&apos;architecte et du bureau d&apos;etudes. Le taux standard est de 20 %. Un taux reduit de 14 % s&apos;applique aux operations de construction de logements sociaux realisees par des promoteurs agrees.
        </p>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Type de construction</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Taux de TVA</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Conditions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">Construction standard</td>
              <td className="border border-stone-200 px-3 py-2">20 %</td>
              <td className="border border-stone-200 px-3 py-2">Taux normal applicable a tous les travaux</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">Logement social agree</td>
              <td className="border border-stone-200 px-3 py-2">14 %</td>
              <td className="border border-stone-200 px-3 py-2">Promoteur agree, prix &lt; 250 000 MAD TTC</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">Logement social (achat final)</td>
              <td className="border border-stone-200 px-3 py-2">Exonere</td>
              <td className="border border-stone-200 px-3 py-2">Premiere acquisition, superficie &lt; 80 m2</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">VEFA (vente en etat futur)</td>
              <td className="border border-stone-200 px-3 py-2">20 %</td>
              <td className="border border-stone-200 px-3 py-2">Applicable sur les appels de fonds</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">Ciment et acier</td>
              <td className="border border-stone-200 px-3 py-2">10 %</td>
              <td className="border border-stone-200 px-3 py-2">Taux reduit sur les materiaux de base</td>
            </tr>
          </tbody>
        </table>
        <p>
          Pour un projet de construction standard a 1 500 000 MAD de travaux, la TVA represente 300 000 MAD. Ce montant est generalement inclus dans les devis des entreprises de construction. Si vous achetez en <Link href="/guide/vefa-maroc" className="text-[#b5522a] underline">VEFA (vente en etat futur d&apos;achevement)</Link>, la TVA est integree dans le prix de vente affiche par le promoteur. Utilisez le <Link href="/outils/calculateur-cout-construction-maroc" className="text-[#b5522a] underline">calculateur de cout de construction</Link> pour estimer le budget total incluant la TVA.
        </p>
        <p>
          <strong>Recuperation de TVA :</strong> les promoteurs immobiliers peuvent recuperer la TVA sur leurs achats de materiaux et prestations de services. Les particuliers construisant pour leur propre usage ne beneficient pas de ce droit a deduction. Les investisseurs en location meublee (type Airbnb) avec un chiffre d&apos;affaires superieur a 500 000 MAD peuvent s&apos;assujettir volontairement a la TVA et ainsi recuperer la TVA sur la construction.
        </p>

        <h2>Quelles exon&eacute;rations fiscales existent pour l&apos;immobilier au Maroc ?</h2>
        <p>
          Le legislateur marocain a mis en place plusieurs dispositifs d&apos;exoneration et d&apos;incitation fiscale pour faciliter l&apos;acces au logement et encourager l&apos;investissement immobilier. En 2026, les principaux avantages fiscaux sont les suivants :
        </p>
        <h3>Residence principale (5+ ans)</h3>
        <p>
          La cession de la residence principale occupee a titre d&apos;habitation principale depuis au moins 6 ans est exoneree de la TPI (taxe sur les profits immobiliers), a condition que le prix de cession ne depasse pas 4 000 000 MAD. Au-dela, seule la fraction excedant ce seuil est imposee. La residence principale est egalement exoneree de la taxe d&apos;habitation pour une VLA inferieure a 5 000 MAD/an.
        </p>
        <h3>Logement social (&lt; 250 000 MAD)</h3>
        <p>
          Les logements dont le prix de vente ne depasse pas 250 000 MAD TTC et la superficie habitable 80 m2 beneficient d&apos;un regime fiscal tres avantageux : exoneration de TVA pour l&apos;acquereur, droits d&apos;enregistrement reduits a 1,5 %, exoneration de taxe d&apos;habitation pendant 5 ans, et contribution minimale de l&apos;IS pour le promoteur. Ce dispositif a permis la construction de plus de 300 000 logements sociaux depuis son lancement.
        </p>
        <h3>Zones franches et zones d&apos;acceleration industrielle</h3>
        <p>
          Les investissements immobiliers realises dans les zones franches (Tanger Free Zone, Kenitra Atlantic Free Zone, Casablanca Finance City) beneficient d&apos;avantages fiscaux majeurs : exoneration d&apos;IS pendant 5 ans puis taux reduit de 8,75 % pendant 20 ans, exoneration de taxe professionnelle pendant 5 ans, et exoneration de droits d&apos;enregistrement.
        </p>
        <h3>Programmes Fogarim et Damane Assakane</h3>
        <p>
          Le programme Fogarim garantit les credits immobiliers accordes aux menages a revenus irreguliers ou modestes (moins de 4 000 MAD/mois) pour l&apos;achat d&apos;un logement dont le prix ne depasse pas 250 000 MAD. Damane Assakane etend cette garantie aux classes moyennes pour des logements jusqu&apos;a 800 000 MAD. Ces programmes couvrent 70 % du credit en cas de defaillance, ce qui facilite l&apos;acces au financement bancaire. Consultez notre guide sur le <Link href="/guide/credit-construction-maroc" className="text-[#b5522a] underline">credit construction au Maroc</Link> pour plus de details.
        </p>

        <h2>Les MRE paient-ils des imp&ocirc;ts immobiliers au Maroc ?</h2>
        <p>
          Les MRE representent une part significative de l&apos;investissement immobilier au Maroc (plus de 25 % des transactions). Leur situation fiscale presente des particularites importantes liees a leur double rattachement fiscal.
        </p>
        <h3>Conventions fiscales bilaterales</h3>
        <p>
          Le Maroc a signe des conventions de non-double imposition avec plus de 50 pays, dont la France, la Belgique, le Canada, l&apos;Espagne, l&apos;Italie et les Pays-Bas. Ces conventions attribuent generalement le droit d&apos;imposer les revenus immobiliers au pays de situation du bien (le Maroc), avec un credit d&apos;impot dans le pays de residence. Ainsi, un MRE en France payant de l&apos;IR sur ses loyers marocains pourra deduire l&apos;impot deja paye au Maroc de son impot francais.
        </p>
        <h3>Rapatriement et comptes en devises</h3>
        <p>
          Les MRE peuvent ouvrir un compte en dirhams convertibles aupres de toute banque marocaine, permettant le rapatriement libre des revenus locatifs et du produit de la revente apres paiement de tous les impots. Les transferts sont effectues par virement bancaire via les canaux officiels. Le rapatriement du prix de vente necessite la presentation de la quittance de TPI et l&apos;acte de vente.
        </p>
        <p>
          Pour un guide complet sur les demarches de construction en tant que MRE, consultez notre guide dedie : <Link href="/guide/mre-construire" className="text-[#b5522a] underline">MRE : construire au Maroc depuis l&apos;etranger</Link>.
        </p>
        <h3>Avantages specifiques aux MRE</h3>
        <p>
          Les MRE beneficient de taux de credit immobilier competitifs (a partir de 4,25 % en 2026), de la possibilite de financer en devises (euro, dollar), et d&apos;une exoneration des droits de douane sur l&apos;importation de materiel et mobilier pour leur residence au Maroc (dans la limite d&apos;un delai de 2 ans apres l&apos;achevement de la construction).
        </p>

        <h2>Comment optimiser l&eacute;galement sa fiscalit&eacute; immobili&egrave;re au Maroc ?</h2>
        <p>
          L&apos;optimisation fiscale immobiliere au Maroc repose sur plusieurs leviers parfaitement legaux que tout investisseur averti doit connaitre et exploiter. Voici les strategies les plus efficaces en 2026 :
        </p>
        <h3>Timing d&apos;achat et de revente</h3>
        <p>
          La TPI est le poste fiscal le plus lourd a la revente. L&apos;abattement de 5 % par annee de detention au-dela de la 5e annee signifie qu&apos;une vente a la 6e annee (5 % d&apos;abattement) coute bien moins cher qu&apos;une vente a la 3e annee. L&apos;ideal est de conserver le bien au moins 10 ans pour maximiser l&apos;abattement. Si le bien est votre residence principale occupee depuis plus de 6 ans, l&apos;exoneration est totale. Planifiez donc votre strategie de detention avant meme l&apos;achat.
        </p>
        <h3>Choix du statut juridique</h3>
        <p>
          <strong>Personne physique :</strong> ideal pour 1 a 2 biens. Les revenus fonciers beneficient d&apos;un abattement forfaitaire de 40 %, et l&apos;IR progressif (0 a 38 %) s&apos;applique sur le net. Pour des loyers moderes, le taux effectif est faible.
        </p>
        <p>
          <strong>SCI (Societe Civile Immobiliere) :</strong> recommandee a partir de 3-4 biens ou pour faciliter la transmission successorale. La SCI est soumise a l&apos;IS (10 % jusqu&apos;a 300 000 MAD de benefice, 20 % de 300 001 a 1 000 000 MAD, 31 % au-dela). Les frais de constitution sont de 5 000 a 10 000 MAD. L&apos;avantage principal est la possibilite de deduire les charges reelles (interets, travaux, amortissement) au lieu de l&apos;abattement forfaitaire.
        </p>
        <h3>Strategies par profil d&apos;investisseur</h3>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Profil</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Strategie recommandee</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Economie fiscale estimee</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">Premier achat residence</td>
              <td className="border border-stone-200 px-3 py-2">Nom propre, conserver 6+ ans</td>
              <td className="border border-stone-200 px-3 py-2">Exoneration TPI totale</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">Investisseur locatif (1-2 biens)</td>
              <td className="border border-stone-200 px-3 py-2">Nom propre, abattement 40 %</td>
              <td className="border border-stone-200 px-3 py-2">IR effectif 6 a 22 %</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">Multi-proprietaire (3+ biens)</td>
              <td className="border border-stone-200 px-3 py-2">SCI a l&apos;IS, charges deductibles</td>
              <td className="border border-stone-200 px-3 py-2">IS 10-20 % vs IR 38 %</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">MRE investisseur</td>
              <td className="border border-stone-200 px-3 py-2">Convention fiscale + compte devises</td>
              <td className="border border-stone-200 px-3 py-2">Elimination double imposition</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">Promoteur / marchand de biens</td>
              <td className="border border-stone-200 px-3 py-2">IS promoteur, recuperation TVA</td>
              <td className="border border-stone-200 px-3 py-2">TVA deductible + IS competitif</td>
            </tr>
          </tbody>
        </table>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            La fiscalite immobiliere represente 7 a 15 % du cout total de votre projet selon les operations. Un architecte sur Bati.ma peut vous accompagner des la conception pour optimiser la surface fiscale, choisir le bon statut et anticiper les taxes. Demandez un devis gratuit et comparez les profils d&apos;architectes specialises dans votre ville.
          </p>
          <Link
            href="/demande-devis"
            className="inline-block mt-3 px-5 py-2 bg-[#b5522a] text-white text-sm font-medium rounded-lg hover:bg-[#9a4523] transition-colors"
          >
            Demander un devis gratuit
          </Link>
        </div>

        <h2>Recapitulatif : toutes les taxes immobilieres au Maroc en 2026</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Taxe</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Moment</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Taux</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Exoneration possible</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">Droits d&apos;enregistrement</td>
              <td className="border border-stone-200 px-3 py-2">Achat</td>
              <td className="border border-stone-200 px-3 py-2">4 %</td>
              <td className="border border-stone-200 px-3 py-2">1,5 % logement social</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">Conservation fonciere</td>
              <td className="border border-stone-200 px-3 py-2">Achat</td>
              <td className="border border-stone-200 px-3 py-2">1,5 %</td>
              <td className="border border-stone-200 px-3 py-2">Non</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">Taxe d&apos;habitation</td>
              <td className="border border-stone-200 px-3 py-2">Annuel</td>
              <td className="border border-stone-200 px-3 py-2">10 a 30 %</td>
              <td className="border border-stone-200 px-3 py-2">5 ans neuf, VLA &lt; 5 000 MAD</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">Services communaux</td>
              <td className="border border-stone-200 px-3 py-2">Annuel</td>
              <td className="border border-stone-200 px-3 py-2">6,5 a 10,5 %</td>
              <td className="border border-stone-200 px-3 py-2">Non</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">TNB</td>
              <td className="border border-stone-200 px-3 py-2">Annuel</td>
              <td className="border border-stone-200 px-3 py-2">2 a 20 MAD/m2</td>
              <td className="border border-stone-200 px-3 py-2">Permis en cours, terrain &lt; 5x bati</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">TPI</td>
              <td className="border border-stone-200 px-3 py-2">Revente</td>
              <td className="border border-stone-200 px-3 py-2">20 % (min. 3 %)</td>
              <td className="border border-stone-200 px-3 py-2">Res. principale 6+ ans</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">TVA construction</td>
              <td className="border border-stone-200 px-3 py-2">Construction</td>
              <td className="border border-stone-200 px-3 py-2">20 %</td>
              <td className="border border-stone-200 px-3 py-2">14 % social, exo acquereur</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">IR foncier</td>
              <td className="border border-stone-200 px-3 py-2">Location</td>
              <td className="border border-stone-200 px-3 py-2">0 a 38 % (abat. 40 %)</td>
              <td className="border border-stone-200 px-3 py-2">Tranche 0-30 000 MAD exoneree</td>
            </tr>
          </tbody>
        </table>
        <p>
          La maitrise de la fiscalite immobiliere est un avantage competitif majeur pour tout investisseur au Maroc. Chaque decision (achat, statut juridique, duree de detention, type de bien) a un impact fiscal direct sur la rentabilite de votre projet. En integrant ces parametres des la phase de conception avec un architecte qualifie, vous pouvez reduire significativement votre charge fiscale tout en respectant la legislation en vigueur.
        </p>
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-stone-900 mb-5">Questions frequentes</h2>
        <div className="space-y-4">
          {faq.map((f) => (
            <details key={f.q} className="group border border-stone-200 rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between px-4 py-3 cursor-pointer text-sm font-medium text-stone-800 hover:bg-stone-50">
                {f.q}
                <span className="text-stone-400 group-open:rotate-180 transition-transform">&#8595;</span>
              </summary>
              <div className="px-4 pb-4 pt-1 text-sm text-stone-600 leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
