/**
 * scrape-architects.mjs
 * Source: DataForSEO Business Listings (Google Maps) → POST vers api.bati.ma
 *
 * Usage:
 *   node scripts/scrape-architects.mjs
 */

const DATAFORSEO_LOGIN = "support@nexus-ai.store";
const DATAFORSEO_PASS = "fd9f09bd68076e78";
const DATAFORSEO_AUTH = Buffer.from(`${DATAFORSEO_LOGIN}:${DATAFORSEO_PASS}`).toString("base64");

const API_BASE = "https://api.bati.ma";
const API_KEY = "pk_e0d8fd70ab0cf7e115d76345ec382cf5304b2411c545a5cc3ef1fc1ceb86f75f";

const DELAY_MS = 300;

const CITIES = [
  { slug: "casablanca", name: "Casablanca" },
  { slug: "marrakech", name: "Marrakech" },
  { slug: "rabat", name: "Rabat" },
  { slug: "tanger", name: "Tanger" },
  { slug: "agadir", name: "Agadir" },
  { slug: "fes", name: "Fès" },
  { slug: "meknes", name: "Meknès" },
  { slug: "oujda", name: "Oujda" },
  { slug: "kenitra", name: "Kénitra" },
  { slug: "tetouan", name: "Tétouan" },
  { slug: "nador", name: "Nador" },
  { slug: "el-jadida", name: "El Jadida" },
];

const KEYWORDS = ["architecte", "architecte d'intérieur", "cabinet d'architecture"];

const CATEGORY_SPECIALTY = {
  "architecte d'intérieur": ["Intérieur"],
  "designer d'intérieur": ["Intérieur"],
  "décorateur d'intérieur": ["Intérieur"],
  "cabinet d'architecture": ["Résidentiel"],
  architecte: ["Résidentiel"],
  "bureau d'études": ["Résidentiel"],
  "entreprise de construction": ["Résidentiel"],
  rénovation: ["Riad & Patrimoine"],
  hôtel: ["Hôtellerie"],
  hotel: ["Hôtellerie"],
  "commerce": ["Commercial"],
  "urbanisme": ["Urbanisme"],
  "éco-construction": ["Éco-construction"],
};

function mapSpecialties(categories) {
  if (!categories || categories.length === 0) return ["Résidentiel"];
  for (const cat of categories) {
    const lower = cat.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    for (const [key, specs] of Object.entries(CATEGORY_SPECIALTY)) {
      const normalKey = key.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      if (lower.includes(normalKey)) return specs;
    }
  }
  return ["Résidentiel"];
}

function slugify(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

// ---------------------------------------------------------------------------
// Address validation — reject non-Moroccan listings before insertion
// ---------------------------------------------------------------------------

const MOROCCAN_INDICATORS = [
  "Casablanca","Marrakech","Rabat","Tanger","Agadir","Fès","Fes","Meknès","Meknes",
  "Oujda","Kénitra","Kenitra","Tétouan","Tetouan","Nador","Jadida","Hay ","Quartier",
  "Lotissement","Résidence","Médina","Medina","Guéliz","Gueliz","Ain ","Beni ","Sidi ",
  "Hoceima","Bouskoura","Témara","Temara","Salé","Sale","Mohammedia","Khémisset","Settat",
  "Berrechid","Khouribga","Laâyoune","Laayoune","Dakhla","Errachidia","Ouarzazate",
  "Mellal","Taounate","Taza","Guelmim","Tiznit","Taroudant","Essaouira","Larache",
  "Chefchaouen","Kalaat","Benslimane","Benguérir","Safi","Oulad","Maroc",
  "Rue ","Avenue ","Boulevard ","Bd ","Av.",
];

const FOREIGN_KEYWORDS = [
  "Jl.","Jalan","District,","Prefecture","Rua ","Centro,","Sukamaju","Depok",
  "Jakarta","Surabaya","Bandung","Minamiaizu","Kanagawa","Saitama","Osaka","Fukuoka",
  "Punjab","Karachi","Lahore","Philippines","Manila","Lagos","Abuja","Nairobi",
  "Brazil","Argentina","Colombia","Santander","Bogotá","Lima,","Kildare","Romford",
  "Lemont, IL","Porter Ranch","Owings Mills","Katy, TX","Multan","Meerut","Bareilly",
  "Gariaha","Goethestraße","Augsburg","Ratingen","Pontoise","Szombathely","Keflav",
  "London","Paris ","Lyon ","Marseille","Toulouse","Bordeaux","Nantes","Strasbourg",
];

const NON_ARCH_KEYWORDS = [
  "Assurance","Insurance","Events ","Catering","Nail ","Hair ","Beauty","Spa ",
  "Gym ","Fitness","Pharmacie","Dentist","Dental","Medical","Hospital","Car Rental",
  "SwissLife","AXA ","Allianz","MAAF","ATM","Parking","Charging","Telecom",
  "Restaurant","Hotel ","Hostel","Bar ","Café","Cafe ","Supermarché","Supermarket",
];

// French postal codes (75xxx Paris, 69xxx Lyon, etc.)
const FRENCH_POSTAL = /\b(75|69|13|31|33|59|67|76|77|78|91|92|93|94|95|44|06|38|34|35|57|62|63)\d{3}\b/;

// Non-Latin scripts: CJK, Japanese, Korean, Devanagari, Thai, Myanmar
const HAS_CJK = /[\u4e00-\u9fff\u3040-\u30ff\uac00-\ud7af\u0900-\u097f\u0e00-\u0e7f\u1000-\u109f]/;

function isMoroccanBusiness(item, cityName) {
  const name = (item.title ?? "").trim();
  const address = (item.address ?? "").trim();
  const category = (item.category ?? "") + " " + (item.additional_categories ?? []).join(" ");
  const text = name + " " + category;

  // Reject CJK / non-Latin scripts in name
  if (HAS_CJK.test(name)) return false;

  // Reject non-architecture businesses
  if (NON_ARCH_KEYWORDS.some((k) => text.includes(k))) return false;

  // Reject known foreign address patterns
  if (FOREIGN_KEYWORDS.some((k) => address.includes(k))) return false;

  // Reject French postal codes
  if (FRENCH_POSTAL.test(address)) return false;

  // If there's an address, it must contain at least one Moroccan indicator OR the queried city name
  if (address.length > 0) {
    const hasMoroccan =
      MOROCCAN_INDICATORS.some((k) => address.includes(k)) ||
      address.toLowerCase().includes(cityName.toLowerCase());
    if (!hasMoroccan) return false;
  }

  return true;
}

async function searchBusinessListings(keyword, cityName) {
  const payload = [
    {
      keyword: `${keyword} ${cityName}`,
      location_name: `${cityName}, Maroc`,
      language_code: "fr",
      depth: 100,
    },
  ];

  const res = await fetch(
    "https://api.dataforseo.com/v3/business_data/business_listings/search/live",
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${DATAFORSEO_AUTH}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  if (!res.ok) {
    console.error(`  [DataForSEO ERR] HTTP ${res.status}`);
    return [];
  }

  const json = await res.json();
  const task = json?.tasks?.[0];

  if (!task || task.status_code !== 20000) {
    console.error(`  [DataForSEO ERR] ${task?.status_message ?? "Unknown error"}`);
    return [];
  }

  return task.result?.[0]?.items ?? [];
}

async function postArchitect(architect, index) {
  const body = {
    name: architect.name,
    email: `${slugify(architect.name).slice(0, 40)}-${index}@bati.ma`,
    phone: architect.phone ?? "",
    specialties: architect.specialties,
    regions: [architect.citySlug],
    description: architect.description,
    rating: architect.rating,
    review_count: architect.reviewCount,
    website: architect.website ?? "",
    verified: false,
    premium: false,
    is_active: true,
  };

  const res = await fetch(`${API_BASE}/store/architects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-publishable-api-key": API_KEY,
    },
    body: JSON.stringify(body),
  });

  if (res.ok) {
    return true;
  } else {
    const err = await res.text().catch(() => "");
    console.error(`  [POST ERR] ${architect.name}: HTTP ${res.status} — ${err.slice(0, 80)}`);
    return false;
  }
}

async function main() {
  console.log("🏗️  Fetching Moroccan architects via DataForSEO...\n");

  const allArchitects = [];
  const seenNames = new Set();

  for (const city of CITIES) {
    for (const keyword of KEYWORDS) {
      console.log(`\n🔍 "${keyword}" → ${city.name}`);
      await sleep(500);

      const items = await searchBusinessListings(keyword, city.name);
      console.log(`  Got ${items.length} results from DataForSEO (filtering non-Moroccan...)`);

      for (const item of items) {
        const name = item.title?.trim();
        if (!name || name.length < 2) continue;

        const key = `${city.slug}::${name.toLowerCase()}`;
        if (seenNames.has(key)) continue;

        // Validate Moroccan business before insertion
        if (!isMoroccanBusiness(item, city.name)) {
          console.log(`  [SKIP] Non-Moroccan: "${name}" — ${(item.address ?? "no address").slice(0, 60)}`);
          continue;
        }

        seenNames.add(key);

        const categories = item.category ? [item.category] : (item.additional_categories ?? []);
        const specialties = mapSpecialties(categories);

        const cityName = city.name;
        const desc = item.address
          ? `Architecte basé à ${cityName}. ${item.address}`
          : `Architecte basé à ${cityName}, Maroc.`;

        allArchitects.push({
          name,
          phone: item.phone ?? "",
          rating: item.rating?.value ?? 0,
          reviewCount: item.rating?.votes_count ?? 0,
          website: item.url ?? "",
          description: desc,
          specialties,
          citySlug: city.slug,
        });
      }
    }
  }

  console.log(`\n✅ Collected ${allArchitects.length} unique Moroccan architects (non-Moroccan filtered at source)`);
  console.log("📊 City breakdown:");

  const byCityCount = {};
  for (const a of allArchitects) {
    byCityCount[a.citySlug] = (byCityCount[a.citySlug] ?? 0) + 1;
  }
  for (const [city, count] of Object.entries(byCityCount).sort((a, b) => b[1] - a[1])) {
    console.log(`   ${city}: ${count}`);
  }

  console.log(`\n🚀 Inserting into api.bati.ma...`);
  let ok = 0;
  let err = 0;

  for (let i = 0; i < allArchitects.length; i++) {
    const success = await postArchitect(allArchitects[i], i + 1);
    if (success) {
      ok++;
      if (ok % 10 === 0) process.stdout.write(`  ${ok} inserted...\r`);
    } else {
      err++;
    }
    if (DELAY_MS > 0) await sleep(DELAY_MS);
  }

  console.log(`\n🎉 Done! Inserted: ${ok} | Errors: ${err}`);
  console.log(`\nVerify: curl "https://api.bati.ma/store/architects" | jq '.count'`);
}

main().catch(console.error);
