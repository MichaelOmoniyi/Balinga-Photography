export const metadata = {
  title: "Hear from our esteemed clients - Balinga Photography Prices",
  description: "Testimonials",
};

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import "../components/testimonials/style.css";

const LoadingSpinner = () => (
  <div className="w-full p-4 flex justify-center items-center">
    <div className="w-10 h-10 border-4 border-gray-300 border-t-black dark:border-t-white rounded-full animate-spin"></div>
  </div>
);

// Main content component
const TestimonialsContent = dynamic(() => import("@/app/components/testimonials/Main"), {
  ssr: true,
  suspense: true,
});

const Page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <TestimonialsContent />
    </Suspense>
  );
};

export default Page;