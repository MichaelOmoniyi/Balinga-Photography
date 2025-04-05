import React from "react";
import dynamic from "next/dynamic";

// Lazy load components
const VideoFrame = dynamic(() => import("./VideoFrame"), {
  loading: () => (
    <div className="w-full p-4 flex justify-center items-center">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  ),
  ssr: false,
});

const Video = () => {
  return (
    <div className="wrapper dark:bg-black">
      <div className="flex flex-col justify-center items-center px-4 md:px-8 lg:px-16 py-20">
        <h1 className="text-gray-600 dark:text-gray-200 text-5xl text-center">
          Event Videography, capturing one frame at a time.
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-xl mt-4 text-center">
          Best Videogarphy Team in Nigeria
        </p>
      </div>
      <VideoFrame />
    </div>
  );
};

export default Video;
