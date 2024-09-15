import React from "react";
import {Clients} from "./Elements/Items";

export default function Service() {
  const items = [
    "/assets/Logo.png",
    "/assets/Logo(1).png",
    "/assets/Logo(2).png",
    "/assets/Logo(3).png",
    "/assets/Logo(4).png",
    "/assets/Logo(5).png",
  ];
  return (
    <div id="service" className="px-4 lg:px-20 py-10 space-y-10">
      <div className="space-y-4 text-center">
        <h1 className="text-2xl lg:text-4xl font-bold text-brandSecondary">
          Our Clients
        </h1>
        <p className="text-neutralDarkGray">
          We have been working with some Fortune 500+ clients
        </p>
        <div className="flex justify-around py-5 cursor-pointer">
          {items.map((item, index) => (
            <img src={item} alt="items" key={index} />
          ))}
        </div>
      </div>
      <div className="space-y-4 text-center">
        <h1 className="text-2xl lg:text-4xl font-bold text-brandSecondary">
          Manage your entire community <br /> in a single system
        </h1>
        <p className="text-neutralDarkGray">
          We have been working with some Fortune 500+ clients
        </p>

        <div className="md:flex md:justify-around md:gap-x-5 py-5 space-y-5 md:space-y-0 cursor-pointer">
          <Clients
            img="/assets/client (1).png"
            alt="items"
            h3="Membership Organisations"
            p="Our membership management software provides full automation of membership renewals and payments"
          />
          <Clients
            img="/assets/client (2).png"
            alt="items"
            h3="National Associations"
            p=" Our membership management software provides full automation of membership renewals and payments"
          />
          <Clients
            img="/assets/client (3).png"
            alt="items"
            h3="Clubs And Groups"
            p=" Our membership management software provides full automation of membership renewals and payments"
          />
        </div>
      </div>
    </div>
  );
}
