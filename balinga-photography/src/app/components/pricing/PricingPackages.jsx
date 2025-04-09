import React from "react";
import Image from "next/image";

const PricingPackages = () => {
  return (
    <div className="section">
      <h1 className="transitionEffect scale-110 opacity-0 font-mono uppercase text-center text-lg mb-4 dark:text-slate-50">
        Pricing & Packages
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="imageFrame relative w-full h-[calc(80vh)] md:h-[calc(80vh)] hover:cursor-pointer">
          <Image
            src="/images/portfolio/traditional-wedding/1/IMG_2616.jpg"
            width={500}
            height={500}
            quality={100}
            unoptimized
            className="relative transitionEffect scale-110 opacity-0 w-full h-full object-cover mb-2"
          />
          <div className="overlay absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="initial relative w-full h-full flex flex-col justify-center items-center gap-2 bg-black/50 text-white text-lg font-serif translate-y-0 opacity-100 transition duration-500">
              <h1 className="font-semibold">Engagement Pictures</h1>
              <span>from: $1500</span>
            </div>
            <div className="second relative w-full h-full flex flex-col justify-end items-center gap-2 px-8 pb-12 bg-slate-100/70 text-lg font-serif translate-y-0 opacity-0 transition duration-500">
              <div>
                <div className="flex flex-col justify-center items-center gap-1 text-gray-700 mb-6">
                  <h1 className="font-semibold">Engagement Pictures</h1>
                  <span>from: $1500</span>
                </div>
                <p className="text-base text-center text-gray-600">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Inventore, animi obcaecati repudiandae excepturi, aspernatur
                  qui esse odit corrupti nobis magni tempore mollitia ratione
                  voluptas aliquam ducimus beatae quisquam assumenda repellendus
                  laborum accusamus? Officiis hic ea modi voluptatem, neque
                  numquam.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="imageFrame relative w-full h-[calc(80vh)] md:h-[calc(80vh)] hover:cursor-pointer">
          <Image
            src="/images/portfolio/wedding/2/IMG_2690.jpg"
            width={500}
            height={500}
            quality={100}
            unoptimized
            className="relative transitionEffect scale-110 opacity-0 w-full h-full object-cover mb-2"
          />
          <div className="overlay absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="initial relative w-full h-full flex flex-col justify-center items-center gap-2 bg-black/50 text-white text-lg font-serif translate-y-0 opacity-100 transition duration-500">
              <h1 className="font-semibold">Wedding Pictures</h1>
              <span>from: $1500</span>
            </div>
            <div className="second relative w-full h-full flex flex-col justify-end items-center gap-2 px-8 pb-12 bg-slate-100/70 text-lg font-serif translate-y-0 opacity-0 transition duration-500">
              <div>
                <div className="flex flex-col justify-center items-center gap-1 text-gray-700 mb-6">
                  <h1 className="font-semibold">Engagement Pictures</h1>
                  <span>from: $1500</span>
                </div>
                <p className="text-base text-center text-gray-600">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Inventore, animi obcaecati repudiandae excepturi, aspernatur
                  qui esse odit corrupti nobis magni tempore mollitia ratione
                  voluptas aliquam ducimus beatae quisquam assumenda repellendus
                  laborum accusamus? Officiis hic ea modi voluptatem, neque
                  numquam.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="imageFrame relative w-full h-[calc(80vh)] md:h-[calc(80vh)] hover:cursor-pointer">
          <Image
            src="/images/portfolio/birthday/6/_MG_9847.jpg"
            width={500}
            height={500}
            quality={100}
            unoptimized
            className="relative transitionEffect scale-110 opacity-0 w-full h-full object-cover mb-2"
          />
          <div className="overlay absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="initial relative w-full h-full flex flex-col justify-center items-center gap-2 bg-black/50 text-white text-lg font-serif translate-y-0 opacity-100 transition duration-500">
              <h1 className="font-semibold">Birthday Pictures</h1>
              <span>from: $1500</span>
            </div>
            <div className="second relative w-full h-full flex flex-col justify-end items-center gap-2 px-8 pb-12 bg-slate-100/70 text-lg font-serif translate-y-0 opacity-0 transition duration-500">
              <div>
                <div className="flex flex-col justify-center items-center gap-1 text-gray-700 mb-6">
                  <h1 className="font-semibold">Engagement Pictures</h1>
                  <span>from: $1500</span>
                </div>
                <p className="text-base text-center text-gray-600">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Inventore, animi obcaecati repudiandae excepturi, aspernatur
                  qui esse odit corrupti nobis magni tempore mollitia ratione
                  voluptas aliquam ducimus beatae quisquam assumenda repellendus
                  laborum accusamus? Officiis hic ea modi voluptatem, neque
                  numquam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPackages;
