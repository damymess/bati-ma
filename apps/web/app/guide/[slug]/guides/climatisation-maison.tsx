export default function GuideClimatisation() {
  const faq = [
    {
      q: "Quel type de climatisation choisir pour une maison au Maroc ?",
      a: "Pour un appartement ou une petite villa, le split mural est le plus économique (5 000-15 000 MAD par unité). Pour une villa de standing, le système gainable offre une climatisation invisible et homogène (40 000-120 000 MAD). Pour un immeuble ou une grande villa, le VRV/VRF est la solution la plus performante (150 000-500 000 MAD).",
    },
    {
      q: "Combien consomme une climatisation au Maroc ?",
      a: "Un split de 9 000 BTU (pièce de 20 m²) consomme environ 800 à 1 200 kWh par an au Maroc, soit 700 à 1 100 MAD sur la facture ONEE. Un système Inverter réduit la consommation de 30 à 50 % par rapport à un modèle classique. Privilégiez les appareils avec un COP supérieur à 3,5 pour optimiser vos dépenses.",
    },
    {
      q: "Quelle marque de climatisation est la plus fiable au Maroc ?",
      a: "Les marques les plus répandues et fiables au Maroc sont Samsung, LG et Daikin. Samsung domine le segment résidentiel avec un bon rapport qualité-prix. Daikin est la référence pour le haut de gamme et les systèmes VRV. Carrier et Midea sont populaires pour les projets tertiaires. Vérifiez la disponibilité du service après-vente dans votre ville avant d\u0027acheter.",
    },
    {
      q: "Faut-il prévoir les gaines de climatisation dès le gros œuvre ?",
      a: "Oui, c\u0027est fortement recommandé. Intégrer les passages de gaines et les évacuations de condensats dès la phase de construction évite des travaux coûteux et inesthétiques par la suite. Pour un système gainable, c\u0027est obligatoire car les gaines passent dans le faux plafond prévu à cet effet.",
    },
    {
      q: "Comment réduire la consommation de sa climatisation au Maroc ?",
      a: "Investissez dans la technologie Inverter qui réduit la consommation de 30 à 50 %. Réglez le thermostat à 24-25°C, nettoyez les filtres toutes les deux semaines en été, et améliorez l\u0027isolation du logement (double vitrage, stores extérieurs). Chaque degré en moins augmente la consommation de 7 %.",
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
        <h2>Pourquoi la climatisation est-elle devenue indispensable au Maroc ?</h2>
        <p>
          Avec des températures estivales dépassant régulièrement les 40°C à Marrakech, Fès ou Oujda, la climatisation n&apos;est plus un luxe mais une nécessité au Maroc. Même à Casablanca et Rabat, les pics de chaleur rendent la climatisation de plus en plus courante. Le marché marocain de la climatisation a connu une croissance de 15 % par an ces dernières années, avec une gamme de solutions adaptées à tous les budgets.
        </p>

        <h2>Quels types de climatisation existent au Maroc ?</h2>
        <p>
          Le choix du système dépend de la surface à climatiser, du budget et du niveau de confort souhaité. Voici les principales technologies disponibles au Maroc :
        </p>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-300 px-3 py-2 text-left">Système</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Prix (MAD)</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Surface adaptée</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Avantage principal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Split mural</td>
              <td className="border border-stone-300 px-3 py-2">5 000 - 15 000</td>
              <td className="border border-stone-300 px-3 py-2">15 - 35 m²</td>
              <td className="border border-stone-300 px-3 py-2">Économique, facile à installer</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Multi-split</td>
              <td className="border border-stone-300 px-3 py-2">20 000 - 60 000</td>
              <td className="border border-stone-300 px-3 py-2">Maison 2-4 pièces</td>
              <td className="border border-stone-300 px-3 py-2">Un seul groupe extérieur</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Gainable (ducté)</td>
              <td className="border border-stone-300 px-3 py-2">40 000 - 120 000</td>
              <td className="border border-stone-300 px-3 py-2">Villa complète</td>
              <td className="border border-stone-300 px-3 py-2">Invisible, distribution uniforme</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Cassette (plafond)</td>
              <td className="border border-stone-300 px-3 py-2">15 000 - 35 000</td>
              <td className="border border-stone-300 px-3 py-2">Bureaux, commerces</td>
              <td className="border border-stone-300 px-3 py-2">Diffusion 360°</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">VRV / VRF</td>
              <td className="border border-stone-300 px-3 py-2">150 000 - 500 000</td>
              <td className="border border-stone-300 px-3 py-2">Immeubles, grands projets</td>
              <td className="border border-stone-300 px-3 py-2">Rendement optimal, modulable</td>
            </tr>
          </tbody>
        </table>

        <h2>Comment bien dimensionner sa climatisation ?</h2>
        <p>
          Le dimensionnement correct est crucial pour éviter la surconsommation ou le sous-refroidissement. La règle de base au Maroc est de compter 100 à 150 watts frigorifiques par m², selon l&apos;exposition et l&apos;isolation. Une pièce de 20 m² nécessite donc environ 9 000 BTU (2,6 kW). Pour les façades exposées plein sud ou ouest, majorez de 20 %. Une villa mal dimensionnée surconsomme et s&apos;use prématurément.
        </p>

        <h2>Quelles marques de climatisation sont disponibles au Maroc ?</h2>
        <p>
          Le marché marocain est dominé par les grandes marques internationales, chacune positionnée sur un segment :
        </p>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-300 px-3 py-2 text-left">Marque</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Positionnement</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Points forts</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Samsung</td>
              <td className="border border-stone-300 px-3 py-2">Milieu / haut de gamme</td>
              <td className="border border-stone-300 px-3 py-2">WindFree, WiFi, SAV étendu</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">LG</td>
              <td className="border border-stone-300 px-3 py-2">Milieu de gamme</td>
              <td className="border border-stone-300 px-3 py-2">Dual Inverter, bon rapport qualité-prix</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Daikin</td>
              <td className="border border-stone-300 px-3 py-2">Haut de gamme / professionnel</td>
              <td className="border border-stone-300 px-3 py-2">Fiabilité, VRV, silence</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Carrier</td>
              <td className="border border-stone-300 px-3 py-2">Professionnel / tertiaire</td>
              <td className="border border-stone-300 px-3 py-2">Systèmes centralisés</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2">Midea / TCL</td>
              <td className="border border-stone-300 px-3 py-2">Entrée de gamme</td>
              <td className="border border-stone-300 px-3 py-2">Prix agressif, basique</td>
            </tr>
          </tbody>
        </table>

        <h2>Combien consomme une climatisation et comment économiser ?</h2>
        <p>
          La consommation d&apos;un climatiseur représente 40 à 60 % de la facture électrique estivale au Maroc. Pour réduire les coûts, investissez dans la technologie Inverter (30 à 50 % d&apos;économies), entretenez le filtre toutes les 2 semaines en été, réglez le thermostat à 24-25°C (chaque degré en moins augmente la consommation de 7 %), et améliorez l&apos;isolation de votre logement (double vitrage, stores extérieurs, brise-soleil).
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Pour une installation neuve, prévoyez les gaines et passages de câbles dès le gros œuvre, même si vous n&apos;installez pas la climatisation immédiatement. Cela vous évitera des travaux coûteux plus tard. Consultez les frigoristes recommandés sur Bati.ma pour un dimensionnement professionnel.
          </p>
        </div>

        <h2>Comment entretenir sa climatisation au Maroc ?</h2>
        <p>
          Un entretien régulier prolonge la durée de vie de votre climatiseur (10 à 15 ans) et maintient ses performances. Nettoyez les filtres toutes les deux semaines en période d&apos;utilisation. Faites réaliser un entretien annuel par un professionnel (300 à 500 MAD) incluant le nettoyage des unités intérieure et extérieure, la vérification du fluide frigorigène et le contrôle des performances. Un climatiseur mal entretenu consomme jusqu&apos;à 30 % de plus.
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
