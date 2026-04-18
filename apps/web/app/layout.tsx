import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MobileTabBar from "@/components/MobileTabBar";
import { Providers } from "@/components/Providers";
import ExitIntentPopup from "@/components/ExitIntentPopup";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#0c0a09",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://bati.ma"),
  title: {
    default: "Bati.ma — Annuaire des Architectes au Maroc",
    template: "%s | Bati.ma",
  },
  description:
    "Trouvez un architecte qualifié au Maroc. Annuaire complet des cabinets d'architecture et architectes d'intérieur à Casablanca, Marrakech, Rabat et dans toutes les villes du Maroc.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Bati.ma",
  },
  keywords: [
    "architecte maroc",
    "architecte casablanca",
    "architecte marrakech",
    "architecte rabat",
    "cabinet architecture maroc",
    "architecte d'intérieur maroc",
  ],
  alternates: { canonical: "https://bati.ma" },
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
      <head>
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="324ea11e-394a-4420-be95-b52b1a7fcc15"
          strategy="afterInteractive"
        />
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="bzzpMyJVA118YnoBiToQ+A"
          async
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://bati.ma/#organization",
              name: "Bati.ma",
              url: "https://bati.ma",
              logo: "https://bati.ma/images/logo-512.png",
              description: "Annuaire des architectes au Maroc — 3 400+ profils vérifiés, 116 guides pratiques et calculateur budget construction gratuit.",
              foundingDate: "2025",
              areaServed: { "@type": "Country", name: "Morocco" },
              sameAs: [
                "https://www.linkedin.com/company/bati-ma/",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "contact@bati.ma",
                contactType: "customer service",
                availableLanguage: ["French", "Arabic"],
              },
            }),
          }}
        />
        <Providers>
          <Nav />
          <main className="flex-1 pb-24 lg:pb-0">{children}</main>
          <div className="hidden lg:block">
            <Footer />
          </div>
          <MobileTabBar />
          <ExitIntentPopup />
        </Providers>
      </body>
    </html>
  );
}
