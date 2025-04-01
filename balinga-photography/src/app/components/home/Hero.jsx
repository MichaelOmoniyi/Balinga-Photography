"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Hero = () => {
  const images = [
    "/images/hero-img-1.jpg",
    "/images/hero-img-2.jpg",
    "/images/hero-img-3.jpg",
    "/images/hero-img-4.jpg",
    "/images/hero-img-5.jpg",
  ];
  const totalSlides = images.length;
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Auto slide every 5 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const goPrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  return (
    <section className="relative w-full h-[calc(100vh-5.5rem)] mt-20">
      <div className="relative w-full h-full">
        {/* Carousel Wrapper */}
        <div className="relative w-full h-full overflow-hidden">
          {images.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-700 ease-in-out ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={src}
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

        {/* Slider Indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-white scale-110" : "bg-gray-400"
              }`}
              aria-label={`Slide ${index + 1}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>

        {/* Slider Controls */}
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50"
          onClick={goPrev}
        >
          ❮
        </button>
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50"
          onClick={goNext}
        >
          ❯
        </button>
      </div>
    </section>
  );
};

export default Hero;
