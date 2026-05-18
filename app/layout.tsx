import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/layout/CartDrawer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700", "900"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GoldenDog — Higiene y entrenamiento premium para mascotas",
  description:
    "Fabricación y comercialización de productos para higiene y entrenamiento de mascotas. Fundada en México, 1999.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${dmSans.variable} antialiased bg-warm text-ink`}
      >
        <Navbar />
        <CartDrawer />
        {children}
        <Footer />
      </body>
    </html>
  );
}
