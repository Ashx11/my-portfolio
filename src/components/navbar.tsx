import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Force smooth scrolling to a section
  const scrollToSection = (id: string) => {
    setIsOpen(false); // Close menu if open
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 50, // Adjust for navbar height
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="bg-white shadow-md ">
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
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-800 hover:text-black transition duration-300 py-2 focus:outline-none"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-gray-800 hover:text-black transition duration-300 py-2 focus:outline-none"
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-gray-800 hover:text-black transition duration-300 py-2 focus:outline-none"
            >
              Experience
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-800 hover:text-black transition duration-300 py-2 focus:outline-none"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-800 hover:text-black transition duration-300 py-2 focus:outline-none"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;