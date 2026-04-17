import type { Metadata } from "next";
import Link from "next/link";
import { Check, Crown, Zap, Star, Shield, ArrowRight, Users, TrendingUp, Award } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TarifsClient from "./tarifs-client";
import { fetchPublicStats } from "@/lib/api";

export const metadata: Metadata = {
  title: "Tarifs architectes — Recevez plus de projets qualifiés | Bati.ma",
  description:
    "Inscrivez votre cabinet d'architecture sur Bati.ma dès 499 MAD/mois. Leads qualifiés, badge vérifié, positionnement premium. Plans Essentiel, Pro et Elite.",
  alternates: { canonical: "https://bati.ma/architectes/tarifs" },
  openGraph: {
    title: "Tarifs architectes — Bati.ma",
    description: "Développez votre cabinet avec Bati.ma. 3 formules à partir de 499 MAD/mois.",
  },
};

const FAQ = [
  {
    q: "Comment fonctionne l'abonnement ?",
    a: "Vous choisissez votre plan (Essentiel, Pro ou Elite), payez en ligne par carte bancaire marocaine ou internationale, et votre compte est activé instantanément. Vous pouvez annuler à tout moment depuis votre dashboard.",
  },
  {
    q: "Qu'est-ce qu'un « contact débloqué » ?",
    a: "Chaque demande de devis client arrive sur Bati.ma avec les coordonnées masquées. Pour contacter le client, vous « débloquez » le contact. Le plan Essentiel inclut 15 débloquages/mois, Pro en inclut 50, Elite est illimité.",
  },
  {
    q: "Qu'est-ce que le Badge Vérifié bati.ma ?",
    a: "Un badge affiché sur votre profil qui atteste que nous avons vérifié votre patente, votre agrément OAM, votre CNSS et votre assurance décennale. Il augmente fortement la confiance des clients et votre taux de conversion. Inclus dans Pro et Elite.",
  },
  {
    q: "Qu'est-ce que la Shortlist ?",
    a: "Quand un client soumet un projet, seuls 3 architectes Pro/Elite de sa ville et de sa spécialité reçoivent le lead. Moins de concurrence = plus de chances de remporter le projet. Vous utilisez des crédits shortlist pour apparaître dans ces 3 propositions.",
  },
  {
    q: "Puis-je changer ou annuler mon plan ?",
    a: "Oui, à tout moment depuis votre dashboard. En cas de changement, la différence est calculée au prorata. L'annulation est effective à la fin de la période de facturation en cours.",
  },
  {
    q: "Mode de paiement ?",
    a: "Carte bancaire marocaine (CMI — prochainement) et carte internationale (Stripe). Virement bancaire possible pour les abonnements annuels Elite — contactez-nous.",
  },
  {
    q: "Y a-t-il un engagement ?",
    a: "Aucun engagement sur le plan mensuel (résiliable à tout moment). Le plan annuel offre -15% de réduction pour un engagement de 12 mois.",
  },
];

export default async function TarifsPage() {
  const stats = await fetchPublicStats();

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Architectes", href: "/inscription-architecte" },
          { label: "Tarifs" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#f5f0ea] to-white py-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#b5522a] text-sm font-medium uppercase tracking-widest mb-2">
            Pour les architectes
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold text-stone-900 mb-4">
            Développez votre cabinet avec Bati.ma
          </h1>
          <p className="text-stone-600 leading-relaxed max-w-2xl mx-auto text-lg mb-6">
            Recevez des demandes de devis qualifiées de clients prêts à lancer leur projet.
            <br className="hidden sm:block" />
            3 formules adaptées à votre stade de croissance.
          </p>

          {/* Preuve sociale */}
          <div className="inline-flex items-center gap-6 bg-white/80 backdrop-blur px-6 py-3 rounded-full border border-stone-200 mb-6 text-sm">
            <span className="flex items-center gap-2">
              <Users className="h-4 w-4 text-[#b5522a]" />
              <strong className="text-stone-900">{stats.architects_total.toLocaleString("fr-MA")}</strong>
              <span className="text-stone-600">architectes inscrits</span>
            </span>
            {stats.leads_this_week > 0 && (
              <span className="hidden sm:flex items-center gap-2 pl-6 border-l border-stone-200">
                <TrendingUp className="h-4 w-4 text-[#b5522a]" />
                <strong className="text-stone-900">{stats.leads_this_week}</strong>
                <span className="text-stone-600">demandes cette semaine</span>
              </span>
            )}
          </div>

          <div className="flex items-center justify-center gap-6 text-sm text-stone-500 flex-wrap">
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> Sans engagement
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> Annulable à tout moment
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" /> Support en français et arabe
            </span>
          </div>
        </div>
      </section>

      {/* Tarifs (client component pour toggle mensuel/annuel) */}
      <TarifsClient />

      {/* Social proof / bénéfices */}
      <section className="py-12 px-4 sm:px-6 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-stone-900 text-center mb-10">
            Pourquoi les architectes choisissent Bati.ma
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <Users className="h-10 w-10 text-[#b5522a] mx-auto mb-3" />
                <h3 className="font-semibold text-stone-900 mb-2">Trafic qualifié croissant</h3>
                <p className="text-sm text-stone-600">
                  Des milliers de clients marocains et MRE recherchent un architecte chaque mois. Notre référencement SEO vous connecte aux bonnes personnes.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <TrendingUp className="h-10 w-10 text-[#b5522a] mx-auto mb-3" />
                <h3 className="font-semibold text-stone-900 mb-2">Leads qualifiés</h3>
                <p className="text-sm text-stone-600">
                  Chaque demande est pré-qualifiée : budget, timing, type de projet. Vous recevez uniquement les clients sérieux.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Award className="h-10 w-10 text-[#b5522a] mx-auto mb-3" />
                <h3 className="font-semibold text-stone-900 mb-2">Badge Vérifié</h3>
                <p className="text-sm text-stone-600">
                  Vérification patente, OAM, CNSS et assurance décennale. Les clients font confiance aux architectes certifiés — votre taux de conversion explose.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-stone-900 mb-6 text-center">
            Questions fréquentes
          </h2>
          <div className="space-y-3">
            {FAQ.map((f) => (
              <details
                key={f.q}
                className="group border border-stone-200 rounded-lg overflow-hidden bg-white"
              >
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer text-sm font-medium text-stone-800 hover:bg-stone-50">
                  {f.q}
                  <span className="text-stone-400 group-open:rotate-180 transition-transform text-lg">↓</span>
                </summary>
                <div className="px-5 pb-4 pt-1 text-sm text-stone-600 leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-12 px-4 sm:px-6 bg-[#f5f0ea]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-stone-900 mb-3">
            Prêt à développer votre cabinet ?
          </h2>
          <p className="text-stone-600 mb-6">
            Inscription gratuite en 2 minutes. Pas de carte bancaire requise pour commencer.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/inscription-architecte">
              <Button className="bg-[#b5522a] hover:bg-[#a0441f] rounded-full px-6">
                Créer mon compte gratuit <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="rounded-full px-6">
                Parler à un conseiller
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
