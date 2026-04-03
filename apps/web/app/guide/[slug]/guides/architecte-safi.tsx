export default function GuideArchitecteSafi() {
  const faq = [
    { q: "Comment integrer la ceramique de Safi dans un projet architectural moderne ?", a: "La Colline des Potiers regroupe plus de 800 artisans capables de produire des elements sur mesure : facades en ceramique emaille (350 a 600 MAD/m\u00B2), zellige safiote aux motifs geometriques distincts du zellige fassi, vasques et fontaines decoratives. Pour un projet moderne, prevoyez un budget de 15 000 a 40 000 MAD pour l\u2019habillage ceramique d\u2019une facade de 20 m\u00B2. L\u2019avantage : travailler directement avec l\u2019artisan sans intermediaire, ce qui reduit les couts de 30 a 40 % par rapport a une commande depuis Casablanca ou Marrakech." },
    { q: "Quel budget pour renover un riad dans la medina de Safi ?", a: "Un riad de 100 a 150 m\u00B2 dans la medina de Safi s\u2019acquiert entre 200 000 et 500 000 MAD, soit 5 a 10 fois moins qu\u2019a Essaouira (1 a 3 millions MAD) ou Marrakech (2 a 8 millions MAD). La renovation complete coute entre 2 000 et 5 000 MAD/m\u00B2 selon le niveau de finition. Budget total pour un riad transforme en maison d\u2019hotes de 5 chambres : 600 000 a 1 200 000 MAD tout compris, contre 3 a 6 millions MAD a Essaouira. Le retour sur investissement est plus rapide grace au cout d\u2019entree tres bas." },
    { q: "Les projets OCP a Jorf Lasfar generent-ils du travail pour les architectes locaux ?", a: "Oui, l\u2019extension de Jorf Lasfar Sud cree un double marche. D\u2019un cote, les projets industriels (usines, bureaux, infrastructures portuaires) sont attribues a de grands cabinets nationaux. De l\u2019autre, la demande en logements pour cadres et ingenieurs OCP genere des commandes locales : villas haut standing (6 000 a 9 000 MAD/m\u00B2), residences d\u2019entreprise, equipements de loisirs. Les architectes de Safi captent environ 40 % de cette demande residentielle, le reste allant a des cabinets de Casablanca ou El Jadida." },
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
        <h2>Safi, capitale de la ceramique : quand l&apos;artisanat faconne l&apos;architecture</h2>
        <p>
          Aucune autre ville marocaine ne porte son identite aussi litteralement
          dans ses murs. A <strong>Safi</strong>, la ceramique n&apos;est pas un
          ornement : c&apos;est un materiau structurant. La <strong>Colline des
          Potiers</strong> (Bab Chaaba) reunit plus de 800 artisans sur un site
          classe patrimoine national, produisant chaque jour des milliers de
          pieces -- du zellige safiote aux tuiles vernissees, des vasques
          monumentales aux panneaux decoratifs contemporains. Cette proximite
          entre ateliers et chantiers offre aux <strong>architectes de Safi</strong> un
          avantage que nul cabinet casablancais ne peut reproduire : commander
          une facade en ceramique sur mesure, la voir naitre a 500 metres du
          chantier, ajuster les couleurs en temps reel avec l&apos;artisan.
        </p>
        <p>
          Le zellige safiote se distingue du zellige fassi par ses motifs plus
          geometriques, ses emaux plus epais et ses couleurs terre -- ocre,
          vert olive, bleu petrole -- qui refletent la palette du paysage
          atlantique. Un <strong>architecte a Safi</strong> qui maitrise ce
          vocabulaire ceramique peut proposer des realisations impossibles a
          obtenir ailleurs au meme prix : facades entieres habillees de
          ceramique artisanale pour 350 a 600 MAD/m&sup2;, fontaines integrees
          aux patios pour 8 000 a 25 000 MAD, escaliers ornes de carreaux
          uniques fabriques a la commande.
        </p>

        <h2>Le port et la sardine : construire dans une ville industrielle</h2>
        <p>
          Safi est le <strong>premier port sardinier du Maroc</strong> et l&apos;un
          des plus importants au monde. Cette realite industrielle facon ne un
          tissu urbain atypique ou cohabitent conserveries centenaires,
          entrepots frigorifiques, ateliers de conditionnement et quartiers
          residentiels ouvriers. Pour un architecte, cette diversite signifie
          une palette de commandes inhabituellement large : conception d&apos;une
          unite de transformation de poisson (cahier des charges ONSSA,
          normes sanitaires strictes), rehabilitation d&apos;une ancienne
          conserverie en loft ou espace culturel, construction d&apos;un
          entrepot frigorifique aux normes internationales.
        </p>
        <p>
          Cette dualite entre industrie et patrimoine cree un marche
          architectural bipolaire. Les projets industriels representent 35 a
          40 % de l&apos;activite des cabinets locaux, avec des budgets de
          construction allant de 2 500 a 4 500 MAD/m&sup2; pour les batiments
          techniques. Les projets residentiels et touristiques completent le
          portefeuille, avec des villas a 3 800 a 5 500 MAD/m&sup2; en
          peripherie et des renovations en medina a 2 000 a 5 000 MAD/m&sup2;.
        </p>

        <h2>La medina de Safi : le dernier territoire abordable de la cote</h2>
        <p>
          Quand Essaouira affiche des riads a 2 millions MAD minimum et que
          Marrakech depasse allegrement les 5 millions, la <strong>medina de
          Safi</strong> reste un territoire quasi vierge pour les investisseurs.
          Des maisons traditionnelles de 80 a 150 m&sup2; se negocient entre
          200 000 et 500 000 MAD. Des riads a restaurer avec patio, parfois
          avec vue sur l&apos;ocean, se trouvent encore a 350 000 MAD. C&apos;est
          probablement la derniere fenetre d&apos;opportunite sur le littoral
          atlantique marocain.
        </p>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="text-left px-3 py-2 border border-stone-200">Critere</th>
              <th className="text-left px-3 py-2 border border-stone-200">Safi</th>
              <th className="text-left px-3 py-2 border border-stone-200">Essaouira</th>
              <th className="text-left px-3 py-2 border border-stone-200">Marrakech</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-3 py-2 border border-stone-200">Achat riad brut</td>
              <td className="px-3 py-2 border border-stone-200">200 000 - 500 000 MAD</td>
              <td className="px-3 py-2 border border-stone-200">1 000 000 - 3 000 000 MAD</td>
              <td className="px-3 py-2 border border-stone-200">2 000 000 - 8 000 000 MAD</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-stone-200">Renovation / m&sup2;</td>
              <td className="px-3 py-2 border border-stone-200">2 000 - 5 000 MAD</td>
              <td className="px-3 py-2 border border-stone-200">4 000 - 8 000 MAD</td>
              <td className="px-3 py-2 border border-stone-200">5 000 - 12 000 MAD</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-stone-200">Honoraires architecte</td>
              <td className="px-3 py-2 border border-stone-200">3 % - 5 %</td>
              <td className="px-3 py-2 border border-stone-200">5 % - 8 %</td>
              <td className="px-3 py-2 border border-stone-200">6 % - 10 %</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-stone-200">Acces vehicule medina</td>
              <td className="px-3 py-2 border border-stone-200">Tres limite</td>
              <td className="px-3 py-2 border border-stone-200">Limite</td>
              <td className="px-3 py-2 border border-stone-200">Impossible</td>
            </tr>
          </tbody>
        </table>
        <p>
          Les defis sont reels : ruelles etroites interdisant tout acces
          vehicule (approvisionnement par mulets ou brouettes), reseaux
          d&apos;assainissement vetustes, absence de plans cadastraux fiables.
          Un architecte experimente dans la medina de Safi sait negocier avec
          la commune pour les autorisations de chantier, organiser la
          logistique des materiaux en zone pietonne et renforcer les
          structures sans demonter les murs mitoyens.
        </p>

        <h2>L&apos;effet OCP : Jorf Lasfar Sud et la nouvelle Safi</h2>
        <p>
          Le complexe industriel de <strong>Jorf Lasfar</strong>, situe a 20 km
          au nord de Safi, est le plus grand site de transformation de
          phosphates au monde. Son extension vers le sud genere une demande
          immobiliere sans precedent dans la region : logements pour cadres
          expatries et ingenieurs, bureaux aux normes internationales, espaces
          de vie (clubs, piscines, centres commerciaux) destines a attirer
          des talents habitues aux standards de Casablanca ou de l&apos;etranger.
        </p>
        <p>
          Pour les architectes locaux, ce marche OCP represente une montee en
          gamme considerable. Les villas destinees aux cadres atteignent 6 000
          a 9 000 MAD/m&sup2; en cout de construction, avec des exigences de
          finition (domotique, isolation phonique, jardins paysagers) rares
          dans le reste de Safi. Les residences d&apos;entreprise de 20 a 50
          logements mobilisent des budgets de 15 a 40 millions MAD par
          operation. Cette nouvelle Safi coexiste avec la ville ancienne,
          creant deux marches architecturaux paralleles qui ne se recoupent
          que rarement.
        </p>

        <h2>Construire face au vent d&apos;Alize : specificites techniques de Safi</h2>
        <p>
          Safi est balayee par les <strong>alizés atlantiques</strong> quasiment
          toute l&apos;annee, avec des vents dominants nord/nord-ouest atteignant
          regulierement 50 a 70 km/h. Cette contrainte climatique majeure
          dicte des choix architecturaux specifiques que tout architecte
          local doit maitriser :
        </p>
        <ul>
          <li><strong>Profils bas et compacts</strong> : les constructions safiottes traditionnelles depassent rarement R+2, avec des toitures-terrasses a acrotere haut (60 cm minimum) pour reduire la prise au vent</li>
          <li><strong>Cours interieures protegees</strong> : le patio central, heritage andalou, sert de zone de calme aerodynamique -- les temperatures y sont 3 a 5 &deg;C plus elevees qu&apos;en facade ouest</li>
          <li><strong>Ouvertures minimales cote ouest</strong> : les facades exposees au vent recoivent peu ou pas de fenetres, concentrant les ouvertures sur les facades est et sud</li>
          <li><strong>Murs epais</strong> : 40 a 50 cm en construction traditionnelle, assurant a la fois inertie thermique et resistance aux rafales chargees d&apos;embruns salins</li>
          <li><strong>Protection anti-corrosion</strong> : l&apos;air salin impose l&apos;utilisation d&apos;aluminium laque ou de menuiseries en PVC plutot que l&apos;acier, et un traitement hydrofuge des facades tous les 5 a 7 ans</li>
        </ul>
        <p>
          Ces contraintes techniques different radicalement de celles des
          villes interieures comme Beni Mellal ou Meknes, ou la chaleur seche
          est le principal ennemi. A Safi, c&apos;est le sel, le vent et
          l&apos;humidite qui dictent les regles. Un architecte qui ignore ces
          parametres livrera un batiment degradé en moins de dix ans.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Vous cherchez un <strong>architecte a Safi</strong> qui connait
            aussi bien la Colline des Potiers que les normes OCP ? Sur
            Bati.ma, consultez les profils d&apos;architectes de la region
            Marrakech-Safi avec leurs realisations en medina, en zone
            industrielle et en peripherie. Demandez vos devis gratuitement
            et comparez les approches.
          </p>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-stone-900 mb-5">Questions frequentes</h2>
        <div className="space-y-4">
          {faq.map((f) => (
            <details key={f.q} className="group border border-stone-200 rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between px-4 py-3 cursor-pointer text-sm font-medium text-stone-800 hover:bg-stone-50">
                {f.q}
                <span className="text-stone-400 group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <div className="px-4 pb-4 pt-1 text-sm text-stone-600 leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
