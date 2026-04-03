export default function GuideArchitecteMeknes() {
  const faq = [
    { q: "Un architecte à Meknès peut-il restaurer un bâtiment en pisé ?", a: "Oui, mais il faut un spécialiste. Le pisé (terre crue compactée) exige des techniques de restauration spécifiques : injection de coulis de chaux, reprise des fondations en pierres sèches et application d\u2019enduits terre-paille compatibles. Les murs en pisé ismaélien atteignent 60 à 80 cm d\u2019épaisseur et ne supportent pas le ciment Portland, qui les asphyxie et provoque des fissurations. Comptez 3 500 à 6 000 MAD/m² pour une restauration pisé dans les règles, contre 2 500 MAD/m² pour une rénovation classique en parpaing." },
    { q: "Quelle est la particularité des riads de Meknès par rapport à ceux de Marrakech ?", a: "Les riads meknassis sont d\u2019héritage ismaélien (XVII\u1D49 siècle) tandis que ceux de Marrakech relèvent majoritairement de l\u2019architecture saadienne. Concrètement, à Meknès les murs porteurs sont en pisé massif (60-80 cm), les patios sont plus étroits et les plafonds plus bas. Les éléments décoratifs privilégient la sobriété militaire : arcs en plein cintre plutôt qu\u2019outrepassés, zellige géométrique plutôt que floral. La restauration coûte souvent 20 à 30 % de moins qu\u2019à Marrakech car le foncier et la main-d\u2019œuvre sont plus accessibles." },
    { q: "Meknès est-elle intéressante pour l\u2019investissement locatif ?", a: "Meknès offre un ratio prix/rendement parmi les meilleurs du Maroc. Avec l\u2019Université Moulay Ismaïl (plus de 60 000 étudiants), la demande locative étudiante est forte. Un appartement T2 à Hamria s\u2019acquiert entre 350 000 et 500 000 MAD et se loue 2 500 à 3 500 MAD/mois, soit un rendement brut de 7 à 9 %. Le tourisme culturel monte en puissance grâce aux musées rénovés et au Festival international de Volubilis. Les maisons d\u2019hôtes en médina se négocient entre 600 000 et 1 200 000 MAD, nettement sous les prix de Fès ou Marrakech." },
    { q: "Combien coûte un architecte à Meknès ?", a: "Les honoraires varient entre 3 et 6 % du montant des travaux pour une mission complète, soit 15 à 25 % moins cher qu\u2019à Casablanca ou Rabat. Pour un simple dépôt de permis de construire, comptez 15 000 à 30 000 MAD. Les tarifs reflètent le coût de la vie plus accessible dans la région Fès-Meknès." },
    { q: "Pourquoi ne faut-il pas utiliser de ciment sur un mur en pisé à Meknès ?", a: "Le ciment Portland emprisonne l\u2019humidité dans le pisé, provoque des remontées capillaires et détruit la structure de l\u2019intérieur. Il faut utiliser des enduits à base de chaux aérienne ou terre-paille, compatibles avec la respiration naturelle du matériau. Un architecte spécialisé en patrimoine ismaélien connaît ces contraintes." },
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
        <h2>Comment Meknès se réinvente-t-elle sur le plan architectural ?</h2>
        <p>
          Quand Moulay Ismaïl choisit Meknès comme capitale en 1672, il ne
          construisait pas simplement un palais : il bâtissait une cité
          destinée à rivaliser avec Versailles. Douze kilomètres de remparts
          percés de vingt bastions, des greniers royaux (Heri es-Souani)
          capables de nourrir une armée de 150 000 hommes, des écuries
          conçues pour 12 000 chevaux, un bassin de l&apos;Agdal de quatre
          hectares alimenté par un réseau hydraulique souterrain de 25 km.
          Trois siècles plus tard, cet héritage monumental pose un défi
          architectural sans équivalent au Maroc : comment habiter, rénover
          et prolonger une ville pensée comme une machine de guerre impériale ?
          C&apos;est précisément cette tension entre grandeur historique et vie
          contemporaine qui fait de Meknès un terrain passionnant pour tout
          <strong> architecte à Meknès</strong> digne de ce nom.
        </p>

        <h2>Quels sont les pièges à éviter en rénovant un riad ismaélien ?</h2>
        <p>
          Restaurer un riad à Meknès n&apos;a rien à voir avec la rénovation
          d&apos;un riad marrakchi. L&apos;architecture ismaélienne repose sur
          le <strong>pisé</strong> (terre crue compactée entre des coffrages en
          bois), avec des murs porteurs de 60 à 80 cm d&apos;épaisseur. Ces
          murs respirent, régulent naturellement l&apos;humidité et offrent une
          inertie thermique remarquable, mais ils imposent des règles strictes.
          Première erreur fatale : appliquer un enduit ciment sur un mur en
          pisé. Le ciment Portland emprisonne l&apos;humidité, provoque des
          remontées capillaires et détruit progressivement la structure de
          l&apos;intérieur. Il faut utiliser des enduits à base de chaux
          aérienne ou de terre-paille. Deuxième piège : percer un mur en pisé
          pour y passer des gaines électriques ou de plomberie sans précaution.
          Le pisé ne se saigne pas comme le parpaing ; chaque saignée doit
          être limitée en profondeur et rebouchée avec un mortier compatible.
        </p>
        <p>
          Le problème majeur reste la rareté des artisans spécialisés. Les
          <em> maalems</em> maîtrisant la technique du pisé se comptent sur
          les doigts d&apos;une main dans la région. Un <strong>architecte à
          Meknès</strong> expérimenté en patrimoine saura vous orienter vers
          ces compétences rares et adapter le cahier des charges au matériau.
          Budget indicatif pour une restauration pisé complète : 3 500 à
          6 000 MAD/m², contre 2 500 à 4 000 MAD/m² pour une rénovation
          classique en maçonnerie moderne.
        </p>

        <h2>Pourquoi Hamria est-il le quartier le plus dynamique de Meknès ?</h2>
        <p>
          Pendant que la médina attire les passionnés de patrimoine, la ville
          nouvelle concentre l&apos;essentiel de la dynamique immobilière. Le
          corridor <strong>Hamria-Marjane</strong> s&apos;impose comme le
          nouveau centre névralgique : commerces, cliniques privées, écoles
          internationales et résidences de standing s&apos;y développent à un
          rythme soutenu. Le campus de l&apos;Université Moulay Ismaïl, avec
          plus de 60 000 étudiants, alimente une demande locative constante.
          Meknès reste l&apos;une des grandes villes les plus abordables du
          Maroc pour construire ou acquérir.
        </p>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="text-left px-3 py-2 border border-stone-200">Quartier</th>
              <th className="text-left px-3 py-2 border border-stone-200">Vocation</th>
              <th className="text-left px-3 py-2 border border-stone-200">Prix terrain (MAD/m²)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-3 py-2 border border-stone-200">Hamria centre</td>
              <td className="px-3 py-2 border border-stone-200">Commerces, résidentiel standing, cliniques</td>
              <td className="px-3 py-2 border border-stone-200">3 500 - 6 000</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-stone-200">Agdal / Marjane</td>
              <td className="px-3 py-2 border border-stone-200">Grandes surfaces, immeubles R+4, école</td>
              <td className="px-3 py-2 border border-stone-200">2 500 - 4 500</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-stone-200">Zitoune / Sidi Bouzekri</td>
              <td className="px-3 py-2 border border-stone-200">Résidentiel familial, calme</td>
              <td className="px-3 py-2 border border-stone-200">2 000 - 3 500</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-stone-200">Ouislane / Toulal</td>
              <td className="px-3 py-2 border border-stone-200">Lotissements neufs, primo-accédants</td>
              <td className="px-3 py-2 border border-stone-200">1 000 - 2 000</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-stone-200">Route El Hajeb / Ifrane</td>
              <td className="px-3 py-2 border border-stone-200">Villas, fermes, agritourisme</td>
              <td className="px-3 py-2 border border-stone-200">500 - 1 500</td>
            </tr>
          </tbody>
        </table>

        <h2>Comment l&apos;agriculture finance-t-elle l&apos;architecture à Meknès ?</h2>
        <p>
          Meknès n&apos;est pas qu&apos;une ville : c&apos;est la porte
          d&apos;entrée de la <strong>plaine du Saïss</strong>, grenier à blé
          du Maroc. Oliveraies centenaires, vignobles des Celliers de Meknès,
          exploitations céréalières et arboricoles composent un tissu agricole
          puissant. Cette richesse agraire crée une clientèle architecturale
          atypique : des entrepreneurs agricoles qui investissent dans des
          <strong> unités de transformation</strong> (huileries, stations de
          conditionnement, caves vinicoles), des <strong>gîtes
          d&apos;agritourisme</strong> sur leurs domaines, ou des
          <strong> résidences de prestige</strong> en périphérie avec vue sur
          les champs. Un architecte à Meknès qui comprend les réglementations
          agricoles (loi 25-90, autorisations de construction en zone rurale,
          dérogations pour bâtiments d&apos;exploitation) dispose d&apos;un
          marché de niche considérable. Quelques chiffres :
        </p>
        <ul>
          <li><strong>Hangar agricole couvert</strong> : 1 200 à 1 800 MAD/m²</li>
          <li><strong>Station de conditionnement</strong> : 2 500 à 4 000 MAD/m²</li>
          <li><strong>Gîte agritouristique (6 chambres)</strong> : 800 000 à 1 500 000 MAD clé en main</li>
          <li><strong>Cave vinicole artisanale</strong> : 1 500 000 à 3 000 000 MAD</li>
          <li><strong>Villa de domaine avec piscine</strong> : 5 000 à 8 000 MAD/m²</li>
        </ul>

        <h2>Pourquoi le pisé contemporain revient-il en force à Meknès ?</h2>
        <p>
          Paradoxalement, le matériau qui pose tant de défis en rénovation
          connaît un renouveau en construction neuve. Une poignée
          d&apos;architectes meknassis militent pour le retour du
          <strong> pisé contemporain</strong> et de la <strong>terre
          crue</strong> stabilisée. Les arguments sont solides : un mur en
          pisé de 50 cm offre un déphasage thermique de 10 à 12 heures
          (contre 4 heures pour un mur en parpaing de 20 cm avec isolation),
          ce qui élimine pratiquement le besoin de climatisation dans le
          climat continental de Meknès (étés à 40 °C, hivers à 2 °C). Le
          bilan carbone est divisé par cinq par rapport au béton armé. Et le
          coût de construction chute de 30 à 40 % : la terre est extraite sur
          place, le coffrage est réutilisable et la main-d&apos;oeuvre locale
          maîtrise historiquement la technique.
        </p>
        <p>
          Le pisé contemporain est compatible avec le <strong>RTCM</strong> (Règlement
          Thermique de Construction au Maroc) et peut intégrer des renforts
          parasismiques en bois ou en acier pour répondre au RPS 2000 (Meknès
          est en zone sismique I, risque faible). Plusieurs projets récents
          dans la région combinent ossature béton et remplissage pisé, offrant
          le meilleur des deux mondes : solidité structurelle et performance
          thermique naturelle.
        </p>

        <h2>Combien coûte une construction neuve à Meknès ?</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="text-left px-3 py-2 border border-stone-200">Type de projet</th>
              <th className="text-left px-3 py-2 border border-stone-200">Fourchette (MAD/m²)</th>
              <th className="text-left px-3 py-2 border border-stone-200">Particularité Meknès</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-3 py-2 border border-stone-200">Maison en pisé contemporain</td>
              <td className="px-3 py-2 border border-stone-200">2 200 - 3 500</td>
              <td className="px-3 py-2 border border-stone-200">30-40 % moins cher que le béton</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-stone-200">Villa moyen standing</td>
              <td className="px-3 py-2 border border-stone-200">3 800 - 5 200</td>
              <td className="px-3 py-2 border border-stone-200">Matériaux locaux abondants</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-stone-200">Villa haut standing</td>
              <td className="px-3 py-2 border border-stone-200">5 500 - 8 000</td>
              <td className="px-3 py-2 border border-stone-200">Piscine, jardin, double garage</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-stone-200">Immeuble R+3 locatif</td>
              <td className="px-3 py-2 border border-stone-200">3 200 - 4 500</td>
              <td className="px-3 py-2 border border-stone-200">Forte demande étudiante</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-stone-200">Restauration riad médina</td>
              <td className="px-3 py-2 border border-stone-200">3 500 - 6 000</td>
              <td className="px-3 py-2 border border-stone-200">Pisé obligatoire, artisans rares</td>
            </tr>
          </tbody>
        </table>
        <p>
          Les honoraires d&apos;un architecte à Meknès varient entre 3 % et
          6 % du montant des travaux pour une mission complète (conception,
          dépôt de permis, suivi de chantier). Pour un simple dépôt de
          permis de construire, comptez 15 000 à 30 000 MAD. Les tarifs
          restent 15 à 25 % inférieurs à ceux pratiqués à Casablanca ou Rabat.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Meknès manque de visibilité face à Fès et Marrakech, mais c&apos;est
            justement ce qui en fait une opportunité. Sur Bati.ma, comparez les
            architectes meknassis spécialisés en restauration pisé, en projets
            agricoles ou en construction neuve. Devis gratuits, profils
            vérifiés, avis clients.
          </p>
        </div>

        <h2>Comment obtenir un permis de construire à Meknès ?</h2>
        <p>
          Tout projet à Meknès nécessite un permis de construire délivré par
          la commune après avis de l&apos;<strong>Agence urbaine de
          Meknès</strong>. Votre architecte, inscrit à l&apos;Ordre national
          (loi 016-89), constitue le dossier : plans architecturaux, plan de
          situation, certificat de propriété et note de calcul béton armé. En
          médina, un avis supplémentaire du ministère de la Culture est requis
          pour toute intervention sur un bâtiment classé ou situé dans le
          périmètre de protection des monuments historiques. Le plan
          d&apos;aménagement de Meknès distingue clairement les zones
          résidentielles, commerciales, agricoles et patrimoniales : un
          architecte local connaît ces zonages et évite les refus. Délai moyen
          d&apos;obtention du permis : 45 à 75 jours.
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
