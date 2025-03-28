import React from "react";
import useZoomEffect from "../Hooks/useZoomEffect";

const Highlight = () => {
  useZoomEffect(".highlight");

  return (
    <div className="w-full flex justify-center py-8">
      <h4 className="highlight flex justify-center w-full md:w-5/12 text-white dark:bg-white dark:text-black font-bold text-5xl pb-12 pt-12 scale-110 opacity-0">
        @balinga
      </h4>
    </div>
  );
};

export default Highlight;
