"use client";
import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ThemeContext from "./context/themeContext";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState(false);

  return (
    <html lang="en">
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <body
          className={
            inter.className +
            ` ${theme ? "" : "bg-slate-300"} transition-all duration-300`
          }
        >
          <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
            <Navbar />
            {children}
          </main>
          <Footer />
        </body>
      </ThemeContext.Provider>
      {process.env.NEXT_PUBLIC_GTM && (
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
      )}
    </html>
  );
}
