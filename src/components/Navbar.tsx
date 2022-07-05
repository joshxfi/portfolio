import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

export const Navbar = () => {
  const navIcons = [
    {
      Icon: FaGithubSquare,
      href: "https://github.com/joshxfi",
    },
    {
      Icon: FaLinkedin,
      href: "https://www.linkedin.com/in/joshdanielb",
    },
    {
      Icon: FaTwitterSquare,
      href: "https://twitter.com/joshxfi",
    },
  ];

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
        {navIcons.map(({ Icon, href }) => (
          <li key={href} className="nav-item">
            <a href={href} target="_blank" rel="noreferrer noopener">
              <Icon />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
