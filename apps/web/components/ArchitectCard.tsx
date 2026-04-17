import Link from "next/link";
import { Star, ArrowRight, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import type { Architect } from "@/lib/architects";
import { cn } from "@/lib/utils";

function StarRating({ rating, count }: { rating: number; count: number }) {
  // Ne pas afficher de rating vide (0.0 étoiles, 0 avis = moche)
  if (!rating && !count) {
    return (
      <p className="text-[11px] text-stone-400 italic">Nouveau sur bati.ma</p>
    );
  }
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={cn(
            "h-3 w-3",
            star <= Math.round(rating)
              ? "fill-amber-400 text-amber-400"
              : "fill-stone-200 text-stone-200"
          )}
        />
      ))}
      <span className="ml-1 text-xs text-stone-600 font-medium">
        {rating.toFixed(1)}
      </span>
      <span className="text-xs text-stone-400">({count})</span>
    </div>
  );
}

const MAX_VISIBLE_SPECS = 3;

export default function ArchitectCard({ architect }: { architect: Architect }) {
  const initials = architect.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const href = `/architecte/${architect.city}/${architect.id}`;
  const devisHref = `/demande-devis?architect=${encodeURIComponent(architect.id)}&city=${encodeURIComponent(architect.city)}`;
  const visibleSpecs = architect.specialties.slice(0, MAX_VISIBLE_SPECS);
  const extraCount = architect.specialties.length - MAX_VISIBLE_SPECS;

  return (
    <Card
      className={cn(
        "relative overflow-hidden transition-all hover:shadow-md hover:border-[#b5522a]/30",
        architect.premium && "border-[#b5522a]/20 ring-1 ring-[#b5522a]/10"
      )}
    >
      {architect.premium && (
        <div className="absolute right-0 top-0">
          <div className="bg-[#b5522a] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white rounded-bl-lg">
            Premium
          </div>
        </div>
      )}

      <CardContent className="p-5">
        <div className="flex items-start gap-3.5">
          <Avatar className="h-11 w-11 border border-stone-200 shrink-0">
            <AvatarFallback className="bg-stone-900 text-white text-xs font-semibold">
              {initials}
            </AvatarFallback>
          </Avatar>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5 flex-wrap">
              <Link href={href} className="group">
                <h3 className="font-semibold text-stone-900 text-[15px] leading-tight group-hover:text-[#b5522a] transition-colors">
                  {architect.name}
                </h3>
              </Link>
              {architect.verified && (
                <span
                  className="inline-flex items-center gap-0.5 bg-green-50 text-green-700 text-[10px] font-medium px-1.5 py-0.5 rounded-full border border-green-200"
                  title="Documents vérifiés par bati.ma"
                >
                  <ShieldCheck className="h-2.5 w-2.5" />
                  Vérifié
                </span>
              )}
            </div>

            <StarRating rating={architect.rating} count={architect.reviewCount} />

            <div className="mt-2 flex flex-wrap gap-1">
              {visibleSpecs.map((s) => (
                <Badge key={s} variant="secondary" className="text-[11px] font-normal">
                  {s}
                </Badge>
              ))}
              {extraCount > 0 && (
                <Badge variant="secondary" className="text-[11px] font-normal text-stone-400">
                  +{extraCount}
                </Badge>
              )}
            </div>

            <p className="mt-2 text-sm leading-relaxed text-stone-500 line-clamp-2">
              {architect.description}
            </p>

            <div className="mt-3 flex items-center justify-between gap-2">
              <span className="text-xs text-stone-400">
                {architect.experience} ans d&apos;expérience
              </span>
              <div className="flex items-center gap-2">
                <Link
                  href={href}
                  className="inline-flex items-center gap-1 text-sm font-medium text-stone-600 hover:text-[#b5522a] transition-colors"
                >
                  Profil
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href={devisHref}
                  className="inline-flex items-center gap-1 rounded-full bg-[#b5522a] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#9a4522] transition-colors"
                >
                  Demander un devis
                </Link>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
