import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Merienda, Mulish, Nunito } from "next/font/google";
import "./globals.css";

const mulish = Mulish({
  variable: "--font-mulish",
  weight: ["400", "600", "700"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: true,
});

const nunito = Nunito({
  variable: "--font-nunito",
  weight: ["400", "600", "700"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const merienda = Merienda({
  variable: "--font-merienda",
  weight: ["400", "600", "700"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hotelsuizatermal.com"),
  title: {
    default: "Grand Hotel Suiza | Hotel 4 Estrellas en Termas",
    template: "%s | Grand Hotel Suiza",
  },
  description:
    "Grand Hotel Suiza, un hotel 4 estrellas en Termas, ideal para disfrutar de confort y elegancia. Habitaciones modernas, restaurante gourmet, spa y ubicación privilegiada cerca de los principales atractivos. Reserva online y viví una estadía inolvidable.",
  keywords: [
    "hotel en Termas",
    "Grand Hotel Suiza",
    "hotel 4 estrellas",
    "habitaciones de lujo",
    "reserva de hotel",
    "hotel céntrico Termas",
    "spa y restaurante hotel",
  ],
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
  openGraph: {
    type: "website",
    url: "https://www.hotelsuizatermal.com",
    title: "Grand Hotel Suiza | Hotel 4 Estrellas en Termas",
    description:
      "Descubre el Grand Hotel Suiza en Termas. Habitaciones elegantes, spa, restaurante gourmet y la mejor ubicación para tu estadía.",
    siteName: "Grand Hotel Suiza",
    images: [
      {
        url: "/portada.webp",
        width: 1200,
        height: 630,
        alt: "Grand Hotel Suiza - Fachada y entrada principal",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grand Hotel Suiza | Hotel 4 Estrellas en Termas",
    description:
      "Elegancia, confort y ubicación privilegiada en Termas. Reservá ahora tu estadía en el Grand Hotel Suiza.",
    images: ["/portada.webp"],
  },
  alternates: {
    canonical: "https://www.hotelsuizatermal.com",
  },
  authors: [
    {
      name: "Grand Hotel Suiza",
      url: "https://www.hotelsuizatermal.com",
    },
    {
      name: "Abel Acuña – Freelancer Frontend",
      url: "https://ronin-webdesign.vercel.app/",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${mulish.variable} ${merienda.variable} ${nunito.variable} antialiased min-h-screen bg-white overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
