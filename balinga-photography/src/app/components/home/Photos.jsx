"use client";
import { React, useEffect } from "react";
import useFadeIn from "@/app/Hooks/useFadeIn";

const Photos = () => {
  useFadeIn(
    "#photo-1, #photo-2, #photo-3, #photo-4, #photo-5, #photo-6, #photo-7, #photo-8, #photo-9"
  );

  useEffect(() => {
    const photoFrames = document.querySelectorAll(".frame");

    const handleMouseEnter = (event) => {
      photoFrames.forEach((f) => f.classList.add("blurFrame"));
      event.currentTarget.classList.remove("blurFrame");
      console.log("Hovered: " + event.currentTarget);
    };

    const handleMouseLeave = () => {
      photoFrames.forEach((f) => f.classList.remove("blurFrame"));
      console.log("Mouse left all frames");
    };

    photoFrames.forEach((frame) => {
      frame.addEventListener("mouseenter", handleMouseEnter);
      frame.addEventListener("mouseleave", handleMouseLeave);
    });

    // Cleanup function to remove event listeners
    return () => {
      photoFrames.forEach((frame) => {
        frame.removeEventListener("mouseenter", handleMouseEnter);
        frame.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);


  return (
    <div>
      <section class="section photos">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 w-full" id="photo-1">
              <a href="/" className="frame">
                <div class="photo photos-1"></div>
                <div class="photos-description">
                  <h4>Moses Bliss and Marie Wiseborn</h4>
                  <p>#MMbliss24</p>
                </div>
              </a>
            </div>
          </div>
          <div class="row lg:gap-4">
            <div class="col-sm-6" id="photo-2">
              <a href="/" className="frame">
                <div class="photo photos-2"></div>
                <div class="photos-description">
                  <h4>The Wedding</h4>
                  <p>13 June 2021</p>
                </div>
              </a>
            </div>
            <div class="col-sm-6" id="photo-3">
              <a href="/" className="frame">
                <div class="photo photos-3"></div>
                <div class="photos-description">
                  <h4>The Jacksons</h4>
                  <p>13 June 2023</p>
                </div>
              </a>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12 w-full" id="photo-4">
              <a href="/" className="frame">
                <div class="photo photos-4"></div>
                <div class="photos-description">
                  <h4>Mayo and Emmanuel</h4>
                  <p>13 July 2023</p>
                </div>
              </a>
            </div>
          </div>
          <div class="row lg:gap-4">
            <div class="col-sm-6" id="photo-5">
              <a href="/" className="frame">
                <div class="photo photos-5"></div>
                <div class="photos-description">
                  <h4>Chioma and love</h4>
                  <p>13 June 2021</p>
                </div>
              </a>
            </div>
            <div class="col-sm-6" id="photo-6">
              <a href="/" className="frame">
                <div class="photo photos-6"></div>
                <div class="photos-description">
                  <h4>Dana Bridal Portfolio</h4>
                  <p>The shoot at Leicester</p>
                </div>
              </a>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12 w-full" id="photo-7">
              <a href="/" className="frame">
                <div class="photo photos-7"></div>
                <div class="photos-description">
                  <h4>Anya Wedding</h4>
                  <p>Grand Hotel Leicester</p>
                </div>
              </a>
            </div>
          </div>
          <div class="row lg:gap-4">
            <div class="col-sm-6" id="photo-8">
              <a href="/" className="frame">
                <div class="photo photos-8"></div>
                <div class="photos-description">
                  <h4>Siri Bridal Portrait</h4>
                  <p>London Uk</p>
                </div>
              </a>
            </div>
            <div class="col-sm-6" id="photo-9">
              <a href="/" className="frame">
                <div class="photo photos-9"></div>
                <div class="photos-description">
                  <h4>J & S</h4>
                  <p>London Wedding</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Photos;
