"use client";
import React from "react";
import Marquee from "./Marquee";
// import Hero from "./Hero";
// import Story from "./Story";
// import Form from "../contact/Form";
// import Gallery from "./Gallery";
// import Info from "./Info";
// import Highlight from "../Highlight";
import useZoomEffect from "@/app/Hooks/useZoomEffect";
import dynamic from "next/dynamic";

// Lazy load component
const Hero = dynamic(() => import("./Hero"), {
  loading: () => (
    <div className="w-full p-4 flex justify-center items-center">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  ),
  ssr: false,
});
const Story = dynamic(() => import("./Story"), {
  loading: () => (
    <div className="w-full p-4 flex justify-center items-center">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  ),
  ssr: false,
});
const Form = dynamic(() => import("../contact/Form"), {
  loading: () => (
    <div className="w-full p-4 flex justify-center items-center">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  ),
  ssr: false,
});
const Gallery = dynamic(() => import("./Gallery"), {
  loading: () => (
    <div className="w-full p-4 flex justify-center items-center">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  ),
  ssr: false,
});
const Info = dynamic(() => import("./Info"), {
  loading: () => (
    <div className="w-full p-4 flex justify-center items-center">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  ),
  ssr: false,
});
const Highlight = dynamic(() => import("../Highlight"), {
  loading: () => (
    <div className="w-full p-4 flex justify-center items-center">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  ),
  ssr: false,
});

const About = () => {
  useZoomEffect(".transitionEffect");
  return (
    <div className="wrapper overflow-hidden">
      <Marquee />
      <Hero />
      <div className="p-6 md:p-10">
        <Story />
        <p className="transitionEffect font-serif font-bold text-xl text-black dark:text-white mt-6 px-40 scale-110 opacity-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          architecto illo, eaque rerum at impedit ratione cum, tempore in error
          officia unde id aspernatur dicta harum blanditiis sunt? Quia,
          doloribus.
        </p>
        <Form />
        <Gallery />
        <Info />
        <Highlight />
      </div>
    </div>
  );
};

export default About;
