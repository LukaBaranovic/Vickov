import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import ContactModal from "../components/ContactModal";
import { ModalProvider } from "../context/ModalContext";
import "./globals.css";

export const metadata = {
  title: "Najam Pagoda Split | Oprema za Vjenčanja i Evente Dalmacija",

  description:
    "Tražite najam pagoda u Splitu ili Zadru? Vickov d.o.o. nudi vrhunske pagode, banket stolove, stolice i kompletnu opremu za vjenčanja i proslave. Zatražite ponudu!",

  keywords:
    "najam pagoda, najam šatora split, oprema za vjenčanja, iznajmljivanje stolova, vickov d.o.o.",
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
