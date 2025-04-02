import React from "react";
import useFrameFocus from "@/app/Hooks/useFrameFocus";
import useZoomEffect from "@/app/Hooks/useZoomEffect";
import Image from "next/image";

const Gallery = () => {
  useFrameFocus(".frame");
  useZoomEffect(".frame")

  return (
    <div>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="frame transitionEffect scale-110 opacity-0">
          <Image
            width={500}
            height={500}
            quality={100}
            unoptimized
            class="h-auto max-w-full rounded-lg"
            src="/images/mini-portfolio/img-1.jpg"
            alt=""
          />
        </div>
        <div className="frame transitionEffect scale-110 opacity-0">
          <Image
            width={500}
            height={500}
            quality={100}
            unoptimized
            class="h-auto max-w-full rounded-lg"
            src="/images/mini-portfolio/img-2.jpg"
            alt=""
          />
        </div>
        <div className="frame transitionEffect scale-110 opacity-0">
          <Image
            width={500}
            height={500}
            quality={100}
            unoptimized
            class="h-auto max-w-full rounded-lg"
            src="/images/mini-portfolio/img-3.jpg"
            alt=""
          />
        </div>
        <div className="frame transitionEffect scale-110 opacity-0">
          <Image
            width={500}
            height={500}
            quality={100}
            unoptimized
            class="h-auto max-w-full rounded-lg"
            src="/images/mini-portfolio/img-4.jpg"
            alt=""
          />
        </div>
        <div className="frame transitionEffect scale-110 opacity-0">
          <Image
            width={500}
            height={500}
            quality={100}
            unoptimized
            class="h-auto max-w-full rounded-lg"
            src="/images/mini-portfolio/img-5.jpg"
            alt=""
          />
        </div>
        <div className="frame transitionEffect scale-110 opacity-0">
          <Image
            width={500}
            height={500}
            quality={100}
            unoptimized
            class="h-auto max-w-full rounded-lg"
            src="/images/mini-portfolio/img-6.jpg"
            alt=""
          />
        </div>
        <div className="frame transitionEffect scale-110 opacity-0">
          <Image
            width={500}
            height={500}
            quality={100}
            unoptimized
            class="h-auto max-w-full rounded-lg"
            src="/images/mini-portfolio/img-7.jpg"
            alt=""
          />
        </div>
        <div className="frame transitionEffect scale-110 opacity-0">
          <Image
            width={500}
            height={500}
            quality={100}
            unoptimized
            class="h-auto max-w-full rounded-lg"
            src="/images/mini-portfolio/img-8.jpg"
            alt=""
          />
        </div>
        <div className="frame transitionEffect scale-110 opacity-0">
          <Image
            width={500}
            height={500}
            quality={100}
            unoptimized
            class="h-auto max-w-full rounded-lg"
            src="/images/mini-portfolio/img-9.jpg"
            alt=""
          />
        </div>
        <div className="frame transitionEffect scale-110 opacity-0">
          <Image
            width={500}
            height={500}
            quality={100}
            unoptimized
            class="h-auto max-w-full rounded-lg"
            src="/images/mini-portfolio/img-10.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
