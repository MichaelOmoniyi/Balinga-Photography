import React from 'react'

const Btn = ({ text, href }) => {
  return (
    <div>
      <button className="text-center py-3 px-10 text-base border border-solid border-slate-50 dark:border-gray-700/80 rounded-3xl uppercase mx-auto transition-all bg-transparent text-slate-50 dark:text-gray-600 hover:bg-slate-50 dark:hover:bg-gray-700/80 hover:text-gray-700 dark:hover:text-slate-200">
        <a className="hover:text-gray-700 dark:hover:text-slate-200 font-mono font-semibold" href={href}>
          {text}
        </a>
      </button>
    </div>
  );
};

export default Btn