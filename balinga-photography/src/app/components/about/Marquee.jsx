import React from 'react';
import zoomEffect from '@/app/Hooks/zoomEffect';

const Marquee = () => {
  zoomEffect(".transitionEffect");

  return (
    <div className=" w-full flex justify-center items-center bg-black dark:bg-white  hover:bg-white dark:hover:bg-black hover:border hover:border-solid hover:border-black dark:hover:border-white tr text-white hover:text-black dark:text-black dark:hover:text-white transition-all font-bold text-center md:text-lg py-2">
      <marquee behavior="left" direction="slide">
        <a href="/contact">NOW BOOKING 2025-2026 EVENTS! CLICK HERE TO GRAB</a>
      </marquee>
    </div>
  );
}

export default Marquee