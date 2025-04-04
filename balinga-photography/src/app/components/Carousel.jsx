"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import categories from "@/app/data/categories";
import Btn from "./Btn";

const Highlight = categories.Highlight;
const Wedding = categories.Wedding[1];
const Birthday = categories.Birthday[5];
const Convocation = categories.Convocation[0];
const Family = categories.Family[0];
const TraditionalWedding = categories.TraditionalWedding[0];

const data = [
  Highlight,
  Wedding,
  Birthday,
  Convocation,
  Family,
  TraditionalWedding,
];

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = data.length;

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="relative w-full h-[calc(100vh-5.5rem)] mt-20">
      {/* Carousel Wrapper */}
      <div className="w-full h-full relative overflow-hidden">
        {data.map((category, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="bg-img absolute top-0 left-0 w-full h-full bg-center bg-cover blur-md z-0"
              style={{ backgroundImage: `url(/images/${category.img[0]})` }}
            ></div>
            <Image
              src={`/images/${category.img[0]}`}
              width={500}
              height={500}
              quality={100}
              unoptimized
              className={`${
                index === 0
                  ? "relative w-full h-full object-cover"
                  : "relative w-auto h-full mr-auto ml-auto z-10"
              }`}
              alt={`Slide ${index + 1}`}
            />
            {index === 0 ? null : (
              <div className="overlay absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-20">
                <div className="position absolute top-0 left-0flex w-full h-full bg-black opacity-60"></div>
                <div className="relative flex flex-col w-full h-full justify-center items-center text-white z-30 px-12">
                  <h1 className="text-4xl md:text-5xl text-center font-bold mb-1">
                    {category.title}
                  </h1>
                  <p className="text-base md:text-xl text-center mb-4 md:mb-6">
                    {category.subtitle}
                  </p>
                  {/* <button>
                    <a
                      href={category.href}
                      className="px-8 py-2 text-lg md:text-xl lg:text-2xl rounded-3xl border border-solid bg-transparent border-white text-white transition-all hover:bg-white hover:text-black"
                    >
                      View Portfolio
                    </a>
                  </button> */}
                  <Btn
                    text={"View Portfolio"}
                    href={`/client-area/gallery/${category.id}`}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50"
        onClick={prevSlide}
      >
        ❮
      </button>
      <button
        className="absolute top-1/2 right-2 lg:mr-4 transform -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50"
        onClick={nextSlide}
      >
        ❯
      </button>
    </div>
  );
};

export default CarouselComponent;
