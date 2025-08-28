import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarNew from "@/components/NavbarNew";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BMS - Esports Excellence | Structure Compétitive Elite",
  description: "Structure esport d'élite spécialisée dans l'excellence compétitive. Roster professionnel, tournois majeurs, innovations gaming.",
  keywords: [
    "BMS",
    "esport",
    "structure esport",
    "équipe professionnelle",
    "compétition gaming",
    "tournois",
    "fighting games",
    "excellence compétitive",
    "pro gaming",
    "esports france",
    "gaming elite",
    "competitive gaming"
  ],
  authors: [{ name: "BMS Esports" }],
  creator: "BMS Esports",
  publisher: "BMS Esports",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://bms-esports.com",
    siteName: "BMS Esports",
    title: "BMS - Structure Esport",
    description: "Structure esport",
    images: [
      {
        url: "/LOGO.webp",
        width: 1200,
        height: 630,
        alt: "BMS Esports Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BMS Esports",
    description: "Structure esport.",
    creator: "@BMSEsports",
    images: ["/LOGO.webp"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ea2e2e",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/LOGO.webp", type: "image/webp" },
    ],
    apple: [
      { url: "/LOGO.webp", sizes: "180x180", type: "image/webp" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Background global */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-gray-950 via-black to-gray-900" />
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(234,46,46,0.06)_0%,transparent_60%)]" />
        
        {/* Grille de profondeur signature globale */}
        <div className="fixed inset-0 -z-10 opacity-[0.008] pointer-events-none">
          <div className="w-full h-full bg-[linear-gradient(rgba(234,46,46,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(234,46,46,0.4)_1px,transparent_1px)] bg-[size:120px_120px]" />
        </div>
        
        {/* Particules flottantes signature */}
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/10 rounded-full"
              style={{
                left: `${20 + (i * 15)}%`,
                top: `${30 + (i * 8)}%`,
                animationDelay: `${i * 0.8}s`,
                animation: `float ${4 + (i % 3)}s ease-in-out infinite`
              }}
            />
          ))}
        </div>
        
        {/* Lignes signature verticales */}
        <div className="fixed left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-red/20 to-transparent -z-10" />
        <div className="fixed right-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-red/20 to-transparent -z-10" />

        <NavbarNew />
        
        <main className="min-h-screen pt-30">
          {children}
        </main>

        {/* Footer global discret */}
        <footer className="border-t border-gray-800 bg-black/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6 py-8">
            <div className="text-center space-y-4">
              <div className="flex items-center gap-4 justify-center">
                <div className="w-8 h-px bg-brand-red/30" />
                <p className="text-xs text-brand-red/80 font-light tracking-[0.4em] uppercase">
                  BMS 2025
                </p>
                <div className="w-8 h-px bg-brand-red/30" />
              </div>
              <p className="text-xs text-gray-600 font-light tracking-[0.2em]">
                SLOGAN
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
