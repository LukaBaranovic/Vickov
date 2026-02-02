import Hero from "../components/Hero";
import ServicesCarousel from "../components/ServicesCarousel";
import GallerySection from "../components/GallerySection";
import Features from "../components/Features";
import CTASection from "../components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="py-20 bg-white border-b border-gray-100" id="o-nama">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Vaš partner za savršen event u Dalmaciji
          </h2>

          <div className="text-lg text-gray-600 leading-relaxed space-y-6">
            <p>
              {/* PROMJENA: "vrhunskih pagoda i prateće opreme" (bez šatora) */}
              Specijalizirani smo za najam vrhunskih pagoda i prateće opreme na
              području Splita i šire okolice. Bilo da organizirate romantično
              vjenčanje na otvorenom, privatnu proslavu, krštenje ili
              korporativni event, naša misija je osigurati da vaš prostor
              izgleda besprijekorno.
            </p>

            <p>
              Više od samog krova nad glavom, nudimo{" "}
              <strong>potpuno opremanje prostora</strong>. Naša ponuda uključuje
              pravokutne banket stolove s elegantnim navlakama, pivske setove za
              opuštena druženja, čvrste podnice i tapisone za stabilnost, te
              ambijentalnu rasvjetu za čarobnu atmosferu. Također brinemo o
              ugodnosti vaših gostiju uz naše grijalice i rashladne uređaje, bez
              obzira na vremenske uvjete.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-b border-gray-100" id="ponuda">
        <div className="text-center mb-16">
          <p className="text-yellow-600 font-bold tracking-widest uppercase text-sm mb-3 font-serif">
            Što nudimo?
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900">
            Usluga najma
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded"></div>
        </div>
        <ServicesCarousel />
      </section>

      <Features />

      <GallerySection />

      <CTASection />
    </>
  );
}
