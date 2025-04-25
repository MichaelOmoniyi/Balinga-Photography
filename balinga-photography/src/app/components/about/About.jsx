"use client";
import React, { Suspense } from "react";
import Marquee from "../Marquee";
import useZoomEffect from "@/app/Hooks/useZoomEffect";
import dynamic from "next/dynamic";

const LoadingSpinner = () => (
  <div className="w-full p-4 flex justify-center items-center">
    <div className="w-10 h-10 border-4 border-gray-300 border-t-black dark:border-t-white rounded-full animate-spin"></div>
  </div>
);

// Lazy load component
const Hero = dynamic(() => import("./Hero"), {
  ssr: false,
  suspense: true,
});
const Story = dynamic(() => import("./Story"), {
  ssr: false,
  suspense: true,
});
const Form = dynamic(() => import("../contact/Form"), {
  ssr: false,
  suspense: true,
});
const Gallery = dynamic(() => import("./Gallery"), {
  ssr: false,
  suspense: true,
});
const Info = dynamic(() => import("./Info"), {
  ssr: false,
  suspense: true,
});
const Highlight = dynamic(() => import("../Highlight"), {
  ssr: false,
  suspense: true,
});

const About = () => {
  useZoomEffect(".transitionEffect");
  return (
    <div className="wrapper overflow-hidden">
      <Marquee />
      <Suspense fallback={<LoadingSpinner />}>
        <Hero />
        <Story />
        <p className="transitionEffect font-serif font-bold text-xl text-black dark:text-white mt-6 px-5 md:px-20 lg:px-40 scale-110 opacity-0">
          If you’re ready to step in front of my lens and experience the magic
          of photography, reach out. I can’t wait to create with you!
        </p>
        <Form />
        <Gallery />
        <Info />
        <div className="highlightSection">
          <Highlight />
        </div>
      </Suspense>
    </div>
  );
};

export default About;
