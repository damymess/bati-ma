export default function GuideFinancementPrefab() {
  const faq = [
    { q: "Quel est l\u0027apport minimum pour un crédit construction au Maroc ?", a: "L\u0027apport personnel minimum varie de 10 à 30 % selon les banques et le profil de l\u0027emprunteur. Les résidents marocains peuvent obtenir un crédit avec 10 à 15 % d\u0027apport chez la plupart des banques. Les MRE (Marocains Résidents à l\u0027Étranger) doivent généralement apporter un minimum de 20 à 30 %. Pour un projet préfabriqué, l\u0027apport peut être réduit car le délai de construction court limite le risque bancaire." },
    { q: "La finance islamique est-elle disponible pour une maison préfabriquée au Maroc ?", a: "Oui, depuis 2017, les banques participatives marocaines proposent la Mourabaha immobilière, un produit conforme à la charia. La banque achète le bien ou finance la construction puis le revend au client avec une marge bénéficiaire transparente et fixée à l\u0027avance. Les principaux acteurs sont Umnia Bank, Bank Assafa, Al Yousr (BTI Bank) et Dar Al Amane. Les marges sont généralement de 4,5 à 6 % équivalent taux." },
    { q: "Les MRE bénéficient-ils d\u0027avantages pour construire au Maroc ?", a: "Oui, les MRE bénéficient de plusieurs avantages : apport en devises librement convertible, exonération des droits d\u0027importation sur les matériaux de construction (pendant 5 ans après le retour), accès à des crédits spécifiques MRE avec des conditions adaptées (justification de revenus à l\u0027étranger), et possibilité de déduire les intérêts du crédit logement de l\u0027impôt sur le revenu au Maroc." },
    { q: "Quelle est la différence entre un crédit construction et un crédit immobilier classique ?", a: "Le crédit construction est débloqué par tranches au fur et à mesure de l\u0027avancement des travaux (fondations, gros œuvre, second œuvre, finitions), tandis que le crédit immobilier classique finance l\u0027achat d\u0027un bien existant en une seule fois. Pour une maison préfabriquée, le déblocage peut être plus rapide (2-3 tranches au lieu de 4-5) car la construction est plus courte. Les taux sont similaires, mais le crédit construction inclut des frais de suivi de chantier." },
    { q: "Peut-on financer une maison préfabriquée avec un crédit personnel ?", a: "Techniquement oui, mais ce n\u0027est pas recommandé. Un crédit personnel (consommation) a un taux de 7 à 12 % contre 4 à 6 % pour un crédit immobilier, et sa durée est limitée à 7 ans contre 25 ans pour l\u0027immobilier. Cependant, pour de petits projets (annexe, extension, chalet de jardin) de moins de 200 000 MAD, un crédit personnel peut être plus simple à obtenir car il ne nécessite pas d\u0027hypothèque." },
  ];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="prose-content">
        <h2>Financer sa maison préfabriquée au Maroc</h2>
        <p>
          Construire une maison préfabriquée au Maroc nécessite un budget de <strong>300 000 à 1 200 000 MAD</strong>
          selon la surface et le niveau de finition, hors foncier. La bonne nouvelle : le système bancaire marocain
          propose des <strong>crédits construction</strong> adaptés, et le caractère rapide du préfabriqué
          (3 à 8 semaines de montage) constitue un avantage majeur pour réduire les frais financiers intercalaires.
        </p>
        <p>
          Ce guide détaille les différentes options de financement disponibles pour les résidents marocains
          comme pour les MRE (Marocains Résidents à l&apos;Étranger), y compris les solutions de finance islamique.
        </p>

        <h2>Crédit construction classique</h2>
        <p>
          Le crédit construction est le produit bancaire de référence pour financer une maison préfabriquée.
          Il fonctionne par <strong>déblocage progressif</strong> des fonds au fur et à mesure de l&apos;avancement
          des travaux. Les principales banques marocaines proposent ce type de financement :
        </p>
        <table className="w-full text-sm border-collapse my-4">
          <thead><tr className="bg-stone-100"><th className="border border-stone-200 px-3 py-2 text-left">Banque</th><th className="border border-stone-200 px-3 py-2 text-left">Produit</th><th className="border border-stone-200 px-3 py-2 text-left">Apport min</th><th className="border border-stone-200 px-3 py-2 text-left">Taux indicatif</th><th className="border border-stone-200 px-3 py-2 text-left">Durée max</th></tr></thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">Crédit du Maroc</td><td className="border border-stone-200 px-3 py-2">Sakane Construction</td><td className="border border-stone-200 px-3 py-2">10 %</td><td className="border border-stone-200 px-3 py-2">4,50 – 5,25 %</td><td className="border border-stone-200 px-3 py-2">25 ans</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">CIH Bank</td><td className="border border-stone-200 px-3 py-2">CIH Dari Construction</td><td className="border border-stone-200 px-3 py-2">10 %</td><td className="border border-stone-200 px-3 py-2">4,25 – 5,00 %</td><td className="border border-stone-200 px-3 py-2">25 ans</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Attijariwafa Bank</td><td className="border border-stone-200 px-3 py-2">Manzili Construction</td><td className="border border-stone-200 px-3 py-2">15 %</td><td className="border border-stone-200 px-3 py-2">4,50 – 5,50 %</td><td className="border border-stone-200 px-3 py-2">25 ans</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">BMCE Bank of Africa</td><td className="border border-stone-200 px-3 py-2">Immo Construct</td><td className="border border-stone-200 px-3 py-2">15 %</td><td className="border border-stone-200 px-3 py-2">4,75 – 5,50 %</td><td className="border border-stone-200 px-3 py-2">20 ans</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Al Yousr (BTI Bank)</td><td className="border border-stone-200 px-3 py-2">Mourabaha Binaa</td><td className="border border-stone-200 px-3 py-2">20 %</td><td className="border border-stone-200 px-3 py-2">4,90 – 6,00 % (marge)</td><td className="border border-stone-200 px-3 py-2">25 ans</td></tr>
          </tbody>
        </table>

        <h2>Apport personnel : 10 à 30 %</h2>
        <p>
          L&apos;apport personnel exigé par les banques marocaines varie selon le profil de l&apos;emprunteur.
          Les <strong>salariés du secteur privé ou public</strong> avec un CDI peuvent obtenir un financement
          avec seulement <strong>10 % d&apos;apport</strong> chez les banques les plus compétitives (CIH, Crédit du Maroc).
          Les <strong>professions libérales et commerçants</strong> doivent généralement apporter 15 à 20 %,
          et les <strong>MRE</strong> entre 20 et 30 %.
        </p>
        <p>
          Pour une maison préfabriquée de 150 m² à 5 000 MAD/m² (750 000 MAD hors foncier),
          l&apos;apport minimum se situe entre <strong>75 000 et 225 000 MAD</strong> selon le profil.
          Le terrain doit être acquis ou détenu en pleine propriété pour servir de garantie hypothécaire.
        </p>

        <h2>Financement spécifique MRE</h2>
        <p>
          Les Marocains Résidents à l&apos;Étranger bénéficient de <strong>conditions spécifiques</strong>
          pour financer leur projet de construction au Maroc :
        </p>
        <ul>
          <li><strong>Apport en devises :</strong> les revenus en euros, dollars ou dirhams convertis sont acceptés. Les justificatifs de revenus étrangers (fiches de paie, avis d&apos;imposition) sont reconnus par les banques marocaines.</li>
          <li><strong>Exonération des droits d&apos;importation :</strong> pendant les 5 premières années suivant le retour définitif au Maroc, les MRE peuvent importer des matériaux et équipements en franchise de droits.</li>
          <li><strong>Déduction fiscale :</strong> les intérêts du crédit logement principal sont déductibles du revenu imposable au Maroc (plafond de 10 % du revenu global).</li>
          <li><strong>Produits bancaires dédiés :</strong> les banques proposent des offres MRE avec suivi à distance, gestion du chantier par mandataire et assurance construction incluse.</li>
        </ul>

        <h2>Finance islamique : la Mourabaha immobilière</h2>
        <p>
          Depuis l&apos;entrée en vigueur de la loi 103-12, les <strong>banques participatives</strong> marocaines
          proposent la Mourabaha immobilière, un produit conforme à la charia qui remplace le crédit à intérêt
          classique. Le mécanisme est le suivant : la banque achète le terrain et/ou finance la construction,
          puis revend le bien au client avec une <strong>marge bénéficiaire fixe et transparente</strong>,
          payable en mensualités sur une durée de 5 à 25 ans.
        </p>
        <ul>
          <li><strong>Umnia Bank :</strong> filiale participative de CIH Bank, marges de 4,5 à 5,5 %</li>
          <li><strong>Bank Assafa :</strong> filiale d&apos;Attijariwafa, marges de 4,8 à 5,8 %</li>
          <li><strong>Al Yousr (BTI Bank) :</strong> filiale de BMCE, marges de 4,9 à 6,0 %</li>
          <li><strong>Dar Al Amane :</strong> filiale de Société Générale, marges de 4,7 à 5,5 %</li>
        </ul>
        <p>
          La Mourabaha construction fonctionne également par tranches, avec un déblocage progressif
          validé par un comité de conformité charia. Les marges sont généralement 0,5 à 1 % supérieures
          aux taux conventionnels, mais la demande est en forte croissance (+30 % par an).
        </p>

        <h2>Avantage du préfabriqué pour le crédit</h2>
        <p>
          La maison préfabriquée présente un <strong>avantage financier majeur</strong> par rapport à la construction
          traditionnelle en matière de crédit : le délai de construction réduit (3 à 8 semaines vs 6 à 12 mois)
          signifie des <strong>intérêts intercalaires 3 à 5 fois moins élevés</strong>.
        </p>
        <p>
          Les intérêts intercalaires sont les intérêts payés pendant la période de construction,
          avant le début du remboursement normal. Pour un crédit de 600 000 MAD à 5 %, les intérêts
          intercalaires représentent <strong>2 500 MAD/mois</strong>. Sur 10 mois de construction traditionnelle,
          cela fait 25 000 MAD. Sur 2 mois de construction préfabriquée, seulement 5 000 MAD.
          Une économie de <strong>20 000 MAD</strong> dès le départ.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Faites jouer la concurrence entre au moins <strong>3 banques</strong> avant de signer votre crédit construction.
            Les taux négociés peuvent être 0,5 à 1 % inférieurs aux taux affichés. Présentez un dossier complet
            avec les devis du fabricant préfabriqué, le planning de montage et le permis de construire.
            Le délai court du préfabriqué est un argument de négociation : moins de risque pour la banque.
            Sur Bati.ma, trouvez un architecte qui vous accompagnera dans le montage du dossier.
          </p>
        </div>

        <h2>Simulation budget : villa 150 m² préfabriquée</h2>
        <p>
          Voici une simulation détaillée pour une villa de 150 m² en structure métallique légère,
          niveau de finition standard, terrain déjà acquis :
        </p>
        <ul>
          <li><strong>Structure préfabriquée clé en main :</strong> 150 m² × 4 500 MAD = 675 000 MAD</li>
          <li><strong>Fondations (dalle béton) :</strong> 150 m² × 600 MAD = 90 000 MAD</li>
          <li><strong>Raccordements (eau, électricité, assainissement) :</strong> 35 000 MAD</li>
          <li><strong>Honoraires architecte (8 %) :</strong> 64 000 MAD</li>
          <li><strong>Frais administratifs (permis, taxes) :</strong> 15 000 MAD</li>
          <li><strong>Total projet :</strong> environ <strong>879 000 MAD</strong></li>
        </ul>
        <p>
          Avec un apport de 15 % (132 000 MAD) et un crédit de 747 000 MAD sur 20 ans à 5 %,
          la mensualité est d&apos;environ <strong>4 930 MAD/mois</strong>. Le coût total du crédit
          (intérêts + capital) atteint 1 183 000 MAD sur 20 ans.
        </p>

        <h2>Aides et subventions possibles</h2>
        <p>
          Le Maroc propose plusieurs dispositifs d&apos;aide à la construction :
        </p>
        <ul>
          <li><strong>Fogarim :</strong> fonds de garantie pour les revenus irréguliers et les petits revenus, couvrant jusqu&apos;à 70 % du crédit</li>
          <li><strong>Fogaloge :</strong> fonds de garantie pour les fonctionnaires, facilitant l&apos;accès au crédit sans apport</li>
          <li><strong>Exonération TVA :</strong> sur les logements sociaux (surface &lt; 100 m², prix &lt; 300 000 MAD)</li>
          <li><strong>PROMASOL :</strong> subvention de 20 à 40 % sur les chauffe-eau solaires et panneaux photovoltaïques</li>
          <li><strong>Programmes régionaux :</strong> certaines régions (Al Hoceima, provinces sahariennes) offrent des aides spécifiques à la construction</li>
        </ul>
      </div>
      <section className="mt-10">
        <h2 className="text-xl font-bold text-stone-900 mb-5">Questions fréquentes</h2>
        <div className="space-y-4">
          {faq.map((f) => (
            <details key={f.q} className="group border border-stone-200 rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between px-4 py-3 cursor-pointer text-sm font-medium text-stone-800 hover:bg-stone-50">{f.q}<span className="text-stone-400 group-open:rotate-180 transition-transform">↓</span></summary>
              <div className="px-4 pb-4 pt-1 text-sm text-stone-600 leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
