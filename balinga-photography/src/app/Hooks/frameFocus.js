import { useEffect } from "react";

const frameFocus = (selectors) => {
  useEffect(() => {
    const photoFrames = document.querySelectorAll(selectors);

    const handleMouseEnter = (event) => {
      photoFrames.forEach((f) => f.classList.add("blurFrame"));
      event.currentTarget.classList.remove("blurFrame");
      console.log("Hovered: " + event.currentTarget);
    };

    const handleMouseLeave = () => {
      photoFrames.forEach((f) => f.classList.remove("blurFrame"));
      console.log("Mouse left all frames");
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

export default frameFocus;
