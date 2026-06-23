import Container from "@/components/ui/Container";

export const metadata = {
  title: "Impressum | Sri Bali Spa Halle",
  description: "Impressum des Sri Bali Spa Halle",
};

export default function ImpressumPage() {
  return (
    <main className="bg-[#F8F6F2] py-24">
      <Container className="max-w-4xl">

        <div className="rounded-3xl bg-white p-10 shadow-lg">

          <h1 className="mb-10 text-5xl font-semibold">
            Impressum
          </h1>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold">
              Angaben gemäß § 5 DDG
            </h2>

            <p className="leading-8">
              <strong>Sri Bali Spa Halle</strong>
              <br />
              Inhaberin: Kadek Sri Purwasari
              <br />
              Merseburger Straße 106
              <br />
              06110 Halle (Saale)
              <br />
              Deutschland
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold">
              Kontakt
            </h2>

            <p className="leading-8">
              Telefon:
              <br />
              +49 157 35800891
            </p>

            <p className="leading-8 mt-4">
              E-Mail:
              <br />
              info@balimassagehalle.de
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold">
              Unternehmensform
            </h2>

            <p>
              Einzelunternehmen
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold">
              Umsatzsteuer
            </h2>

            <p>
              Gemäß § 19 UStG wird keine Umsatzsteuer ausgewiesen.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>

            <p>
              Kadek Sri Purwasari
              <br />
              Merseburger Straße 106
              <br />
              06110 Halle (Saale)
            </p>
          </section>

        </div>

      </Container>
    </main>
  );
}