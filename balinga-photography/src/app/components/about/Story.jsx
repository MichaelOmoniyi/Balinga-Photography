import React from "react";
import useZoomEffect from "@/app/Hooks/useZoomEffect";

const Story = () => {
  useZoomEffect(".transitionEffect");

  return (
    <div className="px-5 md:px-20 lg:px-40">
      <h1 className="transitionEffect text-gray-600 dark:text-white text-center font-bold mb-6 scale-110 opacity-0">
        IT'S A FUN READ
      </h1>
      <div className="flex flex-col gap-6 text-gray-400 dark:text-gray-100">
        <p className="transitionEffect scale-110 opacity-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ad. Ipsa
          odit doloremque laboriosam ratione cumque placeat quam quaerat dicta
          hic, reiciendis consequuntur ab accusamus expedita. Nemo voluptate a
          labore!
        </p>
        <p className="transitionEffect scale-110 opacity-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
          laborum consequatur possimus dolores placeat necessitatibus. Sunt
          maxime vero debitis excepturi inventore nisi consequatur aperiam qui
          impedit corporis. Quam, doloremque repellendus.
        </p>
        <p className="transitionEffect scale-110 opacity-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
          repellendus id voluptates quos sunt tempore nisi neque, facilis
          delectus temporibus. Sapiente nihil similique corporis! Saepe harum id
          veniam molestiae fugit!
        </p>
        <p className="transitionEffect scale-110 opacity-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat error,
          aliquid provident tempore nostrum perferendis pariatur reiciendis
          voluptatem odio? Consequatur, fugiat. Cupiditate asperiores, dolorum
          doloribus suscipit neque accusantium fugit natus.
        </p>
      </div>
    </div>
  );
};

export default Story;
