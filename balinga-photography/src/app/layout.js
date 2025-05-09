"use client";

import { useState, useEffect, Suspense } from "react";
import { usePathname } from "next/navigation";
import { Playfair_Display, Montserrat, Inter } from 'next/font/google';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import Navbar from "./components/Navbar";
import dynamic from "next/dynamic";

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const LoadingSpinner = () => (
  <div className="w-full p-4 flex justify-center items-center">
    <div className="w-10 h-10 border-4 border-gray-300 border-t-black dark:border-t-white rounded-full animate-spin"></div>
  </div>
);

const Footer = dynamic(() => import("./components/Footer"), {
  ssr: false,
  suspense: true,
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, [pathname]); // Runs every time the route changes

  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable} ${inter.variable}`}>
      <body className="bg-slate-50 dark:bg-black">
        {loading ? (
          <div className="fixed top-0 left-0 w-screen h-screen bg-white dark:bg-black flex justify-center items-center z-50">
            <div className="w-10 h-10 border-4 border-gray-300 border-t-black dark:border-t-white rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            <Navbar />
            <main>{children}</main>
            <Suspense fallback={<LoadingSpinner />}>
              <Footer />
            </Suspense>
          </>
        )}
      </body>
    </html>
  );
}
