export const metadata = {
  title: "Our Process - Balinga Photography",
  description: "Capturing your best moments",
};

import React from "react";
import "../components/contact/style.css";
import dynamic from "next/dynamic";

const Main = dynamic(
  () => import("@/app/components/experience/Main"),
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
    <div>
      <Main />
    </div>
  );
};

export default page;
