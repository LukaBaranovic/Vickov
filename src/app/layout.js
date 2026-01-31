import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata = {
  title: "Najam Opreme Dalmacija",
  description: "Iznajmljivanje opreme za vjenčanja i evente",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hr" className="scroll-smooth">
      <body className="bg-gray-50 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
