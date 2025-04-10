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
            Growth is never a solo journey, and I believe in rising together.
            🚀✨ I’m here to inspire, create, and share valuable content that
            helps us all grow. As I evolve, I want to bring as many people along
            with me—including YOU!
          </h2>
        </div>
      </section>
    </div>
  );
}

export default Quote