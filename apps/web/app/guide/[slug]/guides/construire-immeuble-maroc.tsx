export default function GuideConstruireImmeuble() {
  const faq = [
    { q: "Quel budget pour construire un immeuble R+3 au Maroc ?", a: "Le budget total pour un immeuble R+3 varie entre 1,5 et 3 millions MAD selon la ville, la surface au sol et le niveau de finition. Le gros œuvre représente environ 50 % du budget (3 000 à 4 500 MAD/m²), les finitions 30 % et les honoraires (architecte, BET, géomètre) environ 10 à 12 %. Prévoyez également 5 à 8 % pour les frais administratifs et imprévus." },
    { q: "Faut-il un architecte pour un immeuble de plus de R+2 ?", a: "Oui, la loi 016-89 impose le recours obligatoire à un architecte inscrit à l\u2019Ordre national pour tout projet de construction, y compris les maisons individuelles. Pour un immeuble R+3 ou plus, un bureau d\u2019études techniques (BET) agréé est également obligatoire pour le calcul de structure et les études parasismiques conformément au RPS 2000." },
    { q: "Quel est le rendement locatif d\u2019un immeuble au Maroc ?", a: "Le rendement locatif brut d\u2019un immeuble au Maroc se situe entre 5 % et 9 % selon la ville et l\u2019emplacement. Casablanca et Rabat offrent 5 à 7 %, Marrakech 6 à 8 % (location saisonnière), et les villes secondaires comme Meknès, Oujda ou Béni Mellal peuvent atteindre 7 à 9 %. Déduisez environ 1 à 2 % pour les charges de syndic, la taxe d\u2019habitation et l\u2019entretien." },
    { q: "Combien de temps faut-il pour construire un immeuble R+3 au Maroc ?", a: "La construction d&apos;un immeuble R+3 dure en moyenne 12 à 18 mois de chantier. Ajoutez 3 à 6 mois pour la conception, le permis de construire et le choix de l&apos;entreprise. Au total, prévoyez 18 à 24 mois du premier rendez-vous avec l&apos;architecte à la réception." },
    { q: "Est-ce que l&apos;étude de sol est obligatoire pour un immeuble au Maroc ?", a: "Oui, l&apos;étude géotechnique est obligatoire pour tout immeuble de plus de R+2. Elle permet de dimensionner les fondations selon la nature du terrain et coûte entre 10 000 et 25 000 MAD. Sans cette étude, aucun BET sérieux ne signera les plans de structure." },
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
        <h2>Construire un immeuble au Maroc : guide complet R+3 à R+6</h2>
        <p>
          <strong>Construire un immeuble au Maroc</strong>, qu&apos;il s&apos;agisse d&apos;un
          R+3 résidentiel ou d&apos;un R+6 à usage mixte, est un investissement
          majeur qui nécessite une planification rigoureuse et l&apos;intervention
          de professionnels qualifiés. Ce guide détaille les étapes, les coûts,
          la réglementation et les pièges à éviter pour mener à bien votre
          projet immobilier dans les principales villes du Maroc : Casablanca,
          Rabat, Marrakech, Tanger, Agadir, Fès et Meknès.
        </p>

        <h2>Que dit la loi sur la construction d&apos;immeubles au Maroc ?</h2>
        <p>
          La construction d&apos;un immeuble au Maroc est encadrée par plusieurs
          textes fondamentaux. La <strong>loi 12-90</strong> relative à l&apos;urbanisme
          définit les règles de constructibilité (COS, CUS, hauteur maximale,
          retraits). La <strong>loi 016-89</strong> impose le recours à un architecte.
          La <strong>loi 25-90</strong> sur les lotissements s&apos;applique si vous
          construisez dans un lotissement. Le règlement parasismique RPS 2000
          impose des normes de structure selon la zone sismique. Enfin, la
          réglementation thermique RTCM fixe les exigences d&apos;isolation.
        </p>
        <ul>
          <li><strong>R+2 maximum</strong> : architecte obligatoire, BET recommandé</li>
          <li><strong>R+3 et R+4</strong> : architecte + BET obligatoires, étude de sol exigée</li>
          <li><strong>R+5 et R+6</strong> : idem + étude d&apos;impact environnemental selon la zone, commission de sécurité</li>
        </ul>

        <h2>Combien coûte la construction d&apos;un immeuble par ville ?</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="text-left px-3 py-2 border border-stone-200">Ville</th>
              <th className="text-left px-3 py-2 border border-stone-200">Gros œuvre (MAD/m²)</th>
              <th className="text-left px-3 py-2 border border-stone-200">Clé en main (MAD/m²)</th>
              <th className="text-left px-3 py-2 border border-stone-200">Loyer moyen (MAD/m²/mois)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-3 py-2 border border-stone-200">Casablanca</td>
              <td className="px-3 py-2 border border-stone-200">3 500 - 4 500</td>
              <td className="px-3 py-2 border border-stone-200">5 500 - 8 000</td>
              <td className="px-3 py-2 border border-stone-200">50 - 80</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-stone-200">Rabat</td>
              <td className="px-3 py-2 border border-stone-200">3 200 - 4 200</td>
              <td className="px-3 py-2 border border-stone-200">5 000 - 7 500</td>
              <td className="px-3 py-2 border border-stone-200">45 - 75</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-stone-200">Marrakech</td>
              <td className="px-3 py-2 border border-stone-200">3 000 - 4 000</td>
              <td className="px-3 py-2 border border-stone-200">4 500 - 7 000</td>
              <td className="px-3 py-2 border border-stone-200">40 - 70</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-stone-200">Tanger</td>
              <td className="px-3 py-2 border border-stone-200">3 000 - 4 000</td>
              <td className="px-3 py-2 border border-stone-200">4 500 - 6 500</td>
              <td className="px-3 py-2 border border-stone-200">40 - 65</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-stone-200">Agadir</td>
              <td className="px-3 py-2 border border-stone-200">2 800 - 3 800</td>
              <td className="px-3 py-2 border border-stone-200">4 200 - 6 000</td>
              <td className="px-3 py-2 border border-stone-200">35 - 60</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-stone-200">Fès / Meknès</td>
              <td className="px-3 py-2 border border-stone-200">2 500 - 3 500</td>
              <td className="px-3 py-2 border border-stone-200">3 800 - 5 500</td>
              <td className="px-3 py-2 border border-stone-200">30 - 50</td>
            </tr>
          </tbody>
        </table>

        <h2>Quelles sont les étapes de construction d&apos;un immeuble ?</h2>
        <ul>
          <li><strong>Acquisition du terrain</strong> : vérification du titre foncier, de la constructibilité (note de renseignement) et du COS/CUS autorisé</li>
          <li><strong>Choix de l&apos;architecte</strong> : inscrit à l&apos;Ordre, expérimenté en immeubles collectifs</li>
          <li><strong>Études techniques</strong> : étude de sol (géotechnique), calcul de structure (BET), études fluides</li>
          <li><strong>Permis de construire</strong> : dossier déposé à la commune, délai moyen 2 à 3 mois</li>
          <li><strong>Choix de l&apos;entreprise</strong> : consultation de 3 à 5 entreprises minimum, contrat détaillé</li>
          <li><strong>Chantier</strong> : 12 à 18 mois pour un R+3, 18 à 24 mois pour un R+6</li>
          <li><strong>Réception et conformité</strong> : certificat de conformité (loi 12-90), raccordements</li>
        </ul>

        <h2>Comment gérer la copropriété et le syndic ?</h2>
        <p>
          La loi 18-00 relative au statut de la copropriété des immeubles
          bâtis impose la création d&apos;un syndic de copropriété pour tout
          immeuble de plus de 4 appartements. Dès la conception, l&apos;architecte
          doit prévoir les parties communes (hall, escaliers, ascenseur à
          partir de R+4), les locaux techniques (local poubelles, compteurs)
          et les espaces de stationnement conformément au plan d&apos;aménagement.
          Le règlement de copropriété est rédigé avant la mise en vente des
          lots et définit les charges de chaque copropriétaire.
        </p>

        <h2>Comment calculer le retour sur investissement ?</h2>
        <p>
          Pour estimer la rentabilité de votre immeuble, calculez le
          rendement locatif net : (loyers annuels - charges annuelles) /
          coût total du projet. Un immeuble R+3 bien situé dans une ville
          secondaire (Meknès, Oujda, Béni Mellal) peut offrir un rendement
          net de 6 à 8 %. Dans les grandes villes (Casablanca, Rabat), le
          rendement est plus faible (4 à 6 %) mais la plus-value foncière
          est généralement plus importante à long terme.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Vous avez un projet d&apos;immeuble au Maroc ? Trouvez un architecte
            spécialisé en immeubles collectifs sur Bati.ma. Comparez les
            profils par ville, consultez les réalisations d&apos;immeubles et
            demandez vos devis gratuits pour votre projet R+3 à R+6.
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
