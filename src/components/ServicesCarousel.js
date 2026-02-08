"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { inventory } from "../data/inventory";

export default function ServicesCarousel() {
  // --- STANJE ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  // --- GLAVNI KARUSEL (MALI) ---
  const [mainEmblaRef, mainEmblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      breakpoints: {
        "(min-width: 1024px)": { slidesToScroll: 3 },
        "(min-width: 768px)": { slidesToScroll: 2 },
      },
    },
    [
      Autoplay({
        delay: 4000,
        stopOnMouseEnter: true,
        stopOnInteraction: false,
      }),
    ]
  );

  // --- MODAL KARUSEL (VELIKI) ---
  const [modalEmblaRef, modalEmblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    startIndex: startIndex,
  });

  // Navigacija (točkice za glavni)
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  // --- FUNKCIJE ZA NAVIGACIJU ---
  const scrollPrev = useCallback(
    (e) => {
      if (e) e.stopPropagation();
      if (modalEmblaApi) modalEmblaApi.scrollPrev();
    },
    [modalEmblaApi]
  );

  const scrollNext = useCallback(
    (e) => {
      if (e) e.stopPropagation();
      if (modalEmblaApi) modalEmblaApi.scrollNext();
    },
    [modalEmblaApi]
  );

  // --- TIPKOVNICA (Lijevo/Desno/Esc) ---
  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") scrollPrev();
      if (e.key === "ArrowRight") scrollNext();
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, scrollPrev, scrollNext]);

  // Inicijalizacija glavnog karusela
  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!mainEmblaApi) return;
    onInit(mainEmblaApi);
    onSelect(mainEmblaApi);
    mainEmblaApi.on("select", onSelect);
  }, [mainEmblaApi, onInit, onSelect]);

  const scrollTo = useCallback(
    (index) => mainEmblaApi && mainEmblaApi.scrollTo(index),
    [mainEmblaApi]
  );

  // Otvaranje/Zatvaranje
  const openModal = (index) => {
    setStartIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      {/* --- 1. GLAVNI PRIKAZ NA STRANICI --- */}
      <div className="relative max-w-5xl mx-auto px-4">
        <div className="overflow-hidden" ref={mainEmblaRef}>
          <div className="flex -ml-4">
            {inventory.map((item, index) => (
              <div
                key={item.id}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4 min-w-0"
              >
                <div
                  onClick={() => openModal(index)}
                  className="h-full bg-white p-2 flex flex-col items-center text-center select-none group cursor-pointer hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-200 rounded-lg"
                >
                  <div className="p-1 border border-gray-100 bg-white shadow-sm mb-4 w-full">
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img
                        src={item.image}
                        alt={item.alt || item.name}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                      />

                      {/* OVDJE SAM IZBRISAO DIO KODA KOJI JE PRIKAZIVAO TEKST "POVEĆAJ" */}
                    </div>
                  </div>

                  <h3 className="text-xl font-serif text-gray-900 mb-2 font-medium">
                    {item.name}
                  </h3>

                  {/* PLAVA CRTA (Mala kartica) */}
                  <div className="w-12 h-1 bg-blue-500 mx-auto mb-3 rounded"></div>

                  <p className="text-gray-500 text-sm leading-normal font-light px-1 line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigacija točkice */}
        <div className="flex justify-center gap-2 mt-6">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`transition-all duration-300 rounded-full border border-gray-400 ${
                index === selectedIndex
                  ? "w-6 h-2 bg-gray-800 border-gray-800"
                  : "w-2 h-2 bg-transparent hover:bg-gray-200"
              }`}
            />
          ))}
        </div>
      </div>

      {/* --- 2. POPUP MODAL --- */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center animate-fade-in"
          onClick={closeModal}
        >
          {/* Gumb X */}
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 z-20 text-white hover:text-gray-300 p-2 bg-white/10 rounded-full transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* LIJEVA STRJELICA */}
          <button
            onClick={scrollPrev}
            className="absolute left-2 md:left-8 z-20 text-white hover:text-blue-400 p-3 bg-black/20 hover:bg-black/50 rounded-full transition-all hidden md:block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* DESNA STRJELICA */}
          <button
            onClick={scrollNext}
            className="absolute right-2 md:right-8 z-20 text-white hover:text-blue-400 p-3 bg-black/20 hover:bg-black/50 rounded-full transition-all hidden md:block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>

          <div
            className="w-full max-w-5xl px-4 overflow-hidden"
            ref={modalEmblaRef}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex touch-pan-y items-center h-full">
              {inventory.map((item) => (
                <div
                  key={item.id}
                  className="flex-[0_0_100%] min-w-0 px-4 flex justify-center items-center"
                >
                  {/* --- DIZAJN KARTICE (VELIKI) - FIKSIRANA VISINA --- */}
                  <div
                    // OVDJE JE PROMJENA: Dodan 'h-[500px] md:h-[600px]' da fiksira veličinu
                    // Dodan 'justify-center' da centrira sadržaj vertikalno
                    className="bg-white p-6 md:p-8 rounded-xl w-full max-w-xl mx-auto flex flex-col items-center text-center relative shadow-2xl h-[500px] md:h-[600px] justify-center"
                  >
                    {/* Okvir oko slike - flex-shrink-0 sprečava da se slika spljošti */}
                    <div className="p-2 border border-gray-100 bg-white shadow-sm mb-6 w-full rounded flex-shrink-0">
                      <div className="aspect-[4/3] overflow-hidden relative">
                        <img
                          src={item.image}
                          alt={item.alt || item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-serif text-gray-900 mb-4 font-medium flex-shrink-0">
                      {item.name}
                    </h3>

                    {/* PLAVA CRTA (Velika kartica) */}
                    <div className="w-16 h-1 bg-blue-500 mx-auto mb-4 rounded flex-shrink-0"></div>

                    {/* Opis - overflow-y-auto omogućuje skrolanje teksta ako je predug, bez mijenjanja veličine kartice */}
                    <div className="overflow-y-auto px-2 custom-scrollbar">
                      <p className="text-gray-600 text-base md:text-lg leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
