import React from "react";

export default function Product() {
  const items = [
    "/assets/Logo.png",
    "/assets/Logo(1).png",
    "/assets/Logo(2).png",
    "/assets/Logo(3).png",
    "/assets/Logo(4).png",
    "/assets/Logo(5).png",
  ];
  return (
    <div id="product" className="min-h-screen">
      <div className="flex flex-col md:flex-row md:gap-x-5 items-center px-4 lg:px-20 ">
        <img
          src="/assets/pana.png"
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
      <div className="flex flex-col md:flex-row md:gap-x-14 items-center px-4 lg:px-20 py-3 bg-neutralSilver ">
        <img
          src="/assets/image 9.png"
          alt="icon-frame"
          className="h-72 w-2/3 md:h-full md:w-full"
        />
        <article className="space-y-2">
          <p className="text-neutralDarkGray">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <h3 className="text-brandPrimary text-xl font-semibold">Tim Smith</h3>
          <p className="text-neutralDarkGray">
            British Dragon Boat Racing Association
          </p>
          <ul className="flex gap-x-5">
            {items.map((item, index) => (
              <li key={index}>
                <img src={item} alt="logo" className="h-7" />
              </li>
            ))}
            <h6 className="md:pl-20 text-brandPrimary font-semibold cursor-pointer">
              Meet all {">>"}
            </h6>
          </ul>
        </article>
      </div>
    </div>
  );
}
