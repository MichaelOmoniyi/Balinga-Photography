export const metadata = {
  title: "Hear from our esteemed customers - Balinga Photography Prices",
  description: "Testimonials",
};

import React from 'react'
import dynamic from 'next/dynamic';
import "../components/testimonials/style.css"

const Main = dynamic(() => import("@/app/components/testimonials/Main"), {
  loading: () => (
    <div className="w-full p-4 flex justify-center items-center">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  ),
  ssr: false,
});

const page = () => {
  return (
    <div><Main /></div>
  )
}

export default page