import React from "react";

const Process = () => {
  return (
    <div class="section_ overflow-hidden">
      <h2 class="transitionEffect scale-110 opacity-0 mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
        How does this work?
      </h2>
      <div
        class="accordion-group grid pt-10 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2 lg:grid-cols-4 gap-4"
        data-accordion="default-accordion"
      >
        <div class="transitionEffect scale-110 opacity-0 mb-10">
          <div>
            <span className="text-gray-500 dark:text-gray-400">01</span>
            <h3 className="my-4 text-lg font-medium text-gray-900 dark:text-white">
              Fill out the form
            </h3>
          </div>
          <p class="text-gray-500 dark:text-gray-400">
            Whenever you’re ready, just fill out the contact form. I’ll get back
            to you too as soon as possible so we can iron out the details of
            your session!
          </p>
        </div>
        <div class="transitionEffect scale-110 opacity-0 mb-10">
          <div>
            <span className="text-gray-500 dark:text-gray-400">02</span>
            <h3 className="my-4 text-lg font-medium text-gray-900 dark:text-white">
              Connect
            </h3>
          </div>
          <p class="text-gray-500 dark:text-gray-400">
            Before we meet for the session, we’ll have a quick call to break the
            ice and decide on the details. I want you to feel comfortable with
            me and this will help us both!
          </p>
        </div>
        <div class="transitionEffect scale-110 opacity-0 mb-10">
          <div>
            <span className="text-gray-500 dark:text-gray-400">03</span>
            <h3 className="my-4 text-lg font-medium text-gray-900 dark:text-white">
              The D-day
            </h3>
          </div>
          <p class="text-gray-500 dark:text-gray-400">
            On the day of the shoot, we’ll meet up and get to the location of
            the session. We’ll talk for a bit while I set up my camera and make
            sure everything’s perfect. Then we can jump straight into it and get
            some amazing photos!
          </p>
        </div>
        <div class="transitionEffect scale-110 opacity-0 mb-10">
          <div>
            <span className="text-gray-500 dark:text-gray-400">04</span>
            <h3 className="my-4 text-lg font-medium text-gray-900 dark:text-white">
              Gallery Delivery
            </h3>
          </div>
          <p class="text-gray-500 dark:text-gray-400">
            After we're done, I'll get to work editing the photos. The finished
            photos will be ready and delivered in 1 to 2 business weeks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Process;
