"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/**
 * Moroccan architecture skyline illustration for the hero section.
 * Generated via Recraft AI (V4 Vector) — SVG with transparent background.
 * Animated with a progressive reveal from bottom-up + fade-in.
 */
export default function HeroSkyline() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Small delay to ensure the initial state is rendered first
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div
        className="absolute inset-0 transition-all duration-[1800ms] ease-out"
        style={{
          clipPath: visible ? "inset(0 0 0 0)" : "inset(100% 0 0 0)",
        }}
      >
        <Image
          src="/images/hero-skyline.svg"
          alt=""
          width={1024}
          height={1024}
          className="h-full w-full object-contain transition-all duration-[1200ms] ease-out"
          style={{
            opacity: visible ? 0.92 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transitionDelay: "500ms",
            filter: "drop-shadow(0 0 12px rgba(181,82,42,0.3))",
          }}
          aria-hidden="true"
          priority
        />
      </div>

      {/* Subtle glow behind */}
      <div
        className="absolute inset-0 transition-opacity duration-[2000ms] ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transitionDelay: "1200ms",
          background: "radial-gradient(circle at 50% 60%, rgba(181,82,42,0.08) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
