"use client";

import { useModal } from "../context/ModalContext";

export default function CTASection() {
  const { openModal } = useModal();

  return (
    // PROMJENA: Pozadina je sada bijela (bg-white), dodali smo tanku gornju crtu (border-t) za odvajanje
    <section className="py-20 bg-white text-center px-4 border-t border-gray-100">
      <div className="container mx-auto max-w-4xl">
        {/* Naslov je sada taman (gray-900) */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-gray-900">
          Spremni za organizaciju događaja?
        </h2>

        {/* Tekst je sada sivi (gray-600) */}
        <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Bilo da planirate vjenčanje, korporativni event ili privatnu zabavu,
          tu smo da vam olakšamo. Javite nam se s povjerenjem i zatražite
          neobvezujuću ponudu.
        </p>

        {/* Gumb je sada PLAV (da se ističe na bijeloj pozadini) */}
        <button
          onClick={openModal}
          className="inline-block bg-blue-500 text-white font-bold py-4 px-12 rounded-full transition-transform hover:scale-105 hover:bg-blue-600 shadow-xl"
        >
          Kontaktirajte nas
        </button>
      </div>
    </section>
  );
}
