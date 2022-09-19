import React from "react";

const HeroSection = () => {
  return (
    <div className="container min-w-full heroIMG -translate-y-9 mx-auto my-auto py-6">
      <div className="flex flex-wrap items-center justify-around scroll-py-9">
        <img
          className="object-scale-down rounded-full p-2 max-w-md shadow-sm"
          src="https://img.freepik.com/free-vector/flat-design-portrait-with-abstract-shapes_23-2149133363.jpg?w=740&t=st=1663592469~exp=1663593069~hmac=a03cddfa589c6321f06ea97bdceffc0029f7fca099c1cd549a8edea94f25f74f"
          alt="Me"
        />
        <div className="text-center align-middle backdrop-blur-xl backdrop-opacity-50 bg-blend-difference">
          <h1 className="text-6xl p-2">Hi, I am Jane Doe</h1>
          <p className="text-right text-xl">Welcome to my world!</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
