"use client"
import React from "react";
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
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="w-full h-[calc(100vh-7rem)] relative">
      <Image
        src="/images/check-out-img-1.jpg"
        width={500}
        height={500}
        quality={100}
        priority
        unoptimized
        className="w-full h-full object-cover"
        alt="Man holding fiance's hand"
      />
      <div
        className="overlay absolute top-0 left-0 h-full w-full bg-black/20 flex hover:cursor-pointer justify-center items-center"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <h1 className="text-3xl mb-6">Making memories that linger...</h1>
        <PlayCircle size={100} />
      </div>
      <Video isOpen={isOpen} closeVideo={closeVideo} />
    </div>
  );
};

export default Hero;
