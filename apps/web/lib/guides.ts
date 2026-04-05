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

  // ─── 50 NOUVEAUX ARTICLES SEO (Avril 2026) ───

  // Villes nouvelles
  { slug: "architecte-oujda-guide", title: "Architecte à Oujda : guide complet pour choisir en 2026", description: "Trouver un architecte à Oujda : spécificités de l'Oriental, proximité Algérie, zones résidentielles, tarifs et projets urbains.", readTime: "9 min", category: "Villes", content: "" },
  { slug: "architecte-tetouan-guide", title: "Architecte à Tétouan : guide complet pour choisir en 2026", description: "Architectes à Tétouan : architecture andalouse, médina UNESCO, Cabo Negro, tarifs et spécialités des cabinets tétouanais.", readTime: "9 min", category: "Villes", content: "" },
  { slug: "architecte-meknes-guide", title: "Architecte à Meknès : guide complet pour choisir en 2026", description: "Trouver un architecte à Meknès : ville impériale, patrimoine ismaélien, zones modernes, tarifs et cabinets spécialisés.", readTime: "9 min", category: "Villes", content: "" },
  { slug: "architecte-nador-guide", title: "Architecte à Nador : guide complet pour choisir en 2026", description: "Architectes à Nador : lagune Marchica, boom immobilier du Rif, projets touristiques et résidentiels, tarifs.", readTime: "8 min", category: "Villes", content: "" },
  { slug: "architecte-el-jadida-guide", title: "Architecte à El Jadida : guide complet pour choisir en 2026", description: "Trouver un architecte à El Jadida : cité portugaise, station balnéaire, Mazagan, tarifs et spécialités.", readTime: "8 min", category: "Villes", content: "" },
  { slug: "architecte-beni-mellal-guide", title: "Architecte à Béni Mellal : guide complet pour choisir en 2026", description: "Architectes à Béni Mellal : région agricole en expansion urbaine, zones résidentielles, tarifs et cabinets locaux.", readTime: "8 min", category: "Villes", content: "" },
  { slug: "architecte-safi-guide", title: "Architecte à Safi : guide complet pour choisir en 2026", description: "Trouver un architecte à Safi : ville de la céramique, port industriel, projets résidentiels et touristiques, tarifs.", readTime: "8 min", category: "Villes", content: "" },

  // Types de projets
  { slug: "construire-immeuble-maroc", title: "Construire un immeuble au Maroc : guide complet 2026", description: "Comment construire un immeuble R+3 à R+6 au Maroc ? Réglementation, permis, coûts au m², rentabilité et intervenants.", readTime: "12 min", category: "Plans & Construction", content: "" },
  { slug: "amenagement-local-commercial-maroc", title: "Aménagement local commercial au Maroc : guide et prix 2026", description: "Aménager un local commercial au Maroc : normes ERP, architecte spécialisé, coûts d'aménagement et autorisations.", readTime: "8 min", category: "Plans & Construction", content: "" },
  { slug: "construction-riad-neuf-maroc", title: "Construire un riad neuf au Maroc : guide 2026", description: "Comment construire un riad neuf au Maroc ? Plans avec patio, matériaux traditionnels, budget et architectes spécialisés.", readTime: "10 min", category: "Plans & Construction", content: "" },
  { slug: "construction-piscine-maroc", title: "Construction piscine au Maroc : guide et prix 2026", description: "Construire une piscine au Maroc : types (béton, coque, naturelle), autorisations, prix de 40 000 à 300 000 MAD et entretien.", readTime: "9 min", category: "Extérieur", content: "" },
  { slug: "amenagement-hammam-maison-maroc", title: "Hammam à domicile au Maroc : guide et budget 2026", description: "Installer un hammam privé chez soi au Maroc : conception, tadelakt, chauffage, ventilation, budget de 30 000 à 150 000 MAD.", readTime: "8 min", category: "Intérieur", content: "" },
  { slug: "construire-maison-campagne-maroc", title: "Maison de campagne au Maroc : guide construction 2026", description: "Construire une maison en zone rurale au Maroc : terrain agricole, dérogation, styles régionaux, coûts et architectes.", readTime: "9 min", category: "Plans & Construction", content: "" },
  { slug: "construction-hotel-maroc", title: "Construire un hôtel au Maroc : guide et réglementation 2026", description: "Comment construire un hôtel au Maroc ? Classement touristique, normes, architecte spécialisé, budget et autorisations.", readTime: "11 min", category: "Plans & Construction", content: "" },
  { slug: "surelevation-maison-maroc", title: "Surélévation maison au Maroc : guide et autorisations 2026", description: "Ajouter un étage à sa maison au Maroc : droit de surélévation, permis modificatif, coûts et étude structurelle.", readTime: "8 min", category: "Plans & Construction", content: "" },

  // Matériaux et techniques
  { slug: "beton-arme-construction-maroc", title: "Béton armé au Maroc : normes, prix et mise en œuvre 2026", description: "Tout sur le béton armé au Maroc : dosage, RPS 2011, normes parasismiques, prix du m³ et fournisseurs par ville.", readTime: "9 min", category: "Guide pratique", content: "" },
  { slug: "isolation-thermique-maroc", title: "Isolation thermique au Maroc : guide RTCM 2026", description: "Isoler sa maison au Maroc : réglementation thermique RTCM, matériaux (polystyrène, laine de roche), prix et économies.", readTime: "9 min", category: "Innovation", content: "" },
  { slug: "etancheite-toiture-maroc", title: "Étanchéité toiture terrasse au Maroc : guide complet 2026", description: "Résoudre les problèmes d'étanchéité au Maroc : solutions (bitume, résine, membrane), prix et entreprises spécialisées.", readTime: "8 min", category: "Guide pratique", content: "" },
  { slug: "revetement-sol-maroc", title: "Revêtement de sol au Maroc : guide choix et prix 2026", description: "Choisir son revêtement de sol au Maroc : zellige, marbre, carrelage, granito, parquet. Comparatif prix et durabilité.", readTime: "8 min", category: "Intérieur", content: "" },
  { slug: "peinture-facade-maroc", title: "Peinture et enduit façade au Maroc : guide 2026", description: "Peindre ou enduire sa façade au Maroc : types d'enduit, couleurs autorisées, réglementation communale et prix.", readTime: "7 min", category: "Guide pratique", content: "" },
  { slug: "menuiserie-aluminium-maroc", title: "Menuiserie aluminium au Maroc : guide et prix 2026", description: "Menuiserie aluminium au Maroc : fenêtres, portes coulissantes, fabricants locaux, prix au m² et comparatif PVC vs alu.", readTime: "8 min", category: "Guide pratique", content: "" },

  // Installations techniques
  { slug: "plomberie-maison-maroc", title: "Plomberie maison au Maroc : normes et coûts 2026", description: "Installation plomberie au Maroc : normes, matériaux (PPR, PVC, cuivre), tarifs plombier et budget pour maison neuve.", readTime: "8 min", category: "Guide pratique", content: "" },
  { slug: "electricite-maison-maroc", title: "Installation électrique au Maroc : normes et prix 2026", description: "Électricité maison au Maroc : norme NFC 15-100, raccordement ONEE, compteur, prix installation et mise en conformité.", readTime: "9 min", category: "Guide pratique", content: "" },
  { slug: "climatisation-maison-maroc", title: "Climatisation au Maroc : guide choix et installation 2026", description: "Choisir sa climatisation au Maroc : split, gainable, central, VRV. Prix par type, marques disponibles et consommation.", readTime: "8 min", category: "Innovation", content: "" },
  { slug: "ascenseur-immeuble-maroc", title: "Ascenseur au Maroc : réglementation et prix 2026", description: "Installer un ascenseur au Maroc : obligation à partir du R+4, normes de sécurité, marques, prix et entretien annuel.", readTime: "8 min", category: "Réglementation", content: "" },
  { slug: "assainissement-maison-maroc", title: "Assainissement au Maroc : fosse septique et tout-à-l'égout 2026", description: "Assainissement maison au Maroc : réseau collectif vs fosse septique, réglementation, vidange, prix et raccordement.", readTime: "7 min", category: "Guide pratique", content: "" },

  // Démarches et administratif
  { slug: "titre-foncier-maroc", title: "Titre foncier au Maroc : procédure et vérification 2026", description: "Comprendre le titre foncier au Maroc : conservation foncière, immatriculation, melkia vs titre, vérification et frais.", readTime: "9 min", category: "Réglementation", content: "" },
  { slug: "etude-sol-geotechnique-maroc", title: "Étude de sol au Maroc : quand et pourquoi la faire en 2026", description: "L'étude géotechnique au Maroc : obligatoire ou non, types d'essais, prix, laboratoires agréés et impact sur les fondations.", readTime: "8 min", category: "Guide pratique", content: "" },
  { slug: "assurance-construction-maroc", title: "Assurance construction au Maroc : TRC et décennale 2026", description: "Assurances construction au Maroc : TRC (tous risques chantier), décennale, responsabilité civile. Obligations et tarifs.", readTime: "8 min", category: "Réglementation", content: "" },
  { slug: "reception-travaux-maroc", title: "Réception des travaux au Maroc : procédure et PV 2026", description: "Comment réceptionner les travaux au Maroc ? PV de réception, réserves, garanties, délais de levée et recours.", readTime: "8 min", category: "Réglementation", content: "" },
  { slug: "note-renseignement-urbanisme-maroc", title: "Note de renseignement urbanistique au Maroc : guide 2026", description: "Obtenir une note de renseignement au Maroc : agence urbaine, COS, CES, hauteur maximale, procédure et délais.", readTime: "7 min", category: "Réglementation", content: "" },
  { slug: "division-terrain-maroc", title: "Division de terrain au Maroc : procédure complète 2026", description: "Diviser un terrain au Maroc : morcellement, autorisation de lotir, rôle du géomètre, frais et conservation foncière.", readTime: "8 min", category: "Réglementation", content: "" },

  // Décoration et aménagement intérieur
  { slug: "cuisine-moderne-maroc", title: "Cuisine moderne au Maroc : aménagement et prix 2026", description: "Aménager une cuisine moderne au Maroc : cuisinistes, tendances 2026, matériaux, budgets de 20 000 à 120 000 MAD.", readTime: "8 min", category: "Intérieur", content: "" },
  { slug: "salle-bain-maroc", title: "Salle de bain au Maroc : aménagement et tendances 2026", description: "Créer une salle de bain moderne au Maroc : tadelakt, douche italienne, baignoire, coûts et artisans spécialisés.", readTime: "8 min", category: "Intérieur", content: "" },
  { slug: "zellige-marocain-guide", title: "Zellige marocain : guide complet artisanat et pose 2026", description: "Tout sur le zellige marocain : histoire, fabrication artisanale à Fès, types, prix au m² et conseils de pose.", readTime: "10 min", category: "Intérieur", content: "" },
  { slug: "tadelakt-maroc-guide", title: "Tadelakt au Maroc : technique, application et prix 2026", description: "Le tadelakt marocain : technique ancestrale à la chaux de Marrakech, application, artisans qualifiés et prix.", readTime: "9 min", category: "Intérieur", content: "" },
  { slug: "escalier-interieur-maroc", title: "Escalier intérieur au Maroc : styles, matériaux et prix 2026", description: "Choisir son escalier au Maroc : béton, bois, métal, fer forgé. Styles, dimensions réglementaires et coûts.", readTime: "7 min", category: "Intérieur", content: "" },

  // Sécurité et normes
  { slug: "normes-parasismiques-maroc", title: "Normes parasismiques au Maroc : RPS 2011 expliqué", description: "Comprendre le RPS 2011 au Maroc : zones sismiques, classes de bâtiments, obligations et impact sur la construction.", readTime: "9 min", category: "Réglementation", content: "" },
  { slug: "securite-incendie-batiment-maroc", title: "Sécurité incendie bâtiment au Maroc : normes 2026", description: "Normes incendie au Maroc : ERP, sorties de secours, détecteurs, extincteurs, obligations et contrôle technique.", readTime: "8 min", category: "Réglementation", content: "" },
  { slug: "accessibilite-handicap-batiment-maroc", title: "Accessibilité PMR bâtiment au Maroc : normes et obligations", description: "Accessibilité handicap au Maroc : loi 10-03, rampes, ascenseurs, sanitaires adaptés et obligations des promoteurs.", readTime: "8 min", category: "Réglementation", content: "" },
  { slug: "controle-technique-batiment-maroc", title: "Contrôle technique de construction au Maroc : guide 2026", description: "Contrôle technique au Maroc : bureaux agréés, missions obligatoires, étapes et coûts pour ERP et immeubles.", readTime: "8 min", category: "Réglementation", content: "" },

  // Immobilier et investissement
  { slug: "acheter-terrain-constructible-maroc", title: "Acheter un terrain constructible au Maroc : guide 2026", description: "Acheter un terrain au Maroc : vérifications foncières, statut du sol, pièges à éviter, notaire et frais.", readTime: "10 min", category: "Budget & Tarifs", content: "" },
  { slug: "investissement-locatif-maroc", title: "Investissement locatif au Maroc : rentabilité 2026", description: "Investir dans l'immobilier locatif au Maroc : rendement par ville, fiscalité, gestion locative et villes prometteuses.", readTime: "10 min", category: "Budget & Tarifs", content: "" },
  { slug: "vefa-maroc-guide", title: "Achat en VEFA au Maroc : droits et précautions 2026", description: "Acheter sur plan (VEFA) au Maroc : loi 44-00, garanties, échéancier de paiement, réception et recours.", readTime: "9 min", category: "Réglementation", content: "" },
  { slug: "mre-construire-maroc", title: "MRE : construire au Maroc depuis l'étranger en 2026", description: "Guide MRE pour construire au Maroc : procuration, suivi à distance, banques, architecte et pièges à éviter.", readTime: "10 min", category: "Guide pratique", content: "" },

  // Tendances et lifestyle
  { slug: "maison-container-maroc", title: "Maison container au Maroc : guide et prix 2026", description: "Construire une maison container au Maroc : faisabilité, réglementation, isolation, prix et fournisseurs.", readTime: "8 min", category: "Innovation", content: "" },
  { slug: "tiny-house-maroc", title: "Tiny house au Maroc : réglementation et possibilités 2026", description: "Tiny house au Maroc : micro-habitat, zones rurales, réglementation, coûts de 80 000 à 250 000 MAD et constructeurs.", readTime: "8 min", category: "Innovation", content: "" },
  { slug: "decoration-interieure-maroc-tendances", title: "Décoration intérieure au Maroc : tendances 2026", description: "Tendances décoration au Maroc en 2026 : styles, couleurs, artisanat local, budgets et décorateurs recommandés.", readTime: "8 min", category: "Intérieur", content: "" },
  { slug: "jardin-vertical-mur-vegetal-maroc", title: "Mur végétal au Maroc : guide et installation 2026", description: "Installer un mur végétal au Maroc : intérieur ou extérieur, plantes adaptées, systèmes d'irrigation et coûts.", readTime: "7 min", category: "Extérieur", content: "" },
  { slug: "maison-passive-bioclimatique-maroc", title: "Maison passive au Maroc : conception bioclimatique 2026", description: "Concevoir une maison passive au Maroc : orientation, ventilation naturelle, isolation, matériaux et surcoûts.", readTime: "9 min", category: "Innovation", content: "" },

  // ─── MAISONS PRÉFABRIQUÉES (10 articles SEO) ───
  { slug: "prix-maison-prefabriquee-maroc", title: "Prix maison préfabriquée au Maroc : tarifs 2026 par type", description: "Combien coûte une maison préfabriquée au Maroc ? Prix au m² par type (béton, métal, bois, container, SIP), coûts cachés et budget type.", readTime: "8 min", category: "Tarifs", content: "" },
  { slug: "maison-prefabriquee-vs-traditionnelle", title: "Maison préfabriquée vs traditionnelle au Maroc : comparatif complet", description: "Préfabriqué ou traditionnel ? Comparaison détaillée : prix, délais, qualité, personnalisation et perception au Maroc.", readTime: "10 min", category: "Guide pratique", content: "" },
  { slug: "fournisseurs-maison-prefabriquee-maroc", title: "Fournisseurs de maisons préfabriquées au Maroc : guide 2026", description: "Annuaire des fournisseurs de maisons préfabriquées au Maroc : entreprises locales, imports turcs et chinois, critères de choix.", readTime: "8 min", category: "Guide pratique", content: "" },
  { slug: "maison-prefabriquee-mre", title: "Maison préfabriquée pour MRE : construire au Maroc depuis l'étranger", description: "Guide MRE : pourquoi le préfabriqué est idéal pour construire à distance. Financement, gestion de projet et budget.", readTime: "9 min", category: "Guide pratique", content: "" },
  { slug: "permis-construire-maison-prefabriquee", title: "Permis de construire maison préfabriquée au Maroc : démarches", description: "Permis de construire pour maison préfabriquée au Maroc : documents, délais, rôle de l'architecte et normes RPS/RTCM.", readTime: "7 min", category: "Réglementation", content: "" },
  { slug: "maison-prefabriquee-bois-maroc", title: "Maison préfabriquée en bois au Maroc : prix et avantages", description: "Maison bois préfabriquée au Maroc : types de bois, isolation, prix (4 500-8 000 MAD/m²), fournisseurs et entretien.", readTime: "8 min", category: "Innovation", content: "" },
  { slug: "maison-prefabriquee-beton-maroc", title: "Maison préfabriquée en béton au Maroc : guide complet", description: "Construction en béton préfabriqué au Maroc : panneaux, dalles alvéolées, prix (3 000-5 500 MAD/m²) et fournisseurs.", readTime: "8 min", category: "Innovation", content: "" },
  { slug: "maison-prefabriquee-touristique-maroc", title: "Maison préfabriquée pour hôtels et glamping au Maroc", description: "Solutions préfabriquées pour le tourisme au Maroc : glamping, chalets, lodges modulaires. Prix, rentabilité et réglementation.", readTime: "9 min", category: "Innovation", content: "" },
  { slug: "maison-prefabriquee-ecologique-maroc", title: "Maison préfabriquée écologique au Maroc : solutions durables", description: "Éco-construction préfabriquée au Maroc : matériaux durables, énergie solaire, récupération eau, impression 3D et RTCM.", readTime: "8 min", category: "Innovation", content: "" },
  { slug: "financement-maison-prefabriquee-maroc", title: "Financer sa maison préfabriquée au Maroc : crédit et options", description: "Options de financement pour maison préfabriquée au Maroc : crédit construction, Mourabaha, aides MRE et simulation budget.", readTime: "7 min", category: "Budget & Tarifs", content: "" },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

export const GUIDE_SLUGS = GUIDES.map((g) => g.slug);
