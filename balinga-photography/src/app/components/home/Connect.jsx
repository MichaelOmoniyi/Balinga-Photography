"use client";
import React from "react";
import useFadeIn from "@/app/Hooks/useFadeIn";
import OptimizedImage from "../OptimizedImage";

const Connect = () => {
  useFadeIn("#connect-1, #connect-2, #connect-3");

  return (
    <div>
      <section className="section connect">
        <div className="w-full h-full relative">
          <OptimizedImage
            src="/images/connect-img.jpg"
            alt="Connect Background"
            width={1920}
            height={1080}
            quality={75}
            priority={true}
            sizes="100vw"
            className="absolute top-0 left-0 inset-0 w-full h-[95vh] md:h-[70vh] lg-[100vh] object-cover"
          />
          <div className="overlay absolute inset-0 bg-black opacity-60 z-10"></div>
          <div className="connect-content relative z-20">
            <h1
              className="text-5xl font-bold text-white text-center animatable animatable--large-title animatable--animated animatable--finished"
              id="connect-1"
            >
              <span className="block">Let's</span>
              <span className="block">set</span>
              <span className="block">out</span>
              <span className="block">on</span>
              <span className="block">a</span>
              <span className="block">photographic</span>
              <span className="block">adventure</span>
              <span className="block">together</span>
            </h1>
            <div className="mt-6">
              <h5
                className="flex justify-center gap-2 text-lg font-medium text-gray-100 text-center"
                id="connect-2"
              >
                <span className="inline-block">Portrait</span>
                <span className="inline-block">of</span>
                <span className="inline-block">nature</span>
                <span className="inline-block">and</span>
                <span className="inline-block">people</span>
              </h5>
              <button className="btn" id="connect-3">
                <a href="/contact">Let's connect</a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Connect;
