import { useEffect } from "react";

const useFadeIn = (selectors, options = {}) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selectors);

    if (!elements.length) return; // Avoid errors if elements are not found

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            !entry.target.classList.contains("fade-in")
          ) {
            entry.target.classList.add("fade-in");
            if (options.once) {
              observer.unobserve(entry.target); // Stop observing once animated if once is true
            }
          }
        });
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || "0px"
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect(); // Cleanup on unmount
  }, [selectors, options.threshold, options.rootMargin, options.once]);
};

export default useFadeIn;
