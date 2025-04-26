"use client";
import { React, useEffect } from "react";
import useFadeIn from "@/app/Hooks/useFadeIn";
import useFrameFocus from "@/app/Hooks/useFrameFocus";
import usePerformanceMonitor from "@/app/Hooks/usePerformanceMonitor";
import OptimizedImage from "@/app/components/OptimizedImage";

const Photos = () => {
  usePerformanceMonitor('Photos');

  useFadeIn(
    "#photo-1, #photo-2, #photo-3, #photo-4, #photo-5, #photo-6, #photo-7, #photo-8, #photo-9",
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
      once: true
    }
  );

  useFrameFocus(".frame");

  const handleImageLoad = (img) => {
    // You can add any additional logic here when images load
    console.log(`Image loaded: ${img.src}`);
  };

  return (
    <div>
      <section className="section photos">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 w-full" id="photo-1">
              <a
                href="/client-area/gallery/905838"
                target="_blank"
                className="frame"
                rel="noopener noreferrer"
              >
                <div className="relative w-full h-[85vw] lg:h-[85vh] overflow-hidden">
                  <OptimizedImage
                    src="/images/photo-1.jpg"
                    alt="Moses Bliss and Marie Wiseborn"
                    width={1920}
                    height={1080}
                    quality={85}
                    priority
                    sizes="100vw"
                    className="object-cover lg:object-[0_16rem]"
                    onLoad={handleImageLoad}
                  />
                </div>
                <div className="photos-description">
                  <h4 className="text-gray-600 dark:text-gray-200">
                    Moses Bliss and Marie Wiseborn
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">#MMbliss24</p>
                </div>
              </a>
            </div>
          </div>
          <div className="row lg:gap-4">
            <div className="col-sm-6" id="photo-2">
              <a
                href="/client-area/gallery/905839"
                target="_blank"
                className="frame"
              >
                <div className="relative w-full h-[85vw] lg:h-[85vh] overflow-hidden">
                  <OptimizedImage
                    src="/images/photo-2.jpg"
                    alt="The Wedding"
                    width={960}
                    height={640}
                    quality={80}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    onLoad={handleImageLoad}
                  />
                </div>
                <div className="photos-description">
                  <h4 className="text-gray-600 dark:text-gray-200">
                    The Wedding
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    13 June 2021
                  </p>
                </div>
              </a>
            </div>
            <div className="col-sm-6" id="photo-3">
              <a
                href="/client-area/gallery/905846"
                target="_blank"
                className="frame"
              >
                <div className="relative w-full h-[85vw] lg:h-[85vh] overflow-hidden">
                  <OptimizedImage
                    src="/images/photo-3.jpg"
                    alt="The Jacksons"
                    width={960}
                    height={640}
                    quality={80}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    onLoad={handleImageLoad}
                  />
                </div>
                <div className="photos-description">
                  <h4 className="text-gray-600 dark:text-gray-200">
                    The Jacksons
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    13 June 2023
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 w-full" id="photo-4">
              <a
                href="/client-area/gallery/758214"
                target="_blank"
                className="frame"
              >
                <div className="relative w-full h-[85vw] lg:h-[85vh] overflow-hidden">
                  <OptimizedImage
                    src="/images/photo-4.jpg"
                    alt="Mayo and Emmanuel"
                    width={1920}
                    height={1080}
                    quality={85}
                    sizes="100vw"
                    className="object-cover lg:object-[0_11rem]"
                    onLoad={handleImageLoad}
                  />
                </div>
                <div className="photos-description">
                  <h4 className="text-gray-600 dark:text-gray-200">
                    Mayo and Emmanuel
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    13 July 2023
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="row lg:gap-4">
            <div className="col-sm-6" id="photo-5">
              <a
                href="/client-area/gallery/823493"
                target="_blank"
                className="frame"
              >
                <div className="relative w-full h-[85vw] lg:h-[85vh] overflow-hidden">
                  <OptimizedImage
                    src="/images/photo-5.jpg"
                    alt="Philip and Esther"
                    width={960}
                    height={640}
                    quality={80}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover  md:object-[0_6rem] lg:object-[0_6rem] lg:object-center"
                    onLoad={handleImageLoad}
                  />
                </div>
                <div className="photos-description">
                  <h4 className="text-gray-600 dark:text-gray-200">
                    Philip and Esther
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    13 June 2021
                  </p>
                </div>
              </a>
            </div>
            <div className="col-sm-6" id="photo-6">
              <a
                href="/client-area/gallery/905840"
                target="_blank"
                className="frame"
              >
                <div className="relative w-full h-[85vw] lg:h-[85vh] overflow-hidden">
                  <OptimizedImage
                    src="/images/photo-6.jpg"
                    alt="Dana Bridal Portfolio"
                    width={960}
                    height={640}
                    quality={80}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover md:object-[0_-8rem] lg:object-[0_-7rem]"
                    onLoad={handleImageLoad}
                  />
                </div>
                <div className="photos-description">
                  <h4 className="text-gray-600 dark:text-gray-200">
                    Dana Bridal Portfolio
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    The shoot at Leicester
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 w-full" id="photo-7">
              <a
                href="/client-area/gallery/758215"
                target="_blank"
                className="frame"
              >
                <div className="relative w-full h-[85vw] lg:h-[85vh] overflow-hidden">
                  <OptimizedImage
                    src="/images/photo-7.jpg"
                    alt="Anya Wedding"
                    width={1920}
                    height={1080}
                    quality={85}
                    sizes="100vw"
                    className="object-cover md:object-[0_10rem] lg:object-[0_20rem]"
                    onLoad={handleImageLoad}
                  />
                </div>
                <div className="photos-description">
                  <h4 className="text-gray-600 dark:text-gray-200">
                    Anya Wedding
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    Grand Hotel Leicester
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="row lg:gap-4">
            <div className="col-sm-6" id="photo-8">
              <a
                href="/client-area/gallery/905842"
                target="_blank"
                className="frame"
              >
                <div className="relative w-full h-[85vw] lg:h-[85vh] overflow-hidden">
                  <OptimizedImage
                    src="/images/photo-8.jpg"
                    alt="Siri Bridal Portrait"
                    width={960}
                    height={640}
                    quality={80}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover md:object-[0_-10rem] lg:object-[0_-10rem]"
                    onLoad={handleImageLoad}
                  />
                </div>
                <div className="photos-description">
                  <h4 className="text-gray-600 dark:text-gray-200">
                    Siri Bridal Portrait
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">London Uk</p>
                </div>
              </a>
            </div>
            <div className="col-sm-6" id="photo-9">
              <a
                href="/client-area/gallery/382176"
                target="_blank"
                className="frame"
              >
                <div className="relative w-full h-[85vw] lg:h-[85vh] overflow-hidden">
                  <OptimizedImage
                    src="/images/photo-9.jpg"
                    alt="J & S Wedding"
                    width={960}
                    height={640}
                    quality={80}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover h-[85vw] lg:h-[85vh]"
                    onLoad={handleImageLoad}
                  />
                </div>
                <div className="photos-description">
                  <h4 className="text-gray-600 dark:text-gray-200">J & S</h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    London Wedding
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Photos;
