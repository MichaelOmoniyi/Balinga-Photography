import React from "react";
import useZoomEffect from "@/app/Hooks/useZoomEffect";

const Header = ({ filteredData }) => {
    useZoomEffect(".header");
  return (
    <div
      className="w-full overflow-hidden text-gray-600 dark:text-gray-200 mb-6"
      id="gallery"
    >
      <h1 className="header scale-110 opacity-0 text-2xl">
        {filteredData[0]?.title}
      </h1>
      <p className="header scale-110 opacity-0 text-gray-500 dark:text-gray-400">
        Balinga Photography
      </p>
    </div>
  );
};

export default Header;
