import React from "react";
import OptimizedImage from "../../../components/OptimizedImage";
import useFrameFocus from "@/app/Hooks/useFrameFocus";
import useZoomEffect from "@/app/Hooks/useZoomEffect";

const Frame = ({ imgIndex, img }) => {
  useFrameFocus(".frame");
  useZoomEffect(".frame");
  return (
    <div className="frame scale-110 opacity-0" key={imgIndex}>
      <OptimizedImage
        width={500}
        height={500}
        quality={75}
        className="h-auto max-w-full rounded-lg"
        src={`/images/${img}`}
        alt={`Gallery Image ${imgIndex + 1}`}
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 25vw"
      />
    </div>
  );
};

export default Frame;
