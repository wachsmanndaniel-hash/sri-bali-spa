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

              <h1 className="mt-5 text-5xl font-light text-white drop-shadow-[0_0_20px_rgba(201,165,106,0.4)] md:text-7xl">
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

            <div className="overflow-hidden rounded-[32px] border border-[#C9A56A]/30 bg-black/30 backdrop-blur-xl shadow-[0_0_20px_rgba(201,165,106,0.35),0_0_50px_rgba(201,165,106,0.15),0_20px_50px_rgba(0,0,0,0.55)]">
              <iframe
                src="https://www.google.com/maps?q=Merseburger+Straße+106,+06110+Halle+(Saale)&output=embed"
                className="h-[500px] w-full"
                loading="lazy"
              />
            </div>

            <div className="mt-10 rounded-[32px] border border-[#C9A56A]/30 bg-black/30 p-10 text-center text-white backdrop-blur-xl shadow-[0_0_25px_rgba(201,165,106,0.4),0_0_60px_rgba(201,165,106,0.2),0_20px_60px_rgba(0,0,0,0.7)]">
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
                className="mt-8 inline-flex items-center justify-center rounded-full border border-[#C9A56A]/50 bg-black/30 px-8 py-4 font-medium text-white backdrop-blur-md transition-all duration-300 shadow-[0_0_20px_rgba(201,165,106,0.7),0_0_40px_rgba(201,165,106,0.4),0_0_80px_rgba(201,165,106,0.2)] hover:scale-105 hover:shadow-[0_0_30px_rgba(201,165,106,1),0_0_60px_rgba(201,165,106,0.6),0_0_120px_rgba(201,165,106,0.3)]"
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