export const metadata = {
  title: "Affordable Photographer - Balinga Photography Prices",
  description: "Photography Prices",
};

import React from "react";
import dynamic from "next/dynamic";
import "../components/pricing/style.css"

const Pricing = dynamic(() => import("@/app/components/pricing/Main"), {
  loading: () => (
    <div className="w-full p-4 flex justify-center items-center">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  ),
  ssr: false,
});

const page = () => {
  return (
    <div>
      <Pricing />
    </div>
  );
};

export default page;
