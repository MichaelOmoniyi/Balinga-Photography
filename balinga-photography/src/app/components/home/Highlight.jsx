"use client";
import React from "react";
import useFadeIn from "@/app/Hooks/useFadeIn";

const Highlight = () => {
  useFadeIn("#highlight-1, #highlight-2, #highlight-3, #highlight-4");

  return (
    <div>
      <section className="section highlight">
        <div className="highlight-container">
          <a href="/">
            <div className="highlight-1" id="highlight-1"></div>
            <div className="highlight-2" id="highlight-2"></div>
            <div className="highlight-3" id="highlight-3"></div>
            <div className="highlight-4" id="highlight-4"></div>
          </a>
          <h4 className="bg-black text-white text-3xl">@balinga</h4>
        </div>
      </section>
    </div>
  );
};

export default Highlight;
