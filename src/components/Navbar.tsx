import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className="mt-8 flex items-center justify-between">
      <button className="text-2xl md:text-3xl lg:hidden">
        <BiMenuAltLeft />
      </button>
      <ul className="hidden space-x-16 lg:flex">
        <li className="text-xl">!XFI</li>
        {["About", "Projects", "Contact"].map((t) => (
          <li key={t} className="nav-item">
            <a href="#">{t}</a>
          </li>
        ))}
      </ul>

      <ul className="flex space-x-16 text-2xl md:text-3xl">
        {[FaGithubSquare, FaLinkedin, FaTwitterSquare].map((Icon) => (
          <li key={Icon.toString()} className="nav-item">
            <a href="#">
              <Icon />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
