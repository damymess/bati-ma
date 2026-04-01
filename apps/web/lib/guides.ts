export type Guide = {
  slug: string;
  title: string;
  description: string;
  readTime: string;
  category: string;
  content: string;
};

export const GUIDES: Guide[] = [
  // ─── EXISTING 15 GUIDES ───
  {
    slug: "comment-choisir-architecte-maroc",
    title: "Comment choisir son architecte au Maroc",
    description:
      "Guide complet pour choisir le bon architecte au Maroc : critères de sélection, questions à poser, contrats et honoraires. Tout ce que vous devez savoir.",
    readTime: "8 min",
    category: "Guide pratique",
    content: "",
  },
  {
    slug: "honoraires-architecte-maroc",
    title: "Honoraires d'un architecte au Maroc : tarifs et modes de calcul",
    description:
      "Combien coûte un architecte au Maroc ? Honoraires en pourcentage, forfait ou au temps passé. Guide complet des tarifs et modes de rémunération.",
    readTime: "6 min",
    category: "Tarifs",
    content: "",
  },
  {
    slug: "permis-de-construire-maroc",
    title: "Permis de construire au Maroc : procédure complète 2026",
    description:
      "Comment obtenir un permis de construire au Maroc ? Dossier à constituer, délais, autorités compétentes et rôle de l'architecte. Guide 2026.",
    readTime: "10 min",
    category: "Réglementation",
    content: "",
  },
  {
    slug: "plan-amenagement-maroc",
    title: "Plan d'aménagement au Maroc : zonage, règles et démarches 2026",
    description:
      "Tout comprendre sur le plan d'aménagement au Maroc : zones réglementaires, COS, CES, hauteurs maximales et démarches auprès de l'agence urbaine.",
    readTime: "8 min",
    category: "Urbanisme",
    content: "",
  },
  {
    slug: "plan-villa-maroc",
    title: "Plan de villa au Maroc : styles, superficies et coûts 2026",
    description:
      "Guide complet pour concevoir votre plan de villa au Maroc : styles architecturaux, superficies courantes, étapes de conception et coûts par m² selon les villes.",
    readTime: "8 min",
    category: "Plans & Construction",
    content: "",
  },
  {
    slug: "renovation-riad-marrakech",
    title: "Rénover un riad à Marrakech : guide complet et budget 2026",
    description:
      "Comment rénover un riad à Marrakech ? Spécificités de la médina, règles ADER/UNESCO, budget rénovation (50 000–500 000 MAD), artisans et rentabilité.",
    readTime: "10 min",
    category: "Rénovation",
    content: "",
  },
  {
    slug: "architecture-marocaine",
    title: "Architecture marocaine : styles, éléments et traditions",
    description:
      "Découvrez l'architecture marocaine à travers ses dynasties, ses éléments emblématiques (zellige, moucharabieh, patio) et ses styles régionaux de Fès à Casablanca.",
    readTime: "10 min",
    category: "Architecture",
    content: "",
  },
  {
    slug: "cout-construction-maison-maroc",
    title: "Coût de construction d'une maison au Maroc en 2026",
    description:
      "Quel budget pour construire une maison au Maroc ? Prix au m² par ville, coûts des matériaux, honoraires architecte et frais annexes. Estimations 2026 en MAD.",
    readTime: "9 min",
    category: "Budget & Tarifs",
    content: "",
  },
  {
    slug: "maison-marocaine-moderne",
    title: "Maison marocaine moderne : styles, plans et inspirations 2026",
    description:
      "Tout sur la maison marocaine moderne : fusion architecture traditionnelle et contemporaine, éléments clés (patio, zellige, tadelakt), plans types et conseils d'architectes.",
    readTime: "8 min",
    category: "Architecture",
    content: "",
  },
  {
    slug: "telecharger-plan-villa-maroc",
    title: "Plan de villa au Maroc : comment obtenir les plans de votre projet",
    description:
      "Comment obtenir un plan de villa au Maroc ? Différence entre plans architecturaux et plans d'exécution, ce qu'un architecte livre, formats PDF et DWG, et étapes de validation.",
    readTime: "6 min",
    category: "Plans & Construction",
    content: "",
  },
  {
    slug: "concours-architecture-maroc-2026",
    title: "7 concours d'architecture ouverts aux architectes marocains en 2026",
    description:
      "Découvrez les concours internationaux d'architecture accessibles aux professionnels et étudiants marocains en 2026 : prix, conditions et calendrier.",
    readTime: "7 min",
    category: "Actualité",
    content: "",
  },
  {
    slug: "architecture-coupe-du-monde-2030-maroc",
    title: "Les grands projets architecturaux du Mondial 2030 au Maroc",
    description:
      "Stades, infrastructures, hôtels : les méga-projets architecturaux liés à la Coupe du Monde 2030 au Maroc. Opportunités pour les architectes.",
    readTime: "9 min",
    category: "Actualité",
    content: "",
  },
  {
    slug: "marche-btp-maroc-2026",
    title: "Le marché BTP au Maroc en 2026 : chiffres clés et opportunités",
    description:
      "550 milliards DH d'investissements, CAN 2025, Mondial 2030 : analyse du marché de la construction au Maroc et opportunités pour les architectes.",
    readTime: "8 min",
    category: "Business",
    content: "",
  },
  {
    slug: "eco-construction-maroc",
    title: "L'éco-construction au Maroc : matériaux, normes et architectes spécialisés",
    description:
      "Guide de l'éco-construction au Maroc : RTCM 2024, matériaux durables, certification HQE et architectes spécialisés par ville.",
    readTime: "10 min",
    category: "Guide pratique",
    content: "",
  },
  {
    slug: "renovation-riad-maroc",
    title: "Guide complet de la rénovation de riad au Maroc",
    description:
      "Tout savoir pour rénover un riad au Maroc : réglementation, artisans, coûts, techniques traditionnelles (zellige, tadelakt) et erreurs à éviter.",
    readTime: "12 min",
    category: "Guide pratique",
    content: "",
  },

  // ─── 35 NEW SEO-OPTIMIZED GUIDES ───

  // Tier 1 — Fort volume
  {
    slug: "architecte-casablanca-guide",
    title: "Architecte à Casablanca : guide complet pour choisir en 2026",
    description:
      "Trouver un architecte à Casablanca : cabinets réputés, tarifs par quartier (Maarif, Anfa, Bouskoura), spécialités et conseils pour bien choisir.",
    readTime: "10 min",
    category: "Villes",
    content: "",
  },
  {
    slug: "architecte-marrakech-guide",
    title: "Architecte à Marrakech : guide complet pour choisir en 2026",
    description:
      "Comment choisir un architecte à Marrakech ? Spécialistes riad, villa Palmeraie, architecture contemporaine. Tarifs, quartiers et portfolios.",
    readTime: "10 min",
    category: "Villes",
    content: "",
  },
  {
    slug: "architecte-rabat-guide",
    title: "Architecte à Rabat : guide complet pour choisir en 2026",
    description:
      "Trouver un architecte à Rabat : cabinets par quartier (Agdal, Hay Riad, Souissi), tarifs résidentiel et institutionnel, spécialités.",
    readTime: "10 min",
    category: "Villes",
    content: "",
  },
  {
    slug: "architecte-tanger-guide",
    title: "Architecte à Tanger : guide complet pour choisir en 2026",
    description:
      "Architectes à Tanger : boom immobilier, Tanger Med, projets balnéaires. Tarifs, zones clés et spécialités des cabinets tangérois.",
    readTime: "9 min",
    category: "Villes",
    content: "",
  },
  {
    slug: "domotique-maison-intelligente-maroc",
    title: "Domotique au Maroc : guide de la maison intelligente 2026",
    description:
      "Installer la domotique au Maroc : solutions KNX, coûts d'installation, intégrateurs à Casablanca et Marrakech, avantages et réglementation.",
    readTime: "9 min",
    category: "Innovation",
    content: "",
  },
  {
    slug: "architecte-interieur-casablanca",
    title: "Architecte d'intérieur à Casablanca : guide et tarifs 2026",
    description:
      "Trouver un architecte d'intérieur à Casablanca : différence avec décorateur, tarifs, tendances 2026, quartiers phares et portfolios.",
    readTime: "8 min",
    category: "Intérieur",
    content: "",
  },
  {
    slug: "architecte-interieur-marrakech",
    title: "Architecte d'intérieur à Marrakech : guide et tarifs 2026",
    description:
      "Architecte d'intérieur à Marrakech : style marocain vs moderne, aménagement riad, tarifs, tendances boho-chic et oriental contemporain.",
    readTime: "8 min",
    category: "Intérieur",
    content: "",
  },
  {
    slug: "architecte-agadir-guide",
    title: "Architecte à Agadir : guide complet pour choisir en 2026",
    description:
      "Trouver un architecte à Agadir : style balnéaire, reconstruction post-séisme, zones (Founty, Dcheira), tarifs 15-20% moins chers que Casablanca.",
    readTime: "9 min",
    category: "Villes",
    content: "",
  },
  {
    slug: "architecte-kenitra-guide",
    title: "Architecte à Kénitra : guide complet pour choisir en 2026",
    description:
      "Architectes à Kénitra : ville en expansion, Atlantic Free Zone, zones résidentielles en développement, tarifs et projets urbains.",
    readTime: "8 min",
    category: "Villes",
    content: "",
  },
  {
    slug: "construction-maison-marrakech",
    title: "Construction de maison à Marrakech : guide et tarifs 2026",
    description:
      "Construire à Marrakech : prix au m², zones (Palmeraie, route Ourika, Targa), styles marocain et contemporain, intervenants et délais.",
    readTime: "10 min",
    category: "Plans & Construction",
    content: "",
  },
  {
    slug: "architecte-fes-guide",
    title: "Architecte à Fès : guide complet pour choisir en 2026",
    description:
      "Trouver un architecte à Fès : médina UNESCO, architecture Mérinide, zones modernes (Fès-Shore, Narjiss), spécialité rénovation et tarifs.",
    readTime: "9 min",
    category: "Villes",
    content: "",
  },
  {
    slug: "architecte-interieur-rabat",
    title: "Architecte d'intérieur à Rabat : guide et tarifs 2026",
    description:
      "Architecte d'intérieur à Rabat : style institutionnel vs résidentiel, quartiers (Agdal, Hay Riad), tarifs et tendances décoration 2026.",
    readTime: "8 min",
    category: "Intérieur",
    content: "",
  },
  {
    slug: "topographe-maroc-role-construction",
    title: "Topographe au Maroc : rôle, tarifs et démarches 2026",
    description:
      "Quand faire appel à un topographe au Maroc ? Bornage, levé topographique, tarifs, relation avec l'architecte et la conservation foncière.",
    readTime: "8 min",
    category: "Guide pratique",
    content: "",
  },
  {
    slug: "architecte-mohammedia-guide",
    title: "Architecte à Mohammedia : guide complet pour choisir en 2026",
    description:
      "Trouver un architecte à Mohammedia : ville côtière résidentielle, proximité Casablanca, spécialités villa balnéaire et tarifs.",
    readTime: "7 min",
    category: "Villes",
    content: "",
  },

  // Tier 2 — Volume moyen
  {
    slug: "construction-modulaire-maroc",
    title: "Bâtiments modulaires au Maroc : guide complet 2026",
    description:
      "Construction modulaire au Maroc : préfabriqué, conteneur, bois. Coûts vs traditionnel, fournisseurs, réglementation et avantages chantier rapide.",
    readTime: "9 min",
    category: "Innovation",
    content: "",
  },
  {
    slug: "maison-bois-maroc",
    title: "Maison en bois au Maroc : guide, prix et autorisation 2026",
    description:
      "Construire une maison en bois au Maroc : est-ce autorisé ? Types de construction, prix au m², isolation, durabilité et fournisseurs.",
    readTime: "9 min",
    category: "Plans & Construction",
    content: "",
  },
  {
    slug: "certificat-conformite-maroc",
    title: "Certificat de conformité au Maroc : procédure complète 2026",
    description:
      "Comment obtenir le certificat de conformité au Maroc ? Dossier, rôle de l'architecte, délais et conséquences en cas d'absence.",
    readTime: "7 min",
    category: "Réglementation",
    content: "",
  },
  {
    slug: "meilleur-architecte-marrakech",
    title: "Comment choisir le meilleur architecte à Marrakech en 2026",
    description:
      "Critères pour trouver le meilleur architecte à Marrakech : spécialités riad et villa, portfolio, tarifs et avis clients vérifiés.",
    readTime: "8 min",
    category: "Guide pratique",
    content: "",
  },
  {
    slug: "facade-maison-maroc",
    title: "Façade de maison et villa au Maroc : styles et tendances 2026",
    description:
      "Styles de façade au Maroc : traditionnelle, moderne, néo-marocaine. Matériaux (enduit, pierre, moucharabieh), réglementation et prix.",
    readTime: "8 min",
    category: "Architecture",
    content: "",
  },
  {
    slug: "maison-prefabriquee-maroc",
    title: "Maison préfabriquée au Maroc : guide et prix 2026",
    description:
      "Maison préfabriquée au Maroc : types, fournisseurs, prix, avantages et inconvénients, autorisations et comparaison avec le traditionnel.",
    readTime: "8 min",
    category: "Innovation",
    content: "",
  },
  {
    slug: "prix-construction-m2-maroc",
    title: "Prix de construction au m² au Maroc en 2026",
    description:
      "Prix de construction au m² au Maroc par ville et type de finition. Facteurs influençant le coût, budget prévisionnel et astuces pour économiser.",
    readTime: "9 min",
    category: "Budget & Tarifs",
    content: "",
  },
  {
    slug: "villa-moderne-maroc",
    title: "Villa moderne au Maroc : styles, plans et tendances 2026",
    description:
      "Tendances villa moderne au Maroc : architecture minimaliste, piscine, jardin méditerranéen. Plans types, matériaux et coûts de construction.",
    readTime: "8 min",
    category: "Architecture",
    content: "",
  },
  {
    slug: "devis-construction-maroc",
    title: "Comprendre un devis de construction au Maroc",
    description:
      "Comment lire un devis de construction au Maroc ? Postes principaux, pièges à éviter, négociation et comparaison de devis.",
    readTime: "7 min",
    category: "Budget & Tarifs",
    content: "",
  },
  {
    slug: "lotissement-maroc",
    title: "Lotissement au Maroc : réglementation et démarches 2026",
    description:
      "Tout sur les lotissements au Maroc : loi 25-90, procédure d'autorisation, cahier des charges, rôle de l'architecte urbaniste.",
    readTime: "9 min",
    category: "Réglementation",
    content: "",
  },
  {
    slug: "prix-terrain-maroc",
    title: "Prix du terrain au Maroc : guide d'achat 2026",
    description:
      "Prix au m² du terrain au Maroc par ville et zone. Vérifications avant achat, conservation foncière, rôle du notaire et pièges à éviter.",
    readTime: "9 min",
    category: "Budget & Tarifs",
    content: "",
  },
  {
    slug: "construction-villa-budget",
    title: "Budget construction villa au Maroc : guide complet 2026",
    description:
      "Budget global pour construire une villa au Maroc : terrain, construction, honoraires, taxes. Tableaux par gamme et conseils financement.",
    readTime: "10 min",
    category: "Budget & Tarifs",
    content: "",
  },
  {
    slug: "credit-construction-maroc",
    title: "Crédit construction au Maroc : guide bancaire 2026",
    description:
      "Crédit construction au Maroc : banques (CIH, Attijariwafa, BMCE), taux, conditions, dossier et programme Al Omrane.",
    readTime: "8 min",
    category: "Budget & Tarifs",
    content: "",
  },
  {
    slug: "plan-maison-100m2-maroc",
    title: "Plan maison 100m² au Maroc : idées et budget 2026",
    description:
      "Plans maison 100m² au Maroc : configurations 2-3 chambres, optimisation espace, R+1, coût de construction et styles architecturaux.",
    readTime: "7 min",
    category: "Plans & Construction",
    content: "",
  },

  // Tier 3 — Niche SEO
  {
    slug: "contrat-architecte-maroc",
    title: "Contrat d'architecte au Maroc : modèle et clauses essentielles",
    description:
      "Tout sur le contrat de maîtrise d'œuvre au Maroc : clauses essentielles, honoraires, résiliation, litiges et modèle CNOA.",
    readTime: "8 min",
    category: "Réglementation",
    content: "",
  },
  {
    slug: "etapes-construire-villa-maroc",
    title: "Les étapes pour construire une villa au Maroc",
    description:
      "Chronologie complète pour construire au Maroc : du choix du terrain à la réception des travaux. Délais, intervenants et budget par étape.",
    readTime: "10 min",
    category: "Guide pratique",
    content: "",
  },
  {
    slug: "energie-solaire-maison-maroc",
    title: "Énergie solaire pour maison au Maroc : guide 2026",
    description:
      "Installer des panneaux solaires sur sa maison au Maroc : ensoleillement, types, coûts, rentabilité, réglementation MASEN et installateurs.",
    readTime: "8 min",
    category: "Innovation",
    content: "",
  },
  {
    slug: "fondation-maison-maroc-types",
    title: "Fondation de maison au Maroc : types, normes et coûts 2026",
    description:
      "Types de fondations au Maroc (semelles, radier, pieux), étude de sol, normes parasismiques RPS 2000, coûts et erreurs à éviter.",
    readTime: "8 min",
    category: "Plans & Construction",
    content: "",
  },
  {
    slug: "bureau-etude-technique-maroc",
    title: "Bureau d'études techniques au Maroc : rôle et tarifs",
    description:
      "Missions du BET au Maroc : béton armé, électricité, plomberie, thermique. Tarifs, comment choisir et différence avec l'architecte.",
    readTime: "7 min",
    category: "Guide pratique",
    content: "",
  },
  {
    slug: "amenagement-jardin-maroc",
    title: "Aménagement jardin au Maroc : idées, plantes et budget 2026",
    description:
      "Aménager son jardin au Maroc : plantes adaptées au climat, styles méditerranéen et marocain, piscine, terrasse et budget paysagiste.",
    readTime: "8 min",
    category: "Extérieur",
    content: "",
  },
  {
    slug: "terrasse-rooftop-maroc",
    title: "Aménagement terrasse et rooftop au Maroc : guide 2026",
    description:
      "Aménager une terrasse ou rooftop au Maroc : droit de surélévation, matériaux, pergola, étanchéité, styles et coûts.",
    readTime: "7 min",
    category: "Extérieur",
    content: "",
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

export const GUIDE_SLUGS = GUIDES.map((g) => g.slug);
