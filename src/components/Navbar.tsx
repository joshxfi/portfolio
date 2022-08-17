import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { FaGithubSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

export const Navbar = () => {
  const navIcons = [
    {
      Icon: FaGithubSquare,
      href: "https://github.com/joshxfi",
    },
    {
      Icon: FaInstagramSquare,
      href: "https://instagram.com/josh.xfi",
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
          <li key={t} className="text-secondary-50 hover:text-secondary-50/80 text-lg transition-colors">
            <a href="#">{t}</a>
          </li>
        ))}
      </ul>

      <ul className="flex space-x-16 text-2xl md:text-3xl">
        {navIcons.map(({ Icon, href }) => (
          <li key={href} className="hover:text-primary/80 transition-colors">
            <a href={href} target="_blank" rel="noreferrer noopener">
              <Icon />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
