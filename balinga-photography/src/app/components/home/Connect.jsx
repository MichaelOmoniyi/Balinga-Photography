"use client";
import React from "react";
import useFadeIn from "@/app/Hooks/useFadeIn";

const Connect = () => {
  useFadeIn("#connect-1, #connect-2, #connect-3");

  return (
    <div>
      <section class="section connect">
        <div class="connect-bg">
          <div className="overlay"></div>
          <div class="connect-content">
            <h1
              class="text-5xl font-bold text-white text-center animatable animatable--large-title animatable--animated animatable--finished"
              id="connect-1"
            >
              <span class="block">Let's</span>
              <span class="block">set</span>
              <span class="block">out</span>
              <span class="block">on</span>
              <span class="block">a</span>
              <span class="block">photographic</span>
              <span class="block">adventure</span>
              <span class="block">together</span>
            </h1>
            <div class="mt-6">
              <h5
                class="text-lg font-medium text-gray-100 text-center"
                id="connect-2"
              >
                <span class="inline-block">Portrait</span>
                <span class="inline-block">of</span>
                <span class="inline-block">nature</span>
                <span class="inline-block">and</span>
                <span class="inline-block">people</span>
              </h5>
              <button class="btn" id="connect-3">
                <a href="/">Let's connect</a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Connect;
