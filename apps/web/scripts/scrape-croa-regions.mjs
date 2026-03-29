/**
 * scrape-croa-regions.mjs
 * Scrape les CROA régionaux non encore couverts :
 *   - CROAMS (Marrakech-Safi) : www.croams.ma — 358 architectes avec adresse + téléphone
 *   - CROA Nord/Tanger        : croa.ma — PDF liste annuelle (~187 architectes)
 *
 * Usage : node scripts/scrape-croa-regions.mjs
 */

import { parse } from "node-html-parser";
import { execSync } from "child_process";
import { writeFileSync, unlinkSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";

const API_BASE = "https://api.bati.ma";
const API_KEY = "pk_e0d8fd70ab0cf7e115d76345ec382cf5304b2411c545a5cc3ef1fc1ceb86f75f";
const DELAY_MS = 250;

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

/**
 * Extract city slug from a Moroccan address string.
 * Falls back to the provided defaultCity.
 */
function detectCity(address, defaultCity) {
  const addr = (address || "").toLowerCase();
  if (addr.includes("marrakech") || addr.includes("guéliz") || addr.includes("gueliz") || addr.includes("hivernage") || addr.includes("palmeraie")) return "marrakech";
  if (addr.includes("essaouira")) return "essaouira";
  if (addr.includes("safi") || addr.includes("saffi")) return "safi";
  if (addr.includes("benguerir") || addr.includes("benguérir")) return "benguerir";
  if (addr.includes("kelaa") || addr.includes("kelaâ") || addr.includes("kelâa")) return "el-kelaa";
  if (addr.includes("tanger") || addr.includes("tangier")) return "tanger";
  if (addr.includes("tétouan") || addr.includes("tetouan")) return "tetouan";
  if (addr.includes("al hoceima") || addr.includes("hoceima")) return "al-hoceima";
  return defaultCity;
}

// ─── CROAMS (Marrakech-Safi) ──────────────────────────────────────────────────
async function scrapeCroams() {
  console.log("\n📋 CROAMS (Marrakech-Safi) — www.croams.ma/liste-des-architectes/");

  const allArchitects = [];
  let page = 1;

  while (true) {
    const url =
      "https://www.croams.ma/liste-des-architectes/" +
      (page > 1 ? "?paged=" + page : "");

    const r = await fetch(url, { headers: { "User-Agent": UA } });
    if (!r.ok) {
      console.error(`  [ERR] Page ${page}: HTTP ${r.status}`);
      break;
    }
    const html = await r.text();
    const root = parse(html);

    const nameEls  = root.querySelectorAll(".architect_infos .content-title");
    const addrEls  = root.querySelectorAll(".architect_adress");
    const secEls   = root.querySelectorAll(".architect_secteur span");
    const phoneEls = root.querySelectorAll(".architect_contacts a[href^='tel:']");

    if (nameEls.length === 0) break; // no more data

    for (let i = 0; i < nameEls.length; i++) {
      const rawName = nameEls[i]?.text?.trim() || "";
      const name    = rawName === rawName.toUpperCase() ? toTitleCase(rawName) : rawName;
      const address = addrEls[i]?.text?.trim() || "";
      const sector  = secEls[i]?.text?.trim() || "Privé";
      const phone   = (phoneEls[i]?.getAttribute("href") || "").replace("tel:", "").trim();

      if (name) {
        allArchitects.push({
          name,
          address,
          sector,
          phone,
          city: detectCity(address, "marrakech"),
        });
      }
    }

    process.stdout.write(`  Page ${page}: ${allArchitects.length} total\r`);

    const hasNext = !!root.querySelector("a.next.page-numbers");
    if (!hasNext) break;

    page++;
    await sleep(DELAY_MS + Math.random() * 100);
  }

  console.log(`\n  ✅ CROAMS scraped: ${allArchitects.length} architectes`);
  return allArchitects;
}

// ─── CROA Tanger (PDF) ────────────────────────────────────────────────────────
// The PDF URL pattern found: /storage/{id}/{hash}_Liste-des-Architectes--Zone-{zone}-Secteur-Priv%C3%A9.pdf
// Known URL from research (2024 list):
const TANGER_PDF_URL =
  "https://croa.ma/storage/64605/67dad0a97a7fb_Liste-des-Architectes--Zone-Tanger-Secteur-Priv%C3%A9.pdf";

async function scrapeCroaTangerPdf() {
  console.log("\n📋 CROA Tanger — PDF liste (croa.ma)");

  // Download the PDF
  const r = await fetch(TANGER_PDF_URL, { headers: { "User-Agent": UA } });
  if (!r.ok) {
    console.error(`  [ERR] PDF download HTTP ${r.status}`);
    return [];
  }

  const pdfBuffer = Buffer.from(await r.arrayBuffer());
  const tmpPdf = join(tmpdir(), "croa-tanger-" + Date.now() + ".pdf");
  const tmpTxt = tmpPdf.replace(".pdf", ".txt");

  try {
    writeFileSync(tmpPdf, pdfBuffer);
    console.log(`  PDF downloaded: ${(pdfBuffer.length / 1024).toFixed(0)} KB`);

    // Extract text with pdftotext (-layout preserves column alignment)
    execSync(
      `"C:\\Program Files\\Git\\mingw64\\bin\\pdftotext.exe" -layout "${tmpPdf}" "${tmpTxt}"`,
      { stdio: "pipe" }
    );

    const { readFileSync } = await import("fs");
    // Must use latin1 — pdftotext outputs ISO-8859-1 for this PDF
    const text = readFileSync(tmpTxt, "latin1");
    unlinkSync(tmpPdf);
    unlinkSync(tmpTxt);

    const lines = text.split("\n");

    // Detect "Commune" column position from the header line
    const headerIdx = lines.findIndex(
      (l) => l.includes("Civilit") && l.includes("Adresse")
    );
    const header = lines[headerIdx] || "";
    const colCommune = header.indexOf("Commune");

    const PAGE_SKIP =
      /CONSEIL REGIONAL|N[° ]+Civilit|Mode\s*d.exercice|Page \d|Secteur Priv/;

    const architects = [];

    for (const line of lines) {
      if (PAGE_SKIP.test(line)) continue;

      // Data rows: 1-3 digit N° followed by Mr./Mme.
      if (!/^\s{0,3}\d{1,3}\s+(Mr\.|Mme\.)\s+/.test(line)) continue;

      // Name block: positions 13..63 (NOM CAPS + Prénom Title)
      const nameBlock = line.slice(13, 64).trim();
      const nameMatch = nameBlock.match(
        /^([A-ZÁÀÂÄÉÈÊËÍÎÏÓÔÙÛÜ\s'\-]+?)\s{2,}([A-ZÁÀÂÄÉÈÊËÍÎÏÓÔÙÛÜ][a-záàâäéèêëíîïóôùûü\s'\-]+)/
      );
      let nom = "", prenom = "";
      if (nameMatch) {
        nom = nameMatch[1].trim();
        prenom = nameMatch[2].trim();
      } else {
        const parts = nameBlock.split(/\s{2,}/);
        nom = parts[0] || "";
        prenom = parts[1] || "";
      }

      // Phone: first occurrence of 05/06/07/08 pattern
      const phoneMatch = line.match(/\b(0[5678][\s\d]{9,14})/);
      const phone = phoneMatch ? phoneMatch[1].replace(/\s/g, "") : "";

      // Address: after phone (if present) up to Commune column
      let address = "";
      if (phoneMatch) {
        const phoneEnd =
          line.indexOf(phoneMatch[0]) + phoneMatch[0].length;
        const communeStart =
          colCommune > 0 ? colCommune : line.length - 30;
        address = line.slice(phoneEnd, communeStart).trim().replace(/^,\s*/, "");
      } else {
        // No phone — use fixed column positions
        const communeStart =
          colCommune > 0 ? colCommune : line.length - 20;
        address = line.slice(120, communeStart).trim();
      }

      // Commune: last field on the line
      const commune =
        colCommune > 0 ? line.slice(colCommune).replace(/\r/, "").trim() : "";

      // City slug from commune or address
      const cityText = (commune + " " + address).toLowerCase();
      let city = "tanger";
      if (cityText.includes("larache")) city = "larache";
      else if (cityText.includes("tetouan")) city = "tetouan";
      else if (cityText.includes("ksar")) city = "ksar-el-kebir";
      else if (cityText.includes("hoceima")) city = "al-hoceima";

      const fullName = toTitleCase(
        (nom + " " + prenom).replace(/\s+/g, " ").trim()
      );
      if (!fullName || fullName.length < 4) continue;

      architects.push({
        name: fullName,
        phone,
        address: address.slice(0, 120),
        sector: "Privé",
        city,
      });
    }

    console.log(`  Parsed ${architects.length} architects from PDF`);
    architects
      .slice(0, 5)
      .forEach((a) =>
        console.log(
          `    - ${a.name} | ${a.phone || "—"} | ${(a.address || "—").slice(0, 50)} | ${a.city}`
        )
      );

    return architects;
  } catch (e) {
    console.error("  [ERR] PDF parsing failed:", e.message);
    try { unlinkSync(tmpPdf); } catch {}
    try { unlinkSync(tmpTxt); } catch {}
    return [];
  }
}

// ─── POST to API ──────────────────────────────────────────────────────────────
async function postArchitect(a, index, source) {
  const specialties = a.sector === "Public" ? ["Urbanisme"] : ["Résidentiel"];

  const sourceLabel =
    source === "croams"
      ? "CROAMS (Marrakech-Safi)"
      : "CROA Nord-Tanger";

  const desc = a.address
    ? `Architecte inscrit à l'Ordre des Architectes du Maroc (${sourceLabel}). Secteur ${a.sector ?? "Privé"}. ${a.address}`
    : `Architecte inscrit à l'Ordre des Architectes du Maroc (${sourceLabel}). Secteur ${a.sector ?? "Privé"}.`;

  const body = {
    name: a.name,
    email: `${slugify(a.name).slice(0, 38)}-${source}-${index}@bati.ma`,
    phone: a.phone || "",
    specialties,
    regions: [a.city],
    description: desc,
    rating: 0,
    review_count: 0,
    verified: true,
    premium: false,
    is_active: true,
  };

  const r = await fetch(`${API_BASE}/store/architects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-publishable-api-key": API_KEY,
    },
    body: JSON.stringify(body),
  });

  if (r.ok) return true;
  const err = await r.text().catch(() => "");
  // Silently skip duplicate email errors
  if (err.includes("duplicate") || err.includes("unique") || err.includes("already")) return "dup";
  console.error(`  [ERR] ${a.name}: HTTP ${r.status} — ${err.slice(0, 60)}`);
  return false;
}

// ─── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  console.log("🏛️  Scraping regional CROA directories...\n");

  // Collect from all sources
  const [croams, tangerPdf] = await Promise.all([
    scrapeCroams(),
    scrapeCroaTangerPdf(),
  ]);

  const allSources = [
    ...croams.map((a) => ({ ...a, source: "croams" })),
    ...tangerPdf.map((a) => ({ ...a, source: "croa-tanger" })),
  ];

  // Deduplicate by name+city
  const seen = new Set();
  const unique = allSources.filter((a) => {
    const key = a.city + "::" + a.name.toLowerCase().trim();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  console.log(`\n✅ Total unique to insert: ${unique.length}`);
  console.log(`   CROAMS (Marrakech): ${unique.filter((a) => a.source === "croams").length}`);
  console.log(`   CROA Tanger (PDF): ${unique.filter((a) => a.source === "croa-tanger").length}`);

  // City breakdown
  const byCities = {};
  unique.forEach((a) => { byCities[a.city] = (byCities[a.city] || 0) + 1; });
  console.log("   Cities:", Object.entries(byCities).sort((a, b) => b[1] - a[1]).map(([c, n]) => `${c}:${n}`).join(", "));

  console.log("\n🚀 Inserting into api.bati.ma...");
  let ok = 0, dups = 0, errs = 0;

  for (let i = 0; i < unique.length; i++) {
    const result = await postArchitect(unique[i], i + 1, unique[i].source);
    if (result === true) { ok++; }
    else if (result === "dup") { dups++; }
    else { errs++; }

    if ((ok + dups) % 50 === 0 && ok + dups > 0) {
      process.stdout.write(`  ${ok} inserted, ${dups} dups, ${errs} errors (${i + 1}/${unique.length})\r`);
    }
    await sleep(DELAY_MS);
  }

  const fc = await fetch(`${API_BASE}/store/architects?limit=1`, {
    headers: { "x-publishable-api-key": API_KEY },
  });
  const fj = await fc.json();

  console.log(`\n\n🎉 Done! Inserted: ${ok} | Dups skipped: ${dups} | Errors: ${errs}`);
  console.log(`📊 Base bati.ma: ${fj.count} architectes total`);
}

main().catch(console.error);
