"use client";

import { useState, useEffect } from "react"; // Dodao useEffect
import Link from "next/link";
import { contactConfig } from "../data/config";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Funkcija koja sprječava skrolanje pozadine kad je meni otvoren
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    // Z-50 osigurava da je Navbar UVIJEK na vrhu svega
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center relative z-50 bg-white">
          {/* LOGO */}
          <div className="text-2xl font-bold text-blue-900 tracking-tight">
            <Link href="/" onClick={closeMenu}>
              DALMACIJA<span className="text-blue-500">NAJAM</span>
            </Link>
          </div>

          {/* DESKTOP LINKOVI (Sakriveni na mobitelu) */}
          <div className="hidden md:flex space-x-8 font-medium text-gray-600 items-center">
            <a href="#" className="hover:text-blue-600 transition">
              Početna
            </a>
            <a href="#o-nama" className="hover:text-blue-600 transition">
              O nama
            </a>
            <a href="#ponuda" className="hover:text-blue-600 transition">
              Ponuda
            </a>
            <a href="#galerija" className="hover:text-blue-600 transition">
              Galerija
            </a>
            <a href="#kontakt" className="hover:text-blue-600 transition">
              Kontakt
            </a>

            {/* WhatsApp Gumb Desktop */}
            <a
              href={`https://wa.me/${
                contactConfig.phone
              }?text=${encodeURIComponent(contactConfig.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-5 py-2 rounded-full font-bold hover:bg-green-600 transition flex items-center gap-2 shadow-md ml-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              Zatraži ponudu
            </a>
          </div>

          {/* MOBILNI HAMBURGER GUMB */}
          <button
            className="md:hidden text-gray-800 p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              // X ikona
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger ikona
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* --- MOBILNI IZBORNIK (FULL SCREEN) --- */}
        <div
          className={`
            fixed inset-0 z-40 bg-white flex flex-col justify-center items-center space-y-8
            transform transition-transform duration-300 ease-in-out h-screen w-screen
            ${isOpen ? "translate-x-0" : "translate-x-full"}
          `}
          // Dodali smo 'top-0' da krene od vrha, ali z-40 je ispod z-50 (logo trake),
          // pa će izgledati kao da izlazi ispod loga.
          // Budući da je bg-white, prekrit će sadržaj stranice.
        >
          <a
            href="#"
            onClick={closeMenu}
            className="text-2xl font-medium text-gray-800 hover:text-blue-600"
          >
            Početna
          </a>
          <a
            href="#o-nama"
            onClick={closeMenu}
            className="text-2xl font-medium text-gray-800 hover:text-blue-600"
          >
            O nama
          </a>
          <a
            href="#ponuda"
            onClick={closeMenu}
            className="text-2xl font-medium text-gray-800 hover:text-blue-600"
          >
            Ponuda
          </a>
          <a
            href="#galerija"
            onClick={closeMenu}
            className="text-2xl font-medium text-gray-800 hover:text-blue-600"
          >
            Galerija
          </a>
          <a
            href="#kontakt"
            onClick={closeMenu}
            className="text-2xl font-medium text-gray-800 hover:text-blue-600"
          >
            Kontakt
          </a>

          {/* WhatsApp Gumb Mobilni */}
          <a
            href={`https://wa.me/${
              contactConfig.phone
            }?text=${encodeURIComponent(contactConfig.whatsappMessage)}`}
            onClick={closeMenu}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg flex items-center gap-2 mt-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            Zatraži ponudu
          </a>
        </div>
      </div>
    </nav>
  );
}
