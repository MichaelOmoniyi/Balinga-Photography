"use client";
import React from 'react'
import useFadeIn from '@/app/Hooks/useFadeIn';

const Quote = () => {
  useFadeIn("#quote-1, #quote-2");

  return (
    <div>
      <section className="section quote">
        <div className="container text-gray-600 dark:text-gray-200">
          <h6 id="quote-1">- Unknown maybe me</h6>
          <h2 id="quote-2">
            Actually, it’s love itself that creates the most beautiful canvas,
            I’m only choosing the perspective.
          </h2>
        </div>
      </section>
    </div>
  );
}

export default Quote