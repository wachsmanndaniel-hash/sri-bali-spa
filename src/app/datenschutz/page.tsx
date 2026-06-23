import Container from "@/components/ui/Container";

export const metadata = {
  title: "Datenschutzerklärung | Sri Bali Spa Halle",
  description: "Datenschutzerklärung des Sri Bali Spa Halle",
};

export default function DatenschutzPage() {
  return (
    <main className="bg-[#F8F6F2] py-24">
      <Container className="max-w-4xl">
        <div className="rounded-3xl bg-white p-10 shadow-lg">
          <h1 className="mb-10 text-5xl font-semibold">
            Datenschutzerklärung
          </h1>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold">
              1. Verantwortlicher
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
              <br />
              E-Mail: info@balimassagehalle.de
              <br />
              Telefon: +49 157 35800891
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold">
              2. Hosting
            </h2>

            <p className="leading-8">
              Diese Website wird bei der IONOS SE gehostet.
              Beim Aufruf dieser Website werden durch den Hosting-Anbieter
              automatisch Informationen in sogenannten Server-Logfiles
              gespeichert. Dies sind insbesondere:
            </p>

            <ul className="mt-4 list-disc pl-6 leading-8">
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit der Anfrage</li>
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer-URL</li>
              <li>Hostname des zugreifenden Rechners</li>
            </ul>

            <p className="mt-4 leading-8">
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
              DSGVO zur Gewährleistung eines sicheren und störungsfreien
              Betriebs der Website.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold">
              3. Google Maps
            </h2>

            <p className="leading-8">
              Auf dieser Website ist Google Maps eingebunden, um unseren
              Standort darzustellen und die Anfahrt zu erleichtern.
            </p>

            <p className="mt-4 leading-8">
              Anbieter ist:
              <br />
              Google Ireland Limited
              <br />
              Gordon House
              <br />
              Barrow Street
              <br />
              Dublin 4
              <br />
              Irland
            </p>

            <p className="mt-4 leading-8">
              Beim Laden von Google Maps können personenbezogene Daten,
              insbesondere die IP-Adresse, an Google übermittelt werden.
              Die Nutzung erfolgt im Interesse einer ansprechenden Darstellung
              unseres Online-Angebots und einer einfachen Auffindbarkeit unseres
              Standortes gemäß Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold">
              4. WhatsApp
            </h2>

            <p className="leading-8">
              Über die auf dieser Website bereitgestellten WhatsApp-Links können
              Sie direkt mit uns Kontakt aufnehmen.
            </p>

            <p className="mt-4 leading-8">
              Anbieter ist:
              <br />
              WhatsApp Ireland Limited
              <br />
              4 Grand Canal Square
              <br />
              Grand Canal Harbour
              <br />
              Dublin 2
              <br />
              Irland
            </p>

            <p className="mt-4 leading-8">
              Bei Nutzung von WhatsApp gelten die Datenschutzbestimmungen von
              WhatsApp. Die Nutzung erfolgt freiwillig.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold">
              5. Instagram
            </h2>

            <p className="leading-8">
              Auf dieser Website befinden sich Verlinkungen zu unserem
              Instagram-Profil.
            </p>

            <p className="mt-4 leading-8">
              Anbieter ist:
              <br />
              Meta Platforms Ireland Limited
              <br />
              Merrion Road
              <br />
              Dublin 4
              <br />
              D04 X2K5
              <br />
              Irland
            </p>

            <p className="mt-4 leading-8">
              Erst durch Anklicken des Links werden Daten an Instagram
              übertragen.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold">
              6. Cookies und Tracking
            </h2>

            <p className="leading-8">
              Diese Website verwendet derzeit keine Analyse- oder
              Tracking-Dienste wie Google Analytics.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              7. Rechte betroffener Personen
            </h2>

            <p className="leading-8">
              Sie haben das Recht auf:
            </p>

            <ul className="mt-4 list-disc pl-6 leading-8">
              <li>Auskunft über gespeicherte Daten</li>
              <li>Berichtigung unrichtiger Daten</li>
              <li>Löschung Ihrer Daten</li>
              <li>Einschränkung der Verarbeitung</li>
              <li>Datenübertragbarkeit</li>
              <li>Widerspruch gegen die Verarbeitung</li>
            </ul>

            <p className="mt-4 leading-8">
              Zudem haben Sie das Recht, sich bei einer zuständigen
              Datenschutzaufsichtsbehörde zu beschweren.
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}