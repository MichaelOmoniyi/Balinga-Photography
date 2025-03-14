"use client";
import useFadeIn from "@/app/Hooks/useFadeIn";
import React from "react";

const About = () => {
  useFadeIn(".about-content-1, .about-content-2, .about-image");

  return (
    <div>
      <section class="section about">
        <div class="container md:h-auto">
          <div class="about-content-1" id="about-1">
            <h1 class="h1 section-title revealed" data-reveal="right">
              Hi, I’m Oni Daniel, a wedding, Lifestyle & Portrait Photographer
            </h1>
            <p class="p">I am based in Lagos, Nigeria (Available to travel)</p>
          </div>
          <div class="row about-image" id="about-2">
            <img src="/images/Smooth Portrait.jpg" alt="Balinga Portrait" />
          </div>
          <div class="about-content-2" id="about-3">
            <p class="section-text">
              A passionate
              <em class="em">photograher</em>
              who are working in this field for
              <em class="em">almost a decade.</em>
              I’m ready to give you my best.
            </p>
            <p class="section-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              maxime nam veritatis quisquam facilis fugit error corporis beatae
              quos quibusdam, tempore blanditiis numquam obcaecati vero soluta
              maiores velit doloribus ipsa ducimus voluptates nihil sint qui
              hic! Inventore veritatis quam quis!
            </p>
            <p class="section-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              eaque illum! Repellat voluptas officiis minus iste obcaecati culpa
              vitae impedit voluptates aperiam! Neque vitae cupiditate
              laudantium maxime deserunt iste, quisquam, itaque a nulla aperiam
              nihil amet odit laborum repellendus tempore.
            </p>
            <p class="section-text mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
              facilis aliquid ea minus similique numquam eveniet expedita
              mollitia eaque amet?
            </p>
            <button class="btn">Get to know Me</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
