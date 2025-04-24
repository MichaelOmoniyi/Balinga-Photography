"use client";
import React, { useMemo } from 'react';
import useFadeIn from '@/app/Hooks/useFadeIn';
import usePerformanceMonitor from '@/app/Hooks/usePerformanceMonitor';

const Quote = () => {
  usePerformanceMonitor('Quote');

  // Memoize the quote content to prevent unnecessary re-renders
  const quoteContent = useMemo(() => ({
    author: "Unknown maybe me",
    text: "Growth is never a solo journey, and I believe in rising together. 🚀✨ I'm here to inspire, create, and share valuable content that helps us all grow. As I evolve, I want to bring as many people along with me—including YOU!"
  }), []);

  // Optimize fade-in animation with better performance settings
  useFadeIn("#quote-1, #quote-2", {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
    once: true // Only animate once
  });

  return (
    <section 
      className="section quote"
      aria-label="Inspirational quote"
    >
      <div className="container text-gray-600 dark:text-gray-200">
        <blockquote className="space-y-4">
          <cite 
            id="quote-1"
            className="block text-sm font-medium not-italic"
            aria-label="Quote author"
          >
            - {quoteContent.author}
          </cite>
          <p 
            id="quote-2"
            className="text-2xl leading-relaxed"
            aria-label="Quote content"
          >
            {quoteContent.text}
          </p>
        </blockquote>
      </div>
    </section>
  );
};

export default React.memo(Quote);