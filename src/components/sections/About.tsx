import Image from "next/image";
import Container from "@/components/ui/Container";

export default function About() {
  return (
    <section id="studio" className="bg-[#F8F6F2] py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative h-[500px] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/images/studio.jpg"
              alt="Sri Bali Spa Halle"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#C9A56A]">
              Über uns
            </p>

            <h2 className="mb-8 text-4xl font-semibold md:text-5xl">
              Willkommen im
              <br />
              Sri Bali Spa Halle
            </h2>

            <p className="mb-6 leading-8 text-gray-600">
              Im Sri Bali Spa Halle erwartet Sie eine entspannte Atmosphäre,
              inspiriert von der balinesischen Wellnesskultur. Unser Ziel ist
              es, Ihnen eine kleine Auszeit vom Alltag zu schenken.
            </p>

            <p className="mb-6 leading-8 text-gray-600">
              Jede Behandlung wird individuell auf Ihre Bedürfnisse abgestimmt.
              Hochwertige Massageöle, ruhige Musik und ein stilvolles Ambiente
              sorgen für ein ganz besonderes Wohlfühlerlebnis.
            </p>

            <p className="leading-8 text-gray-600">
              Ob zur Entspannung, als Geschenk oder einfach, um sich selbst
              etwas Gutes zu tun – wir freuen uns auf Ihren Besuch.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}