"use client";
import React, { useEffect, useState } from "react";
import ImageCategories from "./ImageCategories";

const Categories = ({categoryType}) => {
  const [category, setCategory] = useState(categoryType);
  return (
    <div>
      <header>
        <div className="w-full py-4 mb-4 overflow-hidden">
          <div className="w-full flex gap-4 text-gray-700 dark:text-gray-500 overflow-auto">
            <span
              className={`${
                category === "all"
                  ? "border-red-950 text-gray-400 dark:border-gray-500 dark:text-gray-300"
                  : null
              } py-1 border-b-2 border-transparent hover:cursor-pointer flex items-center`}
              onClick={() => setCategory("all")}
            >
              All
            </span>
            <span
              className={`${
                category === "wedding"
                  ? "border-red-950 text-gray-400 dark:border-gray-500 dark:text-gray-300"
                  : null
              } py-1 border-b-2 border-transparent hover:cursor-pointer flex items-center`}
              onClick={() => setCategory("wedding")}
            >
              Wedding
            </span>
            <span
              className={`${
                category === "traditionalWedding"
                  ? "border-red-950 text-gray-400 dark:border-gray-500 dark:text-gray-300"
                  : null
              } py-1 border-b-2 border-transparent hover:cursor-pointer flex items-center`}
              onClick={() => setCategory("traditionalWedding")}
            >
              Traditional Wedding
            </span>
            <span
              className={`${
                category === "birthday"
                  ? "border-red-950 text-gray-400 dark:border-gray-500 dark:text-gray-300"
                  : null
              } py-1 border-b-2 border-transparent hover:cursor-pointer flex items-center`}
              onClick={() => setCategory("birthday")}
            >
              Birthday
            </span>
            <span
              className={`${
                category === "convocation"
                  ? "border-red-950 text-gray-400 dark:border-gray-500 dark:text-gray-300"
                  : null
              } py-1 border-b-2 border-transparent hover:cursor-pointer flex items-center`}
              onClick={() => setCategory("convocation")}
            >
              Convocation
            </span>
            <span
              className={`${
                category === "family"
                  ? "border-red-950 text-gray-400 dark:border-gray-500 dark:text-gray-300"
                  : null
              } py-1 border-b-2 border-transparent hover:cursor-pointer flex items-center`}
              onClick={() => setCategory("family")}
            >
              Family
            </span>
          </div>
        </div>
      </header>
      <div><ImageCategories category={category} /></div>
    </div>
  );
};

export default Categories;
