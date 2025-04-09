import React from 'react'

const Btn = ({ text, href }) => {
  return (
    <div className="transitionEffect scale-110 opacity-0">
      <button className="text-center py-3 px-10 text-base md:text-lg border border-solid dark:border-slate-50 border-gray-700/80 rounded-3xl uppercase mx-auto transition-all bg-transparent dark:text-slate-50 text-gray-600 dark:hover:bg-slate-50 hover:bg-gray-700/80 dark:hover:text-gray-700 hover:text-slate-200">
        <a
          className="dark:hover:text-gray-700 hover:text-slate-200 font-mono font-semibold"
          href={href}
        >
          {text}
        </a>
      </button>
    </div>
  );
};

export default Btn