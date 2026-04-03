export default function GuideAmenagementHammam() {
  const faq = [
    { q: "Quel budget pr\u00e9voir pour un hammam priv\u00e9 au Maroc ?", a: "Un hammam priv\u00e9 co\u00fbte entre 30 000 MAD pour une cabine simple avec g\u00e9n\u00e9rateur de vapeur et 150 000 MAD pour un espace complet avec tadelakt, banquette chauffante, douche \u00e0 l&apos;italienne et vestiaire. Le poste le plus \u00e9lev\u00e9 est g\u00e9n\u00e9ralement le rev\u00eatement en tadelakt (400 \u00e0 800 MAD/m\u00b2 pos\u00e9)." },
    { q: "Quelles sont les dimensions minimales pour un hammam \u00e0 domicile ?", a: "Un hammam individuel fonctionnel n\u00e9cessite au minimum 4 m\u00b2 (2 m x 2 m) avec une hauteur sous plafond de 2,20 m. Pour un hammam familial avec banquette, pr\u00e9voyez 6 \u00e0 9 m\u00b2. La salle doit \u00eatre adjacente \u00e0 une arriv\u00e9e d&apos;eau et une \u00e9vacuation, id\u00e9alement au rez-de-chauss\u00e9e." },
    { q: "Le tadelakt est-il indispensable pour un hammam ?", a: "Non, mais c&apos;est le rev\u00eatement traditionnel id\u00e9al. Le tadelakt \u00e0 base de chaux de Marrakech est naturellement \u00e9tanche, antibact\u00e9rien et r\u00e9sistant \u00e0 la vapeur. Les alternatives incluent le carrelage en gr\u00e8s c\u00e9rame (moins esth\u00e9tique mais moins cher) ou la r\u00e9sine \u00e9poxy (plus facile d&apos;entretien)." },
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
        <h2>Le hammam priv\u00e9 : tradition marocaine \u00e0 domicile</h2>
        <p>
          Le hammam est un \u00e9l\u00e9ment central de la culture marocaine. Autrefois r\u00e9serv\u00e9 aux \u00e9tablissements publics et aux riads de luxe, il s&apos;invite d\u00e9sormais dans les maisons individuelles. Am\u00e9nager un hammam chez soi, c&apos;est allier bien-\u00eatre quotidien et valorisation immobili\u00e8re \u2014 un atout consid\u00e9rable pour la revente ou la location touristique. \u00c0 Marrakech et F\u00e8s, un hammam priv\u00e9 peut augmenter la valeur d&apos;un bien de 10 \u00e0 20 %.
        </p>

        <h2>Conception et dimensions</h2>
        <p>
          Un hammam domestique se compose g\u00e9n\u00e9ralement de deux \u00e0 trois espaces : la salle ti\u00e8de (bayt el-bared), la salle chaude (bayt el-skhoun) et \u00e9ventuellement un espace de repos. Pour un usage familial, pr\u00e9voyez 6 \u00e0 12 m\u00b2 au total. La hauteur sous plafond id\u00e9ale est de 2,20 \u00e0 2,40 m avec un plafond vo\u00fbt\u00e9 ou en d\u00f4me pour favoriser la condensation et \u00e9viter les gouttes.
        </p>
        <p>
          L&apos;orientation est cruciale : le hammam doit \u00eatre situ\u00e9 au rez-de-chauss\u00e9e ou au sous-sol, \u00e0 proximit\u00e9 des arriv\u00e9es d&apos;eau chaude et froide. Le sol doit pr\u00e9senter une pente de 1,5 \u00e0 2 % vers le siphon d&apos;\u00e9vacuation. Pr\u00e9voyez une porte \u00e9tanche \u00e0 la vapeur (en bois trait\u00e9 ou aluminium) avec un seuil sur\u00e9lev\u00e9 de 5 cm.
        </p>

        <h2>Rev\u00eatements et mat\u00e9riaux</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-300 px-3 py-2 text-left">Rev\u00eatement</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Prix pos\u00e9 (MAD/m\u00b2)</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Avantages</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Inconv\u00e9nients</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Tadelakt</td>
              <td className="border border-stone-300 px-3 py-2">400 \u2013 800</td>
              <td className="border border-stone-300 px-3 py-2">Authentique, \u00e9tanche, antibact\u00e9rien</td>
              <td className="border border-stone-300 px-3 py-2">Pose sp\u00e9cialis\u00e9e, entretien r\u00e9gulier</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Zellige</td>
              <td className="border border-stone-300 px-3 py-2">500 \u2013 1 200</td>
              <td className="border border-stone-300 px-3 py-2">Esth\u00e9tique unique, artisanal</td>
              <td className="border border-stone-300 px-3 py-2">Co\u00fbt \u00e9lev\u00e9, joints \u00e0 traiter</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Gr\u00e8s c\u00e9rame</td>
              <td className="border border-stone-300 px-3 py-2">150 \u2013 350</td>
              <td className="border border-stone-300 px-3 py-2">\u00c9conomique, facile d&apos;entretien</td>
              <td className="border border-stone-300 px-3 py-2">Moins authentique</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Pierre naturelle (marbre)</td>
              <td className="border border-stone-300 px-3 py-2">600 \u2013 1 500</td>
              <td className="border border-stone-300 px-3 py-2">Luxueux, bonne inertie thermique</td>
              <td className="border border-stone-300 px-3 py-2">Lourd, n\u00e9cessite traitement hydrofuge</td>
            </tr>
          </tbody>
        </table>
        <p>
          Le tadelakt de Marrakech reste le rev\u00eatement de r\u00e9f\u00e9rence. Pr\u00e9par\u00e9 \u00e0 base de chaux hydraulique naturelle, il est appliqu\u00e9 en plusieurs couches puis poli au galet et trait\u00e9 au savon noir pour obtenir son \u00e9tanch\u00e9it\u00e9 caract\u00e9ristique. Seuls les maalems (artisans ma\u00eetres) qualifi\u00e9s garantissent un r\u00e9sultat durable \u2014 comptez 3 \u00e0 5 jours de travail pour une pi\u00e8ce de 8 m\u00b2.
        </p>

        <h2>\u00c9quipements techniques</h2>
        <p>
          Le g\u00e9n\u00e9rateur de vapeur est le c\u0153ur du hammam. Pour une pi\u00e8ce de 6 \u00e0 10 m\u00b2, choisissez un mod\u00e8le de 6 \u00e0 9 kW (8 000 \u00e0 25 000 MAD). Les marques disponibles au Maroc incluent Steamist, Tylo et des fabricants locaux. Le g\u00e9n\u00e9rateur doit \u00eatre install\u00e9 dans un local technique s\u00e9par\u00e9 (placard, buanderie) \u00e0 moins de 5 m\u00e8tres de la salle de vapeur.
        </p>
        <p>
          La ventilation est un point critique souvent n\u00e9glig\u00e9. Installez un extracteur d&apos;air humide (VMC) de d\u00e9bit 100 \u00e0 150 m\u00b3/h avec clapet anti-retour. Sans ventilation correcte, les moisissures apparaissent en quelques mois et d\u00e9t\u00e9riorent le tadelakt. Pr\u00e9voyez \u00e9galement un \u00e9clairage \u00e9tanche IP65 (spots LED encastr\u00e9s) et un chauffage au sol \u00e9lectrique pour la banquette (2 000 \u00e0 5 000 MAD).
        </p>

        <h2>Budget d\u00e9taill\u00e9 et d\u00e9lais</h2>
        <p>
          Pour un hammam priv\u00e9 de 8 m\u00b2 avec tadelakt, g\u00e9n\u00e9rateur de vapeur, banquette chauffante et \u00e9clairage, le budget global se situe entre 60 000 et 100 000 MAD. La r\u00e9partition type est : gros \u0153uvre et \u00e9tanch\u00e9it\u00e9 (30 %), rev\u00eatement tadelakt (25 %), \u00e9quipements techniques (25 %), finitions et accessoires (20 %). Les travaux durent 3 \u00e0 6 semaines selon la complexit\u00e9.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Faites appel \u00e0 un architecte qui conna\u00eet les artisans maalems de votre r\u00e9gion pour le tadelakt. Un mauvais choix d&apos;artisan est la premi\u00e8re cause d&apos;\u00e9chec : fissures, infiltrations, moisissures. Consultez les profils d&apos;architectes sp\u00e9cialis\u00e9s en am\u00e9nagement int\u00e9rieur sur Bati.ma pour trouver le bon interlocuteur.
          </p>
        </div>

        <h2>Entretien du hammam</h2>
        <p>
          Le tadelakt doit \u00eatre trait\u00e9 au savon noir une fois par mois pour maintenir son \u00e9tanch\u00e9it\u00e9 et son lustre. Nettoyez les parois \u00e0 l&apos;eau claire apr\u00e8s chaque utilisation et a\u00e9rez la pi\u00e8ce pendant au moins 30 minutes. D\u00e9tartrez le g\u00e9n\u00e9rateur de vapeur tous les 3 mois (l&apos;eau calcaire au Maroc acc\u00e9l\u00e8re l&apos;entartrage). Un adoucisseur d&apos;eau en amont est un investissement judicieux (3 000 \u00e0 8 000 MAD).
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
