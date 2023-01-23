import Link from "next/link";
import React from "react";
import SocialIcons from "../SocialIcons/SocialIcons";
import Button from "../UI/Button/Button";

const Hero = () => {
  return (
    <section className="bg-base-100 text-gray-700 relative dark:text-white">
      <div className="absolute top-64 ml-3 hidden md:block bg-white drop-shadow-md p-5 rounded-md">
      <SocialIcons className="text-5xl mb-3" />
      </div>
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center md:-mt-48">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            HELLO THERE, I&apos;M
            <span className="sm:block"> RIDWAN MOHAMED </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
            I&apos;m a frontend web developer with a passion for crafting
            beautiful, user-friendly digital experiences. Let&apos;s create
            something amazing together!
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="#projects"
            >
              <Button className="block w-full rounded border border-blue-600 bg-primary px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"> PROJECTS</Button>
            </Link>

            <Link
              href="#contact"
            >
              <Button className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-primary hover:text-white bg-white hover:bg-primary focus:outline-none focus:ring active:bg-primary sm:w-auto">CONTACT ME</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
