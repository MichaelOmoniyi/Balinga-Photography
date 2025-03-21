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

const Footer = () => {
  const pathname = usePathname()
  
    useEffect(() => {
      const FooterLinks = document.querySelectorAll("#home, #about, #info, #gallaries, #blog, #contact, #videos");
      FooterLinks.forEach((link) => {
        link.classList.remove("active");
        if (pathname.includes(link.getAttribute("href"))) {
          link.classList.add("active");
        } else {
          FooterLinks[0].classList.add("active");
        }
      });
    }, [pathname]);

  return (
    <div>
      <footer>
        <div class="container">
          <div class="footer-links">
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
          <div className="sub-footer">
            <div className="icons">
              <a href="https://www.facebook.com/share/18jzqifpAY/">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://x.com/Danrewaju?s=09">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://www.instagram.com/balinga_?utm_source=qr&igsh=MTkxbjZmOWJmanFydQ==">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              {/* <a href="">
                <FontAwesomeIcon icon={faPinterest} />
              </a> */}
              <a href="https://youtube.com/@balingaphotography?si=5yYd_vkstkEUFTP7">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
            <div className="copyright">@ 2024 Balinga</div>
            <div className="go-up">
              <FontAwesomeIcon icon={faArrowUp} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
