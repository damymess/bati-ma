import Link from "next/link";
import { Calendar, MapPin, Building2, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { AppelOffre } from "@/lib/appels-offres";
import { CITIES } from "@/lib/cities";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("fr-MA", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function daysLeft(deadline: string) {
  const diff = new Date(deadline).getTime() - Date.now();
  const days = Math.ceil(diff / 86400000);
  if (days < 0) return null;
  if (days === 0) return "Dernier jour";
  if (days <= 3) return `${days}j restants`;
  return `${days} jours`;
}

const statusColors: Record<string, string> = {
  Ouvert: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Clôturé: "bg-stone-100 text-stone-500 border-stone-200",
  Attribué: "bg-blue-50 text-blue-700 border-blue-200",
};

export default function AppelOffreCard({ ao }: { ao: AppelOffre }) {
  const cityName = CITIES.find((c) => c.slug === ao.city)?.name ?? ao.city;
  const remaining = daysLeft(ao.deadline);

  return (
    <Link
      href={`/appels-offres/${ao.id}`}
      className="group flex flex-col rounded-xl border border-stone-200 bg-white p-5 transition-all hover:border-[#b5522a]/30 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <Badge
          variant="outline"
          className={`text-[10px] font-medium ${statusColors[ao.status]}`}
        >
          {ao.status}
        </Badge>
        {remaining && ao.status === "Ouvert" && (
          <span className="text-[10px] font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
            {remaining}
          </span>
        )}
      </div>

      <h3 className="text-sm font-semibold text-stone-900 group-hover:text-[#b5522a] transition-colors line-clamp-2 mb-2">
        {ao.title}
      </h3>

      <div className="flex flex-wrap gap-2 mb-3">
        <Badge variant="secondary" className="text-[10px]">
          {ao.sector}
        </Badge>
        <Badge variant="secondary" className="text-[10px]">
          {ao.type}
        </Badge>
      </div>

      <div className="mt-auto space-y-1.5 text-xs text-stone-500">
        <div className="flex items-center gap-1.5">
          <Building2 className="h-3.5 w-3.5 flex-shrink-0" />
          <span className="truncate">{ao.organism}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
          <span>{cityName}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Calendar className="h-3.5 w-3.5 flex-shrink-0" />
          <span>Date limite : {formatDate(ao.deadline)}</span>
        </div>
        {ao.budget && (
          <p className="text-xs font-medium text-stone-700 pt-1">
            {ao.budget}
          </p>
        )}
      </div>

      <div className="mt-4 flex items-center gap-1 text-xs font-medium text-[#b5522a] opacity-0 group-hover:opacity-100 transition-opacity">
        Voir le détail <ArrowRight className="h-3.5 w-3.5" />
      </div>
    </Link>
  );
}
