"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const CarouselGallery = ({ images, colIndex, currentIndex }) => {
  const totalCol = images.length;

  // Instead of initializing state with props, update them directly when props change
  const [currentCol, setCurrentCol] = useState(colIndex);
  const [currentSlide, setCurrentSlide] = useState(currentIndex);

  // Ensure state updates when props change
  useEffect(() => {
    setCurrentCol(colIndex);
    setCurrentSlide(currentIndex);
  }, [colIndex, currentIndex]); // <- Dependency array ensures re-render when props change

  const goNext = () => {
    const nextSlide = currentSlide + 1;
    const slidesInCurrent = images[currentCol].length;

    if (nextSlide >= slidesInCurrent) {
      const nextCol = (currentCol + 1) % totalCol;
      setCurrentCol(nextCol);
      setCurrentSlide(0);
    } else {
      setCurrentSlide(nextSlide);
    }
  };

  const goPrev = () => {
    const prevSlide = currentSlide - 1;

    if (prevSlide < 0) {
      const prevCol = (currentCol - 1 + totalCol) % totalCol;
      const lastSlide = images[prevCol].length - 1;
      setCurrentCol(prevCol);
      setCurrentSlide(lastSlide);
    } else {
      setCurrentSlide(prevSlide);
    }
  };

  return (
    <div className="relative flex justify-center items-center h-full w-full">
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-white/50 dark:bg-black/50 hover:bg-white/80 dark:hover:bg-black/80"
        onClick={goPrev}
      >
        ❮
      </button>

      <Image
        width={500}
        height={500}
        quality={100}
        unoptimized
        className="max-h-full w-auto"
        src={`/images/${images[currentCol]?.[currentSlide] || images[0][0]}`}
        alt={`Gallery Image ${currentSlide + 1}`}
      />

      <button
        className="absolute top-1/2 right-2 lg:mr-4 transform -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-white/50 dark:bg-black/50 hover:bg-white/80 dark:hover:bg-black/80"
        onClick={goNext}
      >
        ❯
      </button>

      <div className="absolute bottom-4 flex space-x-2">
        {images[currentCol].map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CarouselGallery;
