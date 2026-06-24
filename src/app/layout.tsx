import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import MusicPlayer from "@/components/ui/MusicPlayer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sri Bali Spa Halle",
  description: "Traditionelle balinesische Massagen in Halle (Saale)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${inter.variable} ${cormorant.variable} min-h-screen overflow-x-hidden`}
      >
        {/* Fester Hintergrund */}
        <div className="fixed inset-0 -z-20">
          <img
            src="/images/hero.jpg"
            alt=""
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/55" />
        </div>

        {children}
        <MusicPlayer />
      </body>
    </html>
  );
}
