"use client";
import React, { useState, useEffect } from "react";
import "../components/portfolio/style.css";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";

const Main = dynamic(() => import("../components/portfolio/Main"), {
  loading: () => (
    <div className="w-full p-4 flex justify-center items-center">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  ),
  ssr: false,
});

const Page = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    document.title = "Check out our Projects - Balinga Photography";
  });

  return (
    <>
      <Main category={category ? category : "all"} />
    </>
  );
};

export default Page;
