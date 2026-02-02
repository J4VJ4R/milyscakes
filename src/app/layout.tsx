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
    "Las mejores tortas, postres y café en Ibagué. Pedidos a domicilio de Red Velvet, Cheesecake y más. Dulces que cuentan historias.",
  keywords: "Pastelería Ibagué, Tortas Ibagué, Postres a domicilio, Mily's Cakes, Café Ibagué",
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
    "image": "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=1000",
    "description": "Pastelería artesanal en Ibagué. Dulces que cuentan historias.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ibagué",
      "addressRegion": "Tolima",
      "addressCountry": "CO",
    },
    "telephone": "+573134583730",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "20:00",
      },
    ],
    "menu": "https://milyscakes.com/menu", 
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
