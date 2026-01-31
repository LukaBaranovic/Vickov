"use client"; // OBAVEZNO: Ovo mora biti Client Component jer koristimo useState (interakcija)

import { useState } from "react";
import { galleryPhotos } from "../data/galleryPhotos";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

export default function GallerySection() {
  // Stanje: Je li lightbox otvoren i na kojem indeksu slike smo
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section className="py-20 bg-white" id="galerija">
      <div className="container mx-auto px-4">
        {/* Naslov Galerije */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Galerija Fotografija
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Pogledajte djelić atmosfere s događaja koje smo opremili.
          </p>
        </div>

        {/* GRID SLIKA (Kvadratići) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryPhotos.map((photo, i) => (
            <div
              key={i}
              className="aspect-square cursor-pointer overflow-hidden rounded-lg shadow-sm hover:shadow-md transition group"
              onClick={() => {
                setIndex(i); // Postavi indeks kliknute slike
                setOpen(true); // Otvori lightbox
              }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>

        {/* LIGHTBOX KOMPONENTA (Prozorčić) */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={galleryPhotos} // Šaljemo mu naše podatke
          plugins={[Captions]} // Aktiviramo plugin za opise
          captions={{ showToggle: true, descriptionTextAlign: "center" }}
        />
      </div>
    </section>
  );
}
