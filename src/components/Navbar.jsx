import * as React from "react";
import {Link} from "react-router-dom";
import {FiAlignRight, FiX} from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [stiky, setSticky] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    setOpen(!open);
  };

  const menuItems = [
    {name: "Home", link: "#home"},
    {name: "Service", link: "#service"},
    {name: "Feature", link: "#feature"},
    {name: "Product", link: "#product"},
    {name: "Testimonial", link: "#testimonialial"},
  ];

  return (
    <header className="w-full bg-neutralWhite md:bg-transparent fixed top-0 left-0 right-0">
      <nav
        className={`py-4 px-4 lg:px-20 ${
          stiky
            ? "sticky top-0 right-0 left-0 border-b bg-neutralWhite transition-all duration-300"
            : ""
        }`}>
        <div className="flex justify-between items-center gap-x-8 cursor-pointer">
          <section className="text-2xl font-semibold flex items-center space-x-3">
            {/* <Link
              to="home"
              className="text-2xl font-semibold flex items-center space-x-3"> */}
            <img
              src="/assets/Icon.png"
              alt="logo-nexcent"
              className="w-10 inline-block items-center"
            />
            <span className="text-brandSecondary">Nexcent</span>
            {/* </Link> */}
          </section>
          {/* desktop menu */}
          <ul className="md:flex space-x-12 hidden">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="block text-brandSecondary hover:text-brandPrimary transition-all duration-300">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* btn menu */}
          <div className="space-x-12 hidden lg:flex items-center">
            <Link
              to="/login"
              className="text-brandPrimary hover:text-brandSecondary transition-all duration-300">
              Login
            </Link>
            <button className="px-4 py-2 rounded-md bg-brandPrimary text-neutralWhite hover:bg-opacity-80 transition-all duration-300">
              <Link to="/signup">Sign up</Link>
            </button>
          </div>

          {/* mobile menu btn only */}
          <div className="md:hidden">
            <button onClick={handleClick} className="text-brandSecondary">
              {open ? <FiX size={25} /> : <FiAlignRight size={25} />}
            </button>
          </div>
        </div>
        {/* mobile menu */}
        <div
          className={`space-y-3 px-5 mt-16 py-5 bg-brandPrimary ${
            open ? "block fixed top-0 left-0 right-0" : "hidden"
          }`}>
          {menuItems.map((item, index) => (
            <a
              href={item.link}
              key={index}
              className="block text-neutralWhite hover:text-brandSecondary transition-all duration-300">
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
