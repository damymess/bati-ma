export type City = {
  slug: string;
  name: string;
  nameAr: string;
  region: string;
  population: string;
  volume: number;
  volumeInt: number;
  description: string;
  architectCount: number;
  avgPrice: string;
  keywords: string[];
};

export const CITIES: City[] = [
  {
    slug: "casablanca",
    name: "Casablanca",
    nameAr: "الدار البيضاء",
    region: "Grand Casablanca-Settat",
    population: "4 millions d'habitants",
    volume: 1300,
    volumeInt: 320,
    description:
      "Casablanca est le centre économique du Maroc et abrite les plus grands cabinets d'architecture du pays. La ville connaît une croissance immobilière soutenue avec des projets résidentiels, commerciaux et industriels de grande envergure.",
    architectCount: 312,
    avgPrice: "500 – 1 500 MAD/m²",
    keywords: [
      "architecte casablanca",
      "cabinet architecture casablanca",
      "architecte d'intérieur casablanca",
      "plan villa casablanca",
      "permis construire casablanca",
    ],
  },
  {
    slug: "marrakech",
    name: "Marrakech",
    nameAr: "مراكش",
    region: "Marrakech-Safi",
    population: "1 million d'habitants",
    volume: 1300,
    volumeInt: 320,
    description:
      "Marrakech est une destination prisée pour l'architecture traditionnelle marocaine et la rénovation de riads. Les architectes y sont spécialisés dans l'alliance entre patrimoine architectural (moucharabieh, zellige, tadelakt) et design contemporain.",
    architectCount: 187,
    avgPrice: "600 – 2 000 MAD/m²",
    keywords: [
      "architecte marrakech",
      "architecte d'intérieur marrakech",
      "rénovation riad marrakech",
      "cabinet architecture marrakech",
      "villa architecte marrakech",
    ],
  },
  {
    slug: "rabat",
    name: "Rabat",
    nameAr: "الرباط",
    region: "Rabat-Salé-Kénitra",
    population: "580 000 habitants",
    volume: 880,
    volumeInt: 260,
    description:
      "Capitale administrative du Maroc, Rabat concentre de nombreux projets institutionnels, résidentiels haut de gamme et de réhabilitation patrimoniale. Classée au patrimoine mondial de l'UNESCO, elle impose des contraintes architecturales spécifiques.",
    architectCount: 203,
    avgPrice: "550 – 1 800 MAD/m²",
    keywords: [
      "architecte rabat",
      "architecte d'intérieur rabat",
      "cabinet architecture rabat",
      "permis construire rabat",
      "architecte agdal rabat",
    ],
  },
  {
    slug: "tanger",
    name: "Tanger",
    nameAr: "طنجة",
    region: "Tanger-Tétouan-Al Hoceïma",
    population: "1 million d'habitants",
    volume: 480,
    volumeInt: 140,
    description:
      "Tanger connaît un boom immobilier sans précédent grâce à son développement industriel (Tanger Med) et son attractivité touristique. Les architectes y accompagnent une forte demande en villas, résidences balnéaires et projets commerciaux.",
    architectCount: 94,
    avgPrice: "450 – 1 400 MAD/m²",
    keywords: [
      "architecte tanger",
      "architecte d'intérieur tanger",
      "villa architecte tanger",
      "cabinet architecture tanger",
    ],
  },
  {
    slug: "agadir",
    name: "Agadir",
    nameAr: "أكادير",
    region: "Souss-Massa",
    population: "420 000 habitants",
    volume: 390,
    volumeInt: 110,
    description:
      "Station balnéaire et capitale du tourisme marocain, Agadir se développe rapidement avec des projets de villas, d'hôtels et de résidences touristiques. Le style architectural allie modernité et traditions berbères.",
    architectCount: 67,
    avgPrice: "400 – 1 200 MAD/m²",
    keywords: [
      "architecte agadir",
      "architecte d'intérieur agadir",
      "villa architecte agadir",
      "cabinet architecture agadir",
    ],
  },
  {
    slug: "fes",
    name: "Fès",
    nameAr: "فاس",
    region: "Fès-Meknès",
    population: "1,1 million d'habitants",
    volume: 260,
    volumeInt: 90,
    description:
      "Fès, capitale spirituelle et culturelle du Maroc, est réputée pour sa médina médiévale inscrite au patrimoine mondial. Les architectes spécialisés y interviennent principalement sur la rénovation de riads, demeures historiques et mosquées.",
    architectCount: 78,
    avgPrice: "300 – 900 MAD/m²",
    keywords: [
      "architecte fes",
      "architecte d'intérieur fes",
      "rénovation riad fes",
      "cabinet architecture fes",
    ],
  },
  {
    slug: "meknes",
    name: "Meknès",
    nameAr: "مكناس",
    region: "Fès-Meknès",
    population: "520 000 habitants",
    volume: 140,
    volumeInt: 50,
    description:
      "Surnommée la «ville des oliviers», Meknès est une ville impériale en plein développement. Les architectes y travaillent sur des projets résidentiels modernes ainsi que sur la restauration du patrimoine historique.",
    architectCount: 41,
    avgPrice: "280 – 750 MAD/m²",
    keywords: ["architecte meknes", "cabinet architecture meknes"],
  },
  {
    slug: "oujda",
    name: "Oujda",
    nameAr: "وجدة",
    region: "Oriental",
    population: "600 000 habitants",
    volume: 90,
    volumeInt: 30,
    description:
      "Capitale de la région de l'Oriental, Oujda est une ville universitaire et industrielle en pleine expansion. Proche de la frontière algérienne, elle attire de nombreux projets résidentiels, universitaires et commerciaux nécessitant l'expertise d'architectes qualifiés.",
    architectCount: 38,
    avgPrice: "260 – 700 MAD/m²",
    keywords: [
      "architecte oujda",
      "architecte d'intérieur oujda",
      "cabinet architecture oujda",
      "permis construire oujda",
    ],
  },
  {
    slug: "kenitra",
    name: "Kénitra",
    nameAr: "القنيطرة",
    region: "Rabat-Salé-Kénitra",
    population: "430 000 habitants",
    volume: 70,
    volumeInt: 25,
    description:
      "Kénitra est une ville industrielle et portuaire en forte croissance, située à 40 km de Rabat. Son développement économique soutenu génère une demande importante en construction résidentielle, zones industrielles et équipements publics.",
    architectCount: 34,
    avgPrice: "280 – 750 MAD/m²",
    keywords: [
      "architecte kenitra",
      "architecte d'intérieur kenitra",
      "cabinet architecture kenitra",
      "villa architecte kenitra",
    ],
  },
  {
    slug: "tetouan",
    name: "Tétouan",
    nameAr: "تطوان",
    region: "Tanger-Tétouan-Al Hoceïma",
    population: "380 000 habitants",
    volume: 50,
    volumeInt: 20,
    description:
      "Tétouan, surnommée la «colombe blanche», est une ville au riche patrimoine hispano-marocain. Sa médina classée à l'UNESCO et sa proximité avec la Méditerranée en font un terrain privilégié pour l'architecture traditionnelle et les projets balnéaires.",
    architectCount: 29,
    avgPrice: "270 – 720 MAD/m²",
    keywords: [
      "architecte tetouan",
      "architecte d'intérieur tetouan",
      "cabinet architecture tetouan",
      "rénovation tetouan",
    ],
  },
  {
    slug: "nador",
    name: "Nador",
    nameAr: "الناظور",
    region: "Oriental",
    population: "250 000 habitants",
    volume: 40,
    volumeInt: 15,
    description:
      "Nador est une ville côtière méditerranéenne en plein essor, connue pour ses projets touristiques et résidentiels. La région bénéficie d'importants investissements de la diaspora marocaine qui font appel à des architectes pour construire leurs villas.",
    architectCount: 22,
    avgPrice: "250 – 680 MAD/m²",
    keywords: [
      "architecte nador",
      "cabinet architecture nador",
      "villa architecte nador",
    ],
  },
  {
    slug: "el-jadida",
    name: "El Jadida",
    nameAr: "الجديدة",
    region: "Casablanca-Settat",
    population: "200 000 habitants",
    volume: 40,
    volumeInt: 15,
    description:
      "El Jadida est une ville côtière atlantique à forte vocation touristique, dotée d'une cité portugaise classée UNESCO. Ses plages et sa proximité avec Casablanca en font une destination de choix pour les résidences secondaires et les projets hôteliers.",
    architectCount: 19,
    avgPrice: "280 – 750 MAD/m²",
    keywords: [
      "architecte el jadida",
      "architecte d'intérieur el jadida",
      "villa balnéaire el jadida",
      "cabinet architecture el jadida",
    ],
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}

export const CITY_SLUGS = CITIES.map((c) => c.slug);
