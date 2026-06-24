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
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-xl font-semibold tracking-wide text-white md:text-2xl"
        >
          Sri Bali Spa Halle
        </Link>

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

        <button
          onClick={() => setOpen(!open)}
          className="text-3xl text-white md:hidden"
          aria-label="Menü öffnen"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black/90 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col px-6 py-4 text-white">
            <Link href="/" className="py-3" onClick={() => setOpen(false)}>
              Home
            </Link>

            <Link
              href="/behandlungen"
              className="py-3"
              onClick={() => setOpen(false)}
            >
              Behandlungen
            </Link>

            <Link
              href="/anfahrt"
              className="py-3"
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