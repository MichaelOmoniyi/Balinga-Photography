"use client";
import React, { useEffect } from "react";
import Main from "../components/portfolio/Main";
import "../components/portfolio/style.css";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => console.log(category), []);

  return (
    <div>
      <Main category={category ? category : "all"} />
    </div>
  );
};

export default Page;
