"use client";
import React, { useState, useEffect, useCallback, memo } from "react";
import OptimizedImage from "../OptimizedImage";
import usePerformanceMonitor from "@/app/Hooks/usePerformanceMonitor";
import categories from "@/app/data/categories";

const carouselData = [
  categories.Highlight,
  categories.Wedding[1],
  categories.Birthday[5],
  categories.Convocation[0],
  categories.Family[0],
  categories.TraditionalWedding[0],
];

// Memoized navigation buttons
const NavigationButton = memo(({ direction, onClick, ariaLabel }) => (
  <button
    onClick={onClick}
    className="flex justify-center items-center h-full cursor-pointer group focus:outline-none"
    aria-label={ariaLabel}
  >
    <span className="text-gray-400 hover:text-gray-900 dark:hover:text-gray-600 group-focus:text-gray-900">
      <svg
        className={`w-5 h-5 ${direction === 'prev' ? 'rtl:rotate-0' : 'rtl:rotate-180'}`}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d={direction === 'prev' ? "M13 5H1m0 0 4 4M1 5l4-4" : "M1 5h12m0 0L9 1m4 4L9 9"}
        />
      </svg>
      <span className="sr-only">{direction === 'prev' ? 'Previous' : 'Next'}</span>
    </span>
  </button>
));

NavigationButton.displayName = 'NavigationButton';

// Memoized carousel slide
const CarouselSlide = memo(({ category, index, isActive, onLoad }) => (
  <div
    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
      isActive ? "opacity-100" : "opacity-0 pointer-events-none"
    }`}
  >
    <div
      className="bg-img absolute top-0 left-0 w-full h-full bg-center bg-cover blur-md z-0"
      style={{ backgroundImage: `url(/images/${category.img[0]})` }}
    />
    <OptimizedImage
      src={`/images/${category.img[0]}`}
      width={1920}
      height={1080}
      quality={75}
      priority={index === 0}
      sizes="100vw"
      className={`${
        index === 0
          ? "relative w-full h-[80vh] md:h-[85vh] lg:h-[80vh] object-cover"
          : "relative w-auto h-[80vh] md:h-[85vh] lg:h-[80vh] mr-auto ml-auto z-10"
      }`}
      alt={category.title || `Slide ${index + 1}`}
      onLoad={() => onLoad(index)}
    />
    {index !== 0 && (
      <div className="overlay absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-20">
        <div className="position absolute top-0 left-0 w-full h-full bg-black opacity-50" />
        <div className="relative flex flex-col w-full h-full justify-center items-center text-white p-4 z-30">
          <h1 className="text-5xl font-bold text-center mb-4">
            {category.title}
          </h1>
          <p className="text-base text-center">{category.subtitle}</p>
        </div>
      </div>
    )}
  </div>
));

CarouselSlide.displayName = 'CarouselSlide';

const CarouselComponent = () => {
  usePerformanceMonitor('ContactCarousel');
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [loadedImages, setLoadedImages] = useState(new Set([0]));
  const [isLoading, setIsLoading] = useState(true);
  const totalSlides = carouselData.length;

  // Optimized preload function
  const preloadImage = useCallback((index) => {
    if (!loadedImages.has(index)) {
      const img = new Image();
      img.onload = () => {
        setLoadedImages(prev => new Set([...prev, index]));
        if (index === 0) setIsLoading(false);
      };
      img.src = `/images/${carouselData[index].img[0]}`;
    }
  }, [carouselData, loadedImages]);

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

    const carouselSection = document.querySelector('.contact-carousel-section');
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
    <div className="contact-carousel-section relative w-full">
      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-50">
          <div className="w-8 h-8 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
        </div>
      )}

      {/* Carousel Wrapper */}
      <div className="carousel-wrapper relative overflow-hidden">
        {carouselData.map((category, index) => (
          <CarouselSlide
            key={`${category.title}-${index}`}
            category={category}
            index={index}
            isActive={index === currentIndex}
            onLoad={handleImageLoad}
          />
        ))}
      </div>

      {/* Controls */}
      <div className="flex justify-center items-center gap-4 pt-4">
        <NavigationButton direction="prev" onClick={prevSlide} ariaLabel="Previous slide" />
        <NavigationButton direction="next" onClick={nextSlide} ariaLabel="Next slide" />
      </div>
    </div>
  );
};

export default memo(CarouselComponent);
