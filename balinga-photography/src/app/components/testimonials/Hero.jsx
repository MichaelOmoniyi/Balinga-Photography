"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { PlayCircle } from "lucide-react";
import Video from "./Video";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const closeVideo = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className="relative w-full h-[calc(100vh-7rem)]">
      <Image
        src="/images/img-sub.png"
        width={500}
        height={500}
        quality={100}
        unoptimized
        className="w-full h-full object-cover"
        alt="client photograph"
      />
      <div
        className="overlay absolute top-0 left-0 h-full w-full bg-black/20 flex hover:cursor-pointer justify-center items-center"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <PlayCircle size={100} />
      </div>
      <Video isOpen={isOpen} closeVideo={closeVideo} />
    </div>
  );
};

export default Hero;
