import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import ContactModal from "../components/ContactModal";
import { ModalProvider } from "../context/ModalContext";
import "./globals.css";
// Učitavanje fontova (da naslovi budu onako lijepi serifni)
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  // NOVI NASLOV: Ključne riječi + Tvoj brend
  title: "Najam pagoda, šatora i catering opreme | Dalmacija Najam",

  // NOVI OPIS: Uključuje šatore, visoke stolove i gradove
  description:
    "Vrhunski najam pagoda, šatora, visokih stolova i kompletne catering opreme za vjenčanja i evente. Dostava i montaža u Splitu, Zadru, Šibeniku i na otocima.",

  keywords:
    "najam pagoda, najam šatora, catering oprema, visoki stolovi, najam inventara, split, zadar, šibenik, dalmacija",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hr" className="scroll-smooth">
      <body
        className={`bg-gray-50 flex flex-col min-h-screen ${inter.variable} ${playfair.variable} font-sans`}
      >
        <ModalProvider>
          <ScrollToTop />
          <Navbar />
          <ContactModal />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
