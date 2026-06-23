"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `transition hover:text-[#C9A56A] ${
      pathname === href ? "text-[#C9A56A]" : "text-white"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-2xl font-semibold tracking-wide text-white"
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
      </div>
    </header>
  );
}
