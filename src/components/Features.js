import React from "react";

export default function Features() {
  const features = [
    {
      title: "Logistika i prijevoz",
      description:
        "Zaboravite na brigu oko prijevoza. Bilo da se nalazite u Splitu, Zadru ili na otocima, naš tim osigurava točnu i sigurnu dostavu sve opreme na vašu lokaciju. Vi se posvetite gostima, a logistiku prepustite nama.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
          />
        </svg>
      ),
    },
    {
      title: "Stručna montaža",
      description:
        "Sigurnost vaših gostiju nam je prioritet. Naš iskusni tim obavlja brzu i profesionalnu montažu i demontažu, pazeći na statiku i učvršćivanje pagoda, bez obzira radi li se o travnatoj površini, betonu ili pijesku.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
          />
        </svg>
      ),
    },
    {
      title: "Besprijekorna oprema",
      description:
        "Estetika je ključ svakog eventa. Naša oprema prolazi detaljno čišćenje i provjeru nakon svakog najma. Garantiramo vam snježno bijele pagode, uredne navlake i opremu koja izgleda kao nova.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Naslov sekcije */}
        <div className="text-center mb-16">
          {/* PROMJENA: Ovdje smo stavili text-yellow-600 umjesto plave, da paše sa 'Što nudimo' */}
          <p className="text-yellow-600 font-bold tracking-widest uppercase text-sm mb-3 font-serif">
            Naš proces rada
          </p>

          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
            Zašto odabrati <span className="text-blue-600 italic">nas?</span>
          </h2>
          {/* Dodana plava crta i ovdje radi konzistentnosti */}
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
        </div>

        {/* Grid s 3 stupca */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center group">
              {/* Ikona u krugu - ostaje plava jer je to 'brand' boja */}
              <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-sm">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4 font-serif">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
