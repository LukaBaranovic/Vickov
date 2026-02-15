import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import { ModalProvider } from "../context/ModalContext";
import Modal from "../components/Modal";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  // PROMJENA: Ključne riječi malim slovima + Tvoj brend na kraju
  title: "Najam pagoda, šatora i catering opreme | Dalmacija Najam",

  description:
    "Vrhunski najam pagoda, šatora, visokih stolova i kompletne catering opreme za vjenčanja i evente. Dostava i montaža u Splitu, Zadru, Šibeniku i na otocima.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hr" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <ModalProvider>
          {children}
          <Modal />
        </ModalProvider>
      </body>
    </html>
  );
}
