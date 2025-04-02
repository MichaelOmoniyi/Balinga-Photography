"use client";
import React from "react";
// import Carousel from "./Carousel";
// import Form from "./Form";
// import Porfolio from "./Porfolio";
// import Notice from "./Notice";
// import Highlight from "../Highlight";
// import FAQs from "./FAQs";
import useZoomEffect from "@/app/Hooks/useZoomEffect";
import dynamic from "next/dynamic";

//Lazy Load component
const Carousel = dynamic(() => import("./Carousel"), {
  loading: () => (
    <div className="w-full p-4 flex justify-center items-center">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  ),
  ssr: false,
});
const Form = dynamic(() => import("./Form"), {
  loading: () => (
    <div className="w-full p-4 flex justify-center items-center">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  ),
  ssr: false,
});

const Porfolio = dynamic(() => import("./Porfolio"), {
  loading: () => (
    <div className="w-full p-4 flex justify-center items-center">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  ),
  ssr: false,
});

const Notice = dynamic(() => import("./Notice"), {
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

const FAQs = dynamic(() => import("./FAQs"), {
  loading: () => (
    <div className="w-full p-4 flex justify-center items-center">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  ),
  ssr: false,
});

const Contact = () => {
  useZoomEffect(".transitionEffect");
  return (
    <div>
      <Carousel />
      <div className="px-8 md:px-12 lg:px-24">
        <div className="py-8">
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
      </div>
      <Porfolio />
      <div className="pl-8 pr-8 md:pr-12 md:pl-12 lg:pl-24 lg:pr-24">
        <Notice />
        <FAQs />
        <Highlight />
      </div>
    </div>
  );
};

export default Contact;
