import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"]
})

export const metadata: Metadata = {
  title: "Gestion Stock Powertech",
  description: "Une application de gestion de stock pour l'entreprise PowerTech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={lato.className}
      >
        {children}
      </body>
    </html>
  );
}
