import React from "react";

const Btn = ({ text, href }) => {
  return (
    <button className="transitionEffect flex justify-center items-center text-center py-2 px-8 text-sm border border-solid border-white rounded-3xl uppercase mx-auto mt-8 transition-all bg-transparent text-white hover:bg-white hover:text-black scale-110 opacity-0">
      <a href={href}>
        {text}
      </a>
    </button>
  );
};

export default Btn;
