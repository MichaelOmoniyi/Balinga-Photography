"use client";
import { React, useEffect } from "react";
import useFadeIn from "@/app/Hooks/useFadeIn";
import frameFocus from "@/app/Hooks/frameFocus";

const Photos = () => {
  useFadeIn(
    "#photo-1, #photo-2, #photo-3, #photo-4, #photo-5, #photo-6, #photo-7, #photo-8, #photo-9"
  );

  frameFocus(".frame")

  return (
    <div>
      <section className="section photos">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 w-full" id="photo-1">
              <a href="/" className="frame">
                <div className="photo photo-1"></div>
                <div className="photos-description">
                  <h4>Moses Bliss and Marie Wiseborn</h4>
                  <p>#MMbliss24</p>
                </div>
              </a>
            </div>
          </div>
          <div className="row lg:gap-4">
            <div className="col-sm-6" id="photo-2">
              <a href="/" className="frame">
                <div className="photo photo-2"></div>
                <div className="photos-description">
                  <h4>The Wedding</h4>
                  <p>13 June 2021</p>
                </div>
              </a>
            </div>
            <div className="col-sm-6" id="photo-3">
              <a href="/" className="frame">
                <div className="photo photo-3"></div>
                <div className="photos-description">
                  <h4>The Jacksons</h4>
                  <p>13 June 2023</p>
                </div>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 w-full" id="photo-4">
              <a href="/" className="frame">
                <div className="photo photo-4"></div>
                <div className="photos-description">
                  <h4>Mayo and Emmanuel</h4>
                  <p>13 July 2023</p>
                </div>
              </a>
            </div>
          </div>
          <div className="row lg:gap-4">
            <div className="col-sm-6" id="photo-5">
              <a href="/" className="frame">
                <div className="photo photo-5"></div>
                <div className="photos-description">
                  <h4>Chioma and love</h4>
                  <p>13 June 2021</p>
                </div>
              </a>
            </div>
            <div className="col-sm-6" id="photo-6">
              <a href="/" className="frame">
                <div className="photo photo-6"></div>
                <div className="photos-description">
                  <h4>Dana Bridal Portfolio</h4>
                  <p>The shoot at Leicester</p>
                </div>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 w-full" id="photo-7">
              <a href="/" className="frame">
                <div className="photo photo-7"></div>
                <div className="photos-description">
                  <h4>Anya Wedding</h4>
                  <p>Grand Hotel Leicester</p>
                </div>
              </a>
            </div>
          </div>
          <div className="row lg:gap-4">
            <div className="col-sm-6" id="photo-8">
              <a href="/" className="frame">
                <div className="photo photo-8"></div>
                <div className="photos-description">
                  <h4>Siri Bridal Portrait</h4>
                  <p>London Uk</p>
                </div>
              </a>
            </div>
            <div className="col-sm-6" id="photo-9">
              <a href="/" className="frame">
                <div className="photo photo-9"></div>
                <div className="photos-description">
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
