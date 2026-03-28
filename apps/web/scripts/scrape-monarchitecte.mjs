/**
 * scrape-monarchitecte.mjs
 * Scrape l'annuaire monarchitecte.ma (~1 100 architectes marocains)
 *
 * Stratégie :
 *  1. Paginer les pages listing /architectes?page=N pour collecter tous les liens de profils
 *  2. Fetch chaque profil (HTML server-side rendered — pas de JS nécessaire)
 *  3. Extraire : nom, téléphone, adresse, ville
 *  4. POST vers api.bati.ma/store/architects
 *
 * Usage : node scripts/scrape-monarchitecte.mjs
 */

import { parse } from "node-html-parser";

const API_BASE = "https://api.bati.ma";
const API_KEY =
  "pk_e0d8fd70ab0cf7e115d76345ec382cf5304b2411c545a5cc3ef1fc1ceb86f75f";
const SITE_BASE = "https://www.monarchitecte.ma";

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

const CITY_MAP = {
  casablanca: "casablanca",
  "dar el beida": "casablanca",
  "dar-el-beida": "casablanca",
  marrakech: "marrakech",
  marrakesh: "marrakech",
  rabat: "rabat",
  "salé": "rabat",
  sale: "rabat",
  tanger: "tanger",
  tangier: "tanger",
  "tanger-tétouan": "tanger",
  agadir: "agadir",
  "fès": "fes",
  fez: "fes",
  fes: "fes",
  "meknès": "meknes",
  meknes: "meknes",
  oujda: "oujda",
  "kénitra": "kenitra",
  kenitra: "kenitra",
  "tétouan": "tetouan",
  tetouan: "tetouan",
  nador: "nador",
  "el jadida": "el-jadida",
  "el-jadida": "el-jadida",
  ifrane: "ifrane",
  laayoune: "laayoune",
  "laâyoune": "laayoune",
  "beni mellal": "beni-mellal",
  "béni mellal": "beni-mellal",
  settat: "settat",
  "safi": "safi",
  essaouira: "essaouira",
  khouribga: "khouribga",
  "mohammedia": "casablanca",
  berrechid: "casablanca",
  "ben slimane": "casablanca",
  nouaceur: "casablanca",
  mediouna: "casablanca",
};

function extractCity(titleText, addressText) {
  // Try from <title>: "Architecte {NOM} à {VILLE} | ..."
  const titleMatch = titleText.match(/ à ([^|–—\n\r]+)/i);
  if (titleMatch) {
    const raw = titleMatch[1].trim().toLowerCase().replace(/[,.].*$/, "").trim();
    if (CITY_MAP[raw]) return CITY_MAP[raw];
    // Try partial match
    for (const [key, val] of Object.entries(CITY_MAP)) {
      if (raw.includes(key) || key.includes(raw)) return val;
    }
  }

  // Fallback: scan address
  if (addressText) {
    const addr = addressText.toLowerCase();
    for (const [key, val] of Object.entries(CITY_MAP)) {
      if (addr.includes(key)) return val;
    }
  }

  return "maroc";
}

// ─── Étape 1 : Collecter tous les liens de profils ──────────────────────────
async function collectProfileUrls() {
  console.log("📋 Collecte des liens de profils (pages listing)...");
  const urls = new Set();
  let page = 1;

  while (true) {
    const url =
      page === 1
        ? `${SITE_BASE}/architectes`
        : `${SITE_BASE}/architectes?page=${page}`;

    let html;
    try {
      const res = await fetch(url, { headers: { "User-Agent": UA } });
      if (!res.ok) {
        if (res.status === 404) break;
        console.error(`  [ERR] Page ${page}: HTTP ${res.status}`);
        break;
      }
      html = await res.text();
    } catch (e) {
      console.error(`  [ERR] Page ${page}: ${e.message}`);
      break;
    }

    const root = parse(html);

    // Cards avec liens de profils
    const links = root.querySelectorAll("a[href]");
    let found = 0;

    for (const link of links) {
      const href = link.getAttribute("href") ?? "";
      // Pattern: /slug-id ou https://www.monarchitecte.ma/slug-id
      const clean = href.replace(SITE_BASE, "").replace(/\?.*$/, "");
      if (/^\/[a-z0-9][a-z0-9-]+-\d+$/.test(clean)) {
        const full = `${SITE_BASE}${clean}`;
        if (!urls.has(full)) {
          urls.add(full);
          found++;
        }
      }
    }

    if (found === 0) {
      console.log(`  Page ${page}: aucun nouveau lien — fin du listing`);
      break;
    }

    console.log(`  Page ${page}: ${found} nouveaux liens (total: ${urls.size})`);
    page++;
    await sleep(600);
  }

  console.log(`\n  ✅ Total liens collectés : ${urls.size}`);
  return [...urls];
}

// ─── Étape 2 : Scraper un profil ────────────────────────────────────────────
async function scrapeProfile(url) {
  let html;
  try {
    const res = await fetch(url, { headers: { "User-Agent": UA } });
    if (!res.ok) return null;
    html = await res.text();
  } catch {
    return null;
  }

  const root = parse(html);

  // Nom
  const name =
    root.querySelector("div.add-listing-box h1")?.text.trim() ||
    root.querySelector("h1")?.text.trim();

  if (!name || name.length < 3) return null;

  // Téléphone
  const phone =
    root.querySelector("div#numero h3")?.text.trim() ||
    root.querySelector(".phone")?.text.trim() ||
    "";

  // Adresse
  const addressEl =
    root.querySelector("li:has(> i.ti-location-pin)") ||
    root.querySelector(".address") ||
    root.querySelector("[class*='location']");
  const address = addressEl?.text.replace(/^\s*[\u{1F4CD}📍]/u, "").trim() ?? "";

  // Ville depuis le <title>
  const titleText = root.querySelector("title")?.text ?? "";
  const city = extractCity(titleText, address);

  // Description (souvent vide)
  const descEl = root.querySelector("div.detail-wrapper div.detail-wrapper-body");
  const description =
    descEl?.text.trim() ||
    (address
      ? `Architecte à ${city !== "maroc" ? city : "Maroc"}. ${address}`
      : `Architecte inscrit sur monarchitecte.ma`);

  return { name, phone: phone.replace(/\s+/g, " ").trim(), address, city, description };
}

// ─── Étape 3 : POST vers MedusaJS ────────────────────────────────────────────
async function postArchitect(a, index) {
  const body = {
    name: a.name,
    email: `${slugify(a.name).slice(0, 40)}-ma-${index}@bati.ma`,
    phone: a.phone || "",
    specialties: ["Résidentiel"],
    regions: [a.city],
    description: a.description,
    rating: 0,
    review_count: 0,
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

  if (res.ok) return true;
  const err = await res.text().catch(() => "");
  console.error(`  [ERR] ${a.name}: HTTP ${res.status} — ${err.slice(0, 80)}`);
  return false;
}

// ─── Main ────────────────────────────────────────────────────────────────────
async function main() {
  console.log("🏛️  Scraping monarchitecte.ma...\n");

  // Étape 1 : Collecter les URLs
  const profileUrls = await collectProfileUrls();

  if (profileUrls.length === 0) {
    console.error("❌ Aucun lien de profil trouvé. Vérifier la structure du site.");
    return;
  }

  console.log(`\n📥 Scraping ${profileUrls.length} profils...\n`);

  const seen = new Set();
  const architects = [];

  for (let i = 0; i < profileUrls.length; i++) {
    const url = profileUrls[i];
    const data = await scrapeProfile(url);

    if (!data) {
      process.stdout.write(`  [${i + 1}/${profileUrls.length}] Skip (pas de données)\r`);
      await sleep(300);
      continue;
    }

    const key = `${data.city}::${data.name.toLowerCase().trim()}`;
    if (seen.has(key)) {
      process.stdout.write(`  [${i + 1}/${profileUrls.length}] Doublon: ${data.name}\r`);
      await sleep(150);
      continue;
    }
    seen.add(key);
    architects.push(data);

    if ((i + 1) % 20 === 0) {
      console.log(`  [${i + 1}/${profileUrls.length}] ${architects.length} architectes collectés...`);
    }
    await sleep(350);
  }

  console.log(`\n\n✅ Profils collectés : ${architects.length} uniques`);

  // Répartition par ville
  const byCityCount = {};
  for (const a of architects) {
    byCityCount[a.city] = (byCityCount[a.city] ?? 0) + 1;
  }
  const topCities = Object.entries(byCityCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8);
  console.log("   Répartition :");
  for (const [city, count] of topCities) {
    console.log(`     ${city}: ${count}`);
  }

  console.log(`\n🚀 Insertion dans api.bati.ma...`);
  let ok = 0;
  let err = 0;

  for (let i = 0; i < architects.length; i++) {
    const success = await postArchitect(architects[i], i + 1);
    if (success) {
      ok++;
      if (ok % 50 === 0)
        process.stdout.write(`  ${ok}/${architects.length} insérés...\r`);
    } else {
      err++;
    }
    await sleep(200);
  }

  console.log(`\n\n🎉 Terminé ! Insérés: ${ok} | Erreurs: ${err}`);
  console.log(
    `\nVérifier :\n  curl "${API_BASE}/store/architects?limit=1" | jq '.count'`
  );
}

main().catch(console.error);
