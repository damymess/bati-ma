export default function GuideArchitecteFes() {
  const faq = [
    { q: "Combien coûte un architecte à Fès ?", a: "Les honoraires d\u2019un architecte à Fès se situent entre 3 % et 8 % du montant des travaux pour une mission complète. Pour une mission limitée à la conception et au permis de construire, comptez entre 15 000 et 35 000 MAD. Les tarifs sont légèrement inférieurs à ceux de Casablanca ou Rabat." },
    { q: "Peut-on rénover un riad dans la médina de Fès sans architecte ?", a: "Non, toute rénovation structurelle dans la médina de Fès nécessite un architecte inscrit à l\u2019Ordre. De plus, la médina étant classée au patrimoine mondial de l\u2019UNESCO, les travaux sont soumis à l\u2019approbation de l\u2019Agence pour la Dédensification et la Réhabilitation de la Médina de Fès (ADER-Fès) et doivent respecter des contraintes patrimoniales strictes." },
    { q: "Quelles sont les spécialités des architectes de Fès ?", a: "Les architectes de Fès se distinguent par leur expertise en rénovation patrimoniale (riads, fondouks, médersas), en architecture mérinide et andalouse, et en intégration de l\u2019artisanat fassi (zellige de Fès, plâtre sculpté, bois de cèdre peint). Beaucoup sont également spécialisés dans les projets touristiques (maisons d\u2019hôtes, boutique-hôtels)." },
    { q: "Quel est le coût de rénovation d\u2019un riad à Fès ?", a: "La rénovation d\u2019un riad à Fès coûte entre 5 000 et 10 000 MAD/m² selon l\u2019état du bâtiment et le niveau de finition. Les honoraires d\u2019architecte pour un riad en médina sont de 5 à 10 % du montant des travaux. Prévoyez 6 à 18 mois de travaux en raison des contraintes patrimoniales et des autorisations ADER-Fès." },
    { q: "Comment trouver un architecte spécialisé en patrimoine à Fès ?", a: "Sur Bati.ma, filtrez les architectes de Fès par spécialité « rénovation » ou « patrimoine ». Vérifiez que le professionnel a déjà travaillé avec l\u2019ADER-Fès et qu\u2019il maîtrise les techniques traditionnelles (zellige, plâtre sculpté, bois de cèdre). Demandez à voir ses réalisations en médina avant de vous engager." },
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
        <h2>Pourquoi Fès possède-t-elle un patrimoine architectural unique ?</h2>
        <p>
          Fès abrite la plus ancienne médina du monde encore habitée, classée
          au patrimoine mondial de l&apos;UNESCO depuis 1981. L&apos;architecture
          mérinide et andalouse y est omniprésente : riads à patios, médersas
          ornées de zellige, fondouks historiques. Construire ou rénover à Fès
          exige un architecte qui maîtrise ce patrimoine exceptionnel autant
          que les exigences contemporaines.
        </p>

        <h2>Comment rénover dans la médina de Fès ?</h2>
        <p>
          La rénovation de riads et de bâtiments historiques dans la médina de
          Fès est une spécialité locale. L&apos;architecte doit travailler en
          coordination avec l&apos;ADER-Fès (Agence pour la Dédensification et la
          Réhabilitation de la Médina), respecter les contraintes patrimoniales
          (matériaux traditionnels, hauteurs, façades) et intégrer les normes
          modernes de confort et de sécurité.
        </p>
        <ul>
          <li>Conservation des éléments patrimoniaux (arcs, mosaïques, boiseries)</li>
          <li>Renforcement structurel des murs en pisé ou en pierre</li>
          <li>Intégration discrète des réseaux modernes (électricité, plomberie)</li>
          <li>Respect des gabarits et des matériaux imposés par l&apos;ADER-Fès</li>
        </ul>

        <h2>Quelles sont les zones modernes de Fès pour construire ?</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="text-left px-3 py-2 border border-stone-200">Zone</th>
              <th className="text-left px-3 py-2 border border-stone-200">Caractéristiques</th>
              <th className="text-left px-3 py-2 border border-stone-200">Type de projets</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-3 py-2 border border-stone-200">Fès-Shore / Ain Chkef</td><td className="px-3 py-2 border border-stone-200">Offshoring, technopôle</td><td className="px-3 py-2 border border-stone-200">Bureaux, résidences modernes</td></tr>
            <tr><td className="px-3 py-2 border border-stone-200">Narjiss / Route Sefrou</td><td className="px-3 py-2 border border-stone-200">Résidentiel haut standing</td><td className="px-3 py-2 border border-stone-200">Villas, lotissements</td></tr>
            <tr><td className="px-3 py-2 border border-stone-200">Route d&apos;Imouzzer</td><td className="px-3 py-2 border border-stone-200">Extension urbaine</td><td className="px-3 py-2 border border-stone-200">Villas, immeubles R+3</td></tr>
            <tr><td className="px-3 py-2 border border-stone-200">Ville Nouvelle</td><td className="px-3 py-2 border border-stone-200">Centre administratif</td><td className="px-3 py-2 border border-stone-200">Commerces, rénovation</td></tr>
            <tr><td className="px-3 py-2 border border-stone-200">Médina (Fès el-Bali)</td><td className="px-3 py-2 border border-stone-200">Patrimoine UNESCO</td><td className="px-3 py-2 border border-stone-200">Rénovation riads, maisons d&apos;hôtes</td></tr>
          </tbody>
        </table>

        <h2>Qu&apos;est-ce que l&apos;architecture mérinide ?</h2>
        <p>
          Fès est le berceau de l&apos;art mérinide, caractérisé par la finesse du
          zellige (mosaïque de céramique), le plâtre sculpté (gebs), le bois
          de cèdre peint et les fontaines en marbre. Les architectes fassis
          perpétuent ce savoir-faire en l&apos;intégrant dans les constructions
          contemporaines, créant un style unique qui valorise le patrimoine
          tout en répondant aux besoins actuels.
        </p>

        <h2>Combien coûte un architecte à Fès ?</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="text-left px-3 py-2 border border-stone-200">Mission</th>
              <th className="text-left px-3 py-2 border border-stone-200">Tarif indicatif</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-3 py-2 border border-stone-200">Conception + permis de construire</td><td className="px-3 py-2 border border-stone-200">15 000 – 35 000 MAD</td></tr>
            <tr><td className="px-3 py-2 border border-stone-200">Mission complète (conception + suivi)</td><td className="px-3 py-2 border border-stone-200">3 % – 8 % du montant travaux</td></tr>
            <tr><td className="px-3 py-2 border border-stone-200">Rénovation riad (médina)</td><td className="px-3 py-2 border border-stone-200">5 % – 10 % du montant travaux</td></tr>
            <tr><td className="px-3 py-2 border border-stone-200">Consultation / expertise patrimoine</td><td className="px-3 py-2 border border-stone-200">3 000 – 8 000 MAD</td></tr>
          </tbody>
        </table>

        <div className="bg-[#f4ece7] border border-stone-200 rounded-lg p-4 my-6">
          <p className="text-sm text-stone-700 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-600">
            Si vous souhaitez rénover un riad dans la médina de Fès, choisissez
            un architecte qui a déjà travaillé avec l&apos;ADER-Fès. Les procédures
            administratives sont spécifiques et un architecte expérimenté vous
            fera gagner plusieurs mois sur les autorisations. Demandez à voir
            ses réalisations en médina avant de vous engager.
          </p>
        </div>

        <h2>Comment Fès-Shore transforme-t-il la ville ?</h2>
        <p>
          Le technopôle Fès-Shore, situé à Ain Chkef, symbolise la modernisation
          de la ville. Ce pôle d&apos;offshoring attire des entreprises internationales
          et génère une demande croissante en logements modernes, bureaux et
          commerces. Les architectes de Fès accompagnent cette transformation
          en concevant des projets qui allient fonctionnalité contemporaine et
          références au patrimoine local.
        </p>

        <h2>Trouver un architecte à Fès sur Bati.ma</h2>
        <p>
          Bati.ma référence des architectes vérifiés à Fès, spécialisés en
          construction neuve comme en rénovation patrimoniale. Consultez les
          profils, comparez les réalisations en médina et en ville nouvelle,
          et demandez des devis gratuits adaptés à votre projet.
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
