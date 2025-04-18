import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterest,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Links = () => {
  return (
    <div className="main-bg bg-slate-50 pl-4 pr-4 pb-16 lg:pl-40 lg:pr-40">
      <div className="heroImage absolute top-0 left-0 z-0">
        <div className="bg-darken w-full h-full bg-black opacity-45"></div>
      </div>
      <main>
        <div className="profile w-full relative z-10 flex flex-col justify-center items-center text-white pt-28">
          <div className="profileImg w-28 h-28 rounded-full bg-slate-50 dark:bg-gray-700 mb-4 lg:mb-10"></div>
          <h1 className="text-3xl mb-1 lg:mb-3">Balinga</h1>
          <p>Photographer & Creator</p>
        </div>
        <div className="sub-bg bg-slate-100 shadow-lg w-full relative flex flex-col justify-center items-center rounded-md mt-6 lg:mt-20 pt-6 pr-4 pb-24 pl-4">
          <div className="w-full flex justify-around items-center gap-2 text-gray-800 dark:text-white pr-6 pl-6 md:pr-40 md:pl-40 lg:pr-80 lg:pl-80 md:pt-10 md:pb-10">
            <a href="https://www.facebook.com/share/18jzqifpAY/">
              <i className="fab fa-facebook-f text-2xl hover:text-gray-400 transition duration-300"></i>
            </a>
            <a href="https://x.com/Danrewaju?s=09">
              <i className="fab fa-twitter text-2xl hover:text-gray-400 transition duration-300"></i>
            </a>
            <a href="https://www.instagram.com/balinga_?utm_source=qr&igsh=MTkxbjZmOWJmanFydQ==">
              <i className="fab fa-instagram text-2xl hover:text-gray-400 transition duration-300"></i>
            </a>
            {/* <a href=""><i className="fab fa-pinterest text-2xl hover:text-gray-400 transition duration-300"></i></a> */}
            <a href="https://youtube.com/@balingaphotography?si=5yYd_vkstkEUFTP7">
              <i className="fab fa-youtube text-2xl hover:text-gray-400 transition duration-300"></i>
            </a>
          </div>

          <div className="links flex flex-col gap-4 md:gap-6 justify-center text-center text-xl text-gray-800 dark:text-white font-medium mt-6">
            <a href="/links">BOOKING & ENQUIRY</a>
            {/* <a href="/links">EDITORIAL WEDDING SHOOT</a> */}
            {/* <a href="/links">MARCH CLASS</a> */}
            <a href="/links">PORTFOLIO</a>
            {/* <a href="/links">LR PRESETS</a> */}
            <a href="/links">JOIN THE COMMUNITY (WHATSAPP GROUP)</a>
            <a href="/links">MY GEAR BOX</a>
            <a href="https://youtube.com/@balingaphotography?si=5yYd_vkstkEUFTP7">
              SUBSCRIBE TO MY CHANNEL (FREE CLASS)
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Links;
