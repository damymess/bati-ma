"use client";

import { TESTIMONIALS } from "@/lib/testimonials";
import { Star } from "lucide-react";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${i < count ? "fill-amber-400 text-amber-400" : "text-stone-300"}`}
        />
      ))}
    </div>
  );
}

export default function TestimonialCarousel() {
  return (
    <section className="bg-[#f5f0ea] px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900">
            Ils ont trouvé leur architecte
          </h2>
          <p className="mt-1 text-sm text-stone-500">
            Retours de clients ayant utilisé Bati.ma
          </p>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="min-w-[280px] max-w-[320px] shrink-0 snap-start rounded-xl border border-stone-200 bg-white p-5 shadow-sm"
            >
              <Stars count={t.rating} />
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-4 border-t border-stone-100 pt-3">
                <p className="text-sm font-semibold text-stone-900">{t.name}</p>
                <p className="text-xs text-stone-500">
                  {t.project} — {t.city}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
