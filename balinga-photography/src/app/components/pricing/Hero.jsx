import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-[calc(100vh-7rem)] relative">
      <Image
        src="/images/check-out-img-1.jpg"
        width={500}
        height={500}
        quality={100}
        priority
        unoptimized
        className="w-full h-full object-cover"
        alt="Man holding fiance's hand"
      />
      <div className="absolute w-full h-full top-0 bg-black/50 text-white z-10 flex justify-center items-center font-bold text-3xl">
        Stories that linger...
      </div>
    </div>
  );
};

export default Hero;
