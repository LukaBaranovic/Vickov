"use client";

import { useModal } from "../context/ModalContext";

export default function Hero() {
  const { openModal } = useModal();

  return (
    <section className="relative h-[90vh] flex items-center justify-center text-center text-white overflow-hidden">
      {/* 1. POZADINSKA SLIKA */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed"
        style={{
          backgroundImage: "url('/images/hero/pozadinaVickov4.jpg')",
        }}
      ></div>

      {/* 2. CRNI FILTER (Overlay) */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* 3. TEKST I GUMBI */}
      <div className="relative z-20 px-4 max-w-4xl mx-auto animate-fade-in-up">
        <p className="text-white font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
          Split • Zadar • Šibenik • Dubrovnik
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif leading-tight">
          Najam opreme za <br />
          <span className="text-amber-400 italic">savršene trenutke</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-100 mb-10 font-light max-w-2xl mx-auto">
          Pretvorite svoju proslavu u nezaboravan događaj uz naše vrhunske
          pagode, šatore i prateću opremu.
        </p>

        {/* GLAVNI GUMB - NOVA BOJA (blue-500) */}
        <button
          onClick={openModal}
          className="inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-xl text-lg border border-blue-400/30 backdrop-blur-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
          Zatraži ponudu
        </button>
      </div>
    </section>
  );
}
