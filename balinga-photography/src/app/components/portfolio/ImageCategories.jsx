import React, { useEffect, useState, Suspense } from "react";
import dynamic from "next/dynamic";
import data from "@/app/data/data";

const LoadingSpinner = () => (
  <div className="w-full p-4 flex justify-center items-center">
    <div className="w-10 h-10 border-4 border-gray-300 border-t-black dark:border-t-white rounded-full animate-spin"></div>
  </div>
);

// Lazy load component
const ImageFrame = dynamic(() => import("./Frame"), {
  ssr: false,
  suspense: true,
});

const ImageCategories = ({ category }) => {
  const [shuffledData, setShuffledData] = useState([]);

  useEffect(() => {
    const shuffled = [...data].sort(() => Math.random() - 0.5);
    setShuffledData(shuffled);
  }, []);

  const filteredData =
    category === "all"
      ? shuffledData
      : shuffledData.filter((frame) => frame.tag === category);

  return (
    <div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredData.length === 0 ? (
            <p className="text-center text-gray-500 col-span-3">
              No images found
            </p>
          ) : (
            filteredData.map((frame) => (
              <Suspense fallback={<LoadingSpinner />}>
                <ImageFrame
                  id={frame.id}
                  img={frame.img[0]}
                  title={frame.title}
                  subtitle={frame.subtitle}
                  key={frame.id}
                />
              </Suspense>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageCategories;
