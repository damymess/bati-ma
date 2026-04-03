export default function GuideTopographeMaroc() {
  const faq = [
    { q: "Quand faut-il faire appel à un topographe au Maroc ?", a: "Un topographe est indispensable avant toute construction : pour le bornage du terrain (délimitation officielle), le levé topographique (relevé des altitudes et des limites), et l\u2019implantation du bâtiment sur la parcelle. Il intervient également lors de la division de terrains, de la régularisation foncière ou de litiges de voisinage sur les limites de propriété." },
    { q: "Combien coûte un topographe au Maroc ?", a: "Les tarifs d\u2019un topographe varient selon la prestation : entre 3 000 et 8 000 MAD pour un bornage simple, entre 5 000 et 15 000 MAD pour un levé topographique complet, et entre 2 000 et 5 000 MAD pour une implantation. Les prix dépendent de la superficie du terrain, de sa localisation et de la complexité de l\u2019intervention." },
    { q: "Quelle est la différence entre un géomètre et un topographe au Maroc ?", a: "Au Maroc, le terme « topographe » est le plus couramment utilisé pour désigner l\u2019ingénieur géomètre-topographe. Ce professionnel est inscrit à l\u2019Ordre National des Ingénieurs Géomètres-Topographes (ONIGT) et est habilité à réaliser des travaux fonciers, des levés et des bornages ayant une valeur juridique." },
    { q: "Faut-il un architecte pour un projet de topographe au Maroc ?", a: "Conform\u00e9ment \u00e0 la loi 16-89, le recours \u00e0 un architecte inscrit \u00e0 l\u2019Ordre est obligatoire pour toute construction au Maroc. M\u00eame pour les projets techniques, l\u2019architecte coordonne le permis de construire et assure la conformit\u00e9. Consultez les profils v\u00e9rifi\u00e9s sur Bati.ma." },
    { q: "Comment obtenir un devis pour topographe au Maroc ?", a: "Demandez au minimum 3 devis d\u00e9taill\u00e9s aupr\u00e8s de professionnels diff\u00e9rents. Comparez les postes ligne par ligne, v\u00e9rifiez les r\u00e9f\u00e9rences et exigez un calendrier d\u2019ex\u00e9cution. Sur Bati.ma, vous pouvez contacter directement les architectes sp\u00e9cialis\u00e9s et demander vos devis gratuitement." },
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
        <h2>Le rôle du topographe dans la construction au Maroc</h2>
        <p>
          Le topographe (ou ingénieur géomètre-topographe) est un acteur
          incontournable de tout projet de construction au Maroc. Il intervient
          en amont du projet pour définir les limites exactes du terrain,
          réaliser les relevés nécessaires à la conception architecturale et
          implanter le bâtiment sur la parcelle. Sans son intervention, aucun
          permis de construire ne peut être délivré.
        </p>

        <h2>Les missions du topographe</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="text-left px-3 py-2 border border-stone-200">Mission</th>
              <th className="text-left px-3 py-2 border border-stone-200">Description</th>
              <th className="text-left px-3 py-2 border border-stone-200">Tarif indicatif</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-3 py-2 border border-stone-200">Bornage</td><td className="px-3 py-2 border border-stone-200">Délimitation officielle des limites du terrain avec pose de bornes</td><td className="px-3 py-2 border border-stone-200">3 000 – 8 000 MAD</td></tr>
            <tr><td className="px-3 py-2 border border-stone-200">Levé topographique</td><td className="px-3 py-2 border border-stone-200">Relevé altimétrique et planimétrique du terrain</td><td className="px-3 py-2 border border-stone-200">5 000 – 15 000 MAD</td></tr>
            <tr><td className="px-3 py-2 border border-stone-200">Implantation</td><td className="px-3 py-2 border border-stone-200">Report des plans de l&apos;architecte sur le terrain</td><td className="px-3 py-2 border border-stone-200">2 000 – 5 000 MAD</td></tr>
            <tr><td className="px-3 py-2 border border-stone-200">Division parcellaire</td><td className="px-3 py-2 border border-stone-200">Découpage d&apos;un terrain en lots distincts</td><td className="px-3 py-2 border border-stone-200">5 000 – 20 000 MAD</td></tr>
            <tr><td className="px-3 py-2 border border-stone-200">Régularisation foncière</td><td className="px-3 py-2 border border-stone-200">Mise à jour du titre foncier après travaux</td><td className="px-3 py-2 border border-stone-200">4 000 – 12 000 MAD</td></tr>
          </tbody>
        </table>

        <h2>Le bornage : étape essentielle avant toute construction</h2>
        <p>
          Le bornage consiste à déterminer et matérialiser les limites exactes
          d&apos;une propriété par la pose de bornes physiques. Au Maroc, cette
          opération est réalisée par un ingénieur géomètre-topographe inscrit
          à l&apos;ONIGT. Le bornage est indispensable pour :
        </p>
        <ul>
          <li>Vérifier la superficie réelle du terrain avant l&apos;achat</li>
          <li>Éviter les litiges de voisinage sur les limites</li>
          <li>Constituer le dossier de permis de construire</li>
          <li>Garantir que la construction respecte les reculs réglementaires</li>
        </ul>

        <h2>Le levé topographique : la base du projet architectural</h2>
        <p>
          Le levé topographique fournit à l&apos;architecte toutes les informations
          nécessaires pour concevoir le projet : altitudes du terrain, pentes,
          position des arbres et constructions existantes, réseaux enterrés.
          C&apos;est un document technique indispensable qui conditionne la qualité
          de la conception architecturale et le calcul des terrassements.
        </p>

        <div className="bg-[#f4ece7] border border-stone-200 rounded-lg p-4 my-6">
          <p className="text-sm text-stone-700 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-600">
            Faites réaliser le bornage et le levé topographique avant de finaliser
            l&apos;achat d&apos;un terrain. Ces opérations peuvent révéler des écarts de
            superficie, des empiètements de voisins ou des contraintes de relief
            qui impactent directement la faisabilité et le coût de votre projet.
            Votre architecte a besoin de ces documents pour démarrer la conception.
          </p>
        </div>

        <h2>Relation topographe-architecte : une collaboration essentielle</h2>
        <p>
          Le topographe et l&apos;architecte travaillent en étroite collaboration
          tout au long du projet. Le topographe fournit les données terrain
          nécessaires à la conception, puis intervient pour implanter le
          bâtiment exactement selon les plans validés. En fin de chantier, il
          peut également réaliser un récolement pour vérifier la conformité
          de la construction par rapport aux plans autorisés.
        </p>

        <h2>Comment choisir un topographe au Maroc ?</h2>
        <p>
          Pour choisir un topographe fiable, vérifiez qu&apos;il est inscrit à
          l&apos;Ordre National des Ingénieurs Géomètres-Topographes (ONIGT).
          Demandez un devis détaillé précisant les prestations incluses et
          les délais de remise des documents. Sur Bati.ma, vous pouvez
          consulter des profils de topographes vérifiés, comparer les tarifs
          et demander des devis gratuits pour votre projet.
        </p>

        <h2>Les démarches administratives liées au topographe</h2>
        <p>
          Le topographe intervient dans plusieurs démarches administratives
          au Maroc :
        </p>
        <ul>
          <li>Inscription ou mise à jour au cadastre (conservation foncière)</li>
          <li>Constitution du dossier de permis de construire</li>
          <li>Dossier de morcellement et de lotissement</li>
          <li>Régularisation de constructions existantes</li>
          <li>Expertise judiciaire en cas de litige foncier</li>
        </ul>
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
