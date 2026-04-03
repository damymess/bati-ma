export default function GuideTadelakt() {
  const faq = [
    {
      q: "Combien coûte le tadelakt au Maroc ?",
      a: "Le tadelakt coûte entre 400 et 800 MAD/m² pose comprise, selon la complexité de la surface et la renommée de l&apos;artisan. Ce prix inclut la chaux de Marrakech, les pigments, le savon noir et la main-d&apos;oeuvre. Les surfaces courbes, les niches et les colonnes sont plus chères (majoration de 30 à 50 %). À titre de comparaison, un carrelage milieu de gamme posé revient à 250-450 MAD/m².",
    },
    {
      q: "Le tadelakt résiste-t-il vraiment à l&apos;eau ?",
      a: "Oui, le tadelakt est naturellement imperméable une fois finalisé. La réaction chimique entre la chaux, le polissage au galet d&apos;onyx et le traitement au savon noir (à base d&apos;huile d&apos;olive) crée une surface hydrofuge et lisse. Cette technique est utilisée depuis des siècles dans les hammams et les citernes d&apos;eau au Maroc. Cependant, l&apos;imperméabilité dépend de la qualité d&apos;exécution : un tadelakt mal réalisé peut fissurer et laisser passer l&apos;eau.",
    },
    {
      q: "Peut-on appliquer du tadelakt soi-même ?",
      a: "Le tadelakt est une technique exigeante qui nécessite un savoir-faire artisanal. L&apos;application de la chaux, le lissage au galet, le timing précis du polissage et le traitement au savon noir sont des gestes qui s&apos;acquièrent après des années de pratique. Une application amateur risque de fissurer, de ne pas être imperméable ou de présenter des défauts esthétiques. Il est fortement recommandé de faire appel à un maître artisan (maalem) spécialisé.",
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
        <h2>Qu&apos;est-ce que le tadelakt ?</h2>
        <p>
          Le tadelakt est un enduit traditionnel marocain à base de chaux de Marrakech, utilisé depuis des siècles pour imperméabiliser et décorer les surfaces intérieures. Son nom vient du verbe arabe &quot;dellek&quot; signifiant masser ou frotter, en référence au polissage au galet qui lui donne son aspect lisse et brillant caractéristique. Originaire de la région de Marrakech où l&apos;on trouve la chaux spécifique nécessaire à sa fabrication, le tadelakt est devenu un symbole du savoir-faire artisanal marocain reconnu dans le monde entier.
        </p>
        <p>
          Traditionnellement utilisé dans les hammams, les riads, les fontaines et les citernes, le tadelakt a conquis le design contemporain. On le retrouve désormais dans les salles de bain de luxe, les cuisines, les spas et les hôtels boutique au Maroc et à l&apos;international. Sa texture veloutée, ses reflets subtils et sa palette de couleurs naturelles en font un revêtement d&apos;exception.
        </p>

        <h2>Le processus d&apos;application du tadelakt</h2>
        <p>
          L&apos;application du tadelakt est un art en plusieurs étapes qui demande patience et expertise. Chaque phase est essentielle pour obtenir un résultat durable et imperméable :
        </p>
        <p>
          <strong>1. Préparation du support :</strong> Le mur doit être en maçonnerie traditionnelle ou en ciment-chaux (jamais directement sur plâtre ou placo). On applique un gobetis (accrochage) à base de chaux et de sable, puis un corps d&apos;enduit en chaux aérienne. Le support doit sécher 7 à 10 jours minimum.
        </p>
        <p>
          <strong>2. Préparation de la chaux :</strong> La chaux de Marrakech (chaux hydraulique naturelle) est mélangée avec des pigments naturels et de l&apos;eau pour obtenir une pâte homogène. Elle repose ensuite 12 à 24 heures avant application. Les pigments (ocres, oxydes de fer, terre de Sienne) donnent les couleurs : terracotta, beige, gris, rose, vert amande.
        </p>
        <p>
          <strong>3. Application et lissage :</strong> L&apos;enduit est appliqué en deux couches fines à la taloche. La première couche (3 à 4 mm) est griffée pour assurer l&apos;accroche. La deuxième couche (2 à 3 mm) est lissée à la taloche puis polie au galet d&apos;onyx ou d&apos;agate lorsqu&apos;elle commence à tirer. Ce polissage est l&apos;étape la plus délicate : trop tôt, l&apos;enduit s&apos;arrache ; trop tard, il est impossible à lisser.
        </p>
        <p>
          <strong>4. Traitement au savon noir :</strong> Une fois l&apos;enduit sec mais encore frais (12 à 24 heures), le maître artisan applique du savon noir (savon beldi à l&apos;huile d&apos;olive) en le faisant pénétrer par polissage au galet. La réaction de saponification entre le savon et la chaux crée une couche imperméable en surface. Ce traitement est renouvelé plusieurs fois.
        </p>

        <h2>Surfaces adaptées au tadelakt</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-300 px-3 py-2 text-left">Surface</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Adapté</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Précautions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-300 px-3 py-2 font-medium">Murs salle de bain</td>
              <td className="border border-stone-300 px-3 py-2">Excellent</td>
              <td className="border border-stone-300 px-3 py-2">Ventilation indispensable</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2 font-medium">Hammam / douche</td>
              <td className="border border-stone-300 px-3 py-2">Excellent</td>
              <td className="border border-stone-300 px-3 py-2">Application par maalem expérimenté</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2 font-medium">Crédence cuisine</td>
              <td className="border border-stone-300 px-3 py-2">Bon</td>
              <td className="border border-stone-300 px-3 py-2">Éviter les projections acides directes</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2 font-medium">Vasque / lavabo</td>
              <td className="border border-stone-300 px-3 py-2">Bon</td>
              <td className="border border-stone-300 px-3 py-2">Renouveler le savon noir annuellement</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2 font-medium">Sol</td>
              <td className="border border-stone-300 px-3 py-2">Déconseillé</td>
              <td className="border border-stone-300 px-3 py-2">Fragile au passage et aux meubles</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2 font-medium">Extérieur</td>
              <td className="border border-stone-300 px-3 py-2">Déconseillé</td>
              <td className="border border-stone-300 px-3 py-2">Non résistant au gel et aux UV</td>
            </tr>
          </tbody>
        </table>

        <h2>Trouver un artisan tadelakt au Maroc</h2>
        <p>
          Les meilleurs artisans tadelakt se trouvent à Marrakech, berceau de cette technique. On en trouve aussi à Fès, Essaouira et Casablanca. Un maalem tadelakt expérimenté facture entre 400 et 600 MAD/m² pour un mur standard, et 600 à 800 MAD/m² pour des surfaces complexes (colonnes, niches, vasques). Demandez toujours à voir des réalisations précédentes et des références clients avant de confier votre chantier.
        </p>
        <p>
          La durée d&apos;exécution dépend de la surface : comptez 3 à 5 jours pour une salle de bain de 15 m² de murs, plus 3 à 4 jours de séchage et de traitement au savon noir. Le tadelakt ne doit pas être exposé à l&apos;eau pendant au moins 7 jours après la finition pour permettre la carbonatation complète de la chaux.
        </p>

        <h2>Entretien et durabilité</h2>
        <p>
          Un tadelakt bien réalisé dure des décennies sans intervention. L&apos;entretien courant se limite à un nettoyage à l&apos;eau claire et au savon noir naturel. Évitez les produits chimiques, les détergents acides et les éponges abrasives. Une application de savon noir (dilué dans l&apos;eau tiède) une à deux fois par an suffit à maintenir l&apos;imperméabilité et l&apos;éclat de la surface. En cas de micro-fissure, un artisan peut reprendre localement sans déposer l&apos;ensemble.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Le tadelakt est un revêtement noble qui ne pardonne pas les approximations. Choisissez un artisan recommandé, utilisez exclusivement de la chaux de Marrakech authentique (pas de chaux industrielle) et respectez les temps de séchage. Un architecte d&apos;intérieur sur Bati.ma peut vous orienter vers les meilleurs maîtres artisans tadelakt de votre ville et superviser la qualité de l&apos;exécution.
          </p>
        </div>
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
