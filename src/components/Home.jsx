import React from "react";
import {Link} from "react-router-dom";
export default function Home() {
  return (
    <div className="bg-neutralSilver max-h-screen h-screen" id="home">
      <div className="flex flex-col justify-center items-center md:flex-row-reverse md:justify-between px-4 lg:px-20 py-24">
        <img
          src="/assets/Illustration.png"
          alt="icons"
          // className="w-3/4 md:w-2/6"
          className="h-72 w-full md:w-2/5 md:h-full"
        />
        <div className="space-y-4 md:space-y-6">
          <h2 className="text-4xl lg:text-6xl font-bold text-brandSecondary">
            Lessons and insights
            <br />
            <span className="text-brandPrimary"> from 8 years</span>
          </h2>
          <p className="text-neutralDarkGray">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="px-4 py-3 rounded-md bg-brandPrimary text-neutralWhite hover:bg-opacity-80 transition-all duration-300">
            <Link to="/signup"> Get Started</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
