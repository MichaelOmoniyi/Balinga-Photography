import React from "react";

const Button = ({ text, href }) => {
  return (
    <button className="transitionEffect flex justify-center items-center text-center py-3 px-10 text-base md:text-lg border border-solid border-black rounded-3xl uppercase mx-auto transition-all bg-slate-50 dark:bg-black text-black dark:text-slate-50 hover:bg-black dark:hover:bg-slate-50 hover:text-white dark:hover:text-black scale-110 opacity-0">
      <a href={href}>
        {text}
      </a>
    </button>
  );
};

export default Button;
