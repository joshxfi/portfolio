import React from "react";
import { Navbar } from "./Navbar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="max-w-screen-lg mx-auto w-[90%] xl:w-full">
      <Navbar />
      {children}
    </main>
  );
};
