export type Quartier = {
  slug: string;
  name: string;
  citySlug: string;
  cityName: string;
  description: string;
};

export const QUARTIERS: Quartier[] = [
  // ─── Casablanca ──────────────────────────────────────────────────
  { slug: "maarif", name: "Maârif", citySlug: "casablanca", cityName: "Casablanca", description: "Le Maârif est un quartier résidentiel et commercial prisé de Casablanca, connu pour son tissu urbain dense et ses projets de rénovation d'immeubles des années 60-80." },
  { slug: "anfa", name: "Anfa", citySlug: "casablanca", cityName: "Casablanca", description: "Anfa est le quartier huppé de Casablanca avec ses villas Art déco, ses projets immobiliers de luxe et le prestigieux projet Anfa Place." },
  { slug: "bouskoura", name: "Bouskoura", citySlug: "casablanca", cityName: "Casablanca", description: "Bouskoura est la banlieue résidentielle de Casablanca, prisée pour ses villas avec jardin, la ville verte de Bouskoura et ses lotissements modernes." },
  { slug: "ain-diab", name: "Aïn Diab", citySlug: "casablanca", cityName: "Casablanca", description: "Aïn Diab est le quartier balnéaire de Casablanca, avec la corniche, les hôtels de luxe et des projets résidentiels haut de gamme face à l'océan." },
  { slug: "gauthier", name: "Gauthier", citySlug: "casablanca", cityName: "Casablanca", description: "Le Gauthier est un quartier central de Casablanca en pleine mutation, mêlant immeubles de bureaux modernes et architecture coloniale Art déco." },
  { slug: "sidi-maarouf", name: "Sidi Maarouf", citySlug: "casablanca", cityName: "Casablanca", description: "Sidi Maarouf est le pôle tertiaire de Casablanca avec Casanearshore, les sièges sociaux et de nombreux projets de bureaux et résidentiels." },
  { slug: "hay-hassani", name: "Hay Hassani", citySlug: "casablanca", cityName: "Casablanca", description: "Hay Hassani est un quartier populaire de Casablanca en plein développement, avec des projets résidentiels accessibles et des équipements publics." },
  { slug: "bourgogne", name: "Bourgogne", citySlug: "casablanca", cityName: "Casablanca", description: "Le quartier Bourgogne est un secteur résidentiel central de Casablanca, apprécié pour sa proximité avec le Twin Center et les zones d'affaires." },

  // ─── Marrakech ───────────────────────────────────────────────────
  { slug: "gueliz", name: "Guéliz", citySlug: "marrakech", cityName: "Marrakech", description: "Guéliz est la ville nouvelle de Marrakech, centre névralgique du commerce et de l'immobilier moderne avec ses appartements et locaux commerciaux." },
  { slug: "palmeraie", name: "Palmeraie", citySlug: "marrakech", cityName: "Marrakech", description: "La Palmeraie de Marrakech est le secteur des villas de luxe, riads-hôtels et projets touristiques haut de gamme entourés de palmiers." },
  { slug: "route-ourika", name: "Route de l'Ourika", citySlug: "marrakech", cityName: "Marrakech", description: "La Route de l'Ourika est l'axe de développement résidentiel de Marrakech, avec des lotissements de villas, résidences fermées et projets éco-responsables." },
  { slug: "targa", name: "Targa", citySlug: "marrakech", cityName: "Marrakech", description: "Targa est un quartier résidentiel prisé de Marrakech, connu pour ses villas modernes, sa tranquillité et sa proximité avec le centre-ville." },
  { slug: "amelkis", name: "Amelkis", citySlug: "marrakech", cityName: "Marrakech", description: "Amelkis est un quartier résidentiel de standing à Marrakech, réputé pour son golf, ses villas de luxe et son cadre verdoyant." },
  { slug: "medina-marrakech", name: "Médina", citySlug: "marrakech", cityName: "Marrakech", description: "La Médina de Marrakech est le cœur historique de la ville, spécialisé dans la rénovation de riads, le patrimoine et l'architecture traditionnelle." },
  { slug: "route-amizmiz", name: "Route d'Amizmiz", citySlug: "marrakech", cityName: "Marrakech", description: "La Route d'Amizmiz est un axe émergent pour les projets résidentiels et touristiques au sud de Marrakech, avec vue sur l'Atlas." },

  // ─── Rabat ───────────────────────────────────────────────────────
  { slug: "agdal", name: "Agdal", citySlug: "rabat", cityName: "Rabat", description: "L'Agdal est le quartier résidentiel et estudiantin de Rabat, avec des immeubles modernes, des commerces et une vie urbaine animée." },
  { slug: "hay-riad", name: "Hay Riad", citySlug: "rabat", cityName: "Rabat", description: "Hay Riad est le quartier des ambassades et des administrations à Rabat, avec des villas de standing et le méga-projet Hay Riad Extension." },
  { slug: "souissi", name: "Souissi", citySlug: "rabat", cityName: "Rabat", description: "Souissi est le quartier le plus huppé de Rabat, avec des villas diplomatiques, des résidences de luxe et le Palais Royal à proximité." },
  { slug: "hassan", name: "Hassan", citySlug: "rabat", cityName: "Rabat", description: "Hassan est le quartier historique de Rabat autour de la Tour Hassan, mêlant patrimoine, administration et projets de réhabilitation urbaine." },
  { slug: "temara", name: "Témara", citySlug: "rabat", cityName: "Rabat", description: "Témara est la ville satellite de Rabat en pleine expansion, avec des projets résidentiels accessibles et un front de mer en développement." },

  // ─── Tanger ──────────────────────────────────────────────────────
  { slug: "malabata", name: "Malabata", citySlug: "tanger", cityName: "Tanger", description: "Malabata est le quartier balnéaire haut de gamme de Tanger, avec des résidences de luxe et une vue imprenable sur le détroit de Gibraltar." },
  { slug: "cap-spartel", name: "Cap Spartel", citySlug: "tanger", cityName: "Tanger", description: "Cap Spartel est le promontoire mythique de Tanger, prisé pour ses villas avec vue mer et ses projets touristiques face à l'Atlantique." },
  { slug: "boukhalef", name: "Boukhalef", citySlug: "tanger", cityName: "Tanger", description: "Boukhalef est la zone industrielle et résidentielle de Tanger, dynamisée par la zone franche et les projets liés à Tanger Med." },
  { slug: "iberia", name: "Iberia", citySlug: "tanger", cityName: "Tanger", description: "Iberia est un quartier central de Tanger avec un urbanisme colonial, des projets de rénovation et une vie culturelle riche." },
  { slug: "centre-ville-tanger", name: "Centre-ville", citySlug: "tanger", cityName: "Tanger", description: "Le centre-ville de Tanger est en pleine renaissance avec la corniche rénovée, les boulevards modernisés et des projets immobiliers ambitieux." },

  // ─── Agadir ──────────────────────────────────────────────────────
  { slug: "founty", name: "Founty", citySlug: "agadir", cityName: "Agadir", description: "Founty est le quartier touristique et balnéaire d'Agadir, avec des hôtels, résidences de vacances et projets immobiliers face à l'océan." },
  { slug: "hay-mohammadi-agadir", name: "Hay Mohammadi", citySlug: "agadir", cityName: "Agadir", description: "Hay Mohammadi est le centre urbain d'Agadir, avec des projets résidentiels et commerciaux reflétant la reconstruction post-séisme." },
  { slug: "talborjt", name: "Talborjt", citySlug: "agadir", cityName: "Agadir", description: "Talborjt est un quartier central d'Agadir, dynamique et commercial, avec des projets de modernisation urbaine et d'habitat." },
  { slug: "dcheira", name: "Dcheira", citySlug: "agadir", cityName: "Agadir", description: "Dcheira El Jihadia est la ville satellite d'Agadir en pleine expansion, avec des lotissements résidentiels et des zones d'activité." },

  // ─── Fès ─────────────────────────────────────────────────────────
  { slug: "ville-nouvelle-fes", name: "Ville Nouvelle", citySlug: "fes", cityName: "Fès", description: "La Ville Nouvelle de Fès abrite les quartiers modernes avec des immeubles résidentiels, bureaux et zones commerciales." },
  { slug: "medina-fes", name: "Fès el-Bali", citySlug: "fes", cityName: "Fès", description: "Fès el-Bali est la plus grande médina du monde, classée UNESCO, où les architectes spécialisent en restauration de riads et conservation du patrimoine." },
  { slug: "route-immouzer", name: "Route d'Imouzzer", citySlug: "fes", cityName: "Fès", description: "La Route d'Imouzzer est l'axe de développement résidentiel de Fès avec des villas modernes, résidences fermées et espaces verts." },
  { slug: "ain-chkef", name: "Aïn Chkef", citySlug: "fes", cityName: "Fès", description: "Aïn Chkef est une commune en expansion au sud de Fès, avec des projets résidentiels neufs et des lotissements abordables." },

  // ─── Meknès ──────────────────────────────────────────────────────
  { slug: "hamria", name: "Hamria", citySlug: "meknes", cityName: "Meknès", description: "Hamria est le centre moderne de Meknès, avec des commerces, résidences et projets de rénovation urbaine." },
  { slug: "medina-meknes", name: "Médina", citySlug: "meknes", cityName: "Meknès", description: "La Médina de Meknès, classée UNESCO, offre des opportunités de restauration de riads et de valorisation du patrimoine ismaélien." },

  // ─── Kénitra ─────────────────────────────────────────────────────
  { slug: "centre-ville-kenitra", name: "Centre-ville", citySlug: "kenitra", cityName: "Kénitra", description: "Le centre-ville de Kénitra est en pleine modernisation avec le tramway, les nouveaux boulevards et des projets immobiliers structurants." },
  { slug: "mehdia", name: "Mehdia", citySlug: "kenitra", cityName: "Kénitra", description: "Mehdia est la station balnéaire de Kénitra, avec des projets touristiques et résidentiels en bord de plage." },

  // ─── Oujda ───────────────────────────────────────────────────────
  { slug: "centre-ville-oujda", name: "Centre-ville", citySlug: "oujda", cityName: "Oujda", description: "Le centre-ville d'Oujda se modernise avec des projets résidentiels, commerciaux et la réhabilitation de l'architecture coloniale." },
  { slug: "saidia", name: "Saïdia", citySlug: "oujda", cityName: "Oujda", description: "Saïdia est la station balnéaire méditerranéenne de la région d'Oujda, avec le méga-projet touristique Saïdia Resort." },

  // ─── Tétouan ─────────────────────────────────────────────────────
  { slug: "martil", name: "Martil", citySlug: "tetouan", cityName: "Tétouan", description: "Martil est la station balnéaire de Tétouan, prisée pour ses résidences de vacances et projets touristiques en bord de mer." },
  { slug: "mdiq", name: "M'diq", citySlug: "tetouan", cityName: "Tétouan", description: "M'diq est une ville côtière près de Tétouan, connue pour sa marina, ses projets de luxe et son tourisme balnéaire." },
];

export function getQuartiersByCity(citySlug: string): Quartier[] {
  return QUARTIERS.filter((q) => q.citySlug === citySlug);
}

export function getQuartier(citySlug: string, quartierSlug: string): Quartier | undefined {
  return QUARTIERS.find((q) => q.citySlug === citySlug && q.slug === quartierSlug);
}

export const QUARTIER_PARAMS = QUARTIERS.map((q) => ({
  city: q.citySlug,
  quartier: q.slug,
}));
