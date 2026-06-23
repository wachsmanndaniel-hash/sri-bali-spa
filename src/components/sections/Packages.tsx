const packages = [
  {
    name: "Paket A",
    text: "Traditionelle Bali Massage + Fuß-Massage",
    duration: "90 Minuten",
    price: "85 €",
  },
  {
    name: "Paket B",
    text: "Aromatherapie Massage + Kopf-Massage",
    duration: "90 Minuten",
    price: "85 €",
  },
  {
    name: "Paket C",
    text: "Hot Stone Massage + Gesichts-Massage",
    duration: "90 Minuten",
    price: "100 €",
  },
  {
    name: "Paket D",
    text: "Anti-Stress Massage + Fuß-Massage",
    duration: "90 Minuten",
    price: "85 €",
  },
];

export default function Packages() {
  return (
    <section className="mt-56 pb-40">

      <div className="text-center">

        <p className="uppercase tracking-[0.4em] text-[#C9A56A]">
          Besonders beliebt
        </p>

        <h2 className="mt-5 text-5xl font-light text-white">
          Wellness-Pakete
        </h2>

      </div>

      <div className="mt-20 grid gap-10 md:grid-cols-2">

        {packages.map((item) => (
          <div
            key={item.name}
            className="rounded-[32px] border border-[#C9A56A]/40 bg-white/5 p-10 backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:border-[#C9A56A] hover:bg-white/10"
          >
            <p className="text-[#C9A56A] uppercase tracking-[0.3em]">
              {item.name}
            </p>

            <h3 className="mt-5 text-3xl font-light text-white">
              {item.text}
            </h3>

            <div className="my-8 h-px bg-[#C9A56A]/30" />

            <div className="flex justify-between text-lg text-white">
              <span>{item.duration}</span>
              <span>{item.price}</span>
            </div>

            <a
              href="https://wa.me/4915735800891"
              className="mt-10 block rounded-full bg-[#C9A56A] py-4 text-center font-medium text-white transition hover:bg-[#B89357]"
            >
              Jetzt anfragen
            </a>
          </div>
        ))}

      </div>

    </section>
  );
}