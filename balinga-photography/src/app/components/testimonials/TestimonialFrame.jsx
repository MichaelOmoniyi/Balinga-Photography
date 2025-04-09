import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

const TesimonialFrame = ({ img, title, description }) => {
  return (
    <div className="transitionEffect scale-110 opacity-0 flex flex-col gap-2 bg-slate-800/20 dark:bg-gray-800/20 shadow-xl rounded-md">
      <div className="w-full h-[calc(100vw)] md:h-full md:mb-4">
        <Image
          src={`${img}`}
          width={500}
          height={500}
          quality={100}
          unoptimized
          className="w-full h-full object-cover rounded-t-md"
        />
      </div>
      <div className="mb-4 p-4">
        <div className="mb-4">
          <Quote className="rotate-180" />
        </div>
        <p className="mb-4">{description}</p>
        <h1 className="font-medium font-mono text-right dark:text-slate-400 text-gray-800 text-lg mb-4">
          {title}
        </h1>
        <div className="flex justify-end">
          <Quote />
        </div>
      </div>
    </div>
  );
};

export default TesimonialFrame;
