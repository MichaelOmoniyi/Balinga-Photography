import React, { Suspense } from "react";
import dynamic from "next/dynamic";

const LoadingSpinner = () => (
  <div className="w-full p-4 flex justify-center items-center">
    <div className="w-10 h-10 border-4 border-gray-300 border-t-black dark:border-t-white rounded-full animate-spin"></div>
  </div>
);

// Lazy load components
const VideoFrame = dynamic(() => import("./VideoFrame"), {
  ssr: true,
  suspense: true,
});

const VideoGallery = dynamic(() => import("./VideoGallery"), {
  ssr: true,
  suspense: true,
});

const Highlight = dynamic(() => import("../Highlight"), {
  ssr: true,
  suspense: true,
});

const Main = () => {
  return (
    <div className="wrapper dark:bg-black">
      <Suspense fallback={<LoadingSpinner />}>
        <div className="flex flex-col justify-center items-center px-4 md:px-8 lg:px-16 pt-16 pb-6 md:pb-8">
          <h1 className="text-gray-600 dark:text-gray-200 text-5xl text-center">
            Event Videography, capturing one frame at a time.
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-xl mt-4 text-center">
            Best Videogarphy Team in Nigeria
          </p>
        </div>
        <VideoFrame />
        <VideoGallery />
        <div className="highlightSection">
          <Highlight />
        </div>
      </Suspense>
    </div>
  );
};

export default Main;
