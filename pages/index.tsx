import React from 'react';

import Hero from "../components/Hero";
import ProjectList from "../components/Projects/ProjectList";
import AboutMe from "../components/About";
import { projects } from '../dummyData';


export default function Home() {
  return (
    <>
      <Hero />
      <section>
        <AboutMe />
      </section>
      <ProjectList projects={projects} />
    </>
  );
}
