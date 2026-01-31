import Hero from "../components/Hero";
import ServicesCarousel from "../components/ServicesCarousel";
import GallerySection from "../components/GallerySection";

export default function Home() {
  return (
    <>
      {/* 1. HERO SEKCIJA (Velika slika i naslov) */}
      <Hero />

      {/* 2. O NAMA SEKCIJA (Ažurirani tekst s ponudom) */}
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

            <p>
              Više od samog krova nad glavom, nudimo{" "}
              <strong>potpuno opremanje prostora</strong>. Naša ponuda uključuje
              sve vrste stolova s elegantnim navlakama, pivske setove za
              opuštena druženja, čvrste podnice i tapisone za stabilnost, te
              ambijentalnu rasvjetu za čarobnu atmosferu. Također brinemo o
              ugodnosti vaših gostiju uz naše grijalice i rashladne uređaje, bez
              obzira na vremenske uvjete.
            </p>
          </div>
        </div>
      </section>

      {/* 3. PONUDA (Vrtuljak usluga) */}
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
