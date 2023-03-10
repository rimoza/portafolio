import React from "react";

import client from "../api/sanityClient";

import Hero from "../components/Hero";
import AboutMe from "../components/About";
import Contact from "../components/Contact";
import { ISkills, IProjects } from "../types";
import ProjectList from "../components/Projects/Projects/ProjectList";

export default function Home({ skills, projects }: { skills: ISkills[], projects: IProjects[] }) {
  return (
    <div>
      <Hero />
      <section>
        <AboutMe skills={skills} />
      </section>
      <ProjectList projects={projects} />
      <Contact />
    </div>
  );
}

export async function getStaticProps() {
  const skills = await client.fetch(`*[_type == "skills"]`);
  const projects = await client.fetch(`*[_type == "projects"]`);
  return {
    props: {
      skills,
      projects,
    },
  };
}
