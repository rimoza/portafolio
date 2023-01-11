import React from "react";
import Container from '../Container/Container';

const Hero = () => {
  return (
    <div className='bg-base-100 pb-24 md:pb-48'>
    <Container>
      <section className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8 bg-black py-10">
      <div className="space-y-4 flex-1 sm:text-center lg:text-left">
        <h1 className="text-white font-bold text-4xl xl:text-5xl">
          HELLO THERE, I&apos;M 
          <span className="text-primary mt-1"> RIDWAN MOHAMED</span>
        </h1>
        <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product
        </p>
        <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
          <a
            href="#projects"
            className="px-7 py-3 w-full bg-white text-gray-800 text-center rounded-md shadow-md block sm:w-auto"
          >
            PROJECTS
          </a>
        </div>
      </div>
      <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
        <img
          src="https://i.postimg.cc/HxHyt53c/undraw-heatmap-uyye.png"
          className="w-full mx-auto sm:w-10/12  lg:w-full"
        />
      </div>
    </section>
    </Container>
    </div>
  );
};

export default Hero;
