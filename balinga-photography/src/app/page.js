export const metadata = {
  title: "Balinga Photography",
  description: "Capturing your best moments",
};

import dynamic from "next/dynamic";

// Above the fold components
const Hero = dynamic(() => import("@/app/components/home/Hero"), {
  loading: () => (
    <div className="w-full h-[calc(100vh-5.5rem)] mt-20 flex justify-center items-center">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  ),
  ssr: true, // Enable SSR for critical content
});

const About = dynamic(() => import("@/app/components/home/About"), {
  loading: () => (
    <div className="w-full p-4 flex justify-center items-center">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  ),
  ssr: true, // Enable SSR for critical content
});

// Below the fold components
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

const Connect = dynamic(() => import("@/app/components/home/Connect"), {
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
    <>
      <Hero />
      <About />
      <Quote />
      <Photos />
      <Checkout />
      <Connect />
      <Highlight />
    </>
  );
}
