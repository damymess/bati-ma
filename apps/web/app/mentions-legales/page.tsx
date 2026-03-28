import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — Bati.ma",
  robots: { index: false },
};

export default function MentionsLegalesPage() {
  return (
    <section className="py-14 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto prose prose-stone text-sm">
        <h1 className="text-2xl font-bold text-stone-900 mb-6">Mentions légales</h1>
        <p className="text-stone-600">
          <strong>Bati.ma</strong> est un annuaire en ligne dédié aux
          architectes et professionnels du design au Maroc.
        </p>
        <h2 className="text-lg font-semibold text-stone-800 mt-6 mb-2">Éditeur</h2>
        <p className="text-stone-600">
          Bati.ma — Maroc<br />
          Email : contact@bati.ma
        </p>
        <h2 className="text-lg font-semibold text-stone-800 mt-6 mb-2">Hébergement</h2>
        <p className="text-stone-600">Vercel Inc., San Francisco, CA, USA</p>
        <h2 className="text-lg font-semibold text-stone-800 mt-6 mb-2">Propriété intellectuelle</h2>
        <p className="text-stone-600">
          L&apos;ensemble du contenu de Bati.ma (textes, images, logotypes) est
          protégé par les droits d&apos;auteur. Toute reproduction est interdite sans
          autorisation préalable.
        </p>
        <h2 className="text-lg font-semibold text-stone-800 mt-6 mb-2">Données personnelles</h2>
        <p className="text-stone-600">
          Les données collectées via les formulaires de contact sont utilisées
          uniquement pour répondre à vos demandes et ne sont pas transmises à
          des tiers.
        </p>
      </div>
    </section>
  );
}
