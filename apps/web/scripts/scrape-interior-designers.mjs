/**
 * scrape-interior-designers.mjs
 * Scrape architectes d'intérieur / designers via DataForSEO
 *
 * Phase 1: Business Listings API (moins cher, données ~90j)
 * Phase 2: Google Maps SERP API (données fraîches, plus cher)
 *
 * Usage:
 *   node scripts/scrape-interior-designers.mjs                  # Les deux phases
 *   node scripts/scrape-interior-designers.mjs --listings-only   # Phase 1 uniquement
 *   node scripts/scrape-interior-designers.mjs --serp-only       # Phase 2 uniquement
 *   node scripts/scrape-interior-designers.mjs --dry-run         # Pas d'insertion, juste log
 */

const DATAFORSEO_LOGIN = "support@nexus-ai.store";
const DATAFORSEO_PASS = "fd9f09bd68076e78";
const DATAFORSEO_AUTH = Buffer.from(`${DATAFORSEO_LOGIN}:${DATAFORSEO_PASS}`).toString("base64");

const API_BASE = process.env.API_URL || "https://api.bati.ma";
const API_KEY = "pk_e0d8fd70ab0cf7e115d76345ec382cf5304b2411c545a5cc3ef1fc1ceb86f75f";

const DRY_RUN = process.argv.includes("--dry-run");
const LISTINGS_ONLY = process.argv.includes("--listings-only");
const SERP_ONLY = process.argv.includes("--serp-only");

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

// Mots-clés élargis pour les architectes d'intérieur
const KEYWORDS = [
  "architecte d'intérieur",
  "décorateur d'intérieur",
  "designer d'intérieur",
  "design intérieur",
  "aménagement intérieur",
  "décoration intérieur",
  "interior design",
];

// ─── Utilitaires ─────────────────────────────────────────────────────────────

function slugify(str) {
  return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

// ─── Validation marocaine (même logique que scrape-architects.mjs) ──────────

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
  "London","Paris ","Lyon ","Marseille","Toulouse","Bordeaux","Nantes","Strasbourg",
];

const NON_DESIGN_KEYWORDS = [
  "Assurance","Insurance","Events","Catering","Nail ","Hair ","Beauty","Spa ",
  "Gym ","Fitness","Pharmacie","Dentist","Dental","Medical","Hospital","Car Rental",
  "Restaurant","Hostel","Bar ","Café ","Supermarché","Supermarket","ATM","Parking",
  "Disco","Karaoke","DJ ","Music","Night","Club","Pub ","Lounge",
  "Plombier","Plumber","Électricien","Electrician","Menuisier","Peintre",
  "Saccomix","Traiteur","Wedding","Mariage",
  "KITEA","Mobilia","IKEA","Brico","Bricolage","Carrelage","Faïence","Sanitaire",
  "Cuisine ","Kitchen","Ameublement","Meuble","Furniture","Rideaux","Rideau",
  "Tapis","Carpet","Peinture","Paint","Quincaillerie","Matériaux","Ciment",
  "Électroménager","Luminaire","Store ","Voilage","Literie","Matelas",
];

// Mots-clés que le nom ou la catégorie DOIT contenir pour être pertinent
const DESIGN_POSITIVE = [
  "architect","intérieur","interior","design","décor","déco","aménag","amenag",
  "studio","atelier","cabinet","agence","bureau d'études","espace","concept",
];

const FRENCH_POSTAL = /\b(75|69|13|31|33|59|67|76|77|78|91|92|93|94|95|44|06|38|34|35|57|62|63)\d{3}\b/;
const HAS_CJK = /[\u4e00-\u9fff\u3040-\u30ff\uac00-\ud7af\u0900-\u097f\u0e00-\u0e7f\u1000-\u109f]/;

function isMoroccanBusiness(name, address, category, cityName) {
  if (HAS_CJK.test(name)) return false;

  const textLower = (name + " " + category).toLowerCase();

  // Reject non-design businesses
  if (NON_DESIGN_KEYWORDS.some((k) => textLower.includes(k.toLowerCase()))) return false;

  // Must contain at least one design-related keyword in name or category
  const hasDesignKeyword = DESIGN_POSITIVE.some((k) => textLower.includes(k));
  if (!hasDesignKeyword) return false;

  if (FOREIGN_KEYWORDS.some((k) => address.includes(k))) return false;
  if (FRENCH_POSTAL.test(address)) return false;
  if (address.length > 0) {
    const hasMoroccan =
      MOROCCAN_INDICATORS.some((k) => address.includes(k)) ||
      address.toLowerCase().includes(cityName.toLowerCase());
    if (!hasMoroccan) return false;
  }
  return true;
}

// ─── Phase 1: Business Listings API ─────────────────────────────────────────

async function searchBusinessListings(keyword, cityName) {
  const payload = [{
    keyword: `${keyword} ${cityName}`,
    location_name: `${cityName}, Maroc`,
    language_code: "fr",
    depth: 100,
  }];

  const res = await fetch(
    "https://api.dataforseo.com/v3/business_data/business_listings/search/live",
    {
      method: "POST",
      headers: { Authorization: `Basic ${DATAFORSEO_AUTH}`, "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }
  );

  if (!res.ok) { console.error(`  [Listings ERR] HTTP ${res.status}`); return []; }
  const json = await res.json();
  const task = json?.tasks?.[0];
  if (!task || task.status_code !== 20000) {
    console.error(`  [Listings ERR] ${task?.status_message ?? "Unknown"}`);
    return [];
  }
  return task.result?.[0]?.items ?? [];
}

// ─── Phase 2: Google Maps SERP API ──────────────────────────────────────────

async function searchGoogleMapsSERP(keyword, cityName) {
  const payload = [{
    keyword: `${keyword} ${cityName} Maroc`,
    location_name: "Morocco",
    language_code: "fr",
    device: "desktop",
    os: "windows",
    depth: 100,
  }];

  const res = await fetch(
    "https://api.dataforseo.com/v3/serp/google/maps/live/advanced",
    {
      method: "POST",
      headers: { Authorization: `Basic ${DATAFORSEO_AUTH}`, "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }
  );

  if (!res.ok) { console.error(`  [SERP ERR] HTTP ${res.status}`); return []; }
  const json = await res.json();
  const task = json?.tasks?.[0];
  if (!task || task.status_code !== 20000) {
    console.error(`  [SERP ERR] ${task?.status_message ?? "Unknown"}`);
    return [];
  }

  // SERP API returns items in a different format
  const items = task.result?.[0]?.items ?? [];
  return items
    .filter((i) => i.type === "maps_search")
    .map((i) => ({
      title: i.title,
      address: i.address || "",
      phone: i.phone || "",
      rating: { value: i.rating?.value ?? 0, votes_count: i.rating?.votes_count ?? 0 },
      url: i.url || "",
      category: i.category || "",
      additional_categories: i.additional_categories || [],
    }));
}

// ─── Insertion via API ──────────────────────────────────────────────────────

async function postArchitect(architect, index) {
  if (DRY_RUN) {
    console.log(`  [DRY] ${architect.name} (${architect.citySlug}) — ${architect.specialties.join(", ")}`);
    return true;
  }

  const body = {
    name: architect.name,
    email: `${slugify(architect.name).slice(0, 35)}-int-${index}@bati.ma`,
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
    headers: { "Content-Type": "application/json", "x-publishable-api-key": API_KEY },
    body: JSON.stringify(body),
  });

  if (res.ok) return true;
  const err = await res.text().catch(() => "");
  if (err.includes("déjà utilisé") || err.includes("duplicate") || err.includes("Unique")) {
    // Silently skip duplicates
    return true;
  }
  console.error(`  [POST ERR] ${architect.name}: HTTP ${res.status} — ${err.slice(0, 80)}`);
  return false;
}

// ─── Main ───────────────────────────────────────────────────────────────────

async function main() {
  console.log("🎨 Scraping architectes d'intérieur / designers au Maroc\n");
  if (DRY_RUN) console.log("⚠️  Mode dry-run : aucune insertion\n");

  const allArchitects = [];
  const seenNames = new Set();

  function addResult(item, citySlug, cityName, source) {
    const name = (item.title || "").trim();
    if (!name || name.length < 2) return;

    const key = `${citySlug}::${name.toLowerCase()}`;
    if (seenNames.has(key)) return;

    const address = (item.address || "").trim();
    const category = (item.category || "") + " " + (item.additional_categories || []).join(" ");
    if (!isMoroccanBusiness(name, address, category, cityName)) {
      return;
    }

    seenNames.add(key);

    const desc = address
      ? `Architecte d'intérieur basé à ${cityName}. ${address}`
      : `Architecte d'intérieur basé à ${cityName}, Maroc.`;

    allArchitects.push({
      name,
      phone: item.phone ?? "",
      rating: item.rating?.value ?? 0,
      reviewCount: item.rating?.votes_count ?? 0,
      website: item.url ?? "",
      description: desc,
      specialties: ["Intérieur"],
      citySlug,
      source,
    });
  }

  // ─── Phase 1: Business Listings ────────────────────────────────────────────
  if (!SERP_ONLY) {
    console.log("═══ Phase 1: Business Listings API ═══\n");
    for (const city of CITIES) {
      for (const keyword of KEYWORDS) {
        console.log(`🔍 [Listings] "${keyword}" → ${city.name}`);
        await sleep(300);

        const items = await searchBusinessListings(keyword, city.name);
        let added = 0;
        for (const item of items) {
          const before = allArchitects.length;
          addResult(item, city.slug, city.name, "listings");
          if (allArchitects.length > before) added++;
        }
        console.log(`   ${items.length} résultats, ${added} nouveaux ajoutés`);
      }
    }
    console.log(`\n📊 Phase 1 terminée: ${allArchitects.length} architectes d'intérieur\n`);
  }

  // ─── Phase 2: Google Maps SERP ─────────────────────────────────────────────
  if (!LISTINGS_ONLY) {
    console.log("═══ Phase 2: Google Maps SERP API (données fraîches) ═══\n");

    // Utiliser seulement les mots-clés les plus pertinents pour SERP (plus cher)
    const serpKeywords = [
      "architecte d'intérieur",
      "décorateur d'intérieur",
      "designer intérieur",
    ];

    for (const city of CITIES) {
      for (const keyword of serpKeywords) {
        console.log(`🔍 [SERP] "${keyword}" → ${city.name}`);
        await sleep(500);

        const items = await searchGoogleMapsSERP(keyword, city.name);
        let added = 0;
        for (const item of items) {
          const before = allArchitects.length;
          addResult(item, city.slug, city.name, "serp");
          if (allArchitects.length > before) added++;
        }
        console.log(`   ${items.length} résultats, ${added} nouveaux ajoutés`);
      }
    }
    console.log(`\n📊 Phase 2 terminée: ${allArchitects.length} total\n`);
  }

  // ─── Résumé ────────────────────────────────────────────────────────────────
  console.log(`\n✅ Total: ${allArchitects.length} architectes d'intérieur uniques`);
  console.log("📊 Par ville:");

  const byCity = {};
  for (const a of allArchitects) {
    byCity[a.citySlug] = (byCity[a.citySlug] ?? 0) + 1;
  }
  for (const [city, count] of Object.entries(byCity).sort((a, b) => b[1] - a[1])) {
    console.log(`   ${city}: ${count}`);
  }

  const bySource = {};
  for (const a of allArchitects) {
    bySource[a.source] = (bySource[a.source] ?? 0) + 1;
  }
  console.log("\n📊 Par source:");
  for (const [src, count] of Object.entries(bySource)) {
    console.log(`   ${src}: ${count}`);
  }

  // ─── Insertion ─────────────────────────────────────────────────────────────
  if (DRY_RUN) {
    console.log("\n⚠️  Dry-run terminé. Relancez sans --dry-run pour insérer.\n");
    for (const a of allArchitects) {
      console.log(`  ${a.name} (${a.citySlug}) — ${a.source}`);
    }
    return;
  }

  console.log(`\n🚀 Insertion dans api.bati.ma...`);
  let ok = 0, err = 0;

  for (let i = 0; i < allArchitects.length; i++) {
    const success = await postArchitect(allArchitects[i], i + 1);
    if (success) { ok++; if (ok % 10 === 0) process.stdout.write(`  ${ok} insérés...\r`); }
    else { err++; }
    await sleep(200);
  }

  console.log(`\n🎉 Terminé! Insérés: ${ok} | Erreurs: ${err}`);
}

main().catch(console.error);
