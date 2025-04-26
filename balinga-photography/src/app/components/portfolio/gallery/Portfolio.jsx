import React, { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import data from "@/app/data/data";

const LoadingSpinner = () => (
  <div className="w-full p-4 flex justify-center items-center">
    <div className="w-10 h-10 border-4 border-gray-300 border-t-black dark:border-t-white rounded-full animate-spin"></div>
  </div>
);

const Hero = dynamic(() => import("./Hero"), {
  ssr: true,
});
const Header = dynamic(() => import("./Header"), {
  ssr: false,
  suspense: true,
});
const Gallery = dynamic(() => import("./Gallery"), {
  ssr: false,
  suspense: true,
});
const Contact = dynamic(() => import("@/app/components/contact/Form"), {
  ssr: false,
  suspense: true,
});
const Highlight = dynamic(() => import("@/app/components/Highlight"), {
  ssr: false,
  suspense: true,
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
      <Suspense fallback={<LoadingSpinner />}>
        <div className="section_">
          <Header filteredData={filteredData} />
          <Gallery images={shuffledImg} title={filteredData[0]?.title} />
        </div>
        <div className="section_ pt-1 pb-16 bg-slate-50/40">
          <Contact />
        </div>
        <div className="highlightSection">
          <Highlight />
        </div>
      </Suspense>
    </div>
  );
};

export default Portfolio;
