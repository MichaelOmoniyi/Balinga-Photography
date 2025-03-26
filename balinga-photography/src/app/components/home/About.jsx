"use client";
import useFadeIn from "@/app/Hooks/useFadeIn";
import React from "react";

const About = () => {
  useFadeIn(".about-content-1, .about-content-2, .about-image");

  return (
    <div>
      <section className="section about">
        <div className="container md:h-auto">
          <div className="about-content-1" id="about-1">
            <h1
              className="h1 text-gray-600 dark:text-gray-200 section-title revealed"
              data-reveal="right"
            >
              Hi, I’m Oni Daniel, a wedding, Lifestyle & Portrait Photographer
            </h1>
            <p className="p text-gray-500 dark:text-gray-400">
              I am based in Lagos, Nigeria (Available to travel)
            </p>
          </div>
          <div className="row about-image" id="about-2">
            <img src="/images/Smooth Portrait.jpg" alt="Balinga Portrait" />
          </div>
          <div
            className="about-content-2 text-gray-500 dark:text-gray-300"
            id="about-3"
          >
            <p className="section-text">
              A passionate
              <em className="em">photograher</em>
              who are working in this field for
              <em className="em">almost a decade.</em>
              I’m ready to give you my best.
            </p>
            <p className="section-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              maxime nam veritatis quisquam facilis fugit error corporis beatae
              quos quibusdam, tempore blanditiis numquam obcaecati vero soluta
              maiores velit doloribus ipsa ducimus voluptates nihil sint qui
              hic! Inventore veritatis quam quis!
            </p>
            <p className="section-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              eaque illum! Repellat voluptas officiis minus iste obcaecati culpa
              vitae impedit voluptates aperiam! Neque vitae cupiditate
              laudantium maxime deserunt iste, quisquam, itaque a nulla aperiam
              nihil amet odit laborum repellendus tempore.
            </p>
            <p className="section-text mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
              facilis aliquid ea minus similique numquam eveniet expedita
              mollitia eaque amet?
            </p>
            <button className="btn text-gray-500 dark:text-gray-300 border-gray-500 dark:border-gray-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
              Get to know Me
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
