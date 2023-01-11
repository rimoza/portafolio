import React from "react";
import Skills from "../Skills";
import { skills } from "../../dummyData";
import Container from "../Container/Container";

const AboutMe = () => {
  return (
    <div className="my-48">
      <Container>
      <div>
        <hr />
        <h1 className="my-2 text-center text-4xl text-blue-500 font-semibold py-2 rounded-md">
          ABOUT ME
        </h1>
        <hr />
      </div>
        <div className="text-center">
          <div>
            <p className="text-center text-2xl text-gray-400 mt-5 mb-10">
              Here you will find more information about me, what I do, and my
              current skills mostly in terms of programming and technology
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-10 md:pt-10">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold mb-4">Get to know me!</h2>
            <div className="leading-7 text-md text-gray-500 font-semibold">
              <p className="mb-5">
                I&apos;m a <strong>Frontend Web Developer</strong> building the
                Front-end of Websites and Web Applications that leads to the
                success of the overall product. Check out some of my work in the{" "}
                <strong>Projects </strong>
                section.
              </p>
              <p>
                I&apos;m open to <strong>Job</strong> opportunities where I can
                contribute, learn and grow. If you have a good opportunity that
                matches my skills and experience then don&apos;t hesitate to{" "}
                <strong>contact</strong> me.
              </p>
              <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                <a
                  href="#projects"
                  className="px-7 py-3 w-full bg-primary text-white text-center rounded-md shadow-md block sm:w-auto"
                >
                  PROJECTS
                </a>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">My Skills</h1>
            <Skills skills={skills} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutMe;
