import Head from "next/head";
import Container from "../components/Container/Container";
// import { Inter } from "@next/font/google";

import Hero from "../components/Hero";
import ProjectList from "../components/Projects/ProjectList";
import projects from "../dummyData";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ridwan Mohamed</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mb-10"></div>
      <Hero />
      <Container>
        <div className="my-10 mx-10 md:mx-0">
          <hr />
          <h1 className="my-2 text-center text-4xl text-white font-semibold py-2 rounded-md bg-blue-500">Projects</h1>
          <hr />
        </div>
        <ProjectList projects = {projects} />
      </Container>
      <div className="mb-10"></div>
    </>
  );
}
