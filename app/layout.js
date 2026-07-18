import "./globals.css";
import { Fraunces, Inter, Space_Mono } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata = {
  title: "Zukiswa Phiri | Software Developer",
  description:
    "Portfolio of Zukiswa Phiri - Software Developer, UI Designer & Copywriter.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${inter.variable} ${spaceMono.variable} antialiased bg-[#F5F0E6] text-[#171310]`}
      >
        {children}
      </body>
    </html>
  );
}