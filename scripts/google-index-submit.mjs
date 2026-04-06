#!/usr/bin/env node

/**
 * google-index-submit.mjs — Submit URLs to Google Indexing API
 *
 * Prerequisites:
 *   1. Google Cloud project with "Web Search Indexing API" enabled
 *   2. Service account JSON key file
 *   3. Service account added as Owner in Google Search Console for bati.ma
 *
 * Usage:
 *   node scripts/google-index-submit.mjs                    # Submit new prefab guides
 *   node scripts/google-index-submit.mjs --dry-run          # Show URLs without submitting
 *   node scripts/google-index-submit.mjs --all              # Submit all guide URLs from sitemap
 *   node scripts/google-index-submit.mjs --url https://...  # Submit a single URL
 */

import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { createSign } from "crypto";

const __dirname = dirname(fileURLToPath(import.meta.url));

// ─── Config ───────────────────────────────────────────────────────────────────

const SERVICE_ACCOUNT_PATH = resolve(__dirname, "..", "..", "Downloads", "luxury-chauffeur-website", "gsc-service-account.json");
const INDEXING_API = "https://indexing.googleapis.com/v3/urlNotifications:publish";
const TOKEN_URL = "https://oauth2.googleapis.com/token";
const SCOPE = "https://www.googleapis.com/auth/indexing";

// New prefab guide URLs
const PREFAB_URLS = [
  "https://bati.ma/guide/prix-maison-prefabriquee-maroc",
  "https://bati.ma/guide/maison-prefabriquee-vs-traditionnelle",
  "https://bati.ma/guide/fournisseurs-maison-prefabriquee-maroc",
  "https://bati.ma/guide/maison-prefabriquee-mre",
  "https://bati.ma/guide/permis-construire-maison-prefabriquee",
  "https://bati.ma/guide/maison-prefabriquee-bois-maroc",
  "https://bati.ma/guide/maison-prefabriquee-beton-maroc",
  "https://bati.ma/guide/maison-prefabriquee-touristique-maroc",
  "https://bati.ma/guide/maison-prefabriquee-ecologique-maroc",
  "https://bati.ma/guide/financement-maison-prefabriquee-maroc",
];

// ─── Args ─────────────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
const DRY_RUN = args.includes("--dry-run");
const ALL_GUIDES = args.includes("--all");
const SINGLE_URL = args.find((a, i) => args[i - 1] === "--url");

// ─── JWT Auth (no external dependencies) ──────────────────────────────────────

function base64url(str) {
  return Buffer.from(str).toString("base64url");
}

function createJWT(serviceAccount) {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const payload = {
    iss: serviceAccount.client_email,
    scope: SCOPE,
    aud: TOKEN_URL,
    iat: now,
    exp: now + 3600,
  };

  const segments = [base64url(JSON.stringify(header)), base64url(JSON.stringify(payload))];
  const signInput = segments.join(".");

  const sign = createSign("RSA-SHA256");
  sign.update(signInput);
  const signature = sign.sign(serviceAccount.private_key, "base64url");

  return signInput + "." + signature;
}

async function getAccessToken(serviceAccount) {
  const jwt = createJWT(serviceAccount);
  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Token error ${res.status}: ${text}`);
  }

  const data = await res.json();
  return data.access_token;
}

// ─── Indexing API ─────────────────────────────────────────────────────────────

async function submitUrl(url, accessToken) {
  const res = await fetch(INDEXING_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      url,
      type: "URL_UPDATED",
    }),
  });

  const data = await res.json();
  return { status: res.status, data };
}

// ─── Sitemap parser ──────────────────────────────────────────────────────────

async function fetchAllUrlsFromSitemap() {
  const res = await fetch("https://bati.ma/sitemap.xml");
  const xml = await res.text();
  const urls = [];
  const regex = /<loc>(https:\/\/bati\.ma\/[^<]+)<\/loc>/g;
  let match;
  while ((match = regex.exec(xml)) !== null) {
    urls.push(match[1]);
  }
  // Also add the homepage if not present
  if (!urls.includes("https://bati.ma")) urls.unshift("https://bati.ma");
  return urls;
}

async function fetchGuideUrlsFromSitemap() {
  const all = await fetchAllUrlsFromSitemap();
  return all.filter(u => u.includes("/guide/"));
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  // Load service account
  let serviceAccount;
  try {
    serviceAccount = JSON.parse(readFileSync(SERVICE_ACCOUNT_PATH, "utf-8"));
    console.log(`🔑 Service account: ${serviceAccount.client_email}`);
  } catch {
    console.error("❌ Fichier service account introuvable:", SERVICE_ACCOUNT_PATH);
    console.error("   Vérifiez le chemin ou copiez gsc-service-account.json dans le projet.");
    process.exit(1);
  }

  // Determine URLs to submit
  let urls;
  if (SINGLE_URL) {
    urls = [SINGLE_URL];
  } else if (ALL_GUIDES) {
    console.log("📡 Récupération de TOUTES les URLs depuis le sitemap...");
    urls = await fetchAllUrlsFromSitemap();
  } else {
    urls = PREFAB_URLS;
  }

  console.log(`\n📋 ${urls.length} URLs à soumettre:\n`);
  urls.forEach((u, i) => console.log(`  ${i + 1}. ${u}`));

  if (DRY_RUN) {
    console.log("\n🏁 Mode dry-run — Aucune soumission effectuée.");
    return;
  }

  // Get access token
  console.log("\n🔐 Obtention du token d'accès...");
  const accessToken = await getAccessToken(serviceAccount);
  console.log("✅ Token obtenu\n");

  // Submit URLs
  let success = 0;
  let errors = 0;

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    console.log(`[${i + 1}/${urls.length}] ${url}`);

    try {
      const result = await submitUrl(url, accessToken);
      if (result.status === 200) {
        console.log(`  ✅ Soumis — notifyTime: ${result.data.urlNotificationMetadata?.latestUpdate?.notifyTime || "ok"}`);
        success++;
      } else {
        console.log(`  ⚠️  Status ${result.status}: ${JSON.stringify(result.data)}`);
        errors++;
      }
    } catch (err) {
      console.log(`  ❌ Erreur: ${err.message}`);
      errors++;
    }

    // Delay between requests
    if (i < urls.length - 1) {
      await new Promise((r) => setTimeout(r, 500));
    }
  }

  console.log(`\n🎉 Terminé : ${success} soumis, ${errors} erreurs sur ${urls.length} URLs`);
}

main();
