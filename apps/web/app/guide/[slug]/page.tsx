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

const GUIDE_CONTENT: Record<string, React.FC> = {
  "comment-choisir-architecte-maroc": GuideChoisir,
  "honoraires-architecte-maroc": GuideHonoraires,
  "permis-de-construire-maroc": GuidePermis,
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
