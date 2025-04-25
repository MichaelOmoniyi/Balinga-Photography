"use client";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import "@/app/components/contact/style.css";
import useZoomEffect from "@/app/Hooks/useZoomEffect";

const LoadingSpinner = () => (
  <div className="w-full p-4 flex justify-center items-center">
    <div className="w-10 h-10 border-4 border-gray-300 border-t-black dark:border-t-white rounded-full animate-spin"></div>
  </div>
);

//Lazy Load component
const Carousel = dynamic(() => import("./Carousel"), {
  ssr: true,
});
const Form = dynamic(() => import("./Form"), {
  ssr: false,
  suspense: true,
});

const Porfolio = dynamic(() => import("./Porfolio"), {
  ssr: false,
  suspense: true,
});

const Notice = dynamic(() => import("./Notice"), {
  ssr: false,
  suspense: true,
});

const Highlight = dynamic(() => import("../Highlight"), {
  ssr: false,
  suspense: true,
});

const FAQs = dynamic(() => import("./FAQs"), {
  ssr: false,
  suspense: true,
});

const Contact = () => {
  useZoomEffect(".transitionEffect");
  return (
    <div>
      <Carousel />
      <Suspense fallback={<LoadingSpinner />}>
        <div className="section_">
          <h1 className="transitionEffect text-3xl font-bold mb-8 dark:text-white scale-110 opacity-0">
            Begin Your Timeless Story
          </h1>
          <p className="transitionEffect text-base text-gray-900 mb-4 dark:text-white scale-110 opacity-0">
            Whether you’re looking to capture the magic of your love story,
            create elegant and timeless portraits, or celebrate a special
            moment, we are here to bring your vision to life in the most
            beautiful way.
          </p>
          <p className="transitionEffect text-base text-gray-900 dark:text-white scale-110 opacity-0">
            Fill out the contact form below, and we’ll be in touch shortly via
            email. We can’t wait to create something unforgettable with you!
          </p>
        </div>
        <Form />
        <Porfolio />
        <Notice />
        <FAQs />
        <div className="highlightSection">
          <Highlight />
        </div>
      </Suspense>
    </div>
  );
};

export default Contact;
