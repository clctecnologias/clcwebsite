import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import CookieModal from "@/components/CookieModal";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "CLC Tecnologias — Construímos o futuro digital da sua empresa",
  description:
    "Websites, aplicações, sistemas, automações, IA, marketing digital e experiências tecnológicas feitas à medida para crescer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="scroll-smooth">
      <body
        className={`${plusJakarta.variable} font-sans bg-white text-[#09090B] antialiased selection:bg-[#FF1E7A]/15 selection:text-[#FF1E7A]`}
      >
        {children}
        <CookieModal />
      </body>
    </html>
  );
}