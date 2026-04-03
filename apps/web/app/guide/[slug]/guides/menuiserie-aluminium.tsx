export default function GuideMenuiserieAluminium() {
  const faq = [
    {
      q: "Quel est le prix moyen d\u0027une fenêtre en aluminium au Maroc ?",
      a: "Le prix d\u0027une fenêtre en aluminium au Maroc varie entre 1 200 et 3 500 MAD par m², selon le type de profilé, le vitrage choisi (simple ou double) et la finition (laqué, anodisé). Les grandes baies vitrées coulissantes peuvent atteindre 4 000 MAD/m² pour du haut de gamme.",
    },
    {
      q: "Aluminium ou PVC : quel matériau choisir pour ses fenêtres au Maroc ?",
      a: "L\u0027aluminium est privilégié au Maroc pour sa résistance à la chaleur et sa durabilité face aux conditions climatiques. Le PVC est moins cher (800-2 000 MAD/m²) mais se déforme sous les fortes chaleurs. L\u0027aluminium offre aussi des profilés plus fins, laissant passer davantage de lumière.",
    },
    {
      q: "Comment vérifier la qualité d\u0027un menuisier aluminium au Maroc ?",
      a: "Vérifiez que le menuisier utilise des profilés certifiés (marques comme Technal, Reynaers ou Sapa). Demandez des références de chantiers réalisés, contrôlez l\u0027épaisseur des profilés (minimum 1,4 mm) et exigez un devis détaillé avec garantie. Un artisan sérieux propose systématiquement une visite technique avant devis.",
    },
    { q: "Faut-il un architecte pour un projet de menuiserie aluminium ?", a: "Conform\u00e9ment \u00e0 la loi 16-89, le recours \u00e0 un architecte inscrit \u00e0 l\u2019Ordre est obligatoire pour toute construction au Maroc. M\u00eame pour les projets techniques, l\u2019architecte coordonne le permis de construire et assure la conformit\u00e9. Consultez les profils v\u00e9rifi\u00e9s sur Bati.ma." },
    { q: "Comment obtenir un devis pour menuiserie aluminium ?", a: "Demandez au minimum 3 devis d\u00e9taill\u00e9s aupr\u00e8s de professionnels diff\u00e9rents. Comparez les postes ligne par ligne, v\u00e9rifiez les r\u00e9f\u00e9rences et exigez un calendrier d\u2019ex\u00e9cution. Sur Bati.ma, vous pouvez contacter directement les architectes sp\u00e9cialis\u00e9s et demander vos devis gratuitement." },
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
        <h2>Pourquoi choisir l&apos;aluminium pour la menuiserie au Maroc ?</h2>
        <p>
          La menuiserie aluminium s&apos;est imposée comme le choix de référence dans la construction marocaine. Que ce soit pour une villa à Marrakech, un appartement à Casablanca ou un immeuble à Rabat, l&apos;aluminium offre un rapport qualité-prix-durabilité imbattable. Ce matériau résiste parfaitement aux conditions climatiques marocaines : chaleur intense en été, humidité en zones côtières, et vents de sable dans le Sud.
        </p>
        <p>
          Contrairement au bois qui nécessite un entretien régulier, ou au PVC qui peut se déformer sous la chaleur, l&apos;aluminium conserve ses propriétés pendant 30 à 50 ans sans entretien majeur. C&apos;est un investissement à long terme particulièrement pertinent dans le contexte marocain.
        </p>

        <h2>Types de menuiseries aluminium et applications</h2>
        <p>
          Le marché marocain propose une gamme complète de menuiseries aluminium adaptées à tous les besoins architecturaux. Voici les principales catégories et leurs caractéristiques :
        </p>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-300 px-3 py-2 text-left">Type</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Prix / m² (MAD)</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Usage recommandé</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Fenêtre à la française</td>
              <td className="border border-stone-300 px-3 py-2">1 200 - 2 000</td>
              <td className="border border-stone-300 px-3 py-2">Chambres, salons, cuisines</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Fenêtre coulissante</td>
              <td className="border border-stone-300 px-3 py-2">1 500 - 2 500</td>
              <td className="border border-stone-300 px-3 py-2">Séjours, grandes ouvertures</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Baie vitrée coulissante</td>
              <td className="border border-stone-300 px-3 py-2">2 000 - 3 500</td>
              <td className="border border-stone-300 px-3 py-2">Terrasses, jardins</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Porte d&apos;entrée aluminium</td>
              <td className="border border-stone-300 px-3 py-2">3 000 - 8 000 (unité)</td>
              <td className="border border-stone-300 px-3 py-2">Entrées principales</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Mur-rideau</td>
              <td className="border border-stone-300 px-3 py-2">2 500 - 4 500</td>
              <td className="border border-stone-300 px-3 py-2">Immeubles, bureaux</td>
            </tr>
          </tbody>
        </table>

        <h2>Comparatif aluminium vs PVC au Maroc</h2>
        <p>
          Le débat aluminium contre PVC est récurrent chez les maîtres d&apos;ouvrage marocains. Voici un comparatif objectif pour guider votre choix :
        </p>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-300 px-3 py-2 text-left">Critère</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Aluminium</th>
              <th className="border border-stone-300 px-3 py-2 text-left">PVC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Prix moyen / m²</td>
              <td className="border border-stone-300 px-3 py-2">1 200 - 3 500 MAD</td>
              <td className="border border-stone-300 px-3 py-2">800 - 2 000 MAD</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Résistance chaleur</td>
              <td className="border border-stone-300 px-3 py-2">Excellente</td>
              <td className="border border-stone-300 px-3 py-2">Moyenne (déformation &gt; 60°C)</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Durée de vie</td>
              <td className="border border-stone-300 px-3 py-2">30 - 50 ans</td>
              <td className="border border-stone-300 px-3 py-2">15 - 25 ans</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Isolation thermique</td>
              <td className="border border-stone-300 px-3 py-2">Bonne (avec RPT)</td>
              <td className="border border-stone-300 px-3 py-2">Très bonne</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Entretien</td>
              <td className="border border-stone-300 px-3 py-2">Quasi nul</td>
              <td className="border border-stone-300 px-3 py-2">Faible</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Finesse des profilés</td>
              <td className="border border-stone-300 px-3 py-2">Fine (+ de lumière)</td>
              <td className="border border-stone-300 px-3 py-2">Épaisse</td>
            </tr>
          </tbody>
        </table>

        <h2>Fabricants et marques de profilés disponibles au Maroc</h2>
        <p>
          Le marché marocain dispose de fabricants locaux et de distributeurs de marques internationales. Parmi les profilés les plus utilisés au Maroc, on trouve Technal (groupe Hydro), Reynaers, Sapa, et les marques locales comme Aluminium du Maroc (ALUM) et Metalicana. Les profilés turcs et chinois sont également présents sur le segment entrée de gamme.
        </p>
        <p>
          Pour un projet de qualité, privilégiez des profilés à rupture de pont thermique (RPT) qui améliorent considérablement l&apos;isolation. Le surcoût de 20 à 30 % est rapidement amorti par les économies d&apos;énergie, surtout si vous utilisez la climatisation en été.
        </p>

        <h2>Vitrage : simple, double ou triple ?</h2>
        <p>
          Au Maroc, le double vitrage est devenu la norme pour les constructions neuves. Il réduit les déperditions thermiques de 40 % par rapport au simple vitrage et améliore l&apos;isolation phonique. Le triple vitrage reste rare et réservé aux zones très froides comme l&apos;Atlas.
        </p>
        <p>
          Le vitrage contrôle solaire est particulièrement recommandé pour les façades exposées sud et ouest. Il filtre jusqu&apos;à 70 % de la chaleur solaire tout en conservant la luminosité. Comptez un surcoût de 150 à 300 MAD/m² par rapport au double vitrage standard.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Avant de choisir votre menuisier aluminium, demandez au moins trois devis comparatifs et vérifiez que le profilé proposé est certifié. Sur Bati.ma, vous pouvez consulter les profils de menuisiers aluminium vérifiés dans votre ville et comparer leurs réalisations pour faire le meilleur choix.
          </p>
        </div>

        <h2>Budget et planification pour votre projet</h2>
        <p>
          Pour une villa standard de 200 m² au Maroc, le budget menuiserie aluminium se situe entre 60 000 et 120 000 MAD selon le standing. Ce montant représente généralement 8 à 12 % du coût total de construction. Prévoyez un délai de fabrication de 2 à 4 semaines après la prise de mesures, et une pose de 3 à 5 jours pour une maison complète. Exigez toujours une garantie écrite d&apos;au moins 5 ans sur les profilés et 2 ans sur la quincaillerie.
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
