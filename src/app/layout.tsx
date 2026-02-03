import type { Metadata } from "next";
import { Geist, Geist_Mono, Dancing_Script } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MilysCakes | Pastelería Artesanal en Ibagué",
  description:
    "Las mejores tortas, postres y café en Ibagué. Pedidos a domicilio de Red Velvet, Cheesecake, Brownies y más. Dulces que cuentan historias.",
  keywords: [
    "Pastelería Ibagué",
    "Tortas Ibagué",
    "Postres a domicilio Ibagué",
    "Mily's Cakes",
    "Café Ibagué",
    "Dónde comprar tortas en Ibagué",
    "Mejor pastelería de Ibagué",
    "Tortas de cumpleaños Ibagué",
    "Desayunos sorpresa Ibagué",
    "Bakery Ibagué",
    "Repostería artesanal Tolima"
  ],
  authors: [{ name: "Mily's Cakes" }],
  creator: "Mily's Cakes",
  publisher: "Mily's Cakes",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "MilysCakes | Pastelería Artesanal en Ibagué",
    description: "Dulces que cuentan historias. Pide tus tortas y postres favoritos a domicilio en Ibagué.",
    url: "https://milyscakes.com",
    siteName: "Mily's Cakes",
    images: [
      {
        url: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=1000",
        width: 1200,
        height: 630,
        alt: "Mily's Cakes - Pastelería Artesanal",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MilysCakes | Pastelería Artesanal en Ibagué",
    description: "Dulces que cuentan historias. Pide tus tortas y postres favoritos a domicilio en Ibagué.",
    images: ["https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=1000"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: '/img/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    "name": "Mily's Cakes",
    "image": [
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519340333755-56e9c1d04579?auto=format&fit=crop&q=80&w=1000"
    ],
    "description": "Pastelería artesanal en Ibagué ofreciendo tortas, postres, bebidas calientes y frías. Especialidad en Red Velvet y Cheesecake.",
    "url": "https://milyscakes.com",
    "telephone": "+573134583730",
    "servesCuisine": "Pastelería, Repostería, Cafetería",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ibagué",
      "addressRegion": "Tolima",
      "addressCountry": "CO",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 4.4389,
      "longitude": -75.2322
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "09:00",
        "closes": "22:00",
      },
    ],
    "priceRange": "$$",
    "paymentAccepted": "Cash, Credit Card, Transferencia Bancaria, Nequi, Daviplata",
    "currenciesAccepted": "COP",
    "sameAs": [
      "https://www.instagram.com/milyscakes27/",
      "https://www.facebook.com/milyscakes",
      "https://www.tiktok.com/@milyscakes0?lang=es-419"
    ],
    "potentialAction": {
      "@type": "OrderAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://wa.me/573134583730",
        "inLanguage": "es",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/IOSPlatform",
          "http://schema.org/AndroidPlatform"
        ]
      },
      "deliveryMethod": "http://purl.org/goodrelations/v1#DeliveryModeOwnFleet"
    }
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} antialiased bg-mily-bg text-mily-text`}
      >
        {children}
      </body>
    </html>
  );
}
