import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function AnfahrtPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="fixed inset-0 -z-10 bg-black/60" />

      <div
        className="fixed inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #C9A56A 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <main className="px-6">
        <section className="mx-auto max-w-7xl">
          <div className="h-40" />

          {/* EIN gemeinsamer optischer Block */}
          <div className="mx-auto max-w-3xl">
            <div className="mb-16 text-center">
              <p className="uppercase tracking-[0.5em] text-[#C9A56A]">
                Sri Bali Spa Halle
              </p>

              <h1 className="mt-5 text-5xl font-light text-white md:text-7xl">
                Anfahrt
              </h1>

              <div className="mt-8 flex justify-center">
                <p className="max-w-2xl text-center text-lg leading-8 text-gray-300">
                  Besuchen Sie uns in der Merseburger Straße 106 in Halle
                  (Saale). Nutzen Sie die Karte für Ihre Anfahrt oder starten
                  Sie die Navigation direkt mit Google Maps.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md">
              <iframe
                src="https://www.google.com/maps?q=Merseburger+Straße+106,+06110+Halle+(Saale)&output=embed"
                className="h-[500px] w-full"
                loading="lazy"
              />
            </div>

            <div className="mt-10 rounded-[32px] border border-white/10 bg-white/5 p-10 text-center text-white backdrop-blur-md">
              <h2 className="text-3xl font-light">
                Sri Bali Spa Halle
              </h2>

              <p className="mt-6 leading-8 text-gray-300">
                Merseburger Straße 106
                <br />
                06110 Halle (Saale)
              </p>

              <a
                href="https://maps.google.com/?q=Merseburger+Straße+106+06110+Halle"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-[#C9A56A] px-8 py-4 font-medium text-white transition hover:bg-[#B89357]"
              >
                Route starten
              </a>
            </div>
          </div>

          <div className="h-40" />
        </section>
      </main>

      <Footer />
    </div>
  );
}