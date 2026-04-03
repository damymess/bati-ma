export default function GuideMeilleurArchitecteMarrakech() {
  const faq = [
    { q: "Combien co\u00fbte un architecte \u00e0 Marrakech ?", a: "Les honoraires d\u2019un architecte \u00e0 Marrakech varient entre 5 et 12 % du montant des travaux pour une mission compl\u00e8te (conception + suivi). Pour une villa dans la Palmeraie, comptez 80 000 \u00e0 300 000 MAD selon la surface et la complexit\u00e9. Les missions partielles (plans uniquement) d\u00e9marrent autour de 30 000 MAD." },
    { q: "Faut-il un architecte sp\u00e9cialis\u00e9 pour construire dans la m\u00e9dina de Marrakech ?", a: "Oui, construire ou r\u00e9nover en m\u00e9dina exige une expertise sp\u00e9cifique : r\u00e8gles ADER, contraintes parcellaires, techniques traditionnelles (zellige, tadelakt). Choisissez un architecte ayant d\u00e9j\u00e0 r\u00e9alis\u00e9 des projets en m\u00e9dina et connaissant les artisans locaux." },
    { q: "Comment v\u00e9rifier qu\u2019un architecte \u00e0 Marrakech est fiable ?", a: "V\u00e9rifiez son inscription \u00e0 l\u2019Ordre r\u00e9gional des architectes de Marrakech-Safi, consultez son portfolio de r\u00e9alisations, demandez des r\u00e9f\u00e9rences clients, et rencontrez-le en personne. Sur Bati.ma, tous les profils sont v\u00e9rifi\u00e9s avec num\u00e9ro d\u2019Ordre." },
    { q: "Faut-il un architecte pour un projet de meilleur architecte marrakech ?", a: "Conform\u00e9ment \u00e0 la loi 16-89, le recours \u00e0 un architecte inscrit \u00e0 l\u2019Ordre est obligatoire pour toute construction au Maroc. M\u00eame pour les projets techniques, l\u2019architecte coordonne le permis de construire et assure la conformit\u00e9. Consultez les profils v\u00e9rifi\u00e9s sur Bati.ma." },
    { q: "Comment obtenir un devis pour meilleur architecte marrakech ?", a: "Demandez au minimum 3 devis d\u00e9taill\u00e9s aupr\u00e8s de professionnels diff\u00e9rents. Comparez les postes ligne par ligne, v\u00e9rifiez les r\u00e9f\u00e9rences et exigez un calendrier d\u2019ex\u00e9cution. Sur Bati.ma, vous pouvez contacter directement les architectes sp\u00e9cialis\u00e9s et demander vos devis gratuitement." },
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
        <h2>Pourquoi Marrakech a des besoins architecturaux sp\u00e9cifiques</h2>
        <p>
          Marrakech est une ville o\u00f9 cohabitent <strong>h\u00e9ritage m\u00e9dinois</strong>, <strong>villas contemporaines de la Palmeraie</strong>
          et <strong>projets touristiques haut de gamme</strong>. Un architecte \u00e0 Marrakech doit ma\u00eetriser aussi bien les techniques
          traditionnelles (zellige, tadelakt, gebs) que le design contemporain. La ville attire \u00e9galement une client\u00e8le internationale
          exigeante pour des projets de riads, maisons d&apos;h\u00f4tes et villas de luxe.
        </p>

        <h2>Crit\u00e8res de s\u00e9lection d&apos;un architecte \u00e0 Marrakech</h2>
        <ol>
          <li><strong>Inscription \u00e0 l&apos;Ordre</strong> : v\u00e9rifiez le num\u00e9ro CNAOM r\u00e9gion Marrakech-Safi</li>
          <li><strong>Sp\u00e9cialisation</strong> : riad, villa contemporaine, h\u00f4tellerie, commerce</li>
          <li><strong>Portfolio local</strong> : demandez des projets r\u00e9alis\u00e9s \u00e0 Marrakech</li>
          <li><strong>R\u00e9seau d&apos;artisans</strong> : un bon architecte conna\u00eet les meilleurs maalems</li>
          <li><strong>Ma\u00eetrise bilingue</strong> : fran\u00e7ais/arabe indispensable, anglais pour la client\u00e8le internationale</li>
          <li><strong>R\u00e9f\u00e9rences v\u00e9rifiables</strong> : contactez d&apos;anciens clients</li>
        </ol>

        <h2>Sp\u00e9cialit\u00e9s architecturales \u00e0 Marrakech</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead><tr className="bg-stone-100"><th className="border border-stone-200 px-3 py-2 text-left">Sp\u00e9cialit\u00e9</th><th className="border border-stone-200 px-3 py-2 text-left">Projets typiques</th><th className="border border-stone-200 px-3 py-2 text-left">Budget moyen</th></tr></thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">R\u00e9novation riad m\u00e9dina</td><td className="border border-stone-200 px-3 py-2">Riad maison d&apos;h\u00f4tes, r\u00e9sidence</td><td className="border border-stone-200 px-3 py-2">500 000 \u2013 3 000 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Villa Palmeraie / Route de l&apos;Ourika</td><td className="border border-stone-200 px-3 py-2">Villa contemporaine, piscine</td><td className="border border-stone-200 px-3 py-2">2 000 000 \u2013 10 000 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">H\u00f4tellerie / Resort</td><td className="border border-stone-200 px-3 py-2">Boutique-h\u00f4tel, \u00e9co-lodge</td><td className="border border-stone-200 px-3 py-2">5 000 000 \u2013 50 000 000 MAD</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Commercial / Retail</td><td className="border border-stone-200 px-3 py-2">Restaurants, boutiques, galeries</td><td className="border border-stone-200 px-3 py-2">300 000 \u2013 5 000 000 MAD</td></tr>
          </tbody>
        </table>

        <h2>Tarifs des architectes \u00e0 Marrakech</h2>
        <p>
          Les honoraires \u00e0 Marrakech sont g\u00e9n\u00e9ralement <strong>10 \u00e0 20 % plus \u00e9lev\u00e9s</strong> que la moyenne nationale,
          en raison de la complexit\u00e9 des projets et du standing de la client\u00e8le. Voici les fourchettes constat\u00e9es :
        </p>
        <ul>
          <li><strong>Mission compl\u00e8te</strong> (conception + suivi) : 7 \u00e0 12 % du montant des travaux</li>
          <li><strong>Conception seule</strong> (plans + permis) : 3 \u00e0 6 % du montant des travaux</li>
          <li><strong>Consultation / esquisse</strong> : 5 000 \u00e0 15 000 MAD</li>
          <li><strong>Am\u00e9nagement int\u00e9rieur</strong> : 300 \u00e0 800 MAD/m\u00b2</li>
        </ul>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            \u00c0 Marrakech, ne choisissez jamais un architecte uniquement sur le prix. La qualit\u00e9 de son r\u00e9seau d&apos;artisans (maalems zellige, tadelakt, fer forg\u00e9) est aussi importante que ses comp\u00e9tences techniques. Demandez \u00e0 visiter un chantier en cours.
          </p>
        </div>

        <h2>Comment trouver le bon architecte sur Bati.ma</h2>
        <p>
          Sur Bati.ma, filtrez les architectes par <strong>ville (Marrakech)</strong> et par <strong>sp\u00e9cialit\u00e9</strong>.
          Chaque profil affiche le num\u00e9ro d&apos;Ordre, le portfolio, les avis clients et les coordonn\u00e9es directes.
          Comparez au moins 3 profils avant de prendre rendez-vous et pr\u00e9parez un brief d\u00e9taill\u00e9 de votre projet
          (terrain, budget, style souhait\u00e9, d\u00e9lais).
        </p>

        <h2>\u00c9tapes pour d\u00e9marrer votre projet \u00e0 Marrakech</h2>
        <ol>
          <li>D\u00e9finissez votre budget global et le type de projet</li>
          <li>S\u00e9lectionnez 3 architectes sur Bati.ma avec des r\u00e9alisations similaires</li>
          <li>Organisez des rendez-vous et comparez les approches</li>
          <li>Signez un contrat de ma\u00eetrise d&apos;\u0153uvre d\u00e9taill\u00e9</li>
          <li>Validez l&apos;esquisse puis l&apos;avant-projet d\u00e9finitif</li>
          <li>D\u00e9posez le permis de construire et lancez les travaux</li>
        </ol>
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
