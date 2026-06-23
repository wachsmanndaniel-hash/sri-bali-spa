import Container from "@/components/ui/Container";

const services = [
  {
    title: "Traditionelle Bali Massage",
    duration: "60 / 90 Min.",
    price: "55 € / 80 €",
    description:
      "Ganzkörpermassage mit warmem Öl sowie Dehn- und Drucktechniken für tiefe Entspannung.",
  },
  {
    title: "Bali Aromatherapie Massage",
    duration: "60 / 90 Min.",
    price: "55 € / 80 €",
    description:
      "Entspannende Massage mit warmen Aromaölen. Wählen Sie Ihren persönlichen Lieblingsduft.",
  },
  {
    title: "Bali Kräuterstempel Massage",
    duration: "60 / 90 Min.",
    price: "75 € / 105 €",
    description:
      "Warme Kräuterstempel regen die Durchblutung an, lockern die Muskulatur und pflegen die Haut.",
  },
  {
    title: "Bali Hot Stone Massage",
    duration: "60 / 90 Min.",
    price: "70 € / 100 €",
    description:
      "Warme Basaltsteine lösen selbst tief sitzende Verspannungen und schenken neue Energie.",
  },
  {
    title: "Anti-Stress Massage",
    duration: "60 / 90 Min.",
    price: "55 € / 80 €",
    description:
      "Ideal bei Stress, Verspannungen sowie Schulter-, Nacken- und Rückenbeschwerden.",
  },
  {
    title: "Rücken- & Schultermassage",
    duration: "30 / 60 Min.",
    price: "35 € / 65 €",
    description:
      "Gezielte Behandlung zur Lockerung der Rücken- und Schultermuskulatur.",
  },
  {
    title: "Bali Fußmassage",
    duration: "30 / 60 Min.",
    price: "35 € / 65 €",
    description:
      "Fußmassage mit Elementen der Reflexzonenmassage für ganzheitliches Wohlbefinden.",
  },
  {
    title: "Bali Gesichtsmassage",
    duration: "30 / 60 Min.",
    price: "35 € / 65 €",
    description:
      "Sanfte Gesichtsmassage zur Entspannung der Gesichtsmuskulatur und Pflege der Haut.",
  },
  {
    title: "Bali Kopfmassage",
    duration: "30 / 60 Min.",
    price: "35 € / 65 €",
    description:
      "Entspannung für Kopf, Nacken und Schultern – ideal gegen Stress und Anspannung.",
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="bg-[#F8F6F2] py-24">
      <Container>
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#C9A56A]">
            Unsere Behandlungen
          </p>

          <h2 className="text-4xl font-semibold md:text-5xl">
            Balinesische Massagen
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Lassen Sie den Alltag hinter sich und genießen Sie authentische
            balinesische Massagen für Körper und Geist.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex flex-col rounded-3xl border border-[#ECE6DD] bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-[#F3EEE5] px-3 py-1 text-sm font-medium text-[#8B6A3E]">
                  {service.duration}
                </span>

                <span className="text-xl font-bold text-[#C9A56A]">
                  {service.price}
                </span>
              </div>

              <h3 className="mb-4 text-2xl font-semibold">
                {service.title}
              </h3>

              <p className="mb-8 flex-1 leading-7 text-gray-600">
                {service.description}
              </p>

              <a
                href="https://wa.me/491701234567"
                className="rounded-full bg-[#C9A56A] py-3 text-center font-medium text-white transition hover:bg-[#B89357]"
              >
                Termin anfragen
              </a>
            </article>
          ))}
        </div>

        <div className="mt-20 rounded-3xl bg-white p-10 shadow-sm">
          <h3 className="mb-8 text-center text-3xl font-semibold">
            Massage-Pakete
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border p-6">
              <h4 className="text-xl font-semibold">Paket A – 85 €</h4>
              <p className="mt-2 text-gray-600">
                Traditionelle Bali Massage + Bali Fußmassage (90 Min.)
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h4 className="text-xl font-semibold">Paket B – 85 €</h4>
              <p className="mt-2 text-gray-600">
                Bali Aromatherapie Massage + Bali Kopfmassage (90 Min.)
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h4 className="text-xl font-semibold">Paket C – 100 €</h4>
              <p className="mt-2 text-gray-600">
                Bali Hot Stone Massage + Bali Gesichtsmassage (90 Min.)
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h4 className="text-xl font-semibold">Paket D – 85 €</h4>
              <p className="mt-2 text-gray-600">
                Anti-Stress Massage + Bali Fußmassage (90 Min.)
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}