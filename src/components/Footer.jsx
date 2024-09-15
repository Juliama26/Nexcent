import React from "react";

export default function Footer() {
  const setTahun = new Date().getFullYear();
  const items1 = [
    {name: "About us"},
    {name: "Blog"},
    {name: "Contact us"},
    {name: "Pricing"},
    {name: "Testimonials"},
  ];
  const items2 = [
    {name: "Help center"},
    {name: "Terms of service"},
    {name: "Legal"},
    {name: "Privacy policy"},
    {name: "Status"},
  ];
  return (
    <footer className="flex flex-col-reverse md:flex-row justify-between px-4 lg:px-20 py-8 bg-brandSecondary text-neutralWhite">
      <section className="space-y-3 md:space-y-5">
        <section className="hidden md:flex items-center space-x-3">
          <img src="/assets/Icon.png" alt="logo" className="h-8 md:h-10" />
          <h2 className="text-2xl md:text-3xl font-semibold">Nextcent</h2>
        </section>
        <p className="pt-5 md:pt-0">
          Copyright © {setTahun} Nexcent ltd. All rights reserved
        </p>
      </section>
      <section className="grid grid-cols-2 md:grid-cols-3">
        <section className="space-y-3">
          <h3 className="font-semibold">Company</h3>
          <ul className="space-y-2 opacity-70">
            {items1.map((item) => (
              <li key={item.name}>{item.name}</li>
            ))}
          </ul>
        </section>
        <section className="space-y-3">
          <h3 className="font-semibold">Support</h3>
          <ul className="space-y-2 opacity-70">
            {items2.map((item) => (
              <li key={item.name}>{item.name}</li>
            ))}
          </ul>
        </section>
        <section className="space-y-3">
          <h3 className="font-semibold">Stay up to date</h3>
          <input
            type="email"
            placeholder="Your email address"
            className="px-4 py-2 rounded-md outline-none bg-neutralWhite text-neutralDarkGray"
          />
        </section>
      </section>
    </footer>
  );
}
