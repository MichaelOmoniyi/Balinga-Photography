import React from "react";

const Button = ({ text, href }) => {
  return (
    <button className="transitionEffect flex justify-center items-center text-center py-2 px-8 text-sm border border-solid border-black rounded-3xl uppercase mx-auto mt-8 transition-all bg-slate-50 text-black hover:bg-black hover:text-white scale-110 opacity-0">
      <a className="hover:text-white" href={href}>
        {text}
      </a>
    </button>
  );
};

export default Button;
