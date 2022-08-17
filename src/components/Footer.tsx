import React from "react";

export const Footer = () => {
  const footerItems = [
    {
      name: "Socials",
      items: [
        {
          name: "GitHub",
          url: "https://github.com/joshxfi",
        },
        {
          name: "Twitter",
          url: "https://twitter.com/joshxfi",
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com/josh.xfi",
        },
      ],
    },
    {
      name: "Contact",
      items: [
        {
          name: "Email",
          url: "mailto:joshxfi.dev@gmail.com",
        },
        {
          name: "Discord",
          url: "https://discord.gg/bQKG7axhcF",
        },
      ],
    },
  ];
  return (
    <footer className="pb-12">
      <div className="mb-12 h-[1px] bg-secondary-50" />

      <div className="flex justify-between font-inter">
        {footerItems.map((item) => (
          <div key={item.name}>
            <p className="mb-5 font-medium">{item.name}</p>

            <ul className="space-y-3 text-secondary-50">
              {item.items.map((i) => (
                <li
                  key={i.name}
                  className="transition-colors hover:text-secondary-50/75"
                >
                  <a href={i.url} target="_blank" rel="noreferrer noopener">
                    {i.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <p className="text-secondary-50">
          Josh Daniel Bañares © 2022 All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
