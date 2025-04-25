import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Marquee from "../Marquee";

const LoadingSpinner = () => (
  <div className="w-full p-4 flex justify-center items-center">
    <div className="w-10 h-10 border-4 border-gray-300 border-t-black dark:border-t-white rounded-full animate-spin"></div>
  </div>
);

const Hero = dynamic(() => import("./Hero"), {
  ssr: true,
});

const Connect = dynamic(() => import("./Connect"), {
  ssr: false,
  suspense: true,
});

const Testimonial1 = dynamic(() => import("./Testimonial1"), {
  ssr: false,
  suspense: true,
});

const Book = dynamic(() => import("./Book"), {
  ssr: false,
  suspense: true,
});

const Testimonial2 = dynamic(() => import("./Testimonial2"), {
  ssr: false,
  suspense: true,
});

const Checkout = dynamic(() => import("../home/Checkout"), {
  ssr: false,
  suspense: true,
});

const Highlight = dynamic(() => import("../Highlight"), {
  ssr: false,
  suspense: true,
});

const Main = () => {
  return (
    <div className="wrapper text-gray-700 dark:text-slate-50">
      <Marquee />
      <Hero />
      <Suspense fallback={<LoadingSpinner />}>
        <Connect />
        <Testimonial1 />
        <Book />
        <Testimonial2 />
        <Checkout />
        <div className="highlightSection">
          <Highlight />
        </div>
      </Suspense>
    </div>
  );
};

export default Main;
