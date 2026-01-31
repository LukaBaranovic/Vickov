import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import ContactModal from "../components/ContactModal"; // <--- NOVI IMPORT
import { ModalProvider } from "../context/ModalContext"; // <--- NOVI IMPORT
import "./globals.css";

export const metadata = {
  title: "Najam Opreme Dalmacija",
  description: "Iznajmljivanje opreme za vjenčanja i evente",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hr" className="scroll-smooth">
      <body className="bg-gray-50 flex flex-col min-h-screen">
        <ModalProvider>
          {" "}
          {/* <--- OMATAMO SVE U PROVIDER */}
          <ScrollToTop />
          <Navbar />
          <ContactModal />{" "}
          {/* <--- OVDJE STOJI POPUP (nevidljiv dok se ne pozove) */}
          <main className="flex-grow">{children}</main>
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
