import Navbar from "./components/Navbar";
import Hero from "@/app/components/home/Hero";
import About from "@/app/components/home/About";
import Quote from "@/app/components/home/Quote";
import Photos from "@/app/components/home/Photos";
import Checkout from "@/app/components/home/Checkout";
import Connect from "@/app/components/home/Connect";
import Highlight from "@/app/components/home/Highlight";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Quote />
      <Photos />
      <Checkout />
      <Connect />
      <Highlight />
      {/* <Footer /> */}
    </div>
  );
}
