import React from "react";

export default function Testimonial() {
  return (
    <div
      id="testimonialial"
      className="px-4 lg:px-20 py-5 text-center space-y-5">
      <h2 className="text-2xl lg:text-4xl font-semibold text-brandSecondary">
        Caring is the new marketing
      </h2>
      <p>
        The Nextcent blog is the best place to read about the latest membership
        insights, trends and more. See how joining the community, read about how
        our community are increasing their membership income and lots more.
      </p>
      <h2 className="text-2xl lg:text-3xl font-semibold text-brandSecondary">
        Pellentesque suscipit <br /> fringilla libero eu.
      </h2>
      <button className="px-4 py-3 rounded-md bg-brandPrimary text-neutralWhite hover:bg-opacity-80 transition-all duration-300">
        Get a Demo {">>"}
      </button>
    </div>
  );
}
