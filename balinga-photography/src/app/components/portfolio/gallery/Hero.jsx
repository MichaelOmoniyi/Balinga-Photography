import React from "react";
import Btn from "./Btn";
import OptimizedImage from "../../OptimizedImage";

const Hero = ({ filteredData }) => {
  return (
    <div className="relative w-full h-[calc(100vh)]">
      <div
        className="bg-img absolute top-0 left-0 w-full h-full bg-center bg-cover blur-sm z-0"
        style={{ backgroundImage: `url(/images/${filteredData[0]?.img[0]})` }}
      ></div>
      <OptimizedImage
        width={500}
        height={500}
        quality={75}
        className="relative w-auto h-full object-cover mr-auto ml-auto z-10"
        src={`/images/${filteredData[0]?.img[0]}`}
          alt="Gallery Hero Photograph"
        sizes="100vw"
      />
      <div className="overlay absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-20">
        <div className="position absolute top-0 left-0flex w-full h-full bg-black opacity-50"></div>
        <div className="relative flex flex-col w-full h-full justify-center items-center text-white px-6 z-30">
          <h1 className="text-5xl text-center font-bold mb-4">
            {filteredData[0]?.title}
          </h1>
          <p className="text-base text-center">{filteredData[0]?.subtitle}</p>
          <Btn text={"View Gallery"} targetId={"gallery"} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
