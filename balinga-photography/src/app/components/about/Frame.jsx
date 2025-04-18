import React from "react";
import Image from "next/image";

const Frame = ({ id, img }) => {
  return (
    <a href={`/client-area/gallery/${id}`} target="_blank">
      <div className="frame scale-110 opacity-0">
        <Image
          width={500}
          height={500}
          quality={100}
          unoptimized
          class="h-auto max-w-full rounded-lg"
          src={img}
          alt="gallery photos"
        />
      </div>
    </a>
  );
};

export default Frame;
