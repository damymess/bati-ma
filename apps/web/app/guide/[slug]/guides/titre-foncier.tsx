export default function GuideTitreFoncier() {
  const faq = [
    {
      q: "Quelle est la différence entre melkia et titre foncier au Maroc ?",
      a: "La melkia est un acte adoulaire attestant la possession d\u0027un bien, basé sur des témoignages. Le titre foncier est un document officiel délivré par la Conservation Foncière après immatriculation, garantissant juridiquement la propriété. Le titre foncier est inattaquable une fois définitif, tandis que la melkia peut être contestée. Il est fortement recommandé de convertir toute melkia en titre foncier.",
    },
    {
      q: "Combien coûte l\u0027immatriculation d\u0027un terrain au Maroc ?",
      a: "Les frais d\u0027immatriculation comprennent : les droits de conservation (1,5 % de la valeur du bien), les frais de bornage (2 000 à 5 000 MAD), les honoraires du géomètre topographe (3 000 à 10 000 MAD), et les frais de publication. Au total, comptez environ 2 à 3 % de la valeur du bien pour une immatriculation complète.",
    },
    {
      q: "Comment vérifier le titre foncier d\u0027un bien avant achat ?",
      a: "Demandez un certificat de propriété récent (moins de 3 mois) à la Conservation Foncière. Ce document indique le propriétaire actuel, la superficie, les hypothèques et les servitudes éventuelles. Vous pouvez aussi consulter en ligne via le portail de l\u0027ANCFCC. Faites vérifier le certificat par un notaire avant toute transaction.",
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
        <h2>Le titre foncier au Maroc : sécuriser votre propriété</h2>
        <p>
          Le titre foncier est la pierre angulaire de la sécurité immobilière au Maroc. Délivré par l&apos;Agence Nationale de la Conservation Foncière, du Cadastre et de la Cartographie (ANCFCC), il constitue la preuve irréfutable de propriété. Au Maroc, où coexistent encore le régime de l&apos;immatriculation foncière (titre foncier) et le régime traditionnel (melkia), comprendre ces mécanismes est essentiel avant tout achat ou projet de construction.
        </p>

        <h2>Les deux régimes fonciers au Maroc</h2>
        <p>
          Le système foncier marocain repose sur deux régimes distincts qui ont des implications juridiques très différentes :
        </p>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-300 px-3 py-2 text-left">Critère</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Titre foncier</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Melkia (acte adoulaire)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Valeur juridique</td>
              <td className="border border-stone-300 px-3 py-2">Inattaquable, définitif</td>
              <td className="border border-stone-300 px-3 py-2">Contestable, présomptif</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Délivré par</td>
              <td className="border border-stone-300 px-3 py-2">Conservation Foncière</td>
              <td className="border border-stone-300 px-3 py-2">Adouls (notaires traditionnels)</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Superficie garantie</td>
              <td className="border border-stone-300 px-3 py-2">Oui (bornage officiel)</td>
              <td className="border border-stone-300 px-3 py-2">Non (estimative)</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Hypothèque possible</td>
              <td className="border border-stone-300 px-3 py-2">Oui</td>
              <td className="border border-stone-300 px-3 py-2">Difficile (banques réticentes)</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Crédit bancaire</td>
              <td className="border border-stone-300 px-3 py-2">Facilité</td>
              <td className="border border-stone-300 px-3 py-2">Complexe, surcoût</td>
            </tr>
          </tbody>
        </table>

        <h2>Procédure d&apos;immatriculation foncière</h2>
        <p>
          L&apos;immatriculation est le processus qui transforme un bien en melkia en un bien titré. La procédure suit plusieurs étapes : le dépôt de la réquisition d&apos;immatriculation à la Conservation Foncière, la publication au Bulletin Officiel et affichage local pendant 2 mois, le bornage par un géomètre topographe assermenté, le délai d&apos;opposition (2 mois après le bornage), et enfin la création du titre foncier si aucune opposition n&apos;est reçue. La durée totale varie de 6 mois à 2 ans selon la complexité du dossier et l&apos;existence d&apos;oppositions.
        </p>

        <h2>Frais et coûts de l&apos;immatriculation</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-300 px-3 py-2 text-left">Poste de dépense</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Coût (MAD)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Droits de conservation (1,5 %)</td>
              <td className="border border-stone-300 px-3 py-2">Variable selon valeur du bien</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Honoraires géomètre topographe</td>
              <td className="border border-stone-300 px-3 py-2">3 000 - 10 000</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Frais de bornage</td>
              <td className="border border-stone-300 px-3 py-2">2 000 - 5 000</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Publication Bulletin Officiel</td>
              <td className="border border-stone-300 px-3 py-2">500 - 1 000</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Timbres et frais de dossier</td>
              <td className="border border-stone-300 px-3 py-2">200 - 500</td>
            </tr>
          </tbody>
        </table>

        <h2>Vérifications avant achat d&apos;un bien titré</h2>
        <p>
          Avant tout achat immobilier au Maroc, plusieurs vérifications s&apos;imposent auprès de la Conservation Foncière : la concordance entre le vendeur et le titulaire inscrit sur le titre, l&apos;absence d&apos;hypothèques ou de saisies, la conformité de la superficie avec le titre, l&apos;absence de servitudes non mentionnées dans le compromis, et la situation fiscale du bien (taxe d&apos;habitation, taxe des services communaux). Le certificat de propriété, qui coûte 75 MAD, résume toutes ces informations.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            N&apos;achetez jamais un terrain ou un bien immobilier sans vérifier son statut foncier auprès de la Conservation Foncière. Les litiges fonciers sont parmi les plus longs et coûteux au Maroc. Pour les biens en melkia, faites-vous accompagner par un notaire et un géomètre topographe certifié, que vous trouverez sur Bati.ma.
          </p>
        </div>

        <h2>Le portail en ligne de l&apos;ANCFCC</h2>
        <p>
          L&apos;ANCFCC a modernisé ses services avec un portail en ligne permettant la consultation des titres fonciers, la demande de certificats de propriété, le suivi des dossiers d&apos;immatriculation et le paiement des droits en ligne. Ce service facilite considérablement les démarches et réduit les délais de traitement. Le portail est accessible sur le site officiel de l&apos;ANCFCC et nécessite une inscription préalable.
        </p>
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-stone-900 mb-5">Questions fréquentes</h2>
        <div className="space-y-4">
          {faq.map((f) => (
            <details
              key={f.q}
              className="group border border-stone-200 rounded-lg overflow-hidden"
            >
              <summary className="flex items-center justify-between px-4 py-3 cursor-pointer text-sm font-medium text-stone-800 hover:bg-stone-50">
                {f.q}
                <span className="text-stone-400 group-open:rotate-180 transition-transform">
                  ↓
                </span>
              </summary>
              <div className="px-4 pb-4 pt-1 text-sm text-stone-600 leading-relaxed">
                {f.a}
              </div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
