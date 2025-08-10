import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zariyaa — Golden threads, timeless drapes",
  description: "Handcrafted sarees woven with heritage techniques and a modern eye.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
