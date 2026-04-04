#!/usr/bin/env node
/**
 * Audit d'indexabilité pour bati.ma
 * Vérifie si les URLs du sitemap sont indexables (technique) et indexées (Google)
 *
 * Usage:
 *   node scripts/check-indexability.mjs                     # audit technique
 *   node scripts/check-indexability.mjs --check-google      # + vérif Google
 *   node scripts/check-indexability.mjs --url https://...   # URL spécifique
 *   node scripts/check-indexability.mjs --concurrency 10    # parallélisme (défaut: 5)
 */

import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITEMAP_URL = "https://bati.ma/sitemap.xml";
const USER_AGENT = "BatiMa-IndexChecker/1.0";
const REPORT_PATH = resolve(__dirname, "indexability-report.csv");

// ── CLI args ──────────────────────────────────────────────
const args = process.argv.slice(2);
const checkGoogle = args.includes("--check-google");
const singleUrlIdx = args.indexOf("--url");
const singleUrl = singleUrlIdx !== -1 ? args[singleUrlIdx + 1] : null;
const concurrencyIdx = args.indexOf("--concurrency");
const CONCURRENCY = concurrencyIdx !== -1 ? parseInt(args[concurrencyIdx + 1], 10) : 5;

// ── Couleurs console ──────────────────────────────────────
const c = {
  green: (s) => `\x1b[32m${s}\x1b[0m`,
  red: (s) => `\x1b[31m${s}\x1b[0m`,
  yellow: (s) => `\x1b[33m${s}\x1b[0m`,
  cyan: (s) => `\x1b[36m${s}\x1b[0m`,
  bold: (s) => `\x1b[1m${s}\x1b[0m`,
  dim: (s) => `\x1b[2m${s}\x1b[0m`,
};

// ── 1. Fetch et parse le sitemap ──────────────────────────
async function fetchSitemapUrls() {
  console.log(c.cyan(`\n  Fetching sitemap: ${SITEMAP_URL}\n`));
  const res = await fetch(SITEMAP_URL, { headers: { "User-Agent": USER_AGENT } });
  if (!res.ok) throw new Error(`Sitemap fetch failed: ${res.status}`);
  const xml = await res.text();

  // Extraire les <loc>...</loc>
  const urls = [];
  const regex = /<loc>([^<]+)<\/loc>/g;
  let match;
  while ((match = regex.exec(xml)) !== null) {
    urls.push(match[1].trim());
  }
  console.log(c.bold(`  ${urls.length} URLs trouvées dans le sitemap\n`));
  return urls;
}

// ── 2. Vérifier l'indexabilité technique d'une URL ────────
async function checkUrl(url) {
  const result = {
    url,
    status: 0,
    indexable: true,
    issues: [],
    canonical: "",
    contentType: "",
    googleIndexed: null,
  };

  try {
    const res = await fetch(url, {
      headers: { "User-Agent": USER_AGENT },
      redirect: "follow",
      signal: AbortSignal.timeout(15000),
    });

    result.status = res.status;
    result.contentType = res.headers.get("content-type") || "";

    // Vérifier X-Robots-Tag dans les headers
    const xRobots = res.headers.get("x-robots-tag") || "";
    if (/noindex/i.test(xRobots)) {
      result.indexable = false;
      result.issues.push(`X-Robots-Tag: ${xRobots}`);
    }

    // Statut non-200
    if (res.status !== 200) {
      result.indexable = false;
      result.issues.push(`HTTP ${res.status}`);
      return result;
    }

    // Parser le HTML pour meta robots et canonical
    const html = await res.text();

    // Meta robots
    const metaRobotsMatch = html.match(
      /<meta[^>]+name=["']robots["'][^>]+content=["']([^"']+)["']/i
    );
    if (metaRobotsMatch) {
      const content = metaRobotsMatch[1];
      if (/noindex/i.test(content)) {
        result.indexable = false;
        result.issues.push(`meta robots: ${content}`);
      }
    }

    // Canonical
    const canonicalMatch = html.match(
      /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i
    );
    if (canonicalMatch) {
      result.canonical = canonicalMatch[1];
      // Normaliser pour comparer (retirer trailing slash)
      const normalizeUrl = (u) => u.replace(/\/+$/, "").toLowerCase();
      if (normalizeUrl(result.canonical) !== normalizeUrl(url)) {
        result.indexable = false;
        result.issues.push(`canonical → ${result.canonical}`);
      }
    }

    // Vérifier si la page a du contenu minimal
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
    if (bodyMatch) {
      const bodyText = bodyMatch[1].replace(/<[^>]+>/g, "").trim();
      if (bodyText.length < 100) {
        result.issues.push("contenu très court (<100 chars)");
      }
    }
  } catch (err) {
    result.indexable = false;
    result.issues.push(`Erreur: ${err.message}`);
  }

  return result;
}

// ── 3. Vérifier l'indexation Google (optionnel) ───────────
async function checkGoogleIndex(url) {
  const path = new URL(url).pathname;
  const query = encodeURIComponent(`site:bati.ma${path}`);
  const searchUrl = `https://www.google.com/search?q=${query}&num=1`;

  try {
    const res = await fetch(searchUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept-Language": "fr-FR,fr;q=0.9",
      },
      signal: AbortSignal.timeout(10000),
    });

    const html = await res.text();

    // Si Google retourne un CAPTCHA ou bloque
    if (res.status === 429 || html.includes("unusual traffic")) {
      return "blocked";
    }

    // Vérifier si l'URL apparaît dans les résultats
    const isIndexed = html.includes(url) || html.includes(path);
    return isIndexed ? "yes" : "no";
  } catch {
    return "error";
  }
}

// ── 4. Exécution parallèle avec limite de concurrence ─────
async function runWithConcurrency(items, fn, limit) {
  const results = [];
  let idx = 0;

  async function worker() {
    while (idx < items.length) {
      const i = idx++;
      results[i] = await fn(items[i], i);
    }
  }

  const workers = Array.from({ length: Math.min(limit, items.length) }, worker);
  await Promise.all(workers);
  return results;
}

// ── 5. Rapport ────────────────────────────────────────────
function printReport(results) {
  const total = results.length;
  const indexable = results.filter((r) => r.indexable).length;
  const nonIndexable = results.filter((r) => !r.indexable).length;
  const errors = results.filter((r) => r.issues.length > 0);
  const googleChecked = results.filter((r) => r.googleIndexed !== null);
  const googleYes = results.filter((r) => r.googleIndexed === "yes").length;

  console.log(c.bold("\n══════════════════════════════════════════════════════"));
  console.log(c.bold("  RAPPORT D'INDEXABILITÉ — bati.ma"));
  console.log(c.bold("══════════════════════════════════════════════════════\n"));

  console.log(`  Total URLs :        ${c.bold(total)}`);
  console.log(`  Indexables :        ${c.green(indexable)}`);
  console.log(`  Non-indexables :    ${c.red(nonIndexable)}`);
  if (googleChecked.length > 0) {
    console.log(`  Indexées Google :   ${c.cyan(googleYes)}/${googleChecked.length}`);
  }

  // Détail des problèmes
  if (errors.length > 0) {
    console.log(c.bold("\n── PROBLÈMES DÉTECTÉS ────────────────────────────────\n"));
    for (const r of errors) {
      const status = r.indexable ? c.yellow("⚠") : c.red("✗");
      console.log(`  ${status} ${c.dim(`[${r.status}]`)} ${r.url}`);
      for (const issue of r.issues) {
        console.log(`      → ${issue}`);
      }
    }
  }

  // URLs OK
  const ok = results.filter((r) => r.indexable && r.issues.length === 0);
  if (ok.length > 0) {
    console.log(c.bold(`\n── URLs INDEXABLES (${ok.length}) ─────────────────────────────\n`));
    for (const r of ok) {
      const googleTag =
        r.googleIndexed === "yes"
          ? c.green(" [Google ✓]")
          : r.googleIndexed === "no"
            ? c.yellow(" [Google ✗]")
            : "";
      console.log(`  ${c.green("✓")} ${c.dim(`[${r.status}]`)} ${r.url}${googleTag}`);
    }
  }

  console.log("");
}

function exportCsv(results) {
  const header = "url,status,indexable,canonical,issues,google_indexed";
  const rows = results.map((r) =>
    [
      r.url,
      r.status,
      r.indexable ? "oui" : "non",
      r.canonical,
      `"${r.issues.join("; ")}"`,
      r.googleIndexed || "",
    ].join(",")
  );

  const csv = [header, ...rows].join("\n");
  writeFileSync(REPORT_PATH, csv, "utf-8");
  console.log(c.cyan(`  Rapport CSV exporté : ${REPORT_PATH}\n`));
}

// ── Main ──────────────────────────────────────────────────
async function main() {
  console.log(c.bold("\n  🔍 Audit d'indexabilité — bati.ma\n"));

  // Récupérer les URLs
  let urls;
  if (singleUrl) {
    urls = [singleUrl];
    console.log(c.cyan(`  Vérification d'une URL unique\n`));
  } else {
    urls = await fetchSitemapUrls();
  }

  // Vérification technique
  console.log(c.cyan(`  Vérification technique (concurrence: ${CONCURRENCY})...\n`));
  let checked = 0;
  const results = await runWithConcurrency(
    urls,
    async (url) => {
      const result = await checkUrl(url);
      checked++;
      const pct = Math.round((checked / urls.length) * 100);
      process.stdout.write(`\r  Progression: ${checked}/${urls.length} (${pct}%)`);
      return result;
    },
    CONCURRENCY
  );
  console.log(""); // newline after progress

  // Vérification Google (optionnelle)
  if (checkGoogle) {
    console.log(c.cyan("\n  Vérification indexation Google (1 req/2s)...\n"));
    let gChecked = 0;
    for (const result of results) {
      if (!result.indexable) continue; // skip les non-indexables
      result.googleIndexed = await checkGoogleIndex(result.url);
      gChecked++;
      process.stdout.write(`\r  Google: ${gChecked}/${results.filter((r) => r.indexable).length}`);

      if (result.googleIndexed === "blocked") {
        console.log(c.red("\n\n  ⚠ Google a bloqué les requêtes (CAPTCHA). Arrêt de la vérif Google.\n"));
        break;
      }

      // Rate limit
      await new Promise((r) => setTimeout(r, 2000));
    }
    console.log("");
  }

  // Rapport
  printReport(results);
  exportCsv(results);
}

main().catch((err) => {
  console.error(c.red(`\n  Erreur fatale: ${err.message}\n`));
  process.exit(1);
});
