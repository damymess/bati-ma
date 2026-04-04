"use client";

import { useRef, useState } from "react";
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

function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <div className="w-[280px] sm:w-[320px] shrink-0 rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
      <Stars count={t.rating} />
      <p className="mt-3 text-sm leading-relaxed text-stone-600 line-clamp-4">
        &ldquo;{t.text}&rdquo;
      </p>
      <div className="mt-4 border-t border-stone-100 pt-3">
        <p className="text-sm font-semibold text-stone-900">{t.name}</p>
        <p className="text-xs text-stone-500">
          {t.project} — {t.city}
        </p>
      </div>
    </div>
  );
}

export default function TestimonialCarousel() {
  const items = [...TESTIMONIALS, ...TESTIMONIALS];
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-[#f5f0ea] py-14 overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900">
            Ils ont trouvé leur architecte
          </h2>
          <p className="mt-1 text-sm text-stone-500">
            Retours de clients ayant utilisé Bati.ma
          </p>
        </div>
      </div>

      {/* Marquee — infinite auto-scroll, pause on hover/touch */}
      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 sm:w-16 bg-gradient-to-r from-[#f5f0ea] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 sm:w-16 bg-gradient-to-l from-[#f5f0ea] to-transparent" />

        <div
          ref={trackRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setTimeout(() => setPaused(false), 3000)}
          className="flex gap-4 sm:gap-5"
          style={{
            width: "max-content",
            animation: "marquee 35s linear infinite",
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          {items.map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
