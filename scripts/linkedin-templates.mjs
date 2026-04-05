/**
 * Templates de posts LinkedIn pour bati.ma
 * Chaque template retourne un objet { text, type } prêt pour l'API Publer
 */

// ─── Données statiques (extraites de l'app web) ──────────────────────────────

const CITIES = [
  { slug: "casablanca", name: "Casablanca", architectCount: 312, avgPrice: "500 – 1 500 MAD/m²", population: "4 millions d'habitants", description: "centre économique du Maroc, plus grands cabinets d'architecture du pays" },
  { slug: "marrakech", name: "Marrakech", architectCount: 187, avgPrice: "600 – 2 000 MAD/m²", population: "1 million d'habitants", description: "destination prisée pour l'architecture traditionnelle et la rénovation de riads" },
  { slug: "rabat", name: "Rabat", architectCount: 203, avgPrice: "550 – 1 800 MAD/m²", population: "580 000 habitants", description: "capitale administrative, projets institutionnels et réhabilitation patrimoniale" },
  { slug: "tanger", name: "Tanger", architectCount: 94, avgPrice: "450 – 1 400 MAD/m²", population: "1 million d'habitants", description: "boom immobilier grâce à Tanger Med et son attractivité touristique" },
  { slug: "agadir", name: "Agadir", architectCount: 67, avgPrice: "400 – 1 200 MAD/m²", population: "420 000 habitants", description: "capitale du tourisme, projets de villas et hôtels balnéaires" },
  { slug: "fes", name: "Fès", architectCount: 78, avgPrice: "300 – 900 MAD/m²", population: "1,1 million d'habitants", description: "capitale spirituelle, rénovation de riads et demeures historiques" },
  { slug: "meknes", name: "Meknès", architectCount: 41, avgPrice: "280 – 750 MAD/m²", population: "520 000 habitants", description: "ville impériale en développement, restauration du patrimoine historique" },
  { slug: "oujda", name: "Oujda", architectCount: 38, avgPrice: "260 – 700 MAD/m²", population: "600 000 habitants", description: "capitale de l'Oriental, projets résidentiels et universitaires" },
  { slug: "kenitra", name: "Kénitra", architectCount: 34, avgPrice: "280 – 750 MAD/m²", population: "430 000 habitants", description: "ville industrielle en forte croissance à 40 km de Rabat" },
  { slug: "tetouan", name: "Tétouan", architectCount: 29, avgPrice: "270 – 720 MAD/m²", population: "380 000 habitants", description: "patrimoine hispano-marocain, médina classée UNESCO" },
  { slug: "nador", name: "Nador", architectCount: 22, avgPrice: "250 – 680 MAD/m²", population: "250 000 habitants", description: "ville côtière méditerranéenne, investissements de la diaspora" },
  { slug: "el-jadida", name: "El Jadida", architectCount: 19, avgPrice: "280 – 750 MAD/m²", population: "200 000 habitants", description: "cité portugaise UNESCO, résidences secondaires et hôtels" },
];

const SPECIALTIES = [
  { slug: "residentiel", label: "Résidentiel", description: "villas, maisons individuelles et appartements" },
  { slug: "commercial", label: "Commercial", description: "bureaux, locaux commerciaux et centres d'affaires" },
  { slug: "interieur", label: "Architecture d'intérieur", description: "décoration, aménagement et design d'espace" },
  { slug: "riad-patrimoine", label: "Riad & Patrimoine", description: "rénovation de riads et architecture traditionnelle marocaine" },
  { slug: "eco-construction", label: "Éco-construction", description: "bâtiments durables, bioclimatiques et matériaux écologiques" },
  { slug: "urbanisme", label: "Urbanisme", description: "plans d'aménagement, lotissements et projets urbains" },
];

const GUIDE_TOPICS = [
  { slug: "acheter-terrain-constructible", title: "Acheter un terrain constructible au Maroc", hook: "Les 5 vérifications indispensables avant d'acheter un terrain" },
  { slug: "construction-villa-budget", title: "Budget construction villa au Maroc", hook: "Combien coûte réellement la construction d'une villa ?" },
  { slug: "etapes-construire-villa", title: "Les étapes pour construire une villa", hook: "Du terrain au permis d'habiter : le guide complet" },
  { slug: "contrat-architecte-maroc", title: "Le contrat d'architecte au Maroc", hook: "Ce que vous devez savoir avant de signer avec un architecte" },
  { slug: "prix-construction-m2-maroc", title: "Prix construction au m² au Maroc", hook: "Les prix réels par région et par type de construction" },
  { slug: "renovation-riad", title: "Rénovation de riad au Maroc", hook: "Tout savoir pour rénover un riad : budget, étapes et pièges à éviter" },
  { slug: "eco-construction", title: "L'éco-construction au Maroc", hook: "Construire durable : matériaux, techniques et aides disponibles" },
  { slug: "credit-construction-maroc", title: "Crédit construction au Maroc", hook: "Comment financer votre projet de construction" },
  { slug: "titre-foncier", title: "Le titre foncier au Maroc", hook: "Pourquoi c'est la première chose à vérifier" },
  { slug: "energie-solaire-maison-maroc", title: "Énergie solaire pour votre maison", hook: "Panneaux solaires au Maroc : rentabilité et installation" },
  { slug: "mre-construire", title: "Guide MRE : Construire au Maroc", hook: "Les étapes essentielles pour les Marocains à l'étranger" },
  { slug: "mondial-2030", title: "Mondial 2030 : Impact sur le BTP", hook: "Les opportunités de construction liées à la Coupe du monde" },
  { slug: "normes-parasismiques", title: "Normes parasismiques au Maroc", hook: "Les règles RPS 2000 expliquées simplement" },
  { slug: "maison-passive-bioclimatique", title: "Maison passive et bioclimatique", hook: "Construire une maison qui consomme presque rien" },
  { slug: "domotique-maroc", title: "La domotique au Maroc", hook: "Maison intelligente : ce qui est possible et à quel prix" },
  { slug: "tadelakt-maroc", title: "Le tadelakt marocain", hook: "Technique ancestrale, utilisation moderne" },
  { slug: "zellige-marocain", title: "Le zellige marocain", hook: "L'art du zellige dans l'architecture contemporaine" },
  { slug: "villa-moderne-maroc", title: "Villa moderne au Maroc", hook: "Tendances et inspirations pour votre projet" },
  { slug: "construction-piscine", title: "Construction de piscine", hook: "Piscine au Maroc : types, prix et réglementation" },
  { slug: "terrasse-rooftop-maroc", title: "Terrasse et rooftop", hook: "Aménager votre toit-terrasse : idées et réglementation" },
];

const STATS = [
  () => { const total = CITIES.reduce((s, c) => s + c.architectCount, 0); return `${total}+ architectes vérifiés dans ${CITIES.length} villes marocaines`; },
  () => "92 guides pratiques sur la construction et l'architecture au Maroc",
  () => "6 spécialités couvertes : du résidentiel à l'urbanisme",
  () => { const top = CITIES.slice(0, 3).map(c => `${c.name} (${c.architectCount})`).join(", "); return `Top 3 des villes : ${top}`; },
  () => "De Tanger à Agadir, trouvez l'architecte qu'il vous faut",
  () => "Prix construction au Maroc : de 250 à 2 000 MAD/m² selon la ville et le standing",
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function shuffled(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── Templates ────────────────────────────────────────────────────────────────

export function architecteDuJour(architect) {
  const specs = (architect.specialties || ["Résidentiel"]).slice(0, 2).join(" & ");
  const city = architect.regions?.[0] || "Maroc";
  const rating = architect.rating > 0 ? `\n⭐ Note : ${architect.rating}/5` : "";
  const exp = architect.years_experience > 0 ? `${architect.years_experience} ans d'expérience` : "";

  const intros = [
    `Architecte à découvrir : ${architect.name}`,
    `Coup de projecteur sur ${architect.name}`,
    `Portrait d'architecte : ${architect.name}`,
  ];

  const text = `${pick(intros)} 🏛️

📍 ${city} | 🎯 ${specs}${exp ? `\n💼 ${exp}` : ""}${rating}

${architect.description ? architect.description.slice(0, 200) + (architect.description.length > 200 ? "..." : "") : `Spécialisé(e) en ${specs.toLowerCase()}, ${architect.name} accompagne vos projets à ${city}.`}

👉 Consultez son profil et demandez un devis gratuit sur bati.ma

#architectemaroc #constructionmaroc #${city.toLowerCase().replace(/\s/g, "")} #btp #batima`;

  return { text, type: "status" };
}

export function villeSpotlight() {
  const city = pick(CITIES);
  const variants = [
    `🏙️ ${city.name} : ${city.architectCount} architectes à votre service

${city.name}, ${city.description}.

💰 Prix moyens : ${city.avgPrice}
👥 Population : ${city.population}
🏗️ ${city.architectCount} architectes vérifiés sur bati.ma

Trouvez l'architecte idéal pour votre projet à ${city.name} :
👉 bati.ma/architecte/${city.slug}

#architecte${city.name.toLowerCase().replace(/\s/g, "")} #construction #immobilier #maroc #batima`,

    `📍 Focus ville : ${city.name}

Avec ${city.architectCount} architectes référencés, ${city.name} est un pôle majeur de l'architecture au Maroc.

🔑 Ce qu'il faut savoir :
• ${city.description}
• Prix au m² : ${city.avgPrice}

Comparez les architectes de ${city.name} sur bati.ma 👇
👉 bati.ma/architecte/${city.slug}

#${city.name.toLowerCase().replace(/\s/g, "")} #architecte #immobilier #maroc #batima`,
  ];

  return { text: pick(variants), type: "status" };
}

export function guideConseil() {
  const guide = pick(GUIDE_TOPICS);
  const variants = [
    `📚 ${guide.title}

${guide.hook}

Retrouvez notre guide complet sur bati.ma :
👉 bati.ma/guide/${guide.slug}

#architectemaroc #constructionmaroc #immobilier #batima`,

    `💡 Le saviez-vous ?

${guide.hook}

On vous explique tout dans notre guide : "${guide.title}"

📖 Lire le guide complet :
👉 bati.ma/guide/${guide.slug}

#architectemaroc #constructionmaroc #btp #batima`,

    `🔍 Guide pratique : ${guide.title}

${guide.hook}

Ce guide couvre tout ce que vous devez savoir avant de vous lancer.

👉 bati.ma/guide/${guide.slug}

#constructionmaroc #architectemaroc #immobilier #batima`,
  ];

  return { text: pick(variants), type: "status" };
}

export function appelOffre(appel) {
  const deadline = appel.deadline ? new Date(appel.deadline).toLocaleDateString("fr-MA", { day: "numeric", month: "long", year: "numeric" }) : "à venir";

  const text = `📢 Nouvel appel d'offres

🏗️ ${appel.title || appel.object || "Projet de construction"}
📍 ${appel.city || appel.location || "Maroc"}
📅 Date limite : ${deadline}
💼 Secteur : ${appel.sector || "BTP"}

Consultez les détails et tous les appels d'offres en cours :
👉 bati.ma/appels-offres

#appeloffres #constructionmaroc #btp #marchespublics #batima`;

  return { text, type: "status" };
}

export function statistique() {
  const stat = pick(STATS);
  const statText = typeof stat === "function" ? stat() : stat;

  const text = `📊 Bati.ma en chiffres

${statText}

🇲🇦 Le plus grand annuaire d'architectes au Maroc.
Trouvez votre architecte, comparez les profils et demandez un devis gratuit.

👉 bati.ma

#architectemaroc #constructionmaroc #immobilier #batima`;

  return { text, type: "status" };
}

export function specialiteSpotlight() {
  const spec = pick(SPECIALTIES);
  const cities = shuffled(CITIES).slice(0, 3);
  const cityList = cities.map(c => `• ${c.name} — ${c.architectCount} architectes`).join("\n");

  const text = `🎯 Spécialité : ${spec.label}

${spec.description.charAt(0).toUpperCase() + spec.description.slice(1)} — un domaine en pleine croissance au Maroc.

Où trouver des architectes spécialisés en ${spec.label.toLowerCase()} ?
${cityList}

Comparez les profils par spécialité sur bati.ma :
👉 bati.ma/architecte/casablanca/specialite/${spec.slug}

#${spec.slug.replace("-", "")} #architecte #maroc #construction #batima`;

  return { text, type: "status" };
}

// ─── Nouveaux templates (v2) ──────────────────────────────────────────────────

const TEMOIGNAGES = [
  {
    prenom: "Karim",
    ville: "Casablanca",
    projet: "villa de 200m²",
    situation: "cherchait un architecte depuis 3 mois sans trouver le bon",
    resultat: "a trouvé un cabinet spécialisé en résidentiel moderne en 2 jours",
  },
  {
    prenom: "Fatima",
    ville: "Marrakech",
    projet: "rénovation de riad",
    situation: "vivait à l'étranger et ne connaissait pas les architectes locaux",
    resultat: "a comparé 5 profils et choisi un expert en patrimoine traditionnel",
  },
  {
    prenom: "Youssef",
    ville: "Rabat",
    projet: "immeuble R+3",
    situation: "avait besoin d'un architecte qui connaisse les normes parasismiques",
    resultat: "a contacté 3 architectes et obtenu des devis en 48h",
  },
  {
    prenom: "Nadia",
    ville: "Tanger",
    projet: "aménagement d'un local commercial",
    situation: "venait de signer un bail et avait besoin de plans rapidement",
    resultat: "a trouvé un architecte d'intérieur disponible en 1 semaine",
  },
  {
    prenom: "Hassan",
    ville: "Agadir",
    projet: "villa balnéaire",
    situation: "MRE en France, voulait construire pour sa retraite",
    resultat: "a trouvé un architecte qui gère les projets à distance pour les MRE",
  },
];

const QUESTIONS = [
  "Quel est le plus gros défi que vous avez rencontré lors d'un projet de construction au Maroc ?",
  "Villa moderne ou riad traditionnel — quel style architectural préférez-vous ?",
  "Construire soi-même ou passer par un architecte ? Quel est votre avis ?",
  "Quel budget faut-il prévoir pour construire une villa au Maroc en 2026 ?",
  "MRE : avez-vous déjà fait construire au Maroc depuis l'étranger ? Comment ça s'est passé ?",
  "Éco-construction au Maroc : tendance passagère ou vrai virage ?",
  "Quel est le prix au m² dans votre ville ? Partagez vos retours !",
  "Tadelakt, zellige, bejmat... Quel matériau traditionnel marocain préférez-vous ?",
  "Permis de construire au Maroc : combien de temps ça vous a pris ?",
  "Quelle ville marocaine a le meilleur potentiel immobilier selon vous ?",
];

const ACTUALITES = [
  {
    titre: "Mondial 2030 : un boom pour le BTP marocain",
    contenu: "La Coupe du Monde 2030 va transformer le paysage urbain du Maroc. Stades, hôtels, infrastructures routières — les architectes marocains sont en première ligne de cette transformation historique.",
    angle: "Quels projets dans votre ville sont liés au Mondial 2030 ?",
  },
  {
    titre: "Les nouvelles normes thermiques RTCM changent la construction",
    contenu: "La Réglementation Thermique de Construction au Maroc impose de nouvelles exigences d'isolation et d'efficacité énergétique. Les architectes doivent adapter leurs conceptions pour réduire la consommation énergétique des bâtiments.",
    angle: "Votre prochain projet intègre-t-il ces nouvelles normes ?",
  },
  {
    titre: "Le marché immobilier marocain en 2026 : ce qui change",
    contenu: "Hausse des prix du foncier, nouvelles zones d'expansion urbaine, digitalisation des permis de construire — le secteur du BTP marocain évolue rapidement.",
    angle: "Comment ces changements impactent votre projet ?",
  },
  {
    titre: "L'éco-construction gagne du terrain au Maroc",
    contenu: "De plus en plus de maîtres d'ouvrage optent pour des matériaux durables et des techniques bioclimatiques. Le Maroc se positionne comme pionnier en Afrique sur la construction verte.",
    angle: "Prêt à construire durable ?",
  },
  {
    titre: "Digitalisation du BTP : les architectes marocains s'adaptent",
    contenu: "BIM, visites virtuelles, dépôt de permis en ligne — la transformation numérique touche tous les aspects du métier d'architecte au Maroc.",
    angle: "Votre architecte utilise-t-il ces outils ?",
  },
];

export function temoignageClient() {
  const t = pick(TEMOIGNAGES);

  const text = `"J'ai trouvé mon architecte en 2 jours" — ${t.prenom}, ${t.ville}

${t.prenom} ${t.situation}.

Grâce à bati.ma, il/elle ${t.resultat}.

Son projet : ${t.projet} à ${t.ville}.

Vous aussi, trouvez l'architecte idéal pour votre projet :
👉 bati.ma

#architectemaroc #constructionmaroc #immobilier #batima`;

  return { text, type: "status" };
}

export function questionEngagement() {
  const question = pick(QUESTIONS);

  const text = `${question}

Partagez votre expérience en commentaire 👇

On lit chaque réponse. Les meilleurs retours seront partagés dans nos prochains posts.

#architectemaroc #constructionmaroc #btp #batima`;

  return { text, type: "status" };
}

export function actualiteBtp() {
  const actu = pick(ACTUALITES);

  const text = `${actu.titre}

${actu.contenu}

${actu.angle}

👉 Trouvez un architecte spécialisé sur bati.ma

#constructionmaroc #btp #immobilier #architectemaroc #batima`;

  return { text, type: "status" };
}

// ─── Sélecteur de template ────────────────────────────────────────────────────

const TEMPLATE_ROTATION = [
  { name: "architecte_du_jour", weight: 3 },
  { name: "guide_conseil", weight: 2 },
  { name: "question_engagement", weight: 2 },
  { name: "ville_spotlight", weight: 1 },
  { name: "temoignage_client", weight: 1 },
  { name: "actualite_btp", weight: 1 },
  { name: "statistique", weight: 1 },
  { name: "specialite_spotlight", weight: 1 },
  { name: "appel_offre", weight: 1 },
];

export function getNextTemplateType(lastUsed = null) {
  // Weighted random selection, avoiding the last used type
  const pool = [];
  for (const t of TEMPLATE_ROTATION) {
    if (t.name === lastUsed) continue;
    for (let i = 0; i < t.weight; i++) pool.push(t.name);
  }
  return pick(pool);
}

export function generatePost(templateType, data = {}) {
  switch (templateType) {
    case "architecte_du_jour":
      return architecteDuJour(data.architect || { name: "Cabinet d'Architecture", regions: ["Casablanca"], specialties: ["Résidentiel"] });
    case "ville_spotlight":
      return villeSpotlight();
    case "guide_conseil":
      return guideConseil();
    case "appel_offre":
      return appelOffre(data.appel || { title: "Projet de construction", city: "Casablanca", sector: "BTP" });
    case "statistique":
      return statistique();
    case "specialite_spotlight":
      return specialiteSpotlight();
    case "temoignage_client":
      return temoignageClient();
    case "question_engagement":
      return questionEngagement();
    case "actualite_btp":
      return actualiteBtp();
    default:
      return guideConseil();
  }
}

export { CITIES, SPECIALTIES, GUIDE_TOPICS };
