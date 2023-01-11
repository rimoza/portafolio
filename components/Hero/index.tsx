import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero my-24 h-1/2">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold">HELLO THERE I&apos;M RIDWAN MOHAMED</h1>
          <p className="py-6">
          A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product
          </p>
          <button className="btn btn-primary">PROJECTS</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
