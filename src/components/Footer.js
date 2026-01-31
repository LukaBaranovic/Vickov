// src/components/Footer.js
import { contactConfig } from "../data/config";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-auto" id="kontakt">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Kolona 1: O nama kratko */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">
            DALMACIJA<span className="text-blue-400">NAJAM</span>
          </h3>
          <p className="text-sm leading-relaxed">
            Vaš pouzdan partner za najam opreme za sve vrste svečanosti na
            području Splita i cijele Dalmacije.
          </p>
        </div>

        {/* Kolona 2: Brzi linkovi */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Brzi linkovi</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#ponuda" className="hover:text-blue-400 transition">
                Naša Ponuda
              </a>
            </li>
            <li>
              <a href="#galerija" className="hover:text-blue-400 transition">
                Galerija slika
              </a>
            </li>
            <li>
              <a href="#o-nama" className="hover:text-blue-400 transition">
                O nama
              </a>
            </li>
          </ul>
        </div>

        {/* Kolona 3: Kontakt info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Kontakt</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center justify-center md:justify-start">
              <span className="font-semibold mr-2">Tel:</span>
              <a
                href={`tel:+${contactConfig.phone}`}
                className="hover:text-blue-400"
              >
                +{contactConfig.phone}
              </a>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <span className="font-semibold mr-2">Email:</span>
              <a
                href={`mailto:${contactConfig.email}`}
                className="hover:text-blue-400"
              >
                {contactConfig.email}
              </a>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <span className="font-semibold mr-2">Lokacija:</span> Split,
              Hrvatska
            </li>
            <li className="mt-4">
              <a
                href="https://www.facebook.com/p/Najam-%C5%A1atora-pagoda-Split-i-okolica-100063457806608/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Posjetite naš Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-12 pt-8 border-t border-gray-800">
        <p>&copy; 2025 DalmacijaNajam. Sva prava pridržana.</p>
      </div>
    </footer>
  );
}
