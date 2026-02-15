"use client";

import { useModal } from "../context/ModalContext";

export default function Hero() {
  const { openModal } = useModal();

  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* 1. POZADINSKA SLIKA */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed"
        style={{
          backgroundImage: "url('/images/hero/pozadinaVickov5.jpg')",
        }}
      ></div>

      {/* 2. CRNI FILTER (Overlay) */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>

      {/* 3. TEKST I GUMBI */}
      <div className="relative z-20 px-4 max-w-5xl mx-auto animate-fade-in-up">
        {/* SEO LOKACIJE - Gornja traka */}
        <p className="text-white font-bold tracking-widest uppercase mb-4 text-xs md:text-base leading-relaxed">
          Split • Zadar • Šibenik • Dubrovnik • Trogir • Makarska • Otoci
        </p>

        {/* GLAVNI NASLOV - Dodano "catering opreme" jer se to puno traži */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif leading-tight">
          Najam pagoda, šatora i catering opreme
        </h1>

        {/* OPIS - "Visoki stolovi" i "catering inventar" */}
        <p className="text-xl md:text-2xl text-gray-100 mb-10 font-light max-w-3xl mx-auto">
          Pretvorite svoju proslavu u nezaboravan događaj. Vrhunske pagode,
          šatori, visoki stolovi i kompletan catering inventar za vjenčanja u
          Splitu, Zadru, Šibeniku, Trogiru, Makarskoj, Omišu, Kaštelima te na
          otocima (Brač, Hvar, Vis).
        </p>

        {/* GUMB ZA AKCIJU */}
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
