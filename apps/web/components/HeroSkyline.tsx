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
  const sw = "2.5"; // main stroke
  const sw2 = "1.5"; // detail stroke

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
      <path data-draw d="M35 580 V420 M35 420 Q12 390 0 408 M35 420 Q20 380 8 390 M35 420 Q35 370 25 382 M35 420 Q50 380 62 390 M35 420 Q58 390 68 408" stroke={s} strokeWidth={sw} strokeLinecap="round" opacity="0" />

      {/* ── Left tower (minaret) ── */}
      <path data-draw d="M95 580 V200 L115 155 L135 200 V580" stroke={s} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" opacity="0" />
      {/* 4 horizontal bands, evenly spaced */}
      <path data-draw d="M90 245 H140 M90 300 H140 M90 355 H140 M90 410 H140" stroke={s} strokeWidth={sw2} opacity="0" />
      {/* Crescent */}
      <path data-draw d="M110 155 Q115 138 120 155" stroke={s} strokeWidth="2" strokeLinecap="round" opacity="0" />

      {/* ── Main building ── */}
      <path data-draw d="M170 580 V300 H370 V580" stroke={s} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" opacity="0" />

      {/* Dome centered on building (center = 270) */}
      <path data-draw d="M170 300 Q270 195 370 300" stroke={s} strokeWidth={sw} strokeLinecap="round" opacity="0" />

      {/* Arched windows — 2 columns symmetric around center (270) */}
      {/* Left column: x=200-235, Right column: x=305-340 — same size */}
      {/* Row 1 */}
      <path data-draw d="M200 345 Q217 325 235 345 V395 H200 Z" stroke={s} strokeWidth={sw2} opacity="0" />
      <path data-draw d="M305 345 Q322 325 340 345 V395 H305 Z" stroke={s} strokeWidth={sw2} opacity="0" />
      {/* Row 2 */}
      <path data-draw d="M200 430 Q217 410 235 430 V480 H200 Z" stroke={s} strokeWidth={sw2} opacity="0" />
      <path data-draw d="M305 430 Q322 410 340 430 V480 H305 Z" stroke={s} strokeWidth={sw2} opacity="0" />

      {/* ── Central Moroccan Arch (door) — centered at x=270 ── */}
      <path data-draw d="M240 580 V490 Q240 425 270 425 Q300 425 300 490 V580" stroke={s} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" opacity="0" />
      {/* Inner arch */}
      <path data-draw d="M252 580 V496 Q252 440 270 440 Q288 440 288 496 V580" stroke={s} strokeWidth="1.2" opacity="0" />

      {/* Star inside arch */}
      <path data-draw d="M270 462 L273 472 L283 472 L275 479 L278 489 L270 483 L262 489 L265 479 L257 472 L267 472 Z" stroke={s} strokeWidth="1" strokeLinejoin="round" opacity="0" />

      {/* ── Right tower (matching left tower proportions) ── */}
      <path data-draw d="M400 580 V200 L420 155 L440 200 V580" stroke={s} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" opacity="0" />
      {/* 4 horizontal bands, same spacing as left tower */}
      <path data-draw d="M395 245 H445 M395 300 H445 M395 355 H445 M395 410 H445" stroke={s} strokeWidth={sw2} opacity="0" />
      {/* Crescent */}
      <path data-draw d="M415 155 Q420 138 425 155" stroke={s} strokeWidth="2" strokeLinecap="round" opacity="0" />

      {/* ── Palm tree (right) — same size as left ── */}
      <path data-draw d="M470 580 V420 M470 420 Q448 390 435 408 M470 420 Q455 380 443 390 M470 420 Q470 370 460 382 M470 420 Q485 380 497 390 M470 420 Q493 390 500 408" stroke={s} strokeWidth={sw} strokeLinecap="round" opacity="0" />

      {/* ── Zellige decorative base — symmetric ── */}
      <path data-draw d="M150 580 L160 565 L170 580 M370 580 L380 565 L390 580" stroke={s} strokeWidth={sw2} strokeLinejoin="round" opacity="0" />
    </svg>
  );
}
