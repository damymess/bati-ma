import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getGuideBySlug, GUIDE_SLUGS, GUIDES } from "@/lib/guides";
import { CITIES } from "@/lib/cities";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return GUIDE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
    openGraph: { title: guide.title, description: guide.description },
    alternates: { canonical: `https://bati.ma/guide/${slug}` },
  };
}

// Guide content components
function GuideChoisir() {
  const faq = [
    { q: "Comment vérifier qu'un architecte est bien inscrit à l'Ordre au Maroc ?", a: "Vous pouvez vérifier l'inscription d'un architecte sur le site de l'Ordre des Architectes du Maroc (ordre-architectes.ma) ou demander directement au professionnel son numéro d'inscription à l'Ordre régional dont il dépend. Tous les architectes inscrits sur Bati.ma ont été vérifiés." },
    { q: "Faut-il signer un contrat avec son architecte au Maroc ?", a: "Oui, il est fortement recommandé de signer un contrat de maîtrise d'œuvre avec votre architecte. Ce contrat doit préciser la mission confiée (conception, dépôt du permis de construire, suivi de chantier), le mode de calcul des honoraires, les délais et les conditions de résiliation." },
    { q: "Peut-on changer d'architecte en cours de projet ?", a: "Oui, mais cela engendre des frais supplémentaires. Si vous mettez fin au contrat avant la livraison, vous devrez payer les honoraires des phases déjà réalisées. Il est donc crucial de bien choisir son architecte dès le début." },
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
        <h2>1. Vérifier les qualifications et l&apos;inscription à l&apos;Ordre</h2>
        <p>
          Au Maroc, l&apos;exercice de la profession d&apos;architecte est réglementé par
          la <strong>loi 16-89 relative à l&apos;exercice de la profession
          d&apos;architecte</strong>. Seuls les architectes inscrits à l&apos;Ordre des
          Architectes peuvent signer les permis de construire. Avant de vous
          engager, demandez toujours le numéro d&apos;inscription de votre
          architecte.
        </p>

        <h2>2. Évaluer le portfolio et les réalisations</h2>
        <p>
          Un bon architecte doit être capable de vous montrer ses réalisations
          passées. Sur Bati.ma, chaque profil présente les projets réalisés
          avec photos, typologies (résidentiel, commercial, rénovation) et
          témoignages clients. Assurez-vous que le style de l&apos;architecte
          correspond à vos goûts.
        </p>

        <h2>3. Consulter au moins 3 professionnels</h2>
        <p>
          Ne vous fiez pas à un seul architecte. Rencontrez au minimum 3
          professionnels pour comparer :
        </p>
        <ul>
          <li>Leur compréhension de votre projet</li>
          <li>Leur approche créative</li>
          <li>Leurs honoraires et modes de facturation</li>
          <li>Leur disponibilité et leur équipe</li>
          <li>Leurs références clients</li>
        </ul>

        <h2>4. Comprendre les missions et les honoraires</h2>
        <p>
          Un architecte peut être missionné pour tout ou partie de votre
          projet :
        </p>
        <ul>
          <li><strong>Mission esquisse</strong> : premières idées et faisabilité</li>
          <li><strong>Mission APS/APD</strong> : avant-projets sommaire et définitif</li>
          <li><strong>Mission PC</strong> : dépôt du permis de construire</li>
          <li><strong>Mission PRO/EXE</strong> : plans d&apos;exécution détaillés</li>
          <li><strong>Mission DET/AOR</strong> : direction et réception des travaux</li>
        </ul>
        <p>
          Pour une mission complète, comptez entre{" "}
          <strong>8 et 15 % du montant des travaux TTC</strong>.
        </p>

        <h2>5. Vérifier les assurances professionnelles</h2>
        <p>
          Votre architecte doit être couvert par une{" "}
          <strong>assurance responsabilité civile professionnelle</strong> et
          une <strong>garantie décennale</strong> couvrant les dommages
          structurels pendant 10 ans après la livraison. Demandez les
          attestations d&apos;assurance avant de signer.
        </p>

        <h2>6. Questions à poser lors du premier rendez-vous</h2>
        <ul>
          <li>Depuis combien de temps exercez-vous ?</li>
          <li>Avez-vous réalisé des projets similaires au mien ?</li>
          <li>Qui sera mon interlocuteur principal au sein de votre cabinet ?</li>
          <li>Quel est votre délai moyen pour déposer un permis de construire ?</li>
          <li>Pouvez-vous me donner des références clients à contacter ?</li>
        </ul>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="font-semibold text-stone-900 mb-1">
            💡 Le conseil Bati.ma
          </p>
          <p className="text-sm text-stone-600">
            Utilisez notre annuaire pour comparer plusieurs architectes dans
            votre ville. Consultez les portfolios, lisez les avis clients et
            demandez plusieurs devis en quelques clics — gratuitement.
          </p>
        </div>
      </div>

      {/* FAQ */}
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

function GuideHonoraires() {
  return (
    <div className="prose-content">
      <h2>Les honoraires en pourcentage des travaux</h2>
      <p>
        C&apos;est le mode de calcul le plus courant au Maroc. Les honoraires sont
        calculés en pourcentage du montant HT des travaux. Ce pourcentage varie
        selon la complexité et le type de projet :
      </p>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-stone-100">
              <th className="text-left px-3 py-2 border border-stone-200 font-medium">Type de projet</th>
              <th className="text-left px-3 py-2 border border-stone-200 font-medium">Fourchette honoraires</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Villa individuelle", "8 – 12 %"],
              ["Immeuble résidentiel", "6 – 10 %"],
              ["Local commercial", "8 – 12 %"],
              ["Hôtel / tourisme", "10 – 15 %"],
              ["Rénovation riad", "12 – 18 %"],
              ["Architecture d'intérieur", "10 – 20 %"],
            ].map(([type, range]) => (
              <tr key={type} className="hover:bg-stone-50">
                <td className="px-3 py-2 border border-stone-200">{type}</td>
                <td className="px-3 py-2 border border-stone-200 text-[#b5522a] font-medium">{range}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Les honoraires au forfait</h2>
      <p>
        Pour les petits projets (plan 3D, esquisse, permis de construire
        simple), certains architectes proposent des forfaits fixes. Les tarifs
        pratiqués à Casablanca, Marrakech et Rabat varient généralement :
      </p>
      <ul>
        <li><strong>Plan simple avec permis de construire</strong> : 5 000 – 15 000 MAD</li>
        <li><strong>Plan villa jusqu&apos;à 200 m²</strong> : 15 000 – 40 000 MAD</li>
        <li><strong>Aménagement intérieur appartement</strong> : 8 000 – 25 000 MAD</li>
      </ul>

      <h2>Les honoraires au temps passé (régie)</h2>
      <p>
        Pour les missions de conseil ou les projets complexes à périmètre
        variable, les architectes facturent parfois à l&apos;heure. Le taux horaire
        d&apos;un architecte au Maroc est de <strong>300 à 800 MAD/heure</strong>{" "}
        selon son expérience.
      </p>

      <h2>Ce qui est inclus et ce qui ne l&apos;est pas</h2>
      <p>
        Vérifiez toujours ce que comprennent les honoraires proposés.
        Généralement <strong>inclus</strong> : plans architecturaux, dossier
        permis de construire, suivi de chantier hebdomadaire.
        <strong> Non inclus</strong> (en sus) : études béton armé (bureautude),
        études thermiques, géotechnique, frais de dossier communaux.
      </p>

      <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
        <p className="font-semibold text-stone-900 mb-1">Obtenez plusieurs devis</p>
        <p className="text-sm text-stone-600">
          Sur Bati.ma, comparez gratuitement les honoraires de plusieurs
          architectes dans votre ville avant de vous engager.
        </p>
      </div>
    </div>
  );
}

function GuidePermis() {
  return (
    <div className="prose-content">
      <h2>Quand faut-il un permis de construire au Maroc ?</h2>
      <p>
        Au Maroc, le permis de construire est obligatoire pour toute nouvelle
        construction et pour les travaux modifiant la structure ou l&apos;aspect
        extérieur d&apos;un bâtiment existant. La demande doit être déposée en mairie
        (commune) avant le début des travaux.
      </p>

      <h2>Rôle de l&apos;architecte dans la procédure</h2>
      <p>
        En vertu de la <strong>loi 25-90 relative aux lotissements,
        groupes d&apos;habitations et morcellements</strong> et de la{" "}
        <strong>loi 12-90 relative à l&apos;urbanisme</strong>, les dossiers de
        permis de construire doivent être établis et signés par un architecte
        agréé. L&apos;architecte est garant du respect des règles d&apos;urbanisme.
      </p>

      <h2>Composition du dossier de permis de construire</h2>
      <ul>
        <li>Formulaire de demande signé par le pétitionnaire et l&apos;architecte</li>
        <li>Plan de situation (1/5000 ou 1/2000)</li>
        <li>Plan de masse (1/500 ou 1/200)</li>
        <li>Plans des différents niveaux (1/100 ou 1/50)</li>
        <li>Coupes et façades</li>
        <li>Notice descriptive des matériaux</li>
        <li>Titre foncier ou acte de propriété</li>
        <li>Attestation de conformité du plan d&apos;aménagement</li>
      </ul>

      <h2>Délais d&apos;instruction</h2>
      <p>
        Le délai légal d&apos;instruction d&apos;un permis de construire est de{" "}
        <strong>30 à 60 jours</strong> selon la commune. En pratique, les délais
        varient :
      </p>
      <ul>
        <li><strong>Casablanca</strong> : 2 à 4 mois</li>
        <li><strong>Marrakech</strong> : 3 à 6 mois</li>
        <li><strong>Rabat</strong> : 2 à 5 mois (présence d&apos;une zone UNESCO)</li>
        <li><strong>Autres villes</strong> : 1 à 3 mois</li>
      </ul>

      <h2>Coût du permis de construire</h2>
      <p>
        Les frais de dossier en mairie sont calculés en fonction de la surface
        de plancher et de la localisation. Ils varient généralement entre{" "}
        <strong>0,5 et 2 % du coût estimé des travaux</strong>. Ces frais sont
        distincts des honoraires de l&apos;architecte.
      </p>

      <h2>Que faire en cas de refus ?</h2>
      <p>
        En cas de refus de permis, votre architecte doit vous expliquer les
        motifs et vous proposer une révision du projet. Il est possible de
        déposer un recours auprès de la commune ou du Wali de la région dans un
        délai de 30 jours suivant la notification du refus.
      </p>

      <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
        <p className="font-semibold text-stone-900 mb-1">Besoin d&apos;un architecte pour votre permis ?</p>
        <p className="text-sm text-stone-600">
          Trouvez un architecte expérimenté dans les démarches administratives
          via Bati.ma. Comparez les profils et demandez un devis gratuitement.
        </p>
      </div>
    </div>
  );
}

function GuideAmenagement() {
  const faq = [
    {
      q: "Où consulter le plan d'aménagement de ma commune au Maroc ?",
      a: "Vous pouvez consulter le plan d'aménagement (PA) auprès de l'Agence Urbaine compétente pour votre région. Chaque wilaya dispose d'une agence urbaine qui conserve les documents d'urbanisme. Vous pouvez également vous rendre directement à la commune (service technique urbanisme) pour obtenir un certificat de zonage.",
    },
    {
      q: "Qu'est-ce que le COS et comment le calculer ?",
      a: "Le COS (Coefficient d'Occupation du Sol) détermine la surface de plancher constructible par rapport à la surface du terrain. Par exemple, un terrain de 500 m² avec un COS de 1,5 vous permet de construire jusqu'à 750 m² de surface de plancher (tous niveaux confondus). Votre architecte vous aidera à optimiser votre projet en respectant ce coefficient.",
    },
    {
      q: "Mon terrain est en zone non aedificandi : que faire ?",
      a: "Une zone non aedificandi interdit toute construction. Si votre terrain est classé en zone non aedificandi (souvent en bordure de cours d'eau, de voie ferrée ou en zone protégée), il n'est pas constructible. Vous devez contacter la commune et l'Agence Urbaine pour explorer les possibilités de révision du PA ou de changement de destination.",
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
        <h2>1. Qu&apos;est-ce qu&apos;un plan d&apos;aménagement au Maroc ?</h2>
        <p>
          Le <strong>plan d&apos;aménagement (PA)</strong> est un document
          d&apos;urbanisme réglementaire établi en vertu de la{" "}
          <strong>loi 12-90 relative à l&apos;urbanisme</strong>. Il définit les
          règles d&apos;utilisation des sols pour chaque parcelle d&apos;un
          territoire communal : ce qu&apos;on peut construire, où et comment.
          Avant d&apos;acheter un terrain ou de déposer un permis de construire,
          il est indispensable de consulter le PA.
        </p>

        <h2>2. Les zones réglementaires du PA</h2>
        <p>
          Le plan d&apos;aménagement découpe le territoire en zones dont les
          principales sont :
        </p>
        <ul>
          <li><strong>Zone résidentielle (R)</strong> : villas, immeubles d&apos;habitation, logements collectifs</li>
          <li><strong>Zone commerciale (C)</strong> : commerces, bureaux, activités de service</li>
          <li><strong>Zone industrielle (I)</strong> : entrepôts, ateliers, industries légères</li>
          <li><strong>Zone agricole (A)</strong> : terres agricoles, généralement inconstructibles</li>
          <li><strong>Zone d&apos;équipement (E)</strong> : écoles, hôpitaux, équipements publics</li>
          <li><strong>Zone non aedificandi (N)</strong> : zones inconstructibles (berges, pentes, zones protégées)</li>
        </ul>

        <h2>3. COS, CES et hauteurs maximales</h2>
        <p>
          Pour chaque zone, le PA fixe trois indicateurs clés :
        </p>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-stone-100">
                <th className="text-left px-3 py-2 border border-stone-200 font-medium">Indicateur</th>
                <th className="text-left px-3 py-2 border border-stone-200 font-medium">Définition</th>
                <th className="text-left px-3 py-2 border border-stone-200 font-medium">Exemple</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["COS", "Coefficient d'Occupation du Sol — surface de plancher max / surface terrain", "COS 1,5 → 500 m² terrain = 750 m² plancher max"],
                ["CES", "Coefficient d'Emprise au Sol — surface au sol occupée / surface terrain", "CES 0,5 → 500 m² terrain = 250 m² d'emprise max"],
                ["Hauteur max", "Nombre de niveaux ou hauteur en mètres autorisée", "R+2 ou 10 m à l'égout"],
              ].map(([ind, def, ex]) => (
                <tr key={ind} className="hover:bg-stone-50">
                  <td className="px-3 py-2 border border-stone-200 font-medium text-[#b5522a]">{ind}</td>
                  <td className="px-3 py-2 border border-stone-200">{def}</td>
                  <td className="px-3 py-2 border border-stone-200 text-stone-500 text-xs">{ex}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>4. Comment consulter le PA de votre commune</h2>
        <p>
          Plusieurs démarches permettent d&apos;accéder aux informations du plan
          d&apos;aménagement :
        </p>
        <ul>
          <li><strong>Agence Urbaine</strong> : chaque grande ville dispose d&apos;une agence (ex. Agence Urbaine de Casablanca, Agence Urbaine de Marrakech-Safi). Demandez un <em>certificat de zonage</em> pour votre parcelle.</li>
          <li><strong>Service technique de la commune</strong> : les agents d&apos;urbanisme peuvent vous indiquer oralement la zone de votre terrain.</li>
          <li><strong>Votre architecte</strong> : tout architecte expérimenté sait lire et interpréter un PA ; il peut effectuer les démarches à votre place.</li>
        </ul>

        <h2>5. Rapport entre PA et permis de construire</h2>
        <p>
          Le plan d&apos;aménagement est le cadre : votre projet doit s&apos;y
          inscrire pour qu&apos;un permis de construire soit accordé. Lors du
          dépôt du dossier en mairie, l&apos;architecte atteste que le projet
          respecte les règles du PA (zone, COS, CES, hauteur, reculs, façade).
          Un dossier non conforme au PA sera systématiquement refusé.
        </p>

        <h2>6. Rôle de l&apos;architecte dans la lecture du PA</h2>
        <p>
          L&apos;architecte est le seul professionnel habilité à vous donner une
          interprétation technique et juridique du plan d&apos;aménagement. Il
          traduit les règles abstraites du PA en possibilités concrètes pour
          votre projet : surface constructible, nombre d&apos;étages, volumes
          autorisés, marges de retrait obligatoires. Avant d&apos;acheter un
          terrain, consultez un architecte pour éviter les mauvaises surprises.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="font-semibold text-stone-900 mb-1">
            💡 Le conseil Bati.ma
          </p>
          <p className="text-sm text-stone-600">
            Avant de signer un compromis d&apos;achat de terrain, demandez à un
            architecte inscrit sur Bati.ma de vérifier le zonage et les
            droits à construire. Une heure de conseil peut vous éviter des
            années de procédures.
          </p>
        </div>
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

function GuideVilla() {
  const faq = [
    {
      q: "Faut-il obligatoirement un architecte pour construire une villa au Maroc ?",
      a: "Oui. Conformément à la loi 16-89, tout dossier de permis de construire au Maroc doit être signé par un architecte agréé, inscrit à l'Ordre des Architectes. Sans signature d'architecte, votre permis ne sera pas accordé. Pour les constructions dépassant 150 m², la présence de l'architecte sur chantier est également obligatoire.",
    },
    {
      q: "Quel est le coût moyen de construction d'une villa au Maroc en 2026 ?",
      a: "Le coût de construction varie entre 2 500 et 5 000 MAD/m² selon la région, les matériaux et le niveau de finition. À Casablanca et Rabat, comptez 3 500 à 5 000 MAD/m² pour des finitions standards. À Marrakech, les prix sont similaires mais les finitions de style marocain (zellige, tadelakt) peuvent augmenter le budget. Dans les villes secondaires (Agadir, Fès), les coûts sont 15 à 20 % moins élevés.",
    },
    {
      q: "Combien de temps prend la conception d'un plan de villa ?",
      a: "La phase de conception architecturale (avant-projet sommaire, avant-projet définitif, plans d'exécution) prend généralement 4 à 8 semaines selon la complexité du projet. Le dépôt et l'obtention du permis de construire ajoutent 2 à 6 mois selon la commune. Prévoyez en tout 6 à 9 mois entre le premier rendez-vous avec l'architecte et le début du chantier.",
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
        <h2>1. Les styles de villas au Maroc</h2>
        <p>
          Le Maroc offre une richesse architecturale unique qui se traduit dans
          les villas contemporaines par plusieurs tendances majeures :
        </p>
        <ul>
          <li>
            <strong>Villa marocaine traditionnelle</strong> : patio intérieur,
            arches en fer à cheval, zellige, bois de cèdre sculpté, fontaine
            centrale. Style dominant à Marrakech et Fès.
          </li>
          <li>
            <strong>Villa moderne minimaliste</strong> : lignes droites, grandes
            baies vitrées, toiture terrasse, béton apparent ou enduit blanc.
            Populaire à Casablanca et Rabat.
          </li>
          <li>
            <strong>Villa méditerranéenne</strong> : enduit ocre ou blanc,
            pergolas, jardin exubérant, piscine. Très répandue à Agadir et sur
            la côte atlantique.
          </li>
          <li>
            <strong>Villa contemporaine néo-marocaine</strong> : fusion des
            codes traditionnels (moucharabieh, tadelakt) et de l&apos;architecture
            moderne. Tendance en forte croissance.
          </li>
        </ul>

        <h2>2. Superficies et configurations courantes</h2>
        <p>
          Les villas construites au Maroc se répartissent généralement en trois
          catégories selon leur superficie :
        </p>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-stone-100">
                <th className="text-left px-3 py-2 border border-stone-200 font-medium">Catégorie</th>
                <th className="text-left px-3 py-2 border border-stone-200 font-medium">Superficie</th>
                <th className="text-left px-3 py-2 border border-stone-200 font-medium">Configuration type</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Petite villa R+1", "150 – 250 m²", "3–4 chambres, salon, séjour, 2 SDB"],
                ["Villa moyenne R+1/R+2", "250 – 400 m²", "4–5 chambres, double salon, cuisine américaine, 3 SDB, piscine"],
                ["Grande villa R+2/R+3", "400 – 800 m²", "5–7 chambres, patio, hammam, salle de cinéma, personnel"],
              ].map(([cat, sup, config]) => (
                <tr key={cat} className="hover:bg-stone-50">
                  <td className="px-3 py-2 border border-stone-200 font-medium">{cat}</td>
                  <td className="px-3 py-2 border border-stone-200 text-[#b5522a]">{sup}</td>
                  <td className="px-3 py-2 border border-stone-200 text-stone-500 text-xs">{config}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>3. Les étapes de conception d&apos;un plan de villa</h2>
        <ul>
          <li><strong>Esquisse (ESQ)</strong> : premières idées, organisation générale des espaces, volumétrie — 1 à 2 semaines</li>
          <li><strong>Avant-Projet Sommaire (APS)</strong> : plans à l&apos;échelle 1/100, surfaces de chaque pièce, orientation — 2 semaines</li>
          <li><strong>Avant-Projet Définitif (APD)</strong> : plans définitifs, façades, coupes, intégration des réseaux — 2 à 3 semaines</li>
          <li><strong>Dossier Permis de Construire (PC)</strong> : plans réglementaires, notice descriptive, dépôt en mairie</li>
          <li><strong>Plans d&apos;Exécution (PRO/EXE)</strong> : plans de détail pour les entreprises, plans béton armé (bureau d&apos;études)</li>
        </ul>

        <h2>4. Ce que comprend un plan complet</h2>
        <p>
          Un dossier architectural complet pour une villa comprend :
        </p>
        <ul>
          <li>Plan de situation (localisation du terrain)</li>
          <li>Plan de masse avec cotes, reculs et emprise</li>
          <li>Plans de chaque niveau (RDC, R+1…) à 1/100</li>
          <li>Coupes transversales et longitudinales</li>
          <li>Les 4 façades (nord, sud, est, ouest)</li>
          <li>Détails constructifs (escalier, menuiseries, fondations)</li>
          <li>Plans des réseaux (eau, électricité, assainissement)</li>
        </ul>

        <h2>5. Coûts de construction par ville en 2026</h2>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-stone-100">
                <th className="text-left px-3 py-2 border border-stone-200 font-medium">Ville</th>
                <th className="text-left px-3 py-2 border border-stone-200 font-medium">Finition standard</th>
                <th className="text-left px-3 py-2 border border-stone-200 font-medium">Finition haut de gamme</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Casablanca", "3 500 – 4 500 MAD/m²", "5 000 – 7 000 MAD/m²"],
                ["Rabat", "3 200 – 4 200 MAD/m²", "4 800 – 6 500 MAD/m²"],
                ["Marrakech", "3 000 – 4 000 MAD/m²", "4 500 – 7 500 MAD/m²"],
                ["Agadir", "2 800 – 3 800 MAD/m²", "4 000 – 6 000 MAD/m²"],
                ["Tanger", "3 000 – 4 000 MAD/m²", "4 500 – 6 500 MAD/m²"],
                ["Fès / Meknès", "2 500 – 3 500 MAD/m²", "4 000 – 5 500 MAD/m²"],
              ].map(([ville, std, haut]) => (
                <tr key={ville} className="hover:bg-stone-50">
                  <td className="px-3 py-2 border border-stone-200 font-medium">{ville}</td>
                  <td className="px-3 py-2 border border-stone-200">{std}</td>
                  <td className="px-3 py-2 border border-stone-200 text-[#b5522a]">{haut}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="font-semibold text-stone-900 mb-1">
            💡 Le conseil Bati.ma
          </p>
          <p className="text-sm text-stone-600">
            Trouvez un architecte spécialisé dans la conception de villas dans
            votre ville sur Bati.ma. Consultez les portfolios, comparez les
            styles et demandez plusieurs devis gratuitement.
          </p>
        </div>
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

function GuideRiadRenovation() {
  const faq = [
    {
      q: "Faut-il un architecte pour rénover un riad dans la médina de Marrakech ?",
      a: "Oui, un architecte agréé est indispensable pour tout projet de rénovation dans la médina de Marrakech. L'ADER-Fès et les services de l'urbanisme de la wilaya imposent un dossier technique signé par un architecte pour tout travaux modifiant la structure ou l'aspect extérieur. Pour les riads classés ou en zone de sauvegarde, des contraintes supplémentaires s'appliquent.",
    },
    {
      q: "Quel budget prévoir pour rénover un riad à Marrakech ?",
      a: "Le budget dépend de l'état du riad et du niveau de finition souhaité. Pour une rénovation légère (rafraîchissement sans toucher à la structure) : 50 000 à 150 000 MAD. Pour une rénovation complète avec artisanat traditionnel (zellige, plâtre sculpté, cèdre) : 200 000 à 500 000 MAD. Pour une transformation en maison d'hôtes haut de gamme : 500 000 à 2 000 000 MAD.",
    },
    {
      q: "Peut-on transformer un riad en maison d'hôtes à Marrakech ?",
      a: "Oui, c'est légal et très répandu. Il faut obtenir une autorisation d'exploitation auprès du Ministère du Tourisme et de la commune. Le projet doit respecter les normes d'accessibilité, de sécurité incendie et d'hygiène. Un architecte expérimenté dans la réhabilitation du patrimoine peut vous accompagner dans toutes ces démarches.",
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
        <h2>1. Qu&apos;est-ce qu&apos;un riad ?</h2>
        <p>
          Un <strong>riad</strong> (de l&apos;arabe <em>ryad</em>, jardin) est
          une maison traditionnelle du monde arabo-andalou caractérisée par son{" "}
          <strong>patio central</strong> ouvert vers le ciel. Contrairement à la
          façade sobre et fermée côté rue, l&apos;intérieur est un monde de
          lumière, de verdure et d&apos;ornements raffinés. Les riads de
          Marrakech se distinguent par leur style <strong>hispano-mauresque</strong>{" "}
          avec zellige multicolore, colonnes en marbre, plâtre sculpté et bois
          de cèdre finement ouvragé.
        </p>

        <h2>2. Spécificités de la médina de Marrakech</h2>
        <p>
          La médina de Marrakech est inscrite au{" "}
          <strong>Patrimoine Mondial de l&apos;UNESCO depuis 1985</strong>. Cette
          classification impose des règles strictes pour toute rénovation :
        </p>
        <ul>
          <li>Interdiction de modifier les façades donnant sur la rue sans autorisation</li>
          <li>Matériaux traditionnels privilégiés (tadelakt, zellige, plâtre naturel, bois de cèdre)</li>
          <li>Maintien du gabarit et de la volumétrie existants</li>
          <li>Consultation obligatoire du Service de Sauvegarde de la Médina de Marrakech</li>
          <li>Toute surélévation est soumise à une étude d&apos;impact patrimonial</li>
        </ul>

        <h2>3. Les étapes d&apos;une rénovation de riad</h2>
        <ul>
          <li><strong>Diagnostic technique</strong> : état des fondations, charpente, réseaux, humidité — 1 à 2 semaines avec un architecte et bureaux d&apos;études spécialisés</li>
          <li><strong>Programme architectural</strong> : définition des usages (habitation, maison d&apos;hôtes, location saisonnière), nombre de chambres, espaces communs</li>
          <li><strong>Dossier de permis</strong> : plans de rénovation, notice patrimoniale, dépôt auprès de la commune Marrakech-Médina</li>
          <li><strong>Sélection des artisans</strong> : zelligeurs, gypsiers, charpentiers cèdre, fontainiers — prévoir 3 à 5 corps de métier spécialisés</li>
          <li><strong>Suivi de chantier</strong> : présence hebdomadaire de l&apos;architecte, réception des travaux par corps de métier</li>
        </ul>

        <h2>4. Budget rénovation riad : les fourchettes réalistes</h2>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-stone-100">
                <th className="text-left px-3 py-2 border border-stone-200 font-medium">Type de rénovation</th>
                <th className="text-left px-3 py-2 border border-stone-200 font-medium">Budget estimatif</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Rafraîchissement (peinture, sanitaires, luminaires)", "50 000 – 150 000 MAD"],
                ["Rénovation partielle (électricité, plomberie, revêtements)", "150 000 – 350 000 MAD"],
                ["Rénovation complète avec artisanat traditionnel", "350 000 – 700 000 MAD"],
                ["Réhabilitation totale + transformation maison d'hôtes", "700 000 – 2 000 000 MAD"],
              ].map(([type, budget]) => (
                <tr key={type} className="hover:bg-stone-50">
                  <td className="px-3 py-2 border border-stone-200">{type}</td>
                  <td className="px-3 py-2 border border-stone-200 text-[#b5522a] font-medium">{budget}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>5. Les artisans spécialisés : savoir-faire indispensables</h2>
        <ul>
          <li><strong>Zelligeur</strong> : pose de carreaux de céramique émaillée artisanale. Comptez 800 à 1 500 MAD/m² selon la complexité du motif.</li>
          <li><strong>Gypsier (plâtrier-sculpteur)</strong> : réalisation des moucharabiehs, frises et coupoles en plâtre sculpté. Tarif journalier : 400 à 800 MAD.</li>
          <li><strong>Charpentier cèdre</strong> : portes, fenêtres, plafonds à caissons en bois de cèdre de l&apos;Atlas. Budget variable selon la surface et la complexité des motifs.</li>
          <li><strong>Tadelakteur</strong> : enduit à base de chaux naturelle, imperméable, utilisé dans les hammams et salles de bain. 400 à 900 MAD/m².</li>
          <li><strong>Fontainier</strong> : installation de fontaines traditionnelles en marbre ou zellige au centre du patio. Sur devis.</li>
        </ul>

        <h2>6. Transformer un riad en maison d&apos;hôtes</h2>
        <p>
          Un riad rénové peut générer un <strong>excellent retour sur investissement</strong>{" "}
          via la location saisonnière ou la maison d&apos;hôtes. Marrakech reçoit
          plus de 3 millions de touristes par an, et les riads bien situés
          affichent des taux d&apos;occupation supérieurs à 70 %. Pour exploiter
          légalement une maison d&apos;hôtes, vous devez :
        </p>
        <ul>
          <li>Obtenir une <strong>autorisation d&apos;exploitation touristique</strong> auprès de la délégation régionale du tourisme</li>
          <li>Respecter les normes de classement (1 à 5 clés pour les maisons d&apos;hôtes)</li>
          <li>S&apos;immatriculer à la patente et à la TVA (si CA &gt; 500 000 MAD)</li>
          <li>Souscrire une assurance responsabilité civile professionnelle</li>
        </ul>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="font-semibold text-stone-900 mb-1">
            💡 Le conseil Bati.ma
          </p>
          <p className="text-sm text-stone-600">
            Confiez la rénovation de votre riad à un architecte spécialisé en
            réhabilitation du patrimoine. Sur Bati.ma, filtrez par spécialité
            &quot;Rénovation et patrimoine&quot; pour trouver les experts à Marrakech.
          </p>
        </div>
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

function GuideArchitectureMaro() {
  const faq = [
    {
      q: "Quelle est la caractéristique principale de l'architecture marocaine ?",
      a: "L'architecture marocaine se distingue par son organisation autour d'un espace central (patio ou cour) qui apporte lumière et ventilation naturelle. Cette logique d'introversion — façades fermées sur rue, richesse intérieure — est héritée de l'architecture arabe et perse. Les ornements géométriques (zellige, moucharabieh, plâtre sculpté) y jouent un rôle structurant, transcrivant les mathématiques islamiques en formes décoratives.",
    },
    {
      q: "Quels architectes marocains font référence en architecture contemporaine ?",
      a: "Parmi les architectes marocains contemporains les plus reconnus : Elie Mouyal (Marrakech, fusion riad et modernité), Aziz Lazrak (Casablanca, architecture publique), et de nombreux bureaux d'études comme AMUR, Kilo Architecture ou Driss Kettani Architecte. Ces professionnels réinterprètent les codes traditionnels avec des matériaux et techniques modernes.",
    },
    {
      q: "Y a-t-il des différences architecturales entre les villes marocaines ?",
      a: "Oui, chaque grande ville a ses spécificités. Fès conserve l'architecture médiévale mérinide la plus authentique avec ses derbs (ruelles) et madrasas. Marrakech est connue pour ses riads et palais saadiens aux décors somptueux. Casablanca présente un remarquable héritage Art Déco des années 1930-1940. Essaouira a son style andalou-portugais unique. Chaque ville a développé des traditions locales de matériaux et de décors.",
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
        <h2>1. Histoire de l&apos;architecture marocaine</h2>
        <p>
          L&apos;architecture marocaine s&apos;est construite sur plus de dix siècles à
          travers les grandes dynasties berbères et arabes qui ont façonné le
          pays :
        </p>
        <ul>
          <li>
            <strong>Almoravides (XI–XIIe s.)</strong> : fondateurs de Marrakech,
            ils importent l&apos;art andalou d&apos;Espagne et créent le premier style
            marocain unifié — mosquée Koutoubia, premier palais royal.
          </li>
          <li>
            <strong>Almohades (XIIe–XIIIe s.)</strong> : architecte de Rabat,
            tour Hassan, Koutoubia de Marrakech. Style épuré, géométrique, de
            grande sobriété.
          </li>
          <li>
            <strong>Mérinides (XIIIe–XVe s.)</strong> : âge d&apos;or de l&apos;architecture
            marocaine. Médersas de Fès (Bou Inania, El Attarine), palais
            ornés de zellige et de plâtre sculpté d&apos;une finesse inégalée.
          </li>
          <li>
            <strong>Saadiens (XVIe–XVIIe s.)</strong> : tombeaux saadiens de
            Marrakech, palais El Badi. Apport de l&apos;influence ottomane et du
            marbre de Carrare.
          </li>
          <li>
            <strong>Alaouites (XVIIe s. à nos jours)</strong> : Palais Royal
            de Fès, Mausolée Mohammed V à Rabat. Synthèse des styles antérieurs
            portée à sa quintessence.
          </li>
        </ul>

        <h2>2. Les éléments architecturaux emblématiques</h2>
        <ul>
          <li>
            <strong>Zellige</strong> : carreaux de céramique émaillée découpés à
            la main et assemblés en mosaïques géométriques. Technique née à Fès
            au Xe siècle, toujours pratiquée par les artisans maâlems.
          </li>
          <li>
            <strong>Moucharabieh</strong> : grille en bois de cèdre finement
            découpée permettant de voir sans être vu, de ventiler et de filtrer
            la lumière. Élément central de la vie privée en architecture islamique.
          </li>
          <li>
            <strong>Arc en fer à cheval</strong> : arc dont le profil dépasse le
            demi-cercle, signature visuelle de l&apos;architecture hispano-mauresque.
            On le retrouve dans les portes de médina, les galeries de palais
            et les mosquées.
          </li>
          <li>
            <strong>Patio / Riyad</strong> : cour intérieure à ciel ouvert,
            souvent agrémentée d&apos;une fontaine et de végétation. Cœur
            climatique et social de la maison marocaine.
          </li>
          <li>
            <strong>Tadelakt</strong> : enduit à base de chaux naturelle polie
            à la main, imperméable et lumineux. Originaire de Marrakech, il est
            aujourd&apos;hui exporté dans le monde entier.
          </li>
          <li>
            <strong>Zouaq</strong> : peintures polychromes sur bois et plâtre,
            motifs floraux et géométriques qui ornent les plafonds et les
            balustrades des palais et mosquées.
          </li>
        </ul>

        <h2>3. Styles régionaux au Maroc</h2>
        <p>
          Chaque grande ville marocaine a développé ses propres traditions
          architecturales :
        </p>
        <ul>
          <li>
            <strong>Fès</strong> : style médiéval mérinide le plus préservé.
            Médinas labyrinthiques, derbs (impasses privées), médersas aux
            zellige bleus et verts caractéristiques.
          </li>
          <li>
            <strong>Marrakech</strong> : ville rose (pisé et ocre), riads aux
            patios fleuris, palmeraie, architecture saadienne et alaouite.
            Forte influence andalouse.
          </li>
          <li>
            <strong>Casablanca</strong> : patrimoine Art Déco exceptionnel des
            années 1930 (architectes Marius Boyer, Henri Prost). Gratte-ciels
            contemporains au bord de l&apos;Atlantique. Architecture hybride
            franco-marocaine.
          </li>
          <li>
            <strong>Essaouira</strong> : architecture portugaise du XVIe siècle
            revisitée par les Alaouites. Ramparts, médina à damiers, fenêtres
            bleues sur fond blanc — style unique au Maroc.
          </li>
          <li>
            <strong>Rabat</strong> : ville royale mêlant architecture médiévale
            (Kasbah des Oudaïas, Tour Hassan) et modernisme du XXe siècle.
            Nombreux bâtiments officiels en style néo-mauresque.
          </li>
        </ul>

        <h2>4. L&apos;architecture contemporaine marocaine</h2>
        <p>
          Depuis les années 1990, une génération d&apos;architectes marocains
          formés en Europe et au Maroc réinterprète le vocabulaire traditionnel
          avec des matériaux et des technologies modernes :
        </p>
        <ul>
          <li>Façades en béton perforé reprenant les motifs du moucharabieh</li>
          <li>Cours intérieures climatisées naturellement par effet cheminée</li>
          <li>Zellige utilisé sur des volumes contemporains épurés</li>
          <li>Tadelakt dans des salles de bain design à l&apos;international</li>
          <li>Structures métalliques légères sur volumétries traditionnelles</li>
        </ul>
        <p>
          Cette architecture néo-marocaine est aujourd&apos;hui reconnue
          internationalement et plébiscitée pour les hôtels de luxe, les
          résidences secondaires et les sièges d&apos;entreprises.
        </p>

        <h2>5. Faire appel à un architecte spécialisé</h2>
        <p>
          La maîtrise des techniques traditionnelles marocaines — zellige,
          plâtre sculpté, tadelakt, bois de cèdre — requiert une formation
          spécifique et une connaissance fine des artisans locaux. Un
          architecte spécialisé en <strong>architecture marocaine et réhabilitation
          du patrimoine</strong> saura :
        </p>
        <ul>
          <li>Respecter les contraintes des zones classées (UNESCO, ADER)</li>
          <li>Sélectionner et coordonner les maâlems artisans qualifiés</li>
          <li>Intégrer les technologies modernes (isolation, climatisation) sans dénaturer l&apos;authenticité</li>
          <li>Optimiser les coûts en combinant artisanat traditionnel et matériaux industriels</li>
        </ul>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="font-semibold text-stone-900 mb-1">
            💡 Le conseil Bati.ma
          </p>
          <p className="text-sm text-stone-600">
            Pour un projet en architecture marocaine authentique, recherchez
            sur Bati.ma les architectes ayant des réalisations en réhabilitation
            de médina ou en construction traditionnelle. Le portfolio parle
            plus que les mots.
          </p>
        </div>
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

const GUIDE_CONTENT: Record<string, React.FC> = {
  "comment-choisir-architecte-maroc": GuideChoisir,
  "honoraires-architecte-maroc": GuideHonoraires,
  "permis-de-construire-maroc": GuidePermis,
  "plan-amenagement-maroc": GuideAmenagement,
  "plan-villa-maroc": GuideVilla,
  "renovation-riad-marrakech": GuideRiadRenovation,
  "architecture-marocaine": GuideArchitectureMaro,
};

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const GuideContent = GUIDE_CONTENT[slug];
  const otherGuides = GUIDES.filter((g) => g.slug !== slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    author: { "@type": "Organization", name: "Bati.ma" },
    publisher: { "@type": "Organization", name: "Bati.ma", url: "https://bati.ma" },
    url: `https://bati.ma/guide/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Breadcrumb */}
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 pt-4 pb-0 text-xs text-stone-400">
        <Link href="/" className="hover:text-[#b5522a]">Accueil</Link>
        {" › "}
        <span className="text-stone-600">{guide.category}</span>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#f5f0ea] to-white py-10 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs text-[#b5522a] font-semibold uppercase tracking-widest">
            {guide.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mt-2 mb-3 leading-tight">
            {guide.title}
          </h1>
          <p className="text-stone-600 leading-relaxed mb-3">{guide.description}</p>
          <p className="text-xs text-stone-400">Lecture : {guide.readTime}</p>
        </div>
      </section>

      {/* Content */}
      <article className="py-10 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-stone-900 [&_h2]:mt-8 [&_h2]:mb-3 [&_p]:text-stone-600 [&_p]:leading-relaxed [&_p]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_ul]:text-stone-600 [&_ul]:text-sm [&_li]:leading-relaxed">
          {GuideContent && <GuideContent />}
        </div>
      </article>

      {/* CTA */}
      <section className="py-10 px-4 sm:px-6 bg-[#f5f0ea]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold text-stone-900 mb-2">
            Trouvez votre architecte maintenant
          </h2>
          <p className="text-stone-500 text-sm mb-5">
            Comparez les profils, portfolios et tarifs dans votre ville
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {CITIES.slice(0, 4).map((c) => (
              <Link
                key={c.slug}
                href={`/architecte/${c.slug}`}
                className="bg-white border border-stone-200 text-stone-700 text-sm px-4 py-2 rounded-full hover:border-[#b5522a] hover:text-[#b5522a] transition-colors"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other guides */}
      <section className="py-10 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-lg font-semibold text-stone-900 mb-4">
            Autres guides
          </h2>
          <div className="space-y-3">
            {otherGuides.map((g) => (
              <Link
                key={g.slug}
                href={`/guide/${g.slug}`}
                className="block bg-stone-50 border border-stone-100 rounded-lg p-4 hover:border-[#b5522a]/30 transition-colors"
              >
                <p className="text-xs text-[#b5522a] font-medium uppercase tracking-wide mb-1">
                  {g.category}
                </p>
                <h3 className="font-medium text-stone-900 text-sm">{g.title}</h3>
                <p className="text-xs text-stone-500 mt-0.5">{g.description.slice(0, 80)}...</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
