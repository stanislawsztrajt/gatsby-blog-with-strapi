import React from "react";
import Header from "./header";

export default function layout({ children }) {
  return (
    <>
      <Header />

      <div className="flex items-center justify-center w-full mt-20">
        <div className="w-full p-4 lg:3/4 xl:w-2/3 2xl:w-7/12">{children}</div>
      </div>
    </>
  );
}
