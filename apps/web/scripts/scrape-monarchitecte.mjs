/**
 * scrape-monarchitecte.mjs
 * Scrape l'annuaire monarchitecte.ma
 *
 * Stratégie :
 *  1. Parser sitemap.xml → URLs directes de profils (243+)
 *  2. Paginer les listing par ville (46/architectes-casablanca?page=N, etc.)
 *  3. Fetch chaque profil SSR, extraire nom/tel/adresse/ville
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

// Villes avec leur city-ID sur monarchitecte.ma
const CITY_PAGES = [
  { id: 46,  slug: "casablanca",  city: "casablanca" },
  { id: 62,  slug: "marrakech",   city: "marrakech" },
  { id: 53,  slug: "rabat",       city: "rabat" },
  { id: 112, slug: "tanger",      city: "tanger" },
  { id: 72,  slug: "agadir",      city: "agadir" },
  { id: 55,  slug: "fes",         city: "fes" },
  { id: 65,  slug: "meknes",      city: "meknes" },
  { id: 70,  slug: "oujda",       city: "oujda" },
  { id: 67,  slug: "kenitra",     city: "kenitra" },
  { id: 78,  slug: "tetouan",     city: "tetouan" },
  { id: 80,  slug: "nador",       city: "nador" },
  { id: 90,  slug: "el-jadida",   city: "el-jadida" },
];

const CITY_MAP = {
  casablanca: "casablanca", "dar el beida": "casablanca", mohammedia: "casablanca",
  marrakech: "marrakech", marrakesh: "marrakech",
  rabat: "rabat", "salé": "rabat", sale: "rabat",
  tanger: "tanger", tangier: "tanger",
  agadir: "agadir",
  "fès": "fes", fez: "fes", fes: "fes",
  "meknès": "meknes", meknes: "meknes",
  oujda: "oujda",
  "kénitra": "kenitra", kenitra: "kenitra",
  "tétouan": "tetouan", tetouan: "tetouan",
  nador: "nador",
  "el jadida": "el-jadida", "el-jadida": "el-jadida",
  ifrane: "ifrane", laayoune: "laayoune", "laâyoune": "laayoune",
  "beni mellal": "beni-mellal", settat: "settat", safi: "safi",
  essaouira: "essaouira", khouribga: "khouribga",
};

function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

function slugify(str) {
  return str.toLowerCase().normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function isProfileUrl(url) {
  const path = url.replace(SITE_BASE, "").replace(/\?.*$/, "");
  return /^\/[a-z0-9][a-z0-9-]+-\d+$/.test(path);
}

// ─── Source 1 : Sitemap XML ──────────────────────────────────────────────────
async function fromSitemap() {
  console.log("📄 Lecture du sitemap.xml...");
  const urls = new Set();
  try {
    const res = await fetch(`${SITE_BASE}/sitemap.xml`, { headers: { "User-Agent": UA } });
    const xml = await res.text();
    const matches = xml.matchAll(/<loc>(https:\/\/www\.monarchitecte\.ma\/[^<]+)<\/loc>/g);
    for (const [, url] of matches) {
      const clean = url.trim().replace(/\?.*$/, "");
      if (isProfileUrl(clean)) urls.add(clean);
    }
    console.log(`  ✅ ${urls.size} URLs depuis sitemap`);
  } catch (e) {
    console.error(`  [ERR] Sitemap: ${e.message}`);
  }
  return urls;
}

// ─── Source 2 : Pages listing par ville ─────────────────────────────────────
async function fromCityListings() {
  const urls = new Set();
  console.log("🏙️  Pagination des pages listing par ville...");

  for (const city of CITY_PAGES) {
    let page = 1;
    let cityTotal = 0;
    while (true) {
      const url = `${SITE_BASE}/${city.id}/architectes-${city.slug}${page > 1 ? `?page=${page}` : ""}`;
      try {
        const res = await fetch(url, { headers: { "User-Agent": UA } });
        if (!res.ok) break;
        const html = await res.text();
        const root = parse(html);
        const links = root.querySelectorAll("a[href]");
        let found = 0;
        for (const link of links) {
          const href = (link.getAttribute("href") ?? "").replace(SITE_BASE, "").replace(/\?.*$/, "");
          if (isProfileUrl(href)) {
            const full = `${SITE_BASE}${href}`;
            if (!urls.has(full)) { urls.add(full); found++; cityTotal++; }
          }
        }
        if (found === 0) break;
        page++;
        await sleep(400);
      } catch { break; }
    }
    console.log(`  ${city.slug}: ${cityTotal} profils (${page - 1} pages)`);
    await sleep(300);
  }
  console.log(`  ✅ ${urls.size} URLs depuis listings villes`);
  return urls;
}

// ─── Scraper un profil ───────────────────────────────────────────────────────
function extractCity(titleText, addressText) {
  const titleMatch = titleText.match(/ à ([^|–—\n\r,]+)/i);
  if (titleMatch) {
    const raw = titleMatch[1].trim().toLowerCase().replace(/[,.].*$/, "").trim();
    if (CITY_MAP[raw]) return CITY_MAP[raw];
    for (const [key, val] of Object.entries(CITY_MAP)) {
      if (raw.includes(key) || key.includes(raw)) return val;
    }
  }
  if (addressText) {
    const addr = addressText.toLowerCase();
    for (const [key, val] of Object.entries(CITY_MAP)) {
      if (addr.includes(key)) return val;
    }
  }
  return "maroc";
}

async function scrapeProfile(url) {
  try {
    const res = await fetch(url, { headers: { "User-Agent": UA } });
    if (!res.ok) return null;
    const html = await res.text();
    const root = parse(html);

    const name =
      root.querySelector("div.add-listing-box h1")?.text.trim() ||
      root.querySelector("h1")?.text.trim();
    if (!name || name.length < 3) return null;

    const phone = root.querySelector("div#numero h3")?.text.trim() ?? "";
    const addressEl = root.querySelector("li:has(> i.ti-location-pin)");
    const address = addressEl?.text.trim() ?? "";
    const titleText = root.querySelector("title")?.text ?? "";
    const city = extractCity(titleText, address);

    const descEl = root.querySelector("div.detail-wrapper div.detail-wrapper-body");
    const description = descEl?.text.trim() ||
      (address ? `Architecte à ${city !== "maroc" ? city : "Maroc"}. ${address}` : `Architecte inscrit sur monarchitecte.ma`);

    return { name, phone: phone.replace(/\s+/g, " ").trim(), address, city, description };
  } catch { return null; }
}

// ─── POST MedusaJS ───────────────────────────────────────────────────────────
async function postArchitect(a, index) {
  const body = {
    name: a.name,
    email: `${slugify(a.name).slice(0, 40)}-ma-${index}@bati.ma`,
    phone: a.phone || "",
    specialties: ["Résidentiel"],
    regions: [a.city],
    description: a.description,
    rating: 0, review_count: 0,
    verified: false, premium: false, is_active: true,
  };
  const res = await fetch(`${API_BASE}/store/architects`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-publishable-api-key": API_KEY },
    body: JSON.stringify(body),
  });
  if (res.ok) return true;
  const err = await res.text().catch(() => "");
  console.error(`  [ERR] ${a.name}: HTTP ${res.status} — ${err.slice(0, 80)}`);
  return false;
}

// ─── Main ────────────────────────────────────────────────────────────────────
async function main() {
  console.log("🏛️  Scraping monarchitecte.ma (v2 — sitemap + city listings)\n");

  // Collecter toutes les URLs
  const [sitemapUrls, cityUrls] = await Promise.all([fromSitemap(), fromCityListings()]);
  const allUrls = new Set([...sitemapUrls, ...cityUrls]);
  console.log(`\n📊 Total URLs uniques : ${allUrls.size}\n`);

  if (allUrls.size === 0) {
    console.error("❌ Aucune URL trouvée.");
    return;
  }

  // Scraper chaque profil
  console.log(`📥 Scraping ${allUrls.size} profils...\n`);
  const seen = new Set();
  const architects = [];
  const urlList = [...allUrls];

  for (let i = 0; i < urlList.length; i++) {
    const data = await scrapeProfile(urlList[i]);
    if (!data) { await sleep(300); continue; }

    const key = `${data.city}::${data.name.toLowerCase().trim()}`;
    if (seen.has(key)) { await sleep(150); continue; }
    seen.add(key);
    architects.push(data);

    if ((i + 1) % 25 === 0)
      console.log(`  [${i + 1}/${urlList.length}] ${architects.length} collectés...`);
    await sleep(350);
  }

  console.log(`\n✅ Profils uniques : ${architects.length}`);

  // Répartition par ville
  const byCity = {};
  for (const a of architects) byCity[a.city] = (byCity[a.city] ?? 0) + 1;
  console.log("   Répartition :");
  for (const [c, n] of Object.entries(byCity).sort((a, b) => b[1] - a[1]).slice(0, 10))
    console.log(`     ${c}: ${n}`);

  // Insertion
  console.log(`\n🚀 Insertion dans api.bati.ma...`);
  let ok = 0, err = 0;
  for (let i = 0; i < architects.length; i++) {
    const success = await postArchitect(architects[i], i + 1);
    if (success) { ok++; if (ok % 50 === 0) process.stdout.write(`  ${ok}/${architects.length} insérés...\r`); }
    else err++;
    await sleep(200);
  }

  console.log(`\n🎉 Terminé ! Insérés: ${ok} | Erreurs: ${err}`);
  console.log(`\ncurl "${API_BASE}/store/architects?limit=1" | jq '.count'`);
}

main().catch(console.error);
