import { Star, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import type { Architect } from "@/lib/architects";
import { cn } from "@/lib/utils";

function StarRating({ rating, count }: { rating: number; count: number }) {
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
      <span className="ml-1 text-xs text-stone-500">
        {rating.toFixed(1)} ({count} avis)
      </span>
    </div>
  );
}

export default function ArchitectCard({ architect }: { architect: Architect }) {
  const initials = architect.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <Card
      className={cn(
        "group relative overflow-hidden transition-all hover:shadow-md",
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
          <Avatar className="h-11 w-11 border border-stone-200">
            <AvatarFallback className="bg-stone-900 text-white text-xs font-semibold">
              {initials}
            </AvatarFallback>
          </Avatar>

          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-stone-900 text-[15px] leading-tight">
              {architect.name}
            </h3>

            <StarRating rating={architect.rating} count={architect.reviewCount} />

            <div className="mt-2 flex flex-wrap gap-1">
              {architect.specialties.map((s) => (
                <Badge key={s} variant="secondary" className="text-[11px] font-normal">
                  {s}
                </Badge>
              ))}
            </div>

            <p className="mt-2 text-sm leading-relaxed text-stone-500 line-clamp-2">
              {architect.description}
            </p>

            <div className="mt-3 flex items-center justify-between">
              <span className="text-xs text-stone-400">
                {architect.experience} ans d&apos;expérience
              </span>
              <button className="inline-flex items-center gap-1 text-sm font-medium text-[#b5522a] transition-colors hover:text-[#9a4522] group-hover:gap-1.5">
                Contacter
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
