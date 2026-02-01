import Hero from "../components/Hero";
import ServicesCarousel from "../components/ServicesCarousel";
import GallerySection from "../components/GallerySection";
import Features from "../components/Features";

export default function Home() {
  return (
    <>
      {/* 1. HERO SEKCIJA */}
      <Hero />

      {/* 2. O NAMA SEKCIJA */}
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
          {/* PROMJENA: Sada je font isti kao kod 'Naš proces rada' (Velika slova, razmaknuto) */}
          <p className="text-yellow-600 font-bold tracking-widest uppercase text-sm mb-3 font-serif">
            Što nudimo?
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900">
            Usluga najma
          </h2>

          {/* PROMJENA: Nova, blaža plava boja (blue-500) */}
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded"></div>
        </div>
        <ServicesCarousel />
      </section>

      {/* 4. ZNAČAJKE */}
      <Features />

      {/* 5. GALERIJA */}
      <GallerySection />
    </>
  );
}
