import React from "react";
import Image from "next/image";
import useFrameFocus from "@/app/Hooks/useFrameFocus";
import useZoomEffect from "@/app/Hooks/useZoomEffect";

const Frame = ({ imgIndex, img }) => {
  useFrameFocus(".frame");
  useZoomEffect(".frame");
  return (
    <div className="frame scale-110 opacity-0" key={imgIndex}>
      <Image
        width={500}
        height={500}
        quality={100}
        unoptimized
        class="h-auto max-w-full rounded-lg"
        src={`/images/${img}`}
        alt={`Gallery Image ${imgIndex + 1}`}
      />
    </div>
  );
};

export default Frame;
