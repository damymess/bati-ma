import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Bati.ma",
  description: "Contactez l'équipe Bati.ma pour inscrire votre cabinet ou signaler un problème.",
};

export default function ContactPage() {
  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-stone-900 mb-2">Contact</h1>
        <p className="text-stone-500 mb-8">
          Une question, un problème ou vous souhaitez inscrire votre cabinet ?
          Écrivez-nous.
        </p>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">Nom</label>
            <input
              type="text"
              className="w-full px-4 py-2.5 border border-stone-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#b5522a]/30"
              placeholder="Votre nom"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2.5 border border-stone-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#b5522a]/30"
              placeholder="votre@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">Message</label>
            <textarea
              rows={5}
              className="w-full px-4 py-2.5 border border-stone-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#b5522a]/30 resize-none"
              placeholder="Votre message..."
            />
          </div>
          <button className="w-full bg-[#b5522a] text-white font-medium py-3 rounded-lg hover:bg-[#9a4522] transition-colors text-sm">
            Envoyer
          </button>
        </div>
        <p className="text-xs text-stone-400 mt-6 text-center">
          Email : contact@bati.ma
        </p>
      </div>
    </section>
  );
}
