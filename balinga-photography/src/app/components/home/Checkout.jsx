"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import useFadeIn from "@/app/Hooks/useFadeIn";
import usePerformanceMonitor from "@/app/Hooks/usePerformanceMonitor";

const Checkout = () => {
  usePerformanceMonitor("Checkout");
  useFadeIn(".check-out-link, .check-out-img");
  const hrefArray = ["/client-area/", "/experience", "/pricing"];
  const checkoutLinksRef = useRef([]);
  const checkoutImagesRef = useRef([]);

  useEffect(() => {
    const checkoutLinks = checkoutLinksRef.current;
    const checkoutImages = checkoutImagesRef.current;

    if (checkoutLinks.length > 0 && checkoutImages.length > 0) {
      // Set initial active link and image
      checkoutLinks[0].classList.add("active-link");
      checkoutImages[0].classList.add("show-img");

      // Add hover event listeners
      checkoutLinks.forEach((link, index) => {
        const handleMouseEnter = () => {
          // Remove active classes from all links and images
          checkoutLinks.forEach((l) => l.classList.remove("active-link"));
          checkoutImages.forEach((img) => img.classList.remove("show-img"));

          // Add active class to hovered link and corresponding image
          checkoutLinks[index].classList.add("active-link");
          checkoutImages[index].classList.add("show-img");
        };

        link.addEventListener("mouseenter", handleMouseEnter);

        // Cleanup function to remove event listeners when component unmounts
        return () => link.removeEventListener("mouseenter", handleMouseEnter);
      });
    }
  }, []);

  return (
    <div>
      <section className="section check-out">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              {["Portfolio", "Experience", "Pricing"].map((title, index) => (
                <div key={index}>
                  <Link href={`${hrefArray[index]}`} legacyBehavior>
                    <a
                      ref={(el) => (checkoutLinksRef.current[index] = el)}
                      className="check-out-link hover:text-gray-400"
                    >
                      <h3 className="text-gray-600 dark:text-gray-200">
                        {title === "Portfolio"
                          ? "Take a look at my work"
                          : title === "Experience"
                          ? "Find out my process"
                          : "See my Offering"}
                      </h3>
                      <h6 className="text-gray-500 dark:text-gray-400">
                        {title}
                      </h6>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
            <div className="col-sm-6 check-out-images">
              {[1, 2, 3].map((num, index) => (
                <div
                  key={index}
                  ref={(el) => (checkoutImagesRef.current[index] = el)}
                  className={`check-out-img check-out-img-${num}`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
