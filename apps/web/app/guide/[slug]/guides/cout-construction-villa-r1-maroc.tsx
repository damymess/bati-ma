import Link from "next/link";

export default function GuideCoutVillaR1() {
  const faq = [
    {
      q: "Quel est le co\u00fbt moyen de construction d&apos;une villa R+1 au Maroc en 2026 ?",
      a: "Le co\u00fbt moyen d&apos;une villa R+1 se situe entre 5 000 et 8 000 MAD/m\u00b2 pour du moyen standing. Pour une villa de 200 m\u00b2 habitables (100 m\u00b2 par niveau), le budget global se situe entre 1 000 000 et 1 600 000 MAD hors terrain. Ce montant inclut le gros \u0153uvre, le second \u0153uvre et les finitions.",
    },
    {
      q: "Combien de temps faut-il pour construire une villa R+1 au Maroc ?",
      a: "La dur\u00e9e moyenne de construction d&apos;une villa R+1 au Maroc est de 10 \u00e0 14 mois. Le gros \u0153uvre prend environ 4 \u00e0 6 mois, le second \u0153uvre 3 \u00e0 4 mois et les finitions 3 \u00e0 4 mois. Pr\u00e9voyez 2 \u00e0 3 mois suppl\u00e9mentaires pour l&apos;obtention du permis de construire avant le d\u00e9marrage du chantier.",
    },
    {
      q: "Faut-il un architecte pour construire une villa R+1 au Maroc ?",
      a: "Oui, la loi 16-89 rend obligatoire le recours \u00e0 un architecte inscrit \u00e0 l&apos;Ordre National des Architectes pour toute construction au Maroc. L&apos;architecte \u00e9tablit les plans, d\u00e9pose le permis de construire et peut superviser le chantier. Ses honoraires repr\u00e9sentent 8 \u00e0 12 % du co\u00fbt total des travaux.",
    },
    {
      q: "Quelle est la diff\u00e9rence de co\u00fbt entre une villa R+1 et un plain-pied ?",
      a: "Une villa R+1 co\u00fbte environ 15 \u00e0 25 % de plus qu&apos;un plain-pied de m\u00eame surface habitable, principalement en raison de l&apos;escalier, du plancher haut et du renforcement structurel. Cependant, le R+1 est plus \u00e9conomique en termes de terrain : il n\u00e9cessite une emprise au sol deux fois moindre, ce qui r\u00e9duit consid\u00e9rablement le co\u00fbt du foncier.",
    },
    {
      q: "Comment financer la construction d&apos;une villa R+1 au Maroc ?",
      a: "Plusieurs options existent : le cr\u00e9dit immobilier classique (taux entre 4 et 6 % en 2026), le pr\u00eat construction (d\u00e9blocage par tranches), l&apos;autofinancement progressif ou la combinaison des deux. Les banques financent g\u00e9n\u00e9ralement jusqu&apos;\u00e0 70 % du co\u00fbt de construction sur pr\u00e9sentation des plans approuv\u00e9s et du permis de construire.",
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
        <h2>Pourquoi la villa R+1 est le format le plus populaire au Maroc</h2>
        <p>
          La villa R+1 (rez-de-chauss\u00e9e + un \u00e9tage) est le type de construction r\u00e9sidentielle le plus r\u00e9pandu au Maroc. Ce format s&apos;impose pour plusieurs raisons \u00e9conomiques et pratiques qui en font le choix privil\u00e9gi\u00e9 des familles marocaines, qu&apos;elles construisent en milieu urbain ou p\u00e9ri-urbain.
        </p>
        <p>
          Premi\u00e8rement, le R+1 permet d&apos;optimiser le foncier. Avec un terrain de 150 \u00e0 300 m\u00b2, on obtient une surface habitable de 200 \u00e0 400 m\u00b2 en r\u00e9partissant les espaces sur deux niveaux. Le rez-de-chauss\u00e9e accueille g\u00e9n\u00e9ralement les pi\u00e8ces de vie (salon marocain, cuisine, salon d&apos;invit\u00e9s) tandis que l&apos;\u00e9tage est d\u00e9di\u00e9 aux chambres et espaces priv\u00e9s.
        </p>
        <p>
          Deuxi\u00e8mement, le R+1 offre une structure adapt\u00e9e aux r\u00e8glements d&apos;urbanisme. Dans la majorit\u00e9 des zones r\u00e9sidentielles marocaines, les plans d&apos;am\u00e9nagement autorisent le R+1 sans difficult\u00e9 particuli\u00e8re, contrairement au R+2 ou plus qui n\u00e9cessitent des contraintes suppl\u00e9mentaires (recul, gabarit, BET renforc\u00e9).
        </p>
        <p>
          Troisi\u00e8mement, le co\u00fbt de construction reste ma\u00eetris\u00e9 par rapport au R+2 ou R+3. L&apos;ajout d&apos;un seul \u00e9tage n\u00e9cessite un dimensionnement structurel standard, sans fondations sp\u00e9ciales ni \u00e9tude de sol complexe dans la plupart des cas. Le co\u00fbt additionnel du R+1 par rapport au plain-pied est de 15 \u00e0 25 %, principalement li\u00e9 au plancher haut, \u00e0 l&apos;escalier et aux poteaux de structure.
        </p>
        <p>
          Enfin, la villa R+1 r\u00e9pond au mode de vie marocain : s\u00e9paration entre espaces de r\u00e9ception et espaces intimes, possibilit\u00e9 d&apos;am\u00e9nager une terrasse accessible au premier \u00e9tage, et \u00e9volutivit\u00e9 future (ajout d&apos;un \u00e9tage suppl\u00e9mentaire si le r\u00e8glement le permet). Pour d\u00e9couvrir les{" "}
          <Link href="/guide/etapes-construire-villa" className="text-[#b5522a] underline">\u00e9tapes compl\u00e8tes de construction d&apos;une villa</Link>, consultez notre guide d\u00e9di\u00e9.
        </p>

        <h2>Quel budget pour construire une villa R+1 au Maroc ?</h2>
        <p>
          Le co&ucirc;t de construction d&apos;une villa R+1 au Maroc varie de 3 500 &agrave; 20 000 MAD/m&sup2; selon la gamme de finitions. Pour une villa de 200 m&sup2; en moyen standing, comptez entre 1 000 000 et 1 600 000 MAD hors terrain. Voici le d&eacute;tail par gamme :
        </p>
        <p>
          Utilisez notre <Link href="/outils/calculateur-cout-construction-maroc" className="text-[#b5522a] underline">calculateur de co&ucirc;t construction</Link> pour estimer pr&eacute;cis&eacute;ment votre budget.
        </p>
        <p>
          Le co\u00fbt de construction d&apos;une villa R+1 au Maroc varie consid\u00e9rablement selon le niveau de finitions choisi. Voici un tableau r\u00e9capitulatif des fourchettes de prix au m\u00e8tre carr\u00e9, bases 2026, toutes r\u00e9gions confondues.
        </p>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Gamme</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Prix / m\u00b2</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Villa 200 m\u00b2</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Caract\u00e9ristiques</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">\u00c9conomique</td>
              <td className="border border-stone-200 px-3 py-2">3 500 - 5 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">700 000 - 1 000 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">Finitions standard, carrelage local, menuiserie aluminium basique, peinture simple</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">Moyen standing</td>
              <td className="border border-stone-200 px-3 py-2">5 000 - 8 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">1 000 000 - 1 600 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">Carrelage import\u00e9, menuiserie aluminium qualit\u00e9, cuisine \u00e9quip\u00e9e, double vitrage</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">Haut standing</td>
              <td className="border border-stone-200 px-3 py-2">8 000 - 12 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">1 600 000 - 2 400 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">Marbre, bois noble, domotique, climatisation centralis\u00e9e, isolation thermique</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2 font-medium">Luxe</td>
              <td className="border border-stone-200 px-3 py-2">12 000 - 20 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">2 400 000 - 4 000 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">Mat\u00e9riaux haut de gamme, piscine, am\u00e9nagement paysager, design architecte renomm\u00e9</td>
            </tr>
          </tbody>
        </table>
        <p>
          Ces prix s&apos;entendent hors co\u00fbt du terrain. Utilisez notre{" "}
          <Link href="/outils/calculateur-cout-construction-maroc" className="text-[#b5522a] underline">calculateur de co\u00fbt de construction</Link>{" "}
          pour obtenir une estimation personnalis\u00e9e selon votre projet, votre ville et votre niveau de finitions souhait\u00e9.
        </p>

        <h2>Combien co&ucirc;te la construction d&apos;une villa au Maroc par ville ?</h2>
        <p>
          Le prix de construction varie de 20 &agrave; 40 % selon la ville. Casablanca et Marrakech sont les plus ch&egrave;res en raison de la forte demande et du co&ucirc;t de la main-d&apos;&oelig;uvre. Les villes secondaires comme Oujda, B&eacute;ni Mellal ou Nador offrent des tarifs 20 &agrave; 30 % inf&eacute;rieurs.
        </p>
        <p>
          Les co\u00fbts de construction varient significativement d&apos;une ville \u00e0 l&apos;autre au Maroc, en fonction du co\u00fbt de la main-d&apos;\u0153uvre locale, de la disponibilit\u00e9 des mat\u00e9riaux et du niveau de vie. Voici les fourchettes de prix moyen au m\u00e8tre carr\u00e9 pour une villa R+1 en moyen standing dans les principales villes du Royaume.
        </p>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Ville</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Prix moyen / m\u00b2</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Villa 200 m\u00b2 (estimation)</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Observation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Casablanca</td>
              <td className="border border-stone-200 px-3 py-2">6 000 - 9 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">1 200 000 - 1 800 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">Main-d&apos;\u0153uvre et mat\u00e9riaux les plus chers du pays</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Rabat</td>
              <td className="border border-stone-200 px-3 py-2">5 500 - 8 500 MAD</td>
              <td className="border border-stone-200 px-3 py-2">1 100 000 - 1 700 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">Co\u00fbts \u00e9lev\u00e9s, exigences administratives strictes</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Marrakech</td>
              <td className="border border-stone-200 px-3 py-2">5 500 - 9 500 MAD</td>
              <td className="border border-stone-200 px-3 py-2">1 100 000 - 1 900 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">Forte demande luxe, artisanat local de qualit\u00e9</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Tanger</td>
              <td className="border border-stone-200 px-3 py-2">5 000 - 8 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">1 000 000 - 1 600 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">March\u00e9 dynamique, prix en hausse</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Agadir</td>
              <td className="border border-stone-200 px-3 py-2">5 000 - 7 500 MAD</td>
              <td className="border border-stone-200 px-3 py-2">1 000 000 - 1 500 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">Contraintes parasismiques (normes RPS 2000)</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">F\u00e8s</td>
              <td className="border border-stone-200 px-3 py-2">4 000 - 6 500 MAD</td>
              <td className="border border-stone-200 px-3 py-2">800 000 - 1 300 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">Main-d&apos;\u0153uvre comp\u00e9titive, mat\u00e9riaux locaux</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Mekn\u00e8s</td>
              <td className="border border-stone-200 px-3 py-2">3 800 - 6 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">760 000 - 1 200 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">Parmi les villes les plus abordables</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">El Jadida</td>
              <td className="border border-stone-200 px-3 py-2">4 200 - 6 500 MAD</td>
              <td className="border border-stone-200 px-3 py-2">840 000 - 1 300 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">D\u00e9veloppement rapide, co\u00fbts mod\u00e9r\u00e9s</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Oujda</td>
              <td className="border border-stone-200 px-3 py-2">3 800 - 6 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">760 000 - 1 200 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">Co\u00fbts bas, influence construction alg\u00e9rienne</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">T\u00e9touan</td>
              <td className="border border-stone-200 px-3 py-2">4 500 - 7 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">900 000 - 1 400 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">Proximit\u00e9 Tanger, terrain en pente fr\u00e9quent</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Nador</td>
              <td className="border border-stone-200 px-3 py-2">4 000 - 6 500 MAD</td>
              <td className="border border-stone-200 px-3 py-2">800 000 - 1 300 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">Diaspora MRE, demande saisonni\u00e8re forte</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">B\u00e9ni Mellal</td>
              <td className="border border-stone-200 px-3 py-2">3 500 - 5 500 MAD</td>
              <td className="border border-stone-200 px-3 py-2">700 000 - 1 100 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">Co\u00fbts les plus bas, excellente accessibilit\u00e9 mat\u00e9riaux</td>
            </tr>
          </tbody>
        </table>
        <p>
          Ces estimations concernent le moyen standing. Pour un chiffrage pr\u00e9cis adapt\u00e9 \u00e0 votre ville, sollicitez un architecte local via l&apos;
          <Link href="/architecte" className="text-[#b5522a] underline">annuaire Bati.ma</Link>. Les professionnels r\u00e9f\u00e9renc\u00e9s connaissent les tarifs en vigueur dans leur r\u00e9gion et peuvent vous fournir un devis d\u00e9taill\u00e9 gratuit.
        </p>

        <h2>Quel est le prix au m&sup2; d&apos;une construction neuve au Maroc ?</h2>
        <p>
          Le prix au m&sup2; d&apos;une construction neuve au Maroc se situe entre 3 500 MAD/m&sup2; en &eacute;conomique et 20 000 MAD/m&sup2; en luxe. En moyen standing (le plus courant), comptez 5 000 &agrave; 8 000 MAD/m&sup2;. Ce prix se ventile en trois postes principaux :
        </p>
        <p>
          Comprendre la r\u00e9partition du budget est essentiel pour anticiper les co\u00fbts et \u00e9viter les mauvaises surprises. Voici la ventilation type d&apos;une villa R+1 au Maroc.
        </p>

        <h3 className="text-lg font-semibold text-stone-800 mt-6 mb-3">Gros \u0153uvre : 45 % du budget</h3>
        <p>
          Le gros \u0153uvre constitue la part la plus importante du budget. Il comprend l&apos;ensemble des travaux de structure qui assurent la solidit\u00e9 et la stabilit\u00e9 du b\u00e2timent.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-stone-700">
          <li><strong>Terrassement et fouilles</strong> : 3 \u00e0 5 % du budget total. Excavation du terrain, mise \u00e0 niveau, \u00e9vacuation des terres. Le co\u00fbt augmente en terrain rocheux ou en pente.</li>
          <li><strong>Fondations</strong> : 8 \u00e0 12 %. Semelles filantes ou isol\u00e9es selon l&apos;\u00e9tude de sol, b\u00e9ton arm\u00e9, ferraillage. Consultez notre guide sur les{" "}
            <Link href="/guide/fondation-maison-maroc" className="text-[#b5522a] underline">fondations de maison au Maroc</Link> pour plus de d\u00e9tails.
          </li>
          <li><strong>Structure (poteaux, poutres, planchers)</strong> : 20 \u00e0 25 %. Le poste le plus co\u00fbteux du gros \u0153uvre. Inclut le b\u00e9ton arm\u00e9, le coffrage, le ferraillage et le plancher du premier \u00e9tage (hourdis ou dalle pleine).</li>
          <li><strong>Ma\u00e7onnerie (murs et cloisons)</strong> : 8 \u00e0 10 %. Briques creuses ou parpaings, mortier, main-d&apos;\u0153uvre de ma\u00e7onnerie.</li>
          <li><strong>\u00c9tanch\u00e9it\u00e9 terrasse</strong> : 2 \u00e0 3 %. Indispensable au Maroc, surtout pour la terrasse accessible du R+1.</li>
        </ul>

        <h3 className="text-lg font-semibold text-stone-800 mt-6 mb-3">Second \u0153uvre : 30 % du budget</h3>
        <p>
          Le second \u0153uvre regroupe les corps d&apos;\u00e9tat techniques qui rendent la villa fonctionnelle et habitable.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-stone-700">
          <li><strong>Plomberie et sanitaires</strong> : 8 \u00e0 10 %. R\u00e9seau d&apos;eau froide et chaude, \u00e9vacuation, appareils sanitaires (douches, WC, lavabos). Pr\u00e9voyez 2 salles de bain minimum pour un R+1.</li>
          <li><strong>\u00c9lectricit\u00e9</strong> : 6 \u00e0 8 %. Tableau \u00e9lectrique, c\u00e2blage, prises, interrupteurs, \u00e9clairage. La mise aux normes NF est recommand\u00e9e m\u00eame si non obligatoire.</li>
          <li><strong>Menuiserie ext\u00e9rieure</strong> : 8 \u00e0 10 %. Fen\u00eatres, portes, volets. L&apos;aluminium domine le march\u00e9 marocain. Le PVC gagne du terrain pour ses propri\u00e9t\u00e9s isolantes.</li>
          <li><strong>Escalier</strong> : 3 \u00e0 5 %. Sp\u00e9cifique au R+1 : escalier en b\u00e9ton arm\u00e9 (le plus courant), m\u00e9tallique ou en bois. Pr\u00e9voyez un escalier droit ou tournant selon la configuration.</li>
        </ul>

        <h3 className="text-lg font-semibold text-stone-800 mt-6 mb-3">Finitions : 25 % du budget</h3>
        <p>
          Les finitions d\u00e9terminent l&apos;aspect final et le confort de la villa. C&apos;est aussi le poste o\u00f9 les d\u00e9passements de budget sont les plus fr\u00e9quents.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-stone-700">
          <li><strong>Rev\u00eatement de sol</strong> : 6 \u00e0 8 %. Carrelage (80 \u00e0 250 MAD/m\u00b2), marbre (300 \u00e0 800 MAD/m\u00b2), granito, parquet. Le zellige est pris\u00e9 pour les salons marocains.</li>
          <li><strong>Peinture et enduits</strong> : 5 \u00e0 7 %. Enduit int\u00e9rieur et ext\u00e9rieur, peinture (2 \u00e0 3 couches), tadelakt ou stuc pour les finitions haut de gamme.</li>
          <li><strong>Menuiserie int\u00e9rieure</strong> : 4 \u00e0 5 %. Portes int\u00e9rieures, placards, dressings. Le bois massif (ch\u00eane, h\u00eatre) est privil\u00e9gi\u00e9 en haut standing.</li>
          <li><strong>Cuisine et \u00e9quipements</strong> : 3 \u00e0 5 %. Meubles de cuisine, plan de travail, \u00e9lectrom\u00e9nager int\u00e9gr\u00e9. Un poste tr\u00e8s variable selon les choix.</li>
          <li><strong>Fa\u00e7ade</strong> : 2 \u00e0 3 %. Cr\u00e9pi ext\u00e9rieur, pierre de parement, habillage. La fa\u00e7ade est soumise \u00e0 l&apos;approbation de l&apos;architecte communal.</li>
        </ul>

        <h2>Exemples concrets de budget</h2>
        <p>
          Voici trois sc\u00e9narios r\u00e9alistes de villas R+1 construites dans diff\u00e9rentes villes du Maroc, avec un d\u00e9tail du budget par poste.
        </p>

        <h3 className="text-lg font-semibold text-stone-800 mt-6 mb-3">Exemple 1 : Villa 150 m\u00b2 \u00e9conomique \u00e0 F\u00e8s</h3>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Poste</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Montant (MAD)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">Gros \u0153uvre (fondations, structure, ma\u00e7onnerie)</td><td className="border border-stone-200 px-3 py-2">292 500</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Second \u0153uvre (plomberie, \u00e9lectricit\u00e9, menuiserie)</td><td className="border border-stone-200 px-3 py-2">195 000</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Finitions (carrelage, peinture, cuisine)</td><td className="border border-stone-200 px-3 py-2">162 500</td></tr>
            <tr className="bg-stone-50 font-semibold"><td className="border border-stone-200 px-3 py-2">Total construction</td><td className="border border-stone-200 px-3 py-2">650 000</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Honoraires architecte (8 %)</td><td className="border border-stone-200 px-3 py-2">52 000</td></tr>
            <tr className="bg-stone-50 font-bold"><td className="border border-stone-200 px-3 py-2">Budget total hors terrain</td><td className="border border-stone-200 px-3 py-2">702 000</td></tr>
          </tbody>
        </table>
        <p>
          Cette villa de 150 m\u00b2 (75 m\u00b2 par niveau) \u00e0 F\u00e8s comprend 3 chambres, 2 salles de bain, un salon marocain et une cuisine ferm\u00e9e. Finitions \u00e9conomiques avec carrelage local, menuiserie aluminium standard et peinture simple.
        </p>

        <h3 className="text-lg font-semibold text-stone-800 mt-6 mb-3">Exemple 2 : Villa 200 m\u00b2 moyen standing \u00e0 Casablanca</h3>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Poste</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Montant (MAD)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">Gros \u0153uvre (fondations, structure, ma\u00e7onnerie)</td><td className="border border-stone-200 px-3 py-2">585 000</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Second \u0153uvre (plomberie, \u00e9lectricit\u00e9, menuiserie alu qualit\u00e9)</td><td className="border border-stone-200 px-3 py-2">390 000</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Finitions (carrelage import\u00e9, cuisine \u00e9quip\u00e9e, peinture)</td><td className="border border-stone-200 px-3 py-2">325 000</td></tr>
            <tr className="bg-stone-50 font-semibold"><td className="border border-stone-200 px-3 py-2">Total construction</td><td className="border border-stone-200 px-3 py-2">1 300 000</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Honoraires architecte (10 %)</td><td className="border border-stone-200 px-3 py-2">130 000</td></tr>
            <tr className="bg-stone-50 font-bold"><td className="border border-stone-200 px-3 py-2">Budget total hors terrain</td><td className="border border-stone-200 px-3 py-2">1 430 000</td></tr>
          </tbody>
        </table>
        <p>
          Cette villa de 200 m\u00b2 (100 m\u00b2 par niveau) \u00e0 Casablanca comprend 4 chambres dont une suite parentale, 3 salles de bain, un double salon, une cuisine am\u00e9ricaine \u00e9quip\u00e9e et un garage. Double vitrage, isolation phonique et climatisation split dans les chambres.
        </p>

        <h3 className="text-lg font-semibold text-stone-800 mt-6 mb-3">Exemple 3 : Villa 300 m\u00b2 haut standing \u00e0 Marrakech</h3>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Poste</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Montant (MAD)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-stone-200 px-3 py-2">Gros \u0153uvre (fondations renforc\u00e9es, structure, ma\u00e7onnerie)</td><td className="border border-stone-200 px-3 py-2">1 215 000</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Second \u0153uvre (plomberie haut de gamme, \u00e9lectricit\u00e9 domotique, menuiserie bois)</td><td className="border border-stone-200 px-3 py-2">810 000</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Finitions (marbre, tadelakt, cuisine design, fa\u00e7ade pierre)</td><td className="border border-stone-200 px-3 py-2">675 000</td></tr>
            <tr className="bg-stone-50 font-semibold"><td className="border border-stone-200 px-3 py-2">Total construction</td><td className="border border-stone-200 px-3 py-2">2 700 000</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Honoraires architecte (12 %)</td><td className="border border-stone-200 px-3 py-2">324 000</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Piscine (8 x 4 m)</td><td className="border border-stone-200 px-3 py-2">180 000</td></tr>
            <tr><td className="border border-stone-200 px-3 py-2">Am\u00e9nagement paysager</td><td className="border border-stone-200 px-3 py-2">120 000</td></tr>
            <tr className="bg-stone-50 font-bold"><td className="border border-stone-200 px-3 py-2">Budget total hors terrain</td><td className="border border-stone-200 px-3 py-2">3 324 000</td></tr>
          </tbody>
        </table>
        <p>
          Cette villa de 300 m\u00b2 (150 m\u00b2 par niveau) \u00e0 Marrakech comprend 5 chambres en suite, un salon marocain avec zellige et tadelakt, un s\u00e9jour panoramique, une cuisine professionnelle, un garage double et une terrasse am\u00e9nag\u00e9e avec pergola. Climatisation centralis\u00e9e gainable, domotique compl\u00e8te et isolation thermique par l&apos;ext\u00e9rieur.
        </p>

        <h2>Quels sont les co&ucirc;ts cach&eacute;s de la construction au Maroc ?</h2>
        <p>
          Au-del\u00e0 du co\u00fbt de construction stricto sensu, plusieurs d\u00e9penses annexes sont \u00e0 int\u00e9grer dans votre budget global. Les oublier peut entra\u00eener un d\u00e9passement de 20 \u00e0 35 % du budget initial.
        </p>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Poste annexe</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Co\u00fbt estimatif</th>
              <th className="border border-stone-200 px-3 py-2 text-left">D\u00e9tail</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Terrain</td>
              <td className="border border-stone-200 px-3 py-2">Variable (500 \u00e0 5 000+ MAD/m\u00b2)</td>
              <td className="border border-stone-200 px-3 py-2">Prix tr\u00e8s variable selon ville et quartier. Repr\u00e9sente souvent 30 \u00e0 50 % du budget total.</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Permis de construire</td>
              <td className="border border-stone-200 px-3 py-2">5 000 - 15 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">Taxes communales, frais de dossier, plan topographique. D\u00e9lai : 2 \u00e0 3 mois.</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">\u00c9tude de sol</td>
              <td className="border border-stone-200 px-3 py-2">5 000 - 15 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">Indispensable pour dimensionner les fondations. Obligatoire en zone sismique.</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Bureau d&apos;\u00e9tudes techniques (BET)</td>
              <td className="border border-stone-200 px-3 py-2">8 000 - 25 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">Plans de b\u00e9ton arm\u00e9, notes de calcul, suivi structurel.</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Branchement eau (ONEE)</td>
              <td className="border border-stone-200 px-3 py-2">3 000 - 8 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">Raccordement au r\u00e9seau, compteur, tranchée. D\u00e9lai : 2 \u00e0 6 semaines.</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Branchement \u00e9lectricit\u00e9 (ONEE)</td>
              <td className="border border-stone-200 px-3 py-2">5 000 - 15 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">Selon la puissance demand\u00e9e (mono ou triphas\u00e9). Compteur et c\u00e2blage ext\u00e9rieur.</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Assainissement</td>
              <td className="border border-stone-200 px-3 py-2">5 000 - 20 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">Raccordement \u00e9gout ou fosse septique. Varie selon la proximit\u00e9 du r\u00e9seau.</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Cl\u00f4ture du terrain</td>
              <td className="border border-stone-200 px-3 py-2">15 000 - 50 000 MAD</td>
              <td className="border border-stone-200 px-3 py-2">Mur de cl\u00f4ture en parpaing + cr\u00e9pi + portail. Obligatoire avant d\u00e9but chantier.</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Am\u00e9nagement ext\u00e9rieur</td>
              <td className="border border-stone-200 px-3 py-2">20 000 - 100 000+ MAD</td>
              <td className="border border-stone-200 px-3 py-2">All\u00e9es, terrasse, jardin, parking, \u00e9clairage ext\u00e9rieur.</td>
            </tr>
          </tbody>
        </table>
        <p>
          Au total, pr\u00e9voyez un budget annexe de 70 000 \u00e0 250 000 MAD en plus du co\u00fbt de construction. Pour ne rien oublier, utilisez le{" "}
          <Link href="/outils/calculateur-cout-construction-maroc" className="text-[#b5522a] underline">calculateur Bati.ma</Link>{" "}
          qui int\u00e8gre l&apos;ensemble de ces postes dans l&apos;estimation.
        </p>

        <h2>Combien co&ucirc;te un architecte pour une villa R+1 au Maroc ?</h2>
        <p>
          Au Maroc, le recours \u00e0 un architecte est obligatoire (loi 16-89). Ses honoraires repr\u00e9sentent un investissement essentiel pour garantir la qualit\u00e9 de la construction, le respect des d\u00e9lais et la conformit\u00e9 r\u00e9glementaire. Les tarifs varient de 8 \u00e0 12 % du co\u00fbt total des travaux selon l&apos;\u00e9tendue de la mission confi\u00e9e.
        </p>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-200 px-3 py-2 text-left">Type de mission</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Taux</th>
              <th className="border border-stone-200 px-3 py-2 text-left">Ce qui est inclus</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Mission de base (permis uniquement)</td>
              <td className="border border-stone-200 px-3 py-2">3 \u00e0 5 %</td>
              <td className="border border-stone-200 px-3 py-2">Avant-projet, plans de permis de construire, d\u00e9p\u00f4t et suivi administratif</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Mission compl\u00e8te (permis + suivi)</td>
              <td className="border border-stone-200 px-3 py-2">8 \u00e0 10 %</td>
              <td className="border border-stone-200 px-3 py-2">Plans d&apos;ex\u00e9cution, dossier de consultation des entreprises, suivi de chantier, r\u00e9ception des travaux</td>
            </tr>
            <tr>
              <td className="border border-stone-200 px-3 py-2">Mission \u00e9tendue (design + suivi int\u00e9gral)</td>
              <td className="border border-stone-200 px-3 py-2">10 \u00e0 12 %</td>
              <td className="border border-stone-200 px-3 py-2">Tout ce qui pr\u00e9c\u00e8de + design int\u00e9rieur, choix des mat\u00e9riaux, coordination BET, OPC</td>
            </tr>
          </tbody>
        </table>
        <p>
          Pour une villa R+1 \u00e0 1 300 000 MAD, la mission compl\u00e8te co\u00fbte entre 104 000 et 130 000 MAD. Cet investissement est largement rentabilis\u00e9 : un architecte comp\u00e9tent optimise les co\u00fbts, n\u00e9gocie avec les entreprises et \u00e9vite les erreurs co\u00fbteuses. D\u00e9couvrez tous les d\u00e9tails dans notre guide sur les{" "}
          <Link href="/guide/honoraires-architecte-maroc" className="text-[#b5522a] underline">honoraires d&apos;architecte au Maroc</Link>.
        </p>

        <h2>Comment optimiser son budget de construction</h2>
        <p>
          Construire une villa R+1 au Maroc sans d\u00e9passer son budget est possible avec une bonne pr\u00e9paration. Voici les strat\u00e9gies les plus efficaces pour ma\u00eetriser les co\u00fbts.
        </p>

        <h3 className="text-lg font-semibold text-stone-800 mt-6 mb-3">Privil\u00e9gier les mat\u00e9riaux locaux</h3>
        <p>
          Le Maroc dispose d&apos;une industrie de mat\u00e9riaux de construction bien d\u00e9velopp\u00e9e. Le ciment (LafargeHolcim, Ciments du Maroc), les briques, le carrelage (Super C\u00e9rame, Facemag) et la menuiserie aluminium sont produits localement \u00e0 des co\u00fbts comp\u00e9titifs. L&apos;importation de mat\u00e9riaux (carrelage italien, marbre turc) peut doubler le budget finitions sans apporter une qualit\u00e9 proportionnellement sup\u00e9rieure. Discutez des alternatives locales avec votre architecte.
        </p>

        <h3 className="text-lg font-semibold text-stone-800 mt-6 mb-3">Planifier en d\u00e9tail avant de d\u00e9marrer</h3>
        <p>
          Un projet bien planifi\u00e9 co\u00fbte 15 \u00e0 20 % de moins qu&apos;un projet improvis\u00e9. Investissez dans des plans d&apos;ex\u00e9cution d\u00e9taill\u00e9s, un m\u00e9tr\u00e9 quantitatif pr\u00e9cis et un planning de chantier r\u00e9aliste. La phase d&apos;\u00e9tude repr\u00e9sente 2 \u00e0 3 mois mais \u00e9vite des mois de retard et des surco\u00fbts en phase de construction.
        </p>

        <h3 className="text-lg font-semibold text-stone-800 mt-6 mb-3">\u00c9viter les modifications en cours de chantier</h3>
        <p>
          Chaque modification en cours de chantier co\u00fbte 3 \u00e0 5 fois plus cher que si elle avait \u00e9t\u00e9 int\u00e9gr\u00e9e \u00e0 la conception. D\u00e9placer une cloison, modifier l&apos;emplacement d&apos;une salle de bain ou changer le type de fen\u00eatres en cours de travaux implique des d\u00e9molitions, des reprises et des retards. Finalisez tous vos choix avant le d\u00e9marrage du gros \u0153uvre.
        </p>

        <h3 className="text-lg font-semibold text-stone-800 mt-6 mb-3">Comparer plusieurs devis</h3>
        <p>
          Demandez au minimum 3 devis d\u00e9taill\u00e9s pour chaque corps d&apos;\u00e9tat. Comparez ligne par ligne : quantit\u00e9s, prix unitaires, marques de mat\u00e9riaux. M\u00e9fiez-vous des devis anormalement bas qui cachent souvent des mat\u00e9riaux de mauvaise qualit\u00e9 ou des travaux incomplets. Votre architecte peut vous aider dans cette analyse comparative.
        </p>

        <h3 className="text-lg font-semibold text-stone-800 mt-6 mb-3">Pr\u00e9voir une marge de s\u00e9curit\u00e9 de 10 \u00e0 15 %</h3>
        <p>
          M\u00eame avec une planification rigoureuse, des impr\u00e9vus surviennent toujours : nappe phr\u00e9atique non d\u00e9tect\u00e9e, hausse du prix du fer \u00e0 b\u00e9ton, retard d&apos;un fournisseur. Int\u00e9grez syst\u00e9matiquement une r\u00e9serve de 10 \u00e0 15 % dans votre budget initial. Cette r\u00e9serve vous \u00e9vite de devoir arr\u00eater le chantier faute de moyens.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm font-semibold text-[#b5522a] mb-1">Estimez votre budget en 2 minutes</p>
          <p className="text-sm text-stone-700 mb-3">
            Utilisez le{" "}
            <Link href="/outils/calculateur-cout-construction-maroc" className="text-[#b5522a] underline font-semibold">calculateur de co\u00fbt de construction Bati.ma</Link>{" "}
            pour obtenir une estimation personnalis\u00e9e selon votre ville, surface et niveau de finitions. Vous pouvez ensuite demander un devis gratuit aupr\u00e8s d&apos;architectes v\u00e9rifi\u00e9s.
          </p>
          <Link
            href="/demande-devis"
            className="inline-block bg-[#b5522a] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#9a4523] transition-colors"
          >
            Demander un devis gratuit
          </Link>
        </div>

        <p className="mt-6 text-sm text-stone-500">
          Trouvez votre architecte sur{" "}
          <Link href="/architecte" className="text-[#b5522a] underline">
            Bati.ma — Annuaire des architectes au Maroc
          </Link>
        </p>
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-stone-900 mb-5">Questions fr\u00e9quentes</h2>
        <div className="space-y-4">
          {faq.map((f) => (
            <details key={f.q} className="group border border-stone-200 rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between px-4 py-3 cursor-pointer text-sm font-medium text-stone-800 hover:bg-stone-50">
                {f.q}
                <span className="text-stone-400 group-open:rotate-180 transition-transform">&#8595;</span>
              </summary>
              <div className="px-4 pb-4 pt-1 text-sm text-stone-600 leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
