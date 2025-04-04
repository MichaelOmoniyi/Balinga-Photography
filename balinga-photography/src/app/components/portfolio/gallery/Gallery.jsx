import React, { useEffect, useState } from "react";
import Image from "next/image";
import Frame from "./Frame";
import Main from "./magnified/Main";

const Gallery = ({ images, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [colIndex, setColIndex] = useState(0);

  const closeCarouselGallery = () => {
    setIsOpen(false);
  };

  // Handles navbar dropdown/display
    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
  
      return () => {
        document.body.style.overflow = "auto";
      };
    }, [isOpen]);

  // Split images into 4 columns
  const columns = [[], [], [], []];

  images.forEach((img, index) => {
    columns[index % 4].push(img);
  });

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4" id="gallery">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="grid gap-4">
            {column.map((img, imgIndex) => (
              <div
              className="hover:cursor-pointer"
                onClick={() => {
                  setCurrentIndex(imgIndex);
                  setColIndex(colIndex)
                  setIsOpen(true);
                  console.log("Clicked-imgIndex: ", imgIndex)
                  console.log("Clicke-colIndex: ", colIndex)
                }}
              >
                <Frame imgIndex={imgIndex} img={img} />
              </div>
            ))}
          </div>
        ))}
      </div>
      <Main
        images={columns}
        title={title}
        isOpen={isOpen}
        currentIndex={currentIndex}
        colIndex={colIndex}
        handleCloseCarouselGallery={closeCarouselGallery}
      />
    </div>
  );
};

export default Gallery;
