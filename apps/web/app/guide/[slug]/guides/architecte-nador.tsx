export default function GuideArchitecteNador() {
  const faq = [
    { q: "Quelles sont les contraintes sp\u00e9cifiques de Marchica pour construire ?", a: "Tout projet situ\u00e9 dans le p\u00e9rim\u00e8tre Marchica doit respecter le cahier des charges de la Soci\u00e9t\u00e9 de D\u00e9veloppement de Marchica (SDM). Ce document impose des hauteurs maximales (R+2 \u00e0 R+3 selon les lots), des mat\u00e9riaux de fa\u00e7ade sp\u00e9cifiques (enduit ton pierre, bois ou composite), l\u2019interdiction du b\u00e9ton apparent, un coefficient d\u2019emprise au sol limit\u00e9 \u00e0 40-50 %, et l\u2019obligation de soumettre les plans \u00e0 la commission architecturale de la SDM avant tout d\u00e9p\u00f4t de permis. Le d\u00e9lai de validation SDM ajoute 4 \u00e0 8 semaines au calendrier classique." },
    { q: "Comment g\u00e9rer un chantier \u00e0 Nador depuis l\u2019Europe ?", a: "Le d\u00e9fi sp\u00e9cifique \u00e0 Nador est la concentration des chantiers en juillet-ao\u00fbt, quand tous les MRE veulent d\u00e9marrer simultan\u00e9ment. Les entreprises fiables sont sur-r\u00e9serv\u00e9es et les prix grimpent de 10 \u00e0 15 %. Strat\u00e9gie recommand\u00e9e : mandater votre architecte d\u00e8s mars-avril, lancer le gros \u0153uvre en mai (hors saison), et pr\u00e9voir vos visites de contr\u00f4le en \u00e9t\u00e9 quand vous \u00eates au Maroc. Exigez un contrat avec reporting photo hebdomadaire et un m\u00e9treur ind\u00e9pendant pour valider les situations de travaux." },
    { q: "Pourquoi construire \u00e0 Nador co\u00fbte-t-il plus cher que la moyenne de l\u2019Oriental ?", a: "Trois facteurs se cumulent : la classification en zone sismique 4 (la plus \u00e9lev\u00e9e au Maroc) impose 15 \u00e0 20 % d\u2019acier suppl\u00e9mentaire et des fondations renforc\u00e9es, ce qui ajoute 300 \u00e0 500 MAD/m\u00b2 au gros \u0153uvre. Les terrains en pente dans le Rif n\u00e9cessitent des murs de sout\u00e8nement (50 000 \u00e0 150 000 MAD selon le d\u00e9nivel\u00e9). Enfin, l\u2019acheminement des mat\u00e9riaux depuis Casablanca ou F\u00e8s co\u00fbte 8 \u00e0 12 % de plus que dans les villes de plaine, la route nationale traversant les cols du Rif." },
    { q: "Pourquoi la zone sismique 4 rend-elle la construction plus ch\u00e8re \u00e0 Nador ?", a: "La zone 4 du RPS 2011 impose des fondations renforc\u00e9es, plus d\u2019acier dans les poteaux, des joints de dilatation et des calculs parasismiques obligatoires. Ce surco\u00fbt repr\u00e9sente 15 \u00e0 20 % du gros \u0153uvre par rapport \u00e0 une zone 1 comme Casablanca." },
    { q: "Comment g\u00e9rer un chantier \u00e0 Nador depuis l\u2019Europe en \u00e9t\u00e9 ?", a: "R\u00e9servez votre architecte d\u00e8s mars pour \u00e9viter le rush estival. Exigez un contrat avec reporting photo hebdomadaire et visioconf\u00e9rences. Pr\u00e9voyez une procuration notari\u00e9e. Les meilleurs ma\u00e2lems sont pris 3 mois \u00e0 l\u2019avance en p\u00e9riode juin-septembre." },
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
        <h2>Comment Marchica redessine-t-il Nador ?</h2>
        <p>
          Chercher un <strong>architecte &agrave; Nador</strong> aujourd&apos;hui, c&apos;est
          entrer dans une ville en pleine m&eacute;tamorphose. Le moteur de cette
          transformation porte un nom : <strong>Marchica</strong>. Ce m&eacute;ga-projet
          de 2 000 hectares autour de la lagune de Mar Chica, dot&eacute; d&apos;un
          investissement de plus de 20 milliards de dirhams, a fait basculer
          Nador d&apos;une ville de transit vers une destination r&eacute;sidentielle et
          touristique de premier plan. La station baln&eacute;aire d&apos;Atalayoun, la
          marina, le parcours de golf 18 trous et les r&eacute;sidences int&eacute;gr&eacute;es
          ont cr&eacute;&eacute; un appel d&apos;air pour les architectes sp&eacute;cialis&eacute;s en
          projets c&ocirc;tiers haut standing.
        </p>
        <p>
          Mais Marchica n&apos;est pas un projet en acc&egrave;s libre. La
          <strong> Soci&eacute;t&eacute; de D&eacute;veloppement de Marchica (SDM)</strong> impose un
          cahier des charges architectural strict : hauteurs limit&eacute;es, palettes
          chromatiques impos&eacute;es (tons sable, blanc et bois), interdiction du
          b&eacute;ton brut en fa&ccedil;ade, obligation d&apos;int&eacute;gration paysag&egrave;re avec la
          lagune. Tout plan doit passer par une commission de validation SDM
          avant d&eacute;p&ocirc;t en commune, ce qui ajoute 4 &agrave; 8 semaines au processus.
          Un architecte nadorien exp&eacute;riment&eacute; conna&icirc;t ces r&egrave;gles et &eacute;vite les
          allers-retours co&ucirc;teux avec la commission.
        </p>

        <h2>Comment les MRE construisent-ils &agrave; Nador depuis l&apos;Europe ?</h2>
        <p>
          Nador d&eacute;tient le <strong>ratio MRE/population le plus &eacute;lev&eacute; du
          Maroc</strong>. On estime que 70 &agrave; 75 % des villas neuves dans la
          r&eacute;gion sont financ&eacute;es par la diaspora rifaine install&eacute;e en
          Belgique, aux Pays-Bas, en Allemagne et en Espagne. Cette r&eacute;alit&eacute;
          cr&eacute;e un march&eacute; architectural radicalement diff&eacute;rent de celui d&apos;Oujda
          ou de F&egrave;s : les clients sont absents 10 mois sur 12, exigent des
          finitions de standard europ&eacute;en, et veulent des maisons con&ccedil;ues pour
          des s&eacute;jours estivaux (grandes terrasses, piscines, espaces
          ext&eacute;rieurs g&eacute;n&eacute;reux).
        </p>
        <p>
          Mais contrairement &agrave; d&apos;autres r&eacute;gions MRE, le Rif impose une
          <strong> contrainte topographique majeure</strong>. Les terrains plats
          proches de la lagune sont rares et chers. La majorit&eacute; des parcelles
          disponibles se situent sur des pentes de 8 &agrave; 25 %, n&eacute;cessitant des
          fondations en terrasses, des murs de sout&egrave;nement en b&eacute;ton arm&eacute;
          (50 000 &agrave; 150 000 MAD selon le d&eacute;nivel&eacute;) et des &eacute;tudes
          g&eacute;otechniques approfondies. Un architecte qui ne conna&icirc;t pas le
          terrain rifain risque de sous-estimer le budget terrassement de 20 &agrave;
          30 %.
        </p>

        <h2>Quelles sont les contraintes sismiques pour construire &agrave; Nador ?</h2>
        <p>
          Nador est class&eacute;e en <strong>zone sismique 4</strong> selon le
          r&egrave;glement parasismique marocain RPS 2000 &mdash; le niveau le plus
          &eacute;lev&eacute; du pays, partag&eacute; uniquement avec Al Hoceima. Le s&eacute;isme de
          2004 qui a frapp&eacute; la r&eacute;gion (magnitude 6.3, 628 victimes) a
          d&eacute;montr&eacute; tragiquement les cons&eacute;quences d&apos;une construction non
          conforme. Depuis, les exigences structurelles sont draconiennes et
          impactent directement le budget.
        </p>

        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="text-left px-3 py-2 border border-stone-200">Param&egrave;tre</th>
              <th className="text-left px-3 py-2 border border-stone-200">Zone standard (1-2)</th>
              <th className="text-left px-3 py-2 border border-stone-200">Zone 4 (Nador)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-3 py-2 border border-stone-200">Taux d&apos;acier minimal</td>
              <td className="px-3 py-2 border border-stone-200">0,7 % section b&eacute;ton</td>
              <td className="px-3 py-2 border border-stone-200">1,0 &agrave; 1,2 % section b&eacute;ton</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-stone-200">Fondations villa R+1</td>
              <td className="px-3 py-2 border border-stone-200">Semelles isol&eacute;es 60&times;60 cm</td>
              <td className="px-3 py-2 border border-stone-200">Semelles filantes + longrines</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-stone-200">Surco&ucirc;t structure</td>
              <td className="px-3 py-2 border border-stone-200">R&eacute;f&eacute;rence</td>
              <td className="px-3 py-2 border border-stone-200">+15 &agrave; 20 % (300-500 MAD/m&sup2;)</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-stone-200">&Eacute;tude g&eacute;otechnique</td>
              <td className="px-3 py-2 border border-stone-200">Recommand&eacute;e</td>
              <td className="px-3 py-2 border border-stone-200">Obligatoire (8 000 - 15 000 MAD)</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-stone-200">Joints parasismiques</td>
              <td className="px-3 py-2 border border-stone-200">Tous les 30 m</td>
              <td className="px-3 py-2 border border-stone-200">Tous les 20 m</td>
            </tr>
          </tbody>
        </table>

        <p>
          Concr&egrave;tement, une villa de 200 m&sup2; &agrave; Nador consomme 15 &agrave; 20 %
          d&apos;acier de plus qu&apos;une villa identique &agrave; Kenitra ou Marrakech. Les
          poteaux passent de 25&times;25 cm &agrave; 30&times;30 cm minimum, les
          cha&icirc;nages sont doubl&eacute;s, et les fondations doivent descendre
          jusqu&apos;au bon sol (souvent 1,5 &agrave; 2,5 m dans les argiles du Rif).
          Tout architecte &agrave; Nador doit travailler en &eacute;troite collaboration
          avec un bureau d&apos;&eacute;tudes structures sp&eacute;cialis&eacute; en calcul
          parasismique.
        </p>

        <h2>Comment l&apos;architecture rifaine allie-t-elle tradition et modernit&eacute; ?</h2>
        <p>
          Le Rif poss&egrave;de une identit&eacute; architecturale propre, distincte de
          l&apos;architecture arabo-andalouse de F&egrave;s ou du style Art d&eacute;co de
          Casablanca. La <strong>maison rifaine traditionnelle</strong> se
          caract&eacute;rise par des murs &eacute;pais en pierre locale, des toitures
          terrasses avec acrot&egrave;res prononc&eacute;s, des cours int&eacute;rieures
          fonctionnelles (plus compactes que le patio fassi) et une implantation
          en &eacute;tagement sur les pentes naturelles du terrain.
        </p>
        <p>
          Certains cabinets nadoriens r&eacute;inventent cet h&eacute;ritage en int&eacute;grant
          la pierre apparente rifaine en parement de fa&ccedil;ade, les murets en
          terrasses comme &eacute;l&eacute;ments paysagers, et les volumes &eacute;tag&eacute;s qui
          &eacute;pousent la topographie plut&ocirc;t que de la combattre. Cette approche
          r&eacute;duit les co&ucirc;ts de terrassement et cr&eacute;e des villas avec des vues
          panoramiques sur la lagune depuis chaque niveau. Pour les MRE
          attach&eacute;s &agrave; leur identit&eacute; rifaine, c&apos;est un argument de poids face
          aux villas &laquo; catalogue &raquo; standardis&eacute;es.
        </p>

        <h2>Combien co&ucirc;te la construction &agrave; Nador ?</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="text-left px-3 py-2 border border-stone-200">Zone</th>
              <th className="text-left px-3 py-2 border border-stone-200">Prix terrain (MAD/m&sup2;)</th>
              <th className="text-left px-3 py-2 border border-stone-200">Sp&eacute;cificit&eacute;</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-3 py-2 border border-stone-200">P&eacute;rim&egrave;tre Marchica / Atalayoun</td>
              <td className="px-3 py-2 border border-stone-200">4 000 - 9 000</td>
              <td className="px-3 py-2 border border-stone-200">Cahier des charges SDM obligatoire</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-stone-200">Corniche / bord de lagune</td>
              <td className="px-3 py-2 border border-stone-200">3 500 - 7 000</td>
              <td className="px-3 py-2 border border-stone-200">Forte demande MRE, peu de disponibilit&eacute;</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-stone-200">Centre-ville Nador</td>
              <td className="px-3 py-2 border border-stone-200">2 500 - 5 000</td>
              <td className="px-3 py-2 border border-stone-200">R+4 max, usage mixte commerce/habitation</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-stone-200">Selouane / p&eacute;riph&eacute;rie</td>
              <td className="px-3 py-2 border border-stone-200">800 - 2 000</td>
              <td className="px-3 py-2 border border-stone-200">Terrains en pente, terrassement n&eacute;cessaire</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-stone-200">Zones rurales (Beni Ensar, Kariat)</td>
              <td className="px-3 py-2 border border-stone-200">400 - 1 200</td>
              <td className="px-3 py-2 border border-stone-200">Acc&egrave;s route parfois limit&eacute;, viabilisation &agrave; pr&eacute;voir</td>
            </tr>
          </tbody>
        </table>

        <p>
          Le march&eacute; nadorien conna&icirc;t une <strong>saisonnalit&eacute; extr&ecirc;me</strong>.
          De juillet &agrave; septembre, la quasi-totalit&eacute; des MRE veulent lancer
          ou contr&ocirc;ler leurs chantiers simultan&eacute;ment. Les entreprises de
          construction fiables sont r&eacute;serv&eacute;es des mois &agrave; l&apos;avance, les prix
          des mat&eacute;riaux augmentent de 10 &agrave; 15 % en haute saison, et les
          d&eacute;lais d&apos;obtention de permis s&apos;allongent. Les architectes
          exp&eacute;riment&eacute;s conseillent de d&eacute;marrer le gros &oelig;uvre entre mars et
          juin pour &eacute;viter ce goulot d&apos;&eacute;tranglement.
        </p>

        <h3>Co&ucirc;ts de construction &agrave; Nador (2024-2025)</h3>
        <ul>
          <li><strong>Gros &oelig;uvre (zone 4 sismique)</strong> : 2 800 &agrave; 4 000 MAD/m&sup2;</li>
          <li><strong>Villa cl&eacute; en main (moyen standing)</strong> : 4 800 &agrave; 6 500 MAD/m&sup2;</li>
          <li><strong>Villa haut standing (finitions europ&eacute;ennes)</strong> : 7 000 &agrave; 10 000 MAD/m&sup2;</li>
          <li><strong>Surco&ucirc;t terrain en pente (&gt;15 %)</strong> : +150 000 &agrave; 300 000 MAD en terrassement</li>
          <li><strong>Honoraires architecte (mission compl&egrave;te)</strong> : 3 &agrave; 7 % du montant travaux</li>
          <li><strong>Permis de construire seul</strong> : 15 000 &agrave; 40 000 MAD</li>
        </ul>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            &Agrave; Nador, ne lancez jamais un chantier sans &eacute;tude g&eacute;otechnique
            pr&eacute;alable : la zone sismique 4 et les sols argileux du Rif rendent
            cette &eacute;tape non n&eacute;gociable. Sur Bati.ma, trouvez des architectes
            nadoriens qui ma&icirc;trisent le RPS 2000, les contraintes Marchica et
            la gestion de projet &agrave; distance pour la diaspora. Comparez les
            profils et obtenez vos devis gratuitement.
          </p>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-stone-900 mb-5">Questions fr&eacute;quentes</h2>
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
