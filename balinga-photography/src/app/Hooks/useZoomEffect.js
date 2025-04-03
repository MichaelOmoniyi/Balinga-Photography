"use client";
import { useEffect } from "react";

const useZoomEffect = (selectors) => {
  useEffect(() => {
    if (typeof window === "undefined") return; // Ensure it's client-side

    const applyEffect = () => {
      const elements = document.querySelectorAll(selectors);
      if (!elements.length) return null; // Avoid errors if elements are not found

      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (
              entry.isIntersecting &&
              !entry.target.classList.contains("zoomEffect")
            ) {
              entry.target.classList.add("zoomEffect");
              observer.unobserve(entry.target); // Stop observing once animated
            }
          });
        },
        { threshold: 0.2 }
      );

      elements.forEach((element) => observer.observe(element));
      return observer;
    };

    // Apply effect on mount
    let intersectionObserver = applyEffect();

    // Watch for new elements using MutationObserver
    const mutationObserver = new MutationObserver(() => {
      if (intersectionObserver) {
        intersectionObserver.disconnect(); // Disconnect previous observer
      }
      intersectionObserver = applyEffect(); // Reapply effect
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      if (intersectionObserver) {
        intersectionObserver.disconnect(); // Ensure it's defined before calling
      }
      mutationObserver.disconnect();
    };
  }, [selectors]); // Depend on selectors so it re-runs when necessary
};

export default useZoomEffect;
