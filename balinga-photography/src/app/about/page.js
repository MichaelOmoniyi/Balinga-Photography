export const metadata = {
  title: "Know More About Balinga - Balinga Photography",
  description: "Info about Balinga",
};

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import "../components/contact/style.css";

const LoadingSpinner = () => (
  <div className="w-full p-4 flex justify-center items-center">
    <div className="w-10 h-10 border-4 border-gray-300 border-t-black dark:border-t-white rounded-full animate-spin"></div>
  </div>
);

// Main content component
const AboutContent = dynamic(() => import("@/app/components/about/About"), {
  ssr: true,
  suspense: true,
});

const Page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <AboutContent />
    </Suspense>
  );
};

export default Page;
