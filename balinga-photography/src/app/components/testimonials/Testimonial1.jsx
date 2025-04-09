import React from "react";
import TesimonialFrame from "./TestimonialFrame";
import data from "@/app/data/testimonials";

const Testimonial1 = () => {
  return (
    <div className="section md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.slice(0, 6).map((testimonial) => (
        <TesimonialFrame
          key={testimonial.id}
          img={testimonial.img}
          title={testimonial.title}
          description={testimonial.description}
        />
      ))}
    </div>
  );
};

export default Testimonial1;
