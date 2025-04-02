// import Hero from "@/app/components/home/Hero";
// import About from "@/app/components/home/About";
// import Quote from "@/app/components/home/Quote";
// import Photos from "@/app/components/home/Photos";
// import Checkout from "@/app/components/home/Checkout";
// import Connect from "@/app/components/home/Connect";
// import Highlight from "@/app/components/home/Highlight";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/app/components/home/Hero"), {
  loading: () => (
    <div className="w-full p-4 flex justify-center items-center">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  ),
  ssr: false,
});

const About = dynamic(() => import("@/app/components/home/About"), {
  loading: () => (
    <div className="w-full p-4 flex justify-center items-center">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  ),
  ssr: false,
});

const Quote = dynamic(() => import("@/app/components/home/Quote"), {
  loading: () => (
    <div className="w-full p-4 flex justify-center items-center">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  ),
  ssr: false,
});

const Photos = dynamic(() => import("@/app/components/home/Photos"), {
  loading: () => (
    <div className="w-full p-4 flex justify-center items-center">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  ),
  ssr: false,
});

const Checkout = dynamic(() => import("@/app/components/home/Checkout"), {
  loading: () => (
    <div className="w-full p-4 flex justify-center items-center">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  ),
  ssr: false,
});

const Connect= dynamic(() => import("@/app/components/home/Connect"), {
  loading: () => (
    <div className="w-full p-4 flex justify-center items-center">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  ),
  ssr: false,
});

const Highlight = dynamic(() => import("@/app/components/home/Highlight"), {
  loading: () => (
    <div className="w-full p-4 flex justify-center items-center">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  ),
  ssr: false,
});

export default function Home() {
  return (
    <div >
      <Hero />
      <About />
      <Quote />
      <Photos />
      <Checkout />
      <Connect />
      <Highlight />
    </div>
  );
}
