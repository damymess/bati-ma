import type { Metadata } from "next";
import Link from "next/link";
import { Users, BookOpen, TrendingUp, Award, MapPin, ExternalLink, Mail } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { AUTHORS } from "@/lib/authors";

export const metadata: Metadata = {
  title: "À propos de Bati.ma — Qui sommes-nous",
  description:
    "Bati.ma est l'annuaire de référence des architectes au Maroc. Fondée en 2025 par Imad Messaoudi, la plateforme compte 3 400+ architectes et 116 guides pratiques sur la construction au Maroc.",
  alternates: { canonical: "https://bati.ma/a-propos" },
  openGraph: {
    title: "À propos de Bati.ma — Annuaire architectes Maroc",
    description:
      "Fondée en 2025, bati.ma centralise 3 400+ architectes et 116 guides pratiques pour aider à trouver le professionnel adapté à votre projet de construction au Maroc.",
  },
};

export default function AboutPage() {
  const authors = Object.values(AUTHORS);

  // Schema Organization + Person enrichi
  const orgSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://bati.ma/#organization",
        name: "Bati.ma",
        url: "https://bati.ma",
        logo: {
          "@type": "ImageObject",
          url: "https://bati.ma/images/hero-villa.jpg",
          width: 1200,
          height: 630,
        },
        description:
          "Annuaire de référence des architectes au Maroc. 3 400+ architectes vérifiés, 116 guides pratiques.",
        foundingDate: "2025",
        founder: {
          "@type": "Person",
          "@id": "https://bati.ma/a-propos#imad",
        },
        areaServed: {
          "@type": "Country",
          name: "Maroc",
        },
        knowsAbout: [
          "Architecture au Maroc",
          "Construction résidentielle",
          "Réglementation BTP Maroc",
          "Barèmes CNOA",
          "Urbanisme",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          email: "contact@bati.ma",
          contactType: "customer service",
          availableLanguage: ["French", "Arabic"],
        },
        sameAs: [
          // À ajouter quand les réseaux seront actifs
        ],
      },
      ...authors.map((a) => ({
        "@type": "Person",
        "@id": `https://bati.ma/a-propos#${a.id}`,
        name: a.name,
        url: `https://bati.ma/a-propos#${a.id}`,
        jobTitle: a.role,
        description: a.bio,
        image: `https://bati.ma${a.avatar}`,
        knowsAbout: a.expertise,
        worksFor: { "@id": "https://bati.ma/#organization" },
        sameAs: [a.social.linkedin, a.social.twitter].filter(Boolean),
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "À propos" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#f5f0ea] to-white py-14 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#b5522a] text-sm font-medium uppercase tracking-widest mb-2">
            Qui sommes-nous
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold text-stone-900 mb-4">
            L&apos;annuaire de référence des architectes au Maroc
          </h1>
          <p className="text-stone-600 leading-relaxed text-lg max-w-2xl mx-auto">
            Bati.ma est né en 2025 avec une mission simple : aider les particuliers,
            promoteurs et MRE à trouver l&apos;architecte adapté à leur projet, avec
            des informations claires, vérifiées et actualisées sur le BTP marocain.
          </p>
        </div>
      </section>

      {/* Chiffres-clés */}
      <section className="py-10 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="pt-5 text-center">
                <Users className="h-6 w-6 text-[#b5522a] mx-auto mb-2" />
                <p className="text-2xl font-bold text-stone-900">3 400+</p>
                <p className="text-xs text-stone-500">Architectes référencés</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-5 text-center">
                <BookOpen className="h-6 w-6 text-[#b5522a] mx-auto mb-2" />
                <p className="text-2xl font-bold text-stone-900">116</p>
                <p className="text-xs text-stone-500">Guides pratiques</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-5 text-center">
                <MapPin className="h-6 w-6 text-[#b5522a] mx-auto mb-2" />
                <p className="text-2xl font-bold text-stone-900">14</p>
                <p className="text-xs text-stone-500">Villes couvertes</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-5 text-center">
                <TrendingUp className="h-6 w-6 text-[#b5522a] mx-auto mb-2" />
                <p className="text-2xl font-bold text-stone-900">2025</p>
                <p className="text-xs text-stone-500">Année de lancement</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-12 px-4 sm:px-6 bg-stone-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-stone-900 mb-5">Notre mission</h2>
          <div className="space-y-4 text-stone-600 leading-relaxed">
            <p>
              Le marché de la construction au Maroc est en pleine transformation : 25 millions
              de m² livrés chaque année, des milliers d&apos;architectes répartis dans tout le
              royaume, et une demande croissante de MRE souhaitant construire ou rénover depuis
              l&apos;étranger. Pourtant, il n&apos;existait aucun annuaire centralisé et à jour
              des architectes marocains, ni de ressource éditoriale fiable sur les prix, les
              démarches administratives et les pratiques du secteur.
            </p>
            <p>
              Bati.ma a été lancé pour combler ce vide. Nous vérifions les architectes
              (patente, agrément Ordre National, CNSS, assurance décennale), publions des guides
              pratiques actualisés qui s&apos;appuient sur le barème officiel CNOA et les textes
              de loi marocains (loi 16-89, RPS 2011, RTCM), et proposons un calculateur de budget
              construction gratuit.
            </p>
            <p>
              Notre engagement : <strong className="text-stone-900">transparence, vérification
              et pédagogie</strong>. Nous ne cachons pas les tarifs réels du marché, ni les
              pièges à éviter, ni la complexité administrative marocaine. Nous pensons que des
              particuliers bien informés font de meilleurs projets — et que des architectes
              présentés dans un cadre professionnel y gagnent aussi.
            </p>
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-stone-900 mb-5">L&apos;équipe</h2>
          <div className="space-y-6">
            {authors.map((a) => (
              <Card key={a.id} id={a.id}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-5 flex-wrap sm:flex-nowrap">
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-stone-900 text-white text-2xl font-bold">
                      {a.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-stone-900 text-lg">
                        {a.name}
                      </h3>
                      <p className="text-sm text-[#b5522a] font-medium mb-2">
                        {a.role} · Depuis {a.since}
                      </p>
                      <p className="text-sm text-stone-600 leading-relaxed mb-3">
                        {a.bio}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {a.expertise.map((exp) => (
                          <span
                            key={exp}
                            className="inline-flex items-center text-xs bg-stone-100 text-stone-700 px-2 py-0.5 rounded-full"
                          >
                            {exp}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        {a.social.linkedin && (
                          <a
                            href={a.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-stone-600 hover:text-[#b5522a]"
                          >
                            <ExternalLink className="h-4 w-4" /> LinkedIn
                          </a>
                        )}
                        {a.social.email && (
                          <a
                            href={`mailto:${a.social.email}`}
                            className="flex items-center gap-1 text-stone-600 hover:text-[#b5522a]"
                          >
                            <Mail className="h-4 w-4" /> {a.social.email}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-6 border-dashed">
            <CardContent className="pt-6 text-center">
              <Award className="h-8 w-8 text-stone-300 mx-auto mb-2" />
              <p className="text-sm text-stone-500">
                L&apos;équipe s&apos;agrandit. Architectes, juristes BTP, rédacteurs spécialisés
                sont les bienvenus.
              </p>
              <a
                href="mailto:contact@bati.ma?subject=Rejoindre%20l%27équipe%20Bati.ma"
                className="inline-block mt-3 text-sm text-[#b5522a] font-medium hover:underline"
              >
                Nous contacter →
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Méthodologie éditoriale */}
      <section className="py-12 px-4 sm:px-6 bg-stone-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-stone-900 mb-5">
            Notre méthodologie éditoriale
          </h2>
          <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
            <p>
              Chaque guide publié sur bati.ma suit un processus de vérification rigoureux :
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                <strong className="text-stone-900">Sources officielles</strong> en premier :
                textes de loi (SGG Maroc), barèmes CNOA, circulaires ministérielles, données
                des Agences Urbaines.
              </li>
              <li>
                <strong className="text-stone-900">Cross-validation terrain</strong> avec des
                architectes et bureaux d&apos;études exerçant dans les villes couvertes.
              </li>
              <li>
                <strong className="text-stone-900">Dates explicites</strong> : chaque guide
                affiche sa date de dernière mise à jour. Les prix sont revalidés au moins
                deux fois par an.
              </li>
              <li>
                <strong className="text-stone-900">Transparence sur les sources</strong> :
                chaque guide référence les textes et organismes cités en bas de page.
              </li>
            </ol>
            <p>
              Nous ne publions pas de contenu sponsorisé déguisé : si un architecte paie pour
              apparaître (abonnement payant), c&apos;est signalé par son statut &laquo; Premium &raquo;
              ou &laquo; Pro &raquo;, jamais dissimulé dans un article.
            </p>
          </div>
        </div>
      </section>

      {/* Contact final */}
      <section className="py-12 px-4 sm:px-6 bg-[#f5f0ea]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-stone-900 mb-3">
            Une question, un retour, une correction ?
          </h2>
          <p className="text-stone-600 mb-6">
            Nous lisons tous les emails. Si vous repérez une erreur factuelle dans un guide,
            nous corrigeons sous 48h.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:contact@bati.ma"
              className="inline-flex items-center justify-center gap-2 bg-[#b5522a] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#a0441f] transition-colors"
            >
              <Mail className="h-4 w-4" />
              contact@bati.ma
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-stone-700 border border-stone-200 px-6 py-3 rounded-full text-sm font-medium hover:bg-stone-50 transition-colors"
            >
              Formulaire de contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
