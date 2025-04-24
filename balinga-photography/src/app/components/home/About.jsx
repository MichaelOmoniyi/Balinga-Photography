"use client";
import useFadeIn from "@/app/Hooks/useFadeIn";
import React, { useState, useEffect } from "react";
import OptimizedImage from "../OptimizedImage";
import usePerformanceMonitor from "@/app/Hooks/usePerformanceMonitor";

const About = () => {
  usePerformanceMonitor('About');
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Optimize fade-in animation
  useFadeIn(".about-content-1, .about-content-2, .about-image", {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });

  // Preload the image
  useEffect(() => {
    const img = new Image();
    img.src = "/images/Smooth Portrait.jpg";
    img.onload = () => setIsImageLoaded(true);
  }, []);

  return (
    <div>
      <section className="section about">
        <div className="container md-h-auto lg:h-[calc(75vh)]">
          <div className="about-content-1" id="about-1">
            <h1
              className="h1 text-gray-600 dark:text-gray-200 section-title revealed"
              data-reveal="right"
            >
              Hi, I'm Oni Daniel, a wedding, Lifestyle & Portrait Photographer
            </h1>
            <p className="p text-gray-500 dark:text-gray-400">
              I am based in Lagos, Nigeria (Available to travel)
            </p>
          </div>
          <div className="row about-image w-full h-[calc(100vw)] md:h-full relative overflow-hidden">
            {!isImageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
              </div>
            )}
            <OptimizedImage
              src="/images/Smooth Portrait.jpg"
              alt="Balinga Portrait"
              width={1920}
              height={1080}
              quality={85}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                isImageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setIsImageLoaded(true)}
            />
          </div>
          <div
            className="about-content-2 text-gray-500 dark:text-gray-300"
            id="about-3"
          >
            <p className="section-text">
              A passionate
              <em className="em">photograher</em>
              who are working in this field for
              <em className="em">almost a decade.</em>
              I'm ready to give you my best.
            </p>
            <p className="section-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              maxime nam veritatis quisquam facilis fugit error corporis beatae
              quos quibusdam, tempore blanditiis numquam obcaecati vero soluta
              maiores velit doloribus ipsa ducimus voluptates nihil sint qui
              hic! Inventore veritatis quam quis!
            </p>
            <p className="section-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              eaque illum! Repellat voluptas officiis minus iste obcaecati culpa
              vitae impedit voluptates aperiam! Neque vitae cupiditate
              laudantium maxime deserunt iste, quisquam, itaque a nulla aperiam
              nihil amet odit laborum repellendus tempore.
            </p>
            <p className="section-text mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
              facilis aliquid ea minus similique numquam eveniet expedita
              mollitia eaque amet?
            </p>
            <button 
              className="btn text-gray-500 dark:text-gray-300 border-gray-500 dark:border-gray-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300"
              aria-label="Learn more about Oni Daniel"
            >
              Get to know Me
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
