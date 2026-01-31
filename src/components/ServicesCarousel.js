"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { inventory } from "../data/inventory";

export default function ServicesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
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

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    // PROMJENA 1: max-w-5xl (bilo je 7xl) - ovo sužava cijeli blok
    <div className="relative max-w-5xl mx-auto px-4">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {inventory.map((item) => (
            <div
              key={item.id}
              className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4 min-w-0"
            >
              <div className="h-full bg-white p-2 flex flex-col items-center text-center select-none group cursor-grab active:cursor-grabbing">
                {/* Slika - smanjio sam marginu ispod (mb-4 umjesto mb-6) */}
                <div className="p-1 border border-gray-100 bg-white shadow-sm mb-4 w-full">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                    />
                  </div>
                </div>

                {/* Naslov - smanjen na text-xl (bilo text-2xl) */}
                <h3 className="text-xl font-serif text-gray-900 mb-2 font-medium">
                  {item.name}
                </h3>

                {/* Opis - smanjen prored (leading-normal) da tekst bude gušći */}
                <p className="text-gray-500 text-sm leading-normal font-light px-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigacija */}
      <div className="flex justify-center gap-2 mt-6">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`transition-all duration-300 rounded-full border border-gray-400 ${
              index === selectedIndex
                ? "w-6 h-2 bg-gray-800 border-gray-800" // Malo manje točkice
                : "w-2 h-2 bg-transparent hover:bg-gray-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
