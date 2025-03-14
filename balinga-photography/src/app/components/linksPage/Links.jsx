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
    <div className="main-bg pl-4 pr-4 pb-16 lg:pl-40 lg:pr-40">
      <div className="heroImage absolute top-0 left-0 z-0">
        <div className="bg-darken w-full h-full bg-black opacity-45"></div>
      </div>
      <main>
        <div className="profile w-full relative z-10 flex flex-col justify-center items-center text-white pt-14">
          <div className="profileImg w-28 h-28 rounded-full bg-gray-700 mb-4 lg:mb-10"></div>
          <h1 className="text-3xl mb-1 lg:mb-3">Balinga</h1>
          <p>Photographer & Creator</p>
        </div>
        <div className="sub-bg w-full relative flex flex-col justify-center items-center rounded-md mt-6 lg:mt-20 pt-6 pr-4 pb-24 pl-4">
          <div className="w-full flex justify-around items-center gap-2 text-white pr-6 pl-6 md:pr-40 md:pl-40 lg:pr-80 lg:pl-80 md:pt-10 md:pb-10">
            <i className="fab fa-facebook-f text-2xl hover:text-gray-400 transition duration-300"></i>
            <i className="fab fa-twitter text-2xl hover:text-gray-400 transition duration-300"></i>
            <i className="fab fa-instagram text-2xl hover:text-gray-400 transition duration-300"></i>
            <i className="fab fa-pinterest text-2xl hover:text-gray-400 transition duration-300"></i>
            <i className="fab fa-youtube text-2xl hover:text-gray-400 transition duration-300"></i>
          </div>

          <div className="links flex flex-col gap-4 md:gap-6 justify-center text-center text-xl text-white font-medium mt-6">
            <a href="/links">BOOKING & ENQUIRY</a>
            <a href="/links">EDITORIAL WEDDING SHOOT</a>
            <a href="/links">MARCH CLASS</a>
            <a href="/links">PORTFOLIO</a>
            <a href="/links">LR PRESETS</a>
            <a href="/links">JOIN THE COMMUNITY (WHATSAPP GROUP)</a>
            <a href="/links">MY GEAR BOX</a>
            <a href="/links">SUBSCRIBE TO MY CHANNEL (FREE CLASS)</a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Links;
