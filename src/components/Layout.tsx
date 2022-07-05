import React from "react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="max-w-screen-xl mx-auto w-[90%] md:w-full">
      {children}
    </main>
  );
};
