import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [nav, setNav] = useState(false);
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    // Extract the current section from the URL path
    const path = location.pathname;
    setCurrentSection(path);
  }, [location]);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "Home", path: "/" },
    { id: 2, text: "Projects", path: "/project" },
    { id: 3, text: "Blogs", path: "/blog" },
    { id: 4, text: "Skills", path: "/skills" },
    { id: 5, text: "About", path: "/about" },
  ];

  return (
    <div className="bg-black flex font-medium justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">DZ.</h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className={`p-4 hover:bg-[#579DFF] rounded-xl m-2 cursor-pointer duration-300 hover:text-white ${
              currentSection === item.path ? "bg-[#00df9a]" : ""
            }`}
          >
            <Link to={item.path} className="nav-link">
              {item.text}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "z-10 fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : " z-50 ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">DZ.</h1>
        {navItems.map((item) => (
          <li
            key={item.id}
            className={`p-4 border-b rounded-xl hover:bg-[#579DFF] duration-300 hover:text-black cursor-pointer border-gray-600 ${
              currentSection === item.path ? "bg-[#00df9a]" : ""
            }`}
          >
            <Link to={item.path} className="nav-link">
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
