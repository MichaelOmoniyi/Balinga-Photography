"use client";
import React, { useState, useEffect, useCallback } from "react";
import OptimizedImage from "./OptimizedImage";
import Btn from "./Btn";
import usePerformanceMonitor from "@/app/Hooks/usePerformanceMonitor";
import categories from "@/app/data/categories";

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
  usePerformanceMonitor('Carousel');
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [loadedImages, setLoadedImages] = useState(new Set([0]));
  const [isLoading, setIsLoading] = useState(true);
  const totalSlides = data.length;

  // Optimized preload function
  const preloadImage = useCallback((index) => {
    if (!loadedImages.has(index)) {
      const img = new Image();
      img.onload = () => {
        setLoadedImages(prev => new Set([...prev, index]));
        if (index === 0) setIsLoading(false);
      };
      img.src = `/images/${data[index].img[0]}`;
    }
  }, [data, loadedImages]);

  // Memoize slide navigation functions
  const goToSlide = useCallback((index) => {
    if (index === currentIndex) return;
    setCurrentIndex(index);
    preloadImage((index + 1) % totalSlides);
  }, [currentIndex, totalSlides, preloadImage]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      const next = (prev + 1) % totalSlides;
      preloadImage((next + 1) % totalSlides);
      return next;
    });
  }, [totalSlides, preloadImage]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      const next = prev === 0 ? totalSlides - 1 : prev - 1;
      preloadImage((next + 1) % totalSlides);
      return next;
    });
  }, [totalSlides, preloadImage]);

  useEffect(() => {
    // Preload first two images immediately
    preloadImage(0);
    preloadImage(1);
  }, [preloadImage]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setIsVisible(entries[0].isIntersecting);
      },
      { threshold: 0.5 }
    );

    const carouselSection = document.querySelector('.carousel-section');
    if (carouselSection) {
      observer.observe(carouselSection);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isVisible, nextSlide]);

  const handleImageLoad = (index) => {
    setLoadedImages(prev => new Set([...prev, index]));
    if (index === currentIndex) {
      setIsLoading(false);
    }
  };

  return (
    <div className="carousel-section relative w-full h-[calc(100vh-5.5rem)] mt-20">
      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-50">
          <div className="w-8 h-8 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
        </div>
      )}

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
            <OptimizedImage
              src={`/images/${category.img[0]}`}
              width={1920}
              height={1080}
              quality={75}
              priority={index === 0}
              sizes="100vw"
              className={`${
                index === 0
                  ? "relative w-full h-[100vh] object-cover"
                  : "relative w-auto h-[100vh] object-cover mr-auto ml-auto z-10"
              }`}
              alt={category.title || `Slide ${index + 1}`}
              onLoad={() => handleImageLoad(index)}
            />
            {index === 0 ? null : (
              <div className="overlay absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-20">
                <div className="position absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
                <div className="relative flex flex-col w-full h-full justify-center items-center text-white z-30 px-12">
                  <h1 className="text-4xl md:text-5xl text-center font-bold mb-1">
                    {category.title}
                  </h1>
                  <p className="text-base md:text-xl text-center mb-4 md:mb-6">
                    {category.subtitle}
                  </p>
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
        className="absolute top-1/2 left-2 transform -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 transition-colors duration-300"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        ❮
      </button>
      <button
        className="absolute top-1/2 right-2 lg:mr-4 transform -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 transition-colors duration-300"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        ❯
      </button>
    </div>
  );
};

export default CarouselComponent;
