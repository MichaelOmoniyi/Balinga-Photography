import React from "react";
import Image from "next/image";
import Btn from "./Btn";

const Connect = () => {
  return (
    <div className="sectionEnclosed w-full h-full md:h-[calc(70vh)] lg:h-[calc(90vh)] bg-black dark:bg-slate-50 text-slate-50 dark:text-gray-700 md:grid md:grid-rows-3 md:grid-cols-2 md:mt-12">
      <div className="mb-2 md:mb-0 md:pr-8 md:row-start-1 md:col-start-1">
        <h1 className="transitionEffect scale-110 opacity-0 font-mono font-semibold uppercase text-base">
          Natural Beauty Through a Lens
        </h1>
      </div>
      <div className="transitionEffect scale-110 opacity-0 w-full h-[calc(100vw)] md:h-full mb-2 md:mb-0 md:row-span-3 md:col-start-2">
        <Image
          src="/images/portfolio/birthday/12/IMG_2490.jpg"
          width={500}
          height={500}
          quality={100}
          unoptimized
          className="w-full h-full object-cover"
        />
      </div>
      <div className="transitionEffect scale-110 opacity-0 mb-4 md:mb-0 md:pr-8 md:row-start-2 md:col-start-1">
        <h1 className="text-3xl font-serif">
          Visions of life inspired by views
        </h1>
      </div>
      <div className="transitionEffect scale-110 opacity-0 text-left md:pr-8 md:row-start-3 md:col-start-1 flex flex-col justify-end">
        <Btn text={"LET'S CONNECT"} href={"/contact"} />
      </div>
    </div>
  );
};

export default Connect;
