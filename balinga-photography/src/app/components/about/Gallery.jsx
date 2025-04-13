import React from "react";
import useFrameFocus from "@/app/Hooks/useFrameFocus";
import useZoomEffect from "@/app/Hooks/useZoomEffect";
import dynamic from "next/dynamic";
import data from "@/app/data/miniPortfolio";


// Lazy load component
const ImageFrame = dynamic(() => import("./Frame"), {
  loading: () => (
    <div className="w-full p-4 flex justify-center items-center">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  ),
  ssr: false,
});

const Gallery = () => {
  useFrameFocus(".frame");
  useZoomEffect(".frame")

  return (
    <div>
      <div class="section_ grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((frame) => (<ImageFrame id={frame.id} img={frame.img[0]} key={frame.id}/>))}
      </div>
    </div>
  );
};

export default Gallery;
