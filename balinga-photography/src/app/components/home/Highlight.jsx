"use client";
import React from "react";
import useFadeIn from "@/app/Hooks/useFadeIn";
import OptimizedImage from "../OptimizedImage";

const Highlight = () => {
  useFadeIn("#highlight-1, #highlight-2, #highlight-3, #highlight-4");

  return (
    <div>
      <section className="section highlight">
        <div className="highlight-container">
          <span className="highlight-images">
            
            <div className="highlight-1" id="highlight-1">
              <a href="/client-area/gallery/905839"
                target="_blank"
                rel="noopener noreferrer"><OptimizedImage
                src="/images/highlight-1.jpg"
                alt="Highlight 1"
                width={1920}
                height={1080}
                quality={75}
                priority={true}
                sizes="100vw"
                className="w-full h-[100vw] lg:h-[70vh] object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              /></a>
            </div>
            <div className="highlight-2" id="highlight-2">
              <a href="/client-area/gallery/823492"
                target="_blank"
                rel="noopener noreferrer"><OptimizedImage
                src="/images/highlight-2.jpg"
                alt="Highlight 2"
                width={1920}
                height={1080}
                quality={75}
                sizes="100vw"
                className="w-full h-[100vw] lg:h-[70vh] object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              /></a>
            </div>
            <div className="highlight-3" id="highlight-3">
              <a href="/client-area/gallery/905848"
                target="_blank"
                rel="noopener noreferrer"><OptimizedImage
                src="/images/highlight-3.jpg"
                alt="Highlight 3"
                width={1920}
                height={1080}
                quality={75}
                sizes="100vw"
                className="w-full h-[100vw] lg:h-[70vh] object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              /></a>
            </div>
            <div className="highlight-4" id="highlight-4">
              <a href="/client-area/gallery/905837"
                target="_blank"
                rel="noopener noreferrer"><OptimizedImage
                src="/images/highlight-4.jpg"
                alt="Highlight 4"
                width={1920}
                height={1080}
                quality={75}
                sizes="100vw"
                className="w-full h-[100vw] lg:h-[90vh] object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                style={{ objectPosition: "0 -5rem" }}
              /></a>
            </div>
          </span>
          <h4 className="text-white text-5xl bg-black/70">@balinga</h4>
        </div>
      </section>
    </div>
  );
};

export default Highlight;
