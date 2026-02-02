"use client";

import Link from "next/link";
import { contactConfig } from "../data/config";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-auto" id="kontakt">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Kolona 1 */}
        <div>
          <div className="mb-4">
            <Link
              href="/"
              onClick={scrollToTop}
              className="text-xl font-bold text-white hover:text-blue-400 transition inline-block"
            >
              DALMACIJA<span className="text-blue-400">NAJAM</span>
            </Link>
          </div>

          <p className="text-sm leading-relaxed mb-4">
            Vaš pouzdan partner za najam pagoda i opreme za sve vrste svečanosti
            na području Splita i cijele Dalmacije.
          </p>

          {/* Dodan naziv firme */}
          <p className="text-sm font-semibold text-white">
            {contactConfig.companyName}
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

        {/* Kolona 3: Kontakt info - POVLAČI NOVE PODATKE IZ CONFIGA */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Kontakt</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center justify-center md:justify-start">
              <span className="font-semibold mr-2">Tel:</span>
              <a
                href={`tel:+${contactConfig.phone}`}
                className="hover:text-blue-400"
              >
                {contactConfig.displayPhone}
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

            <li className="mt-6">
              <a
                href={contactConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-white transition group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="group-hover:scale-110 transition-transform"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
                <span className="font-medium">Posjetite naš Facebook</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-12 pt-8 border-t border-gray-800">
        <p>&copy; 2026 {contactConfig.companyName}. Sva prava pridržana.</p>
      </div>
    </footer>
  );
}
