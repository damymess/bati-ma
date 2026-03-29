"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Filter, MapPin, Calendar, Banknote, FolderOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

// Sample marketplace data (hardcoded for now, will fetch from API)
const SAMPLE_PROJECTS = [
  {
    id: "p-001",
    title: "Construction villa contemporaine 350m² avec piscine",
    project_type: "Villa",
    location: "Casablanca",
    budget: "3 000 000 - 5 000 000 MAD",
    timeline: "12 mois",
    description: "Recherche architecte pour conception et suivi d'une villa contemporaine de 350m² sur un terrain de 800m² à Dar Bouazza. Style minimaliste, grandes baies vitrées, piscine à débordement.",
    client_name: "Ahmed M.",
    created_at: "2026-03-27",
    responses_count: 3,
    status: "submitted",
  },
  {
    id: "p-002",
    title: "Rénovation riad 5 suites en maison d'hôtes",
    project_type: "Hôtel/Riad",
    location: "Marrakech",
    budget: "1 000 000 - 3 000 000 MAD",
    timeline: "8 mois",
    description: "Riad XVIIIe siècle dans la médina, 280m² sur 2 niveaux. Transformation en maison d'hôtes 5 suites avec restaurant sur la terrasse. Respect du patrimoine exigé.",
    client_name: "Sophie L.",
    created_at: "2026-03-25",
    responses_count: 7,
    status: "submitted",
  },
  {
    id: "p-003",
    title: "Aménagement intérieur appartement 120m² Agdal",
    project_type: "Intérieur",
    location: "Rabat",
    budget: "500 000 - 1 000 000 MAD",
    timeline: "3 mois",
    description: "Appartement neuf à l'Agdal, 120m², 3 chambres. Recherche architecte d'intérieur pour aménagement complet : cuisine ouverte, dressing, salle de bain design.",
    client_name: "Karim B.",
    created_at: "2026-03-24",
    responses_count: 5,
    status: "submitted",
  },
  {
    id: "p-004",
    title: "Construction immeuble R+4 résidentiel standing",
    project_type: "Immeuble",
    location: "Tanger",
    budget: "5 000 000 - 10 000 000 MAD",
    timeline: "18 mois",
    description: "Projet d'immeuble résidentiel R+4 (8 appartements) sur un terrain de 400m² à Tanger centre. Standing moyen-haut, parking souterrain, terrasse commune.",
    client_name: "Société Tanjawiya Immo",
    created_at: "2026-03-22",
    responses_count: 2,
    status: "submitted",
  },
  {
    id: "p-005",
    title: "Conception restaurant bistronomique bord de mer",
    project_type: "Commercial",
    location: "Agadir",
    budget: "1 000 000 - 3 000 000 MAD",
    timeline: "6 mois",
    description: "Restaurant bistronomique de 200 couverts en front de mer. Architecture ouverte, terrasse 80 places, cuisine ouverte. Ambiance contemporaine méditerranéenne.",
    client_name: "Youssef A.",
    created_at: "2026-03-20",
    responses_count: 4,
    status: "submitted",
  },
  {
    id: "p-006",
    title: "Éco-villa en pisé avec panneaux solaires",
    project_type: "Villa",
    location: "Marrakech",
    budget: "1 000 000 - 3 000 000 MAD",
    timeline: "10 mois",
    description: "Villa éco-responsable de 200m² en pisé et terre crue sur un terrain à la Palmeraie. Autonomie énergétique, récupération d'eau, jardin permaculture.",
    client_name: "Nadia Z.",
    created_at: "2026-03-18",
    responses_count: 6,
    status: "submitted",
  },
];

const PROJECT_TYPES = ["Villa", "Appartement", "Immeuble", "Commercial", "Hôtel/Riad", "Rénovation", "Intérieur", "Bureaux"];
const CITIES = ["Casablanca", "Marrakech", "Rabat", "Tanger", "Agadir", "Fès", "Meknès"];

function timeAgo(dateStr: string) {
  const days = Math.floor((Date.now() - new Date(dateStr).getTime()) / 86400000);
  if (days === 0) return "Aujourd'hui";
  if (days === 1) return "Hier";
  return `Il y a ${days}j`;
}

export default function MarketplacePage() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");

  const filtered = SAMPLE_PROJECTS.filter((p) => {
    if (search && !p.title.toLowerCase().includes(search.toLowerCase())) return false;
    if (typeFilter && p.project_type !== typeFilter) return false;
    if (cityFilter && p.location !== cityFilter) return false;
    return true;
  });

  return (
    <>
      {/* Hero */}
      <section className="bg-stone-950 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 mb-6">
            <FolderOpen className="h-4 w-4 text-[#b5522a]" />
            <span className="text-xs font-medium text-stone-300">
              Marketplace
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Projets d&apos;architecture{" "}
            <span className="text-[#b5522a]">au Maroc</span>
          </h1>
          <p className="text-stone-400 max-w-xl mx-auto text-sm sm:text-base mb-6">
            {SAMPLE_PROJECTS.length} projets publiés par des particuliers et entreprises.
            Proposez vos services en tant qu&apos;architecte.
          </p>
          <div className="flex justify-center gap-3">
            <Button className="rounded-full" asChild>
              <Link href="/dashboard/client/projets/nouveau">
                Publier un projet
              </Link>
            </Button>
            <Button variant="outline" className="rounded-full border-stone-700 text-stone-300 hover:bg-stone-800" asChild>
              <Link href="/inscription">
                S&apos;inscrire comme architecte
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Filtres */}
      <section className="py-6 border-b border-stone-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
              <Input
                placeholder="Rechercher un projet..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="rounded-lg border border-stone-200 bg-white px-3 py-2 text-sm text-stone-700 focus:outline-none focus:ring-1 focus:ring-[#b5522a]"
            >
              <option value="">Tous les types</option>
              {PROJECT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
            <select
              value={cityFilter}
              onChange={(e) => setCityFilter(e.target.value)}
              className="rounded-lg border border-stone-200 bg-white px-3 py-2 text-sm text-stone-700 focus:outline-none focus:ring-1 focus:ring-[#b5522a]"
            >
              <option value="">Toutes les villes</option>
              {CITIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div className="mt-3 flex items-center gap-2 text-xs text-stone-500">
            <Filter className="h-3.5 w-3.5" />
            <span>{filtered.length} projet{filtered.length > 1 ? "s" : ""}</span>
          </div>
        </div>
      </section>

      {/* Projets */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((project) => (
                <Card key={project.id} className="group transition-all hover:border-[#b5522a]/30 hover:shadow-md">
                  <CardContent className="p-5 flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="text-[10px]">
                        {project.project_type}
                      </Badge>
                      <span className="text-[10px] text-stone-400">
                        {timeAgo(project.created_at)}
                      </span>
                    </div>

                    <h3 className="text-sm font-semibold text-stone-900 group-hover:text-[#b5522a] transition-colors mb-2 line-clamp-2">
                      {project.title}
                    </h3>

                    <p className="text-xs text-stone-500 line-clamp-2 mb-3">
                      {project.description}
                    </p>

                    <div className="mt-auto space-y-1.5 text-xs text-stone-500">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        {project.location}
                      </div>
                      {project.budget && (
                        <div className="flex items-center gap-1.5">
                          <Banknote className="h-3.5 w-3.5" />
                          {project.budget}
                        </div>
                      )}
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        Délai : {project.timeline}
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-[10px] text-stone-400">
                        {project.responses_count} proposition{project.responses_count > 1 ? "s" : ""}
                      </span>
                      <span className="text-xs font-medium text-[#b5522a] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        Proposer mes services <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-stone-500 text-sm">
                Aucun projet ne correspond à vos critères.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
