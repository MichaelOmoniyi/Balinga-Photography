import React from "react";

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
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/lCAeRuVuCrM?si=x-xpIAcMkjf13ee_"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
