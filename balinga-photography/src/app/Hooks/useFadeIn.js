import { useEffect } from "react";

const useFadeIn = (selectors) => {
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
            observer.unobserve(entry.target); // Stop observing once animated
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect(); // Cleanup on unmount
  }, []);
};

export default useFadeIn;
