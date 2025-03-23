"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const navbarLinks = document.querySelectorAll(
      "#home, #about, #info, #gallaries, #blog, #contact, #videos, #home-l, #about-l, #info-l, #gallaries-l, #blog-l, #contact-l, #videos-l"
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
    });
  }, [pathname]);

  // useEffect(() => {
  //   const body = document.getElementsByTagName("body")

  //   if (isOpen) {
  //     body.style = "overflow: hidden;"
  //   }
  // }, [])

  return (
    <div>
      <header>
        <nav>
          <div className="navbar-mobile">
            <div className="nav-display">
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
                  src="images/Balinga-Photogrphy-png-1.png"
                  className="w-56 h-auto"
                  alt="Daniel home"
                />
                {/* <h1 className="h1">Balinga Photography</h1> */}
              </a>
            </div>
            <div
              className={`navbar-extend ${isOpen ? "show" : "hidden"}`}
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
              <div className="navbar-links">
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
                  <li>
                    <a id="info" href="/info">
                      Info
                    </a>
                  </li>
                  <li>
                    <a id="gallaries" href="/gallaries">
                      Gallaries
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

          <div className="navbar-lg">
            <div className="nav-display justify-between gap-8 lg:gap-16">
              <div className="navbar-links w-1/2">
                <ul>
                  <li>
                    <a href="/home" id="home-l">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/about" id="about-l">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="/info" id="info-l">
                      Info
                    </a>
                  </li>
                </ul>
              </div>
              <a href="/">
                <img
                  src="images/Balinga-Photogrphy-png-1.png"
                  className="w-56 h-auto"
                  alt="Daniel home"
                />
              </a>
              <div className="navbar-links w-1/2">
                <ul>
                  <li>
                    <a href="/galleries" id="gallaries-l">
                      Gallaries
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
