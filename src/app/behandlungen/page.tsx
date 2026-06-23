import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MassageCard from "../../components/massages/MassageCard";
import { massages } from "../../components/massages/massages";
import FadeUp from "@/components/ui/FadeUp";
import Packages from "@/components/sections/Packages";

export default function BehandlungenPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Overlay */}
      <div className="fixed inset-0 -z-10 bg-black/60" />

      {/* Muster */}
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
          {/* Abstand zum Header */}
          <div className="h-40" />

          {/* Überschrift */}
          <div className="mb-20 text-center">
            <p className="uppercase tracking-[0.5em] text-[#C9A56A]">
              Sri Bali Spa Halle
            </p>

            <h1 className="mt-5 text-5xl font-light text-white md:text-7xl">
              Unsere Behandlungen
            </h1>

            <div className="mt-8 flex justify-center">
              <p className="max-w-2xl text-center text-lg leading-8 text-gray-300">
                Entdecken Sie authentische balinesische Massagen und gönnen Sie
                sich eine Auszeit für Körper und Geist.
              </p>
            </div>
          </div>

          {/* Massagekarten */}
          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
            {massages.map((massage, index) => (
              <FadeUp key={massage.title} delay={index * 0.08}>
                <MassageCard {...massage} />
              </FadeUp>
            ))}
          </div>

          {/* Wellness-Pakete */}
          <Packages />

          {/* Abstand zum Footer */}
          <div className="h-40" />
        </section>
      </main>

      <Footer />
    </div>
  );
}
