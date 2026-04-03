export default function GuideAcheterTerrain() {
  const faq = [
    {
      q: "Comment v\u00e9rifier qu&apos;un terrain est constructible au Maroc ?",
      a: "Demandez la note de renseignement aupr\u00e8s de l&apos;agence urbaine comp\u00e9tente. Ce document gratuit ou \u00e0 faible co\u00fbt (50-200 MAD) vous indique le zonage, le COS (coefficient d&apos;occupation des sols), la hauteur autoris\u00e9e et les servitudes. V\u00e9rifiez aussi le titre foncier aupr\u00e8s de la Conservation Fonci\u00e8re pour confirmer la propri\u00e9t\u00e9 et l&apos;absence d&apos;opposition.",
    },
    {
      q: "Quels sont les frais de notaire pour l&apos;achat d&apos;un terrain au Maroc ?",
      a: "Les frais totaux repr\u00e9sentent environ 6 \u00e0 7 % du prix d&apos;achat. Ils se d\u00e9composent ainsi : droits d&apos;enregistrement 4 %, conservation fonci\u00e8re 1,5 %, honoraires notaire 1 % (avec minimum 2 500 MAD), timbres et frais divers 0,5 %. Pour un terrain \u00e0 500 000 MAD, comptez environ 32 500 MAD de frais.",
    },
    {
      q: "Peut-on acheter un terrain Melkia au Maroc en 2026 ?",
      a: "Oui, les terrains Melkia (non titr\u00e9s) existent encore, surtout en zone rurale. Cependant, c&apos;est risqu\u00e9 : pas de garantie de propri\u00e9t\u00e9 inscrite \u00e0 la Conservation Fonci\u00e8re. Il est fortement recommand\u00e9 de proc\u00e9der \u00e0 l&apos;immatriculation (titrage) avant achat. La proc\u00e9dure co\u00fbte entre 5 000 et 20 000 MAD et prend 6 \u00e0 18 mois.",
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
        <h2>Acheter un terrain constructible au Maroc : le guide complet 2026</h2>
        <p>
          L&apos;achat d&apos;un terrain constructible au Maroc est la premi\u00e8re \u00e9tape de tout projet de construction. Que ce soit pour b\u00e2tir une villa \u00e0 Marrakech, un immeuble \u00e0 Casablanca ou une maison de vacances \u00e0 Agadir, cette d\u00e9cision engage un budget important et n\u00e9cessite des v\u00e9rifications rigoureuses. En 2026, les prix des terrains varient consid\u00e9rablement selon les r\u00e9gions, de 500 MAD/m\u00b2 en zone p\u00e9riurbaine \u00e0 plus de 15 000 MAD/m\u00b2 dans les quartiers pris\u00e9s de Casablanca.
        </p>

        <h2>Les v\u00e9rifications indispensables avant l&apos;achat</h2>
        <p>
          Avant de signer le moindre compromis, plusieurs v\u00e9rifications sont imp\u00e9ratives pour \u00e9viter les pi\u00e8ges courants du march\u00e9 foncier marocain :
        </p>
        <p>
          <strong>Le titre foncier :</strong> c&apos;est la pi\u00e8ce ma\u00eetresse. Demandez une copie du titre foncier aupr\u00e8s de la Conservation Fonci\u00e8re (ANCFCC). V\u00e9rifiez que le vendeur est bien le propri\u00e9taire inscrit, qu&apos;il n&apos;y a pas d&apos;hypoth\u00e8ques, de saisies ou d&apos;oppositions en cours. Le certificat de propri\u00e9t\u00e9 co\u00fbte environ 75 MAD.
        </p>
        <p>
          <strong>La note de renseignement :</strong> d\u00e9livr\u00e9e par l&apos;agence urbaine, elle pr\u00e9cise le zonage du terrain (r\u00e9sidentiel, commercial, industriel, agricole), le coefficient d&apos;occupation des sols (COS), la hauteur maximale autoris\u00e9e et les reculs obligatoires. Sans ce document, vous risquez de d\u00e9couvrir que votre terrain est en zone non aedificandi.
        </p>
        <p>
          <strong>Les servitudes :</strong> v\u00e9rifiez l&apos;existence de servitudes de passage, de canalisations souterraines, de lignes \u00e9lectriques haute tension ou de zones de protection. Ces servitudes peuvent r\u00e9duire consid\u00e9rablement la surface constructible.
        </p>
        <p>
          <strong>L&apos;\u00e9tude de sol :</strong> faites r\u00e9aliser une \u00e9tude g\u00e9otechnique (3 000 \u00e0 8 000 MAD) pour conna\u00eetre la nature du sol et adapter les fondations. Un sol argileux ou rocheux impacte le co\u00fbt de construction de 10 \u00e0 30 %.
        </p>

        <h2>Les pi\u00e8ges \u00e0 \u00e9viter absolument</h2>
        <p>
          Le march\u00e9 foncier marocain pr\u00e9sente plusieurs risques que les acheteurs non avertis d\u00e9couvrent souvent trop tard :
        </p>
        <p>
          <strong>Terrains en indivision :</strong> de nombreux terrains sont d\u00e9tenus en indivision familiale. L&apos;accord de tous les co-indivisaires est n\u00e9cessaire pour la vente. Un seul refus bloque la transaction. Privil\u00e9giez les terrains avec un seul propri\u00e9taire inscrit au titre foncier.
        </p>
        <p>
          <strong>Terrains collectifs :</strong> les terrains collectifs (terres soulaliyates) n\u00e9cessitent l&apos;autorisation du minist\u00e8re de l&apos;Int\u00e9rieur pour la vente. La proc\u00e9dure est longue et incertaine. \u00c9vitez-les sauf si le processus de cession est d\u00e9j\u00e0 finalis\u00e9.
        </p>
        <p>
          <strong>Terrains agricoles :</strong> la conversion d&apos;un terrain agricole en terrain constructible n\u00e9cessite une d\u00e9rogation qui peut prendre des ann\u00e9es. Ne payez jamais le prix d&apos;un terrain constructible pour un terrain class\u00e9 agricole.
        </p>

        <h2>Les frais d&apos;acquisition d\u00e9taill\u00e9s</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Poste</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Taux / Montant</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Exemple (terrain 500 000 MAD)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Droits d&apos;enregistrement</td>
              <td className="border border-stone-200 px-3 py-2">4 %</td>
              <td className="border border-stone-200 px-3 py-2">20 000 MAD</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Conservation fonci\u00e8re</td>
              <td className="border border-stone-200 px-3 py-2">1,5 %</td>
              <td className="border border-stone-200 px-3 py-2">7 500 MAD</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Honoraires notaire</td>
              <td className="border border-stone-200 px-3 py-2">1 % (min 2 500 MAD)</td>
              <td className="border border-stone-200 px-3 py-2">5 000 MAD</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Timbres et divers</td>
              <td className="border border-stone-200 px-3 py-2">~0,5 %</td>
              <td className="border border-stone-200 px-3 py-2">2 500 MAD</td>
            </tr>
            <tr className="font-semibold bg-stone-50">
              <td className="border border-stone-200 px-3 py-2">Total</td>
              <td className="border border-stone-200 px-3 py-2">~7 %</td>
              <td className="border border-stone-200 px-3 py-2">35 000 MAD</td>
            </tr>
          </tbody>
        </table>

        <h2>N\u00e9gocier le prix d&apos;un terrain au Maroc</h2>
        <p>
          La n\u00e9gociation est une pratique courante sur le march\u00e9 foncier marocain. Voici les leviers \u00e0 utiliser : comparez les prix au m\u00b2 dans le quartier via les transactions r\u00e9centes (disponibles \u00e0 la Conservation Fonci\u00e8re), identifiez les d\u00e9fauts du terrain (enclavement, pente, proximit\u00e9 d&apos;une route bruyante), et \u00e9valuez le co\u00fbt des travaux de viabilisation si les r\u00e9seaux (eau, \u00e9lectricit\u00e9, assainissement) ne sont pas en limite de propri\u00e9t\u00e9. En g\u00e9n\u00e9ral, une marge de n\u00e9gociation de 10 \u00e0 20 % est r\u00e9aliste sur un terrain non viabilis\u00e9.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Avant d&apos;acheter un terrain, consultez un architecte inscrit \u00e0 l&apos;Ordre sur Bati.ma pour une visite terrain gratuite. Il pourra \u00e9valuer le potentiel constructible r\u00e9el, estimer le co\u00fbt de construction adapt\u00e9 au sol et vous alerter sur les contraintes urbanistiques. Ce premier avis peut vous \u00e9viter un achat regrettable.
          </p>
        </div>

        <h2>Proc\u00e9dure d&apos;achat \u00e9tape par \u00e9tape</h2>
        <p>
          Une fois le terrain s\u00e9lectionn\u00e9 et les v\u00e9rifications effectu\u00e9es, la proc\u00e9dure se d\u00e9roule ainsi : signature d&apos;un compromis de vente chez le notaire avec versement d&apos;un acompte (g\u00e9n\u00e9ralement 10 %), obtention de la note de renseignement et du certificat de propri\u00e9t\u00e9, r\u00e9daction de l&apos;acte de vente d\u00e9finitif par le notaire, paiement du solde et des frais, inscription de la mutation \u00e0 la Conservation Fonci\u00e8re. D\u00e9lai total : 1 \u00e0 3 mois selon la complexit\u00e9 du dossier.
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
