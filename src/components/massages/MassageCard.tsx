"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  title: string;
  image: string;
  description: string;
  price30?: string;
  price60?: string;
  price90?: string;
};

export default function MassageCard({
  title,
  image,
  description,
  price30,
  price60,
  price90,
}: Props) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`${
        flipped
          ? "fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md"
          : "relative"
      }`}
      onClick={() => flipped && setFlipped(false)}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();

          if (!flipped) {
            setFlipped(true);
          }
        }}
        className={`
          cursor-pointer
          [perspective:2200px]
          transition-all
          duration-700
          ease-out
          ${flipped ? "h-[760px] w-[560px]" : "h-[520px] w-full"}
        `}
      >
        <div
          className={`
            relative
            h-full
            w-full
            rounded-[32px]
            transition-all
            duration-700
            [transform-style:preserve-3d]
            ${
              flipped
                ? "scale-100 [transform:rotateY(180deg)] shadow-[0_45px_120px_rgba(0,0,0,.65)]"
                : ""
            }
          `}
        >
          {/* Vorderseite */}

          <div className="absolute inset-0 overflow-hidden rounded-[32px] bg-[#2b241d] shadow-2xl [backface-visibility:hidden]">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#2b241d] via-[#2b241dcc] to-transparent px-12 pt-10 pb-12 text-center">
              <h2 className="mx-auto max-w-[90%] text-2xl font-light leading-tight text-white">
                {title}
              </h2>

              <div className="mx-auto mt-5 h-px w-24 bg-[#C9A56A]" />

              <p className="mt-5 text-sm uppercase tracking-[0.18em] text-[#C9A56A]">
                Mehr erfahren →
              </p>
            </div>
          </div>

          {/* Rückseite */}

          <div className="absolute inset-0 rounded-[32px] border border-[#C9A56A]/30 bg-[#241d18]/95 p-12 text-white shadow-2xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setFlipped(false);
              }}
              className="absolute right-6 top-6 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-[#C9A56A]/40 bg-black/50 text-2xl text-[#C9A56A] transition hover:bg-[#C9A56A] hover:text-black"
            >
              ×
            </button>

            <div className="grid h-full grid-rows-[120px_1fr_auto_140px]">
              {/* Titel */}
              <div className="flex items-end justify-center">
                <h2 className="max-w-[80%] text-center text-2xl font-light leading-tight text-[#C9A56A]">
                  {title}
                </h2>
              </div>

              {/* Beschreibung */}
              <div className="flex items-start justify-center px-6 pt-8">
                <p className="text-center text-base leading-8 text-gray-300">
                  {description}
                </p>
              </div>

              {/* Preise */}
              <div className="pt-8 pb-8 text-center">

                <div className="space-y-3 text-lg">
                  {price30 && (
                    <div>
                      30 Minuten ·{" "}
                      <span className="text-[#C9A56A]">{price30}</span>
                    </div>
                  )}

                  {price60 && (
                    <div>
                      60 Minuten ·{" "}
                      <span className="text-[#C9A56A]">{price60}</span>
                    </div>
                  )}

                  {price90 && (
                    <div>
                      90 Minuten ·{" "}
                      <span className="text-[#C9A56A]">{price90}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col justify-end gap-4">
                <a
                  href="https://wa.me/4915735800891"
                  onClick={(e) => e.stopPropagation()}
                  className="flex h-14 items-center justify-center rounded-full bg-[#C9A56A] px-8 text-lg font-medium transition hover:bg-[#B89357]"
                >
                  WhatsApp schreiben
                </a>

                <a
                  href="tel:+4915735800891"
                  onClick={(e) => e.stopPropagation()}
                  className="flex h-14 items-center justify-center rounded-full border border-[#C9A56A] px-8 text-lg transition hover:bg-[#C9A56A] hover:text-black"
                >
                  Jetzt anrufen
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
