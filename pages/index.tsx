// import { Inter } from "@next/font/google";

import Hero from "../components/Hero";
import ProjectList from "../components/Projects/ProjectList";
import AboutMe from "../components/About";
import { projects } from '../dummyData';
// const inter = Inter({ subsets: ["latin"] });

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
