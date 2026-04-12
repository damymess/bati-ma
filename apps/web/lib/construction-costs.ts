// Données de coûts de construction au Maroc 2026
// Sources :
//   - CNOA Barème des coûts de la construction 2021, inflaté +25% pour 2026
//     https://cnoa.ma/s/a/library/2024-04-13/fa6fce39-f819-444b-8dc8-4355068d06c5.pdf
//   - BniDark.com simulateur (coefficients ville et options extraits du JS source)
//   - Rifaa.ma simulateur gros œuvre 2026
//   - Geniecivil.ma, programmes-immobilier.com, forumconstruction.ma (consensus marché)
//   - Francobat.ma prix matériaux 2025-2026
//   - HBA Studio / Ordre Architectes Rabat (honoraires)

export type ProjectType = "villa" | "appartement" | "immeuble-r2" | "immeuble-r3" | "riad" | "commercial";
export type QualityLevel = "economique" | "moyen" | "haut" | "luxe";

// Honoraires architecte : minimums CNOA = 5% (3% social, 3.5% programme logements)
// Marché réel = 5-15% selon complexité et mission
export const PROJECT_TYPES: { value: ProjectType; label: string; architectFeeMin: number; architectFeeMax: number }[] = [
  { value: "villa", label: "Villa individuelle", architectFeeMin: 5, architectFeeMax: 12 },
  { value: "appartement", label: "Appartement", architectFeeMin: 5, architectFeeMax: 8 },
  { value: "immeuble-r2", label: "Immeuble R+2", architectFeeMin: 5, architectFeeMax: 8 },
  { value: "immeuble-r3", label: "Immeuble R+3 et plus", architectFeeMin: 5, architectFeeMax: 8 },
  { value: "riad", label: "Riad / Maison traditionnelle", architectFeeMin: 5, architectFeeMax: 15 },
  { value: "commercial", label: "Local commercial / Bureau", architectFeeMin: 5, architectFeeMax: 10 },
];

// Prix au m² : croisement CNOA 2021 (+25% inflation) + consensus marché 2025-2026
// CNOA 2021 : villa isolée 4000 DH/m², standing 6000 DH/m² → 2026 : 5000, 7500
// Marché 2026 : éco 3000-4000, moyen 4500-6500, haut 6500-10000, luxe 11000-15000+
export const QUALITY_LEVELS: { value: QualityLevel; label: string; description: string; priceMin: number; priceMax: number }[] = [
  { value: "economique", label: "Économique", description: "Blocs standard, carrelage simple, peinture mate, PVC", priceMin: 3000, priceMax: 4500 },
  { value: "moyen", label: "Moyen standing", description: "Isolation améliorée, sanitaire qualité, menuiserie alu", priceMin: 4500, priceMax: 7000 },
  { value: "haut", label: "Haut standing", description: "Marbre, parquet, climatisation centrale, domotique", priceMin: 7000, priceMax: 10500 },
  { value: "luxe", label: "Luxe", description: "Zellige artisanal, matériaux importés, architecte renommé", priceMin: 11000, priceMax: 15000 },
];

// Coefficients par ville : dérivés de BniDark.com (base Marrakech 6200-6500)
// Normalisés sur Casablanca = 1.00 pour cohérence avec le marché
// Cross-validés avec geniecivil.ma (Casa-Rabat 5500-8000, Fes-Meknes 4500-6000)
export const CITY_COEFFICIENTS: Record<string, { coefficient: number; landPriceMin: number; landPriceMax: number }> = {
  casablanca: { coefficient: 1.00, landPriceMin: 3000, landPriceMax: 15000 },
  rabat: { coefficient: 1.05, landPriceMin: 2500, landPriceMax: 12000 },
  marrakech: { coefficient: 0.86, landPriceMin: 1500, landPriceMax: 8000 },
  tanger: { coefficient: 0.82, landPriceMin: 1500, landPriceMax: 10000 },
  agadir: { coefficient: 0.89, landPriceMin: 1000, landPriceMax: 6000 },
  fes: { coefficient: 0.73, landPriceMin: 800, landPriceMax: 5000 },
  meknes: { coefficient: 0.73, landPriceMin: 600, landPriceMax: 4000 },
  "el-jadida": { coefficient: 0.80, landPriceMin: 800, landPriceMax: 5000 },
  oujda: { coefficient: 0.70, landPriceMin: 500, landPriceMax: 3500 },
  tetouan: { coefficient: 0.82, landPriceMin: 1000, landPriceMax: 6000 },
  nador: { coefficient: 0.73, landPriceMin: 600, landPriceMax: 4000 },
  "beni-mellal": { coefficient: 0.65, landPriceMin: 400, landPriceMax: 3000 },
};

export type OptionKey = "piscine" | "jardin" | "sous-sol" | "terrasse" | "domotique" | "garage";

// Options : prix BniDark.com (validés marché)
export const OPTIONS: { value: OptionKey; label: string; costMin: number; costMax: number; unit: string }[] = [
  { value: "piscine", label: "Piscine", costMin: 160000, costMax: 320000, unit: "forfait" },
  { value: "jardin", label: "Jardin aménagé", costMin: 85000, costMax: 220000, unit: "forfait" },
  { value: "sous-sol", label: "Sous-sol / Parking", costMin: 520, costMax: 820, unit: "MAD/m²" },
  { value: "terrasse", label: "Terrasse aménagée", costMin: 500, costMax: 1500, unit: "MAD/m²" },
  { value: "domotique", label: "Domotique / Smart home", costMin: 140, costMax: 260, unit: "MAD/m²" },
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

  // Répartition : gros œuvre 40-50%, second œuvre 20-30%, finitions 30-40%
  // Source : habitatservicesplus.com, loutfiamenagement.com
  const grosOeuvre = {
    min: Math.round(basePriceMin * 0.45 * surface),
    max: Math.round(basePriceMax * 0.45 * surface),
  };
  const secondOeuvre = {
    min: Math.round(basePriceMin * 0.25 * surface),
    max: Math.round(basePriceMax * 0.25 * surface),
  };
  const finitions = {
    min: Math.round(basePriceMin * 0.30 * surface),
    max: Math.round(basePriceMax * 0.30 * surface),
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
      // MAD/m² — utilise la surface habitable pour domotique, 20% pour terrasse/garage
      const optSurface = opt === "domotique" ? surface : Math.round(surface * 0.2);
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
