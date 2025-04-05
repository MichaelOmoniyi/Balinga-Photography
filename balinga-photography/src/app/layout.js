"use client"; // Must be the first line

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 2000); // Simulate a short loading delay
    return () => clearTimeout(timeout);
  }, [pathname]); // Runs every time the route changes

  return (
    <html lang="en">
      <body className="bg-slate-50 dark:bg-black">
        {loading ? (
          <div className="fixed top-0 left-0 w-screen h-screen bg-white flex justify-center items-center">
            <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            <Navbar />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
