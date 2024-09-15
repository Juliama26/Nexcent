import React from "react";
import {Helping} from "./Elements/Items";

export default function Feature() {
  return (
    <>
      <div
        id="feature"
        className="flex flex-col md:flex-row md:gap-x-5 items-center px-4 lg:px-20">
        <img
          src="/assets/Frame 35.png"
          alt="icon-frame"
          className="h-72 md:h-full"
        />
        <article className="space-y-4">
          <h2 className="text-2xl lg:text-4xl font-semibold text-brandSecondary">
            How to design your site footer like we did
          </h2>
          <p className="text-neutralDarkGray">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <button className="px-4 py-3 rounded-md bg-brandPrimary text-neutralWhite hover:bg-opacity-80 transition-all duration-300">
            Learn more
          </button>
        </article>
      </div>
      <div className="px-4 lg:px-20 py-10 md:flex md:justify-around space-y-5 bg-neutralSilver">
        <div className="space-y-2">
          <h2 className="text-2xl lg:text-4xl font-semibold text-brandSecondary">
            Helping a local
          </h2>
          <h2 className="text-2xl lg:text-4xl font-semibold text-brandPrimary">
            business reinvent itself
          </h2>
          <p>We reached here with our hard work and dedication</p>
        </div>
        <div className="flex gap-x-10">
          <section className="space-y-5">
            <Helping
              img="/assets/helping (1).png"
              alt="helping"
              span="Member"
              p="2,245,341"
            />
            <Helping
              img="/assets/helping (2).png"
              alt="helping"
              span="Event Booking"
              p="4,225,541"
            />
          </section>
          <section className="space-y-5">
            <Helping
              img="/assets/helping (3).png"
              alt="helping"
              span="Clubs"
              p="265,942"
            />
            <Helping
              img="/assets/helping (4).png"
              alt="helping"
              span="Payments"
              p="6,225,367"
            />
          </section>
        </div>
      </div>
    </>
  );
}
