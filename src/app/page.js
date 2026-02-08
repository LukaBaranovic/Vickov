import Hero from "../components/Hero";
import ServicesCarousel from "../components/ServicesCarousel";
import GallerySection from "../components/GallerySection";
import Features from "../components/Features";
import CTASection from "../components/CTASection";

export default function Home() {
  return (
    <>
      {/* 1. HERO SEKCIJA (Slike i glavni naslov) */}
      <Hero />

      {/* 2. O NAMA SEKCIJA - SEO OPTIMIZIRANO */}
      <section className="py-20 bg-white border-b border-gray-100" id="o-nama">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          {/* SEO NASLOV: Sadrži ključne riječi 'najam pagoda', 'event oprema', 'Dalmacija' */}
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Specijalizirani najam pagoda i event opreme u Dalmaciji
          </h2>

          <div className="text-lg text-gray-600 leading-relaxed space-y-6">
            <p>
              {/* SEO TEKST: Dodani gradovi (Trogir, Makarska, Otoci...) */}
              Tražite pouzdanog partnera za organizaciju događaja?
              Specijalizirani smo za
              <strong> najam vrhunskih pagoda i prateće opreme</strong> na
              području Splita, Zadra, Šibenika, Dubrovnika, Trogira, Makarske te
              na otocima (Brač, Hvar, Vis). Bilo da organizirate romantično
              vjenčanje na otvorenom, privatnu proslavu ili poslovni event, naša
              misija je osigurati da vaš prostor izgleda besprijekorno.
            </p>

            <p>
              {/* SEO TEKST: Nabrojani konkretni proizvodi (stolovi, stolice, podnice...) */}
              Više od samog krova nad glavom, nudimo{" "}
              <strong>potpuno opremanje prostora</strong>. Naš inventar
              uključuje <strong>pravokutne banket stolove</strong> i
              <strong> visoke barske stolove</strong> s elegantnim navlakama,
              pivske setove za opuštena druženja, čvrste podnice i tapisone za
              stabilnost, te ambijentalnu rasvjetu. Također brinemo o ugodnosti
              vaših gostiju uz naše električne grijalice, suncobrane i rashladne
              uređaje.
            </p>
          </div>
        </div>
      </section>

      {/* 3. PONUDA (Vrtuljak usluga) - SEO NASLOVI */}
      <section className="py-20 bg-white border-b border-gray-100" id="ponuda">
        <div className="text-center mb-16">
          <p className="text-yellow-600 font-bold tracking-widest uppercase text-sm mb-3 font-serif">
            Kompletan asortiman
          </p>
          {/* SEO NASLOV: 'Opreme i Inventara' je bolje nego samo 'Usluga' */}
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900">
            Ponuda Opreme i Inventara
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded"></div>
        </div>
        <ServicesCarousel />
      </section>

      {/* 4. ZNAČAJKE (Zašto mi?) */}
      <Features />

      {/* 5. GALERIJA SLIKA */}
      <GallerySection />

      {/* 6. ZADNJI POZIV NA AKCIJU (Kontakt) */}
      <CTASection />
    </>
  );
}
