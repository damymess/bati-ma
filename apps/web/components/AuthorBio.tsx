import Link from "next/link";
import { ExternalLink, Mail } from "lucide-react";
import type { Author } from "@/lib/authors";

type Props = {
  author: Author;
  variant?: "card" | "inline";
};

/**
 * Affiche la bio d'un auteur de guide.
 * Variant "card" = bloc dédié en bas d'article (E-E-A-T signal visible)
 * Variant "inline" = juste avatar+nom+lien, pour un header
 */
export default function AuthorBio({ author, variant = "card" }: Props) {
  if (variant === "inline") {
    return (
      <Link
        href={`/a-propos#${author.id}`}
        className="inline-flex items-center gap-2 text-xs text-stone-500 hover:text-[#b5522a] transition-colors"
      >
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-stone-900 text-white text-[10px] font-semibold">
          {author.initials}
        </span>
        <span>
          Par <strong className="text-stone-700">{author.name}</strong>
        </span>
      </Link>
    );
  }

  return (
    <div className="border border-stone-200 rounded-xl p-5 bg-stone-50">
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-stone-900 text-white text-lg font-bold">
          {author.initials}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-stone-500 uppercase tracking-widest mb-1">
            ✍️ À propos de l&apos;auteur
          </p>
          <h3 className="font-semibold text-stone-900">
            {author.name}{" "}
            <span className="text-stone-500 font-normal text-sm">
              — {author.role}
            </span>
          </h3>
          <p className="text-sm text-stone-600 leading-relaxed mt-1.5">
            {author.shortBio}
          </p>

          <div className="flex flex-wrap gap-1.5 mt-2.5">
            {author.expertise.map((exp) => (
              <span
                key={exp}
                className="inline-flex items-center text-[11px] bg-white border border-stone-200 text-stone-600 px-2 py-0.5 rounded-full"
              >
                {exp}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 mt-3 text-xs">
            <Link
              href={`/a-propos#${author.id}`}
              className="text-[#b5522a] hover:underline font-medium"
            >
              Voir le profil complet →
            </Link>
            {author.social.linkedin && (
              <a
                href={author.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-stone-500 hover:text-[#b5522a]"
              >
                <ExternalLink className="h-3 w-3" /> LinkedIn
              </a>
            )}
            {author.social.email && (
              <a
                href={`mailto:${author.social.email}`}
                className="flex items-center gap-1 text-stone-500 hover:text-[#b5522a]"
              >
                <Mail className="h-3 w-3" /> Contact
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
