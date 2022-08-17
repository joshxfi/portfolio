import { ImageFill } from "@/components";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <section className="grid h-screen place-items-center">
      <div className="relative mt-12 flex flex-col items-end lg:flex-row">
        <h1 className="absolute left-0 top-20 font-syne text-7xl font-extrabold text-secondary-100 md:top-44 md:text-8xl lg:-left-10 lg:-top-20 lg:text-[280px]">
          I&apos;m
        </h1>

        <ImageFill
          priority
          src="/assets/pfp.jpg"
          alt="profile"
          className="-mb-8 h-[150px] w-[150px] rounded grayscale md:h-[250px] md:w-[250px] lg:hidden"
        />

        <div className="z-20 mb-8 text-right lg:mr-4">
          <h1 className="text-6xl font-bold md:text-8xl lg:-mr-20 lg:text-9xl">
            Josh Daniel
          </h1>
          <h2 className="font-syne text-xs tracking-widest md:text-sm lg:text-base lg:leading-6">
            FREELANCE SOFTWARE DEVELOPER <br /> BASED IN BACOLOD CITY,
            PHILIPPINES
          </h2>

          <div className="hover:border-secondary group mt-4 inline-block rounded border border-primary transition-all lg:mt-6">
            <a
              href="mailto:joshxfi.dev@gmail.com"
              className="border-secondary block translate-x-[-0.3rem] translate-y-[-0.3rem] transform rounded border-2 bg-primary px-12 py-2 font-syne text-sm text-secondary-200 transition-all group-hover:translate-x-0 group-hover:translate-y-0 md:text-base"
            >
              Hit me up!
            </a>
          </div>
        </div>

        <div className="group relative hidden h-[350px] w-[350px] lg:block">
          <div className="absolute z-10 flex h-full w-full scale-50 items-end rounded bg-secondary-200 p-8 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-80">
            <p className="font-inter font-semibold">
              Howdy! This portfolio is under development 🚧
            </p>
          </div>

          <ImageFill
            priority
            src="/assets/pfp.jpg"
            alt="profile"
            className="-mb-8 h-full w-full rounded grayscale"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
