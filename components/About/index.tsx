import React from "react";
import Link from 'next/link';

import Skills from "../Skills";
import Heading from "../UI/Heading";
import { ISkills } from "../../types";
import classes from './About.module.css';
import Container from "../Container/Container";
import Button from "../UI/Button/Button";

const AboutMe = ({ skills }: { skills: ISkills[] }) => {
  return (
    <div className={classes.about_wrapper} id='about'>
      <Container>
        <Heading>ABOUT ME</Heading>
        <div className="text-center">
          <div>
            <p className={classes.about_title}>
              Here you will find more information about me, what I do, and my
              current skills mostly in terms of programming and technology
            </p>
          </div>
        </div>
        <div className={classes.about_grid}>
          <div className="max-w-md">
            <h2 className={classes.bottom_title}>Get to know me!</h2>
            <div className={classes.left_text}>
              <p className="mb-5">
                I&apos;m a <strong>Frontend Web Developer</strong> building the
                Front-end of Websites and Web Applications that leads to the
                success of the overall product. Check out some of my work in the {" "}
                <strong>Projects </strong>
                section.
              </p>
              <p>
                I&apos;m open to <strong>Job</strong> opportunities where I can
                contribute, learn and grow. If you have a good opportunity that
                matches my skills and experience then don&apos;t hesitate to {" "}
                <strong>contact</strong> me.
              </p>
              <div className="hidden md:inline-block mt-10">
                <Link
                  href="#contact"
                >
                  <Button className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:text-primary bg-primary hover:bg-white focus:outline-none focus:ring active:bg-primary sm:w-auto">Contact Me</Button>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h1 className={classes.bottom_title}>My Skills</h1>
            <Skills skills={skills} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutMe;
