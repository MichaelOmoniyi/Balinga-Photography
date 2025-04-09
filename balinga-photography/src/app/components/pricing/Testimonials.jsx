"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import data from "@/app/data/miniTestimonials";

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = data.length;

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []); // Run only once on mount

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="section relative w-full h-full md:h-[calc(70vh)] lg:h-[calc(90vh)] md:grid md:grid-cols-2 md:grid-rows-3 text-gray-600 dark:text-slate-50">
      <div className="mb-4 md:mb-0 md:row-start-1 md:col-start-2">
        <h1 className="font-mono uppercase text-right text-lg">Testimonials</h1>
      </div>

      {/* Image Carousel */}
      <div className="w-full h-[calc(100vw)] md:h-full relative overflow-hidden md:row-span-3 md:col-start-1">
        {data.map((testimonial, index) => (
          <div
            key={index}
            className={`absolute inset-0 h-full w-full transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={`${testimonial.img}`}
              width={500}
              height={500}
              quality={100}
              unoptimized
              className="w-full h-full object-cover"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Text Carousel */}
      <div className="w-full h-[calc(55vw)] md:h-full relative py-4 md:py-0 md:row-start-2 md:col-start-2 overflow-hidden">
        {data.map((testimonial, index) => (
          <div
            key={index}
            className={`absolute inset-0 h-full w-full flex flex-col justify-between py-4 md:py-0 md:px-4 lg:px-8 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <h1 className="font-medium font-mono text-lg">
              {testimonial.title}
            </h1>
            <p>{testimonial.description}</p>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="w-full flex justify-between items-center col-span-2 py-4 px-6 md:py-0 md:px-4 lg:px-8 md:row-start-3 md:col-start-2">
        <button
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50"
          onClick={prevSlide}
        >
          ❮
        </button>

        <div className="space-x-3">
          {data.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-white scale-110" : "bg-gray-400"
              }`}
              aria-label={`Slide ${index + 1}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>

        <button
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50"
          onClick={nextSlide}
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default CarouselComponent;
