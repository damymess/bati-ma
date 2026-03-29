import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/components/AuthProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bati.ma"),
  title: {
    default: "Bati.ma — Annuaire des Architectes au Maroc",
    template: "%s | Bati.ma",
  },
  description:
    "Trouvez un architecte qualifié au Maroc. Annuaire complet des cabinets d'architecture et architectes d'intérieur à Casablanca, Marrakech, Rabat et dans toutes les villes du Maroc.",
  keywords: [
    "architecte maroc",
    "architecte casablanca",
    "architecte marrakech",
    "architecte rabat",
    "cabinet architecture maroc",
    "architecte d'intérieur maroc",
  ],
  alternates: {
    canonical: "https://bati.ma",
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    siteName: "Bati.ma",
    title: "Bati.ma — Annuaire des Architectes au Maroc",
    description:
      "Trouvez un architecte qualifié au Maroc. Portfolios, avis clients et demande de devis gratuite.",
    images: [
      {
        url: "/images/hero-villa.jpg",
        width: 1200,
        height: 630,
        alt: "Bati.ma — Annuaire Architectes Maroc",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bati.ma — Annuaire des Architectes au Maroc",
    description: "800+ architectes vérifiés au Maroc. Portfolios, avis et devis gratuit.",
    images: ["/images/hero-villa.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <AuthProvider>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
