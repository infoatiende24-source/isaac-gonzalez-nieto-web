import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Isaac González Nieto | Electricidad & Soluciones Inteligentes",
  description:
    "Instalaciones eléctricas modernas e inteligentes para hogares y empresas. Automatización, eficiencia energética, iluminación LED y soluciones premium en Andorra.",
  keywords: [
    "electricista Andorra",
    "instalaciones eléctricas",
    "automatización inteligente",
    "domótica",
    "cargadores coche eléctrico",
    "iluminación LED",
    "boletines eléctricos",
    "eficiencia energética",
    "reformas eléctricas",
    "averías urgentes",
    "Isaac González Nieto electricidad",
  ],
  authors: [{ name: "Isaac González Nieto Electricidad" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Isaac González Nieto | Electricidad & Soluciones Inteligentes",
    description:
      "Instalaciones eléctricas modernas e inteligentes para hogares y empresas.",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Isaac González Nieto - Electricidad & Soluciones Inteligentes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isaac González Nieto | Electricidad & Soluciones Inteligentes",
    description:
      "Instalaciones eléctricas modernas e inteligentes para hogares y empresas.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ backgroundColor: "#030712" }}
      >
        {children}
      </body>
    </html>
  );
}
