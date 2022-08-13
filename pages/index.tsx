import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <section className="grid h-screen place-items-center">
      <div className="relative mt-12 flex flex-col items-end lg:flex-row">
        <h1 className="font-syne absolute lg:-left-10 left-0 text-7xl top-20 lg:-top-20 font-extrabold text-secondary-100 lg:text-[280px]">
          I&apos;m
        </h1>

        <div className="lg:hidden -mb-8">
          <Image
            priority
            src='/assets/pfp.jpg'
            alt="profile"
            width={150}
            height={150}
            objectFit="cover"
            className="rounded grayscale"
          />
        </div>

        <div className="z-10 lg:mr-4 mb-8 text-right">
          <h1 className="text-6xl font-bold lg:-mr-20 lg:text-9xl">
            Josh Daniel
          </h1>
          <h2 className="font-syne text-xs tracking-widest lg:text-base lg:leading-6">
            FREELANCE SOFTWARE DEVELOPER <br /> BASED IN BACOLOD CITY,
            PHILIPPINES
          </h2>

          <div className="group lg:mt-6 mt-4 inline-block rounded border border-primary transition-all hover:border-secondary">
            <button
              type="button"
              className="font-syne translate-x-[-0.3rem] translate-y-[-0.3rem] transform rounded border-2 border-secondary bg-primary px-12 py-2 text-sm text-secondary-200 transition-all group-hover:translate-x-0 group-hover:translate-y-0 lg:text-base"
            >
              Hit me up!
            </button>
          </div>
        </div>

        <div className="hidden lg:block">
          <Image
            priority
            src='/assets/pfp.jpg'
            alt="profile"
            width={350}
            height={350}
            objectFit="cover"
            className="rounded grayscale"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
