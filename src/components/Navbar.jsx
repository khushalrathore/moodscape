import { useState, useEffect } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import "../index.css"; 

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsFixed(offset > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <nav className={`w-full flex py-6 justify-between items-center navbar ${isFixed ? 'fixed' : ''}`}>
      <img src={logo} alt="hoobank" className="w-[175.9px] h-[37.32px]" />

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "fixed inset-0 p-6 bg-black-gradient min-h-screen min-w-screen justify-end items-start flex-1 flex-col"
          } rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col items-end">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-orange-600" : "text-black"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => {
                  setActive(nav.title);
                  setToggle(false); // Close the mobile navbar on item click
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
