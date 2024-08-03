import { IProjects } from "../types";

export const projects: IProjects[] = [
  {
    id: "project-1",
    name: "Project 1",
    title: "Everything I Know About Style Guides, Design Systems, and Component Libraries",
    description: "Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.",
    image: "/images/box1.png",
    websiteUrl: "https://example.com/project1",
    type: "website",
    imageUrl: "/images/box1.png",
  },
  // ... repeat for other projects
];

export const skills = [
  { name: "JavaScript", level: 4 },
  { name: "Html", level: 4 },
  { name: "Css", level: 5 },
  { name: "TypeScript", level: 4 },
  { name: "React", level: 3 },
  { name: "Next.js", level: 5 },
  { name: "Tailwind CSS", level: 4 },
];