// Données de coûts de construction au Maroc 2026
// Sources : FNBTP, Ordre des Architectes, études de marché BTP

export type ProjectType = "villa" | "appartement" | "immeuble-r2" | "immeuble-r3" | "riad" | "commercial";
export type QualityLevel = "economique" | "moyen" | "haut" | "luxe";

export const PROJECT_TYPES: { value: ProjectType; label: string; architectFeeMin: number; architectFeeMax: number }[] = [
  { value: "villa", label: "Villa individuelle", architectFeeMin: 8, architectFeeMax: 12 },
  { value: "appartement", label: "Appartement", architectFeeMin: 6, architectFeeMax: 10 },
  { value: "immeuble-r2", label: "Immeuble R+2", architectFeeMin: 6, architectFeeMax: 10 },
  { value: "immeuble-r3", label: "Immeuble R+3 et plus", architectFeeMin: 6, architectFeeMax: 10 },
  { value: "riad", label: "Riad / Maison traditionnelle", architectFeeMin: 12, architectFeeMax: 18 },
  { value: "commercial", label: "Local commercial / Bureau", architectFeeMin: 8, architectFeeMax: 12 },
];

export const QUALITY_LEVELS: { value: QualityLevel; label: string; description: string; priceMin: number; priceMax: number }[] = [
  { value: "economique", label: "Économique", description: "Finitions basiques, matériaux standard", priceMin: 3500, priceMax: 5000 },
  { value: "moyen", label: "Moyen standing", description: "Finitions soignées, matériaux qualité", priceMin: 5000, priceMax: 8000 },
  { value: "haut", label: "Haut standing", description: "Finitions premium, matériaux haut de gamme", priceMin: 8000, priceMax: 12000 },
  { value: "luxe", label: "Luxe", description: "Finitions exceptionnelles, sur mesure", priceMin: 12000, priceMax: 20000 },
];

// Coefficient multiplicateur par ville (base Casablanca = 1.0)
export const CITY_COEFFICIENTS: Record<string, { coefficient: number; landPriceMin: number; landPriceMax: number }> = {
  casablanca: { coefficient: 1.0, landPriceMin: 3000, landPriceMax: 15000 },
  rabat: { coefficient: 1.05, landPriceMin: 2500, landPriceMax: 12000 },
  marrakech: { coefficient: 1.10, landPriceMin: 1500, landPriceMax: 8000 },
  tanger: { coefficient: 0.95, landPriceMin: 1500, landPriceMax: 10000 },
  agadir: { coefficient: 0.90, landPriceMin: 1000, landPriceMax: 6000 },
  fes: { coefficient: 0.85, landPriceMin: 800, landPriceMax: 5000 },
  meknes: { coefficient: 0.82, landPriceMin: 600, landPriceMax: 4000 },
  "el-jadida": { coefficient: 0.88, landPriceMin: 800, landPriceMax: 5000 },
  oujda: { coefficient: 0.80, landPriceMin: 500, landPriceMax: 3500 },
  tetouan: { coefficient: 0.90, landPriceMin: 1000, landPriceMax: 6000 },
  nador: { coefficient: 0.82, landPriceMin: 600, landPriceMax: 4000 },
  "beni-mellal": { coefficient: 0.78, landPriceMin: 400, landPriceMax: 3000 },
};

export type OptionKey = "piscine" | "jardin" | "sous-sol" | "terrasse" | "domotique" | "garage";

export const OPTIONS: { value: OptionKey; label: string; costMin: number; costMax: number; unit: string }[] = [
  { value: "piscine", label: "Piscine", costMin: 150000, costMax: 400000, unit: "forfait" },
  { value: "jardin", label: "Jardin aménagé", costMin: 300, costMax: 800, unit: "MAD/m²" },
  { value: "sous-sol", label: "Sous-sol / Parking", costMin: 2500, costMax: 4000, unit: "MAD/m²" },
  { value: "terrasse", label: "Terrasse aménagée", costMin: 500, costMax: 1500, unit: "MAD/m²" },
  { value: "domotique", label: "Domotique / Smart home", costMin: 30000, costMax: 100000, unit: "forfait" },
  { value: "garage", label: "Garage fermé", costMin: 2000, costMax: 3500, unit: "MAD/m²" },
];

export type EstimationResult = {
  grosOeuvre: { min: number; max: number };
  secondOeuvre: { min: number; max: number };
  finitions: { min: number; max: number };
  architecte: { min: number; max: number };
  options: { min: number; max: number };
  terrain: { min: number; max: number } | null;
  total: { min: number; max: number };
  totalAvecTerrain: { min: number; max: number } | null;
};

export function calculateEstimation(
  city: string,
  projectType: ProjectType,
  quality: QualityLevel,
  surface: number,
  landSurface: number | null,
  selectedOptions: OptionKey[],
): EstimationResult {
  const cityData = CITY_COEFFICIENTS[city] || CITY_COEFFICIENTS.casablanca;
  const qualityData = QUALITY_LEVELS.find((q) => q.value === quality)!;
  const projectData = PROJECT_TYPES.find((p) => p.value === projectType)!;

  const basePriceMin = qualityData.priceMin * cityData.coefficient;
  const basePriceMax = qualityData.priceMax * cityData.coefficient;

  // Répartition : gros œuvre ~45%, second œuvre ~30%, finitions ~25%
  const grosOeuvre = {
    min: Math.round(basePriceMin * 0.45 * surface),
    max: Math.round(basePriceMax * 0.45 * surface),
  };
  const secondOeuvre = {
    min: Math.round(basePriceMin * 0.30 * surface),
    max: Math.round(basePriceMax * 0.30 * surface),
  };
  const finitions = {
    min: Math.round(basePriceMin * 0.25 * surface),
    max: Math.round(basePriceMax * 0.25 * surface),
  };

  const constructionMin = grosOeuvre.min + secondOeuvre.min + finitions.min;
  const constructionMax = grosOeuvre.max + secondOeuvre.max + finitions.max;

  const architecte = {
    min: Math.round(constructionMin * projectData.architectFeeMin / 100),
    max: Math.round(constructionMax * projectData.architectFeeMax / 100),
  };

  let optionsMin = 0;
  let optionsMax = 0;
  for (const opt of selectedOptions) {
    const optionData = OPTIONS.find((o) => o.value === opt);
    if (!optionData) continue;
    if (optionData.unit === "forfait") {
      optionsMin += optionData.costMin;
      optionsMax += optionData.costMax;
    } else {
      // MAD/m² — utilise 20% de la surface habitable comme estimation
      const optSurface = Math.round(surface * 0.2);
      optionsMin += optionData.costMin * optSurface;
      optionsMax += optionData.costMax * optSurface;
    }
  }

  const options = { min: optionsMin, max: optionsMax };

  let terrain: { min: number; max: number } | null = null;
  if (landSurface && landSurface > 0) {
    terrain = {
      min: cityData.landPriceMin * landSurface,
      max: cityData.landPriceMax * landSurface,
    };
  }

  const total = {
    min: constructionMin + architecte.min + options.min,
    max: constructionMax + architecte.max + options.max,
  };

  const totalAvecTerrain = terrain
    ? { min: total.min + terrain.min, max: total.max + terrain.max }
    : null;

  return { grosOeuvre, secondOeuvre, finitions, architecte, options, terrain, total, totalAvecTerrain };
}

export function formatPrice(value: number): string {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(1).replace(".0", "")} M MAD`;
  }
  return `${new Intl.NumberFormat("fr-MA").format(value)} MAD`;
}
