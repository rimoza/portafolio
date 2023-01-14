import React from 'react';
import { createClient } from "next-sanity";

import { projects } from '../dummyData';
import Hero from "../components/Hero";
import AboutMe from "../components/About";
import Contact from '../components/Contact'
import ProjectList from "../components/Projects/ProjectList";


export default function Home({ skills }: any) {
  return (
    <>
      <Hero />
      <section>
        <AboutMe skills= {skills} />
      </section>
      <ProjectList projects={projects} />
      <Contact />
    </>
  );
}


const client = createClient({
  projectId: "8eio6dub",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false
});

export async function getStaticProps() {
  const skills = await client.fetch(`*[_type == "skills"]`);

  return {
    props: {
      skills,
    },
  };
}