import Container from "@/components/ui/Container";
import Link from "next/link";

export const metadata = {
  title: "Impressum | Sri Bali Spa Halle",
  description: "Impressum des Sri Bali Spa Halle",
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen px-6 pt-36 pb-32">
      <Container className="max-w-4xl">
        <div className="relative overflow-hidden rounded-[32px] border border-[#C9A56A]/40 bg-black/40 p-10 text-white backdrop-blur-xl shadow-[0_0_25px_rgba(201,165,106,0.35),0_0_70px_rgba(201,165,106,0.15),0_30px_80px_rgba(0,0,0,0.8)] md:p-14">
          
          <div className="absolute left-1/2 top-0 h-8 w-24 -translate-x-1/2 bg-[#E5C78A] opacity-80 blur-xl" />

          <div className="absolute bottom-0 left-0 h-24 w-24 bg-gradient-to-tr from-[#E5C78A]/40 to-transparent blur-lg" />

          <div className="absolute bottom-0 right-0 h-24 w-24 bg-gradient-to-tl from-[#E5C78A]/40 to-transparent blur-lg" />

          <Link
            href="/"
            className="absolute right-6 top-6 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-[#C9A56A]/40 bg-black/50 text-2xl text-[#C9A56A] transition hover:bg-[#C9A56A] hover:text-black"
          >
            ×
          </Link>

          <h1 className="mb-12 text-center text-5xl font-light text-white md:text-6xl">
            Impressum
          </h1>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-light text-[#E5C78A]">
              Angaben gemäß § 5 DDG
            </h2>

            <p className="leading-8 text-gray-300">
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
            <h2 className="mb-4 text-2xl font-light text-[#E5C78A]">
              Kontakt
            </h2>

            <p className="leading-8 text-gray-300">
              Telefon:
              <br />
              +49 157 35800891
            </p>

            <p className="mt-4 leading-8 text-gray-300">
              E-Mail:
              <br />
              info@balimassagehalle.de
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-light text-[#E5C78A]">
              Unternehmensform
            </h2>

            <p className="text-gray-300">
              Einzelunternehmen
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-light text-[#E5C78A]">
              Umsatzsteuer
            </h2>

            <p className="text-gray-300">
              Gemäß § 19 UStG wird keine Umsatzsteuer ausgewiesen.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-[#E5C78A]">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>

            <p className="text-gray-300">
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