import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import ContactModal from "../components/ContactModal";
import { ModalProvider } from "../context/ModalContext";
import "./globals.css";

export const metadata = {
  title: "Dalmacija Najam | Pagode, Šatori i Oprema za Vjenčanja",
  description:
    "Iznajmljivanje vrhunskih pagoda, šatora, stolova i prateće opreme za vjenčanja i evente u Splitu, Zadru, Šibeniku i Dubrovniku. Profesionalna montaža i logistika.",
  // OVDJE SMO MAKNULI DIO "icons" JER GA NEXT.JS SADA SAM UČITAVA IZ APP MAPE
};

export default function RootLayout({ children }) {
  return (
    <html lang="hr" className="scroll-smooth">
      <body className="bg-gray-50 flex flex-col min-h-screen">
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
