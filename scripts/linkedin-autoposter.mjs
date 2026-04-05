#!/usr/bin/env node

/**
 * linkedin-autoposter.mjs — Automated LinkedIn posting for bati.ma via Publer API
 *
 * Usage:
 *   node scripts/linkedin-autoposter.mjs                  # Schedule next post
 *   node scripts/linkedin-autoposter.mjs --dry-run        # Generate without posting
 *   node scripts/linkedin-autoposter.mjs --test           # Post as draft (not published)
 *   node scripts/linkedin-autoposter.mjs --type ville     # Force a specific post type
 *   node scripts/linkedin-autoposter.mjs --setup          # Fetch workspace & account IDs
 *   node scripts/linkedin-autoposter.mjs --now            # Publish immediately (no scheduling)
 *
 * Required env vars (in .env or scripts/linkedin.env):
 *   PUBLER_API_KEY
 *   PUBLER_WORKSPACE_ID
 *   PUBLER_LINKEDIN_ACCOUNT_ID
 *   BATI_API_URL (optional, defaults to https://api.bati.ma)
 */

import { readFileSync, writeFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { generatePost, getNextTemplateType } from "./linkedin-templates.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));

// ─── Config ───────────────────────────────────────────────────────────────────

function loadEnv() {
  const paths = [
    resolve(__dirname, "linkedin.env"),
    resolve(__dirname, "..", ".env"),
  ];
  for (const p of paths) {
    if (!existsSync(p)) continue;
    const lines = readFileSync(p, "utf-8").split("\n");
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eq = trimmed.indexOf("=");
      if (eq === -1) continue;
      const key = trimmed.slice(0, eq).trim();
      const val = trimmed.slice(eq + 1).trim().replace(/^["']|["']$/g, "");
      if (!process.env[key]) process.env[key] = val;
    }
  }
}

loadEnv();

const PUBLER_API = "https://app.publer.com/api/v1";
const API_KEY = process.env.PUBLER_API_KEY;
const WORKSPACE_ID = process.env.PUBLER_WORKSPACE_ID;
const ACCOUNT_ID = process.env.PUBLER_LINKEDIN_ACCOUNT_ID;
const BATI_API = process.env.BATI_API_URL || "https://api.bati.ma";

const STATE_FILE = resolve(__dirname, ".linkedin-state.json");

// ─── Args ─────────────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
const DRY_RUN = args.includes("--dry-run");
const TEST_MODE = args.includes("--test");
const NOW_MODE = args.includes("--now");
const SETUP_MODE = args.includes("--setup");
const FORCE_TYPE = args.find((a, i) => args[i - 1] === "--type");

// ─── Publer API helpers ───────────────────────────────────────────────────────

async function publerFetch(path, options = {}) {
  const url = `${PUBLER_API}${path}`;
  const headers = {
    "Authorization": `Bearer-API ${API_KEY}`,
    "Content-Type": "application/json",
    ...(WORKSPACE_ID ? { "Publer-Workspace-Id": WORKSPACE_ID } : {}),
    ...options.headers,
  };

  const res = await fetch(url, { ...options, headers });
  const text = await res.text();

  let data;
  try { data = JSON.parse(text); } catch { data = text; }

  if (!res.ok) {
    throw new Error(`Publer API ${res.status}: ${typeof data === "string" ? data : JSON.stringify(data)}`);
  }
  return data;
}

async function getWorkspaces() {
  return publerFetch("/workspaces");
}

async function getAccounts() {
  return publerFetch("/accounts");
}

async function schedulePost(postText, scheduledAt, state = "scheduled") {
  const payload = {
    bulk: {
      state,
      posts: [{
        networks: {
          linkedin: {
            type: "status",
            text: postText,
          },
        },
        accounts: [{
          id: ACCOUNT_ID,
          ...(scheduledAt ? { scheduled_at: scheduledAt } : {}),
        }],
      }],
    },
  };

  return publerFetch("/posts/schedule", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

async function publishNow(postText) {
  const payload = {
    bulk: {
      state: "scheduled",
      posts: [{
        networks: {
          linkedin: {
            type: "status",
            text: postText,
          },
        },
        accounts: [{
          id: ACCOUNT_ID,
        }],
      }],
    },
  };

  return publerFetch("/posts/schedule/publish", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

async function checkJobStatus(jobId) {
  return publerFetch(`/job_status/${jobId}`);
}

// ─── Bati.ma data fetchers ────────────────────────────────────────────────────

async function fetchRandomArchitect() {
  try {
    const res = await fetch(`${BATI_API}/architects?limit=50`);
    if (!res.ok) return null;
    const data = await res.json();
    const architects = data.architects || [];
    if (architects.length === 0) return null;
    return architects[Math.floor(Math.random() * architects.length)];
  } catch {
    return null;
  }
}

async function fetchLatestAppel() {
  try {
    const res = await fetch(`${BATI_API}/appels`);
    if (!res.ok) return null;
    const data = await res.json();
    const appels = data.appels_offres || [];
    return appels[0] || null;
  } catch {
    return null;
  }
}

// ─── Scheduling logic ─────────────────────────────────────────────────────────

function getNextSlot() {
  // Optimal LinkedIn posting: Tue-Thu, 9h-11h (Morocco timezone UTC+1)
  const now = new Date();
  const moroccoOffset = 1; // UTC+1

  // Find next weekday (Tue=2, Wed=3, Thu=4) at 9:00 or 10:00
  const hours = [9, 10, 11];
  const days = [2, 3, 4]; // Tue, Wed, Thu

  let target = new Date(now);
  target.setUTCHours(hours[Math.floor(Math.random() * hours.length)] - moroccoOffset, Math.floor(Math.random() * 30), 0, 0);

  // Move to next valid day
  for (let i = 0; i < 7; i++) {
    target.setDate(now.getDate() + i + 1);
    if (days.includes(target.getDay())) break;
  }

  // Format as ISO with Morocco offset
  const pad = (n) => String(n).padStart(2, "0");
  const y = target.getFullYear();
  const m = pad(target.getMonth() + 1);
  const d = pad(target.getDate());
  const h = pad(target.getUTCHours() + moroccoOffset);
  const min = pad(target.getMinutes());

  return `${y}-${m}-${d}T${h}:${min}:00+01:00`;
}

// ─── State management ─────────────────────────────────────────────────────────

function loadState() {
  if (!existsSync(STATE_FILE)) return { lastType: null, lastPostedAt: null, postCount: 0 };
  try {
    return JSON.parse(readFileSync(STATE_FILE, "utf-8"));
  } catch {
    return { lastType: null, lastPostedAt: null, postCount: 0 };
  }
}

function saveState(state) {
  writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
}

// ─── Setup mode ───────────────────────────────────────────────────────────────

async function runSetup() {
  console.log("🔧 Publer Setup — Récupération des IDs\n");

  if (!API_KEY) {
    console.error("❌ PUBLER_API_KEY manquant. Ajoutez-le dans scripts/linkedin.env");
    process.exit(1);
  }

  console.log("📡 Récupération des workspaces...");
  const workspaces = await getWorkspaces();
  console.log("\nWorkspaces trouvés :");
  for (const ws of (Array.isArray(workspaces) ? workspaces : [workspaces])) {
    console.log(`  ID: ${ws.id || ws._id}  |  Nom: ${ws.name || ws.display_name || "—"}`);
  }

  if (WORKSPACE_ID) {
    console.log(`\n📡 Récupération des comptes (workspace: ${WORKSPACE_ID})...`);
    const accounts = await getAccounts();
    console.log("\nComptes connectés :");
    for (const acc of (Array.isArray(accounts) ? accounts : [accounts])) {
      const provider = acc.provider || acc.type || "—";
      const name = acc.name || acc.display_name || "—";
      console.log(`  ID: ${acc.id || acc._id}  |  ${provider}  |  ${name}`);
    }
  } else {
    console.log("\n⚠️  Ajoutez PUBLER_WORKSPACE_ID dans linkedin.env puis relancez --setup pour voir les comptes.");
  }

  console.log("\n✅ Copiez les IDs dans scripts/linkedin.env");
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  if (SETUP_MODE) return runSetup();

  // Validate config
  if (!DRY_RUN && (!API_KEY || !WORKSPACE_ID || !ACCOUNT_ID)) {
    console.error("❌ Configuration manquante. Variables requises :");
    if (!API_KEY) console.error("   - PUBLER_API_KEY");
    if (!WORKSPACE_ID) console.error("   - PUBLER_WORKSPACE_ID");
    if (!ACCOUNT_ID) console.error("   - PUBLER_LINKEDIN_ACCOUNT_ID");
    console.error("\nLancez d'abord : node scripts/linkedin-autoposter.mjs --setup");
    process.exit(1);
  }

  const state = loadState();

  // Determine post type
  const templateType = FORCE_TYPE || getNextTemplateType(state.lastType);
  console.log(`📝 Type de post : ${templateType}`);

  // Fetch data if needed
  let data = {};
  if (templateType === "architecte_du_jour") {
    console.log("📡 Récupération d'un architecte depuis l'API...");
    const architect = await fetchRandomArchitect();
    if (architect) data.architect = architect;
  } else if (templateType === "appel_offre") {
    console.log("📡 Récupération du dernier appel d'offres...");
    const appel = await fetchLatestAppel();
    if (appel) data.appel = appel;
  }

  // Generate post
  const post = generatePost(templateType, data);
  console.log("\n─── Contenu du post ───");
  console.log(post.text);
  console.log("───────────────────────\n");
  console.log(`📏 ${post.text.length} caractères`);

  if (DRY_RUN) {
    console.log("\n🏁 Mode dry-run — Aucun post envoyé.");
    return;
  }

  try {
    let result;

    if (TEST_MODE) {
      // Post as draft
      console.log("\n🧪 Mode test — Envoi en tant que brouillon...");
      result = await schedulePost(post.text, null, "draft");
    } else if (NOW_MODE) {
      // Publish immediately
      console.log("\n🚀 Publication immédiate...");
      result = await publishNow(post.text);
    } else {
      // Schedule for next optimal slot
      const scheduledAt = getNextSlot();
      console.log(`\n📅 Programmation pour : ${scheduledAt}`);
      result = await schedulePost(post.text, scheduledAt);
    }

    console.log("✅ Réponse Publer :", JSON.stringify(result, null, 2));

    // Poll job status if we got a job_id
    const jobId = result?.data?.job_id || result?.job_id;
    if (jobId) {
      console.log(`\n⏳ Vérification du job ${jobId}...`);
      await new Promise(r => setTimeout(r, 2000));
      const status = await checkJobStatus(jobId);
      console.log("📋 Statut :", JSON.stringify(status, null, 2));
    }

    // Update state
    state.lastType = templateType;
    state.lastPostedAt = new Date().toISOString();
    state.postCount = (state.postCount || 0) + 1;
    saveState(state);

    console.log(`\n🎉 Post #${state.postCount} ${TEST_MODE ? "sauvé en brouillon" : NOW_MODE ? "publié" : "programmé"} !`);

  } catch (err) {
    console.error("❌ Erreur Publer :", err.message);
    process.exit(1);
  }
}

main();
