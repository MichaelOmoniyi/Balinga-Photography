import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Marquee from "../Marquee";

const LoadingSpinner = () => (
  <div className="w-full p-4 flex justify-center items-center">
    <div className="w-10 h-10 border-4 border-gray-300 border-t-black dark:border-t-white rounded-full animate-spin"></div>
  </div>
);

const Header = dynamic(() => import("./Header"), {
  ssr: true,
  suspense: true,
});

const MiniGallery = dynamic(() => import("./MiniGallery"), {
  ssr: true,
  suspense: true,
});

const Process = dynamic(() => import("./Process"), {
  ssr: true,
  suspense: true,
});

const Contact = dynamic(() => import("./Contact"), {
  ssr: true,
  suspense: true,
});

const Pricing = dynamic(() => import("./Pricing"), {
  ssr: true,
  suspense: true,
});

const FAQs = dynamic(() => import("./FAQs"), {
  ssr: true,
  suspense: true,
});

const ViewGallery = dynamic(() => import("./ViewGallery"), {
  ssr: true,
  suspense: true,
});

const Highlight = dynamic(() => import("../Highlight"), {
  ssr: true,
  suspense: true,
});

const Main = () => {
  return (
    <div className="wrapper w-full text-gray-700 dark:text-slate-50">
      <Marquee />
      <Suspense fallback={<LoadingSpinner />}>
        <Header />
        <MiniGallery />
        <Process />
        <Contact />
        <Pricing />
        <FAQs />
        <ViewGallery />
        <div className="highlightSection">
          <Highlight />
        </div>
      </Suspense>
    </div>
  );
};

export default Main;
