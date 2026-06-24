import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import { Leaf, Flower2, MapPin } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex h-screen flex-col">
      <Header />

      <div className="fixed inset-0 -z-10 bg-black/65" />

      <div
        className="fixed inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #C9A56A 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <main className="mt-28 mb-28 flex-1 overflow-y-auto md:mt-20 md:mb-20">
        <section className="flex min-h-full items-center justify-center">
          <div className="w-full max-w-5xl px-6 text-center text-white">
            <p className="mb-6 text-sm uppercase tracking-[0.45em] text-[#C9A56A]">
              Willkommen im
            </p>

            <h1 className="mb-8 text-5xl font-light leading-tight md:text-7xl">
              Sri Bali Spa Halle
            </h1>

            <p className="mx-auto text-center text-xl leading-loose text-white">
              Tauchen Sie ein in die Welt der balinesischen
              <br />
              Entspannung. Genießen Sie traditionelle Massagen,
              <br />
              wohltuende Aromaöle und eine Atmosphäre,
              <br />
              die Körper und Geist zur Ruhe kommen lässt.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <Button href="https://wa.me/4915735800891">
                Termin per WhatsApp
              </Button>

              <Button href="tel:+4915735800891" variant="outline">
                Jetzt anrufen
              </Button>
            </div>

            <div className="mt-20 grid gap-8 md:grid-cols-3">

              {/* Traditionell */}
              <div className="relative overflow-hidden rounded-[32px] border border-[#C9A56A]/50 bg-black/80 p-10 text-center backdrop-blur-xl shadow-[0_0_25px_rgba(201,165,106,0.4),0_0_70px_rgba(201,165,106,0.15),0_30px_80px_rgba(0,0,0,0.8)]">

                <div className="absolute left-1/2 top-0 h-8 w-24 -translate-x-1/2 bg-[#E5C78A] opacity-80 blur-xl" />

                <div className="absolute bottom-0 left-0 h-24 w-24 bg-gradient-to-tr from-[#E5C78A]/40 to-transparent blur-lg" />

                <div className="absolute bottom-0 right-0 h-24 w-24 bg-gradient-to-tl from-[#E5C78A]/40 to-transparent blur-lg" />

                <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-[#C9A56A]/50 bg-black/40 shadow-[0_0_15px_rgba(201,165,106,0.25),inset_0_0_15px_rgba(201,165,106,0.12)]">
                  <Leaf
                    size={46}
                    strokeWidth={1.5}
                    className="text-[#E5C78A]"
                  />
                </div>

                <h3 className="mb-5 text-4xl font-light text-white">
                  Traditionell
                </h3>

                <p className="leading-8 text-gray-300">
                  Authentische balinesische Massagetechniken für tiefe
                  Entspannung und neues Wohlbefinden.
                </p>

                <Link
                  href="/behandlungen"
                  className="mt-10 inline-flex h-12 items-center justify-center rounded-xl border border-[#C9A56A]/60 px-8 text-sm tracking-[0.15em] text-white shadow-[0_0_15px_rgba(201,165,106,0.35)] transition hover:bg-[#C9A56A]/10"
                >
                  MEHR ERFAHREN
                </Link>
              </div>

              {/* Entspannung */}
              <div className="relative overflow-hidden rounded-[32px] border border-[#C9A56A]/50 bg-black/80 p-10 text-center backdrop-blur-xl shadow-[0_0_25px_rgba(201,165,106,0.4),0_0_70px_rgba(201,165,106,0.15),0_30px_80px_rgba(0,0,0,0.8)]">

                <div className="absolute left-1/2 top-0 h-8 w-24 -translate-x-1/2 bg-[#E5C78A] opacity-80 blur-xl" />

                <div className="absolute bottom-0 left-0 h-24 w-24 bg-gradient-to-tr from-[#E5C78A]/40 to-transparent blur-lg" />

                <div className="absolute bottom-0 right-0 h-24 w-24 bg-gradient-to-tl from-[#E5C78A]/40 to-transparent blur-lg" />

                <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-[#C9A56A]/50 bg-black/40 shadow-[0_0_15px_rgba(201,165,106,0.25),inset_0_0_15px_rgba(201,165,106,0.12)]">
                  <Flower2
                    size={46}
                    strokeWidth={1.5}
                    className="text-[#E5C78A]"
                  />
                </div>

                <h3 className="mb-5 text-4xl font-light text-white">
                  Entspannung
                </h3>

                <p className="leading-8 text-gray-300">
                  Eine ruhige Atmosphäre, hochwertige Öle und eine kleine
                  Auszeit vom Alltag.
                </p>

                <Link
                  href="/behandlungen"
                  className="mt-10 inline-flex h-12 items-center justify-center rounded-xl border border-[#C9A56A]/60 px-8 text-sm tracking-[0.15em] text-white shadow-[0_0_15px_rgba(201,165,106,0.35)] transition hover:bg-[#C9A56A]/10"
                >
                  MEHR ERFAHREN
                </Link>
              </div>

              {/* Halle */}
              <div className="relative overflow-hidden rounded-[32px] border border-[#C9A56A]/50 bg-black/80 p-10 text-center backdrop-blur-xl shadow-[0_0_25px_rgba(201,165,106,0.4),0_0_70px_rgba(201,165,106,0.15),0_30px_80px_rgba(0,0,0,0.8)]">

                <div className="absolute left-1/2 top-0 h-8 w-24 -translate-x-1/2 bg-[#E5C78A] opacity-80 blur-xl" />

                <div className="absolute bottom-0 left-0 h-24 w-24 bg-gradient-to-tr from-[#E5C78A]/40 to-transparent blur-lg" />

                <div className="absolute bottom-0 right-0 h-24 w-24 bg-gradient-to-tl from-[#E5C78A]/40 to-transparent blur-lg" />

                <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-[#C9A56A]/50 bg-black/40 shadow-[0_0_15px_rgba(201,165,106,0.25),inset_0_0_15px_rgba(201,165,106,0.12)]">
                  <MapPin
                    size={46}
                    strokeWidth={1.5}
                    className="text-[#E5C78A]"
                  />
                </div>

                <h3 className="mb-5 text-4xl font-light text-white">
                  Halle (Saale)
                </h3>

                <p className="leading-8 text-gray-300">
                  Zentral gelegen in der Merseburger Straße 106 – Termine nach
                  Vereinbarung.
                </p>

                <Link
                  href="/anfahrt"
                  className="mt-10 inline-flex h-12 items-center justify-center rounded-xl border border-[#C9A56A]/60 px-8 text-sm tracking-[0.15em] text-white shadow-[0_0_15px_rgba(201,165,106,0.35)] transition hover:bg-[#C9A56A]/10"
                >
                  MEHR ERFAHREN
                </Link>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}