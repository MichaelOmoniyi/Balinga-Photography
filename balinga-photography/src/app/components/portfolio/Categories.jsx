import React from "react";
import data from "@/app/data/data";

const Categories = () => {
  return (
    <div>
      <header>
        <div className="w-full overflow-hidden">
          <div className="w-full flex gap-2 overflow-auto">
            <span>All</span>
            <span>Wedding</span>
            <span>Traditional Wedding</span>
            <span>Birthday</span>
            <span>Convocation</span>
            <span>Family</span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Categories;
