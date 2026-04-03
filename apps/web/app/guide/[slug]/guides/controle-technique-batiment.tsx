export default function GuideControleTechnique() {
  const faq = [
    {
      q: "Le contr\u00f4le technique est-il obligatoire pour tous les b\u00e2timents au Maroc ?",
      a: "Non, le contr\u00f4le technique n&apos;est obligatoire que pour certaines cat\u00e9gories : les \u00e9tablissements recevant du public (ERP), les immeubles de grande hauteur (R+4 et plus), les b\u00e2timents industriels et les ouvrages publics. Pour les villas individuelles de moins de 3 niveaux, il reste facultatif mais fortement recommand\u00e9.",
    },
    {
      q: "Combien co\u00fbte un contr\u00f4le technique de b\u00e2timent au Maroc ?",
      a: "Les honoraires varient entre 0,5 % et 1,5 % du co\u00fbt total de la construction selon la complexit\u00e9 du projet. Pour une villa de 2 000 000 MAD, comptez entre 10 000 et 30 000 MAD. Pour un immeuble R+4, le co\u00fbt peut atteindre 50 000 \u00e0 100 000 MAD incluant toutes les phases de v\u00e9rification.",
    },
    {
      q: "Quels sont les bureaux de contr\u00f4le technique agr\u00e9\u00e9s au Maroc ?",
      a: "Les principaux bureaux agr\u00e9\u00e9s sont Bureau Veritas Maroc, Socotec Maroc, Apave Maroc et Dekra. Il existe aussi des bureaux marocains comme Qualiconsult Maroc et BET Control. Tous doivent disposer de l&apos;agr\u00e9ment du minist\u00e8re de l&apos;Am\u00e9nagement du territoire pour exercer.",
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
        <h2>Contr\u00f4le technique de b\u00e2timent au Maroc : cadre l\u00e9gal et obligations</h2>
        <p>
          Le contr\u00f4le technique de construction au Maroc est r\u00e9gi par la loi 66-12 relative au contr\u00f4le et \u00e0 la r\u00e9pression des infractions en mati\u00e8re d&apos;urbanisme et de construction. Avec la mont\u00e9e en puissance des projets immobiliers li\u00e9s au Mondial 2030 et l&apos;urbanisation acc\u00e9l\u00e9r\u00e9e, le contr\u00f4le technique est devenu un pilier incontournable de la s\u00e9curit\u00e9 des ouvrages.
        </p>
        <p>
          Au Maroc, le contr\u00f4le technique vise \u00e0 pr\u00e9venir les risques li\u00e9s \u00e0 la solidit\u00e9 des ouvrages, \u00e0 la s\u00e9curit\u00e9 des personnes et au respect des normes parasismiques (RPS 2011). Il intervient d\u00e8s la conception et accompagne le projet jusqu&apos;\u00e0 la r\u00e9ception d\u00e9finitive.
        </p>

        <h2>Quand le contr\u00f4le technique est-il obligatoire ?</h2>
        <p>
          La r\u00e9glementation marocaine impose le contr\u00f4le technique dans plusieurs cas de figure. Voici les principales situations o\u00f9 il est exig\u00e9 :
        </p>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Type de b\u00e2timent</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Obligation</th>
              <th className="border border-stone-200 px-3 py-2 text-left">R\u00e9f\u00e9rence l\u00e9gale</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-200 px-3 py-2">ERP (h\u00f4tels, \u00e9coles, centres commerciaux)</td>
              <td className="border border-stone-200 px-3 py-2 font-semibold text-red-700">Obligatoire</td>
              <td className="border border-stone-200 px-3 py-2">Loi 66-12</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Immeubles R+4 et plus</td>
              <td className="border border-stone-200 px-3 py-2 font-semibold text-red-700">Obligatoire</td>
              <td className="border border-stone-200 px-3 py-2">D\u00e9cret 2-12-666</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">B\u00e2timents industriels</td>
              <td className="border border-stone-200 px-3 py-2 font-semibold text-red-700">Obligatoire</td>
              <td className="border border-stone-200 px-3 py-2">Loi 66-12</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Villas individuelles R+2 max</td>
              <td className="border border-stone-200 px-3 py-2 text-green-700">Recommand\u00e9</td>
              <td className="border border-stone-200 px-3 py-2">-</td>
            </tr>
          </tbody>
        </table>

        <h2>Les bureaux de contr\u00f4le technique agr\u00e9\u00e9s au Maroc</h2>
        <p>
          Plusieurs organismes disposent de l&apos;agr\u00e9ment minist\u00e9riel pour exercer le contr\u00f4le technique au Maroc. Les acteurs internationaux dominent le march\u00e9 gr\u00e2ce \u00e0 leur exp\u00e9rience et leurs r\u00e9f\u00e9rences :
        </p>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Bureau</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Si\u00e8ge Maroc</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Sp\u00e9cialit\u00e9s</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">Bureau Veritas Maroc</td>
              <td className="border border-stone-200 px-3 py-2">Casablanca</td>
              <td className="border border-stone-200 px-3 py-2">B\u00e2timent, industrie, environnement</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">Socotec Maroc</td>
              <td className="border border-stone-200 px-3 py-2">Casablanca</td>
              <td className="border border-stone-200 px-3 py-2">G\u00e9nie civil, infrastructure</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">Apave Maroc</td>
              <td className="border border-stone-200 px-3 py-2">Rabat</td>
              <td className="border border-stone-200 px-3 py-2">S\u00e9curit\u00e9 incendie, \u00e9lectricit\u00e9</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">Dekra Maroc</td>
              <td className="border border-stone-200 px-3 py-2">Casablanca</td>
              <td className="border border-stone-200 px-3 py-2">Inspection, certification</td>
            </tr>
          </tbody>
        </table>

        <h2>Les \u00e9tapes du contr\u00f4le technique</h2>
        <p>
          Le contr\u00f4le technique se d\u00e9roule en plusieurs phases tout au long du projet de construction. Chaque \u00e9tape donne lieu \u00e0 un rapport qui conditionne la poursuite des travaux :
        </p>
        <p>
          <strong>Phase 1 - Examen des documents de conception :</strong> le bureau v\u00e9rifie les plans d&apos;architecture, les notes de calcul du BET structure, et la conformit\u00e9 aux normes parasismiques RPS 2011. Cette \u00e9tape co\u00fbte entre 3 000 et 10 000 MAD selon la taille du projet.
        </p>
        <p>
          <strong>Phase 2 - Contr\u00f4le en phase fondations :</strong> inspection des fouilles, v\u00e9rification de la qualit\u00e9 du sol, contr\u00f4le des armatures et du b\u00e9ton. Des essais de compression sont r\u00e9alis\u00e9s sur \u00e9prouvettes. Co\u00fbt : 5 000 \u00e0 15 000 MAD.
        </p>
        <p>
          <strong>Phase 3 - Contr\u00f4le en phase structure :</strong> v\u00e9rification de chaque niveau (poteaux, poutres, dalles) avant coulage. Le bureau d\u00e9livre un avis favorable ou r\u00e9serve. Co\u00fbt : 5 000 \u00e0 20 000 MAD par niveau.
        </p>
        <p>
          <strong>Phase 4 - Contr\u00f4le \u00e0 la r\u00e9ception :</strong> v\u00e9rification finale de l&apos;ensemble de l&apos;ouvrage, test d&apos;\u00e9tanch\u00e9it\u00e9, contr\u00f4le des installations techniques. D\u00e9livrance du rapport final n\u00e9cessaire au certificat de conformit\u00e9.
        </p>

        <h2>Co\u00fbts du contr\u00f4le technique au Maroc en 2026</h2>
        <p>
          Les tarifs d\u00e9pendent de la nature du projet, de sa complexit\u00e9 et du bureau choisi. Voici une estimation des co\u00fbts pour les projets les plus courants :
        </p>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Type de projet</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Co\u00fbt estim\u00e9</th>
              <th className="border border-stone-200 px-3 py-2 text-left">% du budget construction</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Villa R+1 (200 m\u00b2)</td>
              <td className="border border-stone-200 px-3 py-2">10 000 - 25 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">0,5 - 1 %</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Immeuble R+4 (1 000 m\u00b2)</td>
              <td className="border border-stone-200 px-3 py-2">50 000 - 100 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">0,8 - 1,5 %</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Centre commercial</td>
              <td className="border border-stone-200 px-3 py-2">150 000 - 500 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">1 - 1,5 %</td>
            </tr>
          </tbody>
        </table>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            M\u00eame pour une villa individuelle o\u00f9 le contr\u00f4le technique n&apos;est pas obligatoire, engager un bureau de contr\u00f4le co\u00fbte entre 10 000 et 25 000 MAD et peut vous \u00e9viter des malfacons co\u00fbtant 10 fois plus. Demandez \u00e0 votre architecte sur Bati.ma de vous recommander un bureau agr\u00e9\u00e9 adapt\u00e9 \u00e0 votre projet.
          </p>
        </div>

        <h2>Comment choisir son bureau de contr\u00f4le technique ?</h2>
        <p>
          Le choix du bureau de contr\u00f4le doit se faire en amont, id\u00e9alement d\u00e8s la phase de conception. V\u00e9rifiez que le bureau poss\u00e8de l&apos;agr\u00e9ment du minist\u00e8re de l&apos;Am\u00e9nagement du territoire, qu&apos;il dispose d&apos;ing\u00e9nieurs sp\u00e9cialis\u00e9s dans votre type de construction, et qu&apos;il a des r\u00e9f\u00e9rences dans votre r\u00e9gion. Comparez au moins 3 devis et assurez-vous que la mission propos\u00e9e couvre toutes les phases, de la conception \u00e0 la r\u00e9ception. Un bon bureau de contr\u00f4le est un alli\u00e9 qui s\u00e9curise votre investissement immobilier.
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
