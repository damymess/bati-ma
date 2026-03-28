/**
 * dedup-architects.mjs
 * Audit + nettoyage des doublons dans api.bati.ma
 *
 * Critère de doublon : même ville + même nom (insensible à la casse)
 * Stratégie : garder le premier enregistrement (id le plus ancien), supprimer les suivants
 *
 * Usage : node scripts/dedup-architects.mjs [--dry-run]
 */

const API_BASE = "https://api.bati.ma";
const API_KEY =
  "pk_e0d8fd70ab0cf7e115d76345ec382cf5304b2411c545a5cc3ef1fc1ceb86f75f";

const DRY_RUN = process.argv.includes("--dry-run");

const HEADERS = {
  "Content-Type": "application/json",
  "x-publishable-api-key": API_KEY,
};

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function fetchAll() {
  const all = [];
  let offset = 0;
  const limit = 500;

  console.log("📥 Récupération de tous les architectes...");

  while (true) {
    const res = await fetch(
      `${API_BASE}/store/architects?limit=${limit}&offset=${offset}`,
      { headers: HEADERS }
    );

    if (!res.ok) {
      console.error(`  [ERR] HTTP ${res.status}`);
      break;
    }

    const data = await res.json();
    const batch = data.architects ?? [];
    const total = data.count ?? 0;

    all.push(...batch);
    process.stdout.write(`  ${all.length}/${total} récupérés...\r`);

    if (batch.length === 0 || all.length >= total) break;
    offset += limit;
    await sleep(200);
  }

  console.log(`\n  Total récupéré : ${all.length}`);
  return all;
}

function getCity(a) {
  if (Array.isArray(a.regions) && a.regions.length > 0) return a.regions[0];
  if (a.regions && typeof a.regions === "object") {
    const vals = Object.values(a.regions);
    if (vals.length > 0) return String(vals[0]);
  }
  return "";
}

function buildGroups(all) {
  const groups = new Map();

  for (const a of all) {
    const city = getCity(a).toLowerCase().trim();
    const name = String(a.name ?? "").toLowerCase().trim();
    if (!name) continue;

    const key = `${city}::${name}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(a);
  }

  return groups;
}

async function deleteArchitect(id) {
  const res = await fetch(`${API_BASE}/store/architects/${id}`, {
    method: "DELETE",
    headers: HEADERS,
  });

  if (!res.ok) {
    const err = await res.text().catch(() => "");
    console.error(`  [ERR] DELETE ${id}: HTTP ${res.status} — ${err.slice(0, 60)}`);
    return false;
  }
  return true;
}

async function main() {
  console.log(
    `🔍 Audit doublons api.bati.ma${DRY_RUN ? " (DRY RUN — aucune suppression)" : ""}\n`
  );

  const all = await fetchAll();
  const groups = buildGroups(all);

  // Trouver les doublons
  const dupGroups = [...groups.entries()].filter(([, entries]) => entries.length > 1);

  console.log(`\n📊 Résultats :`);
  console.log(`  Total architectes       : ${all.length}`);
  console.log(`  Clés uniques            : ${groups.size}`);
  console.log(`  Groupes avec doublons   : ${dupGroups.length}`);

  const totalDups = dupGroups.reduce((s, [, e]) => s + e.length - 1, 0);
  console.log(`  Entrées en double       : ${totalDups}`);

  if (dupGroups.length === 0) {
    console.log("\n✅ Aucun doublon trouvé. Base propre !");
    return;
  }

  // Afficher un échantillon
  console.log("\n📋 Exemples de doublons (max 10) :");
  for (const [key, entries] of dupGroups.slice(0, 10)) {
    console.log(`  "${key}" — ${entries.length} entrées (ids: ${entries.map((e) => e.id).join(", ")})`);
  }

  if (DRY_RUN) {
    console.log(
      `\n⚠️  DRY RUN — Relancer sans --dry-run pour supprimer ${totalDups} doublons`
    );
    return;
  }

  console.log(`\n🗑️  Suppression de ${totalDups} doublons...`);
  let deleted = 0;
  let errors = 0;

  for (const [, entries] of dupGroups) {
    // Garder le premier (entries[0]), supprimer les suivants
    const toDelete = entries.slice(1);
    for (const dup of toDelete) {
      const ok = await deleteArchitect(dup.id);
      if (ok) {
        deleted++;
        if (deleted % 50 === 0)
          process.stdout.write(`  ${deleted}/${totalDups} supprimés...\r`);
      } else {
        errors++;
      }
      await sleep(100);
    }
  }

  console.log(`\n\n✅ Terminé !`);
  console.log(`   Supprimés : ${deleted}`);
  console.log(`   Erreurs   : ${errors}`);
  console.log(`   Base propre : ~${all.length - deleted} architectes`);
  console.log(
    `\nVérifier : curl "${API_BASE}/store/architects?limit=1" | jq '.count'`
  );
}

main().catch(console.error);
