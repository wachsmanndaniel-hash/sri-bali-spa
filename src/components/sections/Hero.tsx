import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <div className="flex h-screen flex-col">
      <Header />

      <main className="mt-20 mb-20 flex-1 overflow-y-auto">
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

            <div className="mt-20 grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-md">
                <h3 className="mb-3 text-xl font-semibold">🌿 Traditionell</h3>

                <p className="leading-7 text-gray-200">
                  Authentische balinesische Massagetechniken für tiefe
                  Entspannung und neues Wohlbefinden.
                </p>
              </div>

              <div className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-md">
                <h3 className="mb-3 text-xl font-semibold">🪷 Entspannung</h3>

                <p className="leading-7 text-gray-200">
                  Eine ruhige Atmosphäre, hochwertige Öle und eine kleine
                  Auszeit vom Alltag.
                </p>
              </div>

              <div className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-md">
                <h3 className="mb-3 text-xl font-semibold">📍 Halle (Saale)</h3>

                <p className="leading-7 text-gray-200">
                  Zentral gelegen in der Merseburger Straße 106 – Termine nach
                  Vereinbarung.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
