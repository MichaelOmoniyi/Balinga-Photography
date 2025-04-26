import React from "react";
import OptimizedImage from "../OptimizedImage";

const Frame = ({ id, img }) => {
  return (
    <a href={`/client-area/gallery/${id}`} target="_blank">
      <div className="frame scale-110 opacity-0">
        <OptimizedImage
        width={500}
        height={500}
        quality={75}
        className="h-auto max-w-full rounded-lg"
        src={img}
        alt="gallery photos"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      </div>
    </a>
  );
};

export default Frame;
