"use client";

import Container from "@/components/ui/Container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="fixed bottom-4 left-1/2 z-50 h-20 w-[98%] max-w-7xl -translate-x-1/2 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl shadow-[0_0_15px_rgba(201,165,106,0.35),0_0_30px_rgba(201,165,106,0.25),0_0_60px_rgba(201,165,106,0.15),0_15px_40px_rgba(0,0,0,0.65)]">
      <Container className="flex h-full items-center justify-between">
        <p className="hidden text-sm text-gray-400 md:block">
          © 2026 Sri Bali Spa Halle
        </p>

        <nav className="flex w-full items-center justify-center gap-6 text-sm text-gray-300 md:w-auto md:justify-end">
          <Link
            href="/impressum"
            className="transition hover:text-[#C9A56A]"
          >
            Impressum
          </Link>

          <Link
            href="/datenschutz"
            className="transition hover:text-[#C9A56A]"
          >
            Datenschutz
          </Link>

          <a
            href="https://www.instagram.com/sribalispa.de"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[#C9A56A]"
          >
            Instagram
          </a>
        </nav>
      </Container>
    </footer>
  );
}