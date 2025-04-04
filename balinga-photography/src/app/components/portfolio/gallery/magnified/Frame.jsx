import React from "react";
import Image from "next/image";

const Frame = () => {
  return (
    <div>
      <Image
        src={src}
        width={500}
        height={500}
        quality={100}
        unoptimized
        className="w-full h-full object-cover"
        alt={`Slide ${index + 1}`}
      />
    </div>
  );
};

export default Frame;
