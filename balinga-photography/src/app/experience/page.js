export const metadata = {
  title: "Our Process - Balinga Photography",
  description: "Capturing your best moments",
};

import React, { Suspense } from "react";
import "../components/contact/style.css";
import dynamic from "next/dynamic";

const LoadingSpinner = () => (
  <div className="w-full p-4 flex justify-center items-center">
    <div className="w-10 h-10 border-4 border-gray-300 border-t-black dark:border-t-white rounded-full animate-spin"></div>
  </div>
);

// Main content component
const ExperienceContent = dynamic(() => import("@/app/components/experience/Main"), {
  ssr: true,
  suspense: true,
});

const Page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ExperienceContent />
    </Suspense>
  );
};

export default Page;
