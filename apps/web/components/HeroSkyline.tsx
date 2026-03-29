"use client";

import { useEffect, useRef } from "react";

/**
 * Animated SVG skyline of Moroccan architecture.
 * Used as the right panel in the split hero layout.
 * Draws itself progressively using stroke-dashoffset.
 */
export default function HeroSkyline() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const paths = svg.querySelectorAll<SVGPathElement>("[data-draw]");
    paths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
    });

    void svg.getBoundingClientRect();

    paths.forEach((path, i) => {
      const delay = i * 0.25;
      const duration = 1.1 + Math.random() * 0.4;
      path.style.transition = `stroke-dashoffset ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s, opacity 0.4s ease ${delay}s`;
      path.style.strokeDashoffset = "0";
      path.style.opacity = "1";
    });
  }, []);

  const s = "#d4754a";

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 500 600"
      fill="none"
      preserveAspectRatio="xMidYMax meet"
      className="h-full w-full opacity-[0.85]"
      style={{ filter: "drop-shadow(0 0 12px rgba(212,117,74,0.4))" }}
      aria-hidden="true"
    >
      {/* Ground line */}
      <path data-draw d="M0 580 H500" stroke={s} strokeWidth="2" opacity="0" />

      {/* ── Palm tree (left) ── */}
      <path data-draw d="M30 580 V420 M30 420 Q8 390 -5 410 M30 420 Q15 380 2 390 M30 420 Q30 370 20 380 M30 420 Q45 380 55 390 M30 420 Q55 390 65 410" stroke={s} strokeWidth="2.5" strokeLinecap="round" opacity="0" />

      {/* ── Minaret ── */}
      <path data-draw d="M100 580 V200 L120 155 L140 200 V580" stroke={s} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0" />
      <path data-draw d="M95 240 H145 M95 285 H145 M95 330 H145 M95 380 H145" stroke={s} strokeWidth="1.5" opacity="0" />
      <path data-draw d="M115 155 Q120 138 125 155" stroke={s} strokeWidth="2" strokeLinecap="round" opacity="0" />

      {/* ── Main building with dome ── */}
      <path data-draw d="M175 580 V300 H370 V580" stroke={s} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0" />
      <path data-draw d="M175 300 Q272 200 370 300" stroke={s} strokeWidth="2.5" strokeLinecap="round" opacity="0" />

      {/* Arched windows row 1 */}
      <path data-draw d="M205 345 Q222 325 240 345 V395 H205 Z" stroke={s} strokeWidth="1.5" opacity="0" />
      <path data-draw d="M270 345 Q287 325 305 345 V395 H270 Z" stroke={s} strokeWidth="1.5" opacity="0" />
      <path data-draw d="M335 345 Q347 330 360 345 V380 H335 Z" stroke={s} strokeWidth="1.2" opacity="0" />

      {/* Arched windows row 2 */}
      <path data-draw d="M205 430 Q222 410 240 430 V480 H205 Z" stroke={s} strokeWidth="1.5" opacity="0" />
      <path data-draw d="M270 430 Q287 410 305 430 V480 H270 Z" stroke={s} strokeWidth="1.5" opacity="0" />
      <path data-draw d="M335 430 Q347 415 360 430 V465 H335 Z" stroke={s} strokeWidth="1.2" opacity="0" />

      {/* ── Central Moroccan Arch (door) ── */}
      <path data-draw d="M235 580 V490 Q235 430 272 430 Q310 430 310 490 V580" stroke={s} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0" />
      <path data-draw d="M248 580 V498 Q248 445 272 445 Q297 445 297 498 V580" stroke={s} strokeWidth="1.2" opacity="0" />

      {/* Star inside arch */}
      <path data-draw d="M272 470 L275 480 L285 480 L277 487 L280 497 L272 491 L264 497 L267 487 L259 480 L269 480 Z" stroke={s} strokeWidth="1" strokeLinejoin="round" opacity="0" />

      {/* ── Tower (right) ── */}
      <path data-draw d="M400 580 V230 L420 185 L440 230 V580" stroke={s} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0" />
      <path data-draw d="M395 270 H445 M395 320 H445 M395 380 H445 M395 440 H445 M395 500 H445" stroke={s} strokeWidth="1.5" opacity="0" />
      <path data-draw d="M415 185 Q420 168 425 185" stroke={s} strokeWidth="2" strokeLinecap="round" opacity="0" />

      {/* ── Small palm (right) ── */}
      <path data-draw d="M475 580 V450 M475 450 Q458 425 448 440 M475 450 Q462 415 452 425 M475 450 Q475 405 467 415 M475 450 Q488 415 496 425 M475 450 Q495 430 500 445" stroke={s} strokeWidth="2" strokeLinecap="round" opacity="0" />

      {/* ── Roof crenellation on main building ── */}
      <path data-draw d="M175 300 V288 H190 V300 M205 300 V288 H220 V300 M235 300 V288 H250 V300 M265 300 V288 H280 V300 M295 300 V288 H310 V300 M325 300 V288 H340 V300 M355 300 V288 H370 V300" stroke={s} strokeWidth="1.2" opacity="0" />

      {/* ── Zellige decorative base ── */}
      <path data-draw d="M155 580 L165 565 L175 580 M370 580 L380 565 L390 580" stroke={s} strokeWidth="1.5" strokeLinejoin="round" opacity="0" />
    </svg>
  );
}
