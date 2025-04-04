"use client";
import React from "react";

const Btn = ({ text, targetId }) => {
  const handleClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="transitionEffect flex justify-center items-center text-center py-2 px-8 text-sm border border-solid border-white rounded-3xl uppercase mx-auto mt-8 transition-all bg-transparent text-white hover:bg-white hover:text-black scale-110 opacity-0"
    >
      {text}
    </button>
  );
};

export default Btn;
