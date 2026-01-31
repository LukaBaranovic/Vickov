import { inventory } from "../data/inventory"; // OVO TI MOŽDA VIŠE NE TREBA AKO KORISTIŠ SAMO CAROUSEL
import GallerySection from "../components/GallerySection";
import ServicesCarousel from "../components/ServicesCarousel";
import Hero from "../components/Hero"; // <--- NOVI IMPORT

export default function Home() {
  return (
    <>
      {/* 1. HERO (Slike i naslov) */}
      <Hero />

      {/* 2. O NAMA */}
      <section className="py-20 bg-white" id="o-nama">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Vaš partner za savršen event u Dalmaciji
          </h2>
          <div className="text-lg text-gray-600 leading-relaxed space-y-6">
            <p>
              Specijalizirani smo za najam vrhunskih pagoda, šatora i prateće
              opreme na području Splita i šire okolice. Bilo da organizirate
              romantično vjenčanje na otvorenom, privatnu proslavu, krštenje ili
              korporativni event, naša misija je osigurati da vaš prostor
              izgleda besprijekorno.
            </p>
          </div>
        </div>
      </section>

      {/* 3. PONUDA (Carousel) */}
      <section className="py-12 bg-gray-50" id="ponuda">
        <div className="text-center mb-16">
          <p className="text-yellow-600 text-lg font-serif italic mb-2">
            Što nudimo?
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900">
            Usluga najma
          </h2>
        </div>
        <ServicesCarousel />
      </section>

      {/* 4. GALERIJA */}
      <GallerySection />
    </>
  );
}
