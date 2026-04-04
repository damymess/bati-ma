"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { submitContactForm } from "@/lib/api";

type FormState = { name: string; email: string; message: string };
type Touched = Record<keyof FormState, boolean>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(form: FormState) {
  const errors: Partial<Record<keyof FormState, string>> = {};
  if (!form.name || form.name.trim().length < 2)
    errors.name = "Veuillez entrer votre nom (min. 2 caractères)";
  if (!form.email || !EMAIL_RE.test(form.email.trim()))
    errors.email = "Format email invalide";
  if (!form.message || form.message.trim().length < 10)
    errors.message = "Votre message est trop court (min. 10 caractères)";
  return errors;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState<Touched>({ name: false, email: false, message: false });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const errors = validate(form);
  const hasErrors = Object.keys(errors).length > 0;

  const blur = (field: keyof FormState) =>
    setTouched((prev) => ({ ...prev, [field]: true }));

  const update = (field: keyof FormState, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (hasErrors) return;

    setLoading(true);
    setError(null);
    try {
      await submitContactForm({
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
      });
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="max-w-md text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle2 className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="mt-4 text-2xl font-bold text-stone-900">
            Message envoyé !
          </h1>
          <p className="mt-2 text-stone-500">
            Nous avons bien reçu votre message. Nous vous répondrons dans les
            plus brefs délais.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-stone-900 mb-2">Contact</h1>
        <p className="text-stone-500 mb-8">
          Une question, un problème ou vous souhaitez inscrire votre cabinet ?
          Écrivez-nous.
        </p>
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {/* Nom */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">
              Nom
            </label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              onBlur={() => blur("name")}
              className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 transition-colors ${
                touched.name && errors.name
                  ? "border-red-400 focus:ring-red-300"
                  : touched.name && !errors.name
                  ? "border-green-400 focus:ring-green-300"
                  : "border-stone-300 focus:ring-[#b5522a]/30"
              }`}
              placeholder="Votre nom"
            />
            {touched.name && errors.name && (
              <p className="mt-1 text-xs text-red-500">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              onBlur={() => blur("email")}
              className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 transition-colors ${
                touched.email && errors.email
                  ? "border-red-400 focus:ring-red-300"
                  : touched.email && !errors.email
                  ? "border-green-400 focus:ring-green-300"
                  : "border-stone-300 focus:ring-[#b5522a]/30"
              }`}
              placeholder="votre@email.com"
            />
            {touched.email && errors.email && (
              <p className="mt-1 text-xs text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              onBlur={() => blur("message")}
              className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 resize-none transition-colors ${
                touched.message && errors.message
                  ? "border-red-400 focus:ring-red-300"
                  : touched.message && !errors.message
                  ? "border-green-400 focus:ring-green-300"
                  : "border-stone-300 focus:ring-[#b5522a]/30"
              }`}
              placeholder="Votre message..."
            />
            {touched.message && errors.message && (
              <p className="mt-1 text-xs text-red-500">{errors.message}</p>
            )}
          </div>

          {/* Error global */}
          {error && (
            <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#b5522a] text-white font-medium py-3 rounded-lg hover:bg-[#9a4522] transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Envoi en cours..." : "Envoyer"}
          </button>
        </form>
        <p className="text-xs text-stone-400 mt-6 text-center">
          Email : contact@bati.ma
        </p>
      </div>
    </section>
  );
}
