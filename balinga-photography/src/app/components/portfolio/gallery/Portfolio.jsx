import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import data from "@/app/data/data";

const Hero = dynamic(() => import("./Hero"), {
  loading: () => (
    <div className="w-full p-4 flex justify-center items-center">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  ),
  ssr: false,
});
const Header = dynamic(() => import("./Header"), {
  loading: () => (
    <div className="w-full p-4 flex justify-center items-center">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  ),
  ssr: false,
});
const Gallery = dynamic(() => import("./Gallery"), {
  loading: () => (
    <div className="w-full p-4 flex justify-center items-center">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  ),
  ssr: false,
});


const Portfolio = ({ id }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [shuffledImg, setShuffledImg] = useState([]);

  useEffect(() => {
    if (id) {
      const numericId = Number(id);
      const newFilteredData = data.filter((object) => object.id === numericId);
      setFilteredData(newFilteredData);
    }
  }, [id]);

  useEffect(() => {
    if (filteredData.length > 0 && filteredData[0]?.img) {
      const shuffled = [...filteredData[0].img].sort(() => Math.random() - 0.5);
      setShuffledImg(shuffled);
    }
  }, [filteredData]);

  return (
    <div>
      <Hero filteredData={filteredData} />
      <div className="p-6 md:p-10">
        <Header filteredData={filteredData} />
        <Gallery images={shuffledImg} title={filteredData[0]?.title} />
      </div>
    </div>
  );
};

export default Portfolio;
