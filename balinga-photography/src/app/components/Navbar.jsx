"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const galleryPattern = /\/gallery/;
  const infoPattern = /pricing|testimonials|experience/;

  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [showInfoDropdown, setShowInfoDropdown] = useState(false);

  // Handles active link styling based on current page
  useEffect(() => {
    const navbarLinks = document.querySelectorAll(
      "#home, #about, #galleries, #blog, #contact, #videos, #pricing, #testimonials, #experience, #home-l, #about-l, #galleries-l, #blog-l, #contact-l, #videos-l, #pricing-l, #testimonials-l, #experince-l"
    );

    if (galleryPattern.test(pathname)) {
      navbarLinks.forEach((link) => {
        if (link.getAttribute("href") === "/client-area") {
          if (link.id.slice(-2) === "-l") {
            link.classList.add("active-ls");
          } else {
            link.classList.add("active");
          }
        } else {
          link.classList.remove("active");
          link.classList.remove("active-ls");
        }
      });
    }

    if (infoPattern.test(pathname)) {
      document.querySelectorAll(".info").forEach((element) => {
        element.classList.add("active");
      });
    }

    navbarLinks.forEach((link) => {
      if (link.getAttribute("href") === "/") {
        navbarLinks[0].classList.add("active");
        navbarLinks[7].classList.add("active-ls");
      } else {
        navbarLinks[0].classList.remove("active");
        navbarLinks[7].classList.remove("active-ls");
      }

      if (link.getAttribute("href") === pathname) {
        if (link.id.slice(-2) === "-l") {
          link.classList.add("active-ls");
        } else {
          link.classList.add("active");
        }
      } else {
        link.classList.remove("active");
        link.classList.remove("active-ls");
      }
    });

    setShowInfoDropdown(false); // close dropdown on route change
  }, [pathname]);

  // Lock scroll when nav is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Show/hide navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const scrollThreshold = window.innerHeight;

      setIsVisible(
        currentScrollPos < scrollThreshold || currentScrollPos < prevScrollPos
      );
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <div>
      <header>
        <nav>
          {/* MOBILE NAV */}
          <div
            className={`navbar-mobile bg-slate-50 dark:bg-black border-b-2 border-solid dark:border-gray-950 shadow-md transition-transform duration-1000 ${
              isVisible ? "translate-y-0" : "-translate-y-24"
            }`}
          >
            <div className="nav-display md:px-10">
              <div className="nav-toggler">
                <input
                  type="checkbox"
                  name="nav-btn"
                  id="nav-btn"
                  checked={isOpen}
                  onClick={() => setIsOpen((prev) => !prev)}
                  className="navbar-input"
                />
                <label htmlFor="nav-btn" className="nav-label">
                  <span
                    className="nav-toggler-icon bg-gray-600 dark:bg-gray-200 after:bg-gray-600 dark:after:bg-gray-200 before:bg-gray-600 dark:before:bg-gray-200"
                    id="hamburger"
                  ></span>
                </label>
              </div>
              <a href="/" className="navbar-brand">
                <img
                  src="/images/Balinga-Photogrphy-png-1.png"
                  className="w-56 h-auto hidden dark:inline-block"
                  alt="Balinga Photography"
                />
                <img
                  src="/images/Balinga-Photogrphy-png-white.png"
                  className="w-56 h-auto inline-block dark:hidden"
                  alt="Balinga Photography"
                />
              </a>
            </div>

            <div
              className={`navbar-extend bg-slate-200 dark:bg-gray-950 md:px-10 ${
                isOpen ? "show" : "hidden"
              }`}
              id="navbar-extend"
            >
              <div className="nav-toggler">
                <input
                  type="checkbox"
                  name="nav-btn-extend"
                  id="nav-btn-extend"
                  checked={isOpen}
                  onClick={() => setIsOpen((prev) => !prev)}
                  className="navbar-input-extend"
                />
                <label htmlFor="nav-btn-extend" className="nav-label-extend">
                  <span
                    className="nav-toggler-icon-extend  text-gray-600 dark:text-gray-200 after:bg-gray-600 dark:after:bg-gray-200 before:bg-gray-600 dark:before:bg-gray-200"
                    id="hamburger"
                  ></span>
                </label>
              </div>

              <div className="navbar-links md:text-xl">
                <ul>
                  <li>
                    <a
                      id="home"
                      href="/"
                      className="text-gray-600 dark:text-gray-200"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      id="about"
                      href="/about"
                      className="text-gray-600 dark:text-gray-200"
                    >
                      About
                    </a>
                  </li>
                  <li className="relative">
                    <button
                      onClick={() => setShowInfoDropdown((prev) => !prev)}
                      className="info w-full  text-gray-600 dark:text-gray-200"
                    >
                      Info
                    </button>
                    {showInfoDropdown && (
                      <ul className="dropdown ml-4 mt-4">
                        <li>
                          <a
                            href="/pricing"
                            id="pricing"
                            className="text-gray-500 dark:text-gray-600"
                          >
                            Pricing
                          </a>
                        </li>
                        <li>
                          <a
                            href="/testimonials"
                            id="testimonials"
                            className="text-gray-500 dark:text-gray-600"
                          >
                            Testimonials
                          </a>
                        </li>
                        <li>
                          <a
                            href="/experience"
                            id="experience"
                            className="text-gray-500 dark:text-gray-600"
                          >
                            Experience
                          </a>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <a
                      id="galleries"
                      href="/client-area"
                      className="text-gray-600 dark:text-gray-200"
                    >
                      Galleries
                    </a>
                  </li>
                  <li>
                    <a
                      id="blog"
                      href="/blog"
                      className="text-gray-600 dark:text-gray-200"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      id="contact"
                      href="/contact"
                      className="text-gray-600 dark:text-gray-200"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      id="videos"
                      href="/videos"
                      className="text-gray-600 dark:text-gray-200"
                    >
                      Videos
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* LARGE SCREEN NAV */}
          <div
            className={`navbar-lg bg-slate-50 dark:bg-black border-b-2 border-solid dark:border-gray-950 shadow-md transition-transform duration-1000 ${
              isVisible ? "translate-y-0" : "-translate-y-24"
            }`}
          >
            <div className="nav-display justify-between gap-8 lg:gap-16">
              <div className="navbar-links w-1/2">
                <ul className="flex gap-4">
                  <li>
                    <a
                      href="/"
                      id="home-l"
                      className="text-gray-600 dark:text-gray-200"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      id="about-l"
                      className="text-gray-600 dark:text-gray-200"
                    >
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
                        className="dropdown-lg absolute top-full left-0 pt-9"
                        onMouseEnter={() => setShowInfoDropdown(true)}
                        onMouseLeave={() => setShowInfoDropdown(false)}
                      >
                        <div className="w-auto h-auto flex flex-col gap-4 py-4 px-6 bg-white dark:bg-black shadow-xl rounded-md space-y-1">
                          <span className="w-full">
                            <a
                              href="/pricing"
                              id="pricing-l"
                              className="text-gray-500 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-500 hover:cursor-pointer transition-all"
                            >
                              Pricing
                            </a>
                          </span>
                          <span className="w-full">
                            <a
                              href="/testimonials"
                              id="testimonials-l"
                              className="text-gray-500 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-500 hover:cursor-pointer transition-all"
                            >
                              Testimonials
                            </a>
                          </span>
                          <span className="w-full">
                            <a
                              href="/experience"
                              id="experience-l"
                              className="text-gray-500 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-500 hover:cursor-pointer transition-all"
                            >
                              Experience
                            </a>
                          </span>
                        </div>
                      </div>
                    )}
                  </li>
                </ul>
              </div>

              <a href="/">
                <img
                  src="/images/Balinga-Photogrphy-png-1.png"
                  className="w-56 h-auto hidden dark:inline-block"
                  alt="Balinga Photography"
                />
                <img
                  src="/images/Balinga-Photogrphy-png-white.png"
                  className="w-56 h-auto inline-block dark:hidden"
                  alt="Balinga Photography"
                />
              </a>

              <div className="navbar-links w-1/2">
                <ul className="flex gap-4">
                  <li>
                    <a
                      href="/client-area"
                      id="galleries-l"
                      className="text-gray-600 dark:text-gray-200"
                    >
                      Galleries
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog"
                      id="blog-l"
                      className="text-gray-600 dark:text-gray-200"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      id="contact-l"
                      className="text-gray-600 dark:text-gray-200"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      href="/videos"
                      id="videos-l"
                      className="text-gray-600 dark:text-gray-200"
                    >
                      Videos
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
