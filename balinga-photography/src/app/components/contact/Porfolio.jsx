"use client";
import React from "react";
import useFrameFocus from "@/app/Hooks/useFrameFocus";
import useZoomEffect from "@/app/Hooks/useZoomEffect";
import Btn from "../Btn";

const Porfolio = () => {
  useFrameFocus(".frame");
  useZoomEffect(".frame");

  return (
    <div className="sectionEnclosed bg-white">
      <div class="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-8">
        <div
          className="frame w-full h-[calc(100vw) lg:h-[calc(90vh)] bg-cover bg-center bg-no-repeat bg-black scale-110 opacity-0"
          style={{ backgroundImage: "url('/images/contact-page/img-6.jpg')" }}
        >
          <div className="relative flex flex-col w-full h-full justify-end items-center text-white pb-8">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-0"></div>
            <div className="flex flex-col justify-center items-center gap-4 z-10">
              <h1 className="text-5xl font-bold">Wedding</h1>
              <p className="text-lg">Elegance and Romance</p>
            </div>
            <Btn
              text={"View Portfolio"}
              href={"/client-area/?category=wedding"}
            />
          </div>
        </div>
        <div
          className="frame w-full h-[calc(100vw)] lg:h-[calc(90vh)] bg-cover bg-center bg-no-repeat bg-black scale-110 opacity-0"
          style={{ backgroundImage: "url('/images/contact-page/img-7.jpg')" }}
        >
          <div className="relative flex flex-col w-full h-full justify-end items-center text-white pb-8">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-0"></div>
            <div className="flex flex-col justify-center items-center gap-4 z-10">
              <h1 className="text-5xl font-bold">Birthdays</h1>
              <p className="text-lg">Confidence and Clarity</p>
            </div>
            <Btn
              text={"View Portfolio"}
              href={"/client-area/?category=birthday"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Porfolio;
