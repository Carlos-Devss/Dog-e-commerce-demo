import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "../globals.css";

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
  title: "Propuesta GoldenDog × STRING",
  description: "Sistema Automatizado N4",
};

export default function PropuestaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${dmSans.variable}`}>
      <body
        style={{
          margin: 0,
          padding: 0,
          background: "#1A1A1A",
          overflowX: "hidden",
        }}
      >
        {children}
      </body>
    </html>
  );
}
