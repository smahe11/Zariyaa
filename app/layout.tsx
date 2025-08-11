import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400","600","700"] });
const lato = Lato({ subsets: ["latin"], weight: ["400","700"] });

export const metadata: Metadata = {
  title: "Zariyaa — Grace in Every Thread",
  description: "Handloom sarees & timeless accessories. Golden threads, timeless drapes.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${lato.className}`}>
        <div className="font-sans">
          <style>{`
            .font-heading { font-family: ${playfair.style.fontFamily}, serif; }
          `}</style>
          {children}
        </div>
      </body>
    </html>
  );
}
