"use client"; // OBAVEZNO jer koristimo interakciju (klik)

import { useState } from "react";
import { galleryPhotos } from "../data/galleryPhotos";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

export default function GallerySection() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    // Pozadina je bijela (bg-white) da paše uz ostatak novog dizajna
    <section className="py-20 bg-white" id="galerija">
      <div className="container mx-auto px-4">
        {/* NOVI DIZAJN NASLOVA (Zlatno + Serif + Plava crta) */}
        <div className="text-center mb-16">
          <p className="text-yellow-600 font-bold tracking-widest uppercase text-sm mb-3 font-serif">
            Inspiracija
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900">
            Galerija Fotografija
          </h2>
          {/* Plava crta (blue-500) */}
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded"></div>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Pogledajte djelić atmosfere s događaja koje smo opremili.
          </p>
        </div>

        {/* GRID SLIKA (Funkcionalan - otvara lightbox na klik) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryPhotos.map((photo, i) => (
            <div
              key={i}
              className="aspect-square cursor-pointer overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition group relative"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
              />

              {/* Opcionalno: Tamni overlay na hover da se zna da je klikabilno */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* LIGHTBOX KOMPONENTA */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={galleryPhotos}
          plugins={[Captions]}
          captions={{ showToggle: true, descriptionTextAlign: "center" }}
        />
      </div>
    </section>
  );
}
