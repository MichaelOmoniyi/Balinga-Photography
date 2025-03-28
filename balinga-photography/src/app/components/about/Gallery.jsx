import React from "react";
import useFrameFocus from "@/app/Hooks/useFrameFocus";

const Gallery = () => {
  useFrameFocus(".frame");

  return (
    <div>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="frame">
          <img
            class="h-auto max-w-full rounded-lg"
            src="/images/mini-portfolio/img-1.jpg"
            alt=""
          />
        </div>
        <div className="frame">
          <img
            class="h-auto max-w-full rounded-lg"
            src="/images/mini-portfolio/img-2.jpg"
            alt=""
          />
        </div>
        <div className="frame">
          <img
            class="h-auto max-w-full rounded-lg"
            src="/images/mini-portfolio/img-3.jpg"
            alt=""
          />
        </div>
        <div className="frame">
          <img
            class="h-auto max-w-full rounded-lg"
            src="/images/mini-portfolio/img-4.jpg"
            alt=""
          />
        </div>
        <div className="frame">
          <img
            class="h-auto max-w-full rounded-lg"
            src="/images/mini-portfolio/img-5.jpg"
            alt=""
          />
        </div>
        <div className="frame">
          <img
            class="h-auto max-w-full rounded-lg"
            src="/images/mini-portfolio/img-6.jpg"
            alt=""
          />
        </div>
        <div className="frame">
          <img
            class="h-auto max-w-full rounded-lg"
            src="/images/mini-portfolio/img-7.jpg"
            alt=""
          />
        </div>
        <div className="frame">
          <img
            class="h-auto max-w-full rounded-lg"
            src="/images/mini-portfolio/img-8.jpg"
            alt=""
          />
        </div>
        <div className="frame">
          <img
            class="h-auto max-w-full rounded-lg"
            src="/images/mini-portfolio/img-9.jpg"
            alt=""
          />
        </div>
        <div className="frame">
          <img
            class="h-auto max-w-full rounded-lg"
            src="/images/mini-portfolio/img-10.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
