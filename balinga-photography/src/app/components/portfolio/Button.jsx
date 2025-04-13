import React from "react";

const Button = ({ text, href }) => {
  return (
    <button className="transitionEffect flex justify-center items-center text-center py-3 px-10 text-base md:text-lg border border-solid border-black rounded-3xl uppercase mx-auto transition-all bg-slate-50 text-black hover:bg-black hover:text-white scale-110 opacity-0">
      <a href={href}>
        {text}
      </a>
    </button>
  );
};

export default Button;
