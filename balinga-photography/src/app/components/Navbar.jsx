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
      "#home, #about, #info, #galleries, #blog, #contact, #videos, #pricing, #testimonials, #experience, #home-l, #about-l, #info-l, #galleries-l, #blog-l, #contact-l, #videos-l, #pricing-l, #testimonials-l, #experince-l"
    );
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

      if (galleryPattern.test(pathname)) {
        navbarLinks[2].classList.add("active");
        navbarLinks[10].classList.add("active-ls");
      }

      if (infoPattern.test(pathname)) {
        navbarLinks[3].classList.add("active");
        navbarLinks[9].classList.add("active-ls");
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
            className={`navbar-mobile transition-transform duration-1000 ${
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
                  <span className="nav-toggler-icon" id="hamburger"></span>
                </label>
              </div>
              <a href="/" className="navbar-brand">
                <img
                  src="/images/Balinga-Photogrphy-png-1.png"
                  className="w-56 h-auto"
                  alt="Balinga Photography"
                />
              </a>
            </div>

            <div
              className={`navbar-extend md:px-10 ${isOpen ? "show" : "hidden"}`}
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
                    className="nav-toggler-icon-extend"
                    id="hamburger"
                  ></span>
                </label>
              </div>

              <div className="navbar-links md:text-xl">
                <ul>
                  <li>
                    <a id="home" href="/">
                      Home
                    </a>
                  </li>
                  <li>
                    <a id="about" href="/about">
                      About
                    </a>
                  </li>
                  <li className="relative">
                    <button
                      onClick={() => setShowInfoDropdown((prev) => !prev)}
                      id="info"
                      className="w-full"
                    >
                      Info
                    </button>
                    {showInfoDropdown && (
                      <ul className="dropdown ml-4 mt-2">
                        <li>
                          <a href="/pricing" id="pricing">Pricing</a>
                        </li>
                        <li>
                          <a href="/testimonials" id="testimonials">Testimonials</a>
                        </li>
                        <li>
                          <a href="/experience" id="experience">Experience</a>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <a id="galleries" href="/client-area">
                      Galleries
                    </a>
                  </li>
                  <li>
                    <a id="blog" href="/blog">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a id="contact" href="/contact">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a id="videos" href="/videos">
                      Videos
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* LARGE SCREEN NAV */}
          <div
            className={`navbar-lg transition-transform duration-1000 ${
              isVisible ? "translate-y-0" : "-translate-y-24"
            }`}
          >
            <div className="nav-display justify-between gap-8 lg:gap-16">
              <div className="navbar-links w-1/2">
                <ul className="flex gap-4">
                  <li>
                    <a href="/" id="home-l">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/about" id="about-l">
                      About
                    </a>
                  </li>
                  <li
                    className="relative group"
                    onMouseEnter={() => setShowInfoDropdown(true)}
                    onMouseLeave={() => setShowInfoDropdown(false)}
                  >
                    <button
                      id="info-l"
                      className="focus:outline-none"
                      onClick={(e) => e.preventDefault()} // prevent accidental clicks
                    >
                      Info
                    </button>
                    {showInfoDropdown && (
                      <ul
                        className="dropdown-lg absolute top-full left-0 bg-white shadow-xl rounded-sm space-y-1"
                        onMouseEnter={() => setShowInfoDropdown(true)}
                        onMouseLeave={() => setShowInfoDropdown(false)}
                      >
                        <li>
                          <a href="/pricing" id="pricing-l">Pricing</a>
                        </li>
                        <li>
                          <a href="/testimonials" id="testimonials-l">Testimonials</a>
                        </li>
                        <li>
                          <a href="/experience" id="experience-l">Experience</a>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              </div>

              <a href="/">
                <img
                  src="/images/Balinga-Photogrphy-png-1.png"
                  className="w-56 h-auto"
                  alt="Balinga Photography"
                />
              </a>

              <div className="navbar-links w-1/2">
                <ul className="flex gap-4">
                  <li>
                    <a href="/client-area" id="galleries-l">
                      Galleries
                    </a>
                  </li>
                  <li>
                    <a href="/blog" id="blog-l">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="/contact" id="contact-l">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="/videos" id="videos-l">
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
