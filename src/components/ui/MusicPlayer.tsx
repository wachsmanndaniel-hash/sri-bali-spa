"use client";

import { useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="/audio/bali-relax.mp3"
      />

      <button
        onClick={toggleMusic}
        className="
          fixed
          bottom-24
          right-6
          z-[999]
          flex
          items-center
          gap-3
          rounded-full
          border
          border-[#C9A56A]/40
          bg-black/50
          px-5
          py-3
          text-[#E5C78A]
          backdrop-blur-xl
          transition-all
          hover:scale-105
          shadow-[0_0_20px_rgba(201,165,106,0.45),0_0_50px_rgba(201,165,106,0.2)]
        "
      >
        {playing ? "❚❚ Musik aus" : "🎵 Bali Atmosphäre"}
      </button>
    </>
  );
}