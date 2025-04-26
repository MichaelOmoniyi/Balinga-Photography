import React from "react";
import OptimizedImage from "../OptimizedImage";

const MiniGallery = () => {
  return (
    <div className="section_ text-center grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
      <div>
        <div><OptimizedImage
                src="/images/portfolio/birthday/12/IMG_2444.jpg"
          width={500}
          height={500}
                quality={75}
                priority={true}
                sizes="100vw"
                className="w-full h-[calc(100vw)] md:h-[calc((100vw/2)-2rem)] lg:h-[calc((100vw/2)-8rem)] object-cover transitionEffect scale-110 opacity-0"
          alt="Birthday Photograph for lady with glowing background"
              /></div>
        <p className="my-4 text-gray-400">Images that linger</p>
      </div>
      <div>
        <div><OptimizedImage
                src="/images/portfolio/birthday/7/CF3A9449.jpg"
          width={500}
          height={500}
                quality={75}
                priority={true}
                sizes="100vw"
                className="w-full h-[calc(100vw)] md:h-[calc((100vw/2)-2rem)] lg:h-[calc((100vw/2)-8rem)] object-cover transitionEffect scale-110 opacity-0"
          alt="Portrait photo"
              /></div>
        <p className="my-4 text-gray-400">Images that linger</p>
      </div>
    </div>
  );
};

export default MiniGallery;
