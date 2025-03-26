import { useEffect } from 'react'

const zoomEffect = (selectors) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selectors);

    if (!elements.length) return; // Avoid errors if elements are not found

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
      { threshold: 0.4 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect(); // Cleanup on unmount
  }, []);
}

export default zoomEffect