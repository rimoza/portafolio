import React from "react";
import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";

const SocialIcons = () => {
  return (
    <div className="absolute top-64 ml-3 hidden md:block bg-white drop-shadow-md p-5 rounded-md">
      <a
        href="https://www.linkedin.com/in/ridwan-mohamed-363477161/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin className="text-5xl text-primary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mb-3" />
      </a>
      <a href="https://twitter.com/rimoza_10" target="_blank" rel="noreferrer">
        <BsTwitter className="text-5xl text-primary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mb-3" />
      </a>
      <a href="https://github.com/rimoza" target="_blank" rel="noreferrer">
        <BsGithub className="text-5xl text-primary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
      </a>
    </div>
  );
};

export default SocialIcons;
