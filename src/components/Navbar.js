"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useModal } from "../context/ModalContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useModal();

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

  // FUNKCIJA ZA LOGO: Zatvori meni i vozi na vrh
  const handleLogoClick = () => {
    closeMenu();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleMobileQuote = () => {
    closeMenu();
    openModal();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center relative z-50 bg-white">
          {/* LOGO SADA VODI NA VRH */}
          <div className="text-2xl font-bold text-blue-900 tracking-tight cursor-pointer">
            <Link href="/" onClick={handleLogoClick}>
              DALMACIJA<span className="text-blue-500">NAJAM</span>
            </Link>
          </div>

          {/* DESKTOP LINKOVI */}
          <div className="hidden md:flex space-x-8 font-medium text-gray-600 items-center">
            <a
              href="#"
              className="hover:text-blue-600 transition"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
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

            <button
              onClick={openModal}
              className="bg-blue-600 text-white px-5 py-2 rounded-full font-bold hover:bg-blue-700 transition flex items-center gap-2 shadow-md ml-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              Zatraži ponudu
            </button>
          </div>

          {/* MOBILNI HAMBURGER GUMB */}
          <button
            className="md:hidden text-gray-800 p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
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

        {/* MOBILNI IZBORNIK */}
        <div
          className={`
            fixed inset-0 z-40 bg-white flex flex-col justify-center items-center space-y-8
            transform transition-transform duration-300 ease-in-out h-screen w-screen
            ${isOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <a
            href="#"
            onClick={handleLogoClick}
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

          <button
            onClick={handleMobileQuote}
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg flex items-center gap-2 mt-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            Zatraži ponudu
          </button>
        </div>
      </div>
    </nav>
  );
}
