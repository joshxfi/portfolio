/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/roadmap",
        destination:
          "https://joshxfi.notion.site/Front-end-Roadmap-0b680067078b4884a0628d342058be07",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
