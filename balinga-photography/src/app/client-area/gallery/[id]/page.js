"use client";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import Portfolio from "@/app/components/portfolio/gallery/Portfolio";
import "../../../components/portfolio/style.css";

const page = () => {
  const params = useParams();
  const { id } = params;

  return (
    <div>
      <Portfolio id={id} />
    </div>
  );
};

export default page;
