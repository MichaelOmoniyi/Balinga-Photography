"use client";
import { React, useEffect } from "react";
import useFadeIn from "@/app/Hooks/useFadeIn";
import useFrameFocus from "@/app/Hooks/useFrameFocus";
import Image from "next/image";

const Photos = () => {
  useFadeIn(
    "#photo-1, #photo-2, #photo-3, #photo-4, #photo-5, #photo-6, #photo-7, #photo-8, #photo-9"
  );

  useFrameFocus(".frame");

  return (
    <div>
      <section className="section photos">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 w-full" id="photo-1">
              <a href="/client-area/gallery/905838" target="_blank" className="frame">
                <div className="photo photo-1"></div>
                <div className="photos-description">
                  <h4 className="text-gray-600 dark:text-gray-200">
                    Moses Bliss and Marie Wiseborn
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">#MMbliss24</p>
                </div>
              </a>
            </div>
          </div>
          <div className="row lg:gap-4">
            <div className="col-sm-6" id="photo-2">
              <a href="/client-area/gallery/905839" target="_blank" className="frame">
                <div className="photo photo-2"></div>
                <div className="photos-description">
                  <h4 className="text-gray-600 dark:text-gray-200">
                    The Wedding
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    13 June 2021
                  </p>
                </div>
              </a>
            </div>
            <div className="col-sm-6" id="photo-3">
              <a href="/client-area/gallery/905846" target="_blank" className="frame">
                <div className="photo photo-3"></div>
                <div className="photos-description">
                  <h4 className="text-gray-600 dark:text-gray-200">
                    The Jacksons
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    13 June 2023
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 w-full" id="photo-4">
              <a href="/client-area/gallery/758214" target="_blank" className="frame">
                <div className="photo photo-4"></div>
                <div className="photos-description">
                  <h4 className="text-gray-600 dark:text-gray-200">
                    Mayo and Emmanuel
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    13 July 2023
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="row lg:gap-4">
            <div className="col-sm-6" id="photo-5">
              <a href="/client-area/gallery/823493" target="_blank" className="frame">
                <div className="photo photo-5"></div>
                <div className="photos-description">
                  <h4 className="text-gray-600 dark:text-gray-200">
                    Philip and Esther
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    13 June 2021
                  </p>
                </div>
              </a>
            </div>
            <div className="col-sm-6" id="photo-6">
              <a href="/client-area/gallery/905840" target="_blank" className="frame">
                <div className="photo photo-6"></div>
                <div className="photos-description">
                  <h4 className="text-gray-600 dark:text-gray-200">
                    Dana Bridal Portfolio
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    The shoot at Leicester
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 w-full" id="photo-7">
              <a href="/client-area/gallery/758215" target="_blank" className="frame">
                <div className="photo photo-7"></div>
                <div className="photos-description">
                  <h4 className="text-gray-600 dark:text-gray-200">
                    Anya Wedding
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    Grand Hotel Leicester
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="row lg:gap-4">
            <div className="col-sm-6" id="photo-8">
              <a href="/client-area/gallery/905842" target="_blank" className="frame">
                <div className="photo photo-8"></div>
                <div className="photos-description">
                  <h4 className="text-gray-600 dark:text-gray-200">
                    Siri Bridal Portrait
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">London Uk</p>
                </div>
              </a>
            </div>
            <div className="col-sm-6" id="photo-9">
              <a href="/client-area/gallery/382176" target="_blank" className="frame">
                <div className="photo photo-9"></div>
                <div className="photos-description">
                  <h4 className="text-gray-600 dark:text-gray-200">J & S</h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    London Wedding
                  </p>
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
