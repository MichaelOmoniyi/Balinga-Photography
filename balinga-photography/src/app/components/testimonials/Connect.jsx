import React from "react";
import Image from "next/image";
import Btn from "./Btn";

const Connect = () => {
  return (
    <div className="section_ md:grid md:grid-cols-2 md:grid-rows-4 md:h-[calc(100vh)] gap-4">
      <div className="transitionEffect scale-110 opacity-0 col-start-1 row-start-1">
        <h1 className="font-mono text-base font-semibold mb-4 md:mb-0">
          Let's Get to Know Each Other
        </h1>
      </div>
      <div className="transitionEffect scale-110 opacity-0 w-full h-[calc(100vw)] md:h-full mb-4 md:mb-0 md:col-start-2 md:row-span-4">
        <Image
          src="/images/portfolio/traditional-wedding/1/IMG_2616.jpg"
          width={500}
          height={500}
          quality={100}
          unoptimized
          className="w-full h-full object-cover"
          alt="traditional wedding photograph"
        />
      </div>
      <div className="mb-4 md:mb-0 md:col-start-1 md:row-start-2">
        <p className="transitionEffect scale-110 opacity-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
          voluptates esse neque enim, ratione officiis vel voluptatibus
          excepturi commodi molestias nemo veritatis quos nesciunt eaque
          adipisci repellat consequuntur doloribus doloremque?
        </p>
      </div>
      <div className="mb-4 md:mb-0 md:col-start-1 md:row-start-3">
        <p className="transitionEffect scale-110 opacity-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
          voluptates esse neque enim, ratione officiis vel voluptatibus
          excepturi commodi molestias nemo veritatis quos nesciunt eaque
          adipisci repellat consequuntur doloribus doloremque?
        </p>
      </div>
      <div className="w-full h-full md:col-start-1 md:row-start-4">
        <p className="transitionEffect scale-110 opacity-0 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
          voluptates esse neque enim, ratione officiis vel voluptatibus
          excepturi commodi molestias nemo veritatis quos nesciunt eaque
          adipisci repellat consequuntur doloribus doloremque?
        </p>
        <div>
          <Btn text={"BOOK YOUR DATE"} href={"/contact"} />
        </div>
      </div>
    </div>
  );
};

export default Connect;
