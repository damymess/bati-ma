import { Lightbulb, BarChart3 } from "lucide-react";

type KeyFact = {
  label: string;
  value: string;
};

type Props = {
  tldr?: string;
  keyFacts?: KeyFact[];
};

/**
 * Bloc "Réponse rapide + Chiffres-clés" en haut de guide.
 * Format optimisé pour extraction par LLM (ChatGPT, Claude, Gemini, Perplexity).
 * Les LLMs scrappent les premiers 300-500 tokens d'une page ; ce bloc est leur cible.
 */
export default function GuideTLDR({ tldr, keyFacts }: Props) {
  if (!tldr && (!keyFacts || keyFacts.length === 0)) return null;

  return (
    <div className="guide-tldr my-6 rounded-xl border-2 border-[#b5522a]/20 bg-gradient-to-br from-[#f5f0ea]/60 to-white p-5 sm:p-6">
      {tldr && (
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Lightbulb className="h-4 w-4 text-[#b5522a]" />
            <p className="text-xs font-semibold uppercase tracking-widest text-[#b5522a]">
              Réponse rapide
            </p>
          </div>
          <p className="text-sm sm:text-base text-stone-800 leading-relaxed">
            {tldr}
          </p>
        </div>
      )}

      {keyFacts && keyFacts.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-2">
            <BarChart3 className="h-4 w-4 text-[#b5522a]" />
            <p className="text-xs font-semibold uppercase tracking-widest text-[#b5522a]">
              Chiffres-clés 2026
            </p>
          </div>
          <ul className="space-y-1.5">
            {keyFacts.map((fact, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-stone-700">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#b5522a] shrink-0" />
                <span>
                  <strong className="text-stone-900">{fact.label}</strong> : {fact.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
