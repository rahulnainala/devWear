import "./globals.css";
import Navigation from "./navigationMenu";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "DevWear",
  description: "A Frontend Application using NextJs for Shopping using JSON",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <header className="w-full">
          <Navigation />
        </header>
        <main>{children}</main>
        <footer className="footer text-lg font-semibold sm:footer-horizontal footer-center bg-base-300 text-base-content p-20 pb-10 flex justify-center">
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by
              Rahul Nainala
            </p>
          </aside>
        </footer>
      </body>
    </html>
  );
}
