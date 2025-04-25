export const metadata = {
  title: "Affordable Photographer - Balinga Photography Prices",
  description: "Photography Prices",
};

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import "../components/pricing/style.css"

const LoadingSpinner = () => (
  <div className="w-full p-4 flex justify-center items-center">
    <div className="w-10 h-10 border-4 border-gray-300 border-t-black dark:border-t-white rounded-full animate-spin"></div>
  </div>
);

// Main content component
const PricingContent = dynamic(() => import("@/app/components/pricing/Main"), {
  ssr: true,
  suspense: true,
});

const Page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <PricingContent />
    </Suspense>
  );
};

export default Page;
