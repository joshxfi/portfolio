const description = "A freelance software developer based in the Phillippines.";

const imgUrl =
  "https://user-images.githubusercontent.com/69457996/177263828-e87560af-7d5f-4cdd-b8bc-b28ad7654e7a.png";

const seoConfig = {
  title: "Josh Daniel Bañares",
  description,
  openGraph: {
    type: "website",
    url: "https://joshxfi.tech",
    title: "Josh Daniel Bañares",
    description,
    images: [
      {
        url: imgUrl,
        width: 800,
        height: 600,
        alt: "profile",
        type: "image/jpeg",
      },
      {
        url: imgUrl,
        width: 900,
        height: 800,
        alt: "profile alt",
        type: "image/jpeg",
      },
      {
        url: imgUrl,
      },
    ],
    site_name: "Josh Daniel Bañares",
  },
  twitter: {
    cardType: "summary_large_image",
  },
};

export default seoConfig;
