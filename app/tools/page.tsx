import React from "react";
import {
  FaReact,
  FaNode,
  FaDatabase,
  FaFigma,
  FaAws,
  FaGitAlt,
} from "react-icons/fa";

interface Tool {
  id: number;
  name: string;
  description: string;
  icon: React.ElementType;
}

const tools: Tool[] = [
  {
    id: 1,
    name: "React",
    description: "A JavaScript library for building user interfaces",
    icon: FaReact,
  },
  {
    id: 2,
    name: "Node.js",
    description: "JavaScript runtime built on Chrome's V8 JavaScript engine",
    icon: FaNode,
  },
  {
    id: 3,
    name: "MongoDB",
    description:
      "A source-available cross-platform document-oriented database program",
    icon: FaDatabase,
  },
  {
    id: 4,
    name: "Figma",
    description: "A vector graphics editor and prototyping tool",
    icon: FaFigma,
  },
  {
    id: 5,
    name: "AWS",
    description: "On-demand cloud computing platforms and APIs",
    icon: FaAws,
  },
  {
    id: 6,
    name: "Git",
    description: "Distributed version control system",
    icon: FaGitAlt,
  },
];

const ToolsPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">Tools Stack</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tools.map((tool) => (
          <div
            key={tool.id}
            className="bg-white shadow rounded-lg p-6 flex items-center"
          >
            <div className="flex-shrink-0 mr-4 text-primary">
              <tool.icon size={36} />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">{tool.name}</h2>
              <p className="text-gray-600">{tool.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsPage;
