export default function GuideInvestissementLocatif() {
  const faq = [
    {
      q: "Quel rendement locatif peut-on esp\u00e9rer au Maroc en 2026 ?",
      a: "Le rendement locatif brut varie de 4 \u00e0 10 % selon la ville et le type de bien. Casablanca offre 4 \u00e0 6 % en r\u00e9sidentiel classique, Marrakech 6 \u00e0 10 % en location courte dur\u00e9e (Airbnb/riad), Tanger 5 \u00e0 7 % port\u00e9 par la zone franche, et Agadir 5 \u00e0 8 % en saisonnier. Le rendement net apr\u00e8s imp\u00f4ts et charges tombe \u00e0 3 \u00e0 7 %.",
    },
    {
      q: "Comment est impos\u00e9 un revenu locatif au Maroc ?",
      a: "Les revenus locatifs sont soumis \u00e0 l&apos;IR (Imp\u00f4t sur le Revenu) apr\u00e8s un abattement forfaitaire de 40 %. Le taux marginal va de 10 % \u00e0 38 % selon votre tranche. Pour un loyer annuel de 120 000 MAD, la base imposable est de 72 000 MAD (apr\u00e8s abattement), soit environ 8 000 \u00e0 15 000 MAD d&apos;imp\u00f4t selon votre situation.",
    },
    {
      q: "Faut-il cr\u00e9er une SCI pour investir dans l&apos;immobilier locatif au Maroc ?",
      a: "La SCI (Soci\u00e9t\u00e9 Civile Immobili\u00e8re) n&apos;est int\u00e9ressante qu&apos;\u00e0 partir de 3-4 biens ou pour faciliter la transmission. Elle est soumise \u00e0 l&apos;IS (10 \u00e0 31 %) au lieu de l&apos;IR. Les frais de cr\u00e9ation sont d&apos;environ 5 000 \u00e0 10 000 MAD. Pour un premier investissement, l&apos;achat en nom propre reste plus simple et souvent plus avantageux fiscalement.",
    },
    { q: "Faut-il un architecte pour un projet de investissement locatif ?", a: "Conform\u00e9ment \u00e0 la loi 16-89, le recours \u00e0 un architecte inscrit \u00e0 l\u2019Ordre est obligatoire pour toute construction au Maroc. M\u00eame pour les projets techniques, l\u2019architecte coordonne le permis de construire et assure la conformit\u00e9. Consultez les profils v\u00e9rifi\u00e9s sur Bati.ma." },
    { q: "Comment obtenir un devis pour investissement locatif ?", a: "Demandez au minimum 3 devis d\u00e9taill\u00e9s aupr\u00e8s de professionnels diff\u00e9rents. Comparez les postes ligne par ligne, v\u00e9rifiez les r\u00e9f\u00e9rences et exigez un calendrier d\u2019ex\u00e9cution. Sur Bati.ma, vous pouvez contacter directement les architectes sp\u00e9cialis\u00e9s et demander vos devis gratuitement." },
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
        <h2>Investissement locatif au Maroc en 2026 : guide strat\u00e9gique</h2>
        <p>
          L&apos;immobilier locatif au Maroc reste l&apos;un des placements pr\u00e9f\u00e9r\u00e9s des investisseurs, avec des rendements sup\u00e9rieurs \u00e0 ceux de l&apos;\u00e9pargne bancaire (2-3 %) et de l&apos;assurance-vie. Le march\u00e9 est port\u00e9 par une demande locative structurelle : d\u00e9ficit de logements estim\u00e9 \u00e0 400 000 unit\u00e9s, urbanisation croissante, tourisme en hausse et pr\u00e9paratifs du Mondial 2030 qui dynamisent les villes h\u00f4tes.
        </p>

        <h2>Rendements locatifs par ville en 2026</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Ville</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Rendement brut</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Type porteur</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Prix moyen/m\u00b2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">Casablanca</td>
              <td className="border border-stone-200 px-3 py-2">4 - 6 %</td>
              <td className="border border-stone-200 px-3 py-2">Appartement T2-T3</td>
              <td className="border border-stone-200 px-3 py-2">12 000 - 20 000 MAD</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">Marrakech</td>
              <td className="border border-stone-200 px-3 py-2">6 - 10 %</td>
              <td className="border border-stone-200 px-3 py-2">Riad / Airbnb</td>
              <td className="border border-stone-200 px-3 py-2">8 000 - 15 000 MAD</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">Tanger</td>
              <td className="border border-stone-200 px-3 py-2">5 - 7 %</td>
              <td className="border border-stone-200 px-3 py-2">Studio / T2 zone franche</td>
              <td className="border border-stone-200 px-3 py-2">9 000 - 14 000 MAD</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">Agadir</td>
              <td className="border border-stone-200 px-3 py-2">5 - 8 %</td>
              <td className="border border-stone-200 px-3 py-2">Saisonnier baln\u00e9aire</td>
              <td className="border border-stone-200 px-3 py-2">7 000 - 12 000 MAD</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">Rabat</td>
              <td className="border border-stone-200 px-3 py-2">4 - 5 %</td>
              <td className="border border-stone-200 px-3 py-2">T3 quartier administratif</td>
              <td className="border border-stone-200 px-3 py-2">13 000 - 22 000 MAD</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">K\u00e9nitra</td>
              <td className="border border-stone-200 px-3 py-2">6 - 8 %</td>
              <td className="border border-stone-200 px-3 py-2">T2 zone industrielle</td>
              <td className="border border-stone-200 px-3 py-2">5 000 - 8 000 MAD</td>
            </tr>
          </tbody>
        </table>

        <h2>Fiscalit\u00e9 des revenus locatifs au Maroc</h2>
        <p>
          Les revenus fonciers sont soumis \u00e0 l&apos;IR avec un abattement forfaitaire de 40 % sur les loyers bruts. Apr\u00e8s abattement, le revenu net est int\u00e9gr\u00e9 \u00e0 votre revenu global et impos\u00e9 selon le bar\u00e8me progressif :
        </p>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Tranche de revenu annuel</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Taux IR</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-200 px-3 py-2">0 - 30 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">0 %</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">30 001 - 50 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">10 %</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">50 001 - 60 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">20 %</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">60 001 - 80 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">30 %</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">80 001 - 180 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">34 %</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">+ 180 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">38 %</td>
            </tr>
          </tbody>
        </table>
        <p>
          En plus de l&apos;IR, vous \u00eates redevable de la taxe d&apos;habitation (10 \u00e0 30 % de la valeur locative annuelle) et de la taxe de services communaux (6,5 \u00e0 10,5 %). La plus-value \u00e0 la revente est tax\u00e9e \u00e0 20 % du profit net (avec abattement de 5 % par an de d\u00e9tention au-del\u00e0 de 5 ans).
        </p>

        <h2>Gestion locative : seul ou via une agence ?</h2>
        <p>
          La gestion locative peut \u00eatre d\u00e9l\u00e9gu\u00e9e \u00e0 une agence immobili\u00e8re moyennant 8 \u00e0 12 % des loyers per\u00e7us. Ce choix est particuli\u00e8rement pertinent pour la location courte dur\u00e9e (Airbnb) qui demande une gestion quotidienne (accueil, m\u00e9nage, linge). Pour la location longue dur\u00e9e, la gestion en direct est faisable si vous \u00eates sur place. Les MRE ont tout int\u00e9r\u00eat \u00e0 confier la gestion \u00e0 un professionnel.
        </p>

        <h2>Les meilleures strat\u00e9gies en 2026</h2>
        <p>
          <strong>Location meubl\u00e9e courte dur\u00e9e :</strong> rendements sup\u00e9rieurs de 30 \u00e0 50 % par rapport \u00e0 la longue dur\u00e9e, mais gestion plus lourde et vacance locative plus fr\u00e9quente. Id\u00e9al \u00e0 Marrakech, Essaouira et Agadir.
        </p>
        <p>
          <strong>Colocation cibl\u00e9e \u00e9tudiants :</strong> forte demande \u00e0 Rabat (universit\u00e9s), F\u00e8s (Al Quaraouiyine), Casablanca (grandes \u00e9coles). Rendement de 7 \u00e0 9 % avec des appartements T3-T4 divis\u00e9s.
        </p>
        <p>
          <strong>Immobilier commercial :</strong> locaux commerciaux et bureaux offrent 7 \u00e0 10 % de rendement \u00e0 Casablanca et Tanger, avec des baux 3-6-9 s\u00e9curisant le revenu.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Avant d&apos;investir, faites concevoir votre projet par un architecte sur Bati.ma qui optimisera les surfaces pour maximiser le rendement locatif. Un plan bien pens\u00e9 (deux T2 plut\u00f4t qu&apos;un T4, par exemple) peut augmenter votre rendement de 20 \u00e0 40 % sur le m\u00eame terrain.
          </p>
        </div>

        <h2>Financer son investissement locatif</h2>
        <p>
          Les banques marocaines financent l&apos;investissement locatif \u00e0 hauteur de 70 \u00e0 80 % de la valeur du bien, avec des taux de 4,5 \u00e0 6 % en 2026. L&apos;effet de levier est int\u00e9ressant si le rendement brut d\u00e9passe le taux du cr\u00e9dit. Pr\u00e9sentez un business plan locatif clair \u00e0 votre banquier, avec des comparables de loyers dans le quartier, pour maximiser vos chances d&apos;obtenir le financement.
        </p>
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-stone-900 mb-5">Questions fr\u00e9quentes</h2>
        <div className="space-y-4">
          {faq.map((f) => (
            <details key={f.q} className="group border border-stone-200 rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between px-4 py-3 cursor-pointer text-sm font-medium text-stone-800 hover:bg-stone-50">
                {f.q}
                <span className="text-stone-400 group-open:rotate-180 transition-transform">\u2193</span>
              </summary>
              <div className="px-4 pb-4 pt-1 text-sm text-stone-600 leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
