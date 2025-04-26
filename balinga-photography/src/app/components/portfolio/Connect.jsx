import React from "react";
import Button from "./Button";
import OptimizedImage from "../OptimizedImage";

const Connect = () => {
  return (
    <div className="bg-slate-50 flex flex-col md:gap-6 lg:gap-10 md:grid md:grid-rows-2 grid-cols-2 mt-10 md:mt-16 mb-0">
      <div className="p-4 py-4 md:row-start-1 md:col-start-1 md:p-6 md:pl-12 md:pr-0">
        <p className="font-mono text-base">
          Let’s begin this journey together, where every step is a new
          discovery.
        </p>
      </div>
      <div className="w-full h-[calc(100vw)] md:h-auto md:row-span-2 md:col-start-2">
        <OptimizedImage
        width={500}
        height={500}
        quality={75}
        className="relative h-full w-full object-cover"
        src="/images/connect-img.jpg"
          alt="Family photograph"
        sizes="100vw"
      />
      </div>
      <div className="p-4 py-4 row-start-3 pb-4 md:row-start-2 md:col-start-1 md:p-6 md:pl-12 md:pr-0">
        <h1 className="text-3xl font-bold mb-4">
          Exploring the depths of human emotion through the art of photography.
        </h1>
        <Button text={"Let's Connect"} href={"/contact"} />
      </div>
    </div>
  );
};

export default Connect;
