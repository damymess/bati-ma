export type Testimonial = {
  name: string;
  city: string;
  project: string;
  rating: number;
  text: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Karim B.",
    city: "Casablanca",
    project: "Villa 250m² à Bouskoura",
    rating: 5,
    text: "J'ai trouvé mon architecte en 2 jours grâce à Bati.ma. Le projet a été livré dans les délais et le résultat dépasse mes attentes.",
  },
  {
    name: "Fatima Z.",
    city: "Marrakech",
    project: "Rénovation riad Médina",
    rating: 5,
    text: "Rénover un riad c'est complexe. L'architecte trouvé via Bati.ma a su allier tradition et modernité. Je recommande à 100%.",
  },
  {
    name: "Ahmed M.",
    city: "Rabat",
    project: "Appartement 120m² Agdal",
    rating: 4,
    text: "Service rapide et efficace. J'ai comparé 3 architectes avant de faire mon choix. Le formulaire est simple et la réponse rapide.",
  },
  {
    name: "Nadia K.",
    city: "Tanger",
    project: "Local commercial Cap Spartel",
    rating: 5,
    text: "Mon restaurant a été conçu exactement comme je l'imaginais. L'architecte a compris ma vision dès le premier rendez-vous.",
  },
  {
    name: "Youssef R.",
    city: "Agadir",
    project: "Maison contemporaine 180m²",
    rating: 5,
    text: "Après des mois de recherche, Bati.ma m'a permis de trouver l'architecte idéal en quelques clics. Projet livré avec brio.",
  },
  {
    name: "Salma H.",
    city: "Fès",
    project: "Rénovation maison traditionnelle",
    rating: 4,
    text: "Très satisfaite du résultat. L'architecte a respecté le caractère fassi tout en modernisant les espaces de vie.",
  },
  {
    name: "Omar T.",
    city: "Casablanca",
    project: "Immeuble R+4 Sidi Maarouf",
    rating: 5,
    text: "Projet ambitieux mené de main de maître. Le cabinet trouvé sur Bati.ma a géré toutes les autorisations et le suivi chantier.",
  },
  {
    name: "Leila A.",
    city: "Marrakech",
    project: "Villa avec piscine Palmeraie",
    rating: 5,
    text: "De la conception aux finitions, tout était parfait. L'architecte était disponible et à l'écoute tout au long du projet.",
  },
];
