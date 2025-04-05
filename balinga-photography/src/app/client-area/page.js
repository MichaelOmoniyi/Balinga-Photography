"use client";
import React, { useEffect } from "react";
import Head from "next/head";
import Main from "../components/portfolio/Main";
import "../components/portfolio/style.css";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => console.log(category), []);

  return (
    <>
      <head>
        <title>Check out our Projects - Balinga Photography</title>
        <meta name="description" content="Capturing your best moments" />
      </head>
      <Main category={category ? category : "all"} />
    </>
  );
};

export default Page;
