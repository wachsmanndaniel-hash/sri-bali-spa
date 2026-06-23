import Container from "@/components/ui/Container";

export default function Contact() {
  return (
    <section id="kontakt" className="bg-[#2B2B2B] py-24 text-white">
      <Container>
        <div className="mx-auto max-w-6xl">

          <div className="mb-16 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#C9A56A]">
              Kontakt
            </p>

            <h2 className="text-4xl font-semibold md:text-5xl">
              Termin vereinbaren
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
              Vereinbaren Sie Ihren Termin telefonisch oder bequem per WhatsApp.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">

            <div className="rounded-3xl bg-[#333333] p-10">

              <h3 className="mb-8 text-3xl font-semibold">
                Sri Bali Spa Halle
              </h3>

              <div className="space-y-8">

                <div>
                  <div className="mb-2 text-sm uppercase tracking-widest text-[#C9A56A]">
                    Telefon
                  </div>

                  <a
                    href="tel:+4915735800891"
                    className="text-xl hover:text-[#C9A56A]"
                  >
                    +49 157 35800891
                  </a>
                </div>

                <div>
                  <div className="mb-2 text-sm uppercase tracking-widest text-[#C9A56A]">
                    WhatsApp
                  </div>

                  <a
                    href="https://wa.me/4915735800891"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl hover:text-[#C9A56A]"
                  >
                    Direkt Nachricht senden
                  </a>
                </div>

                <div>
                  <div className="mb-2 text-sm uppercase tracking-widest text-[#C9A56A]">
                    Adresse
                  </div>

                  <p className="text-lg leading-8">
                    Merseburger Straße 106
                    <br />
                    06110 Halle (Saale)
                  </p>
                </div>

                <div>
                  <div className="mb-2 text-sm uppercase tracking-widest text-[#C9A56A]">
                    Öffnungszeiten
                  </div>

                  <p className="text-lg leading-8">
                    Montag – Samstag
                    <br />
                    09:00 – 18:00 Uhr
                  </p>
                </div>

                <div>
                  <div className="mb-2 text-sm uppercase tracking-widest text-[#C9A56A]">
                    Instagram
                  </div>

                  <a
                    href="https://www.instagram.com/sribalispa.de?igsh=OHp5NjJka2R1NW9q&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:text-[#C9A56A]"
                  >
                    @sribalispa.de
                  </a>
                </div>

              </div>

            </div>

            <div className="overflow-hidden rounded-3xl shadow-xl">

              <iframe
                src="https://www.google.com/maps?q=Merseburger+Straße+106,+06110+Halle+(Saale)&output=embed"
                className="h-full min-h-[520px] w-full border-0"
                loading="lazy"
                allowFullScreen
              />

            </div>

          </div>

          <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:justify-center">

            <a
              href="https://wa.me/4915735800891"
              className="rounded-full bg-[#C9A56A] px-10 py-4 text-center text-lg font-semibold text-[#2B2B2B] transition hover:bg-[#d7b57a]"
            >
              💬 WhatsApp schreiben
            </a>

            <a
              href="tel:+4915735800891"
              className="rounded-full border-2 border-white px-10 py-4 text-center text-lg font-semibold transition hover:bg-white hover:text-[#2B2B2B]"
            >
              📞 Jetzt anrufen
            </a>

          </div>

        </div>
      </Container>
    </section>
  );
}