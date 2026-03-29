"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
type PortfolioProject = {
  title: string;
  imageUrl: string;
  description: string;
  year: number;
};

export default function PortfolioGallery({
  projects,
}: {
  projects: PortfolioProject[];
}) {
  const [selected, setSelected] = useState<number | null>(null);

  if (!projects || projects.length === 0) return null;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-stone-200 bg-stone-100"
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-left opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-sm font-medium text-white">{project.title}</p>
              <p className="text-xs text-stone-300">{project.year}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          <div
            className="max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src={projects[selected].imageUrl}
                alt={projects[selected].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-white">
                {projects[selected].title}
              </h3>
              <p className="text-sm text-stone-300 mt-1">
                {projects[selected].description}
              </p>
              <p className="text-xs text-stone-500 mt-1">
                {projects[selected].year}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
