// import { Inter } from "@next/font/google";

import Hero from "../components/Hero";
import ProjectList from "../components/Projects/ProjectList";
import SkillList from "../components/Skills";
import { projects } from '../dummyData';
import { skills } from "../dummyData";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <div className="my-10 mx-10 md:mx-0">
        <hr />
        <h1 className="my-2 text-center text-4xl text-blue-500 font-semibold py-2 rounded-md">
          Projects
        </h1>
        <hr />
      </div>
      <ProjectList projects={projects} />
      <section className="p-24">
      <div className="my-10 mx-10 md:mx-0">
        <hr />
        <h1 className="my-2 text-center text-4xl text-blue-500 font-semibold py-2 rounded-md">
          Skills
        </h1>
        <hr />
      </div>
        <SkillList skills={skills} />
      </section>
    </>
  );
}
