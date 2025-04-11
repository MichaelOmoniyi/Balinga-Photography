import React from "react";
import Image from "next/image";

const Pricing = () => {
  return (
    <div className="section w-full relative">
      <div className="relaive w-full h-[calc(100vw)] md:h-[calc(80vh)]">
        <Image
          src="/images/portfolio/wedding/2/IMG_2683.jpg"
          width={500}
          height={500}
          quality={100}
          unoptimized
          className="w-full h-full object-cover md:object-top"
          alt="Wedding photograph"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-50 flex justify-center items-center p-4 md:px-8 lg:px-24">
          <div className="w-full flex flex-col lg:flex-row gap-4 lg:justify-between">
            <div className="w-full flex flex-col gap-4 text-center lg:text-left">
              <h1 className="text-3xl lg:text-5xl font-medium text-white font-serif mb-2">
                Portrait and Wedding Photography
              </h1>
              <span className="text-base lg:text-lg font-extrabold text-white">
                SEE MY OFFERINGS
              </span>
            </div>
            <div className="text-center lg:text-right lg:flex lg:items-center">
              <a href="/pricing" className="text-white font-medium text-lg hover:cursor-pointer">
                <button className="w-10 h-10">❯</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
