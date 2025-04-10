import React from "react";
import Image from "next/image";

const MiniGallery = () => {
  return (
    <div className="section text-center grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
      <div>
        <Image
          src="/images/portfolio/birthday/12/IMG_2444.jpg"
          width={500}
          height={500}
          quality={100}
          unoptimized
          className="w-full h-[calc(100vw)] md:h-[calc((100vw/2)-2rem)] lg:h-[calc((100vw/2)-8rem)] object-cover"
        />
        <p className="my-4 text-gray-400">Images that linger</p>
      </div>
      <div>
        <Image
          src="/images/portfolio/birthday/7/CF3A9449.jpg"
          width={500}
          height={500}
          quality={100}
          unoptimized
          className="w-full h-[calc(100vw)] md:h-[calc((100vw/2)-2rem)] lg:h-[calc((100vw/2)-8rem)] object-cover"
        />
        <p className="my-4 text-gray-400">Images that linger</p>
      </div>
    </div>
  );
};

export default MiniGallery;
