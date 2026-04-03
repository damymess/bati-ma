export default function GuideDivisionTerrain() {
  const faq = [
    {
      q: "Quelle est la différence entre morcellement et lotissement ?",
      a: "Le morcellement consiste à diviser un terrain en deux lots ou plus sans réaliser de travaux d&apos;équipement. Le lotissement implique une division avec création de voiries, réseaux d&apos;assainissement, d&apos;eau et d&apos;électricité. Le lotissement est encadré par la loi 25-90 et nécessite une autorisation spécifique avec cahier des charges, alors que le morcellement suit une procédure plus simple.",
    },
    {
      q: "Combien coûte la division d&apos;un terrain au Maroc ?",
      a: "Les frais varient selon la superficie et la complexité. Comptez 3 000 à 8 000 MAD pour le géomètre-topographe, 1 % de la valeur du terrain pour les droits de conservation foncière (minimum 500 MAD par lot), et les honoraires de l&apos;architecte si un plan de masse est requis (environ 1 % à 2 % de la valeur). Au total, la division d&apos;un terrain de 500 m² coûte entre 10 000 et 25 000 MAD.",
    },
    {
      q: "Peut-on diviser un terrain non titré ?",
      a: "La division d&apos;un terrain non titré (melk) est juridiquement risquée et fortement déconseillée. Il est recommandé de procéder d&apos;abord à l&apos;immatriculation foncière auprès de la conservation foncière (réquisition), puis de diviser une fois le titre foncier obtenu. Sans titre, la vente des lots séparés est impossible à enregistrer et ne protège pas les acquéreurs.",
    },
    {
      q: "Quel est le rôle du géomètre-topographe dans la division de terrain ?",
      a: "Le géomètre agréé réalise le bornage, le levé topographique et le plan de morcellement. Il assure la liaison avec la conservation foncière pour créer les nouveaux titres. Son intervention est obligatoire pour toute modification des limites d&apos;un titre foncier.",
    },
    {
      q: "Faut-il une autorisation de la commune pour diviser un terrain ?",
      a: "Oui, toute division de terrain nécessite une autorisation de morcellement délivrée par le président de la commune, après avis de l&apos;agence urbaine. Sans cette autorisation, la vente des lots est nulle et expose le vendeur à des sanctions pénales.",
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
        <h2>Comment fonctionne la division de terrain au Maroc ?</h2>
        <p>
          La division de terrain est une opération foncière courante au Maroc, qu&apos;il s&apos;agisse de partager un héritage familial, de vendre une partie d&apos;un terrain ou de créer un lotissement. Encadrée par la loi 25-90 relative aux lotissements, groupes d&apos;habitations et morcellements, cette procédure nécessite l&apos;intervention de plusieurs professionnels : géomètre-topographe agréé, architecte, et la conservation foncière.
        </p>
        <p>
          Avant de diviser un terrain, il faut distinguer deux situations : le morcellement simple (division sans travaux d&apos;aménagement) et le lotissement (division avec viabilisation). Le choix dépend du nombre de lots, de la destination des parcelles et des exigences de la commune.
        </p>

        <h2>Quelle est la procédure de morcellement ?</h2>
        <p>
          Le morcellement est la forme la plus simple de division foncière. Il consiste à diviser une propriété titrée en deux lots ou plus, sans obligation de réaliser des travaux d&apos;équipement. La procédure se déroule comme suit :
        </p>
        <p>
          <strong>Étape 1 - Levé topographique :</strong> Un géomètre-topographe agréé réalise le bornage et le levé du terrain. Il établit un plan de morcellement indiquant les limites de chaque lot, les superficies et les bornes. Ce document est essentiel pour la conservation foncière.
        </p>
        <p>
          <strong>Étape 2 - Note de renseignement :</strong> Obtenir la note de renseignement urbanistique auprès de l&apos;agence urbaine pour vérifier que chaque lot respecte les règles du plan d&apos;aménagement (superficie minimale, accès à la voirie, zonage).
        </p>
        <p>
          <strong>Étape 3 - Autorisation de morcellement :</strong> La demande est déposée auprès de la commune concernée, accompagnée du plan de morcellement, de la note de renseignement et du titre foncier. Le président de la commune délivre l&apos;autorisation après avis de l&apos;agence urbaine.
        </p>
        <p>
          <strong>Étape 4 - Inscription à la conservation foncière :</strong> Une fois l&apos;autorisation obtenue, le géomètre dépose les documents auprès de la conservation foncière (ANCFCC) pour créer les nouveaux titres fonciers. Chaque lot obtient un titre distinct, permettant sa vente indépendante.
        </p>

        <h2>L&apos;autorisation de lotissement</h2>
        <p>
          Le lotissement est une opération plus complexe, régie par des dispositions spécifiques de la loi 25-90. Il est obligatoire lorsque la division crée plus de deux lots destinés à la construction et nécessite la réalisation de voiries et de réseaux.
        </p>
        <p>
          Le dossier de lotissement comprend : un plan de masse signé par un architecte agréé, une note de présentation, un cahier des charges, un programme d&apos;équipement, un plan des réseaux (eau, électricité, assainissement) et une étude géotechnique. L&apos;instruction du dossier est réalisée par la commission préfectorale ou provinciale qui réunit l&apos;agence urbaine, la commune, l&apos;ONEE, la Lydec/Amendis et la protection civile.
        </p>

        <h2>Combien coûte la division d&apos;un terrain ?</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-300 px-3 py-2 text-left">Poste de dépense</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Coût estimatif</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Observations</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Géomètre-topographe</td>
              <td className="border border-stone-300 px-3 py-2">3 000 - 8 000 MAD</td>
              <td className="border border-stone-300 px-3 py-2">Selon superficie et nombre de lots</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Conservation foncière</td>
              <td className="border border-stone-300 px-3 py-2">1 % de la valeur + 500 MAD/lot</td>
              <td className="border border-stone-300 px-3 py-2">Droits d&apos;inscription des titres</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Architecte (lotissement)</td>
              <td className="border border-stone-300 px-3 py-2">1 % à 2 % de la valeur</td>
              <td className="border border-stone-300 px-3 py-2">Plan de masse et suivi</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Frais de commune</td>
              <td className="border border-stone-300 px-3 py-2">500 - 2 000 MAD</td>
              <td className="border border-stone-300 px-3 py-2">Taxes locales et timbres</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">VRD (lotissement)</td>
              <td className="border border-stone-300 px-3 py-2">300 - 800 MAD/m²</td>
              <td className="border border-stone-300 px-3 py-2">Voirie, réseaux divers</td>
            </tr>
          </tbody>
        </table>

        <h2>Quel est le rôle du géomètre-topographe ?</h2>
        <p>
          Le géomètre-topographe agréé est l&apos;acteur central de toute division de terrain au Maroc. Seul habilité à réaliser les opérations de bornage et de levé, il est inscrit à l&apos;Ordre national des ingénieurs géomètres-topographes (ONIGT). Son intervention est obligatoire pour toute modification des limites d&apos;un titre foncier. Il assure la liaison technique avec la conservation foncière et garantit la conformité géométrique des lots créés.
        </p>
        <p>
          Pour trouver un géomètre compétent, consultez l&apos;annuaire de l&apos;ONIGT ou demandez une recommandation à votre architecte. Les honoraires du géomètre ne sont pas réglementés mais suivent des barèmes indicatifs selon la superficie et la complexité du terrain.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            La division de terrain est une opération technique et juridique qui ne s&apos;improvise pas. Faites toujours appel à un géomètre-topographe agréé et à un architecte pour sécuriser votre projet. Vérifiez que votre terrain est bien titré avant d&apos;engager la procédure, et assurez-vous que chaque lot respecte la superficie minimale exigée par le plan d&apos;aménagement. Sur Bati.ma, trouvez un architecte qui maîtrise la réglementation foncière de votre ville.
          </p>
        </div>

        <h2>Quelles erreurs éviter lors d&apos;une division de terrain ?</h2>
        <p>
          La première erreur est de diviser un terrain sans autorisation : toute vente d&apos;un lot non autorisé est nulle et expose le vendeur à des sanctions. La deuxième est de négliger la vérification du zonage : certains terrains ont une superficie minimale de lot (parfois 100 m², parfois 300 m²) qui empêche la division souhaitée. La troisième erreur est de ne pas anticiper les servitudes de passage : chaque lot doit avoir un accès direct à la voie publique ou bénéficier d&apos;une servitude de passage inscrite au titre foncier.
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
