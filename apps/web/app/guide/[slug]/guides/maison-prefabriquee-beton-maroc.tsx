export default function GuidePrefabBeton() {
  const faq = [
    { q: "Une maison en béton préfabriqué résiste-t-elle aux séismes au Maroc ?", a: "Oui, le béton préfabriqué est l\u0027un des systèmes les plus performants face aux séismes. Les éléments sont calculés selon le RPS 2000 (règlement parasismique marocain) et les jonctions entre panneaux sont renforcées par des armatures soudées et du béton coulé en place. Après le séisme d\u0027Al Haouz en 2023, les structures préfabriquées en béton ont montré une résistance supérieure à la maçonnerie traditionnelle." },
    { q: "Quelle est la différence entre béton préfabriqué et béton coulé sur place ?", a: "Le béton préfabriqué est fabriqué en usine dans des conditions contrôlées (température, humidité, vibration), garantissant une qualité supérieure et constante. Le béton coulé sur place dépend des conditions du chantier et de la main-d\u0027œuvre. Le préfabriqué permet un montage 3 à 5 fois plus rapide et réduit les déchets de 80 %. En revanche, il nécessite des engins de levage et un accès adapté au chantier." },
    { q: "Quels sont les principaux fournisseurs de béton préfabriqué au Maroc ?", a: "Les principaux acteurs sont TGCC Préfa (Casablanca), leader du marché avec une capacité de production de 200 000 m² par an ; Prefa Maroc (Kénitra) spécialisé dans les dalles alvéolées ; Bonna Maroc (Berrechid) pour les poteaux et poutres ; et Stradal Maroc (Tanger) pour les éléments de voirie et assainissement. Des fournisseurs internationaux comme Precon et Consolis opèrent également au Maroc." },
    { q: "Quelle est la durée de vie d\u0027une maison en béton préfabriqué ?", a: "Une maison en béton préfabriqué a une durée de vie de 50 à 100 ans, comparable voire supérieure à la construction traditionnelle. La qualité du béton fabriqué en usine (dosage précis, vibration contrôlée, cure optimale) garantit une résistance mécanique et une durabilité supérieures au béton coulé sur chantier." },
    { q: "Le béton préfabriqué est-il adapté aux maisons individuelles au Maroc ?", a: "Oui, bien que le béton préfabriqué soit traditionnellement associé aux grands projets (immeubles, entrepôts), il s\u0027adapte parfaitement aux maisons individuelles. Les panneaux de mur porteur, dalles alvéolées et escaliers préfabriqués permettent de construire une villa complète en 4 à 8 semaines. Le coût est compétitif à partir de 100 m² de surface habitable." },
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
        <h2>Qu&apos;est-ce que le béton préfabriqué ?</h2>
        <p>
          Le béton préfabriqué désigne des <strong>éléments en béton armé fabriqués en usine</strong> puis transportés
          et assemblés sur le chantier. Cette technique industrielle garantit une qualité constante grâce au contrôle
          des dosages, de la vibration et du temps de cure. Au Maroc, le béton préfabriqué représente environ
          <strong> 15 % du marché de la construction</strong>, un chiffre en hausse de 10 % par an depuis les
          grands chantiers du Mondial 2030.
        </p>
        <p>
          Les principaux éléments préfabriqués utilisés dans la construction résidentielle sont les panneaux
          de mur porteur, les dalles alvéolées, les poutres précontraintes, les escaliers et les linteaux.
          Chaque élément est dimensionné sur mesure selon les plans de l&apos;architecte.
        </p>

        <h2>Éléments préfabriqués et leurs utilisations</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead><tr className="bg-stone-100"><th className="border border-stone-200 px-3 py-2 text-left">Élément préfabriqué</th><th className="border border-stone-200 px-3 py-2 text-left">Utilisation</th><th className="border border-stone-200 px-3 py-2 text-left">Prix indicatif</th></tr></thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">Panneau mur porteur</td><td className="border border-stone-200 px-3 py-2">Murs extérieurs et intérieurs porteurs, isolation intégrée possible</td><td className="border border-stone-200 px-3 py-2">800 – 1 200 MAD/m²</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Dalle alvéolée</td><td className="border border-stone-200 px-3 py-2">Planchers intermédiaires et toitures, portée jusqu&apos;à 16 m</td><td className="border border-stone-200 px-3 py-2">350 – 550 MAD/m²</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Poutre précontrainte</td><td className="border border-stone-200 px-3 py-2">Charpente, portiques, grandes portées sans poteau intermédiaire</td><td className="border border-stone-200 px-3 py-2">1 500 – 3 000 MAD/ml</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Escalier préfabriqué</td><td className="border border-stone-200 px-3 py-2">Escaliers droits et tournants, finition lisse d&apos;usine</td><td className="border border-stone-200 px-3 py-2">8 000 – 15 000 MAD/unité</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Linteau préfabriqué</td><td className="border border-stone-200 px-3 py-2">Dessus de baies (portes, fenêtres), pose rapide sans coffrage</td><td className="border border-stone-200 px-3 py-2">150 – 400 MAD/ml</td></tr>
          </tbody>
        </table>

        <h2>Avantages du béton préfabriqué pour la maison au Maroc</h2>
        <p><strong>Solidité et durabilité :</strong></p>
        <ul>
          <li>Béton de haute résistance (C30/37 à C50/60) fabriqué dans des conditions optimales</li>
          <li>Durée de vie de 50 à 100 ans avec un entretien minimal</li>
          <li>Résistance au feu REI 120 (2 heures) sans traitement supplémentaire</li>
        </ul>
        <p><strong>Performance parasismique :</strong></p>
        <ul>
          <li>Conformité au RPS 2000 intégrée dès la conception en usine</li>
          <li>Jonctions ductiles entre éléments, absorbant l&apos;énergie sismique</li>
          <li>Comportement supérieur à la maçonnerie traditionnelle lors du séisme d&apos;Al Haouz (2023)</li>
        </ul>
        <p><strong>Perception culturelle positive :</strong></p>
        <ul>
          <li>Le béton est le matériau de référence au Maroc, perçu comme solide et durable</li>
          <li>Pas de réticence culturelle contrairement au bois ou au métal</li>
          <li>Finitions identiques à la construction traditionnelle (enduit, carrelage, peinture)</li>
        </ul>

        <h2>Prix d&apos;une maison en béton préfabriqué au Maroc</h2>
        <p>
          Le coût d&apos;une maison en béton préfabriqué se situe entre <strong>3 000 et 5 500 MAD/m²</strong> selon
          le niveau de finition et la complexité du projet. Ce prix est <strong>15 à 25 % inférieur</strong> à une
          construction traditionnelle équivalente, grâce à la réduction des délais et de la main-d&apos;œuvre sur chantier.
        </p>
        <p>
          Pour une villa de 200 m² en R+1, le budget global hors foncier se situe entre <strong>600 000 et 1 100 000 MAD</strong>,
          incluant les fondations, la structure préfabriquée, le second œuvre et les finitions standard.
          Les délais de réalisation sont de 4 à 8 semaines pour le gros œuvre, contre 4 à 6 mois en construction traditionnelle.
        </p>

        <h2>Processus de fabrication et montage</h2>
        <p>
          La construction d&apos;une maison en béton préfabriqué suit un processus industriel rigoureux :
        </p>
        <ul>
          <li><strong>Étude et conception :</strong> les plans de l&apos;architecte sont traduits en plans de fabrication par le bureau d&apos;études du préfabricant (2 à 4 semaines)</li>
          <li><strong>Fabrication en usine :</strong> coulage des éléments dans des moules métalliques, vibration, cure contrôlée à 20-25 °C (3 à 6 semaines)</li>
          <li><strong>Transport :</strong> acheminement par camions plateau avec sangles et cales de protection. La distance usine-chantier impacte le coût (50 à 150 MAD/km)</li>
          <li><strong>Montage sur site :</strong> pose à la grue mobile des éléments, clavetage des jonctions au béton coulé en place, soudure des armatures (2 à 4 semaines)</li>
          <li><strong>Second œuvre :</strong> plomberie, électricité, enduits et finitions comme en construction classique</li>
        </ul>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Vérifiez que le fabricant dispose d&apos;un <strong>laboratoire de contrôle qualité interne</strong> et que ses produits
            sont conformes aux <strong>normes marocaines NM 10.1.008</strong> (béton) et <strong>NM 10.1.009</strong> (acier).
            Demandez les PV d&apos;essais de résistance à la compression (minimum 30 MPa à 28 jours).
            Comparez les devis sur Bati.ma pour trouver un architecte expérimenté en construction préfabriquée.
          </p>
        </div>

        <h2>Fournisseurs de béton préfabriqué au Maroc</h2>
        <p>
          Le marché marocain du béton préfabriqué est structuré autour de grands acteurs industriels :
          <strong> TGCC Préfa</strong> (Casablanca), leader national avec une capacité de 200 000 m²/an ;
          <strong> Prefa Maroc</strong> (Kénitra), spécialiste des dalles alvéolées et prédalles ;
          <strong> Bonna Maroc</strong> (Berrechid), réputé pour les poteaux et poutres de grande portée ;
          <strong> Stradal Maroc</strong> (Tanger), orienté voirie et assainissement mais proposant aussi
          des éléments structurels. Ces fabricants disposent de certifications NM et exportent vers l&apos;Afrique de l&apos;Ouest.
        </p>

        <h2>Normes NM et contrôle qualité</h2>
        <p>
          Au Maroc, la construction en béton préfabriqué doit respecter plusieurs normes :
        </p>
        <ul>
          <li><strong>NM 10.1.008 :</strong> spécifications du béton, classes de résistance et de consistance</li>
          <li><strong>NM 10.1.009 :</strong> aciers pour béton armé, caractéristiques mécaniques</li>
          <li><strong>RPS 2000 :</strong> règlement parasismique, zonage et calcul des structures</li>
          <li><strong>RTCM :</strong> réglementation thermique, isolation et performance énergétique</li>
          <li><strong>NM 10.1.271 :</strong> éléments préfabriqués en béton, contrôle de production en usine</li>
        </ul>
        <p>
          Le contrôle qualité en usine comprend des essais quotidiens de résistance à la compression sur éprouvettes,
          des contrôles dimensionnels sur chaque élément et une traçabilité complète des matériaux utilisés.
        </p>

        <h2>Comparaison avec le béton coulé sur place</h2>
        <p>
          Le béton préfabriqué surpasse le béton coulé sur place sur plusieurs critères : <strong>qualité constante</strong>
          (fabrication industrielle vs conditions de chantier variables), <strong>rapidité</strong> (montage en semaines
          vs mois de coffrage et coulage), et <strong>réduction des déchets</strong> (80 % de déchets en moins).
          En revanche, le béton coulé sur place offre une plus grande liberté architecturale pour les formes complexes
          et ne nécessite pas d&apos;engins de levage lourds. Pour une maison standard au Maroc, le préfabriqué
          est généralement plus économique à partir de 100 m² de surface habitable.
        </p>
      </div>
      <section className="mt-10">
        <h2 className="text-xl font-bold text-stone-900 mb-5">Questions fréquentes</h2>
        <div className="space-y-4">
          {faq.map((f) => (
            <details key={f.q} className="group border border-stone-200 rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between px-4 py-3 cursor-pointer text-sm font-medium text-stone-800 hover:bg-stone-50">{f.q}<span className="text-stone-400 group-open:rotate-180 transition-transform">↓</span></summary>
              <div className="px-4 pb-4 pt-1 text-sm text-stone-600 leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
