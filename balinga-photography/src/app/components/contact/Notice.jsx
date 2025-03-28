import React from "react";
import useZoomEffect from "@/app/Hooks/useZoomEffect";

const Notice = () => {
  useZoomEffect(".transitionEffect");

  return (
    <div className="w-full py-8 md:flex md:flex-col md:items-center">
      <h2 className="transitionEffect text-2xl font-bold text-center mb-4 dark:text-white scale-110 opacity-0">
        Notice!!!
      </h2>
      <div className="md:w-4/5 flex flex-col gap-2 md:text-xl text-gray-400 dark:text-gray-100">
        <p className="transitionEffect scale-110 opacity-0">
          <span className="text-gray-500 dark:text-gray-200 font-bold">
            Please read this:
          </span>{" "}
          Your story matters. Connection is everything. It’s the key to creating
          images that feel natural, authentic, and full of life. My top priority
          is to make sure you feel comfortable, relaxed, and genuinely yourself
          in front of the camera. When that happens, the magic unfolds
          effortlessly, and we capture something that truly{" "}
          <span className="text-gray-500 dark:text-gray-200 font-bold">
            lingers.
          </span>
        </p>
        <p className="transitionEffect scale-110 opacity-0">
          I know this form might seem a bit long, but trust me, every detail
          helps me understand your vision better. Here’s what you can expect
          after filling it out:
        </p>
        <ul className="list-disc pl-8 text-gray-500 dark:text-gray-200 font-bold">
          <li className="transitionEffect scale-110 opacity-0">
            I respond within hours, not days.
          </li>
          <li className="transitionEffect scale-110 opacity-0">
            We’ll set up a quick call, video chat, or in-person meeting to
            discuss your needs.
          </li>
          <li className="transitionEffect scale-110 opacity-0">
            Expect a fully customized experience. Your session will be tailored
            just for you.
          </li>
          <li className="transitionEffect scale-110 opacity-0">
            To lock in your date, I ask for a deposit. Once that’s done, you can
            officially check “photographer” off your list!
          </li>
        </ul>
        <p className="transitionEffect scale-110 opacity-0">
          Let’s create something amazing together!
        </p>
      </div>
    </div>
  );
};

export default Notice;
