import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-4 py-3">
        {/* Burger Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 text-xl focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isOpen
              ? "flex flex-col space-y-4 items-center w-full mt-4"
              : "hidden"
          } md:flex md:flex-row md:space-x-8 md:items-center md:justify-center md:w-full`}
        >
          <li>
            <a
              href="#about"
              className="text-gray-800 hover:text-black transition duration-300 py-2"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-gray-800 hover:text-black transition duration-300 py-2"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="text-gray-800 hover:text-black transition duration-300 py-2"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-gray-800 hover:text-black transition duration-300 py-2"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-800 hover:text-black transition duration-300 py-2"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
