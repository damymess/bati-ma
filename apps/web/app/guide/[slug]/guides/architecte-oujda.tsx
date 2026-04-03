export default function GuideArchitecteOujda() {
  const faq = [
    { q: "Un architecte d\u2019Oujda peut-il g\u00e9rer un projet pour un MRE vivant en Europe ?", a: "Oui, c\u2019est m\u00eame une sp\u00e9cialit\u00e9 locale. Pr\u00e8s de 60 % des constructions neuves \u00e0 Oujda sont command\u00e9es par des MRE. Les cabinets oujdis proposent un suivi \u00e0 distance (visioconf\u00e9rence, photos de chantier hebdomadaires, comptes-rendus \u00e9crits) et peuvent g\u00e9rer la proc\u00e9dure de permis via procuration notari\u00e9e. Pr\u00e9voyez toutefois au moins deux d\u00e9placements : au d\u00e9marrage et \u00e0 la r\u00e9ception des travaux." },
    { q: "Comment l\u2019architecte adapte-t-il la maison au climat extr\u00eame d\u2019Oujda ?", a: "Le climat continental d\u2019Oujda (jusqu\u2019\u00e0 47\u00b0C en \u00e9t\u00e9, gel en hiver) impose des choix sp\u00e9cifiques : double mur en brique de 10+15 cm avec lame d\u2019air, double vitrage obligatoire, orientation nord-sud pour limiter l\u2019ensoleillement ouest, patio central pour la ventilation naturelle, et isolation de toiture en polystyr\u00e8ne extrud\u00e9 de 6 cm minimum. Un bon architecte oujdi int\u00e8gre ces solutions d\u00e8s l\u2019avant-projet." },
    { q: "Quel budget pr\u00e9voir pour construire une villa \u00e0 Oujda ?", a: "Pour une villa de 200 m\u00b2 habitable \u00e0 Oujda (hors terrain) : gros \u0153uvre 440 000 \u00e0 640 000 MAD, finitions standard 240 000 \u00e0 400 000 MAD, am\u00e9nagements ext\u00e9rieurs 50 000 \u00e0 100 000 MAD, honoraires architecte 50 000 \u00e0 70 000 MAD. Total : 780 000 \u00e0 1 210 000 MAD, soit 20 \u00e0 25 % moins cher qu\u2019\u00e0 Casablanca pour une prestation \u00e9quivalente." },
    { q: "Pourquoi Oujda est-elle la ville pr\u00e9f\u00e9r\u00e9e des MRE pour construire ?", a: "Oujda offre le meilleur rapport qualit\u00e9/prix du Maroc : terrains \u00e0 800-4 500 MAD/m\u00b2, construction 20-25 % moins ch\u00e8re que Casablanca, et des architectes sp\u00e9cialis\u00e9s dans la gestion de projet \u00e0 distance. Pr\u00e8s de 60 % des constructions sont financ\u00e9es par la diaspora." },
    { q: "Quel syst\u00e8me de chauffage choisir \u00e0 Oujda ?", a: "Le chauffage central au gaz est le plus adapt\u00e9 au climat continental d\u2019Oujda (gel en hiver). Budget : 35 000 \u00e0 80 000 MAD pour une villa. Alternative \u00e9conomique : climatisation r\u00e9versible (chaud/froid) \u00e0 20 000-40 000 MAD. L\u2019isolation est prioritaire avant tout." },
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
        <h2>Oujda, la porte de l&apos;Orient marocain : un march\u00e9 immobilier port\u00e9 par la diaspora</h2>
        <p>
          <strong>Architecte \u00e0 Oujda</strong> rime avec construction pour la diaspora. Capitale de la r\u00e9gion de l&apos;Oriental, Oujda est la ville o\u00f9 le ratio MRE-b\u00e2tisseurs/population est le plus \u00e9lev\u00e9 du Maroc. Chaque \u00e9t\u00e9, les chantiers se multiplient dans les nouveaux lotissements de Lazaret, Al Qods et Sidi Yahia, financ\u00e9s par les transferts depuis la France, la Belgique et les Pays-Bas. Cette r\u00e9alit\u00e9 fa\u00e7onne un march\u00e9 architectural unique : les cabinets locaux se sont sp\u00e9cialis\u00e9s dans la <strong>gestion de projet \u00e0 distance</strong>, les plans de villas \u00ab double r\u00e9sidence \u00bb (adapt\u00e9es aux s\u00e9jours estivaux) et les finitions inspir\u00e9es des standards europ\u00e9ens.
        </p>
        <p>
          Contrairement \u00e0 Casablanca ou Marrakech, le march\u00e9 oujdi est domin\u00e9 par la <strong>villa individuelle R+1 \u00e0 R+2</strong> plut\u00f4t que l&apos;immeuble collectif. Les terrains restent accessibles (800 \u00e0 4 500 MAD/m\u00b2 selon la zone) et les co\u00fbts de construction sont parmi les plus bas du royaume, ce qui permet des projets ambitieux avec des budgets mod\u00e9r\u00e9s.
        </p>

        <h2>Le d\u00e9fi climatique : construire entre le chergui et le gel</h2>
        <p>
          Oujda subit l&apos;un des climats les plus extr\u00eames du Maroc : le thermom\u00e8tre oscille entre <strong>-3\u00b0C en janvier et 47\u00b0C en ao\u00fbt</strong>. Le vent chergui, sec et br\u00fblant, souffle r\u00e9guli\u00e8rement depuis le Sahara alg\u00e9rien. Cette amplitude thermique de 50 degr\u00e9s impose des choix architecturaux radicaux que seul un architecte connaissant le terrain peut ma\u00eetriser.
        </p>
        <p>
          Les techniques \u00e9prouv\u00e9es \u00e0 Oujda sont diff\u00e9rentes de celles du littoral : <strong>double mur avec lame d&apos;air</strong> (brique de 10 cm + vide de 5 cm + brique de 15 cm), isolation de la toiture terrasse en polystyr\u00e8ne extrud\u00e9 de 6 cm, <strong>patio central</strong> pour cr\u00e9er un microclimat int\u00e9rieur, volets en aluminium \u00e0 lames orientables pour g\u00e9rer l&apos;ensoleillement, et syst\u00e8me de chauffage central (n\u00e9cessaire 3 \u00e0 4 mois par an, contrairement au reste du Maroc o\u00f9 il est souvent ignor\u00e9).
        </p>
        <table className="w-full text-sm border-collapse my-4">
          <thead><tr className="bg-stone-100"><th className="text-left px-3 py-2 border border-stone-200">Solution thermique</th><th className="text-left px-3 py-2 border border-stone-200">Impact \u00e9t\u00e9</th><th className="text-left px-3 py-2 border border-stone-200">Impact hiver</th><th className="text-left px-3 py-2 border border-stone-200">Surco\u00fbt</th></tr></thead>
          <tbody>
            <tr><td className="px-3 py-2 border border-stone-200">Double mur + lame d&apos;air</td><td className="px-3 py-2 border border-stone-200">-5\u00b0C int\u00e9rieur</td><td className="px-3 py-2 border border-stone-200">+4\u00b0C int\u00e9rieur</td><td className="px-3 py-2 border border-stone-200">+8 % gros \u0153uvre</td></tr>
            <tr><td className="px-3 py-2 border border-stone-200">Double vitrage aluminium</td><td className="px-3 py-2 border border-stone-200">R\u00e9duit chaleur 40 %</td><td className="px-3 py-2 border border-stone-200">R\u00e9duit pertes 60 %</td><td className="px-3 py-2 border border-stone-200">+15 000 MAD/villa</td></tr>
            <tr><td className="px-3 py-2 border border-stone-200">Patio central couvert</td><td className="px-3 py-2 border border-stone-200">Ventilation naturelle</td><td className="px-3 py-2 border border-stone-200">Effet serre passif</td><td className="px-3 py-2 border border-stone-200">+12 % surface</td></tr>
            <tr><td className="px-3 py-2 border border-stone-200">Chauffage central gaz</td><td className="px-3 py-2 border border-stone-200">\u2014</td><td className="px-3 py-2 border border-stone-200">Confort 20\u00b0C garanti</td><td className="px-3 py-2 border border-stone-200">35 000 \u2013 80 000 MAD</td></tr>
            <tr><td className="px-3 py-2 border border-stone-200">Isolation toiture XPS 6 cm</td><td className="px-3 py-2 border border-stone-200">-3\u00b0C sous toiture</td><td className="px-3 py-2 border border-stone-200">+3\u00b0C sous toiture</td><td className="px-3 py-2 border border-stone-200">+60 MAD/m\u00b2</td></tr>
          </tbody>
        </table>

        <h2>La villa MRE : un programme architectural sp\u00e9cifique \u00e0 l&apos;Oriental</h2>
        <p>
          Le type de projet le plus courant \u00e0 Oujda est la <strong>villa de la diaspora</strong> : une r\u00e9sidence con\u00e7ue pour \u00eatre habit\u00e9e 2 \u00e0 3 mois par an (vacances d&apos;\u00e9t\u00e9, f\u00eates religieuses) et potentiellement lou\u00e9e ou occup\u00e9e par la famille le reste de l&apos;ann\u00e9e. Ce programme a ses propres r\u00e8gles de conception :
        </p>
        <ul>
          <li><strong>Garage surdimensionn\u00e9</strong> : les MRE arrivent souvent avec leur v\u00e9hicule europ\u00e9en, un garage double est standard</li>
          <li><strong>Suite parentale isol\u00e9e</strong> : s\u00e9par\u00e9e des chambres familiales pour l&apos;intimit\u00e9 lors des cohabitations \u00e9largies</li>
          <li><strong>Cuisine europ\u00e9enne + cuisine marocaine</strong> : double cuisine, l&apos;une \u00e9quip\u00e9e \u00e0 l&apos;occidentale, l&apos;autre traditionnelle pour les grands repas familiaux</li>
          <li><strong>Salon marocain + salon moderne</strong> : deux espaces de r\u00e9ception distincts, une constante \u00e0 Oujda</li>
          <li><strong>Terrasse et barbecue</strong> : espace ext\u00e9rieur couvert pour les soir\u00e9es d&apos;\u00e9t\u00e9 en famille</li>
          <li><strong>Syst\u00e8me d&apos;alarme et cam\u00e9ras</strong> : s\u00e9curit\u00e9 renforc\u00e9e puisque la maison est souvent inoccup\u00e9e</li>
        </ul>
        <p>
          Un architecte oujdi exp\u00e9riment\u00e9 conna\u00eet ce cahier des charges par c\u0153ur et propose des plans optimis\u00e9s pour cette double vie de la maison. Sur Bati.ma, filtrez les architectes de l&apos;Oriental pour trouver ceux qui affichent des r\u00e9alisations de ce type.
        </p>

        <h2>Quels grands projets transforment Oujda ?</h2>
        <p>
          Oujda n&apos;est plus seulement une ville de passage vers l&apos;Alg\u00e9rie. Plusieurs projets structurants red\u00e9finissent son paysage :
        </p>
        <ul>
          <li><strong>Technopole d&apos;Oujda</strong> : parc technologique sur 200 ha, g\u00e9n\u00e9rant une demande en bureaux et logements modernes</li>
          <li><strong>Universit\u00e9 Mohammed Premier</strong> : campus en expansion, r\u00e9sidences universitaires, cit\u00e9s \u00e9tudiantes priv\u00e9es</li>
          <li><strong>Oujda Smart City</strong> : programme de digitalisation urbaine, \u00e9clairage LED, espaces verts connect\u00e9s</li>
          <li><strong>Requalification de la m\u00e9dina</strong> : restauration du patrimoine, conversion de riads en maisons d&apos;h\u00f4tes</li>
          <li><strong>Gare LGV (projet\u00e9)</strong> : la future ligne \u00e0 grande vitesse Oujda-Fès-Casa cr\u00e9era un p\u00f4le urbain autour de la gare</li>
        </ul>
        <p>
          Ces projets attirent de nouveaux cabinets d&apos;architecture et \u00e9l\u00e8vent le niveau de comp\u00e9tition. Le r\u00e9sultat : une offre architecturale de plus en plus qualifi\u00e9e \u00e0 des tarifs qui restent tr\u00e8s comp\u00e9titifs.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Vous \u00eates MRE et vous pr\u00e9parez un projet \u00e0 Oujda depuis l&apos;Europe ? Commencez par consulter 3 architectes sur <strong>Bati.ma</strong> avant votre prochain s\u00e9jour. Envoyez-leur votre programme (nombre de pi\u00e8ces, surface souhait\u00e9e, budget) et demandez une premi\u00e8re esquisse. Vous gagnerez un \u00e9t\u00e9 entier en \u00e9vitant les allers-retours sur place.
          </p>
        </div>

        <h2>Ce qui distingue un bon architecte \u00e0 Oujda</h2>
        <p>
          Au-del\u00e0 de l&apos;inscription \u00e0 l&apos;Ordre (obligatoire, loi 16-89), un architecte performant \u00e0 Oujda se reconna\u00eet \u00e0 trois crit\u00e8res propres au march\u00e9 local : sa capacit\u00e9 \u00e0 <strong>g\u00e9rer des projets \u00e0 distance</strong> (reporting photo, vid\u00e9o, WhatsApp business), sa connaissance des <strong>entreprises de BTP fiables de la r\u00e9gion</strong> (les bons ma\u00e2lems sont rares et tr\u00e8s sollicit\u00e9s l&apos;\u00e9t\u00e9), et sa ma\u00eetrise des <strong>solutions thermiques</strong> adapt\u00e9es au climat continental. M\u00e9fiez-vous des architectes qui proposent les m\u00eames plans qu&apos;\u00e0 Casablanca sans adaptation climatique : une maison sans isolation \u00e0 Oujda est inhabitable six mois par an.
        </p>
      </div>
      <section className="mt-10">
        <h2 className="text-xl font-bold text-stone-900 mb-5">Questions fr\u00e9quentes</h2>
        <div className="space-y-4">
          {faq.map((f) => (
            <details key={f.q} className="group border border-stone-200 rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between px-4 py-3 cursor-pointer text-sm font-medium text-stone-800 hover:bg-stone-50">{f.q}<span className="text-stone-400 group-open:rotate-180 transition-transform">{"\u2193"}</span></summary>
              <div className="px-4 pb-4 pt-1 text-sm text-stone-600 leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
