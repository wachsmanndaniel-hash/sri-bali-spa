"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkClass = (href: string) =>
    `transition hover:text-[#C9A56A] ${
      pathname === href ? "text-[#C9A56A]" : "text-white"
    }`;

  return (
    <header className="fixed top-4 left-1/2 z-50 w-[98%] max-w-7xl -translate-x-1/2 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl shadow-[0_0_15px_rgba(201,165,106,0.35),0_0_30px_rgba(201,165,106,0.25),0_0_60px_rgba(201,165,106,0.15),0_15px_40px_rgba(0,0,0,0.65)]">
      <div className="h-20">
        {/* WICHTIG: Kein justify-between mehr */}
        <div className="flex h-full items-center px-10 w-full">
          
          {/* Titel mit Abstand */}
          <div className="pl-8">
            <Link
              href="/"
              className="text-xl font-semibold tracking-wide text-white md:text-2xl"
            >
              Sri Bali Spa Halle
            </Link>
          </div>

          {/* Spacer schiebt Navigation nach rechts */}
          <div className="flex-1" />

          {/* Navigation */}
          <nav className="hidden items-center gap-10 md:flex">
            <Link href="/" className={linkClass("/")}>
              Home
            </Link>

            <Link href="/behandlungen" className={linkClass("/behandlungen")}>
              Behandlungen
            </Link>

            <Link href="/anfahrt" className={linkClass("/anfahrt")}>
              Anfahrt
            </Link>
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="text-3xl text-white md:hidden"
            aria-label="Menü öffnen"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menü */}
      {open && (
        <div className="absolute right-6 top-20 md:hidden">
          <nav className="min-w-[240px] rounded-[28px] border border-[#C9A56A]/30 bg-black/30 p-4 backdrop-blur-xl shadow-[0_0_25px_rgba(201,165,106,0.4),0_0_60px_rgba(201,165,106,0.2),0_20px_60px_rgba(0,0,0,0.7)]">
            <Link
              href="/"
              className="block rounded-lg px-4 py-3 text-white transition hover:bg-[#C9A56A]/10"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/behandlungen"
              className="block rounded-lg px-4 py-3 text-white transition hover:bg-[#C9A56A]/10"
              onClick={() => setOpen(false)}
            >
              Behandlungen
            </Link>

            <Link
              href="/anfahrt"
              className="block rounded-lg px-4 py-3 text-white transition hover:bg-[#C9A56A]/10"
              onClick={() => setOpen(false)}
            >
              Anfahrt
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
