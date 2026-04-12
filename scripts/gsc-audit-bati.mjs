#!/usr/bin/env node

/**
 * gsc-audit-bati.mjs — Google Search Console audit for bati.ma
 *
 * Zero-dependency script (native Node.js fetch + crypto JWT)
 * Reuses service account from Élysée project.
 *
 * Usage:
 *   node scripts/gsc-audit-bati.mjs              # Last 28 days
 *   node scripts/gsc-audit-bati.mjs --days 7     # Last 7 days
 *   node scripts/gsc-audit-bati.mjs --days 90    # Last 90 days
 *   node scripts/gsc-audit-bati.mjs --quick-wins # Only show ranking opportunities
 */

import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { createSign } from "crypto";

const __dirname = dirname(fileURLToPath(import.meta.url));

// ─── Config ───────────────────────────────────────────────────────────────────

const DOMAIN = "bati.ma";
const SITE_URLS = [`sc-domain:${DOMAIN}`, `https://${DOMAIN}/`];
const SERVICE_ACCOUNT_PATH = resolve(__dirname, "..", "..", "Downloads", "luxury-chauffeur-website", "gsc-service-account.json");
const GSC_API = "https://searchconsole.googleapis.com/webmasters/v3/sites";
const TOKEN_URL = "https://oauth2.googleapis.com/token";
const SCOPE = "https://www.googleapis.com/auth/webmasters.readonly";

// ─── CLI Args ─────────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
const DAYS = args.includes("--days") ? parseInt(args[args.indexOf("--days") + 1], 10) : 28;
const QUICK_WINS_ONLY = args.includes("--quick-wins");

// ─── JWT Auth ─────────────────────────────────────────────────────────────────

function base64url(str) {
  return Buffer.from(str).toString("base64url");
}

function createJWT(sa) {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const payload = { iss: sa.client_email, scope: SCOPE, aud: TOKEN_URL, iat: now, exp: now + 3600 };
  const segments = [base64url(JSON.stringify(header)), base64url(JSON.stringify(payload))];
  const signInput = segments.join(".");
  const sign = createSign("RSA-SHA256");
  sign.update(signInput);
  return signInput + "." + sign.sign(sa.private_key, "base64url");
}

async function getAccessToken(sa) {
  const jwt = createJWT(sa);
  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });
  if (!res.ok) throw new Error(`Token error ${res.status}: ${await res.text()}`);
  return (await res.json()).access_token;
}

// ─── GSC Search Analytics ─────────────────────────────────────────────────────

async function queryGSC(token, siteUrl, dimensions, rowLimit = 500) {
  const endDate = new Date();
  const startDate = new Date();
  startDate.setDate(endDate.getDate() - DAYS);
  const fmt = (d) => d.toISOString().split("T")[0];

  const encodedSiteUrl = encodeURIComponent(siteUrl);
  const url = `${GSC_API}/${encodedSiteUrl}/searchAnalytics/query`;

  const res = await fetch(url, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      startDate: fmt(startDate),
      endDate: fmt(endDate),
      dimensions,
      rowLimit,
      type: "web",
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`GSC API ${res.status}: ${err.substring(0, 200)}`);
  }

  return (await res.json()).rows || [];
}

// ─── Display helpers ──────────────────────────────────────────────────────────

function printTable(title, headers, rows) {
  console.log(`\n${title}`);
  console.log("─".repeat(95));
  console.log(headers.map((h, i) => i === 0 ? h.padEnd(45) : h.padStart(10)).join(""));
  console.log("─".repeat(95));
  rows.forEach((row) => {
    console.log(row.map((c, i) => i === 0 ? String(c).padEnd(45).substring(0, 45) : String(c).padStart(10)).join(""));
  });
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log(`\n🔍 Audit SEO bati.ma — ${DAYS} derniers jours\n`);

  // Load service account
  const sa = JSON.parse(readFileSync(SERVICE_ACCOUNT_PATH, "utf-8"));
  console.log(`🔑 Service account: ${sa.client_email}`);

  // Get token
  console.log("🔐 Authentification...");
  const token = await getAccessToken(sa);
  console.log("✅ Token obtenu\n");

  // Try both site URL formats
  let keywordRows = [];
  let pageRows = [];
  let dateRows = [];
  let usedSiteUrl = "";

  for (const siteUrl of SITE_URLS) {
    try {
      console.log(`📡 Essai: ${siteUrl}`);
      keywordRows = await queryGSC(token, siteUrl, ["query"], 500);
      pageRows = await queryGSC(token, siteUrl, ["page"], 500);
      dateRows = await queryGSC(token, siteUrl, ["date"], 500);
      usedSiteUrl = siteUrl;
      console.log(`✅ Connecté à ${siteUrl}\n`);
      break;
    } catch (err) {
      console.log(`❌ ${siteUrl}: ${err.message.substring(0, 80)}`);
    }
  }

  if (keywordRows.length === 0 && pageRows.length === 0) {
    console.log("\n⚠️  Aucune donnée GSC trouvée. Vérifiez l'accès du service account.");
    return;
  }

  // Parse keywords
  const keywords = keywordRows.map((r) => ({
    query: r.keys[0],
    clicks: r.clicks,
    impressions: r.impressions,
    ctr: Math.round(r.ctr * 10000) / 100,
    position: Math.round(r.position * 10) / 10,
  })).sort((a, b) => b.impressions - a.impressions);

  // Parse pages
  const pages = pageRows.map((r) => ({
    page: r.keys[0].replace(`https://${DOMAIN}`, ""),
    clicks: r.clicks,
    impressions: r.impressions,
    ctr: Math.round(r.ctr * 10000) / 100,
    position: Math.round(r.position * 10) / 10,
  })).sort((a, b) => b.impressions - a.impressions);

  // Parse dates for progression
  const dates = dateRows.map((r) => ({
    date: r.keys[0],
    clicks: r.clicks,
    impressions: r.impressions,
  })).sort((a, b) => a.date.localeCompare(b.date));

  // ─── Summary ────────────────────────────────────────────────────────────
  const totalImpressions = keywords.reduce((s, k) => s + k.impressions, 0);
  const totalClicks = keywords.reduce((s, k) => s + k.clicks, 0);
  const avgCTR = totalImpressions > 0 ? Math.round((totalClicks / totalImpressions) * 10000) / 100 : 0;
  const avgPosition = keywords.length > 0 ? Math.round(keywords.reduce((s, k) => s + k.position, 0) / keywords.length * 10) / 10 : 0;

  console.log("═".repeat(60));
  console.log("  RÉSUMÉ GSC — bati.ma");
  console.log("═".repeat(60));
  console.log(`  Période          : ${DAYS} jours`);
  console.log(`  Impressions      : ${totalImpressions.toLocaleString()}`);
  console.log(`  Clics            : ${totalClicks.toLocaleString()}`);
  console.log(`  CTR moyen        : ${avgCTR}%`);
  console.log(`  Position moyenne : ${avgPosition}`);
  console.log(`  Mots-clés unique : ${keywords.length}`);
  console.log(`  Pages actives    : ${pages.length}`);
  console.log("═".repeat(60));

  // ─── Daily progression ──────────────────────────────────────────────────
  if (dates.length > 1) {
    console.log("\n📈 PROGRESSION QUOTIDIENNE");
    console.log("─".repeat(50));
    console.log(`${"Date".padEnd(15)} ${"Impressions".padStart(13)} ${"Clics".padStart(8)}`);
    console.log("─".repeat(50));
    dates.forEach((d) => {
      const bar = "█".repeat(Math.min(Math.round(d.impressions / 5), 30));
      console.log(`${d.date.padEnd(15)} ${String(d.impressions).padStart(13)} ${String(d.clicks).padStart(8)}  ${bar}`);
    });
  }

  if (!QUICK_WINS_ONLY) {
    // ─── Top keywords ───────────────────────────────────────────────────
    printTable(
      "🔑 TOP 30 MOTS-CLÉS PAR IMPRESSIONS",
      ["Mot-clé", "Impr.", "Clics", "CTR", "Position"],
      keywords.slice(0, 30).map((k) => [k.query, k.impressions, k.clicks, k.ctr + "%", k.position])
    );

    // ─── Top pages ────────────────────────────────────────────────────
    printTable(
      "📄 TOP 20 PAGES PAR IMPRESSIONS",
      ["Page", "Impr.", "Clics", "CTR", "Position"],
      pages.slice(0, 20).map((p) => [p.page, p.impressions, p.clicks, p.ctr + "%", p.position])
    );
  }

  // ─── Quick wins: high impressions, bad position (5-20) ──────────────
  const quickWins = keywords
    .filter((k) => k.impressions >= 5 && k.position >= 5 && k.position <= 30)
    .sort((a, b) => b.impressions - a.impressions);

  if (quickWins.length > 0) {
    printTable(
      "🎯 QUICK WINS — Mots-clés à optimiser (position 5-30, bonnes impressions)",
      ["Mot-clé", "Impr.", "Clics", "CTR", "Position"],
      quickWins.slice(0, 25).map((k) => [k.query, k.impressions, k.clicks, k.ctr + "%", k.position])
    );

    console.log("\n💡 RECOMMANDATIONS :");
    console.log("─".repeat(60));
    quickWins.slice(0, 10).forEach((k, i) => {
      const action = k.position <= 10
        ? "Améliorer le CTR (title + meta description)"
        : k.position <= 20
        ? "Enrichir le contenu + maillage interne"
        : "Créer du contenu dédié ou renforcer le backlink";
      console.log(`  ${i + 1}. "${k.query}" (pos. ${k.position}, ${k.impressions} impr.)`);
      console.log(`     → ${action}`);
    });
  }

  // ─── Low CTR pages (indexed but not clicked) ────────────────────────
  const lowCTR = pages
    .filter((p) => p.impressions >= 10 && p.ctr < 3 && p.position <= 15)
    .sort((a, b) => b.impressions - a.impressions);

  if (lowCTR.length > 0) {
    printTable(
      "⚠️  PAGES À FAIBLE CTR (beaucoup d'impressions, peu de clics)",
      ["Page", "Impr.", "Clics", "CTR", "Position"],
      lowCTR.slice(0, 10).map((p) => [p.page, p.impressions, p.clicks, p.ctr + "%", p.position])
    );
    console.log("   → Optimiser les titles et meta descriptions de ces pages");
  }

  console.log("\n✅ Audit terminé.\n");
}

main();
