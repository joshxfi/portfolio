import React from "react";
import { Navbar } from "./Navbar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative mx-auto w-[90%] lg:max-w-screen-lg max-w-screen-md xl:w-full">
      <div className="absolute w-full">
        <Navbar />
      </div>
      {children}
    </main>
  );
};
