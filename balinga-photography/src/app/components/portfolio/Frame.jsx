import React from "react";
import Image from "next/image";
import useZoomEffect from "@/app/Hooks/useZoomEffect";
import useFrameFocus from "@/app/Hooks/useFrameFocus";

const Frame = ({ id, img, title, subtitle }) => {
  useZoomEffect(".frame");
  useFrameFocus(".frameFocus");
  return (
    <div className="frame frameFocus h-auto scale-110 opacity-0 relative rounded-lg overflow-hidden">
      <div
        className="bg-img absolute top-0 left-0 w-full h-full bg-center bg-cover blur-sm z-0"
        style={{ backgroundColor: "black" }}
      ></div>
      <Image
        width={500}
        height={500}
        quality={100}
        unoptimized
        className="relative h-full max-w-full rounded-lg object-cover z-10"
        src={`/images/${img}`}
        alt=""
      />
      <div className="overlay absolute w-full h-full -translate-y-full lg:-translate-y-0 lg:opacity-0 transition-all duration-1000 flex flex-col justify-center items-center z-20 overflow-hidden">
        <div className="position absolute flex w-full h-full bg-black opacity-50"></div>
        <div className="relative flex flex-col w-full h-full justify-center items-center text-white px-4">
          <h1 className="text-3xl md:text-4xl text-center font-bold mb-2">
            {title}
          </h1>
          <p className="text-base text-center mb-4 md:mb-6">{subtitle}</p>
          <button>
            <a
              href={`/client-area/gallery/${id}`}
              target="_blank"
              className="px-8 py-2 text-lg md:text-xl lg:text-2xl rounded-3xl border border-solid bg-transparent border-white text-white transition-all hover:bg-white hover:text-black"
            >
              View Gallery
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Frame;
