import { IBlogPostData, IProjects } from "../types";

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

export const articlesData: IBlogPostData[] = [
  {
    id: "article-1",
    title: "How to Make the Perfect Cup of Coffee",
    author: "Ridwan Mohamed",
    datePublished: "2022-12-01",
    featuredImage: "/images/box3.png",
    category: "Coffee",
    tags: ["coffee", "brewing", "tips"],
    content: {
      introduction: "Making the perfect cup of coffee takes more than just brewing coffee beans. It requires attention to detail and a proper understanding of the brewing process.",
      body: "Week 1-2: Start by gradually increasing your mileage each week, focusing on building up your endurance. Aim to run 3-4 times per week for 30-45 minutes at a time. Week 3-4: Incorporate interval training into your routine. Alternate between running at a moderate pace for 1 minute and sprinting for 30 seconds. Week 5-6: Increase the length of your runs to 1 hour. Start incorporating hills into your runs to build strength. Week 7-8: Taper your mileage in the final two weeks to allow your body to rest and recover. During this time, focus on shorter, faster runs to maintain your speed.",
      steps: [
        {
          stepNumber: 1,
          instruction: "Choose the right coffee beans. Look for high-quality, freshly roasted coffee beans.",
        },
        // ... other steps ...
      ],
      conclusion: "By following these steps, you can make the perfect cup of coffee every time. Remember to experiment with different coffee beans and brewing methods to find the combination that works best for you.",
    },
  },
  // ... other articles ...
];