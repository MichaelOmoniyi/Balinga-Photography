export const metadata = {
  title: "Reachout to us - Balinga Photography",
  description: "Capturing your best moments",
};

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import "../components/contact/style.css";

const LoadingSpinner = () => (
  <div className="w-full p-4 flex justify-center items-center">
    <div className="w-10 h-10 border-4 border-gray-300 border-t-black dark:border-t-white rounded-full animate-spin"></div>
  </div>
);

const Contact = dynamic(() => import("@/app/components/contact/Contact"), {
  ssr: true,
  suspense: true,
});

const page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Contact />
    </Suspense>
  );
};

export default page;
