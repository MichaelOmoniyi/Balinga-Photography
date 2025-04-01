"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image"

const images = [
  "/images/contact-page/Balinga-Photography-Logo-2.png",
  "/images/contact-page/img-2.jpg",
  "/images/contact-page/img-3.jpg",
  "/images/contact-page/img-4.jpg",
  "/images/contact-page/img-5.jpg",
];

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = images.length;

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
    <div className="relative w-full">
      {/* Carousel Wrapper */}
      <div className="carousel-wrapper relative overflow-hidden">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="bg-img absolute top-0 left-0 w-full h-full bg-center bg-cover blur-md z-0"
              style={{ backgroundImage: `url(${src})` }}
            ></div>
            <Image
              src={src}
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
                <div className="position absolute top-0 left-0flex w-full h-full bg-black opacity-50"></div>
                <div className="relative flex flex-col w-full h-full justify-center items-center text-white z-30">
                  <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
                  <p className="text-base">Your story begins here...</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex justify-center items-center pt-4">
        <button
          onClick={prevSlide}
          className="flex justify-center items-center me-4 h-full cursor-pointer group focus:outline-none"
        >
          <span class="text-gray-400 hover:text-gray-900 dark:hover:text-gray-600 group-focus:text-gray-900">
            <svg
              class="rtl:rotate-180 w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 5H1m0 0 4 4M1 5l4-4"
              />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          onClick={nextSlide}
          className="flex justify-center items-center h-full cursor-pointer group focus:outline-none"
        >
          <span class="text-gray-400 hover:text-gray-900 dark:hover:text-gray-600 group-focus:text-gray-900">
            <svg
              class="rtl:rotate-180 w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default CarouselComponent;
