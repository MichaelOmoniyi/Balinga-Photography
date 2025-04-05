export const metadata = {
  title: "Know More About Balinga - Balinga Photography",
  description: "Info about Balinga",
};

import dynamic from "next/dynamic";
import React from "react";
import "../components/contact/style.css";

const About = dynamic(() => import("@/app/components/about/About"), {
  loading: () => (
    <div className="w-full p-4 flex justify-center items-center">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  ),
  ssr: false,
});

const Page = () => {
  return (
    <>
      <About />
    </>
  );
};

export default Page;
