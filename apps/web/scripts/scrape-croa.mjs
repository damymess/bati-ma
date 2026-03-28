/**
 * scrape-croa.mjs
 * Scrape les annuaires officiels des Conseils Régionaux de l'Ordre des Architectes (CROA) du Maroc
 *
 * Sources :
 *  - CROA Centre (Casablanca) : ordrearchicentre.org/listes-des-architectes/  → ~1065 noms
 *  - CROA Rabat-Salé-Kénitra  : ordrearchitectesrabat.ma/annuaire...?page=N   → ~320 noms (8 pages)
 *
 * Usage : node scripts/scrape-croa.mjs
 */

import { parse } from "node-html-parser";

const API_BASE = "https://api.bati.ma";
const API_KEY =
  "pk_e0d8fd70ab0cf7e115d76345ec382cf5304b2411c545a5cc3ef1fc1ceb86f75f";
const DELAY_MS = 200;

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36";

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function slugify(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(/\s+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

// ─── CROA Centre (Casablanca) ──────────────────────────────────────────────
async function scrapeCroaCentre() {
  console.log("\n📋 CROA Centre (Casablanca) — ordrearchicentre.org");
  const url = "https://ordrearchicentre.org/listes-des-architectes/";

  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) {
    console.error(`  [ERR] HTTP ${res.status}`);
    return [];
  }

  const html = await res.text();
  const root = parse(html);

  const names = [];
  const tds = root.querySelectorAll("td");

  for (const td of tds) {
    const text = td.text.trim();
    if (
      text.length > 3 &&
      text.length < 80 &&
      /[A-ZÁÀÂÄÉÈÊËÍÌÎÏÓÒÔÖÚÙÛÜ]/.test(text) &&
      !/^\d+$/.test(text) &&
      !text.includes("<") &&
      !text.includes("http") &&
      !text.includes("@")
    ) {
      // Convert ALL CAPS to Title Case
      const name = text === text.toUpperCase() ? toTitleCase(text) : text;
      names.push({ name, city: "casablanca", sector: "Privé" });
    }
  }

  console.log(`  Found ${names.length} architects`);
  return names;
}

// ─── CROA Rabat (Rabat-Salé-Kénitra) ──────────────────────────────────────
async function scrapeCroaRabat() {
  console.log("\n📋 CROA Rabat — ordrearchitectesrabat.ma");
  const BASE =
    "https://www.ordrearchitectesrabat.ma/annuaire-des-architectes-rabat-sal-zemour-zaer";
  const TOTAL_PAGES = 8;
  const names = [];

  for (let page = 0; page < TOTAL_PAGES; page++) {
    const url = `${BASE}?page=${page}`;
    const res = await fetch(url, { headers: { "User-Agent": UA } });
    if (!res.ok) {
      console.error(`  [ERR] Page ${page}: HTTP ${res.status}`);
      continue;
    }

    const html = await res.text();
    const root = parse(html);

    // Table rows with architect names and sector
    const rows = root.querySelectorAll("tr");
    let count = 0;
    for (const row of rows) {
      const nameTd = row.querySelector(".views-field-name");
      const sectorTd = row.querySelector(".views-field-field-secteur");
      if (!nameTd) continue;

      const name = nameTd.text.trim();
      const sector = sectorTd?.text.trim() ?? "Privé";

      if (name.length > 2 && name.length < 80 && !/^\s*$/.test(name)) {
        names.push({ name, city: "rabat", sector });
        count++;
      }
    }

    console.log(`  Page ${page}: ${count} architects`);
    if (page < TOTAL_PAGES - 1) await sleep(800);
  }

  console.log(`  Total Rabat: ${names.length}`);
  return names;
}

// ─── POST to MedusaJS ─────────────────────────────────────────────────────
async function postArchitect(a, index) {
  const specialties =
    a.sector === "Public"
      ? ["Urbanisme"]
      : ["Résidentiel"];

  const body = {
    name: a.name,
    email: `${slugify(a.name).slice(0, 40)}-croa-${index}@bati.ma`,
    phone: "",
    specialties,
    regions: [a.city],
    description: `Architecte inscrit à l'Ordre des Architectes du Maroc (${
      a.city === "casablanca"
        ? "CROA Centre — Casablanca"
        : "CROA Rabat-Salé-Kénitra"
    }). Secteur ${a.sector ?? "Privé"}.`,
    rating: 0,
    review_count: 0,
    verified: true, // inscrit à l'Ordre = vérifié
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

  if (res.ok) return true;
  const err = await res.text().catch(() => "");
  console.error(`  [ERR] ${a.name}: HTTP ${res.status} — ${err.slice(0, 80)}`);
  return false;
}

// ─── Main ─────────────────────────────────────────────────────────────────
async function main() {
  console.log("🏛️  Scraping official CROA directories...\n");

  // Collect from both sources
  const [centre, rabat] = await Promise.all([
    scrapeCroaCentre(),
    scrapeCroaRabat(),
  ]);

  const all = [...centre, ...rabat];

  // Deduplicate by name+city
  const seen = new Set();
  const unique = all.filter((a) => {
    const key = `${a.city}::${a.name.toLowerCase().trim()}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  console.log(`\n✅ Total unique: ${unique.length}`);
  console.log(`   Casablanca (CROA Centre): ${unique.filter(a => a.city === "casablanca").length}`);
  console.log(`   Rabat (CROA Rabat): ${unique.filter(a => a.city === "rabat").length}`);

  console.log(`\n🚀 Inserting into api.bati.ma...`);
  let ok = 0;
  let err = 0;

  for (let i = 0; i < unique.length; i++) {
    const success = await postArchitect(unique[i], i + 1);
    if (success) {
      ok++;
      if (ok % 50 === 0) process.stdout.write(`  ${ok}/${unique.length} inserted...\r`);
    } else {
      err++;
    }
    await sleep(DELAY_MS);
  }

  console.log(`\n\n🎉 Done! Inserted: ${ok} | Errors: ${err}`);
  console.log(`\nVerify:`);
  console.log(`  curl "https://api.bati.ma/store/architects?regions[]=casablanca&limit=1" | jq '.count'`);
  console.log(`  curl "https://api.bati.ma/store/architects?limit=1" | jq '.count'`);
}

main().catch(console.error);
