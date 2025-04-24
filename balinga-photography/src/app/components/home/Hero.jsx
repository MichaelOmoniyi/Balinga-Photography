"use client";
import React, { useEffect, useState, useCallback } from "react";
import OptimizedImage from "../OptimizedImage";
import usePerformanceMonitor from "@/app/Hooks/usePerformanceMonitor";

const Hero = () => {
  usePerformanceMonitor('Hero');

  const images = [
    {
      src: "/images/hero-img-1.jpg",
      alt: "Balinga Photography Hero Image 1"
    },
    {
      src: "/images/hero-img-2.jpg",
      alt: "Balinga Photography Hero Image 2"
    },
    {
      src: "/images/hero-img-3.jpg",
      alt: "Balinga Photography Hero Image 3"
    },
    {
      src: "/images/hero-img-4.jpg",
      alt: "Balinga Photography Hero Image 4"
    },
    {
      src: "/images/hero-img-5.jpg",
      alt: "Balinga Photography Hero Image 5"
    }
  ];

  const totalSlides = images.length;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [loadedImages, setLoadedImages] = useState(new Set([0]));
  const [isLoading, setIsLoading] = useState(true);

  // Optimized preload function
  const preloadImage = useCallback((index) => {
    if (!loadedImages.has(index)) {
      const img = new Image();
      img.onload = () => {
        setLoadedImages(prev => new Set([...prev, index]));
        if (index === 0) setIsLoading(false);
      };
      img.src = images[index].src;
    }
  }, [images, loadedImages]);

  // Memoize slide navigation functions
  const goToSlide = useCallback((index) => {
    if (index === currentSlide) return;
    setCurrentSlide(index);
    preloadImage((index + 1) % totalSlides);
  }, [currentSlide, totalSlides, preloadImage]);

  const goNext = useCallback(() => {
    setCurrentSlide((prev) => {
      const next = (prev + 1) % totalSlides;
      preloadImage((next + 1) % totalSlides);
      return next;
    });
  }, [totalSlides, preloadImage]);

  const goPrev = useCallback(() => {
    setCurrentSlide((prev) => {
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

    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
      observer.observe(heroSection);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      goNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [isVisible, goNext]);

  const handleImageLoad = (index) => {
    setLoadedImages(prev => new Set([...prev, index]));
    if (index === currentSlide) {
      setIsLoading(false);
    }
  };

  return (
    <section className="hero-section relative w-full h-[calc(100vh-5.5rem)] mt-20">
      <div className="relative w-full h-full">
        {/* Loading State */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-50">
            <div className="w-8 h-8 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
          </div>
        )}

        {/* Carousel Wrapper */}
        <div className="relative w-full h-full overflow-hidden">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-700 ease-in-out ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <OptimizedImage
                src={image.src}
                width={1920}
                height={1080}
                quality={75}
                priority={index === 0}
                sizes="100vw"
                className="w-full h-full object-cover"
                alt={image.alt}
                onLoad={() => handleImageLoad(index)}
              />
            </div>
          ))}
        </div>

        {/* Overlay */}
        <div className="absolute h-full w-full top-0 left-0 flex flex-col justify-center items-center">
          <div className="overlay absolute h-full w-full top-0 left-0 bg-gray-900 opacity-60 z-10"></div>
          <div className="flex flex-col justify-center items-center gap-2 text-white z-20 px-9">
            <h1 className="text-5xl text-center">Balinga Photography</h1>
            <p className="md:text-lg text-center">
              ...creating memories that linger
            </p>
          </div>
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
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>

        {/* Slider Controls */}
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 transition-colors duration-300"
          onClick={goPrev}
          aria-label="Previous slide"
        >
          ❮
        </button>
        <button
          className="absolute top-1/2 right-2 lg:mr-4 transform -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 transition-colors duration-300"
          onClick={goNext}
          aria-label="Next slide"
        >
          ❯
        </button>
      </div>
    </section>
  );
};

export default Hero;
