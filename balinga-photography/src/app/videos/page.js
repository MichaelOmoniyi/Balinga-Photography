export const metadata = {
  title: "Videos - Balinga Photography",
  description: "Capturing your best moments",
};

import React from "react";
import dynamic from "next/dynamic";

const Main = dynamic(
  () => import("@/app/components/video/Main"),
  {
    loading: () => (
      <div className="w-full p-4 flex justify-center items-center">
        <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
      </div>
    ),
    ssr: false,
  }
);

const page = () => {
  return (
    <>
      <Main />
    </>
  );
};

export default page;
