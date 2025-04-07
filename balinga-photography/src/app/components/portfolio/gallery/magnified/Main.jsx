import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { X } from "lucide-react";

//Lazy Load component
const CarouselGallery = dynamic(() => import("./Carousel"), {
  loading: () => (
    <div className="w-full p-4 flex justify-center items-center">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  ),
  ssr: false,
});

const Main = ({
  images,
  title,
  isOpen,
  colIndex,
  currentIndex,
  handleCloseCarouselGallery,
}) => {
  const [currentSlide, setCurrentSlide] = useState(currentIndex);
  const [currentCol, setCurrentCol] = useState(colIndex);
  useEffect(() => {
    console.log("Main-currentIndex: ", currentIndex);
    setCurrentCol(colIndex);
    setCurrentSlide(currentIndex);
    console.log("Main-colIndex: ", colIndex);
  }, [colIndex, currentIndex]);
  return (
    <div
      className={`${
        isOpen ? "translate-y-0" : "-translate-y-full opacity-0"
      } carouselGallery flex flex-col gap-4 justify-between fixed inset-0 w-full h-screen top-0 left-0 p-6 md:p-8 md:px-12 bg-white/95 dark:bg-black/95 text-gray-600 dark:text-gray-200 overflow-auto`}
    >
      <div className="flex justify-center items-center">
        <h1 className="font-bold text-xl">{title}</h1>
        {/* Close Button */}
        <button
          className="absolute top-5 right-5 text-gray-400 dark:text-gray-200 text-2xl"
          onClick={handleCloseCarouselGallery}
        >
          <X size={32} />
        </button>
      </div>
      <div className="w-full h-[calc(100vh-8rem)]">
        <CarouselGallery
          images={images}
          colIndex={currentCol}
          currentIndex={currentSlide}
        />
      </div>
    </div>
  );
};

export default Main;
