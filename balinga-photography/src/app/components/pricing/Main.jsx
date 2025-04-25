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

const Package = dynamic(() => import("./Package"), {
  ssr: true,
  suspense: true,
});

const Btn = dynamic(() => import("../Btn"), {
  ssr: true,
  suspense: true,
});

const PricingPackages = dynamic(() => import("./PricingPackages"), {
  ssr: true,
  suspense: true,
});

const Testimoinals = dynamic(() => import("./Testimonials"), {
  ssr: true,
  suspense: true,
});

const Connect = dynamic(() => import("./Connect"), {
  ssr: true,
  suspense: true,
});

const Highlight = dynamic(() => import("../Highlight"), {
  ssr: true,
  suspense: true,
});

const Pricing = () => {
  return (
    <div className="wrapper overflow-x-hidden">
      <Marquee />
      <Hero />
      <Suspense fallback={<LoadingSpinner />}>
        <Package />
        {/* <Btn text={"VIEW MORE PACKAGES"} href={""} /> */}
        <PricingPackages />
        <Testimoinals />
        <Connect />
        <div className="highlightSection">
          <Highlight />
        </div>
      </Suspense>
    </div>
  );
};

export default Pricing;
