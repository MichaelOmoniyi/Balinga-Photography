"use client";
import React from "react";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterest,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import useZoomEffect from "../Hooks/useZoomEffect";

const Footer = () => {
  useZoomEffect(".transitionEffect");
  const pathname = usePathname();
  const [showInfoDropdown, setShowInfoDropdown] = useState(false);
  const galleryPattern = /\/gallery/;
  const infoPattern = /pricing|testimonials|experience/;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Enables smooth scrolling
    });
  };

  useEffect(() => {
    const FooterLinks = document.querySelectorAll(
      "#home, #about, #info, #gallaries, #blog, #contact, #videos, #pricing, #testimonials, #experience"
    );
    FooterLinks.forEach((link) => {
      if (link.getAttribute("href") === "/") {
        FooterLinks[0].classList.add("active");
      } else {
        FooterLinks[0].classList.remove("active");
      }

      if (link.getAttribute("href") === pathname) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    if (galleryPattern.test(pathname)) {
      document.getElementById("gallaries").classList.add("active");
    }

    if (infoPattern.test(pathname)) {
      document.getElementsByClassName("info").classList.add("active");
    }
  }, [pathname]);

  return (
    <div>
      <footer className="bg-slate-50">
        <div className="container">
          <div className="footer-links">
            <ul>
              <li className="transitionEffect scale-110 opacity-0">
                <a id="home" href="/">
                  Home
                </a>
              </li>
              <li className="transitionEffect scale-110 opacity-0">
                <a id="about" href="/about">
                  About
                </a>
              </li>
              <li
                className="relative group"
                onMouseEnter={() => setShowInfoDropdown(true)}
                onMouseLeave={() => setShowInfoDropdown(false)}
              >
                <button
                  className="info focus:outline-none  text-gray-600 dark:text-gray-200"
                  onClick={(e) => e.preventDefault()} // prevent accidental clicks
                >
                  Info
                </button>
                {showInfoDropdown && (
                  <div
                    className="dropdown-lg absolute top-full left-0 pt-1"
                    onMouseEnter={() => setShowInfoDropdown(true)}
                    onMouseLeave={() => setShowInfoDropdown(false)}
                  >
                    <div className="w-auto h-auto flex flex-col gap-4 py-4 px-6 bg-white dark:bg-black shadow-xl rounded-md space-y-1">
                      <span className="w-full">
                        <a
                          href="/pricing"
                          id="pricing"
                          className="text-gray-500 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-500 hover:cursor-pointer transition-all"
                        >
                          Pricing
                        </a>
                      </span>
                      <span className="w-full">
                        <a
                          href="/testimonials"
                          id="testimonials"
                          className="text-gray-500 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-500 hover:cursor-pointer transition-all"
                        >
                          Testimonials
                        </a>
                      </span>
                      <span className="w-full">
                        <a
                          href="/experience"
                          id="experience"
                          className="text-gray-500 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-500 hover:cursor-pointer transition-all"
                        >
                          Experience
                        </a>
                      </span>
                    </div>
                  </div>
                )}
              </li>
              <li className="transitionEffect scale-110 opacity-0">
                <a id="gallaries" href="/gallaries">
                  Gallaries
                </a>
              </li>
              <li className="transitionEffect scale-110 opacity-0">
                <a id="blog" href="/blog">
                  Blog
                </a>
              </li>
              <li className="transitionEffect scale-110 opacity-0">
                <a id="contact" href="/contact">
                  Contact
                </a>
              </li>
              <li className="transitionEffect scale-110 opacity-0">
                <a id="videos" href="/videos">
                  Videos
                </a>
              </li>
            </ul>
          </div>
          <div className="sub-footer">
            <div className="icons">
              <a
                className="transitionEffect scale-110 opacity-0"
                href="https://www.facebook.com/share/18jzqifpAY/"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                className="transitionEffect scale-110 opacity-0"
                href="https://x.com/Danrewaju?s=09"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                className="transitionEffect scale-110 opacity-0"
                href="https://www.instagram.com/balinga_?utm_source=qr&igsh=MTkxbjZmOWJmanFydQ=="
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              {/* <a className="transitionEffect scale-110 opacity-0" href="">
                <FontAwesomeIcon icon={faPinterest} />
              </a> */}
              <a
                className="transitionEffect scale-110 opacity-0"
                href="https://youtube.com/@balingaphotography?si=5yYd_vkstkEUFTP7"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
            <div className="copyright transitionEffect scale-110 opacity-0">
              <p>@ 2024 Balinga</p>
            </div>
            <div
              className="go-up transitionEffect scale-110 opacity-0"
              onClick={scrollToTop}
            >
              <FontAwesomeIcon icon={faArrowUp} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
