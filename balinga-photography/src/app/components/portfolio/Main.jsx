import React from "react";
import dynamic from "next/dynamic";

// Lazy load component
const Carousel = dynamic(() => import("../Carousel"), {
  loading: () => (
    <div className="w-full p-4 flex justify-center items-center">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  ),
  ssr: false,
});

const Main = () => {
  return (
    <div className="bg-slate-200 dark:bg-black">
      <Carousel />
    </div>
  );
};

export default Main;
