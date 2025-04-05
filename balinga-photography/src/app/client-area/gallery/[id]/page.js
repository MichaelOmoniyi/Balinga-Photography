"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useParams } from "next/navigation";
import Portfolio from "@/app/components/portfolio/gallery/Portfolio";
import "../../../components/portfolio/style.css";
import data from "@/app/data/data";

const page = () => {
  const params = useParams();
  const { id } = params;

  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
      if (id) {
        const numericId = Number(id);
        const newFilteredData = data.filter((object) => object.id === numericId);
        setFilteredData(newFilteredData);
      }
    }, [id]);
  

  return (
    <>
      <head>
        <title>{`${filteredData[0]?.title}`}Balinga Photography</title>
        <meta name="description" content="Capturing your best moments" />
      </head>
      <Portfolio id={id} />
    </>
  );
};

export default page;
