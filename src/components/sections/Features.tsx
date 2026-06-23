import { Leaf, Sparkles, HeartHandshake, Flower2 } from "lucide-react";
import Container from "@/components/ui/Container";

const features = [
  {
    icon: Leaf,
    title: "Ruhe & Entspannung",
    text: "Lassen Sie den Alltag hinter sich und genießen Sie eine wohltuende Auszeit.",
  },
  {
    icon: Flower2,
    title: "Balinesische Atmosphäre",
    text: "Ein stilvolles Ambiente, inspiriert von der Ruhe und Gelassenheit Balis.",
  },
  {
    icon: Sparkles,
    title: "Hochwertige Pflege",
    text: "Ausgewählte Öle und sorgfältig abgestimmte Anwendungen für Ihr Wohlbefinden.",
  },
  {
    icon: HeartHandshake,
    title: "Persönliche Betreuung",
    text: "Jede Behandlung wird individuell auf Ihre Wünsche abgestimmt.",
  },
];

export default function Features() {
  return (
    <section className="bg-[#F8F6F2] py-24">
      <Container>
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#C9A56A]">
            Warum Sri Bali Spa?
          </p>

          <h2 className="mb-6 text-4xl md:text-5xl">
            Entspannung beginnt
            <br />
            mit Vertrauen.
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Wir möchten, dass Sie sich vom ersten Moment an willkommen fühlen.
            Genießen Sie eine entspannte Atmosphäre und gönnen Sie sich eine
            kleine Auszeit vom Alltag.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 inline-flex rounded-full bg-[#F3EEE5] p-4">
                  <Icon size={32} className="text-[#C9A56A]" />
                </div>

                <h3 className="mb-4 text-2xl font-semibold">
                  {feature.title}
                </h3>

                <p className="leading-7 text-gray-600">
                  {feature.text}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}