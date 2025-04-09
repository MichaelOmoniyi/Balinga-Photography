import React from "react";
import Button from "../Button";

const Book = () => {
  return (
    <div className="sectionEnclosed bg-black dark:bg-slate-50 flex justify-center items-center">
      <Button text={"BOOK YOUR DATE"} href={"/contact"} />
    </div>
  );
};

export default Book;
