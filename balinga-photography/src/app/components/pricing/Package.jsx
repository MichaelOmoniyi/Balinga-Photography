import React from "react";
import Image from "next/image";
import Btn from "./Btn";

const Package = () => {
  return (
    <div className="enclosedSectionFirst bg-black dark:bg-slate-200 text-slate-50 dark:text-gray-600 overflow-hidden">
      <h1 className="transitionEffect scale-110 opacity-0 font-mono uppercase text-center text-lg mb-6 lg:mb-12">
        Wedding Photography package
      </h1>
      <div className="md:grid md:grid-rows-4 md:grid-cols-2">
        <div className="transitionEffect scale-110 opacity-0 md:pl-8 lg:pl-20 md:row-start-1 md:col-start-2 md:flex md:justify-center md:items-center">
          <h1 className="text-center text-3xl font-medium font-serif mb-2 md:mb-0">
            One Easy Choice
          </h1>
        </div>
        <div className="mb-6 md:col-start-1 md:row-span-3 md:mb-0">
          <Image
            src="/images/portfolio/traditional-wedding/1/IMG_2616.jpg"
            width={500}
            height={500}
            quality={100}
            unoptimized
            className="transitionEffect scale-110 opacity-0 w-full h-[calc(100vw)] lg:h-[calc(100vh-9rem)] object-cover mb-2"
          />
        </div>
        <div className="transitionEffect scale-110 opacity-0 md:row-start-4 md:col-span-2 md:px-14 lg:px-28 w-full text-center flex items-center">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nisi
            cum dolore accusamus earum dolorum officia voluptatibus distinctio
            dolores et, amet quod, nulla ipsa iure molestias nostrum voluptatum,
            tempora quibusdam expedita enim. Numquam, architecto illo. Possimus
            quod omnis voluptas totam quos? Quos eum, et nemo dolorem quae
            explicabo iure eaque molestiae, unde consequuntur ipsa officia
            dolorum.
          </p>
        </div>
        <div className="font-bold text-lg p-5 md:pl-8 lg:pl-20 md:row-start-2 md:col-start-2 md:flex md:flex-col md:justify-between md:py-0">
          <div>
            <ul className="list-disc mb-2">
              <li className="transitionEffect scale-110 opacity-0">
                Photography
              </li>
              <li className="transitionEffect scale-110 opacity-0">
                Videography
              </li>
            </ul>
            <ul className="list-disc mb-2">
              <li className="transitionEffect scale-110 opacity-0">
                20 Page Album
              </li>
              <li className="transitionEffect scale-110 opacity-0">
                Hi-Resolution Images
              </li>
              <li className="transitionEffect scale-110 opacity-0">
                Hi-Resolution Video
              </li>
            </ul>
          </div>
          <div>
            <p className="transitionEffect scale-110 opacity-0 text-slate-50 dark:text-gray-950 text-center">
              Starting at $3000
            </p>
          </div>
        </div>
        <div className="md:row-start-3 md:col-start-2 p-5 md:pl-8 lg:pl-20 text-center transitionEffect scale-110 opacity-0">
          <Btn text={"Book Now"} href={"/contact"} />
        </div>
      </div>
    </div>
  );
};

export default Package;
