import React from 'react';

import { projects } from '../dummyData';
import Hero from "../components/Hero";
import AboutMe from "../components/About";
import Contact from '../components/Contact'
import ProjectList from "../components/Projects/ProjectList";


export default function Home() {
  return (
    <>
      <Hero />
      <section>
        <AboutMe />
      </section>
      <ProjectList projects={projects} />
      <Contact />
    </>
  );
}
