import React from "react";
import dynamic from "next/dynamic";

// Lazy load components
const Carousel = dynamic(() => import("../Carousel"), {
  loading: () => (
    <div className="w-full p-4 flex justify-center items-center">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  ),
  ssr: false,
});
const Categories = dynamic(() => import("./Categories"), {
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
const Connect = dynamic(() => import("./Connect"), {
  loading: () => (
    <div className="w-full p-4 flex justify-center items-center">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  ),
  ssr: false,
});

const Main = ({ category }) => {
  return (
    <div className="bg-slate-200 dark:bg-black">
      <Carousel />
      <Categories categoryType={category} />
      <Connect />
      <div className="highlightSection">
        <Highlight />
      </div>
    </div>
  );
};

export default Main;
