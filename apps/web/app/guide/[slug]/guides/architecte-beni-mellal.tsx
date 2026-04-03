export default function GuideArchitecteBeniMellal() {
  const faq = [
    { q: "Peut-on construire en pierre locale à Béni Mellal ?", a: "Oui, la région du Tadla dispose d\u2019abondantes carrières de calcaire et de grès. La construction en moellons de pierre locale reste courante et conforme au RPS 2011 à condition de respecter les épaisseurs minimales (40 cm pour les murs porteurs) et d\u2019intégrer des chaînages en béton armé. Le coût des moellons tourne autour de 80 à 120 MAD/m² posé, soit 30 à 40 % moins cher que le parpaing importé. Un architecte inscrit à l\u2019Ordre peut certifier la conformité structurelle du projet." },
    { q: "Comment l\u2019altitude affecte-t-elle la construction à Béni Mellal ?", a: "Béni Mellal se situe à environ 500 m d\u2019altitude au pied du Jbel Tassemit (2 248 m). Les hivers sont froids avec des gelées fréquentes et parfois de la neige. Les fondations doivent descendre à 80 cm minimum pour éviter le gel superficiel. L\u2019isolation thermique est indispensable : double cloison avec lame d\u2019air de 10 cm ou polystyrène extrudé de 5 cm. La surcharge de neige doit être prise en compte dans le calcul des toitures plates selon le RPS 2011, avec un coefficient de 0,4 kN/m² minimum." },
    { q: "Y a-t-il des aides pour construire un gîte rural dans la région ?", a: "Le programme Biladi soutient le tourisme intérieur avec des subventions pouvant atteindre 40 % du coût d\u2019aménagement pour les gîtes ruraux labellisés. L\u2019INDH (Initiative Nationale pour le Développement Humain) finance aussi des projets d\u2019hébergement touristique en milieu rural. Le CRI de Béni Mellal-Khénifra accompagne les porteurs de projets dans les démarches administratives. Le dossier nécessite un plan architectural validé par un architecte agréé et une étude d\u2019impact environnemental simplifiée." },
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
        <h2>Béni Mellal : la ville la moins chère pour construire au Maroc</h2>
        <p>
          Faire appel à un <strong>architecte à Béni Mellal</strong>, c&apos;est
          accéder au marché de la construction le plus compétitif du Maroc. Là où
          une villa de 200 m² coûte 2 millions de MAD à Casablanca, le même projet
          revient à 1,2 million dans la capitale du Tadla. Cet écart de 30 à 40 %
          s&apos;explique par trois facteurs : une main-d&apos;œuvre abondante et moins
          chère (les maçons qualifiés facturent 250 à 350 MAD/jour contre 400 à
          550 MAD sur le littoral), des matériaux locaux issus des carrières de
          l&apos;Atlas (pierre, sable d&apos;oued, gravier), et un foncier qui n&apos;a pas
          subi la spéculation des grandes métropoles.
        </p>

        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="text-left px-3 py-2 border border-stone-200">Poste</th>
              <th className="text-left px-3 py-2 border border-stone-200">Béni Mellal</th>
              <th className="text-left px-3 py-2 border border-stone-200">Casablanca</th>
              <th className="text-left px-3 py-2 border border-stone-200">Marrakech</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-3 py-2 border border-stone-200">Terrain (MAD/m²)</td>
              <td className="px-3 py-2 border border-stone-200">300 - 1 500</td>
              <td className="px-3 py-2 border border-stone-200">3 000 - 12 000</td>
              <td className="px-3 py-2 border border-stone-200">2 000 - 8 000</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-stone-200">Gros œuvre (MAD/m²)</td>
              <td className="px-3 py-2 border border-stone-200">2 000 - 2 800</td>
              <td className="px-3 py-2 border border-stone-200">3 200 - 4 500</td>
              <td className="px-3 py-2 border border-stone-200">2 800 - 4 000</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-stone-200">Villa clé en main (MAD/m²)</td>
              <td className="px-3 py-2 border border-stone-200">3 500 - 5 000</td>
              <td className="px-3 py-2 border border-stone-200">6 000 - 9 000</td>
              <td className="px-3 py-2 border border-stone-200">5 500 - 8 000</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-stone-200">Maçon qualifié (MAD/jour)</td>
              <td className="px-3 py-2 border border-stone-200">250 - 350</td>
              <td className="px-3 py-2 border border-stone-200">400 - 550</td>
              <td className="px-3 py-2 border border-stone-200">350 - 500</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-stone-200">Honoraires architecte</td>
              <td className="px-3 py-2 border border-stone-200">2,5 % - 5 %</td>
              <td className="px-3 py-2 border border-stone-200">4 % - 8 %</td>
              <td className="px-3 py-2 border border-stone-200">3,5 % - 7 %</td>
            </tr>
          </tbody>
        </table>

        <h2>Construire au pied de l&apos;Atlas : le défi de l&apos;eau et de la pente</h2>
        <p>
          Béni Mellal s&apos;étale à 500 m d&apos;altitude, adossée au Jbel Tassemit
          qui culmine à 2 248 m. Cette position au carrefour de la montagne et de
          la plaine du Tadla impose des contraintes que les architectes locaux
          connaissent bien. Le sol argilo-calcaire gonfle en hiver sous l&apos;effet
          des pluies abondantes (500 mm/an, plus que Marrakech) et se rétracte en
          été sous une chaleur qui dépasse régulièrement 42°C.
        </p>
        <p>
          Les terrains en pente, fréquents dès qu&apos;on s&apos;éloigne du centre
          vers les contreforts, exigent des fondations profondes sur semelles
          filantes ou sur micropieux. Le ruissellement montagnard reste un risque
          réel : les sources comme Ain Asserdoun témoignent de la pression
          hydraulique souterraine. Un <strong>architecte à Béni Mellal</strong> expérimenté
          commandera systématiquement une étude géotechnique (8 000 à 15 000 MAD)
          et concevra un système de drainage périphérique pour protéger les
          fondations. En hiver, les gelées nocturnes imposent une profondeur
          d&apos;assise minimale de 80 cm, et la neige occasionnelle doit être
          intégrée dans le calcul de la toiture.
        </p>

        <h2>L&apos;agritourisme : le nouveau marché des architectes de Béni Mellal</h2>
        <p>
          La région Béni Mellal-Khénifra est le grenier du Maroc : olives du
          Tadla, agrumes de Fquih Ben Salah, céréales de la plaine irriguée par
          le barrage Bin el-Ouidane. Ce patrimoine agricole engendre une niche
          architecturale en pleine expansion : la conversion de fermes
          traditionnelles en gîtes ruraux et lodges agritouristiques.
        </p>
        <p>
          Les investisseurs recherchent des architectes capables de marier le
          confort moderne (climatisation, wifi, salles de bain contemporaines)
          avec le charme rustique (murs en pierre apparente, charpentes en bois
          de thuya, patios plantés d&apos;oliviers). L&apos;autonomie énergétique
          est centrale : panneaux solaires (l&apos;ensoleillement dépasse 3 000 h/an),
          chauffe-eau solaires, et systèmes de récupération d&apos;eau de pluie.
          Un gîte rural de 6 chambres revient entre 800 000 et 1 500 000 MAD tout
          compris, avec un retour sur investissement estimé à 5-7 ans grâce à la
          proximité des cascades d&apos;Ouzoud, premier site naturel touristique du
          Maroc.
        </p>

        <h2>Le béton de pierre locale : une tradition constructive du Tadla</h2>
        <p>
          Avant le béton industriel, les bâtisseurs du Tadla construisaient en
          moellons de calcaire extraits des carrières de l&apos;Atlas. Cette
          technique, loin d&apos;être archaïque, revient en force grâce à des
          architectes qui la modernisent. Le principe : des murs porteurs de
          40 à 50 cm en pierre locale, chaînés par des ceintures en béton armé
          à chaque niveau, conformément au règlement parasismique RPS 2011.
        </p>
        <p>
          Les avantages sont multiples. Le coût des moellons (80 à 120 MAD/m²
          posé) est inférieur au parpaing importé. L&apos;inertie thermique de la
          pierre régule naturellement la température intérieure, réduisant la
          facture de climatisation de 25 à 35 %. L&apos;esthétique est
          incomparable : murs en pierre apparente à l&apos;extérieur, enduits
          traditionnels à l&apos;intérieur. Plusieurs cabinets d&apos;architectes
          de Béni Mellal se spécialisent dans cette approche bioclimatique qui
          séduit autant les particuliers que les promoteurs de projets
          touristiques.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Trouvez votre architecte à Béni Mellal sur Bati.ma. Spécialistes en
            construction en pierre locale, gîtes agritouristiques ou villas
            résidentielles au pied de l&apos;Atlas, nos professionnels connaissent
            les particularités du Tadla. Comparez les profils et demandez vos
            devis gratuitement.
          </p>
        </div>

        <h2>Investir à Béni Mellal : l&apos;étudiante et le touriste</h2>
        <p>
          Deux marchés complémentaires tirent la demande immobilière à Béni
          Mellal. D&apos;un côté, l&apos;université Sultan Moulay Slimane accueille
          plus de 40 000 étudiants, créant une demande locative constante pour
          des studios et appartements meublés. Un studio de 30 m² près du campus
          se loue entre 1 500 et 2 500 MAD/mois, pour un investissement
          construction de 120 000 à 180 000 MAD seulement. Le rendement locatif
          brut atteint 12 à 15 %, parmi les plus élevés du Maroc.
        </p>
        <p>
          De l&apos;autre, le tourisme de nature progresse : les cascades
          d&apos;Ouzoud (à 50 km), la source Ain Asserdoun, le lac Bin el-Ouidane
          et les sentiers de randonnée du Moyen Atlas attirent un flux croissant
          de visiteurs nationaux et internationaux. Les maisons d&apos;hôtes et
          riads de charme dans la médina ou en périphérie rurale affichent des
          taux d&apos;occupation de 60 à 75 % en haute saison. Un architecte
          local vous aidera à concevoir un projet qui capte ces deux marchés :
          logement étudiant en saison universitaire, location touristique
          pendant l&apos;été.
        </p>

        <h2>Démarches et réglementation locale</h2>
        <p>
          Le permis de construire à Béni Mellal est délivré par la commune urbaine
          ou la commune rurale selon la localisation du terrain. En zone urbaine,
          le plan d&apos;aménagement fixe les hauteurs autorisées (généralement R+3
          en centre-ville, R+2 en périphérie) et les coefficients d&apos;occupation
          du sol. En zone rurale, la <strong>loi 25-90</strong> encadre strictement
          la construction sur les terres agricoles : surface constructible limitée,
          autorisation du gouverneur, respect de la vocation agricole. La
          <strong> loi 12-90</strong> régit l&apos;ensemble du processus d&apos;obtention
          du permis. Un architecte inscrit à l&apos;Ordre national (loi 016-89)
          est obligatoire pour tout projet dépassant 150 m².
        </p>
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-stone-900 mb-5">Questions fréquentes</h2>
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
