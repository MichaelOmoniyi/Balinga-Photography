"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Portfolio from "@/app/components/portfolio/gallery/Portfolio";
import "../../../components/portfolio/style.css";
import data from "@/app/data/data";

const Page = () => {
  const params = useParams();
  const { id } = params;

  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const numericId = Number(id);
      const newFilteredData = data.find((object) => object.id === numericId);
      setFilteredData(newFilteredData);
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    if (filteredData?.title) {
      document.title = `${filteredData.title} - Balinga Photography`;
    }
  }, [filteredData]);

  if (loading) {
    return (
      <div className="fixed top-0 left-0 w-screen h-screen bg-white flex justify-center items-center">
        <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
      </div>
    );
  }

  return <Portfolio id={id} />;
};

export default Page;
