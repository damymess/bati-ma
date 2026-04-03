export default function GuideArchitecteElJadida() {
  const faq = [
    { q: "Peut-on acheter et r\u00e9nover un bien dans la cit\u00e9 portugaise ?", a: "L\u2019acquisition d\u2019un bien dans la forteresse de Mazagan est possible, mais les travaux sont encadr\u00e9s par le minist\u00e8re de la Culture en vertu du classement UNESCO (2004). Contrairement \u00e0 une r\u00e9novation en m\u00e9dina traditionnelle, vous devez ici composer avec une architecture militaire : murs bastionn\u00e9s de 2 \u00e0 3 m d\u2019\u00e9paisseur, vo\u00fbtes gothiques, canalisations historiques. Un architecte agr\u00e9\u00e9 patrimoine doit soumettre un dossier sp\u00e9cifique incluant un relev\u00e9 photogramm\u00e9trique et un plan de restauration \u00e0 l\u2019identique. Les mat\u00e9riaux modernes (PVC, aluminium apparent) sont proscrits. Budget moyen de r\u00e9novation : 6 000 \u00e0 10 000 MAD/m\u00b2, soit 50 \u00e0 80 % de plus qu\u2019une r\u00e9novation classique en m\u00e9dina." },
    { q: "Quel impact du vent atlantique sur la conception architecturale \u00e0 El Jadida ?", a: "El Jadida subit des vents d\u2019ouest dominants pouvant atteindre 80 km/h en hiver, avec des embruns sal\u00e9s qui p\u00e9n\u00e8trent jusqu\u2019\u00e0 500 m \u00e0 l\u2019int\u00e9rieur des terres. Cela impose des choix techniques pr\u00e9cis : b\u00e9ton arm\u00e9 avec enrobage minimum de 5 cm (contre 3 cm en zone standard), menuiseries en aluminium laqu\u00e9 ou PVC marin, enduits hydrofuges int\u00e9grant des adjuvants anti-sel. L\u2019orientation du b\u00e2timent est cruciale : les pi\u00e8ces de vie doivent \u00eatre prot\u00e9g\u00e9es c\u00f4t\u00e9 est, les terrasses abrit\u00e9es par des murets ou des claustras en b\u00e9ton. Le surco\u00fbt li\u00e9 \u00e0 ces sp\u00e9cifications repr\u00e9sente 10 \u00e0 15 % du budget global de construction." },
    { q: "El Jadida est-elle int\u00e9ressante pour un investissement locatif saisonnier ?", a: "Le rendement locatif saisonnier \u00e0 El Jadida est attractif gr\u00e2ce \u00e0 trois facteurs : la proximit\u00e9 de Casablanca (1h par autoroute), la saison estivale de 4 mois (juin-septembre) et l\u2019effet Mazagan Resort qui a positionn\u00e9 la ville comme destination balnaire. Un appartement de 80 m\u00b2 \u00e0 Sidi Bouzid (valeur 800 000 \u00e0 1 200 000 MAD) peut g\u00e9n\u00e9rer 4 000 \u00e0 6 000 MAD/semaine en haute saison, soit un rendement brut de 6 \u00e0 8 %. Les Casablancais repr\u00e9sentent 70 % de la client\u00e8le locative. Attention cependant \u00e0 la saisonnalit\u00e9 : hors \u00e9t\u00e9, le taux d\u2019occupation chute \u00e0 15-20 %." },
    { q: "Pourquoi El Jadida attire-t-elle les investisseurs immobiliers ?", a: "El Jadida combine proximit\u00e9 de Casablanca (1h par autoroute), c\u00f4te atlantique, patrimoine UNESCO et prix abordables. Le terrain \u00e0 Sidi Bouzid co\u00fbte 3 000 \u00e0 8 000 MAD/m\u00b2, soit 3 \u00e0 5 fois moins qu\u2019\u00e0 A\u00efn Diab. Le complexe Mazagan booste le tourisme." },
    { q: "Comment prot\u00e9ger une construction du vent atlantique \u00e0 El Jadida ?", a: "L\u2019architecte doit orienter les ouvertures principales \u00e0 l\u2019est ou au sud, pr\u00e9voir des murs \u00e9pais c\u00f4t\u00e9 ouest, installer des menuiseries renforc\u00e9es et concevoir des terrasses abrit\u00e9es. Un brise-vent v\u00e9g\u00e9tal (haie de thuya) est \u00e9galement recommand\u00e9." },
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
        <h2>Architecte \u00e0 El Jadida : la ville luso-atlantique entre h\u00e9ritage fortifi\u00e9 et essor industriel</h2>
        <p>
          El Jadida n&apos;est pas une ville c\u00f4ti\u00e8re ordinaire. Ancienne Mazagan,
          comptoir fortifi\u00e9 portugais pendant trois si\u00e8cles, elle poss\u00e8de un patrimoine
          militaire unique au Maroc, inscrit \u00e0 l&apos;UNESCO depuis 2004. Mais la ville
          est aussi le poumon industriel de la r\u00e9gion Doukkala, avec le complexe
          chimique de Jorf Lasfar qui emploie des dizaines de milliers de personnes.
          Faire appel \u00e0 un <strong>architecte \u00e0 El Jadida</strong>, c&apos;est naviguer entre
          ces deux r\u00e9alit\u00e9s : un patrimoine fortifi\u00e9 exigeant et un march\u00e9 immobilier
          dynamis\u00e9 par l&apos;industrie et la proximit\u00e9 de Casablanca.
        </p>

        <h2>La cit\u00e9 portugaise : restaurer un patrimoine fortifi\u00e9 unique</h2>
        <p>
          La forteresse de Mazagan, \u00e9rig\u00e9e par les Portugais au d\u00e9but du XVI<sup>e</sup> si\u00e8cle,
          constitue un cas architectural \u00e0 part au Maroc. Ici, pas de riads ni de
          dar traditionnels : on trouve des bastions \u00e0 \u00e9chauguettes, des casemates
          vo\u00fbt\u00e9es et surtout la c\u00e9l\u00e8bre <strong>citerne portugaise</strong>, chef-d&apos;\u0153uvre
          gothique dont les arcs se refl\u00e8tent dans l&apos;eau \u2014 l&apos;un des monuments les
          plus photographi\u00e9s du pays. Les projets de restauration \u00e0 l&apos;int\u00e9rieur
          de la forteresse ob\u00e9issent \u00e0 des r\u00e8gles radicalement diff\u00e9rentes de celles
          d&apos;une m\u00e9dina classique.
        </p>
        <p>
          Les murs de la forteresse atteignent 2 \u00e0 3 m d&apos;\u00e9paisseur : impossible de
          les percer pour cr\u00e9er de nouvelles ouvertures sans autorisation du
          minist\u00e8re de la Culture. Les mat\u00e9riaux doivent respecter la pierre
          d&apos;origine (gr\u00e8s coquillier local). Les r\u00e9seaux techniques (eau, \u00e9lectricit\u00e9)
          doivent \u00eatre int\u00e9gr\u00e9s sans alt\u00e9rer la structure. Le co\u00fbt de restauration
          dans la cit\u00e9 portugaise se situe entre 6 000 et 10 000 MAD/m\u00b2, un budget
          justifi\u00e9 par la complexit\u00e9 technique et la valeur patrimoniale du r\u00e9sultat.
          Un architecte sp\u00e9cialis\u00e9 en patrimoine est indispensable pour obtenir les
          autorisations et coordonner les artisans qualifi\u00e9s.
        </p>

        <h2>Sidi Bouzid et Haouzia : le nouveau visage baln\u00e9aire</h2>
        <p>
          \u00c0 quelques kilom\u00e8tres du centre historique, le quartier de <strong>Sidi Bouzid</strong> s&apos;impose
          comme le front de mer premium d&apos;El Jadida. Les villas contemporaines y
          poussent face \u00e0 l&apos;oc\u00e9an, \u00e0 des prix cinq fois inf\u00e9rieurs \u00e0 ceux
          d&apos;Ain Diab \u00e0 Casablanca. Le terrain constructible s&apos;y n\u00e9gocie entre
          3 500 et 7 000 MAD/m\u00b2, et une villa cl\u00e9 en main co\u00fbte de 5 500 \u00e0
          8 500 MAD/m\u00b2 selon le standing.
        </p>
        <p>
          L&apos;architecture baln\u00e9aire \u00e0 Sidi Bouzid r\u00e9pond \u00e0 des contraintes sp\u00e9cifiques
          que l&apos;on ne retrouve pas sur la c\u00f4te m\u00e9diterran\u00e9enne. Le vent d&apos;ouest atlantique,
          violent et charg\u00e9 de sel, impose des fa\u00e7ades abrit\u00e9es, des terrasses en
          retrait prot\u00e9g\u00e9es par des murets et des claustras, et des mat\u00e9riaux
          r\u00e9sistants \u00e0 la corrosion. Les architectes exp\u00e9riment\u00e9s orientent les
          pi\u00e8ces de vie vers l&apos;est ou le sud-est, r\u00e9servant la fa\u00e7ade ouest aux
          espaces de service. Plus au sud, <strong>Haouzia</strong> et son golf attirent
          une client\u00e8le r\u00e9sidentielle avec des lotissements paysagers o\u00f9 le terrain
          descend \u00e0 2 000-4 000 MAD/m\u00b2.
        </p>

        <h2>Comment Jorf Lasfar influence-t-il le marché architectural ?</h2>
        <p>
          \u00c0 20 km au sud d&apos;El Jadida, le complexe industriel de <strong>Jorf Lasfar</strong> abrite
          le plus grand site de transformation de phosphates au monde, exploit\u00e9
          par l&apos;OCP. Cette pr\u00e9sence industrielle massive cr\u00e9e un march\u00e9 architectural
          sans \u00e9quivalent dans les autres villes c\u00f4ti\u00e8res marocaines. Les architectes
          locaux travaillent sur trois cr\u00e9neaux li\u00e9s \u00e0 Jorf Lasfar.
        </p>
        <ul>
          <li><strong>Logements cadres et ing\u00e9nieurs</strong> : villas et r\u00e9sidences standing moyen-haut, budget 4 500 \u00e0 6 500 MAD/m\u00b2, souvent command\u00e9es par des promoteurs pour le compte de l&apos;OCP ou de ses sous-traitants.</li>
          <li><strong>Cit\u00e9s ouvri\u00e8res et logements sociaux</strong> : programmes de 50 \u00e0 200 unit\u00e9s, co\u00fbt de 2 800 \u00e0 3 500 MAD/m\u00b2, soumis aux normes du programme Al Omrane.</li>
          <li><strong>B\u00e2timents industriels et bureaux</strong> : hangars, laboratoires, si\u00e8ges administratifs avec des cahiers des charges techniques stricts (ventilation ATEX, sols antiacides, traitement des effluents).</li>
        </ul>
        <p>
          Ce march\u00e9 industriel repr\u00e9sente environ 30 % de l&apos;activit\u00e9 des cabinets
          d&apos;architecture de la r\u00e9gion, un pourcentage qu&apos;aucune autre ville
          c\u00f4ti\u00e8re marocaine n&apos;atteint.
        </p>

        <h2>Construire face \u00e0 l&apos;Atlantique : les d\u00e9fis du vent et du sel</h2>
        <p>
          Contrairement \u00e0 T\u00e9touan ou Tanger sur la c\u00f4te m\u00e9diterran\u00e9enne, El Jadida
          affronte un r\u00e9gime climatique atlantique brutal. Les vents d&apos;ouest
          dominants atteignent r\u00e9guli\u00e8rement 60 \u00e0 80 km/h en hiver, les embruns
          sal\u00e9s corrodent le m\u00e9tal et d\u00e9gradent le b\u00e9ton non prot\u00e9g\u00e9, et l&apos;humidit\u00e9
          ambiante d\u00e9passe 85 % une grande partie de l&apos;ann\u00e9e.
        </p>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="text-left px-3 py-2 border border-stone-200">Contrainte</th>
              <th className="text-left px-3 py-2 border border-stone-200">Solution technique</th>
              <th className="text-left px-3 py-2 border border-stone-200">Surco\u00fbt estim\u00e9</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-3 py-2 border border-stone-200">Corrosion saline</td>
              <td className="px-3 py-2 border border-stone-200">B\u00e9ton arm\u00e9 enrobage 5 cm, acier galvanis\u00e9, peintures marines</td>
              <td className="px-3 py-2 border border-stone-200">+8 \u00e0 12 %</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-stone-200">Vent violent (80 km/h)</td>
              <td className="px-3 py-2 border border-stone-200">Orientation est/sud-est, murets brise-vent, haies de tamaris</td>
              <td className="px-3 py-2 border border-stone-200">+3 \u00e0 5 %</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-stone-200">Humidit\u00e9 permanente</td>
              <td className="px-3 py-2 border border-stone-200">VMC double flux, enduits hydrofuges, drainage p\u00e9riph\u00e9rique</td>
              <td className="px-3 py-2 border border-stone-200">+5 \u00e0 8 %</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-stone-200">Menuiseries expos\u00e9es</td>
              <td className="px-3 py-2 border border-stone-200">Aluminium laqu\u00e9 marin ou PVC renforc\u00e9, vitrage 6/16/4</td>
              <td className="px-3 py-2 border border-stone-200">+10 \u00e0 15 %</td>
            </tr>
          </tbody>
        </table>
        <p>
          Au total, construire en front de mer \u00e0 El Jadida co\u00fbte 10 \u00e0 15 % de plus
          qu&apos;une construction identique en zone int\u00e9rieure. Cet investissement
          suppl\u00e9mentaire est n\u00e9anmoins indispensable : un b\u00e2timent mal prot\u00e9g\u00e9
          montre des signes de d\u00e9gradation d\u00e8s les 3 \u00e0 5 premi\u00e8res ann\u00e9es.
        </p>

        <h2>Un march\u00e9 immobilier dop\u00e9 par la proximit\u00e9 de Casablanca</h2>
        <p>
          L&apos;autoroute A1 place El Jadida \u00e0 seulement 1 heure de Casablanca,
          transformant la ville en r\u00e9sidence secondaire naturelle pour les
          Casablancais. Ce ph\u00e9nom\u00e8ne de <strong>double r\u00e9sidence</strong> g\u00e9n\u00e8re un march\u00e9
          sp\u00e9cifique : des clients qui vivent \u00e0 Casa en semaine et profitent de
          leur villa d&apos;El Jadida le week-end. Les architectes de la r\u00e9gion
          con\u00e7oivent donc des habitations pens\u00e9es pour un usage intermittent :
          syst\u00e8mes domotiques de surveillance \u00e0 distance, mat\u00e9riaux n\u00e9cessitant
          peu d&apos;entretien, jardins en xer\u00efscaping.
        </p>
        <p>
          Cette client\u00e8le casablancaise repr\u00e9sente jusqu&apos;\u00e0 60 % des projets
          de villas dans les quartiers de Sidi Bouzid et Haouzia. Elle tire
          les standards vers le haut : finitions contemporaines, cuisines
          \u00e9quip\u00e9es, piscines priv\u00e9es. Le budget moyen d&apos;une villa de week-end
          oscille entre 1,5 et 3,5 millions de MAD, terrain compris.
          Les cabinets d&apos;architecture d&apos;El Jadida travaillent souvent en
          tandem avec des d\u00e9corateurs d&apos;int\u00e9rieur de Casablanca pour r\u00e9pondre
          aux attentes de cette client\u00e8le exigeante.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Que votre projet concerne la restauration d&apos;un bien dans la forteresse
            portugaise, une villa face \u00e0 l&apos;oc\u00e9an \u00e0 Sidi Bouzid ou un programme li\u00e9
            au p\u00f4le industriel de Jorf Lasfar, Bati.ma r\u00e9f\u00e9rence les architectes
            de la r\u00e9gion Doukkala-Abda avec leurs sp\u00e9cialisations et r\u00e9alisations.
            Comparez les profils et demandez vos devis gratuitement.
          </p>
        </div>

        <h2>Honoraires et d\u00e9marches administratives</h2>
        <p>
          Les honoraires d&apos;un architecte \u00e0 El Jadida varient selon la nature du
          projet. Pour une mission compl\u00e8te (conception, suivi de chantier,
          r\u00e9ception), comptez 4 \u00e0 7 % du montant des travaux. Un simple d\u00e9p\u00f4t
          de permis de construire co\u00fbte entre 15 000 et 35 000 MAD. Les projets
          en zone prot\u00e9g\u00e9e (p\u00e9rim\u00e8tre UNESCO, littoral) n\u00e9cessitent des \u00e9tudes
          compl\u00e9mentaires qui portent les honoraires \u00e0 8-10 % du budget.
        </p>
        <p>
          Le permis de construire est instruit par la commune apr\u00e8s avis de
          l&apos;Agence urbaine d&apos;El Jadida. Conform\u00e9ment \u00e0 la <strong>loi 016-89</strong>,
          seul un architecte inscrit \u00e0 l&apos;Ordre peut d\u00e9poser le dossier. Pour les
          projets en zone littorale, un avis du Domaine public maritime est requis.
          D\u00e9lai moyen : 2 \u00e0 3 mois, pouvant atteindre 5 mois pour les
          constructions dans le p\u00e9rim\u00e8tre de la cit\u00e9 portugaise o\u00f9 le minist\u00e8re
          de la Culture intervient dans la proc\u00e9dure.
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
