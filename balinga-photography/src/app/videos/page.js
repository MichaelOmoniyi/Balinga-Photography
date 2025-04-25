export const metadata = {
  title: "Videos - Balinga Photography",
  description: "Capturing your best moments",
};

import React, { Suspense } from "react";
import dynamic from "next/dynamic";

const LoadingSpinner = () => (
  <div className="w-full p-4 flex justify-center items-center">
    <div className="w-10 h-10 border-4 border-gray-300 border-t-black dark:border-t-white rounded-full animate-spin"></div>
  </div>
);

const VideoContent = dynamic(() => import("@/app/components/video/Main"), {
  ssr: true,
  suspense: true,
});

const Page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <VideoContent />
    </Suspense>
  );
};

export default Page;
