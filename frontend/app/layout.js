import { Orbitron, Michroma, Inter } from "next/font/google";
import localfont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import { Meteors } from "@/components/magicui/meteors";

const conthrax = localfont({
  src: "/../public/Conthrax-SemiBold.otf",
  variable: "--font-conthrax",
});

const michroma = Michroma({
  variable: "--font-michroma",
  weight: "400",
  // subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  // subsets: ["latin"],
});

export const metadata = {
  title: "MangalVerse",
  description: "Exploring the horizons of Mars",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${conthrax.variable} ${michroma.variable} ${orbitron.variable} h-screen antialiased`}
      >
        <div className="meteors-wrapper fixed z-[-2] h-[500px] w-full overflow-hidden">
          <Meteors maxDuration={5} />
        </div>
        <main className="h-full px-4 py-2.5 sm:px-16 sm:py-5 lg:px-40">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
