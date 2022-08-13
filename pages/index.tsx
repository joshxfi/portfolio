import { ImageFill } from "@/components";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <section className="grid h-screen place-items-center">
      <div className="relative mt-12 flex flex-col items-end lg:flex-row">
        <h1 className="absolute left-0 top-20 font-syne text-7xl font-extrabold text-secondary-100 lg:-left-10 lg:-top-20 lg:text-[280px]">
          I&apos;m
        </h1>

        <ImageFill
          priority
          src="/assets/pfp.jpg"
          alt="profile"
          className="-mb-8 h-[150px] w-[150px] rounded grayscale lg:hidden"
        />

        <div className="z-10 mb-8 text-right lg:mr-4">
          <h1 className="text-6xl font-bold lg:-mr-20 lg:text-9xl">
            Josh Daniel
          </h1>
          <h2 className="font-syne text-xs tracking-widest lg:text-base lg:leading-6">
            FREELANCE SOFTWARE DEVELOPER <br /> BASED IN BACOLOD CITY,
            PHILIPPINES
          </h2>

          <div className="hover:border-secondary group mt-4 inline-block rounded border border-primary transition-all lg:mt-6">
            <button
              type="button"
              className="border-secondary translate-x-[-0.3rem] translate-y-[-0.3rem] transform rounded border-2 bg-primary px-12 py-2 font-syne text-sm text-secondary-200 transition-all group-hover:translate-x-0 group-hover:translate-y-0 lg:text-base"
            >
              Hit me up!
            </button>
          </div>
        </div>

        <ImageFill
          priority
          src="/assets/pfp.jpg"
          alt="profile"
          className="hidden h-[350px] w-[350px] rounded grayscale lg:block"
        />
      </div>
    </section>
  );
};

export default Home;
