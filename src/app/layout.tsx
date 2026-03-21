import type { Metadata } from "next";
import { Open_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Colegio Stella Maris",
  description:
    "Complejo Educacional Stella Maris - Formación valórica y ciudadana, integral inclusiva y de calidad.",
  keywords: [
    "colegio",
    "stella maris",
    "el bosque",
    "santiago",
    "educación",
    "colegio gratuito",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${openSans.variable} ${montserrat.variable}`}>
      <body className="antialiased min-h-screen text-ink">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
