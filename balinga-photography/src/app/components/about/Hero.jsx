"use client";
import React from "react";
import Button from "../Button";
import useZoomEffect from "@/app/Hooks/useZoomEffect";
import OptimizedImage from "../OptimizedImage";

const Hero = () => {
  useZoomEffect(".transitionEffect");

  return (
    <div className="flex justify-center items-center w-full flex-col md:flex-row md:h-[calc(70vh)] lg:h-[calc(110vh)] md:p-10">
      <div className="transitionEffect relative w-full h-[calc(100vw)] md:h-full bg-black scale-110 opacity-0 overflow-hidden">
        <OptimizedImage
          src="/images/Smooth Portrait.jpg"
          alt="Smooth Portrait"
          width={1920}
          height={1080}
          quality={75}
          priority={true}
          sizes="100vw"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full h-[calc(100vw)] md:h-full flex flex-col justify-between items-center text-gray-600 text-center p-6 md:py-12 lg:py-20 bg-slate-100">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="transitionEffect text-3xl md:text-4xl font-bold scale-110 opacity-0">
            Nice to meet You
          </h1>
          <p className="transitionEffect text-lg md:text-xl font-mono scale-110 opacity-0">
            I AM YOUR PHOTOGRAPHY
          </p>
        </div>
        <div>
          <p className="transitionEffect scale-110 opacity-0 mb-4">
            Let me capture the love in your eyes, and go beyond to uncover the
            raw beauty of your spirit.
          </p>
          <Button text={"Let's connect"} href={"/contact"} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
