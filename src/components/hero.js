import React from "react";
import developer from "../images/developer.svg";

function Hero() {
  return (
    <div className="text-white grid h-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
      <div className="sm:hidden md:block lg:block xl:block">
        <p className="text-md mb-2">Hello!</p>
        <h1 className="text-6xl text-rosepink mb-6">I&apos;m Sachin</h1>
        <p className="mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum fuga
          provident nemo quas ad laudantium corporis nobis possimus nihil error,
          voluptatum tempore odio esse! Unde sunt fugit earum esse quidem.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-lightgreen rounded-sm py-3 px-4 text-lg">
            Hire Me
          </button>
          <button className="block border border-white rounded-sm py-3 px-4 text-lg">
            Resume
          </button>
        </div>
      </div>
      <div className="sm:hidden md:block lg:block xl:block">
        <img alt="developer coding" src={developer} />
      </div>
    </div>
  );
}

export default Hero;
