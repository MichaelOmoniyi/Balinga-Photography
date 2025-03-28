import { useEffect } from "react";

const useFrameFocus = (selectors) => {
  useEffect(() => {
    const photoFrames = document.querySelectorAll(selectors);

    const handleMouseEnter = (event) => {
      photoFrames.forEach((f) => f.classList.add("blurFrame"));
      event.currentTarget.classList.remove("blurFrame");
    };

    const handleMouseLeave = () => {
      photoFrames.forEach((f) => f.classList.remove("blurFrame"));
    };

    photoFrames.forEach((frame) => {
      frame.addEventListener("mouseenter", handleMouseEnter);
      frame.addEventListener("mouseleave", handleMouseLeave);
    });

    // Cleanup function to remove event listeners
    return () => {
      photoFrames.forEach((frame) => {
        frame.removeEventListener("mouseenter", handleMouseEnter);
        frame.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);
};

export default useFrameFocus;
