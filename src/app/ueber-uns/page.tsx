import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Über Uns | Sri Bali Spa Halle",
  description: "Lernen Sie die Inhaberin von Sri Bali Spa Halle kennen.",
};

export default function UeberUnsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="fixed inset-0 -z-10 bg-black/60" />

      <main className="px-6 pt-40 pb-32">
        <div className="mx-auto max-w-6xl">

          {/* Überschrift */}

          <div className="mb-20 text-center">
            <p className="uppercase tracking-[0.5em] text-[#C9A56A]">
              Sri Bali Spa Halle
            </p>

            <h1 className="mt-5 text-5xl font-light text-white md:text-7xl">
              Über Uns
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">
              Tradition aus Bali. Entspannung mit Herz.
            </p>
          </div>

          {/* Foto */}

          <div className="mx-auto mb-16 max-w-2xl overflow-hidden rounded-[32px] border border-[#C9A56A]/30 bg-black/40 backdrop-blur-xl shadow-[0_0_25px_rgba(201,165,106,0.35),0_0_70px_rgba(201,165,106,0.15),0_30px_80px_rgba(0,0,0,0.8)]">

            <Image
              src="/images/kadek.jpg"
              alt="Kadek Sri Purwasari"
              width={1200}
              height={1600}
              className="w-full object-cover"
            />
          </div>

          {/* Text */}

          <div className="mx-auto max-w-4xl rounded-[32px] border border-[#C9A56A]/30 bg-black/40 p-10 text-white backdrop-blur-xl shadow-[0_0_25px_rgba(201,165,106,0.35),0_0_70px_rgba(201,165,106,0.15),0_30px_80px_rgba(0,0,0,0.8)] md:p-14">

            <h2 className="mb-8 text-center text-3xl font-light text-[#E5C78A]">
              Kadek Sri Purwasari
            </h2>

            <p className="leading-9 text-gray-300">
              Hinter Sri Bali Spa Halle steht Kadek Sri Purwasari –
              ausgebildete Massagetherapeutin mit langjähriger
              internationaler Erfahrung im Wellness- und SPA-Bereich.
            </p>

            <p className="mt-6 leading-9 text-gray-300">
              Bereits seit vielen Jahren begleitet sie Menschen auf ihrem
              Weg zu mehr Entspannung, Wohlbefinden und innerer Balance.
              Ihre berufliche Laufbahn führte sie durch renommierte SPA-
              und Wellnessanlagen in Indonesien, Polen, der Türkei und
              Deutschland.
            </p>

            <p className="mt-6 leading-9 text-gray-300">
              Ihre Ausbildung absolvierte sie an der Paradise International
              Spa Academy auf Bali. Dort erlernte sie traditionelle
              balinesische sowie internationale Massagetechniken und
              spezialisierte sich auf professionelle Wellness- und
              SPA-Anwendungen.
            </p>

            <p className="mt-6 leading-9 text-gray-300">
              Die Eröffnung einer eigenen Massagepraxis war schon lange ihr
              großer Traum. Mit Sri Bali Spa Halle hat sie einen Ort
              geschaffen, an dem traditionelle balinesische Gastfreundschaft,
              professionelle Behandlungen und eine ruhige Atmosphäre
              zusammenkommen.
            </p>

            <p className="mt-6 leading-9 text-gray-300">
              Jede Behandlung wird mit viel Aufmerksamkeit, Erfahrung und
              persönlicher Hingabe durchgeführt – damit Sie den Alltag
              hinter sich lassen und neue Energie tanken können.
            </p>
          </div>

          {/* Qualifikationen */}

          <div className="mt-16 grid gap-6 md:grid-cols-3">

            <div className="rounded-[32px] border border-[#C9A56A]/30 bg-black/40 p-8 text-center backdrop-blur-xl shadow-[0_0_20px_rgba(201,165,106,0.25)]">
              <div className="mb-4 text-4xl">🌿</div>
              <h3 className="text-xl text-[#E5C78A]">
                Bali Ausbildung
              </h3>
            </div>

            <div className="rounded-[32px] border border-[#C9A56A]/30 bg-black/40 p-8 text-center backdrop-blur-xl shadow-[0_0_20px_rgba(201,165,106,0.25)]">
              <div className="mb-4 text-4xl">🪷</div>
              <h3 className="text-xl text-[#E5C78A]">
                Internationale Erfahrung
              </h3>
            </div>

            <div className="rounded-[32px] border border-[#C9A56A]/30 bg-black/40 p-8 text-center backdrop-blur-xl shadow-[0_0_20px_rgba(201,165,106,0.25)]">
              <div className="mb-4 text-4xl">✨</div>
              <h3 className="text-xl text-[#E5C78A]">
                Zertifizierte SPA Therapeutin
              </h3>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}